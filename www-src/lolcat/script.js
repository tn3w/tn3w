let translations = {};
let dbInstance = null;

const DB_NAME = 'LolcatDB';
const DB_VERSION = 1;
const STORE_NAME = 'translations';
const CACHE_KEY = 'lolcat-mappings-v1';

async function openDB() {
    if (dbInstance) return dbInstance;

    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            dbInstance = request.result;
            resolve(dbInstance);
        };
        request.onupgradeneeded = (event) => {
            const database = event.target.result;
            if (!database.objectStoreNames.contains(STORE_NAME)) {
                database.createObjectStore(STORE_NAME);
            }
        };
    });
}

async function getFromDB(key) {
    const database = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = database.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(key);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
}

async function saveToDB(key, value) {
    const database = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = database.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put(value, key);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
    });
}

async function loadTranslations() {
    const cached = await getFromDB(CACHE_KEY);

    if (cached) {
        translations = cached;
        return;
    }

    const response = await fetch('lolcat-mappings.json.gz');
    const blob = await response.blob();
    const decompressedStream = blob.stream().pipeThrough(new DecompressionStream('gzip'));
    const text = await new Response(decompressedStream).text();
    const data = JSON.parse(text);

    translations = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key.toLowerCase(), value])
    );

    saveToDB(CACHE_KEY, translations);
}

loadTranslations();

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function translateWord(word, lookup) {
    const lowerWord = word.toLowerCase();
    const translated = lookup[lowerWord];

    if (!translated) return null;
    return translated;
}

function translateSegment(segment, lookup, allowMultiWord) {
    if (!segment.trim()) return segment;

    const match = segment.match(/^([^\w\s]*)(\w+)([^\w\s]*)$/);
    if (!match) return segment;

    const [, prefix, word, suffix] = match;
    const translated = translateWord(word, lookup);

    if (translated && (allowMultiWord || !translated.includes(' '))) {
        return prefix + translated + suffix;
    }

    return segment;
}

function translatePhrases(text, lookup) {
    let result = text;
    const sortedKeys = Object.keys(lookup)
        .filter((key) => key.includes(' '))
        .sort((a, b) => b.length - a.length);

    for (const key of sortedKeys) {
        const regex = new RegExp('\\b' + escapeRegex(key) + '\\b', 'gi');
        result = result.replace(regex, lookup[key]);
    }

    return result;
}

function translate(text, toLolcat = true) {
    if (!text) return '';

    const parts = text.split(/(<.*?>)/);
    const lookup = toLolcat ? translations : reverseTranslations;

    return parts
        .map((part) => {
            if (part.startsWith('<')) return part;

            let result = part;

            if (!toLolcat) {
                result = translatePhrases(result, reverseTranslations);
            }

            return result
                .split(/(\s+)/)
                .map((segment) => translateSegment(segment, lookup, toLolcat))
                .join('');
        })
        .join('');
}

const swapButton = document.getElementById('swap');
const tagLeft = document.getElementById('tag-left');
const tagRight = document.getElementById('tag-right');
const leftInput = document.getElementById('left');
const rightInput = document.getElementById('right');

let leftIsEnglish = true;
let reverseTranslations = {};
let isReady = false;

const PRIORITY_WORDS = new Set([
    'are',
    'you',
    'your',
    'the',
    'to',
    'can',
    'have',
    'has',
    'please',
    'my',
    'me',
    'i',
    'am',
    'is',
    'be',
    'do',
    'does',
    'did',
    'will',
    'would',
    'could',
    'should',
    'what',
    'when',
    'where',
    'why',
    'how',
]);

leftInput.disabled = true;
rightInput.disabled = true;
leftInput.placeholder = 'Loading...';
rightInput.placeholder = 'Loading...';

async function buildReverseLookup() {
    await loadTranslations();

    const entries = Object.entries(translations);

    for (const [key, value] of entries) {
        const lowerValue = value.toLowerCase();
        const lowerKey = key.toLowerCase();

        if (!reverseTranslations[lowerValue] || PRIORITY_WORDS.has(lowerKey)) {
            reverseTranslations[lowerValue] = key;
        }
    }

    isReady = true;
    leftInput.disabled = false;
    rightInput.disabled = false;
    leftInput.placeholder = 'Type here...';
    rightInput.placeholder = 'Translation appears here...';
}

buildReverseLookup();

function detectLanguage(text) {
    if (!text.trim()) return 'unknown';

    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    if (words.length === 0) return 'unknown';

    let lolcatScore = 0;
    let englishScore = 0;
    const sampleSize = Math.min(15, words.length);

    for (let i = 0; i < sampleSize; i++) {
        const word = words[i];
        const isInLolcat = reverseTranslations[word] !== undefined;
        const isInEnglish = translations[word] !== undefined;

        if (isInLolcat) {
            lolcatScore += 2;
            if (reverseTranslations[word] !== word) lolcatScore += 1;
        }

        if (isInEnglish) {
            englishScore += 2;
            if (translations[word] !== word) englishScore += 1;
        }
    }

    if (lolcatScore < 3 && englishScore < 3) return 'unknown';
    if (lolcatScore > englishScore) return 'lolcat';
    if (englishScore > lolcatScore) return 'english';

    return 'unknown';
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function updateSides(text, isLeft) {
    const detected = detectLanguage(text);

    if (isLeft && detected === 'lolcat' && leftIsEnglish) {
        leftIsEnglish = false;
        tagLeft.textContent = 'LOL';
        tagRight.textContent = 'EN';
        rightInput.value = translate(text, false);
        return;
    }

    if (isLeft && detected === 'english' && !leftIsEnglish) {
        leftIsEnglish = true;
        tagLeft.textContent = 'EN';
        tagRight.textContent = 'LOL';
        rightInput.value = translate(text, true);
        return;
    }

    if (!isLeft && detected === 'english' && leftIsEnglish) {
        leftIsEnglish = false;
        tagLeft.textContent = 'LOL';
        tagRight.textContent = 'EN';
        leftInput.value = translate(text, true);
        return;
    }

    if (!isLeft && detected === 'lolcat' && !leftIsEnglish) {
        leftIsEnglish = true;
        tagLeft.textContent = 'EN';
        tagRight.textContent = 'LOL';
        leftInput.value = translate(text, false);
    }
}

const debouncedDetect = debounce(updateSides, 800);

leftInput.addEventListener('input', (event) => {
    if (!isReady) return;
    const text = event.target.value;
    rightInput.value = translate(text, leftIsEnglish);
    debouncedDetect(text, true);
});

rightInput.addEventListener('input', (event) => {
    if (!isReady) return;
    const text = event.target.value;
    leftInput.value = translate(text, !leftIsEnglish);
    debouncedDetect(text, false);
});

swapButton.addEventListener('click', () => {
    [leftInput.value, rightInput.value] = [rightInput.value, leftInput.value];
    leftIsEnglish = !leftIsEnglish;
    tagLeft.textContent = leftIsEnglish ? 'EN' : 'LOL';
    tagRight.textContent = leftIsEnglish ? 'LOL' : 'EN';
});

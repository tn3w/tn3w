const translations = {
    en: {
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',

        available: 'Available for collaboration',
        greeting: "Hello, I'm",
        tagline: 'Privacy Advocate & Open Source Developer',
        location: 'Germany',
        role: 'Security Engineer',
        'focus-short': 'Privacy & Security',
        description:
            'Self-taught developer passionate about digital privacy, security, and open source. I build tools that protect online freedom — from VPN detection systems to Tor protocol implementations.',
        contact: 'Get in Touch',
        'view-work': 'View My Work',

        'stat-projects': 'Open Source Projects',
        'stat-stars': 'GitHub Stars',
        'stat-languages': 'Programming Languages',
        'stat-location': 'Based in Germany',

        'section-skills': 'Skills',
        'skills-title': 'Tech Stack & Expertise',
        'skills-subtitle': 'Technologies I work with to build secure, privacy-focused applications',
        languages: 'Languages',
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        'beginner-intermediate': 'Beginner-Intermediate',
        frameworks: 'Frameworks & Tools',
        focus: 'Focus Areas',
        'network-security': 'Network Security',
        'network-security-desc': 'Building secure network protocols and detection systems',
        'tor-protocol': 'Tor Protocol',
        'tor-protocol-desc': 'Implementing and enhancing Tor-based privacy tools',
        cryptography: 'Cryptography',
        'cryptography-desc': 'End-to-end encryption and secure communications',
        'privacy-tools': 'Privacy Tools',
        'privacy-tools-desc': 'Creating tools that protect digital freedom',

        'section-projects': 'Projects',
        'featured-projects': 'Featured Projects',
        'projects-subtitle': 'Open source tools for privacy, security, and digital freedom',
        'ip-security': 'IP Security & Detection',
        'bot-protection': 'Bot Protection & Security',
        'stem-rs-desc':
            'Complete Rust library for Tor control protocol — build privacy-focused applications with type-safe, async-first APIs',
        'vanguards-desc':
            'Enhanced security for Tor hidden services — protect against guard discovery attacks with persistent vanguard relay selection',
        'oniondock-desc':
            'Turnkey solution for deploying web applications as Tor hidden services with enhanced security, reliability and performance',
        'protonvpn-desc':
            'Auto-updated list of IP addresses from ProtonVPN — the widely used privacy-focused VPN provider',
        'ipset-desc':
            'Comprehensive IP address categorization and lookup tool — collects addresses from VPN providers, Tor exit nodes, datacenter ASNs',
        'tunnelbear-desc': 'Auto-updated list of IP addresses from TunnelBear VPN',
        'humanify-desc':
            'Strong bot protection system for Flask — rate limiting, web crawler detection, and automatic bot detection',
        'trueclick-desc':
            'Open source, GDPR-compliant protection against robots using human confirmation and Proof of Work',
        'authgenius-desc':
            'Advanced account and authorization system for Flask-based web applications',
        'lyriq-mini': 'Lyrics fetcher',
        'ddns-mini': 'Dynamic DNS',
        'redux-mini': 'Encrypted URL shortener',
        'ytlevelup-mini': 'Browser extension',
        'view-all': 'View All Projects',

        'section-contact': 'Contact',
        'get-in-touch': "Let's Connect",
        'contact-text':
            "Interested in collaborating on privacy-focused projects or have questions? I'd love to hear from you.",
        status: 'Status',

        'footer-tagline': 'Building tools for digital freedom',
        'made-with': 'Made with',
        'in-germany': 'in Germany',
    },
    de: {
        'nav-about': 'Über mich',
        'nav-skills': 'Fähigkeiten',
        'nav-projects': 'Projekte',
        'nav-contact': 'Kontakt',

        available: 'Offen für Zusammenarbeit',
        greeting: 'Hallo, ich bin',
        tagline: 'Datenschutz-Befürworter & Open Source Entwickler',
        location: 'Deutschland',
        role: 'Security Engineer',
        'focus-short': 'Datenschutz & Sicherheit',
        description:
            'Selbstgelernter Entwickler mit Leidenschaft für digitale Privatsphäre, Sicherheit und Open Source. Ich entwickle Tools, die die Online-Freiheit schützen — von VPN-Erkennungssystemen bis hin zu Tor-Protokoll-Implementierungen.',
        contact: 'Kontakt aufnehmen',
        'view-work': 'Meine Arbeit ansehen',

        'stat-projects': 'Open Source Projekte',
        'stat-stars': 'GitHub Sterne',
        'stat-languages': 'Programmiersprachen',
        'stat-location': 'Standort Deutschland',

        'section-skills': 'Fähigkeiten',
        'skills-title': 'Tech Stack & Expertise',
        'skills-subtitle':
            'Technologien, mit denen ich sichere, datenschutzorientierte Anwendungen entwickle',
        languages: 'Sprachen',
        expert: 'Experte',
        advanced: 'Fortgeschritten',
        intermediate: 'Mittel',
        'beginner-intermediate': 'Anfänger-Mittel',
        frameworks: 'Frameworks & Tools',
        focus: 'Schwerpunkte',
        'network-security': 'Netzwerksicherheit',
        'network-security-desc': 'Entwicklung sicherer Netzwerkprotokolle und Erkennungssysteme',
        'tor-protocol': 'Tor-Protokoll',
        'tor-protocol-desc': 'Implementierung und Verbesserung von Tor-basierten Datenschutz-Tools',
        cryptography: 'Kryptographie',
        'cryptography-desc': 'Ende-zu-Ende-Verschlüsselung und sichere Kommunikation',
        'privacy-tools': 'Datenschutz-Tools',
        'privacy-tools-desc': 'Entwicklung von Tools zum Schutz der digitalen Freiheit',

        'section-projects': 'Projekte',
        'featured-projects': 'Ausgewählte Projekte',
        'projects-subtitle': 'Open Source Tools für Datenschutz, Sicherheit und digitale Freiheit',
        'ip-security': 'IP-Sicherheit & Erkennung',
        'bot-protection': 'Bot-Schutz & Sicherheit',
        'stem-rs-desc':
            'Vollständige Rust-Bibliothek für das Tor-Kontrollprotokoll — entwickle datenschutzorientierte Anwendungen mit typsicheren, async-first APIs',
        'vanguards-desc':
            'Erhöhte Sicherheit für Tor Hidden Services — Schutz vor Guard-Discovery-Angriffen mit persistenter Vanguard-Relay-Auswahl',
        'oniondock-desc':
            'Schlüsselfertige Lösung für die Bereitstellung von Webanwendungen als Tor Hidden Services mit erhöhter Sicherheit und Leistung',
        'protonvpn-desc':
            'Automatisch aktualisierte Liste von IP-Adressen von ProtonVPN — dem weit verbreiteten datenschutzorientierten VPN-Anbieter',
        'ipset-desc':
            'Umfassendes Tool zur IP-Adress-Kategorisierung und -Suche — sammelt Adressen von VPN-Anbietern, Tor-Exit-Nodes, Datacenter-ASNs',
        'tunnelbear-desc': 'Automatisch aktualisierte Liste von IP-Adressen von TunnelBear VPN',
        'humanify-desc':
            'Starkes Bot-Schutzsystem für Flask — Rate-Limiting, Web-Crawler-Erkennung und automatische Bot-Erkennung',
        'trueclick-desc':
            'Open Source, DSGVO-konformer Schutz gegen Roboter mittels menschlicher Bestätigung und Proof of Work',
        'authgenius-desc':
            'Fortgeschrittenes Konto- und Autorisierungssystem für Flask-basierte Webanwendungen',
        'lyriq-mini': 'Lyrics-Abruf',
        'ddns-mini': 'Dynamisches DNS',
        'redux-mini': 'Verschlüsselter URL-Shortener',
        'ytlevelup-mini': 'Browser-Erweiterung',
        'view-all': 'Alle Projekte anzeigen',

        'section-contact': 'Kontakt',
        'get-in-touch': 'Lass uns verbinden',
        'contact-text':
            'Interesse an einer Zusammenarbeit bei datenschutzorientierten Projekten oder Fragen? Ich freue mich von dir zu hören.',
        status: 'Status',

        'footer-tagline': 'Tools für digitale Freiheit entwickeln',
        'made-with': 'Erstellt mit',
        'in-germany': 'in Deutschland',
    },
};

let currentLang = 'en';
let currentTheme = 'dark';

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function toggleTheme() {
    const effectiveTheme =
        document.documentElement.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    currentTheme = effectiveTheme === 'dark' ? 'light' : 'dark';
    applyTheme();
}

function initLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
    } else {
        const browserLang = navigator.language || navigator.userLanguage;
        currentLang = browserLang.startsWith('de') ? 'de' : 'en';
    }
    applyLanguage();
}

function applyLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    document.documentElement.lang = currentLang;

    document.querySelectorAll('.lang-option').forEach((opt) => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
    });

    localStorage.setItem('lang', currentLang);
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'de' : 'en';
    applyLanguage();
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initTerminal();

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

const terminalFS = {
    '/': {
        type: 'dir',
        contents: {
            home: {
                type: 'dir',
                contents: {
                    tn3w: {
                        type: 'dir',
                        contents: {
                            projects: {
                                type: 'dir',
                                contents: {
                                    'stem-rs': {
                                        type: 'file',
                                        content:
                                            'Complete Rust library for Tor control protocol\nLanguage: Rust\nStars: 1\nURL: https://github.com/tn3w/stem-rs',
                                    },
                                    'vanguards-rs': {
                                        type: 'file',
                                        content:
                                            'Enhanced security for Tor hidden services\nLanguage: Rust\nURL: https://github.com/tn3w/vanguards-rs',
                                    },
                                    OnionDock: {
                                        type: 'file',
                                        content:
                                            'Deploy web apps as Tor hidden services\nLanguage: Docker\nStars: 4\nURL: https://github.com/tn3w/OnionDock',
                                    },
                                    'flask-Humanify': {
                                        type: 'file',
                                        content:
                                            'Bot protection system for Flask\nLanguage: Python\nStars: 20\nURL: https://github.com/tn3w/flask-Humanify',
                                    },
                                    'ProtonVPN-IPs': {
                                        type: 'file',
                                        content:
                                            'Auto-updated ProtonVPN IP list\nLanguage: Python\nStars: 25\nURL: https://github.com/tn3w/ProtonVPN-IPs',
                                    },
                                    IPSet: {
                                        type: 'file',
                                        content:
                                            'IP address categorization tool\nLanguage: Python\nStars: 4\nURL: https://github.com/tn3w/IPSet',
                                    },
                                    TrueClick: {
                                        type: 'file',
                                        content:
                                            'GDPR-compliant bot protection\nLanguage: JavaScript\nStars: 1\nURL: https://github.com/tn3w/TrueClick',
                                    },
                                },
                            },
                            'skills.txt': {
                                type: 'file',
                                content:
                                    'Languages:\n  Python     ████████████░░░░ 60%\n  Rust       █████░░░░░░░░░░░ 35%\n  JavaScript ████████░░░░░░░░ 50%\n  Java       ███████░░░░░░░░░ 45%\n\nFrameworks: Flask, Actix-web, Tokio, Docker, Git, Linux\n\nFocus: Network Security, Tor Protocol, Cryptography, Privacy Tools',
                            },
                            'about.txt': {
                                type: 'file',
                                content:
                                    'TN3W - Privacy Advocate & Open Source Developer\n\nLocation: Germany\nRole: Security Engineer\nFocus: Privacy & Security\n\nSelf-taught developer passionate about digital privacy,\nsecurity, and open source. Building tools that protect\nonline freedom.',
                            },
                            'contact.txt': {
                                type: 'file',
                                content:
                                    'Email: tn3w@protonmail.com\nGitHub: https://github.com/tn3w\nPyPI: https://pypi.org/user/tn3w.dev\nCrates.io: https://crates.io/users/tn3w\nWebsite: https://tn3w.dev',
                            },
                            'interests.txt': {
                                type: 'file',
                                content:
                                    '-> Network Security\n-> Tor Protocol\n-> Cryptography\n-> Open Source\n-> Digital Privacy\n-> Secure Communications',
                            },
                            '.bashrc': {
                                type: 'file',
                                content:
                                    '# TN3W bash config\nexport PS1="tn3w@privacy:~$ "\nalias ll="ls -la"\nalias projects="ls ~/projects"',
                            },
                            '.secret': {
                                type: 'file',
                                content:
                                    'Privacy is not about having something to hide.\nIt is about having something to protect.',
                            },
                        },
                    },
                },
            },
            etc: {
                type: 'dir',
                contents: {
                    hostname: { type: 'file', content: 'privacy' },
                    'os-release': {
                        type: 'file',
                        content:
                            'NAME="Privacy OS"\nVERSION="1.0"\nID=privacy\nPRETTY_NAME="Privacy OS 1.0"',
                    },
                },
            },
            usr: {
                type: 'dir',
                contents: {
                    bin: { type: 'dir', contents: {} },
                },
            },
            var: {
                type: 'dir',
                contents: {
                    log: {
                        type: 'dir',
                        contents: {
                            syslog: {
                                type: 'file',
                                content:
                                    '[OK] Privacy services started\n[OK] Tor connection established\n[OK] Encryption enabled\n[OK] All systems secure',
                            },
                        },
                    },
                },
            },
        },
    },
};

const availableCommands = [
    'help',
    'whoami',
    'pwd',
    'ls',
    'cd',
    'cat',
    'echo',
    'clear',
    'date',
    'uname',
    'hostname',
    'uptime',
    'neofetch',
    'history',
    'tree',
    'find',
    'grep',
    'head',
    'tail',
    'wc',
    'sudo',
    'apt',
    'git',
    'curl',
    'ping',
    'ssh',
    'projects',
    'skills',
    'contact',
    'about',
    'exit',
    'man',
    'touch',
    'mkdir',
    'rm',
    'mv',
    'cp',
    'vim',
    'nano',
    'emacs',
    'cowsay',
    'fortune',
    'id',
    'env',
    'export',
    'which',
    'type',
    'alias',
    'cal',
    'bc',
    'expr',
    'base64',
    'md5sum',
    'sha256sum',
    'rev',
    'seq',
    'sleep',
    'yes',
    'factor',
    'df',
    'free',
    'ps',
    'top',
    'kill',
    'wget',
    'nslookup',
    'dig',
    'ifconfig',
    'ip',
    'netstat',
    'openssl',
    'xxd',
    'hexdump',
    'sort',
    'uniq',
    'cut',
    'awk',
    'sed',
    'tr',
    'time',
    'true',
    'false',
    'test',
    'stat',
    'file',
    'du',
    'ln',
    'chmod',
    'chown',
    'passwd',
    'useradd',
    'groupadd',
    'crontab',
    'systemctl',
    'journalctl',
    'dmesg',
    'lsblk',
    'mount',
    'lscpu',
    'lsusb',
    'lspci',
    'll',
    'la',
    'cls',
    'quit',
    'logout',
];

let currentPath = '/home/tn3w';
let commandHistory = [];
let historyIndex = -1;
let terminalOutput,
    terminalInput,
    terminalBody,
    terminalPrompt,
    terminalTitle,
    autocompleteSuggestions,
    terminalScrollArea;
let currentSuggestions = [];
let selectedSuggestion = -1;

function getPromptPath() {
    if (currentPath === '/home/tn3w') return '~';
    if (currentPath.startsWith('/home/tn3w/')) return '~' + currentPath.slice(10);
    return currentPath || '/';
}

function updatePrompt() {
    const path = getPromptPath();
    if (terminalPrompt) terminalPrompt.textContent = `tn3w@privacy:${path}$`;
    if (terminalTitle) terminalTitle.textContent = `tn3w@privacy:${path}`;
}

function initTerminal() {
    terminalOutput = document.getElementById('terminalOutput');
    terminalInput = document.getElementById('terminalInput');
    terminalBody = document.getElementById('terminalBody');
    terminalPrompt = document.getElementById('terminalPrompt');
    terminalTitle = document.getElementById('terminalTitle');
    autocompleteSuggestions = document.getElementById('autocompleteSuggestions');
    terminalScrollArea = document.getElementById('terminalScrollArea');

    if (!terminalInput || !terminalOutput) return;

    updatePrompt();
    printOutput("Welcome to TN3W's Portfolio Terminal");
    printOutput('Type "help" for available commands\n', 'info');
    executeCommand('whoami');
    executeCommand('cat interests.txt');

    terminalInput.addEventListener('keydown', handleTerminalInput);
    terminalInput.addEventListener('input', updateSuggestions);

    document.getElementById('terminal')?.addEventListener('click', (e) => {
        if (!e.target.classList.contains('autocomplete-item')) {
            terminalInput.focus();
        }
    });
}

function updateSuggestions() {
    const input = terminalInput.value;
    const parts = input.split(' ');
    currentSuggestions = [];
    selectedSuggestion = -1;

    if (parts.length === 1 && input.length > 0) {
        currentSuggestions = availableCommands
            .filter((cmd) => cmd.startsWith(input.toLowerCase()))
            .map((cmd) => ({ name: cmd, isDir: false, isCmd: true }));
    } else if (parts.length > 1) {
        const lastPart = parts[parts.length - 1];
        if (lastPart) {
            const dirPath = lastPart.includes('/')
                ? lastPart.substring(0, lastPart.lastIndexOf('/')) || '/'
                : '.';
            const prefix = lastPart.includes('/')
                ? lastPart.substring(lastPart.lastIndexOf('/') + 1)
                : lastPart;
            const node = getNode(dirPath === '.' ? currentPath : dirPath);
            if (node && node.type === 'dir') {
                currentSuggestions = Object.keys(node.contents)
                    .filter((name) => name.toLowerCase().startsWith(prefix.toLowerCase()))
                    .map((name) => ({
                        name,
                        isDir: node.contents[name].type === 'dir',
                        isCmd: false,
                    }));
            }
        }
    }
    renderSuggestions();
}

function renderSuggestions() {
    if (!autocompleteSuggestions) return;
    if (currentSuggestions.length === 0 || currentSuggestions.length > 12) {
        autocompleteSuggestions.classList.remove('active');
        autocompleteSuggestions.innerHTML = '';
        return;
    }
    autocompleteSuggestions.classList.add('active');
    autocompleteSuggestions.innerHTML = currentSuggestions
        .slice(0, 8)
        .map((item, i) => {
            const selected = i === selectedSuggestion ? ' selected' : '';
            const dirClass = item.isDir ? ' dir' : '';
            return `<span class="autocomplete-item${selected}${dirClass}" data-index="${i}">${item.name}${item.isDir ? '/' : ''}</span>`;
        })
        .join('');
    autocompleteSuggestions.querySelectorAll('.autocomplete-item').forEach((el) => {
        el.addEventListener('click', () => applySuggestion(parseInt(el.dataset.index)));
    });
}

function applySuggestion(index) {
    if (index < 0 || index >= currentSuggestions.length) return;
    const suggestion = currentSuggestions[index];
    const parts = terminalInput.value.split(' ');
    if (parts.length === 1) {
        terminalInput.value = suggestion.name + ' ';
    } else {
        const lastPart = parts[parts.length - 1];
        const dirPath = lastPart.includes('/')
            ? lastPart.substring(0, lastPart.lastIndexOf('/') + 1)
            : '';
        parts[parts.length - 1] = dirPath + suggestion.name + (suggestion.isDir ? '/' : '');
        terminalInput.value = parts.join(' ');
    }
    hideSuggestions();
    terminalInput.focus();
}

function hideSuggestions() {
    currentSuggestions = [];
    selectedSuggestion = -1;
    if (autocompleteSuggestions) {
        autocompleteSuggestions.classList.remove('active');
        autocompleteSuggestions.innerHTML = '';
    }
}

function handleTerminalInput(e) {
    if (e.key === 'Enter') {
        hideSuggestions();
        const cmd = terminalInput.value.trim();
        if (cmd) {
            commandHistory.push(cmd);
            historyIndex = commandHistory.length;
            printCommand(cmd);
            executeCommand(cmd);
        }
        terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
        if (currentSuggestions.length > 0) {
            e.preventDefault();
            selectedSuggestion =
                selectedSuggestion <= 0 ? currentSuggestions.length - 1 : selectedSuggestion - 1;
            renderSuggestions();
        } else {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
            }
        }
    } else if (e.key === 'ArrowDown') {
        if (currentSuggestions.length > 0) {
            e.preventDefault();
            selectedSuggestion =
                selectedSuggestion >= currentSuggestions.length - 1 ? 0 : selectedSuggestion + 1;
            renderSuggestions();
        } else {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
            }
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        if (currentSuggestions.length > 0) {
            applySuggestion(selectedSuggestion >= 0 ? selectedSuggestion : 0);
        } else {
            updateSuggestions();
        }
    } else if (e.key === 'Escape') {
        hideSuggestions();
    } else if (e.key === 'c' && e.ctrlKey) {
        e.preventDefault();
        hideSuggestions();
        printCommand(terminalInput.value + '^C');
        terminalInput.value = '';
    } else if (e.key === 'l' && e.ctrlKey) {
        e.preventDefault();
        clearTerminal();
    }
}

function printCommand(cmd) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = `<span class="prompt">${escapeHtml(getPromptPath())}$</span><span class="command">${escapeHtml(cmd)}</span>`;
    terminalOutput.appendChild(line);
    scrollToBottom();
}

function printOutput(text, type = '') {
    const output = document.createElement('div');
    output.className = 'terminal-output' + (type ? ' ' + type : '');
    output.innerHTML = escapeHtml(text);
    terminalOutput.appendChild(output);
    scrollToBottom();
}

function scrollToBottom() {
    if (terminalScrollArea) terminalScrollArea.scrollTop = terminalScrollArea.scrollHeight;
}

function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/\n/g, '<br>');
}

function clearTerminal() {
    terminalOutput.innerHTML = '';
}

function resolvePath(path) {
    if (!path) return currentPath;
    let resolved;
    if (path.startsWith('/')) {
        resolved = path;
    } else if (path.startsWith('~')) {
        resolved = '/home/tn3w' + path.slice(1);
    } else {
        resolved = currentPath + '/' + path;
    }
    const parts = resolved.split('/').filter((p) => p && p !== '.');
    const stack = [];
    for (const part of parts) {
        if (part === '..') {
            stack.pop();
        } else {
            stack.push(part);
        }
    }
    return '/' + stack.join('/');
}

function getNode(path) {
    const resolved = resolvePath(path);
    if (resolved === '/') return terminalFS['/'];
    const parts = resolved.split('/').filter((p) => p);
    let node = terminalFS['/'];
    for (const part of parts) {
        if (!node || node.type !== 'dir' || !node.contents[part]) {
            return null;
        }
        node = node.contents[part];
    }
    return node;
}

function autocomplete() {
    updateSuggestions();
    if (currentSuggestions.length === 1) {
        applySuggestion(0);
    }
}

function executeCommand(input) {
    const parts = input.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    const commands = {
        help: () => {
            printOutput(`Available commands:

Navigation & Files:
  pwd           Print working directory
  ls [path]     List directory contents
  cd [path]     Change directory
  cat <file>    Display file contents
  tree [path]   Directory tree
  find <name>   Find files
  stat <path>   File information
  file <path>   Determine file type
  du [path]     Disk usage

Text Processing:
  echo <text>   Print text (supports $USER, $HOME, $PWD)
  grep <pat>    Search in files
  head <file>   First lines of file
  tail <file>   Last lines of file
  wc <file>     Word count
  sort <file>   Sort lines
  uniq <file>   Remove duplicates
  rev <text>    Reverse text

System Info:
  whoami        Display current user
  id            User/group IDs
  hostname      Show hostname
  uname [-a]    System information
  uptime        Show uptime
  date [-u|-I]  Show current date
  cal           Show calendar
  neofetch      System info display
  env           Environment variables
  history       Command history

System Status:
  df            Disk space
  free          Memory usage
  ps            Process list
  top           Process monitor
  lscpu         CPU info
  lsblk         Block devices
  mount         Mount points

Network (real):
  curl <url>    Fetch URL content
  wget <url>    Download file
  ping <host>   Ping host (real timing)
  nslookup      DNS lookup
  dig <host>    DNS query
  ifconfig      Network interfaces
  ip addr       IP addresses
  netstat       Network stats

Utilities:
  bc <expr>     Calculator
  expr          Arithmetic
  base64 [-d]   Base64 encode/decode
  seq <n>       Number sequence
  factor <n>    Prime factors
  openssl       Crypto utilities
  xxd <text>    Hex dump
  sleep <sec>   Wait (max 10s)

Package/Version Control:
  apt <cmd>     Package manager
  git <cmd>     Git commands
  ssh <host>    SSH connection

Portfolio:
  projects      List all projects
  skills        Show tech stack
  contact       Contact information
  about         About TN3W

Other: clear, man, cowsay, fortune, sudo`);
        },
        whoami: () => printOutput('tn3w'),
        pwd: () => printOutput(currentPath),
        ls: () => {
            const path = args.find((a) => !a.startsWith('-')) || currentPath;
            const showHidden = args.includes('-a') || args.includes('-la') || args.includes('-al');
            const longFormat = args.includes('-l') || args.includes('-la') || args.includes('-al');
            const node = getNode(path);
            if (!node) {
                printOutput(`ls: cannot access '${path}': No such file or directory`, 'error');
                return;
            }
            if (node.type !== 'dir') {
                printOutput(path);
                return;
            }
            let items = Object.keys(node.contents);
            if (!showHidden) items = items.filter((i) => !i.startsWith('.'));
            if (longFormat) {
                items.forEach((item) => {
                    const isDir = node.contents[item].type === 'dir';
                    const perms = isDir ? 'drwxr-xr-x' : '-rw-r--r--';
                    const size = isDir ? '4096' : '1024';
                    printOutput(
                        `${perms}  1 tn3w tn3w  ${size.padStart(5)} Jan 13 2026 ${item}${isDir ? '/' : ''}`
                    );
                });
            } else {
                printOutput(
                    items.map((i) => (node.contents[i].type === 'dir' ? i + '/' : i)).join('  ')
                );
            }
        },
        cd: () => {
            const path = args[0] || '/home/tn3w';
            const resolved = resolvePath(path);
            const node = getNode(resolved);
            if (!node) {
                printOutput(`cd: ${path}: No such file or directory`, 'error');
                return;
            }
            if (node.type !== 'dir') {
                printOutput(`cd: ${path}: Not a directory`, 'error');
                return;
            }
            currentPath = resolved;
            updatePrompt();
        },
        cat: () => {
            if (!args[0]) {
                printOutput('cat: missing operand', 'error');
                return;
            }
            const node = getNode(args[0]);
            if (!node) {
                printOutput(`cat: ${args[0]}: No such file or directory`, 'error');
                return;
            }
            if (node.type === 'dir') {
                printOutput(`cat: ${args[0]}: Is a directory`, 'error');
                return;
            }
            printOutput(node.content);
        },
        echo: () => {
            let text = args.join(' ');
            if (args[0] === '-e' && args.length > 1) {
                text = args
                    .slice(1)
                    .join(' ')
                    .replace(/\\n/g, '\n')
                    .replace(/\\t/g, '\t')
                    .replace(/\\r/g, '\r')
                    .replace(/\\\\/g, '\\');
            }
            if (args[0] === '-n' && args.length > 1) {
                text = args.slice(1).join(' ');
            }
            text = text
                .replace(/\$USER/g, 'tn3w')
                .replace(/\$HOME/g, '/home/tn3w')
                .replace(/\$PWD/g, currentPath)
                .replace(/\$SHELL/g, '/bin/bash')
                .replace(/\$HOSTNAME/g, 'privacy')
                .replace(/\$RANDOM/g, Math.floor(Math.random() * 32768).toString())
                .replace(/\$\(date\)/g, new Date().toString());
            printOutput(text);
        },
        clear: () => clearTerminal(),
        date: () => {
            if (args.includes('-u') || args.includes('--utc')) {
                printOutput(new Date().toUTCString());
            } else if (args.includes('-I') || args.includes('--iso-8601')) {
                printOutput(new Date().toISOString());
            } else if (args.includes('+%s')) {
                printOutput(Math.floor(Date.now() / 1000).toString());
            } else {
                printOutput(new Date().toString());
            }
        },
        uname: () =>
            printOutput(
                args.includes('-a')
                    ? 'Privacy OS 1.0 privacy 6.1.0-privacy #1 SMP x86_64 GNU/Linux'
                    : 'Privacy OS'
            ),
        hostname: () => printOutput('privacy'),
        uptime: () => {
            const uptimeMs = performance.now();
            const uptimeSec = Math.floor(uptimeMs / 1000);
            const hours = Math.floor(uptimeSec / 3600);
            const mins = Math.floor((uptimeSec % 3600) / 60);
            const timeStr =
                hours > 0 ? `${hours}:${mins.toString().padStart(2, '0')}` : `${mins} min`;
            printOutput(
                ` ${new Date().toLocaleTimeString()}  up ${timeStr},  1 user,  load average: 0.00, 0.01, 0.05`
            );
        },
        neofetch: () => {
            printOutput(`       _____          tn3w@privacy
      /     \\         ------------
     /       \\        OS: Privacy OS 1.0
    /    |    \\       Host: Portfolio Terminal
   /     |     \\      Kernel: 6.1.0-privacy
  /______|______\\     Shell: bash 5.2.15
                      Terminal: web-term
  Privacy First       CPU: Secure Core
                      Memory: 256MB / 512MB
                      
                      Focus: Privacy & Security
                      Location: Germany`);
        },
        history: () =>
            commandHistory.forEach((c, i) =>
                printOutput(`  ${(i + 1).toString().padStart(3)}  ${c}`)
            ),
        tree: () => {
            const path = args[0] || currentPath;
            const node = getNode(path);
            if (!node || node.type !== 'dir') {
                printOutput(`tree: ${path}: Not a directory`, 'error');
                return;
            }
            function printTree(n, prefix = '') {
                const items = Object.keys(n.contents);
                items.forEach((item, i) => {
                    const isLast = i === items.length - 1;
                    const isDir = n.contents[item].type === 'dir';
                    printOutput(prefix + (isLast ? '└── ' : '├── ') + item + (isDir ? '/' : ''));
                    if (isDir) printTree(n.contents[item], prefix + (isLast ? '    ' : '│   '));
                });
            }
            printOutput(path);
            printTree(node);
        },
        find: () => {
            if (!args[0]) {
                printOutput('find: missing argument', 'error');
                return;
            }
            const pattern = args[0].toLowerCase();
            function search(node, path) {
                if (node.type === 'dir') {
                    Object.keys(node.contents).forEach((name) => {
                        const fullPath = path + '/' + name;
                        if (name.toLowerCase().includes(pattern)) printOutput(fullPath);
                        search(node.contents[name], fullPath);
                    });
                }
            }
            search(terminalFS['/'], '');
        },
        grep: () => {
            if (args.length < 2) {
                printOutput('Usage: grep <pattern> <file>', 'error');
                return;
            }
            const node = getNode(args[1]);
            if (!node || node.type === 'dir') {
                printOutput(`grep: ${args[1]}: No such file`, 'error');
                return;
            }
            node.content.split('\n').forEach((line) => {
                if (line.toLowerCase().includes(args[0].toLowerCase())) printOutput(line);
            });
        },
        head: () => {
            if (!args[0]) {
                printOutput('head: missing operand', 'error');
                return;
            }
            const node = getNode(args[0]);
            if (!node || node.type === 'dir') {
                printOutput(`head: ${args[0]}: No such file`, 'error');
                return;
            }
            printOutput(node.content.split('\n').slice(0, 5).join('\n'));
        },
        tail: () => {
            if (!args[0]) {
                printOutput('tail: missing operand', 'error');
                return;
            }
            const node = getNode(args[0]);
            if (!node || node.type === 'dir') {
                printOutput(`tail: ${args[0]}: No such file`, 'error');
                return;
            }
            printOutput(node.content.split('\n').slice(-5).join('\n'));
        },
        wc: () => {
            if (!args[0]) {
                printOutput('wc: missing operand', 'error');
                return;
            }
            const node = getNode(args[0]);
            if (!node || node.type === 'dir') {
                printOutput(`wc: ${args[0]}: No such file`, 'error');
                return;
            }
            const lines = node.content.split('\n').length;
            const words = node.content.split(/\s+/).filter((w) => w).length;
            printOutput(`  ${lines}  ${words}  ${node.content.length} ${args[0]}`);
        },
        sudo: () => {
            if (!args[0]) {
                printOutput('usage: sudo <command>', 'error');
                return;
            }
            printOutput('[sudo] password for tn3w: ********');
            if (args[0] === 'rm' && args.includes('-rf') && args.includes('/')) {
                printOutput('Nice try! System protected.', 'error');
            } else if (args[0] === 'apt' || args[0] === 'apt-get') {
                commands.apt();
            } else {
                printOutput(`Executing: ${args.join(' ')}`, 'success');
            }
        },
        apt: () => {
            const subcmd = args[0] || args[1];
            if (subcmd === 'update') {
                printOutput(
                    'Hit:1 https://privacy.repo stable InRelease\nReading package lists... Done\nAll packages are up to date.',
                    'success'
                );
            } else if (subcmd === 'install') {
                const pkg = args[1] || args[2] || 'package';
                printOutput(`Reading package lists... Done\nSetting up ${pkg}... Done`, 'success');
            } else if (subcmd === 'search') {
                printOutput(
                    'privacy-tools - Tools for digital privacy\ntor-browser - Anonymous browsing\nencryption-utils - Encryption utilities'
                );
            } else {
                printOutput('Usage: apt [update|install|search] [package]');
            }
        },
        git: () => {
            const subcmd = args[0];
            if (subcmd === 'status') {
                printOutput(
                    'On branch main\nYour branch is up to date.\nnothing to commit, working tree clean',
                    'success'
                );
            } else if (subcmd === 'log') {
                printOutput(
                    'commit a1b2c3d (HEAD -> main)\nAuthor: TN3W <tn3w@protonmail.com>\nDate:   Tue Jan 13 2026\n\n    Updated privacy tools'
                );
            } else if (subcmd === 'clone') {
                printOutput(
                    `Cloning into '${args[1] || 'repo'}'...\nReceiving objects: 100%, done.`,
                    'success'
                );
            } else {
                printOutput('Usage: git [status|log|clone <repo>]');
            }
        },
        curl: async () => {
            if (!args[0]) {
                printOutput('curl: missing URL', 'error');
                return;
            }
            let url = args[0];
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            printOutput(`Connecting to ${url}...`);
            try {
                const response = await fetch(url, { mode: 'cors' });
                const contentType = response.headers.get('content-type') || '';
                printOutput(
                    `HTTP/${response.status === 200 ? '1.1' : '1.1'} ${response.status} ${response.statusText}`
                );
                printOutput(`Content-Type: ${contentType}`);
                if (
                    contentType.includes('text') ||
                    contentType.includes('json') ||
                    contentType.includes('xml')
                ) {
                    const text = await response.text();
                    const truncated =
                        text.length > 2000 ? text.slice(0, 2000) + '\n... [truncated]' : text;
                    printOutput(truncated);
                } else {
                    printOutput(`[Binary content: ${contentType}]`);
                }
            } catch (e) {
                printOutput(`curl: (7) Failed to connect to ${url}: ${e.message}`, 'error');
            }
        },
        ping: async () => {
            const host = args[0] || 'localhost';
            if (host === 'localhost' || host === '127.0.0.1') {
                printOutput(`PING ${host} (127.0.0.1) 56(84) bytes of data.`);
                for (let i = 1; i <= 3; i++) {
                    printOutput(
                        `64 bytes from ${host}: icmp_seq=${i} ttl=64 time=${(Math.random() * 0.5 + 0.1).toFixed(2)} ms`
                    );
                }
                printOutput(
                    `--- ${host} ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss`
                );
                return;
            }
            let url = host.startsWith('http') ? host : 'https://' + host;
            printOutput(`PING ${host} ...`);
            const results = [];
            for (let i = 1; i <= 4; i++) {
                const start = performance.now();
                try {
                    await fetch(url, { mode: 'no-cors', cache: 'no-store' });
                    const time = (performance.now() - start).toFixed(2);
                    results.push(parseFloat(time));
                    printOutput(`seq=${i} time=${time} ms`);
                } catch (e) {
                    printOutput(`seq=${i} Request timeout`, 'error');
                }
            }
            if (results.length > 0) {
                const avg = (results.reduce((a, b) => a + b, 0) / results.length).toFixed(2);
                const min = Math.min(...results).toFixed(2);
                const max = Math.max(...results).toFixed(2);
                printOutput(
                    `--- ${host} ping statistics ---\n${results.length} packets transmitted, ${results.length} received\nrtt min/avg/max = ${min}/${avg}/${max} ms`
                );
            }
        },
        ssh: () => {
            if (!args[0]) {
                printOutput('usage: ssh <host>', 'error');
                return;
            }
            printOutput(
                `Connecting to ${args[0]}...\nConnection encrypted with AES-256-GCM\nWelcome to ${args[0]}!`,
                'success'
            );
        },
        projects: () => {
            printOutput(`Featured Projects:

Tor Protocol:
   stem-rs        *1   Rust library for Tor control protocol
   vanguards-rs        Enhanced Tor hidden service security
   OnionDock      *4   Deploy apps as Tor hidden services

IP Security:
   ProtonVPN-IPs  *25  Auto-updated ProtonVPN IP list
   IPSet          *4   IP categorization tool
   TunnelBear-IPs *4   TunnelBear VPN IP list

Bot Protection:
   flask-Humanify *20  Bot protection for Flask
   TrueClick      *1   GDPR-compliant captcha
   flask_AuthGenius    Auth system for Flask

Use 'cat ~/projects/<name>' for details`);
        },
        skills: () => {
            const node = getNode('/home/tn3w/skills.txt');
            if (node) printOutput(node.content);
        },
        contact: () => {
            const node = getNode('/home/tn3w/contact.txt');
            if (node) printOutput(node.content);
        },
        about: () => {
            const node = getNode('/home/tn3w/about.txt');
            if (node) printOutput(node.content);
        },
        exit: () => {
            printOutput('Goodbye!');
            setTimeout(() => {
                clearTerminal();
                printOutput('Session ended. Refresh to restart.', 'info');
            }, 1000);
        },
        man: () => {
            if (!args[0]) {
                printOutput('What manual page do you want?', 'error');
                return;
            }
            if (commands[args[0]])
                printOutput(
                    `${args[0].toUpperCase()}(1)    User Commands\n\nNAME\n       ${args[0]} - ${args[0]} command\n\nType 'help' for command list.`
                );
            else printOutput(`No manual entry for ${args[0]}`, 'error');
        },
        touch: () =>
            printOutput(
                `touch: cannot create '${args[0] || 'file'}': Read-only file system`,
                'error'
            ),
        mkdir: () =>
            printOutput(
                `mkdir: cannot create directory '${args[0] || 'dir'}': Read-only file system`,
                'error'
            ),
        rm: () =>
            printOutput(`rm: cannot remove '${args[0] || 'file'}': Read-only file system`, 'error'),
        mv: () => printOutput('mv: Read-only file system', 'error'),
        cp: () => printOutput('cp: Read-only file system', 'error'),
        vim: () => printOutput('vim: command not found. Try: cat <file>'),
        nano: () => printOutput('nano: command not found. Try: cat <file>'),
        emacs: () => printOutput('emacs: command not found. Try: cat <file>'),
        cowsay: () => {
            const msg = args.join(' ') || 'Privacy matters!';
            printOutput(` ${'_'.repeat(msg.length + 2)}
< ${msg} >
 ${'-'.repeat(msg.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);
        },
        fortune: () => {
            const fortunes = [
                'Privacy is not about having something to hide.',
                'In a world of surveillance, encryption is self-defense.',
                'Open source: because trust should be verified.',
                'Security is a process, not a product.',
                'The best code is no code at all.',
            ];
            printOutput(fortunes[Math.floor(Math.random() * fortunes.length)]);
        },
        id: () =>
            printOutput('uid=1000(tn3w) gid=1000(tn3w) groups=1000(tn3w),27(sudo),100(users)'),
        env: () => {
            printOutput(`USER=tn3w
HOME=/home/tn3w
PWD=${currentPath}
SHELL=/bin/bash
TERM=xterm-256color
LANG=en_US.UTF-8
HOSTNAME=privacy
PATH=/usr/local/bin:/usr/bin:/bin`);
        },
        export: () => {
            if (!args[0]) {
                printOutput(
                    'declare -x HOME="/home/tn3w"\ndeclare -x USER="tn3w"\ndeclare -x SHELL="/bin/bash"'
                );
            } else {
                printOutput(
                    `export: ${args[0]}: not a valid identifier (read-only shell)`,
                    'error'
                );
            }
        },
        which: () => {
            if (!args[0]) {
                printOutput('which: missing argument', 'error');
                return;
            }
            if (availableCommands.includes(args[0])) {
                printOutput(`/usr/bin/${args[0]}`);
            } else {
                printOutput(`${args[0]} not found`, 'error');
            }
        },
        type: () => {
            if (!args[0]) {
                printOutput('type: missing argument', 'error');
                return;
            }
            if (commands[args[0]]) {
                printOutput(`${args[0]} is a shell builtin`);
            } else {
                printOutput(`-bash: type: ${args[0]}: not found`, 'error');
            }
        },
        alias: () => {
            printOutput("alias ll='ls -la'\nalias projects='ls ~/projects'\nalias cls='clear'");
        },
        cal: () => {
            const now = new Date();
            const month = now.toLocaleString('en-US', { month: 'long' });
            const year = now.getFullYear();
            const firstDay = new Date(year, now.getMonth(), 1).getDay();
            const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
            const today = now.getDate();

            let cal = `     ${month} ${year}\nSu Mo Tu We Th Fr Sa\n`;
            let day = 1;
            for (let i = 0; i < 6; i++) {
                let week = '';
                for (let j = 0; j < 7; j++) {
                    if (i === 0 && j < firstDay) {
                        week += '   ';
                    } else if (day <= daysInMonth) {
                        const dayStr =
                            day === today
                                ? `[${day.toString().padStart(2)}]`
                                : day.toString().padStart(2) + ' ';
                        week += day === today ? dayStr : dayStr;
                        day++;
                    }
                }
                if (week.trim()) cal += week + '\n';
            }
            printOutput(cal);
        },
        bc: () => {
            if (!args[0]) {
                printOutput('bc: interactive mode not supported. Usage: bc <expression>');
                return;
            }
            try {
                const expr = args
                    .join('')
                    .replace(/[^0-9+\-*/.()%^]/g, '')
                    .replace(/\^/g, '**');
                const result = Function('"use strict"; return (' + expr + ')')();
                printOutput(result.toString());
            } catch (e) {
                printOutput('(standard_in) 1: syntax error', 'error');
            }
        },
        expr: () => {
            if (args.length < 3) {
                printOutput('expr: missing operand', 'error');
                return;
            }
            try {
                const a = parseFloat(args[0]);
                const op = args[1];
                const b = parseFloat(args[2]);
                let result;
                switch (op) {
                    case '+':
                        result = a + b;
                        break;
                    case '-':
                        result = a - b;
                        break;
                    case '*':
                    case 'x':
                        result = a * b;
                        break;
                    case '/':
                        result = a / b;
                        break;
                    case '%':
                        result = a % b;
                        break;
                    default:
                        printOutput(`expr: unknown operator: ${op}`, 'error');
                        return;
                }
                printOutput(result.toString());
            } catch (e) {
                printOutput('expr: non-numeric argument', 'error');
            }
        },
        base64: () => {
            if (!args[0]) {
                printOutput('Usage: base64 [-d] <string>', 'error');
                return;
            }
            if (args[0] === '-d' && args[1]) {
                try {
                    printOutput(atob(args[1]));
                } catch (e) {
                    printOutput('base64: invalid input', 'error');
                }
            } else {
                printOutput(btoa(args.join(' ')));
            }
        },
        md5sum: () => {
            if (!args[0]) {
                printOutput('md5sum: missing operand', 'error');
                return;
            }
            const str = args.join(' ');
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = (hash << 5) - hash + str.charCodeAt(i);
                hash = hash & hash;
            }
            const hex = Math.abs(hash).toString(16).padStart(32, '0').slice(0, 32);
            printOutput(`${hex}  ${args[0]}`);
        },
        sha256sum: () => {
            if (!args[0]) {
                printOutput('sha256sum: missing operand', 'error');
                return;
            }
            const str = args.join(' ');
            let hash = 5381;
            for (let i = 0; i < str.length; i++) {
                hash = (hash << 5) + hash + str.charCodeAt(i);
            }
            const hex = Math.abs(hash).toString(16).padStart(64, 'a').slice(0, 64);
            printOutput(`${hex}  ${args[0]}`);
        },
        rev: () => {
            if (!args[0]) {
                printOutput('rev: missing operand', 'error');
                return;
            }
            printOutput(args.join(' ').split('').reverse().join(''));
        },
        seq: () => {
            if (!args[0]) {
                printOutput('seq: missing operand', 'error');
                return;
            }
            const start = args.length >= 2 ? parseInt(args[0]) : 1;
            const end = args.length >= 2 ? parseInt(args[1]) : parseInt(args[0]);
            const step = args.length >= 3 ? parseInt(args[1]) : 1;
            const actualEnd = args.length >= 3 ? parseInt(args[2]) : end;
            if (isNaN(start) || isNaN(actualEnd)) {
                printOutput('seq: invalid argument', 'error');
                return;
            }
            const nums = [];
            for (let i = start; step > 0 ? i <= actualEnd : i >= actualEnd; i += step) {
                nums.push(i);
                if (nums.length > 100) {
                    nums.push('...');
                    break;
                }
            }
            printOutput(nums.join('\n'));
        },
        sleep: async () => {
            const secs = parseFloat(args[0]) || 1;
            if (secs > 10) {
                printOutput('sleep: max 10 seconds allowed', 'error');
                return;
            }
            printOutput(`Sleeping for ${secs} seconds...`);
            await new Promise((resolve) => setTimeout(resolve, secs * 1000));
            printOutput('Done.');
        },
        yes: () => {
            const msg = args[0] || 'y';
            for (let i = 0; i < 20; i++) printOutput(msg);
            printOutput('... (interrupted)');
        },
        factor: () => {
            if (!args[0]) {
                printOutput('factor: missing operand', 'error');
                return;
            }
            const n = parseInt(args[0]);
            if (isNaN(n) || n < 2) {
                printOutput(`factor: '${args[0]}' is not a valid positive integer`, 'error');
                return;
            }
            const factors = [];
            let num = n;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                while (num % i === 0) {
                    factors.push(i);
                    num /= i;
                }
            }
            if (num > 1) factors.push(num);
            printOutput(`${n}: ${factors.join(' ')}`);
        },
        df: () => {
            printOutput(`Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/sda1       51200000 2048000  49152000   4% /
tmpfs             262144       0    262144   0% /tmp
/dev/sda2       10240000  512000   9728000   5% /home`);
        },
        free: () => {
            printOutput(`              total        used        free      shared  buff/cache   available
Mem:         524288       65536      393216        8192       65536      458752
Swap:        262144           0      262144`);
        },
        ps: () => {
            printOutput(`  PID TTY          TIME CMD
    1 pts/0    00:00:00 bash
  ${Math.floor(Math.random() * 1000) + 100} pts/0    00:00:00 ps`);
        },
        top: () => {
            printOutput(`top - ${new Date().toLocaleTimeString()} up ${Math.floor(performance.now() / 60000)} min,  1 user
Tasks:   3 total,   1 running,   2 sleeping
%Cpu(s):  0.3 us,  0.1 sy,  0.0 ni, 99.6 id
MiB Mem :    512.0 total,    384.0 free,     64.0 used
MiB Swap:    256.0 total,    256.0 free,      0.0 used

  PID USER      PR  NI    VIRT    RES  %CPU  %MEM COMMAND
    1 tn3w      20   0    4096   1024   0.0   0.2 bash
    2 tn3w      20   0    2048    512   0.0   0.1 terminal
(press q to quit - simulated)`);
        },
        kill: () => {
            if (!args[0]) {
                printOutput('kill: missing operand', 'error');
                return;
            }
            printOutput(`kill: (${args[0]}): Operation not permitted`, 'error');
        },
        wget: async () => {
            if (!args[0]) {
                printOutput('wget: missing URL', 'error');
                return;
            }
            let url = args[0];
            if (!url.startsWith('http')) url = 'https://' + url;
            printOutput(`--${new Date().toISOString()}--  ${url}`);
            printOutput('Resolving host... connecting...');
            try {
                const response = await fetch(url, { mode: 'cors' });
                printOutput(
                    `HTTP request sent, awaiting response... ${response.status} ${response.statusText}`
                );
                if (response.ok) {
                    printOutput(
                        `Length: unspecified [${response.headers.get('content-type') || 'text/html'}]`
                    );
                    printOutput(`Saving to: 'index.html' (simulated - read-only filesystem)`);
                    printOutput('\nDownload would complete. File system is read-only.', 'success');
                }
            } catch (e) {
                printOutput(`wget: unable to resolve host: ${e.message}`, 'error');
            }
        },
        nslookup: async () => {
            if (!args[0]) {
                printOutput('nslookup: missing argument', 'error');
                return;
            }
            printOutput(`Server:  privacy-dns\nAddress: 127.0.0.53\n`);
            printOutput(
                `Non-authoritative answer:\nName:    ${args[0]}\nAddress: ${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
            );
        },
        dig: () => {
            if (!args[0]) {
                printOutput('dig: missing argument', 'error');
                return;
            }
            printOutput(`; <<>> DiG 9.18.0 <<>> ${args[0]}
;; ANSWER SECTION:
${args[0]}.        300    IN    A    ${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}

;; Query time: ${Math.floor(Math.random() * 50) + 10} msec`);
        },
        ifconfig: () => {
            printOutput(`lo: flags=73<UP,LOOPBACK,RUNNING>
        inet 127.0.0.1  netmask 255.0.0.0
        
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>
        inet 192.168.1.${Math.floor(Math.random() * 254) + 1}  netmask 255.255.255.0
        ether 00:00:00:00:00:00`);
        },
        ip: () => {
            if (args[0] === 'addr' || args[0] === 'a') {
                printOutput(`1: lo: <LOOPBACK,UP> mtu 65536
    inet 127.0.0.1/8 scope host lo
2: eth0: <BROADCAST,MULTICAST,UP> mtu 1500
    inet 192.168.1.${Math.floor(Math.random() * 254) + 1}/24 scope global eth0`);
            } else {
                printOutput('Usage: ip [addr|a]');
            }
        },
        netstat: () => {
            printOutput(`Active Internet connections
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 127.0.0.1:9050          0.0.0.0:*               LISTEN
tcp        0      0 192.168.1.100:443       0.0.0.0:*               LISTEN`);
        },
        openssl: () => {
            if (args[0] === 'rand' && args[1] === '-hex') {
                const bytes = parseInt(args[2]) || 16;
                let hex = '';
                for (let i = 0; i < Math.min(bytes, 64); i++) {
                    hex += Math.floor(Math.random() * 256)
                        .toString(16)
                        .padStart(2, '0');
                }
                printOutput(hex);
            } else if (args[0] === 'version') {
                printOutput('OpenSSL 3.0.0 7 Sep 2021 (Library: OpenSSL 3.0.0)');
            } else {
                printOutput('Usage: openssl [rand -hex <bytes>|version]');
            }
        },
        xxd: () => {
            if (!args[0]) {
                printOutput('xxd: missing operand', 'error');
                return;
            }
            const str = args.join(' ');
            let output = '';
            for (let i = 0; i < str.length; i += 16) {
                const chunk = str.slice(i, i + 16);
                const hex = [...chunk]
                    .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
                    .join(' ');
                const ascii = chunk.replace(/[^\x20-\x7E]/g, '.');
                output += `${i.toString(16).padStart(8, '0')}: ${hex.padEnd(48)}  ${ascii}\n`;
            }
            printOutput(output);
        },
        hexdump: () => commands.xxd(),
        sort: () => {
            if (!args[0]) {
                printOutput('sort: missing operand', 'error');
                return;
            }
            const node = getNode(args[0]);
            if (!node || node.type === 'dir') {
                printOutput(`sort: ${args[0]}: No such file`, 'error');
                return;
            }
            const lines = node.content.split('\n');
            const sorted = args.includes('-r') ? lines.sort().reverse() : lines.sort();
            printOutput(sorted.join('\n'));
        },
        uniq: () => {
            if (!args[0]) {
                printOutput('uniq: missing operand', 'error');
                return;
            }
            const node = getNode(args[0]);
            if (!node || node.type === 'dir') {
                printOutput(`uniq: ${args[0]}: No such file`, 'error');
                return;
            }
            const lines = node.content.split('\n');
            const unique = [...new Set(lines)];
            printOutput(unique.join('\n'));
        },
        cut: () => {
            printOutput('cut: interactive mode not fully supported');
        },
        awk: () => {
            printOutput('awk: interactive mode not fully supported');
        },
        sed: () => {
            printOutput('sed: interactive mode not fully supported');
        },
        tr: () => {
            if (args.length < 2) {
                printOutput('Usage: tr <from> <to> (reads from echo)', 'error');
                return;
            }
            printOutput(`tr: use with echo, e.g., echo "hello" | tr is simulated`);
        },
        time: () => {
            if (!args[0]) {
                printOutput('time: missing command', 'error');
                return;
            }
            const start = performance.now();
            if (commands[args[0]]) {
                const subArgs = args.slice(1);
                printOutput(`(executing ${args[0]}...)`);
            }
            const elapsed = ((performance.now() - start) / 1000).toFixed(3);
            printOutput(`\nreal    0m${elapsed}s\nuser    0m0.001s\nsys     0m0.000s`);
        },
        true: () => {},
        false: () => printOutput('', 'error'),
        test: () => {
            if (args[0] === '-f' && args[1]) {
                const node = getNode(args[1]);
                if (node && node.type === 'file') printOutput('true');
                else printOutput('false');
            } else if (args[0] === '-d' && args[1]) {
                const node = getNode(args[1]);
                if (node && node.type === 'dir') printOutput('true');
                else printOutput('false');
            } else {
                printOutput('Usage: test [-f|-d] <path>');
            }
        },
        '[': () => commands.test(),
        stat: () => {
            if (!args[0]) {
                printOutput('stat: missing operand', 'error');
                return;
            }
            const node = getNode(args[0]);
            if (!node) {
                printOutput(`stat: cannot stat '${args[0]}': No such file or directory`, 'error');
                return;
            }
            printOutput(`  File: ${args[0]}
  Size: ${node.type === 'dir' ? 4096 : node.content?.length || 0}       Blocks: 8          IO Block: 4096   ${node.type === 'dir' ? 'directory' : 'regular file'}
Access: (0${node.type === 'dir' ? '755' : '644'}/${node.type === 'dir' ? 'drwxr-xr-x' : '-rw-r--r--'})  Uid: ( 1000/   tn3w)   Gid: ( 1000/   tn3w)
Modify: 2026-01-13 12:00:00.000000000 +0100`);
        },
        file: () => {
            if (!args[0]) {
                printOutput('file: missing operand', 'error');
                return;
            }
            const node = getNode(args[0]);
            if (!node) {
                printOutput(`${args[0]}: cannot open (No such file or directory)`, 'error');
                return;
            }
            if (node.type === 'dir') printOutput(`${args[0]}: directory`);
            else printOutput(`${args[0]}: ASCII text`);
        },
        du: () => {
            const path = args[0] || currentPath;
            const node = getNode(path);
            if (!node) {
                printOutput(`du: cannot access '${path}'`, 'error');
                return;
            }
            printOutput(`4\t${path}`);
        },
        ln: () => printOutput('ln: Read-only file system', 'error'),
        chmod: () => printOutput('chmod: Read-only file system', 'error'),
        chown: () => printOutput('chown: Read-only file system', 'error'),
        passwd: () => printOutput('passwd: Authentication token manipulation error', 'error'),
        useradd: () => printOutput('useradd: Permission denied', 'error'),
        groupadd: () => printOutput('groupadd: Permission denied', 'error'),
        crontab: () => printOutput('no crontab for tn3w'),
        systemctl: () => {
            if (args[0] === 'status') {
                printOutput(`● privacy.service - Privacy Services
     Loaded: loaded
     Active: active (running)
   Main PID: 1 (privacy-daemon)`);
            } else {
                printOutput('systemctl: Operation not permitted (read-only system)', 'error');
            }
        },
        journalctl: () => {
            printOutput(`-- Logs begin at ${new Date().toISOString()} --
Jan 13 12:00:00 privacy systemd[1]: Started Privacy Services.
Jan 13 12:00:01 privacy tor[100]: Bootstrapped 100%: Done
Jan 13 12:00:02 privacy privacy-daemon[1]: All systems secure`);
        },
        dmesg: () => {
            printOutput(`[    0.000000] Privacy OS 1.0 starting...
[    0.001000] Encryption module loaded
[    0.002000] Secure boot verified
[    0.003000] Network interfaces initialized
[    0.004000] System ready`);
        },
        lsblk: () => {
            printOutput(`NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0   50G  0 disk 
├─sda1   8:1    0   40G  0 part /
└─sda2   8:2    0   10G  0 part /home`);
        },
        mount: () => {
            printOutput(`/dev/sda1 on / type ext4 (rw,relatime)
/dev/sda2 on /home type ext4 (rw,relatime)
tmpfs on /tmp type tmpfs (rw,nosuid,nodev)`);
        },
        lscpu: () => {
            printOutput(`Architecture:          x86_64
CPU(s):                2
Model name:            Secure Core Processor
CPU MHz:               2400.000`);
        },
        lsusb: () => {
            printOutput(`Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 0000:0000 Privacy USB Device`);
        },
        lspci: () => {
            printOutput(`00:00.0 Host bridge: Privacy Systems Inc.
00:01.0 Network controller: Secure Network Adapter`);
        },
    };

    commands.ll = () => {
        args.unshift('-la');
        commands.ls();
    };
    commands.la = () => {
        args.unshift('-a');
        commands.ls();
    };
    commands.cls = commands.clear;
    commands.quit = commands.exit;
    commands.logout = commands.exit;

    if (commands[cmd]) {
        const result = commands[cmd]();
        if (result instanceof Promise) {
            result.catch((e) => printOutput(`Error: ${e.message}`, 'error'));
        }
    } else if (cmd !== '') {
        printOutput(`${cmd}: command not found. Type 'help' for available commands.`, 'error');
    }
}

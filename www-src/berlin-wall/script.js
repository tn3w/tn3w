document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  );

  const observeElements = (selector) => {
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  };

  const initAnimations = () => {
    observeElements('.timeline-item');
    observeElements('.quote-section');
    observeElements('.fall-section');
    observeElements('.gallery-item');
    observeElements('.memorial-item');
    observeElements('.fade-in');
  };

  const initMobileNav = () => {
    const toggle = document.createElement('button');
    toggle.className = 'mobile-nav-toggle';
    toggle.innerHTML = '☰';
    toggle.setAttribute('aria-label', 'Toggle navigation');
    document.body.prepend(toggle);

    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    toggle.addEventListener('click', () => {
      const isActive = nav.classList.toggle('active');
      document.body.classList.toggle('nav-open', isActive);
      toggle.innerHTML = isActive ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.classList.remove('nav-open');
        toggle.innerHTML = '☰';
      });
    });
  };

  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  const initBackToTop = () => {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.title = 'Back to top';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      button.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
  };

  const animateStats = () => {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const text = target.textContent;
            const num = parseInt(text.replace(/[^\d]/g, ''));
            const duration = 1500;
            const start = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - start;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.floor(progress * num);
              
              target.textContent = text.includes('km') 
                ? `${current} km` 
                : text.includes('+') 
                  ? `${current}+` 
                  : current;

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                target.textContent = text;
              }
            };

            requestAnimationFrame(animate);
            statObserver.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.stat-number').forEach((stat) => {
      statObserver.observe(stat);
    });
  };

  const animateQuote = () => {
    const quoteText = document.querySelector('.quote-text');
    if (!quoteText) return;

    const content = quoteText.textContent;
    const quoteObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const lines = content.split('\n').filter(line => line.trim());
          const mainQuote = lines[0];
          const author = lines.slice(1).join(' ');
          
          quoteText.innerHTML = '';
          let index = 0;

          const type = () => {
            if (index < mainQuote.length) {
              quoteText.textContent += mainQuote[index++];
              setTimeout(type, 30);
            } else {
              quoteText.innerHTML += `<span class="quote-author">${author}</span>`;
            }
          };

          setTimeout(type, 300);
          quoteObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    quoteObserver.observe(document.querySelector('.quote-section'));
  };

  const addFadeClasses = () => {
    const sections = [
      '.construction-section',
      '.escape-section',
      '.checkpoint-section',
      '.daily-life-section',
      '.wall-today-section'
    ];

    const elements = 'h2, h3, h4, p, .story-text, .memorial-item';

    sections.forEach((section) => {
      document.querySelectorAll(`${section} ${elements}`).forEach((el) => {
        if (!el.closest('.gallery-item')) {
          el.classList.add('fade-in');
        }
      });
    });
  };

  initMobileNav();
  initSmoothScroll();
  initBackToTop();
  addFadeClasses();
  initAnimations();
  animateStats();
  animateQuote();

  document.querySelectorAll('.timeline-item').forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
  });
});

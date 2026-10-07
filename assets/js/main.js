/**
 * VioraQuest — Main JS
 * Stripe × Apple + Meteor + Opening Ceremony
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initIntro();
    initTheme();
    initRTL();
    initMobileMenu();
    initHeaderScroll();
    initRevealOnScroll();
    initFormValidation();
    initSmoothScroll();
    initMeteorBackground();
    initInteractiveCards();
  }

  /* ========== OPENING CEREMONY ========== */
  function initIntro() {
    const overlay = document.getElementById('introOverlay');
    if (!overlay) return;

    // Always play (unless user prefers reduced motion)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      overlay.classList.add('done');
      document.body.classList.remove('intro-active');
      return;
    }

    const scenes = overlay.querySelectorAll('.intro-scene');
    const dots = overlay.querySelectorAll('.intro-dot');
    const skipBtn = document.getElementById('introSkip');
    let current = 0;
    const DURATION = 2200; // ms per scene

    function showScene(index) {
      scenes.forEach((s, i) => s.classList.toggle('active', i === index));
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    function finishIntro() {
      overlay.classList.add('slide-away');
      document.body.classList.remove('intro-active');

      setTimeout(() => {
        overlay.classList.add('done');
      }, 1100);
    }

    // Auto advance
    let timer = setInterval(() => {
      current++;
      if (current >= scenes.length) {
        clearInterval(timer);
        // Small pause on last scene then slide
        setTimeout(finishIntro, 900);
      } else {
        showScene(current);
      }
    }, DURATION);

    // Skip button
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        clearInterval(timer);
        finishIntro();
      });
    }
  }

  /* ---------- Theme ---------- */
  function initTheme() {
    const toggle = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');

    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
    } else if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }
  }

  /* ---------- RTL ---------- */
  function initRTL() {
    const toggle = document.querySelector('.rtl-toggle');
    const stored = localStorage.getItem('dir');
    if (stored) document.documentElement.setAttribute('dir', stored);

    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('dir');
        const next = current === 'rtl' ? 'ltr' : 'rtl';
        document.documentElement.setAttribute('dir', next);
        localStorage.setItem('dir', next);
      });
    }
  }

  /* ---------- Mobile Menu ---------- */
  function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      links.forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }
  }

  /* ---------- Header Scroll ---------- */
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.pageYOffset > 40);
    }, { passive: true });
  }

  /* ---------- Reveal on Scroll ---------- */
  function initRevealOnScroll() {
    const elements = document.querySelectorAll('.reveal, .reveal-fade, .reveal-scale');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /* ---------- Form Validation ---------- */
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
      const requiredInputs = form.querySelectorAll('[required]');

      // Clear a field error as soon as the user fixes the value.
      requiredInputs.forEach(input => {
        input.addEventListener('input', () => {
          input.classList.remove('error');
          const errorEl = input.parentElement.querySelector('.form-error');
          if (errorEl) errorEl.style.display = 'none';
        });
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        requiredInputs.forEach(input => {
          const value = input.value.trim();
          const errorEl = input.parentElement.querySelector('.form-error');
          let message = '';

          if (!value) {
            message = input.type === 'password' ? 'Password is required' : 'This field is required';
          } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            message = 'Please enter a valid email';
          }

          if (message) {
            valid = false;
            input.classList.add('error');
            if (errorEl) {
              errorEl.textContent = message;
              errorEl.style.display = 'block';
            }
          } else {
            input.classList.remove('error');
            if (errorEl) errorEl.style.display = 'none';
          }
        });

        if (!valid) {
          const firstInvalid = form.querySelector('.form-input.error, .form-textarea.error, input.error');
          if (firstInvalid) firstInvalid.focus();
          return;
        }

        const btn = form.querySelector('[type="submit"]');
        const action = form.getAttribute('action');

        // Static HR portal login: validate locally, then navigate directly to dashboard.
        // We deliberately do not submit the password through the GET query string.
        if (form.hasAttribute('data-login') && action && action !== '#') {
          if (btn) {
            btn.textContent = 'Signing in...';
            btn.disabled = true;
          }

          const destination = new URL(action, window.location.href).href;
          window.location.assign(destination);
          return;
        }

        // Other forms in this static template use a visual success state.
        if (action && action !== '#' && !action.startsWith('javascript:')) {
          window.location.assign(new URL(action, window.location.href).href);
          return;
        }

        if (btn) {
          const original = btn.textContent;
          btn.textContent = 'Sending...';
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = 'Sent successfully';
            setTimeout(() => {
              btn.textContent = original;
              btn.disabled = false;
              form.reset();
            }, 1800);
          }, 900);
        }
      });
    });
  }

  /* ---------- Smooth Scroll ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ---------- Infinite Meteor Background ---------- */
  function initMeteorBackground() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let container = document.querySelector('.meteor-bg');
    if (!container) {
      container = document.createElement('div');
      container.className = 'meteor-bg';
      document.body.prepend(container);
    }

    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let width, height, meteors = [];
    const METEOR_COUNT = 18;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function createMeteor() {
      return {
        x: Math.random() * width,
        y: Math.random() * height * 0.4 - height * 0.2,
        length: 40 + Math.random() * 80,
        speed: 1.5 + Math.random() * 3.5,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        opacity: 0.15 + Math.random() * 0.35,
        life: 0,
        maxLife: 80 + Math.random() * 100
      };
    }

    function initMeteors() {
      meteors = [];
      for (let i = 0; i < METEOR_COUNT; i++) {
        const m = createMeteor();
        m.life = Math.random() * m.maxLife;
        meteors.push(m);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const baseColor = isDark ? '255, 255, 255' : '10, 10, 11';

      meteors.forEach((m, i) => {
        m.life++;
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;

        let alpha = m.opacity;
        if (m.life < 15) alpha *= m.life / 15;
        if (m.life > m.maxLife - 20) alpha *= (m.maxLife - m.life) / 20;

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        gradient.addColorStop(0, `rgba(${baseColor}, 0)`);
        gradient.addColorStop(1, `rgba(${baseColor}, ${alpha})`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.lineCap = 'round';
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = `rgba(${baseColor}, ${alpha * 1.2})`;
        ctx.arc(m.x, m.y, 1.1, 0, Math.PI * 2);
        ctx.fill();

        if (m.life > m.maxLife || m.x > width + 50 || m.y > height + 50) {
          meteors[i] = createMeteor();
        }
      });

      requestAnimationFrame(draw);
    }

    resize();
    initMeteors();
    draw();

    window.addEventListener('resize', () => {
      resize();
      initMeteors();
    }, { passive: true });
  }

  /* ---------- Interactive card spotlight ---------- */
  function initInteractiveCards() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const selector = '.card, .prog-card, .t-card, .outcome-card, .journey-card, .recog-card, .academy-card, .stat-card, .table-card, .advantage-item';
    document.querySelectorAll(selector).forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
      }, { passive: true });
    });
  }

})();

/**
 * ROUNAK RAJ — MODERN DEVELOPER PORTFOLIO
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile navigation drawer toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-resume');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileToggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!siteHeader.contains(e.target) && mobileNav.classList.contains('open')) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('open');
      }
    });
  }

  // 3. Active Nav Link Tracking on Scroll
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const trackedSections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  trackedSections.forEach(section => sectionObserver.observe(section));

  // 4. Vercel-Style Spotlight Hover Effect for Cards
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 5. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // 7. Copy Email to Clipboard Feature
  const copyBtn = document.getElementById('copy-email-btn');
  const copyToast = document.getElementById('copy-toast');
  const emailText = 'rounak00003@gmail.com';

  if (copyBtn && copyToast) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailText);
        copyToast.textContent = 'Email copied to clipboard!';
        copyToast.classList.add('show');
        copyBtn.querySelector('.copy-label').textContent = 'Copied!';

        setTimeout(() => {
          copyToast.classList.remove('show');
          copyBtn.querySelector('.copy-label').textContent = 'Copy';
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = emailText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        copyToast.textContent = 'Email copied to clipboard!';
        copyToast.classList.add('show');
        copyBtn.querySelector('.copy-label').textContent = 'Copied!';
        setTimeout(() => {
          copyToast.classList.remove('show');
          copyBtn.querySelector('.copy-label').textContent = 'Copy';
        }, 2500);
      }
    });
  }
});

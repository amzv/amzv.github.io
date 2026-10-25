/**
 * Core Micro-interactions & Navigation Logic
 * Author: Angel Mario Zarate Villazon
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (toggleBtn && siteNav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('mobile-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.textContent = isOpen ? 'CLOSE [×]' : 'MENU [≡]';
    });
  }

  // Copy to clipboard helper for citations and emails
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.textContent;
        btn.textContent = 'COPIED ✓';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    });
  });

  // Current year update in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

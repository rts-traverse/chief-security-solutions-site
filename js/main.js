(function () {
  'use strict';

  function mobileMenu() {
    var btn = document.getElementById('mobile-menu-toggle');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    function open() {
      menu.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Close menu');
      document.documentElement.style.overflow = 'hidden';
    }
    function close() {
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
      document.documentElement.style.overflow = '';
    }
    function toggle() {
      if (menu.hidden) open(); else close();
    }

    btn.addEventListener('click', toggle);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) {
        close();
        btn.focus();
      }
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });
  }

  function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (!id || id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  function yearStamp() {
    var year = new Date().getFullYear();
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(year);
    });
  }

  function reducedMotionGuard() {
    var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) document.documentElement.classList.add('reduce-motion');
    mq.addEventListener('change', function (e) {
      document.documentElement.classList.toggle('reduce-motion', e.matches);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    mobileMenu();
    smoothScroll();
    yearStamp();
    reducedMotionGuard();
  });
})();

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

  function stubForms() {
    document.querySelectorAll('form[action="#"]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
          form.reportValidity();
          return;
        }
        var msg = document.createElement('div');
        msg.setAttribute('role', 'status');
        msg.setAttribute('aria-live', 'polite');
        msg.setAttribute('tabindex', '-1');
        msg.className = 'mt-8 px-6 py-10 rounded-lg bg-mist border border-hairline text-center';
        msg.innerHTML =
          '<p class="font-serif text-2xl md:text-3xl text-ink leading-tight">Thank you &mdash; we&rsquo;ll be in touch within one business day.</p>' +
          '<p class="mt-4 text-sm text-steel">For urgent or after-hours requests, call <a href="tel:+12059467938" class="text-navy hover:text-ink">(205) 946-7938</a>.</p>';
        form.replaceWith(msg);
        msg.focus({ preventScroll: true });
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    mobileMenu();
    smoothScroll();
    yearStamp();
    reducedMotionGuard();
    stubForms();
  });
})();

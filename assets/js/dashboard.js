/**
 * Dashboard specific interactions
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.dash-sidebar');
    const menuToggle = document.querySelector('.dashboard-menu-toggle');

    if (!sidebar || !menuToggle) return;

    const closeSidebar = function () {
      sidebar.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', function () {
      const willOpen = !sidebar.classList.contains('open');
      sidebar.classList.toggle('open', willOpen);
      menuToggle.setAttribute('aria-expanded', String(willOpen));
      document.body.style.overflow = willOpen ? 'hidden' : '';
    });

    sidebar.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 1024) closeSidebar();
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) closeSidebar();
    });
  });
})();

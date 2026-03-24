// script.js - 全局 JavaScript
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!menuToggle || !navMenu) return;
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}
function initTabs() {
  const tabContainers = document.querySelectorAll('.tab-container');
  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('[role="tab"]');
    const panels = container.querySelectorAll('[role="tabpanel"]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('aria-controls');
        tabs.forEach(t => { t.setAttribute('aria-selected', 'false'); t.classList.remove('active'); });
        panels.forEach(p => { p.classList.remove('active'); p.setAttribute('hidden', ''); });
        tab.setAttribute('aria-selected', 'true'); tab.classList.add('active');
        const panel = document.getElementById(target);
        if (panel) { panel.classList.add('active'); panel.removeAttribute('hidden'); }
        history.pushState(null, '', `#${tab.id}`);
      });
    });
  });
}
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initTabs();
  console.log('网站初始化完成');
});

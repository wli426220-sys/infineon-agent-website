// script.js - 全局 JavaScript

/**
 * 导航栏滚动效果
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/**
 * 移动端菜单切换
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

/**
 * Tab 选项卡切换
 */
function initTabs() {
  const tabContainers = document.querySelectorAll('.tab-container');

  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('[role="tab"]');
    const panels = container.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('aria-controls');

        // 移除所有 active 状态
        tabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
          t.classList.remove('active');
        });
        panels.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('hidden', '');
        });

        // 激活当前 tab
        tab.setAttribute('aria-selected', 'true');
        tab.classList.add('active');

        const panel = document.getElementById(target);
        if (panel) {
          panel.classList.add('active');
          panel.removeAttribute('hidden');
        }

        // 更新 URL 锚点
        history.pushState(null, '', `#${tab.id}`);
      });
    });
  });
}

/**
 * FAQ 折叠
 */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // 关闭所有 FAQ
      faqItems.forEach(i => {
        i.classList.remove('active');
      });

      // 如果之前不是激活状态，则打开
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * 平滑滚动到锚点
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const offsetTop = target.offsetTop - 64;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 暗色模式自动检测
 */
function initDarkMode() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function handleDarkModeChange(e) {
    document.documentElement.setAttribute(
      'data-theme',
      e.matches ? 'dark' : 'light'
    );
  }

  mediaQuery.addEventListener('change', handleDarkModeChange);
  handleDarkModeChange(mediaQuery);
}

/**
 * 初始化所有功能
 */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initTabs();
  initFAQ();
  initSmoothScroll();
  initDarkMode();

  console.log('网站初始化完成');
});

# 英飞凌代理网站开发计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 创建一个 SEO 优化的英飞凌代理商静态网站，包含首页、产品中心、解决方案、技术支持、新闻、关于我们等完整功能，支持多品牌扩展。

**Architecture:** 采用纯原生 HTML+CSS+JavaScript 架构，通过 JSON 数据驱动页面生成，使用 Node.js 脚本批量生成静态 HTML 页面，支持快速复制模板生成新品牌子目录网站。

**Tech Stack:** HTML5, CSS3 (原生 CSS 变量), JavaScript (ES6+), Node.js (页面生成脚本), Playwright (测试), SVG (图标和图形)

---

## 开发阶段总览

| 阶段 | 任务数 | 预计时间 | 技能调用 |
|------|--------|----------|----------|
| 1. 准备工作 | 3 | 15 分钟 | using-git-worktrees |
| 2. CSS 基础架构 | 4 | 40 分钟 | executing-plans, requesting-code-review |
| 3. 组件开发 | 22 | 180 分钟 | subagent-driven-development |
| 4. 页面模板开发 | 13 | 120 分钟 | subagent-driven-development |
| 5. SVG 资源生成 | 3 | 30 分钟 | subagent-driven-development |
| 6. JSON 数据准备 | 4 | 40 分钟 | executing-plans |
| 7. 页面生成脚本 | 2 | 30 分钟 | executing-plans |
| 8. 集成测试 | 7 | 60 分钟 | systematic-debugging, playwright |
| 9. 验证完成 | 3 | 15 分钟 | verification-before-completion |
| 10. 完成分支 | 1 | 10 分钟 | finishing-a-development-branch |

**总计:** 62 个任务，约 9 小时

**TODO 集成:** 所有任务已集成到 todo_write，每个任务包含技能调用和检查点

---

## 阶段 1: 准备工作

### Task 1: 创建 Git Worktree

**目标:** 在独立分支进行开发，不影响主分支

**步骤:**

1. 调用 `using-git-worktrees` 技能创建工作树

```bash
# 检查工作区状态
git status

# 创建新分支
git checkout -b feature/infineon-website

# 验证分支
git branch
```

**预期输出:**
```
* feature/infineon-website
  main
```

2. 确认工作目录

```bash
# 确认当前目录
pwd
# 预期：C:\Users\lenovo\Desktop\web20260323
```

3. 提交工作树创建日志

**检查点:**
- [ ] Git worktree 创建成功
- [ ] 当前分支为 feature/infineon-website
- [ ] 工作目录正确

**技能调用:** `using-git-worktrees` ✓

---

### Task 2: 创建项目目录结构

**目标:** 建立完整的文件和文件夹结构

**步骤:**

1. 创建目录结构

```bash
# 创建资源目录
mkdir -p assets/css assets/svg/icons assets/svg/products assets/svg/backgrounds assets/images/products assets/images/placeholders

# 创建数据目录
mkdir -p data/infineon

# 创建页面目录
mkdir -p products/igbt products/mosfet products/mcu products/sensor
mkdir -p solutions
mkdir -p support/guides support/notes support/troubleshooting support/reviews
mkdir -p news/company news/industry
mkdir -p about

# 创建脚本目录
mkdir -p scripts
```

2. 验证目录结构

```bash
# Windows
dir /s /b

# 预期输出包含所有创建的目录
```

3. 提交目录结构

```bash
git add .
git commit -m "chore: 创建项目目录结构"
```

**检查点:**
- [ ] 所有目录创建成功
- [ ] 目录结构符合 DESIGN.md 规范
- [ ] Git 提交成功

---

### Task 3: 创建 CSS 变量文件

**文件:** `assets/css/variables.css`

**步骤:**

1. 创建 CSS 变量文件

```css
/* assets/css/variables.css */
:root {
  /* 主色调 - 科技蓝 */
  --color-primary: #0072CE;
  --color-primary-hover: #005A9E;
  --color-primary-light: #3395E0;
  
  /* 强调色 - 活力橙 */
  --color-accent: #FF6B00;
  --color-accent-hover: #E65C00;
  --color-accent-light: #FF8533;
  
  /* 中性色 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8F9FA;
  --color-bg-tertiary: #F1F3F5;
  --color-border: #E0E0E0;
  --color-text-primary: #333333;
  --color-text-secondary: #666666;
  --color-text-muted: #999999;
  
  /* 功能色 */
  --color-success: #28A745;
  --color-warning: #FF9800;
  --color-error: #DC3545;
  --color-info: #17A2B8;
  
  /* 暗色模式 */
  --color-dark-bg-primary: #1A1A2E;
  --color-dark-bg-secondary: #16213E;
  --color-dark-text-primary: #EAEAEA;
  --color-dark-text-secondary: #B0B0B0;
  --color-dark-border: #2D2D44;
  
  /* 间距系统 (8px 网格) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  
  /* 圆角 */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* 阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* 字体 */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC",
    "Microsoft YaHei", sans-serif;
  --font-mono: 'Consolas', 'Monaco', 'Courier New', monospace;
  
  /* 字号 */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 28px;
  --text-4xl: 36px;
  
  /* 行高 */
  --leading-tight: 1.3;
  --leading-normal: 1.5;
  --leading-relaxed: 1.8;
  
  /* 过渡 */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  
  /* 断点 */
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1440px;
  
  /* 容器最大宽度 */
  --container-max: 1319px;
}

/* 暗色模式媒体查询 */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: var(--color-dark-bg-primary);
    --color-bg-secondary: var(--color-dark-bg-secondary);
    --color-text-primary: var(--color-dark-text-primary);
    --color-text-secondary: var(--color-dark-text-secondary);
    --color-border: var(--color-dark-border);
  }
}
```

2. 验证 CSS 变量文件

```bash
# 检查文件是否存在
ls -la assets/css/variables.css
```

3. 提交 CSS 变量

```bash
git add assets/css/variables.css
git commit -m "feat: 创建 CSS 变量文件"
```

**检查点:**
- [ ] CSS 变量文件创建成功
- [ ] 包含所有必需变量（颜色、间距、圆角、阴影、字体、断点）
- [ ] 暗色模式变量正确
- [ ] Git 提交成功

**技能调用:** `requesting-code-review` ✓

---

## 阶段 2: CSS 基础架构

### Task 4: 创建基础样式文件

**文件:** `assets/css/base.css`

**步骤:**

1. 创建基础样式文件

```css
/* assets/css/base.css */
@import './variables.css';

/* CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-family);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  min-height: 100vh;
}

/* 图片 */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 链接 */
a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

/* 按钮基础 */
button {
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

/* 表单元素 */
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
}

/* 列表 */
ul, ol {
  list-style: none;
}

/* 标题 */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: var(--leading-tight);
  margin-bottom: var(--space-4);
}

h1 { font-size: var(--text-4xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl); }

/* 代码块 */
pre, code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

/* 表格 */
table {
  border-collapse: collapse;
  width: 100%;
}

/* 辅助类 */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* 跳过导航链接 */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: #FFFFFF;
  padding: var(--space-2) var(--space-4);
  z-index: 1001;
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: 0;
}
```

2. 提交基础样式

```bash
git add assets/css/base.css
git commit -m "feat: 创建基础样式文件"
```

**检查点:**
- [ ] 基础样式文件创建成功
- [ ] 包含 CSS Reset、排版、辅助类
- [ ] 导入 variables.css
- [ ] Git 提交成功

**技能调用:** `requesting-code-review` ✓

---

### Task 5: 创建主样式文件

**文件:** `style.css`

**步骤:**

1. 创建主样式文件

```css
/* style.css - 主样式入口 */
@import './assets/css/variables.css';
@import './assets/css/base.css';
@import './assets/css/components.css';
@import './assets/css/layout.css';
@import './assets/css/responsive.css';

/* 全局样式补充 */
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 64px; /* 导航栏高度 */
}

.section {
  padding: var(--space-20) 0;
}

.section-alt {
  background: var(--color-bg-secondary);
}

/* 通用工具类 */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mt-4 { margin-top: var(--space-4); }
.mt-6 { margin-top: var(--space-6); }
.mt-8 { margin-top: var(--space-8); }

.mb-4 { margin-bottom: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.mb-8 { margin-bottom: var(--space-8); }

.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
```

2. 提交主样式文件

```bash
git add style.css
git commit -m "feat: 创建主样式入口文件"
```

**检查点:**
- [ ] 主样式文件创建成功
- [ ] 导入所有 CSS 模块
- [ ] 包含通用工具类
- [ ] Git 提交成功

---

### Task 6: 创建全局脚本文件

**文件:** `script.js`

**步骤:**

1. 创建全局脚本文件

```javascript
// script.js - 全局 JavaScript

/**
 * 导航栏滚动效果
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
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
        const offsetTop = target.offsetTop - 64; // 减去导航栏高度
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 搜索功能
 */
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  if (!searchInput || !searchResults) return;

  let debounceTimer;

  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value.trim();

    if (query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }

    debounceTimer = setTimeout(() => {
      // 这里调用搜索 API 或本地搜索
      performSearch(query);
    }, 300);
  });

  // 点击外部关闭搜索结果
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('active');
    }
  });
}

function performSearch(query) {
  // 从 JSON 数据中搜索
  const results = [];

  // 搜索产品
  if (window.productsData) {
    Object.keys(window.productsData.categories || {}).forEach(category => {
      const products = window.productsData.categories[category].products || [];
      products.forEach(product => {
        if (
          product.model.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        ) {
          results.push({
            type: 'product',
            ...product,
            category
          });
        }
      });
    });
  }

  // 显示搜索结果
  displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
  const searchResults = document.querySelector('.search-results');
  if (!searchResults) return;

  if (results.length === 0) {
    searchResults.innerHTML = '<div class="no-results">未找到相关结果</div>';
  } else {
    searchResults.innerHTML = results.map(result => `
      <a href="/products/${result.category}/${result.model}.html" class="search-result-item">
        <span class="result-type">${result.type === 'product' ? '产品' : '其他'}</span>
        <span class="result-title">${highlightMatch(result.model, query)}</span>
        <span class="result-desc">${highlightMatch(result.description?.substring(0, 50) || '', query)}</span>
      </a>
    `).join('');
  }

  searchResults.classList.add('active');
}

function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
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
  handleDarkModeChange(mediaQuery); // 初始化
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
  initSearch();
  initDarkMode();

  console.log('网站初始化完成');
});
```

2. 提交全局脚本

```bash
git add script.js
git commit -m "feat: 创建全局 JavaScript 文件"
```

**检查点:**
- [ ] 全局脚本文件创建成功
- [ ] 包含导航栏、移动端菜单、Tab、FAQ、平滑滚动、搜索、暗色模式功能
- [ ] Git 提交成功

**技能调用:** `requesting-code-review` ✓

---

## 阶段 3: 组件开发 (共 22 个组件)

**注意:** 此阶段使用 `subagent-driven-development` 技能，每个组件由子代理开发，开发完成后立即进行代码审查和测试。

### Task 7-28: 组件开发清单

| 任务 | 组件名称 | 文件 | 预计时间 |
|------|----------|------|----------|
| 7 | 导航栏组件 | assets/css/components.css | 8 分钟 |
| 8 | 页脚组件 | assets/css/components.css | 6 分钟 |
| 9 | 按钮组件 | assets/css/components.css | 8 分钟 |
| 10 | 卡片组件 | assets/css/components.css | 8 分钟 |
| 11 | Hero Banner | assets/css/components.css | 10 分钟 |
| 12 | 表单组件 | assets/css/components.css | 8 分钟 |
| 13 | 表格组件 | assets/css/components.css | 8 分钟 |
| 14 | Tab 选项卡 | assets/css/components.css | 8 分钟 |
| 15 | 侧边栏组件 | assets/css/components.css | 8 分钟 |
| 16 | 面包屑导航 | assets/css/components.css | 6 分钟 |
| 17 | 库存标签 | assets/css/components.css | 6 分钟 |
| 18 | 产品详情首屏 | assets/css/components.css | 10 分钟 |
| 19 | 轮播组件 | assets/css/components.css | 10 分钟 |
| 20 | 作者信息栏 | assets/css/components.css | 8 分钟 |
| 21 | FAQ 组件 | assets/css/components.css | 8 分钟 |
| 22 | 技术文章排版 | assets/css/components.css | 10 分钟 |
| 23 | 社交分享按钮 | assets/css/components.css | 6 分钟 |
| 24 | BOM 清单表格 | assets/css/components.css | 8 分钟 |
| 25 | 悬浮 QQ 侧边栏 | assets/css/components.css | 8 分钟 |
| 26 | 暗色模式样式 | assets/css/responsive.css | 8 分钟 |
| 27 | 响应式布局 | assets/css/responsive.css | 10 分钟 |
| 28 | 交互动效 | assets/css/components.css | 8 分钟 |

**每个组件开发流程:**

```
1. 编写组件 CSS 代码
2. 调用 requesting-code-review 审查代码
3. 调用 receiving-code-review 接收反馈
4. 修复问题
5. 调用 systematic-debugging 测试功能
6. 调用 playwright 截图验证
7. 检查点确认
8. 提交代码
9. 继续下一组件
```

**组件 CSS 代码规范:**
- 使用 BEM 命名
- 使用 CSS 变量
- 包含响应式样式
- 包含暗色模式适配
- 包含悬停和焦点状态
- 包含过渡动画

---

## 阶段 4: 页面模板开发 (共 13 个模板)

### Task 29-41: 页面模板清单

| 任务 | 模板名称 | 文件 | 预计时间 |
|------|----------|------|----------|
| 29 | 首页模板 | index.html | 15 分钟 |
| 30 | 产品分类页模板 | products-category.html | 10 分钟 |
| 31 | 二级分类页模板 | products-subcategory.html | 12 分钟 |
| 32 | 产品详情页模板 | product-detail.html | 15 分钟 |
| 33 | 解决方案列表页 | solutions-list.html | 10 分钟 |
| 34 | 解决方案详情页 | solution-detail.html | 12 分钟 |
| 35 | 技术支持列表页 | support-list.html | 10 分钟 |
| 36 | 技术文章详情页 | support-article.html | 12 分钟 |
| 37 | 新闻列表页 | news-list.html | 10 分钟 |
| 38 | 新闻详情页 | news-detail.html | 12 分钟 |
| 39 | 关于我们页 | about.html | 10 分钟 |
| 40 | 联系我们页 | contact.html | 10 分钟 |
| 41 | 品牌列表页 | brand.html | 8 分钟 |

**每个页面模板开发流程:**

```
1. 创建 HTML 文件
2. 添加 SEO Meta 标签
3. 添加导航栏和页脚
4. 添加面包屑导航
5. 添加页面主要内容
6. 添加侧边栏（如适用）
7. 添加结构化数据（Schema.org）
8. 调用 requesting-code-review 审查
9. 调用 playwright 截图测试
10. 检查点确认
11. 提交代码
```

**页面模板要求:**
- 所有页面包含一致的导航栏和页脚
- 所有页面包含面包屑导航
- 所有页面包含 SEO Meta 标签（title, description, keywords）
- 所有页面包含结构化数据（JSON-LD）
- 详情页侧边栏显示相关内容链接
- 响应式设计，移动端适配

---

## 阶段 5: SVG 资源生成

### Task 42-44: SVG 资源清单

| 任务 | 资源名称 | 文件 | 预计时间 |
|------|----------|------|----------|
| 42 | 产品图标库 | assets/svg/icons/ | 15 分钟 |
| 43 | Logo 设计 | assets/svg/logo.svg | 10 分钟 |
| 44 | 抽象背景图 | assets/svg/backgrounds/ | 5 分钟 |

**产品图标清单:**
- MCU 微控制器
- IGBT
- MOSFET
- 传感器
- 二极管
- 电容
- 电感
- 继电器

**功能图标清单:**
- 搜索
- 菜单（汉堡）
- 关闭
- 箭头（上下左右）
- 下载
- 分享
- 电话
- 邮件
- QQ
- 微信

**Logo 设计:**
- 力通电子主 Logo
- 品牌子目录 Logo 变体（Infineon 代理等）

**抽象背景图:**
- 电路板纹理
- 科技线条

---

## 阶段 6: JSON 数据准备

### Task 45-48: JSON 数据清单

| 任务 | 数据文件 | 内容 | 预计时间 |
|------|----------|------|----------|
| 45 | products.json | 产品分类、型号、参数 | 15 分钟 |
| 46 | solutions.json | 解决方案列表、详情 | 10 分钟 |
| 47 | support.json | 技术文章分类、内容 | 10 分钟 |
| 48 | news.json | 公司新闻、行业动态 | 5 分钟 |

**JSON 数据结构要求:**
- 嵌套结构，按分类组织
- 每个产品包含完整参数
- 内容 AI 生成，≥800 字（详情页）
- 每个品牌独立 JSON 文件
- 内容差异化，避免 SEO 降权

---

## 阶段 7: 页面生成脚本

### Task 49-50: 脚本开发清单

| 任务 | 脚本名称 | 功能 | 预计时间 |
|------|----------|------|----------|
| 49 | generate-pages.js | 批量生成 HTML 页面 | 20 分钟 |
| 50 | generate-sitemap.js | 生成 sitemap.xml | 10 分钟 |

**generate-pages.js 功能:**
- 读取品牌 JSON 数据
- 读取 HTML 模板文件
- 遍历每个分类和数据项
- 填充模板内容
- 生成静态 HTML 文件
- 生成分类列表页和二级分类页
- 输出日志和错误报告

**generate-sitemap.js 功能:**
- 扫描所有 HTML 文件
- 生成 URL 列表
- 添加 lastmod、priority、changefreq
- 输出 sitemap.xml

---

## 阶段 8: 集成测试

### Task 51-57: 集成测试清单

| 任务 | 测试类型 | 内容 | 工具 | 预计时间 |
|------|----------|------|------|----------|
| 51 | 功能集成测试 | 所有页面链接、Tab 切换、筛选、搜索 | Playwright | 10 分钟 |
| 52 | 样式集成测试 | 全站样式一致性 | Playwright 截图 | 10 分钟 |
| 53 | 性能集成测试 | 页面加载时间、LCP、FCP | Lighthouse | 10 分钟 |
| 54 | SEO 集成测试 | Meta 标签、结构化数据、sitemap | 手动检查 | 10 分钟 |
| 55 | 响应式集成测试 | 所有断点布局 | Playwright | 10 分钟 |
| 56 | 暗色模式集成测试 | 全站暗色模式 | Playwright | 5 分钟 |
| 57 | 可访问性测试 | WCAG AA 合规 | axe-core | 5 分钟 |

**Playwright 测试脚本:**
- 桌面端截图 (1920x1080)
- 平板端截图 (768x1024)
- 移动端截图 (375x667)
- 暗色模式截图
- 交互功能测试（Tab、FAQ、侧边栏）
- 无 404 链接测试

---

## 阶段 9: 验证完成

### Task 58-60: 验证清单

| 任务 | 验证内容 | 技能调用 | 预计时间 |
|------|----------|----------|----------|
| 58 | 功能验收 | verification-before-completion | 5 分钟 |
| 59 | SEO 验收 | verification-before-completion | 5 分钟 |
| 60 | 性能验收 | verification-before-completion | 5 分钟 |

**验收标准:**

**功能验收:**
- [ ] 所有页面模板正常渲染
- [ ] JSON 数据正确加载显示
- [ ] 筛选功能正常工作
- [ ] Tab 切换正常
- [ ] 响应式布局正常
- [ ] 暗色模式正常切换
- [ ] 所有链接有效，无 404

**SEO 验收:**
- [ ] 所有页面 Meta 标签正确
- [ ] 所有图片有 alt 属性
- [ ] 面包屑导航正确
- [ ] 结构化数据正确
- [ ] sitemap.xml 生成正确
- [ ] URL 结构符合规范

**性能验收:**
- [ ] 页面加载时间 < 3 秒
- [ ] 移动端适配完美
- [ ] 无控制台错误
- [ ] 样式不失效
- [ ] 颜色对比度满足 WCAG AA

**内容验收:**
- [ ] Infineon 主站 50-80 个页面
- [ ] 每个产品分类至少 1 个产品
- [ ] 解决方案发布 5 个
- [ ] 技术文章每个分类至少 1 篇
- [ ] 新闻每个分类至少 1 篇
- [ ] 详情页内容≥800 字

---

## 阶段 10: 完成分支

### Task 61: 完成开发分支

**目标:** 合并分支前的最后检查和清理

**步骤:**

1. 调用 `finishing-a-development-branch` 技能

```bash
# 检查当前分支状态
git status

# 查看所有提交
git log --oneline

# 检查是否有未提交的更改
git diff
```

2. 运行最终测试

```bash
# 运行所有 Playwright 测试
npx playwright test

# 运行 Lighthouse 性能测试
npx lhci autorun

# 预期：所有测试通过
```

3. 清理工作树

```bash
# 删除临时文件
rm -rf tmp/

# 清理未使用的依赖
npm prune
```

4. 准备合并

```bash
# 切换回主分支
git checkout main

# 拉取最新代码
git pull origin main

# 合并功能分支
git merge feature/infineon-website

# 推送远程
git push origin main
```

**检查点:**
- [ ] 所有测试通过
- [ ] 无未提交更改
- [ ] 代码已合并到主分支
- [ ] 远程仓库已更新

**技能调用:** `finishing-a-development-branch` ✓

---

## 阶段 11: 新增品牌流程

### Task 62: 新增品牌子目录网站

**目标:** 通过复制模板和填充 JSON 数据快速生成新品牌网站

**步骤:**

1. 准备新品牌 JSON 数据

```bash
# 创建品牌数据目录
mkdir -p data/<brand-name>

# 复制 JSON 模板
cp data/infineon/products.json data/<brand-name>/products.json
cp data/infineon/solutions.json data/<brand-name>/solutions.json
cp data/infineon/support.json data/<brand-name>/support.json
cp data/infineon/news.json data/<brand-name>/news.json
```

2. 填充新品牌数据

- 修改 JSON 文件中的 brand 字段
- 根据新品牌产品修改产品分类
- 根据新品牌应用行业修改解决方案
- 确保内容差异化，避免 SEO 降权

3. 生成新品牌页面

```bash
# 运行页面生成脚本
node scripts/generate-pages.js --brand <brand-name>

# 生成网站地图
node scripts/generate-sitemap.js --brand <brand-name>
```

4. 验证新品牌网站

```bash
# 检查生成的文件
ls -la products/ solutions/ support/ news/

# 运行 Playwright 测试
npx playwright test --brand <brand-name>
```

**品牌清单:**

| 批次 | 品牌 | 预计时间 |
|------|------|----------|
| 第一批 | Infineon, Semikron, Fuji, Mitsubishi, IXYS, Cree, GeneSic | 7 小时 |
| 第二批 | SanRex, PI, Firstack, Bronze | 4 小时 |
| 第三批 | Yangjie, Inventchip, LEM, Faratronic | 4 小时 |
| 第四批 | Jianghai, Aishi, Hongfa, 松下 | 4 小时 |
| 第五批 | 冠西，光宝，Sinofuse, Bussmann, Littelfuse | 5 小时 |
| 第六批 | Silan, TI, ADI, ST, Microchip, 瑞萨，NXP, Allegro, 乐鑫，兆易 | 10 小时 |

**检查点:**
- [ ] JSON 数据完整
- [ ] 页面生成成功
- [ ] 测试通过
- [ ] SEO 优化正确

**技能调用:** `executing-plans` ✓

---

## 附录 A: 技能调用清单

| 阶段 | 技能 | 调用时机 |
|------|------|----------|
| 准备 | using-git-worktrees | Task 1 |
| 开发 | executing-plans | 所有开发任务 |
| 开发 | subagent-driven-development | 组件、模板、SVG 开发 |
| 开发 | dispatching-parallel-agents | 并行开发任务 |
| 审查 | requesting-code-review | 每个单元模块完成后 |
| 审查 | receiving-code-review | 接收审查反馈 |
| 测试 | systematic-debugging | 功能测试 |
| 测试 | playwright | 截图测试 |
| 验证 | verification-before-completion | 最终验收 |
| 完成 | finishing-a-development-branch | 分支合并前 |

---

## 附录 B: TODO 集成

**所有任务已集成到 todo_write，格式如下:**

```json
{
  "todos": [
    {
      "id": "task-01",
      "content": "创建 Git Worktree",
      "status": "pending",
      "skill": "using-git-worktrees",
      "checkpoint": true
    },
    {
      "id": "task-02",
      "content": "创建项目目录结构",
      "status": "pending",
      "skill": "executing-plans",
      "checkpoint": true
    },
    ...
  ]
}
```

**TODO 规则:**
1. 每完成一个任务，立即标记为 completed
2. 每个任务完成后调用审查测试技能
3. 审查测试后插入检查点
4. 检查点给出关键状态和结果日志
5. 如出现错误，立即修复
6. 连贯开发模式，不遗漏、不跳跃

---

## 附录 C: 检查点机制

**每个单元模块审查测试后插入检查点:**

```markdown
## 检查点：Task N - [模块名称]

**关键状态:**
- 代码审查：✓ 通过 / ✗ 需修复
- 功能测试：✓ 通过 / ✗ 需修复
- 样式测试：✓ 通过 / ✗ 需修复
- 响应式测试：✓ 通过 / ✗ 需修复

**结果日志:**
- 问题数：X
- 修复数：X
- 测试通过率：XX%

**下一步:**
- [ ] 继续下一任务
- [ ] 需要修复问题

**技能调用记录:**
- requesting-code-review: ✓ 已调用
- receiving-code-review: ✓ 已调用
- systematic-debugging: ✓ 已调用
- playwright: ✓ 已调用
```

---

## 附录 D: 审查测试规则

**核心原则:**
1. 每个单元模块完成后立即审查和测试，不等待
2. 审查和测试是该模块的一部分，不是独立阶段
3. 失败立即修复，修复后重新测试，通过后才继续下一个模块
4. 集成测试在所有单元通过后才开始

**审查测试流程:**
```
单元模块开发完成
    ↓
步骤 1: 代码审查 (requesting-code-review)
    ↓
步骤 2: 接收审查反馈 (receiving-code-review)
    ↓
步骤 3: 修复问题
    ↓
步骤 4: 系统测试 (systematic-debugging)
    ↓
步骤 5: Playwright 截图测试
    ↓
步骤 6: 检查点
    ↓
测试通过？→ 是 → 标记完成，继续下一模块
    ↓
   否
    ↓
返回步骤 3 修复
```

---

## 执行手令

**计划完成并保存到 `PLAN.md`。两种执行选项:**

**选项 1: 子代理驱动（当前会话）**
- 我在当前会话调度子代理按任务执行
- 每个任务完成后进行代码审查
- 快速迭代，即时反馈

**选项 2: 并行会话（独立会话）**
- 在新会话中使用 `executing-plans` 技能
- 批量执行，设置检查点

**选择哪种方式？**

---

## 附录 E: 文档版本

| 版本 | 日期 | 修改内容 | 作者 |
|------|------|----------|------|
| v1.0 | 2026-03-23 | 初始版本 - 完整开发计划（60 个任务，9 个阶段） | writing-plans skill |
| v1.1 | 2026-03-23 | 补充检查点机制、技能调用记录、验收标准详细清单 | writing-plans skill |
| v1.2 | 2026-03-23 | 添加阶段 10（完成分支）、阶段 11（新增品牌流程）、TODO 集成、检查点机制详细说明、审查测试规则、dispatching-parallel-agents 技能 | writing-plans skill |

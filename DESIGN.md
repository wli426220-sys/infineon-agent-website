# 英飞凌代理网站 - 详细规划设计文档

## 1. 设计系统概述

### 1.1 项目定位
- **产品类型**：B2B 电子元器件代理商企业网站
- **行业**：电子元件/半导体/工业
- **风格关键词**：专业、可信赖、科技感、极简主义
- **目标用户**：电子工程师、采购人员、企业客户

### 1.2 设计原则
| 优先级 | 原则 | 说明 |
|--------|------|------|
| 1 | 专业性 | 展示代理商权威性和技术实力 |
| 2 | 可信赖 | 通过视觉元素建立信任感 |
| 3 | 易用性 | 工程师快速找到所需信息 |
| 4 | SEO 友好 | 结构化布局利于搜索引擎 |
| 5 | 响应式 | 全设备完美适配 |

---

## 2. 色彩系统

### 2.1 主色调
基于 PRD 要求和科技行业特点：

| 颜色类型 | 颜色名称 | HEX 值 | RGB 值 | 使用场景 |
|----------|----------|--------|--------|----------|
| **主色** | 科技蓝 | `#0072CE` | rgb(0, 114, 206) | 主按钮、链接、品牌元素 |
| **主色悬停** | 深蓝 | `#005A9E` | rgb(0, 90, 158) | 按钮悬停状态 |
| **强调色** | 活力橙 | `#FF6B00` | rgb(255, 107, 0) | CTA 按钮、重要提示 |
| **强调色悬停** | 深橙 | `#E65C00` | rgb(230, 92, 0) | CTA 悬停状态 |

### 2.2 中性色
| 颜色类型 | 颜色名称 | HEX 值 | 使用场景 |
|----------|----------|--------|----------|
| 背景主色 | 纯白 | `#FFFFFF` | 页面主背景 |
| 背景次色 | 浅灰 | `#F8F9FA` | 卡片背景、分区背景 |
| 背景第三色 | 中灰 | `#F1F3F5` | 悬停背景、输入框 |
| 边框色 | 淡灰 | `#E0E0E0` | 分割线、卡片边框 |
| 文字主色 | 深灰黑 | `#333333` | 正文、标题 |
| 文字次色 | 中灰 | `#666666` | 辅助文字、描述 |
| 文字提示色 | 浅灰 | `#999999` | 占位符、禁用文字 |

### 2.3 功能色
| 状态 | 颜色 | HEX 值 | 使用场景 |
|------|------|--------|----------|
| 成功/有货 | 绿色 | `#28A745` | 库存标签、成功提示 |
| 警告/询价 | 橙色 | `#FF9800` | 询价标签、警告提示 |
| 错误 | 红色 | `#DC3545` | 错误提示、必填标记 |
| 信息 | 蓝色 | `#17A2B8` | 信息提示、链接 |

### 2.4 暗色模式配色
| 元素 | 浅色模式 | 暗色模式 |
|------|----------|----------|
| 背景 | `#FFFFFF` | `#1A1A2E` |
| 卡片背景 | `#F8F9FA` | `#16213E` |
| 文字主色 | `#333333` | `#EAEAEA` |
| 文字次色 | `#666666` | `#B0B0B0` |
| 边框色 | `#E0E0E0` | `#2D2D44` |

### 2.5 色彩使用比例
```
主色调（科技蓝）：60%  - 品牌识别
中性色（白/灰）：30%  - 内容和留白
强调色（橙）：10%    - CTA 和重点
```

---

## 3. 字体系统

### 3.1 字体选择
基于现代无衬线字体原则：

**中文优先方案**（系统字体栈）：
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", 
             "Microsoft YaHei", sans-serif;
```

**英文优先方案**（可选）：
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, sans-serif;
```

### 3.2 字体大小和行高
| 元素 | 字号 | 行高 | 字重 | 使用场景 |
|------|------|------|------|----------|
| H1 | 36px (2.25rem) | 1.3 | 700 | 页面主标题 |
| H2 | 28px (1.75rem) | 1.3 | 600 | 章节标题 |
| H3 | 22px (1.375rem) | 1.4 | 600 | 小节标题 |
| H4 | 18px (1.125rem) | 1.4 | 500 | 卡片标题 |
| 正文 | 16px (1rem) | 1.8 | 400 | 主要内容 |
| 辅助文字 | 14px (0.875rem) | 1.5 | 400 | 描述、注释 |
| 小字 | 12px (0.75rem) | 1.5 | 400 | 标签、时间戳 |

### 3.3 响应式字体
```css
/* 移动端字体缩小 */
@media (max-width: 768px) {
  :root {
    --text-h1: 28px;
    --text-h2: 24px;
    --text-h3: 20px;
    --text-body: 15px;
  }
}
```

---

## 4. 间距系统

### 4.1 基础间距单位
基于 8px 网格系统：
```css
:root {
  --space-1: 4px;    /* 最小间距 */
  --space-2: 8px;    /* 基础单位 */
  --space-3: 12px;
  --space-4: 16px;   /* 常用间距 */
  --space-5: 20px;
  --space-6: 24px;   /* 卡片内边距 */
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;  /* 大分区间距 */
  --space-20: 80px;  /* 超大间距 */
}
```

### 4.2 组件间距规范
| 组件 | 内边距 | 外边距 | 说明 |
|------|--------|--------|------|
| 卡片 | 24px | 16px | 标准卡片 |
| 按钮 | 12px 24px | 8px | 中等按钮 |
| 输入框 | 12px 16px | 8px | 标准输入 |
| 导航栏 | 16px 24px | 0 | 高度 64px |
| Hero Banner | 80px 24px | 0 | 上下间距 |
| 页脚 | 48px 24px | 0 | 上下间距 |

---

## 5. 组件设计规范

### 5.1 按钮组件

**主按钮（Primary）**：
```css
.btn-primary {
  background-color: #0072CE;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 114, 206, 0.2);
}

.btn-primary:hover {
  background-color: #005A9E;
  box-shadow: 0 6px 12px rgba(0, 114, 206, 0.3);
  transform: translateY(-1px);
}
```

**CTA 按钮（橙色强调）**：
```css
.btn-cta {
  background-color: #FF6B00;
  color: #FFFFFF;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(255, 107, 0, 0.25);
}

.btn-cta:hover {
  background-color: #E65C00;
  box-shadow: 0 6px 12px rgba(255, 107, 0, 0.35);
  transform: translateY(-2px);
}
```

**次级按钮（Outline）**：
```css
.btn-outline {
  background-color: transparent;
  color: #0072CE;
  border: 2px solid #0072CE;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-outline:hover {
  background-color: #0072CE;
  color: #FFFFFF;
}
```

**按钮尺寸**：
| 尺寸 | 高度 | 内边距 | 字号 | 使用场景 |
|------|------|--------|------|----------|
| 大 | 48px | 14px 32px | 16px | Hero CTA |
| 中 | 44px | 12px 24px | 16px | 标准按钮 |
| 小 | 36px | 8px 16px | 14px | 表格内操作 |

### 5.2 卡片组件

**标准卡片**：
```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  border: 1px solid #E0E0E0;
}

.card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}
```

**产品卡片**：
```css
.product-card {
  background: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}

.product-card-image {
  height: 200px;
  background: #F8F9FA;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card-content {
  padding: 20px;
}

.product-card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}
```

**优势卡片（Feature Card）**：
```css
.feature-card {
  background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%);
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  border: 1px solid #E0E0E0;
  transition: all 0.3s ease;
}

.feature-card-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  background: linear-gradient(135deg, #0072CE 0%, #005A9E 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 114, 206, 0.15);
}
```

### 5.3 导航栏组件

**固定顶部导航**：
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar-logo {
  width: 40px;
  height: 40px;
}

.navbar-tagline {
  font-size: 12px;
  color: #666666;
  margin-left: 8px;
  padding-left: 8px;
  border-left: 1px solid #E0E0E0;
}

.navbar-nav {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 8px 16px;
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: #F1F3F5;
  color: #0072CE;
}

.nav-link.active {
  background: #0072CE;
  color: #FFFFFF;
}
```

### 5.4 Hero Banner 组件

**首页 Hero**：
```css
.hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0072CE 0%, #005A9E 100%);
  overflow: hidden;
  padding: 80px 24px;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,...') center/cover;
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 640px;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 24px;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 16px;
}
```

**详情页 Header Banner**：
```css
.page-header {
  position: relative;
  padding: 80px 24px;
  background: linear-gradient(135deg, #0072CE 0%, #005A9E 100%);
  overflow: hidden;
}

.page-header-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header-title {
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.page-header-meta {
  display: flex;
  gap: 24px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
}

.page-header-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 500;
}
```

### 5.5 表单组件

**输入框**：
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #E0E0E0;
  border-radius: 8px;
  background: #FFFFFF;
  color: #333333;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #0072CE;
  box-shadow: 0 0 0 3px rgba(0, 114, 206, 0.15);
}

.form-input::placeholder {
  color: #999999;
}

.form-input:hover:not(:focus):not(:disabled) {
  border-color: #B0B0B0;
}

.form-input:disabled {
  background: #F1F3F5;
  cursor: not-allowed;
  opacity: 0.6;
}
```

**标签**：
```css
.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
}

.form-label-required::after {
  content: ' *';
  color: #DC3545;
}
```

### 5.6 表格组件

**斑马纹表格**：
```css
.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.spec-table th {
  background: #F1F3F5;
  font-weight: 600;
  color: #333333;
  padding: 14px 16px;
  text-align: left;
  border-bottom: 2px solid #E0E0E0;
}

.spec-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #E0E0E0;
  color: #666666;
}

.spec-table tbody tr:nth-child(odd) {
  background: #F8F9FA;
}

.spec-table tbody tr:nth-child(even) {
  background: #FFFFFF;
}

.spec-table tbody tr:hover {
  background: #F1F3F5;
}

/* 移动端横向滚动 */
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 768px) {
  .spec-table {
    min-width: 600px;
  }
}
```

### 5.7 Tab 选项卡组件

```css
.tab-container {
  margin: 32px 0;
}

.tab-list {
  display: flex;
  gap: 4px;
  border-bottom: 2px solid #E0E0E0;
  margin-bottom: 24px;
}

.tab-button {
  padding: 12px 24px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  font-size: 15px;
  font-weight: 500;
  color: #666666;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-button:hover {
  color: #0072CE;
}

.tab-button.active {
  color: #0072CE;
  border-bottom-color: #0072CE;
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 5.8 侧边栏组件

**Sticky 侧边栏**：
```css
.sidebar {
  position: sticky;
  top: 100px;
  width: 300px;
  padding: 24px;
  background: #F8F9FA;
  border-radius: 12px;
}

.sidebar-section {
  margin-bottom: 32px;
}

.sidebar-title {
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-link {
  display: block;
  padding: 10px 12px;
  color: #666666;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.2s ease;
  margin-bottom: 4px;
}

.sidebar-link:hover {
  background: #FFFFFF;
  color: #0072CE;
}

.sidebar-link.active {
  background: #0072CE;
  color: #FFFFFF;
}

/* 文章目录样式 */
.toc-list {
  border-left: 2px solid #E0E0E0;
  padding-left: 16px;
}

.toc-link {
  position: relative;
}

.toc-link::before {
  content: '';
  position: absolute;
  left: -18px;
  top: 50%;
  width: 6px;
  height: 6px;
  background: #E0E0E0;
  border-radius: 50%;
  transform: translateY(-50%);
}

.toc-link.active::before {
  background: #0072CE;
}
```

### 5.9 面包屑导航

```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
  font-size: 14px;
  color: #666666;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumb-item a {
  color: #0072CE;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-item a:hover {
  color: #005A9E;
  text-decoration: underline;
}

.breadcrumb-separator {
  color: #999999;
}

.breadcrumb-item:last-child a {
  color: #333333;
  text-decoration: none;
  cursor: default;
}

.breadcrumb-item:last-child a:hover {
  color: #333333;
  text-decoration: none;
}
```

### 5.10 库存状态标签

```css
.stock-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.stock-badge.in-stock {
  background: rgba(40, 167, 69, 0.1);
  color: #28A745;
}

.stock-badge.in-stock::before {
  content: '';
  width: 8px;
  height: 8px;
  background: #28A745;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.stock-badge.inquiry {
  background: rgba(255, 152, 0, 0.1);
  color: #FF9800;
}

.stock-badge.inquiry::before {
  content: '📞';
  font-size: 12px;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### 5.11 产品详情页首屏双栏布局

```css
.product-detail-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 40px 0;
  margin-bottom: 48px;
}

/* 左侧：产品图片展示区 */
.product-image-gallery {
  position: relative;
}

.product-main-image {
  width: 100%;
  height: 400px;
  background: #F8F9FA;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border: 1px solid #E0E0E0;
}

.product-main-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-thumbnails {
  display: flex;
  gap: 12px;
}

.product-thumbnail {
  width: 80px;
  height: 80px;
  background: #F8F9FA;
  border: 2px solid #E0E0E0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.product-thumbnail:hover,
.product-thumbnail.active {
  border-color: #0072CE;
}

/* 右侧：核心信息栏 */
.product-info-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-model-title {
  font-size: 32px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 12px;
}

.product-stock-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.product-description {
  font-size: 15px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.product-cta-group {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.product-cta-group .btn-cta {
  flex: 1;
  text-align: center;
}

.product-cta-group .btn-outline {
  flex: 1;
  text-align: center;
}

/* 多样化 CTA 按钮组 */
.product-cta-extended {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
}

.product-cta-extended .btn {
  padding: 10px 16px;
  font-size: 14px;
  justify-content: center;
}

.btn-sample {
  background: #F8F9FA;
  color: #333333;
  border: 1px solid #E0E0E0;
}

.btn-sample:hover {
  background: #E0E0E0;
}

.btn-faq {
  background: transparent;
  color: #0072CE;
  border: 1px solid #0072CE;
}

.btn-faq:hover {
  background: #0072CE;
  color: #FFFFFF;
}
```

### 5.12 配套料号推荐卡片轮播

```css
.related-products-carousel {
  margin: 48px 0;
}

.carousel-title {
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 24px;
}

.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 24px;
  transition: transform 0.3s ease;
}

.carousel-card {
  flex: 0 0 calc(25% - 18px);
  min-width: 200px;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  z-index: 1;
}

.carousel-nav:hover {
  background: #0072CE;
  border-color: #0072CE;
  color: #FFFFFF;
}

.carousel-nav.prev {
  left: -20px;
}

.carousel-nav.next {
  right: -20px;
}

.carousel-container:hover .carousel-nav {
  opacity: 1;
}

.carousel-nav.prev {
  left: 12px;
}

.carousel-nav.next {
  right: 12px;
}
```

### 5.13 作者信息栏

```css
.author-box {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: #F8F9FA;
  border-radius: 12px;
  margin-bottom: 32px;
  border-left: 4px solid #0072CE;
}

.author-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0072CE 0%, #005A9E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
  flex-shrink: 0;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 6px;
}

.author-title {
  font-size: 14px;
  color: #666666;
  margin-bottom: 12px;
}

.author-bio {
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 12px;
}

.author-meta {
  display: flex;
  gap: 24px;
  font-size: 13px;
  color: #999999;
}

.author-link {
  color: #0072CE;
  text-decoration: none;
  font-weight: 500;
}

.author-link:hover {
  text-decoration: underline;
}
```

### 5.14 FAQ 组件

```css
.faq-section {
  margin: 48px 0;
}

.faq-section-title {
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 24px;
}

.faq-item {
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #0072CE;
}

.faq-question {
  width: 100%;
  padding: 20px 24px;
  background: #FFFFFF;
  border: none;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
}

.faq-question:hover {
  background: #F8F9FA;
}

.faq-question-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-left: 16px;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  padding: 0 24px;
  background: #F8F9FA;
  transition: all 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 500px;
  padding: 20px 24px;
}

.faq-answer p {
  color: #666666;
  line-height: 1.8;
  margin: 0;
}
```

### 5.15 技术文章排版样式

```css
/* 文章正文容器 */
.article-content {
  max-width: 800px;
  line-height: 1.8;
  color: #333333;
}

/* 标题样式 - 左侧竖线装饰 */
.article-content h2 {
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin: 48px 0 24px;
  padding-left: 16px;
  border-left: 4px solid #0072CE;
}

.article-content h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  margin: 32px 0 16px;
  padding-left: 12px;
  border-left: 3px solid #0072CE;
}

/* 段落 */
.article-content p {
  margin-bottom: 24px;
  text-align: justify;
}

/* 代码块 */
.article-content pre {
  background: #F5F5F5;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 24px 0;
  border: 1px solid #E0E0E0;
}

.article-content code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  color: #333333;
}

.article-content pre code {
  background: transparent;
  padding: 0;
}

.article-content p code {
  background: #F5F5F5;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
}

/* 引用块 */
.article-content blockquote {
  margin: 24px 0;
  padding: 16px 24px;
  background: #F8F9FA;
  border-left: 4px solid #0072CE;
  color: #666666;
  font-style: italic;
}

.article-content blockquote p {
  margin: 0;
}

/* 列表 */
.article-content ul,
.article-content ol {
  margin: 24px 0;
  padding-left: 24px;
}

.article-content li {
  margin-bottom: 12px;
  line-height: 1.8;
}

/* 表格 */
.article-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
}

.article-content table th,
.article-content table td {
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  text-align: left;
}

.article-content table th {
  background: #F5F5F5;
  font-weight: 600;
}

/* 图片 */
.article-content figure {
  margin: 32px 0;
}

.article-content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-content figcaption {
  text-align: center;
  font-size: 14px;
  color: #666666;
  margin-top: 12px;
}
```

### 5.16 社交分享按钮

```css
.share-buttons {
  display: flex;
  gap: 12px;
  margin: 32px 0;
  padding: 24px 0;
  border-top: 1px solid #E0E0E0;
  border-bottom: 1px solid #E0E0E0;
}

.share-title {
  font-size: 14px;
  color: #666666;
  margin-right: 16px;
  display: flex;
  align-items: center;
}

.share-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #E0E0E0;
  background: #FFFFFF;
}

.share-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.share-button.wechat {
  color: #07C160;
}

.share-button.wechat:hover {
  background: #07C160;
  color: #FFFFFF;
}

.share-button.qq {
  color: #12B7F5;
}

.share-button.qq:hover {
  background: #12B7F5;
  color: #FFFFFF;
}

.share-button.weibo {
  color: #E6162D;
}

.share-button.weibo:hover {
  background: #E6162D;
  color: #FFFFFF;
}

.share-button.linkedin {
  color: #0077B5;
}

.share-button.linkedin:hover {
  background: #0077B5;
  color: #FFFFFF;
}
```

### 5.17 BOM 清单表格

```css
.bom-table {
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;
  font-size: 14px;
}

.bom-table caption {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 16px;
  text-align: left;
}

.bom-table th {
  background: linear-gradient(180deg, #F5F5F5 0%, #F1F3F5 100%);
  font-weight: 600;
  color: #333333;
  padding: 14px 16px;
  text-align: left;
  border-bottom: 2px solid #E0E0E0;
  white-space: nowrap;
}

.bom-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #E0E0E0;
  color: #666666;
}

.bom-table tbody tr:nth-child(odd) {
  background: #F8F9FA;
}

.bom-table tbody tr:nth-child(even) {
  background: #FFFFFF;
}

.bom-table tbody tr:hover {
  background: #F1F3F5;
}

/* 型号链接 */
.bom-table .part-link {
  color: #0072CE;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.bom-table .part-link:hover {
  color: #005A9E;
  text-decoration: underline;
}

/* 表格响应式 */
.bom-table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 768px) {
  .bom-table {
    min-width: 800px;
  }
}
```

### 5.18 右侧悬浮 QQ 侧边栏

```css
.floating-sidebar {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
}

.floating-sidebar-item {
  width: 60px;
  height: 60px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-right: none;
  border-radius: 8px 0 0 8px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.1);
}

.floating-sidebar-item:hover {
  background: #0072CE;
  border-color: #0072CE;
  transform: translateX(-4px);
}

.floating-sidebar-item:hover .floating-icon,
.floating-sidebar-item:hover .floating-text {
  color: #FFFFFF;
}

.floating-icon {
  font-size: 24px;
  margin-bottom: 2px;
  color: #0072CE;
}

.floating-text {
  font-size: 11px;
  color: #666666;
  font-weight: 500;
}

/* QQ 专属样式 */
.floating-sidebar-item.qq .floating-icon {
  color: #12B7F5;
}

.floating-sidebar-item.qq:hover {
  background: #12B7F5;
  border-color: #12B7F5;
}

/* 展开的二维码面板 */
.qr-panel {
  position: absolute;
  right: 64px;
  top: 0;
  width: 150px;
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  box-shadow: -4px 4px 16px rgba(0, 0, 0, 0.15);
  display: none;
  text-align: center;
}

.floating-sidebar-item:hover .qr-panel {
  display: block;
}

.qr-panel img {
  width: 100%;
  height: auto;
  margin-bottom: 8px;
}

.qr-panel-text {
  font-size: 12px;
  color: #666666;
}
```

---

## 6. 页面布局规范

### 6.1 通用页面容器

```css
.container {
  max-width: 1319px;
  margin: 0 auto;
  padding: 0 24px;
}

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
  padding: 80px 0;
}

.section-alt {
  background: #F8F9FA;
}
```

### 6.2 网格系统

**12 列网格**：
```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

/* 响应式列 */
.col-12 { grid-column: span 12; }
.col-8 { grid-column: span 8; }
.col-6 { grid-column: span 6; }
.col-4 { grid-column: span 4; }
.col-3 { grid-column: span 3; }

@media (max-width: 1199px) {
  .col-lg-6 { grid-column: span 6; }
  .col-lg-12 { grid-column: span 12; }
}

@media (max-width: 767px) {
  .col-md-12 { grid-column: span 12; }
  .grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

### 6.3 首页布局

```
┌─────────────────────────────────────┐
│           固定导航栏 64px            │
├─────────────────────────────────────┤
│                                     │
│           Hero Banner 560px         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         核心优势 (4 列) 320px        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         产品分类入口 (3 列) 280px    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         解决方案展示 (2 列) 280px    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         最新动态 (3 列) 280px        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         底部 CTA 240px              │
│                                     │
├─────────────────────────────────────┤
│              页脚 320px              │
└─────────────────────────────────────┘
```

### 6.4 产品详情页布局

```
┌─────────────────────────────────────┐
│           固定导航栏 64px            │
├─────────────────────────────────────┤
│  面包屑导航 60px                     │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────┐  ┌───────────────┐ │
│  │             │  │  产品图片     │ │
│  │  产品详情   │  │  400x400      │ │
│  │  Tab 切换   │  │               │ │
│  │             │  │  核心信息     │ │
│  │  [概述]     │  │  - 型号 H1    │ │
│  │  [参数]     │  │  - 库存标签   │ │
│  │  [应用]     │  │  - 描述       │ │
│  │  [文档]     │  │  - CTA 按钮   │ │
│  │             │  │               │ │
│  └─────────────┘  └───────────────┘ │
│                                     │
│  ┌─────────────────────────────┐   │
│  │     配套料号推荐 (轮播)     │   │
│  └─────────────────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│              页脚 320px              │
└─────────────────────────────────────┘
```

### 6.5 技术文章页布局（Content + Sidebar）

```
┌─────────────────────────────────────┐
│           固定导航栏 64px            │
├─────────────────────────────────────┤
│  面包屑导航 60px                     │
├─────────────────────────────────────┤
│                                     │
│  ┌───────────────────┐ ┌─────────┐ │
│  │                   │ │ 目录    │ │
│  │  作者信息栏       │ │ (Sticky)│ │
│  │                   │ │         │ │
│  │  文章正文         │ │ - H2    │ │
│  │  max-width: 800px │ │ - H3    │ │
│  │                   │ │         │ │
│  │  H2 标题          │ │ 相关 PDF │ │
│  │  段落内容...      │ │         │ │
│  │                   │ │ 提问    │ │
│  │  H3 标题          │ │         │ │
│  │  代码块           │ │         │ │
│  │                   │ │         │ │
│  │  相关文章推荐     │ │         │ │
│  │                   │ │         │ │
│  └───────────────────┘ └─────────┘ │
│       900px            300px        │
│                                     │
├─────────────────────────────────────┤
│              页脚 320px              │
└─────────────────────────────────────┘
```

### 6.6 二级分类页布局（带侧边栏）

```
┌─────────────────────────────────────┐
│           固定导航栏 64px            │
├─────────────────────────────────────┤
│  面包屑导航 60px                     │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────┐ ┌─────────────────────┐
│  │ 分类    │ │  H1 标题            │
│  │ 导航    │ │                     │
│  │         │ │  描述内容 200-300 字 │
│  │ - IGBT  │ │                     │
│  │ - MOSFET│ │  选型指南入口       │
│  │ - MCU   │ │                     │
│  │ - ...   │ │  动态参数表格       │
│  │         │ │  ┌───────────────┐ │
│  │         │ │  │ 型号 | 参数 |..│ │
│  │         │ │  │ ------|------│ │
│  │         │ │  │ xxx  | xxx  |..│ │
│  │         │ │  └───────────────┘ │
│  │         │ │                     │
│  └─────────┘ └─────────────────────┘
│    240px         1055px             │
│                                     │
├─────────────────────────────────────┤
│              页脚 320px              │
└─────────────────────────────────────┘
```

---

## 7. 响应式断点

### 7.1 断点定义

```css
:root {
  --breakpoint-sm: 576px;   /* 小手机 */
  --breakpoint-md: 768px;   /* 平板 */
  --breakpoint-lg: 992px;   /* 小桌面 */
  --breakpoint-xl: 1200px;  /* 大桌面 */
  --breakpoint-xxl: 1440px; /* 超大桌面 */
}
```

### 7.2 媒体查询

```css
/* 手机优先 */
@media (min-width: 576px) { }

/* 平板 */
@media (min-width: 768px) { }

/* 小桌面 */
@media (min-width: 992px) { }

/* 大桌面 */
@media (min-width: 1200px) {
  .container {
    max-width: 1319px;
  }
}

/* 移动端适配（最大宽度） */
@media (max-width: 767px) {
  .hero {
    min-height: 400px;
    padding: 40px 16px;
  }
  
  .hero-title {
    font-size: 28px;
  }
  
  .grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .navbar-nav {
    display: none; /* 移动端汉堡菜单 */
  }
  
  .sidebar {
    position: static;
    width: 100%;
    margin-top: 32px;
  }
  
  .product-detail-hero {
    grid-template-columns: 1fr;
  }
  
  .tech-article-layout {
    grid-template-columns: 1fr;
  }
}
```

---

## 8. 交互动效

### 8.1 过渡动画

```css
/* 标准过渡 */
.transition {
  transition: all 0.2s ease;
}

/* 慢速过渡 */
.transition-slow {
  transition: all 0.3s ease;
}

/* 快速过渡 */
.transition-fast {
  transition: all 0.15s ease;
}
```

### 8.2 悬停效果

```css
/* 卡片悬停提升 */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

/* 按钮悬停 */
.hover-primary {
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.hover-primary:hover {
  background-color: #005A9E;
  box-shadow: 0 6px 12px rgba(0, 114, 206, 0.3);
}
```

### 8.3 加载动画

```css
/* 骨架屏 */
.skeleton {
  background: linear-gradient(
    90deg,
    #F1F3F5 25%,
    #E0E0E0 50%,
    #F1F3F5 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* 旋转加载器 */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #F1F3F5;
  border-top-color: #0072CE;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### 8.4 减少动画

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. SVG 图标和图形

### 9.1 产品分类图标

**MCU 微控制器图标**：
```svg
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="12" y="12" width="40" height="40" rx="4" fill="#0072CE"/>
  <rect x="20" y="20" width="24" height="24" rx="2" fill="white"/>
  <rect x="24" y="24" width="16" height="16" rx="1" fill="#0072CE"/>
  <line x1="32" y1="8" x2="32" y2="12" stroke="#0072CE" stroke-width="2"/>
  <line x1="32" y1="52" x2="32" y2="56" stroke="#0072CE" stroke-width="2"/>
  <line x1="8" y1="32" x2="12" y2="32" stroke="#0072CE" stroke-width="2"/>
  <line x1="52" y1="32" x2="56" y2="32" stroke="#0072CE" stroke-width="2"/>
</svg>
```

**IGBT 图标**：
```svg
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="20" fill="#0072CE"/>
  <path d="M32 20 L32 44 M24 28 L32 20 L40 28" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28 44 L32 36 L36 44" stroke="white" stroke-width="2" fill="none"/>
</svg>
```

**MOSFET 图标**：
```svg
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="48" height="48" rx="8" fill="#0072CE"/>
  <circle cx="32" cy="32" r="12" stroke="white" stroke-width="2.5" fill="none"/>
  <line x1="32" y1="20" x2="32" y2="28" stroke="white" stroke-width="2.5"/>
  <line x1="28" y1="36" x2="28" y2="44" stroke="white" stroke-width="2.5"/>
  <line x1="32" y1="36" x2="32" y2="44" stroke="white" stroke-width="2.5"/>
  <line x1="36" y1="36" x2="36" y2="44" stroke="white" stroke-width="2.5"/>
  <arrow d="M30 24 L32 20 L34 24" fill="white"/>
</svg>
```

**传感器图标**：
```svg
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="16" y="16" width="32" height="32" rx="6" fill="#0072CE"/>
  <circle cx="32" cy="32" r="8" fill="white"/>
  <circle cx="32" cy="32" r="4" fill="#0072CE"/>
  <line x1="32" y1="12" x2="32" y2="16" stroke="#0072CE" stroke-width="2"/>
  <line x1="32" y1="48" x2="32" y2="52" stroke="#0072CE" stroke-width="2"/>
  <line x1="12" y1="32" x2="16" y2="32" stroke="#0072CE" stroke-width="2"/>
  <line x1="48" y1="32" x2="52" y2="32" stroke="#0072CE" stroke-width="2"/>
</svg>
```

### 9.2 功能图标

**搜索图标**：
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="11" cy="11" r="8"/>
  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
</svg>
```

**菜单图标（汉堡）**：
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <line x1="3" y1="6" x2="21" y2="6"/>
  <line x1="3" y1="12" x2="21" y2="12"/>
  <line x1="3" y1="18" x2="21" y2="18"/>
</svg>
```

**下载图标**：
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="7,10 12,15 17,10"/>
  <line x1="12" y1="15" x2="12" y2="3"/>
</svg>
```

**分享图标**：
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="18" cy="5" r="3"/>
  <circle cx="6" cy="12" r="3"/>
  <circle cx="18" cy="19" r="3"/>
  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
</svg>
```

**电话图标**：
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
</svg>
```

**邮件图标**：
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>
```

**QQ 图标**：
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M12.003 2c-5.523 0-9.992 4.469-9.992 9.992 0 4.991 3.664 9.127 8.438 9.878.262.056.616.116.835.16.22.045.284.128.284.284v1.91c0 .156-.128.284-.284.284-.156 0-.284-.128-.284-.284v-.284c0-.156-.128-.284-.284-.284H8.997c-.156 0-.284.128-.284.284v.284c0 .156-.128.284-.284.284-.156 0-.284-.128-.284-.284v-1.91c0-.156.064-.239.284-.284.219-.044.573-.104.835-.16 4.774-.751 8.438-4.887 8.438-9.878C17.995 6.469 13.526 2 8.003 2zm0 1.714c4.578 0 8.281 3.703 8.281 8.281 0 4.578-3.703 8.281-8.281 8.281-4.578 0-8.281-3.703-8.281-8.281 0-4.578 3.703-8.281 8.281-8.281z"/>
</svg>
```

### 9.3 抽象背景图

**电路板纹理背景**：
```svg
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#0072CE"/>
  <g stroke="rgba(255,255,255,0.1)" stroke-width="1">
    <line x1="0" y1="50" x2="400" y2="50"/>
    <line x1="0" y1="100" x2="400" y2="100"/>
    <line x1="0" y1="150" x2="400" y2="150"/>
    <line x1="0" y1="200" x2="400" y2="200"/>
    <line x1="0" y1="250" x2="400" y2="250"/>
    <line x1="0" y1="300" x2="400" y2="300"/>
    <line x1="0" y1="350" x2="400" y2="350"/>
    <line x1="50" y1="0" x2="50" y2="400"/>
    <line x1="100" y1="0" x2="100" y2="400"/>
    <line x1="150" y1="0" x2="150" y2="400"/>
    <line x1="200" y1="0" x2="200" y2="400"/>
    <line x1="250" y1="0" x2="250" y2="400"/>
    <line x1="300" y1="0" x2="300" y2="400"/>
    <line x1="350" y1="0" x2="350" y2="400"/>
  </g>
  <circle cx="50" cy="50" r="4" fill="rgba(255,255,255,0.2)"/>
  <circle cx="150" cy="100" r="4" fill="rgba(255,255,255,0.2)"/>
  <circle cx="250" cy="200" r="4" fill="rgba(255,255,255,0.2)"/>
  <circle cx="350" cy="300" r="4" fill="rgba(255,255,255,0.2)"/>
  <circle cx="100" cy="350" r="4" fill="rgba(255,255,255,0.2)"/>
</svg>
```

**科技线条背景**：
```svg
<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0072CE;stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:#005A9E;stop-opacity:0.1"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#grad1)"/>
  <path d="M0 100 Q100 50 200 100 T400 100" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
  <path d="M0 150 Q100 100 200 150 T400 150" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
  <path d="M0 200 Q100 150 200 200 T400 200" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
  <path d="M0 250 Q100 200 200 250 T400 250" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
  <path d="M0 300 Q100 250 200 300 T400 300" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
</svg>
```

### 9.4 Logo 设计

**力通电子 Logo**：
```svg
<svg viewBox="0 0 280 60" xmlns="http://www.w3.org/2000/svg">
  <!-- 图形部分 -->
  <rect x="0" y="0" width="50" height="50" rx="10" fill="#0072CE"/>
  <path d="M15 25 L25 15 L35 25 L25 35 Z" fill="white"/>
  <circle cx="25" cy="25" r="4" fill="#FF6B00"/>
  
  <!-- 中文名称 -->
  <text x="60" y="32" font-family="Microsoft YaHei, sans-serif" font-size="22" font-weight="bold" fill="#333333">
    力通电子
  </text>
  
  <!-- 英文标语 -->
  <text x="60" y="48" font-family="Arial, sans-serif" font-size="10" fill="#666666">
    Litong Electronics, Top 8 Electronic Component Distributor in China
  </text>
</svg>
```

**品牌子目录 Logo 变体（Infineon 代理）**：
```svg
<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <!-- 英飞凌风格图标 -->
  <rect x="0" y="0" width="50" height="50" rx="8" fill="#0099CC"/>
  <path d="M15 35 L25 15 L35 35" stroke="white" stroke-width="3" fill="none"/>
  <line x1="20" y1="25" x2="30" y2="25" stroke="white" stroke-width="2"/>
  
  <!-- 文字 -->
  <text x="60" y="35" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#333333">
    英飞凌代理
  </text>
</svg>
```

---

## 10. 暗色模式实现

### 10.1 CSS 变量方案

```css
:root {
  /* 浅色模式（默认） */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --text-primary: #333333;
  --text-secondary: #666666;
  --border-color: #E0E0E0;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* 暗色模式 */
    --bg-primary: #1A1A2E;
    --bg-secondary: #16213E;
    --text-primary: #EAEAEA;
    --text-secondary: #B0B0B0;
    --border-color: #2D2D44;
  }
}

/* 使用变量 */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.card {
  background: var(--bg-secondary);
  border-color: var(--border-color);
}
```

---

## 11. 可访问性规范

### 11.1 颜色对比度

确保所有文本满足 WCAG AA 标准（4.5:1 对比度）：

| 组合 | 对比度 | 状态 |
|------|--------|------|
| #333333 on #FFFFFF | 12.6:1 | ✅ 通过 |
| #666666 on #FFFFFF | 5.7:1 | ✅ 通过 |
| #0072CE on #FFFFFF | 4.5:1 | ✅ 通过 |
| #FFFFFF on #0072CE | 4.5:1 | ✅ 通过 |
| #FFFFFF on #FF6B00 | 3.8:1 | ⚠️ 仅适用于大文本 |

### 11.2 焦点状态

```css
/* 全局焦点样式 */
*:focus {
  outline: 2px solid #0072CE;
  outline-offset: 2px;
}

/* 按钮焦点 */
.btn:focus {
  outline: 2px solid #0072CE;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(0, 114, 206, 0.25);
}

/* 输入框焦点 */
.form-input:focus {
  border-color: #0072CE;
  box-shadow: 0 0 0 3px rgba(0, 114, 206, 0.15);
}
```

### 11.3 键盘导航

```css
/* 确保可点击元素可键盘访问 */
a, button, input, select, textarea {
  /* 默认可键盘访问 */
}

/* 跳过导航链接 */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #0072CE;
  color: #FFFFFF;
  padding: 8px 16px;
  z-index: 1001;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 0;
}
```

### 11.4 ARIA 标签

```html
<!-- 图标按钮 -->
<button aria-label="搜索">
  <svg>...</svg>
</button>

<!-- 导航 -->
<nav aria-label="主导航">...</nav>

<!-- 面包屑 -->
<nav aria-label="面包屑导航">...</nav>

<!-- Tab -->
<div role="tablist" aria-label="产品信息">
  <button role="tab" aria-selected="true">产品概述</button>
  <button role="tab" aria-selected="false">规格参数</button>
</div>
```

---

## 12. 性能优化

### 12.1 CSS 优化

```css
/* 使用 CSS 变量便于维护 */
:root {
  --color-primary: #0072CE;
  --color-primary-hover: #005A9E;
  --spacing-base: 24px;
  --radius-base: 8px;
}

/* 避免使用 * 选择器 */
/* 使用高效的类选择器 */
.card { }  /* ✅ 好 */
div.card { }  /* ⚠️ 不必要 */
```

### 12.2 图片优化

```html
<!-- 使用 srcset 响应式图片 -->
<img 
  src="product-400.jpg" 
  srcset="product-400.jpg 400w, product-800.jpg 800w"
  sizes="(max-width: 768px) 100vw, 400px"
  alt="产品描述"
  loading="lazy"
/>

<!-- SVG 优先 -->
<img src="icon-mcu.svg" alt="MCU 图标" />
```

### 12.3 字体加载优化

```css
/* 使用 font-display: swap 避免 FOIT */
@font-face {
  font-family: 'Inter';
  src: url('inter.woff2') format('woff2');
  font-display: swap;
}
```

---

## 13. 设计检查清单

### 13.1 视觉质量
- [ ] 无 emoji 图标（使用 SVG）
- [ ] 所有图标来自一致图标集
- [ ] 悬停状态不导致布局偏移
- [ ] 使用主题颜色直接使用

### 13.2 交互
- [ ] 所有可点击元素有 cursor-pointer
- [ ] 悬停状态提供清晰视觉反馈
- [ ] 过渡流畅（150-300ms）
- [ ] 焦点状态可见

### 13.3 亮/暗模式
- [ ] 浅色模式文本对比度足够
- [ ] 玻璃/透明元素在浅色模式可见
- [ ] 边框在两种模式都可见
- [ ] 测试两种模式

### 13.4 布局
- [ ] 浮动元素有适当间距
- [ ] 无内容被固定导航遮挡
- [ ] 响应式在 375px, 768px, 1024px, 1440px
- [ ] 无水平滚动

### 13.5 可访问性
- [ ] 所有图片有 alt 文本
- [ ] 表单输入有标签
- [ ] 颜色不是唯一指示器
- [ ] prefers-reduced-motion 被尊重

---

## 14. 文件结构

```
C:\Users\lenovo\Desktop\web20260323\
├── index.html
├── style.css              # 主样式文件
├── script.js              # 主脚本文件
├── assets/
│   ├── css/
│   │   ├── variables.css  # CSS 变量
│   │   ├── base.css       # 基础样式
│   │   ├── components.css # 组件样式
│   │   ├── layout.css     # 布局样式
│   │   └── responsive.css # 响应式样式
│   ├── svg/
│   │   ├── icons/         # 功能图标
│   │   ├── products/      # 产品图标
│   │   ├── logo.svg       # 公司 Logo
│   │   └── backgrounds/   # 背景图案
│   └── images/
│       ├── products/      # 产品图片
│       ├── contact.png    # 联系信息
│       └── placeholders/  # 占位图
├── data/
│   └── infineon/
│       ├── products.json
│       ├── solutions.json
│       ├── support.json
│       └── news.json
├── products/
├── solutions/
├── support/
├── news/
├── about/
└── scripts/
    ├── generate-pages.js
    └── generate-sitemap.js
```

---

## 15. 单元模块审查测试规范

### 15.1 审查测试规则

**核心原则**：
1. 每个单元模块完成后立即审查和测试，不等待
2. 审查和测试是该模块的一部分，不是独立阶段
3. 失败立即修复，修复后重新测试，通过后才继续下一个模块
4. 集成测试在所有单元通过后才开始

**技能调用要求**：
- 审查：`requesting-code-review` + `receiving-code-review`
- 测试：`systematic-debugging` + `playwright`
- 每个单元模块必须调用上述技能

### 15.2 单元模块清单

| 模块编号 | 模块名称 | 文件 | 审查测试内容 |
|----------|----------|------|--------------|
| M01 | 全局 CSS 变量 | style.css | 颜色、字体、间距变量定义 |
| M02 | 基础样式 | base.css | 重置样式、排版、链接 |
| M03 | 导航栏组件 | components.css | 响应式、固定顶部、悬停效果 |
| M04 | 页脚组件 | components.css | 布局、链接、版权信息 |
| M05 | 按钮组件 | components.css | 所有按钮样式、悬停、焦点 |
| M06 | 卡片组件 | components.css | 标准卡片、产品卡片、悬停效果 |
| M07 | Hero Banner | components.css | 首页 Hero、详情页 Banner |
| M08 | 表单组件 | components.css | 输入框、标签、验证样式 |
| M09 | 表格组件 | components.css | 斑马纹表格、响应式 |
| M10 | Tab 选项卡 | components.css | Tab 切换、锚点联动 |
| M11 | 侧边栏组件 | components.css | Sticky 效果、导航 |
| M12 | 面包屑导航 | components.css | 层级显示、响应式 |
| M13 | 库存标签 | components.css | 状态显示、动画 |
| M14 | 产品详情首屏 | components.css | 双栏布局、图片画廊 |
| M15 | 轮播组件 | components.css | 配套料号推荐轮播 |
| M16 | 作者信息栏 | components.css | FAE 简介样式 |
| M17 | FAQ 组件 | components.css | 折叠动画 |
| M18 | 技术文章排版 | components.css | 代码块、引用块、标题 |
| M19 | 社交分享按钮 | components.css | 分享图标、悬停 |
| M20 | BOM 清单表格 | components.css | 型号链接、响应式 |
| M21 | 悬浮 QQ 侧边栏 | components.css | 固定定位、展开面板 |
| M22 | 暗色模式 | responsive.css | 媒体查询、变量切换 |
| M23 | 响应式布局 | responsive.css | 断点、移动端适配 |
| M24 | 交互动效 | components.css | 过渡、动画、减少动画 |
| M25 | 首页模板 | index.html | 完整布局、SEO Meta |
| M26 | 产品分类页模板 | products-category.html | 卡片布局、描述内容 |
| M27 | 二级分类页模板 | products-subcategory.html | 动态表格、侧边栏 |
| M28 | 产品详情页模板 | product-detail.html | Tab 切换、双栏布局 |
| M29 | 解决方案列表页 | solutions-list.html | 摘要卡片 |
| M30 | 解决方案详情页 | solution-detail.html | 方案框图、BOM 清单 |
| M31 | 技术支持列表页 | support-list.html | 分类选项卡 |
| M32 | 技术文章详情页 | support-article.html | 文章排版、目录 |
| M33 | 新闻列表页 | news-list.html | 公司/行业分类 |
| M34 | 新闻详情页 | news-detail.html | 分享按钮、推荐阅读 |
| M35 | 关于我们页 | about.html | 公司历史、团队 |
| M36 | 联系我们页 | contact.html | contact.png、表单 |
| M37 | 品牌列表页 | brand.html | 品牌卡片 |
| M38 | SVG 图标库 | assets/svg/ | 产品图标、功能图标 |
| M39 | Logo 设计 | assets/svg/logo.svg | 主 Logo、品牌变体 |
| M40 | 抽象背景图 | assets/svg/backgrounds/ | 电路板、科技线条 |

### 15.3 每个单元模块审查测试流程

```
┌─────────────────────────────────────────────────────────┐
│  单元模块开发完成                                         │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│  步骤 1: 代码审查 (requesting-code-review)               │
│  - 检查代码规范                                           │
│  - 检查 CSS 命名                                          │
│  - 检查可访问性                                           │
│  - 检查性能优化                                           │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│  步骤 2: 接收审查反馈 (receiving-code-review)            │
│  - 记录所有问题                                           │
│  - 分类问题优先级                                         │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│  步骤 3: 修复问题                                         │
│  - 立即修复所有问题                                       │
│  - 更新代码                                               │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│  步骤 4: 系统测试 (systematic-debugging)                 │
│  - 功能测试                                               │
│  - 样式测试                                               │
│  - 响应式测试                                           │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│  步骤 5: Playwright 截图测试                              │
│  - 桌面端截图 (1920x1080)                                │
│  - 平板端截图 (768x1024)                                 │
│  - 移动端截图 (375x667)                                  │
│  - 暗色模式截图                                           │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│  步骤 6: 检查点                                           │
│  - 给出关键状态                                           │
│  - 记录结果日志                                           │
│  - 如有错误，返回步骤 3                                   │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ 测试通过？    │
                    └──────────────┘
                      │          │
                     是          否
                      │          │
                      ▼          │
               ┌─────────────┐   │
               │ 标记完成 ✓   │   │
               │ 继续下一模块 │   │
               └─────────────┘   │
                                 │
                                 └───────────────────────────┘
```

### 15.4 审查测试检查清单

**每个单元模块必须完成的检查项**：

#### 代码质量检查
- [ ] CSS 使用 BEM 或类似命名规范
- [ ] 无硬编码颜色值（使用 CSS 变量）
- [ ] 无硬编码间距值（使用间距变量）
- [ ] 代码缩进一致
- [ ] 无未使用的 CSS 类
- [ ] 注释清晰完整

#### 样式检查
- [ ] 样式不失效
- [ ] 颜色对比度满足 WCAG AA（4.5:1）
- [ ] 悬停状态清晰
- [ ] 焦点状态可见
- [ ] 过渡动画流畅（150-300ms）
- [ ] 无布局偏移

#### 响应式检查
- [ ] 桌面端（1920px）正常
- [ ] 笔记本（1366px）正常
- [ ] 平板（768px）正常
- [ ] 手机（375px）正常
- [ ] 无水平滚动
- [ ] 触摸目标≥44px

#### 暗色模式检查
- [ ] 暗色模式切换正常
- [ ] 文字对比度足够
- [ ] 卡片背景可见
- [ ] 边框可见
- [ ] 图片适配

#### 可访问性检查
- [ ] 语义化 HTML 标签
- [ ] 图片有 alt 属性
- [ ] 表单有 label
- [ ] 键盘导航可用
- [ ] ARIA 标签正确
- [ ] 支持 prefers-reduced-motion

#### SEO 检查
- [ ] Meta 标签完整
- [ ] 标题层级正确（H1>H2>H3）
- [ ] 面包屑导航正确
- [ ] 结构化数据正确
- [ ] URL 结构清晰
- [ ] 无 404 或空链接

#### 性能检查
- [ ] 无阻塞渲染的 CSS
- [ ] 图片优化（WebP、懒加载）
- [ ] 字体加载优化
- [ ] 无 FOIT
- [ ] 首屏加载<3 秒

### 15.5 Playwright 测试脚本示例

```javascript
// playwright-test.js
const { test, expect } = require('@playwright/test');

// 测试所有页面
const pages = [
  '/',
  '/products/',
  '/products/igbt/',
  '/products/igbt/BSZ097N04LS.html',
  '/solutions/',
  '/solutions/ev-charging.html',
  '/support/',
  '/support/guides/how-to-select-mcu.html',
  '/news/company/',
  '/news/industry/',
  '/news/industry/infineon-new-product.html',
  '/about/',
  '/about/contact.html'
];

// 桌面端测试
test.describe('Desktop Tests', () => {
  for (const page of pages) {
    test(`should render ${page} correctly on desktop`, async ({ page }) => {
      await page.goto(page);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await expect(page).toHaveScreenshot(`${page.replace(/\//g, '-')}-desktop.png`);
    });
  }
});

// 移动端测试
test.describe('Mobile Tests', () => {
  for (const page of pages) {
    test(`should render ${page} correctly on mobile`, async ({ page }) => {
      await page.goto(page);
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(page).toHaveScreenshot(`${page.replace(/\//g, '-')}-mobile.png`);
    });
  }
});

// 暗色模式测试
test.describe('Dark Mode Tests', () => {
  for (const page of pages) {
    test(`should render ${page} correctly in dark mode`, async ({ page }) => {
      await page.goto(page);
      await page.emulateMedia({ colorScheme: 'dark' });
      await expect(page).toHaveScreenshot(`${page.replace(/\//g, '-')}-dark.png`);
    });
  }
});

// 响应式断点测试
test.describe('Responsive Tests', () => {
  const breakpoints = [
    { name: 'sm', width: 576, height: 800 },
    { name: 'md', width: 768, height: 1024 },
    { name: 'lg', width: 992, height: 1080 },
    { name: 'xl', width: 1200, height: 1080 }
  ];

  for (const bp of breakpoints) {
    test(`should render homepage correctly at ${bp.name} breakpoint`, async ({ page }) => {
      await page.goto('/');
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await expect(page).toHaveScreenshot(`homepage-${bp.name}.png`);
    });
  }
});

// 交互功能测试
test.describe('Interaction Tests', () => {
  test('should toggle tabs correctly', async ({ page }) => {
    await page.goto('/products/igbt/BSZ097N04LS.html');
    await page.click('[role="tab"]:nth-child(2)');
    await expect(page.locator('[role="tabpanel"]:nth-child(2)')).toBeVisible();
  });

  test('should toggle FAQ correctly', async ({ page }) => {
    await page.goto('/products/igbt/BSZ097N04LS.html');
    await page.click('.faq-question');
    await expect(page.locator('.faq-answer')).toBeVisible();
  });

  test('should scroll sidebar correctly', async ({ page }) => {
    await page.goto('/support/guides/how-to-select-mcu.html');
    const sidebar = page.locator('.sidebar');
    await expect(sidebar).toBeInViewport();
  });
});

// 无 404 链接测试
test.describe('No Broken Links', () => {
  test('should have no 404 links', async ({ page }) => {
    const links = await page.$$eval('a[href]', links => links.map(a => a.href));
    const brokenLinks = [];
    for (const link of links) {
      if (link.startsWith('http') && !link.includes('infineon-elec.com')) continue;
      const response = await page.goto(link).catch(() => null);
      if (response && response.status() === 404) {
        brokenLinks.push(link);
      }
    }
    expect(brokenLinks).toHaveLength(0);
  });
});
```

### 15.6 检查结果日志模板

```markdown
## 单元模块审查测试日志

**模块编号**: M01
**模块名称**: 全局 CSS 变量
**文件**: style.css
**日期**: 2026-03-23

### 代码审查
- [x] 代码规范检查 通过
- [x] CSS 命名检查 通过
- [x] 可访问性检查 通过
- [x] 性能优化检查 通过

### 审查反馈
- 问题数：0
- 建议数：0

### 系统测试
- [x] 功能测试 通过
- [x] 样式测试 通过
- [x] 响应式测试 通过

### Playwright 截图
- [x] 桌面端 (1920x1080) 通过
- [x] 平板端 (768x1024) 通过
- [x] 移动端 (375x667) 通过
- [x] 暗色模式 通过

### 检查点状态
- 关键状态：✓ 所有检查通过
- 结果日志：模块 M01 完成，无错误
- 下一步：继续模块 M02

### 技能调用记录
- requesting-code-review: ✓ 已调用
- receiving-code-review: ✓ 已调用
- systematic-debugging: ✓ 已调用
- playwright: ✓ 已调用
```

### 15.7 集成测试计划

**在所有单元模块通过后执行**：

| 测试类型 | 测试内容 | 工具 |
|----------|----------|------|
| 功能集成测试 | 所有页面链接正常、Tab 切换、筛选、搜索 | Playwright |
| 样式集成测试 | 全站样式一致性、无冲突 | Playwright 截图 |
| 性能集成测试 | 页面加载时间、LCP、FCP | Lighthouse |
| SEO 集成测试 | Meta 标签、结构化数据、sitemap | 手动检查 |
| 响应式集成测试 | 所有断点布局正常 | Playwright |
| 暗色模式集成测试 | 全站暗色模式正常 | Playwright |
| 可访问性集成测试 | WCAG AA 合规 | axe-core |

---

## 16. 文档版本

| 版本 | 日期 | 修改内容 | 作者 |
|------|------|----------|------|
| v1.0 | 2026-03-23 | 初始版本 - 完整设计系统 | UI/UX Pro Max |
| v1.1 | 2026-03-23 | 补充遗漏项：产品详情页首屏双栏布局、配套料号推荐轮播、作者信息栏增强版、FAQ 组件、技术文章排版样式、社交分享按钮、BOM 清单表格、右侧悬浮 QQ 侧边栏、SVG 图标示例代码（MCU、IGBT、MOSFET、传感器、功能图标、抽象背景图、Logo 设计） | UI/UX Pro Max |
| v1.2 | 2026-03-23 | 添加单元模块审查测试规范：40 个单元模块清单、审查测试流程图、检查清单、Playwright 测试脚本示例、检查结果日志模板、集成测试计划 | UI/UX Pro Max |

# 英飞凌代理网站 PRD 文档

## 1. 项目概述

### 1.1 项目背景
为英飞凌代理商"力通电子"创建一个 SEO 优化的静态网站，域名 `www.infineon-elec.com`，部署在 Edge One。网站需要展示公司作为英飞凌授权代理商的专业形象，提供产品中心、解决方案、技术支持、新闻等内容，支持多品牌扩展。

### 1.2 项目目标
- 建立专业的英飞凌代理商官方网站
- 实现 SEO 优化，提升百度搜索引擎排名
- 支持多品牌子目录网站快速复制生成
- 提供现代化的用户体验和响应式设计

### 1.3 目标用户
- 电子工程师（寻找元器件、技术方案）
- 采购人员（询价、采购决策）
- 企业客户（寻找可靠供应商）

---

## 2. 网站架构

### 2.1 站点地图

```
首页 (index.html)
├── 产品中心 (products/)
│   ├── 产品分类页 (products/index.html)
│   ├── 二级分类页 (products/igbt/index.html)
│   └── 产品详情页 (products/igbt/BSZ097N04LS.html)
├── 解决方案 (solutions/)
│   ├── 解决方案列表页 (solutions/index.html)
│   └── 解决方案详情页 (solutions/ev-charging.html)
├── 技术支持 (support/)
│   ├── 技术支持列表页 (support/index.html)
│   ├── 选型指南 (support/guides/)
│   ├── 应用笔记 (support/notes/)
│   ├── 问题排查 (support/troubleshooting/)
│   ├── 新品评测 (support/reviews/)
│   └── 技术文章详情页 (support/guides/how-to-select-mcu.html)
├── 新闻中心 (news/)
│   ├── 公司新闻列表 (news/company/)
│   ├── 行业动态列表 (news/industry/)
│   └── 新闻详情页 (news/industry/infineon-new-product.html)
├── 关于我们 (about/)
│   ├── 公司简介 (about/index.html)
│   ├── 发展历程 (about/history.html)
│   ├── 服务案例 (about/cases.html)
│   └── 联系我们 (about/contact.html)
└── 品牌子目录 (brands/)
    └── 各品牌独立页面
```

### 2.2 URL 结构规范
- 产品详情页：`/products/{category}/{model}.html`
- 解决方案详情页：`/solutions/{solution-name}.html`
- 技术支持详情页：`/support/{type}/{article-name}.html`
- 新闻详情页：`/news/{category}/{news-name}.html`
- 所有 URL 为静态 HTML 形式

---

## 3. 功能需求

### 3.1 首页功能

| 模块 | 功能描述 | 优先级 |
|------|----------|--------|
| Hero Banner | 静态背景图 + 宣传文案，展示核心定位 | P0 |
| 核心优势 | 4 个优势卡片（库存深度、技术支持、物流能力、价格优势） | P0 |
| 优势品牌 | 品牌 Logo 展示，引导到品牌页面 | P0 |
| 产品分类入口 | 主要产品分类卡片（IGBT、MOSFET、MCU、传感器等） | P0 |
| 解决方案展示 | 行业解决方案预览卡片 | P1 |
| 最新动态 | 最新新闻/技术文章预览 | P1 |
| 底部 CTA | 行动号召区域，引导联系 | P0 |

**首页额外要求**：
- 关于品牌：品牌简介、核心产品领域（按类别展示）、解决方案与应用领域、最新技术支持展示
- 更专业、内容更丰富、SEO 优化更强

### 3.2 产品中心功能

| 页面类型 | 功能描述 | 优先级 |
|----------|----------|--------|
| 产品分类页 | 展示所有产品分类卡片，图文结合 | P0 |
| 二级分类页 | 动态参数表格，支持 URL 参数筛选，侧边栏分类导航 | P0 |
| 产品详情页 | 产品图片、参数表格、文档下载、询价表单、FAQ、配套料号推荐 | P0 |

**二级分类页特性**：
- 动态表格列（根据产品分类显示不同参数）
- URL 参数筛选（如 `?series=XMC&package=PG-DSO-32`）
- 侧边栏产品分类导航
- Product Schema.org 结构化数据
- 点击型号跳转到型号详情页

**产品详情页特性**：
- Tab 选项卡切换（产品概述、规格参数、应用电路、相关文档）
- URL 锚点联动（#specs 定位到规格参数 tab）
- 库存状态标签（绿色 - 有货/橙色 - 询价）
- 双 CTA 按钮组（橙色实心"获取报价"、蓝色描边"下载数据手册"）
- FAQ 模块（AI 动态生成 3-5 个问题）
- 配套料号和替代料号推荐
- Product Schema JSON-LD 标记
- 多样化 CTA：下载选型手册、申请样品、获取报价、咨询技术问题（转交 FAE）
- 在产品页、选型指南页、技术文章页结尾加入"分销商"行动号召 (CTA)

**产品分类页额外要求**：
- H1 标题下方增加 200-300 字原创描述（介绍分类特点、主要系列、核心优势、应用领域）
- 自然融入关键词（如"英飞凌 MCU 代理"、"英飞凌微控制器选型"）
- 增加"选型指南"入口链接（指向技术支持文章）
- 增加"代理商点评"或"应用解读"（FAE 专业解读）
- 图文卡片形式展示每个分类

### 3.3 解决方案功能

| 页面类型 | 功能描述 | 优先级 |
|----------|----------|--------|
| 解决方案列表页 | 行业解决方案卡片，包含摘要和关键词 | P0 |
| 解决方案详情页 | 方案框图、核心优势、BOM 清单、应用场景 | P0 |

**详情页内容结构**：
- H1 标题 + 方案概述
- 方案框图（Block Diagram，带 alt 属性）
- 核心优势（H2）
- 推荐物料清单 BOM List（H2，表格展示，型号链接到产品页）
- 应用场景（H2）
- 相关文章推荐（侧边栏）

**解决方案额外要求**：
- 发布 5 个解决方案
- 页面标题和内容围绕"行业 + 解决方案"
- 列表页每个解决方案增加摘要（Summary），包含核心关键词和应用场景
- 使用 H2, H3 标签分解内容为"方案框图"、"核心优势"、"推荐物料清单"、"应用场景"等模块
- 物料清单中每个型号链接到对应产品详情页，构建内部链接网络

### 3.4 技术支持功能

| 分类 | 描述 | 优先级 |
|------|------|--------|
| 选型指南 | 产品选型指导文章 | P0 |
| 应用笔记 | 具体应用技术文章 | P0 |
| 问题排查 | 常见问题解决方案 | P1 |
| 新品评测 | 新产品技术评测 | P1 |

**功能特性**：
- 分类选项卡切换
- 标签系统（如 IGBT、AURIX、BLDC 电机、CAN 总线）- 点击标签聚合所有相关文章
- 上下文链接（文章内提到型号链接到产品页，提到概念链接到相关文章）
- 相关文章模块（末尾推荐 3-5 篇）
- FAE 工程师作者简介（1-2 位）- 单独的作者页面，包含姓名、照片、技术专长、从业经验
- 文章目录（Sticky 侧边栏）
- TechArticle Schema JSON-LD 标记
- 每篇文章作者处链接到作者简介页面

### 3.5 新闻中心功能

| 分类 | 描述 | 优先级 |
|------|------|--------|
| 公司新闻 | 公司动态、参展信息等 | P1 |
| 行业动态 | 行业热点、市场趋势（带自己解读） | P0 |

**功能特性**：
- 两个分类独立列表页（公司新闻、行业动态分开）
- 新闻详情页侧边栏导航（同级新闻链接）
- 社交分享按钮
- 推荐阅读（底部 3 个最新行业动态卡片）
- NewsArticle Schema JSON-LD 标记
- 行业动态引用权威来源，加入自己解读
- 每个新闻都有独立的详情页
- 每个详情页的侧边栏都有相关详情页

### 3.6 关于我们功能

| 页面 | 内容 | 优先级 |
|------|------|--------|
| 公司简介 | 公司介绍、团队实力、服务优势 | P0 |
| 发展历程 | 公司发展时间线（AI 生成） | P1 |
| 服务案例 | 客户合作案例展示 | P1 |
| 联系我们 | 联系信息、地图、表单 | P0 |

**联系我们页面**：
- 右侧悬浮侧边栏显示 QQ：1145711755
- contact.png 图片展示完整联系信息（图片内容不展示到右边栏）
- 联系表单（询价跳转）

**关于我们页面额外要求**：
- 详细介绍公司历史、团队实力、服务客户案例
- 采用现代化、清晰的模块化布局
- 在整个页面文本中自然使用"电子元件代理"、"芯片现货"等关键词
- 每个产品做报关单展示（AI 生成示例图片），提升信任度和权威性
- 公司优势：库存深度、技术支持团队、物流能力等

### 3.7 全局功能

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 导航栏 | 固定顶部，滚动时半透明背景 | P0 |
| 面包屑导航 | 完整层级（首页 > 一级 > 二级 > 当前页） | P0 |
| 页脚 | 版权信息、快速链接、联系方式 | P0 |
| 搜索功能 | 纯前端搜索，基于 JSON 数据 | P1 |
| 暗色模式 | 根据系统偏好自动切换 | P1 |
| 响应式设计 | 桌面/平板/移动端适配 | P0 |
| LOGO 标语 | "力通电子，中国 8 强电子元件代理商" 英文：Litong Electronics, Top 8 Electronic Component Distributor in China | P1 |

**全局额外要求**：
- 所有模板必须包含与首页完全一致的 `<nav>` 导航栏、`<footer>` 页脚
- 所有模板必须包含面包屑导航（Breadcrumbs）
- 所有模板必须包含 SEO Meta 标签占位符
- 所有模板必须包含侧边栏（如适用）
- 每个详情页的侧边栏都有相关详情页

---

## 4. SEO 需求

### 4.1 Meta 标签规范

**首页**：
```html
<title>英飞凌代理 | 提供正品原装现货 | 力通</title>
<meta name="description" content="力通是英飞凌代理，长期稳定供应提供正品原装现货。并提供技术支持和优势价格，欢迎咨询。">
<meta name="keywords" content="英飞凌代理，电子元件现货，英飞凌 IGBT,英飞凌 MOSFET">
```

**品牌子目录首页**：
```html
<title>英飞凌代理</title>
<meta name="description" content="品牌简介内容...">
```

**列表页**：
- 独特 Title，包含分类关键词
- Description 准确描述列表内容

**详情页**：
- 独特 Title，包含具体型号/文章标题
- Description 包含核心卖点和关键词

**列表页和详情页标题要求**：
- 必须设置标题
- 标题要独特、包含关键词、准确描述内容

### 4.2 关键词策略

| 类型 | 关键词示例 | 优化页面 |
|------|-----------|----------|
| 核心词 | 英飞凌代理，西门康代理 | 首页、关于品牌 |
| 产品 + 核心词 | 英飞凌 IGBT 代理，英飞凌 MOSFET 代理 | 产品列表页 |
| 资质 + 核心词 | 英飞凌授权代理，英飞凌一级代理 | 关于我们 |
| 问题型长尾词 | 如何选择英飞凌 MCU，英飞凌代理商有哪些 | 技术支持 |

### 4.3 关键词布局

| 页面类型 | 优化关键词 |
|----------|-----------|
| 关于品牌 | 品牌+distributor, 品牌+distributor+ 地域 |
| 产品列表页 | 品牌 + 产品分类 |
| 产品详情页 | 具体产品型号 |
| 解决方案页 | 品牌 + 解决方案 |
| 技术文章 | 长尾问题型关键词 |

### 4.4 结构化数据

- **Product Schema**：产品详情页使用 Product 类型 JSON-LD
- **TechArticle Schema**：技术支持详情页使用 TechArticle 类型
- **NewsArticle Schema**：新闻详情页使用 NewsArticle 类型
- **BreadcrumbList Schema**：所有页面添加面包屑导航结构化数据
- **Organization Schema**：关于我们页面添加组织信息
- **Article/NewsArticle Schema**：新闻中心文章使用 Article 或 NewsArticle 的 Schema 标记，包含标题、作者、发布日期、发布机构等结构化信息，有助于获得富媒体摘要（Rich Snippets）

### 4.5 其他 SEO 要求

- 所有图片添加 alt 属性，描述图片内容，可包含关键词
- 使用语义化 HTML 标签（header, nav, main, article, footer）
- 静态 URL 结构，无动态参数（筛选功能除外）
- 自动生成 sitemap.xml
- 页面加载速度优化
- 型号表格页使用 Product Schema.org 结构化数据，在 HTML 中加入 JSON-LD 格式的 Product Schema 标记

### 4.6 SEO 优化检查表

**页面级别优化**：
- [ ] Title 标签独特且包含关键词（每页不同）
- [ ] Description 准确描述页面内容
- [ ] H1 标签每页唯一
- [ ] H2/H3 结构清晰
- [ ] 图片 alt 属性完整
- [ ] 内部链接合理
- [ ] 面包屑导航正确
- [ ] 结构化数据（Schema.org）正确实施

**技术 SEO**：
- [ ] 静态 HTML 页面
- [ ] URL 结构清晰
- [ ] sitemap.xml 完整
- [ ] 移动端友好
- [ ] 页面加载速度快
- [ ] 无 404 或空链接

---

## 5. 设计规范

### 5.1 设计风格

- **风格**：现代极简主义，避免过度装饰
- **留白**：使用充足间距增强页面呼吸感
- **视觉层次**：H1 > H2 > H3 > 正文 > 辅助文本

### 5.2 颜色系统

| 用途 | 颜色值 | 说明 |
|------|--------|------|
| 主色调（科技蓝） | #0072ce | 品牌色、主按钮 |
| 背景色 | #f8f9fa | 中性灰背景 |
| CTA 按钮 | #ff6b00 | 橙色强调 |
| 文字主色 | #333333 | 正文颜色 |
| 文字次要色 | #666666 | 辅助文字 |
| 边框色 | #e0e0e0 | 分割线、边框 |
| 成功状态 | #28a745 | 库存有货标签 |
| 询价状态 | #ff9800 | 询价标签 |

### 5.3 字体系统

| 用途 | 字体 | 大小 | 行高 |
|------|------|------|------|
| H1 | 系统无衬线字体 | 36px | 1.3 |
| H2 | 系统无衬线字体 | 28px | 1.3 |
| H3 | 系统无衬线字体 | 22px | 1.4 |
| 正文 | 系统无衬线字体 | 16px | 1.8 |
| 辅助文字 | 系统无衬线字体 | 14px | 1.5 |

### 5.4 组件规范

| 组件 | 规范 |
|------|------|
| 圆角 | 统一 8px，组件 12px |
| 阴影 | `box-shadow: 0 4px 6px rgba(0,0,0,0.07)` |
| 按钮最小尺寸 | 44px（移动端友好） |
| 卡片悬停 | 提升 + 阴影增强 |
| 按钮悬停 | 阴影加深 + 颜色变化 |

### 5.5 布局系统要求

- 使用 CSS Grid 和 Flexbox 实现响应式布局
- 建立 12 列网格系统，使用 CSS Grid 实现
- 建立模块化组件设计：
  - Hero Banner 模块：全宽设计，使用渐变背景或抽象几何图形
  - Card 组件：用于产品展示，圆角、阴影、悬停效果
  - Feature Grid：等间距网格，展示核心优势
  - CTA 模块：突出的行动号召区域，对比色背景
- 建立清晰的视觉层次：H1 > H2 > H3 > 正文 > 辅助文本

### 5.6 交互效果要求

- 按钮悬停效果：轻微的阴影加深和颜色变化
- 卡片悬停效果：提升和轻微阴影增强
- 导航栏：在滚动时固定，使用半透明背景
- 加载动画：页面切换时的平滑过渡效果

### 5.7 响应式断点

| 设备 | 宽度范围 | 布局 |
|------|----------|------|
| 桌面端 | ≥1200px | 最大宽度 1319px，居中 |
| 平板端 | 768px - 1199px | 中等布局 |
| 移动端 | <768px | 全屏适配，单栏布局 |

### 5.8 性能和可访问性要求

**性能优化**：
- 使用 CSS 变量统一管理样式，便于维护和修改，使用纯原生 CSS
- 优化图片显示，使用现代格式如 WebP 的降级方案
- 字体加载优化，避免 FOIT（Flash of Invisible Text）

**可访问性**：
- 确保颜色对比度满足 WCAG AA 标准
- 所有交互元素支持键盘导航
- 使用语义化 HTML 标签

### 5.9 SVG 资源

需要生成的 SVG 资源：
- 产品分类图标（MCU、IGBT、MOSFET、传感器等）
- 新闻/关于我们/联系我们插图
- 抽象背景图（电路板纹理、科技线条）
- 公司 Logo（基于文本或基本形状）
- 报关单示例图片
- 列表页、详情页匹配插图
- 徽标 (Logo)：简单的、基于文本或基本形状的 SVG 格式公司徽标
- 所有 SVG 全部 AI 生成

---

## 6. 数据规范

### 6.1 JSON 文件结构

**products.json**（嵌套结构）：
```json
{
  "brand": "infineon",
  "categories": {
    "igbt": {
      "name": "IGBT",
      "description": "英飞凌 IGBT 产品介绍...",
      "products": [
        {
          "model": "BSZ097N04LS",
          "series": "OptiMOS™",
          "parameters": {
            "voltage": "40V",
            "current": "300A",
            "package": "PG-DSO-32"
          },
          "description": "...",
          "datasheet": "path/to/datasheet.pdf",
          "stock": "in_stock",
          "relatedProducts": [],
          "faq": []
        }
      ]
    }
  }
}
```

**solutions.json**：
```json
{
  "brand": "infineon",
  "solutions": [
    {
      "id": "ev-charging",
      "title": "电动汽车充电解决方案",
      "industry": "汽车电子",
      "summary": "...",
      "blockDiagram": "path/to/diagram.svg",
      "advantages": [],
      "bomList": [],
      "applications": []
    }
  ]
}
```

**support.json**：
```json
{
  "brand": "infineon",
  "categories": {
    "guides": {
      "name": "选型指南",
      "articles": [
        {
          "id": "how-to-select-mcu",
          "title": "如何选择英飞凌 MCU",
          "author": "张工",
          "date": "2026-03-20",
          "tags": ["MCU", "AURIX", "选型"],
          "content": "...",
          "relatedArticles": []
        }
      ]
    }
  }
}
```

**news.json**：
```json
{
  "brand": "infineon",
  "categories": {
    "company": {
      "name": "公司新闻",
      "news": []
    },
    "industry": {
      "name": "行业动态",
      "news": []
    }
  }
}
```

**JSON 文件要求**：
- 每个分类有独立的 JSON 文件（products.json, solutions.json, support.json, news.json 等）
- 内容全部 AI 生成
- 每个品牌的内容要有差异化，以免 SEO 排名降权
- 新增品牌时，复制模板，填充 JSON 数据
- 一次性生成一个品牌的完整数据

### 6.2 品牌列表

需要支持的品牌：
- Infineon, Semikron, Fuji, Mitsubishi, IXYS, Cree, GeneSic
- SanRex, PI, Firstack, Bronze
- Yangjie, Inventchip
- LEM, Faratronic
- Jianghai, Aishi
- Hongfa, 松下
- 冠西，光宝
- Sinofuse, Bussmann, Littelfuse
- Silan, TI, ADI, ST, Microchip, 瑞萨，NXP, Allegro, 乐鑫
- 兆易

---

## 7. 模板系统

### 7.1 页面模板清单

| 模板名称 | 用途 | 数量 |
|----------|------|------|
| index.html | 首页模板 | 1 |
| products-category.html | 产品分类列表页 | 1 |
| products-subcategory.html | 二级分类页（带表格） | 1 |
| product-detail.html | 产品详情页 | 1 |
| solutions-list.html | 解决方案列表页 | 1 |
| solution-detail.html | 解决方案详情页 | 1 |
| support-list.html | 技术支持列表页 | 1 |
| support-article.html | 技术文章详情页 | 1 |
| news-list.html | 新闻列表页 | 2（公司/行业） |
| news-detail.html | 新闻详情页 | 1 |
| about.html | 关于我们/发展历程/案例 | 1 |
| contact.html | 联系我们 | 1 |
| brand.html | 品牌首页 | 1 |

### 7.2 模板通用要求

- 所有模板包含一致的 `<nav>` 导航栏
- 所有模板包含一致的 `<footer>` 页脚
- 所有模板包含面包屑导航
- 所有模板包含 SEO Meta 标签占位符
- 所有模板包含侧边栏（如适用）
- 基于 index.html 和 style.css 的现有代码创建
- 内容全部 AI 生成

### 7.3 特殊模板设计

**product-detail.html**：
- 电商级布局，双栏 Hero 区域
- 首屏 Hero 区域（双栏布局）：
  - 左侧：高清产品大图展示区（预留缩略图画廊位置）
  - 右侧：核心信息栏（H1 型号标题、库存状态标签、简短描述、双 CTA 按钮组）
- Tab 选项卡切换（带 URL 锚点）：[产品概述]、[规格参数]、[应用电路]、[相关文档]
- 规格参数：斑马纹表格 (Zebra-striped Table) 样式，表头加粗背景灰，移动端支持横向滚动
- 配套料号推荐卡片轮播
- Product Schema JSON-LD 标记
- 布局结构使用 CSS Grid

**tech-article.html**：
- 左宽右窄布局（1fr 300px）
- Sticky 文章目录侧边栏（position: sticky; top: 100px）
- 作者信息栏（文章顶部展示 FAE 工程师头像、姓名、发布日期）
- 代码块高亮样式
- 排版优化：限制正文最大宽度 (max-width: 800px)，行高 (line-height) 1.8，段间距 24px
- 样式细节：H2/H3 标题左侧竖线装饰；代码块灰色背景和高亮；引用块左边框
- 侧边栏组件：相关 PDF 下载、向工程师提问表单入口
- TechArticle Schema JSON-LD 标记
- 类似技术博客或 Wiki，优化长文阅读体验，方便通过目录跳转
- 容器布局使用 display: grid; grid-template-columns: 1fr 300px

**news-detail.html**：
- 全宽 Header Banner（背景图或色块，H1 标题、发布日期、分类标签叠加显示，文字加阴影）
- 单栏居中正文（去除侧边栏干扰）
- 社交分享按钮
- 底部推荐阅读（3 个最新行业动态图文卡片）
- NewsArticle Schema JSON-LD 标记
- 杂志风格，强调大图视觉和分享传播
- 头部视觉使用全宽度背景图或色块，将 H1 标题、发布日期、分类标签（如"行业动态"）叠加显示在 Banner 上

**内容字数要求**：
- 新闻详情页：≥800 字
- 解决方案详情页：≥800 字
- 技术支持详情页：≥800 字
- 所有详情页：深度内容，提供细节、新观点、独特见解

### 7.4 CSS 样式与交互补充要求

**style.css 特定样式类**：
- `.tab-container` - Tab 选项卡容器
- `.spec-table` - 规格参数表格（斑马纹样式）
- `.sticky-sidebar` - 粘性侧边栏
- `.article-content` - 文章内容区域
- `.zebra-striped` - 斑马纹表格样式
- `.author-box` - 作者信息栏样式
- `.banner-header` - 新闻详情页头部 Banner 样式

**响应式适配**：
- 手机端（<768px）产品页双栏变为单栏
- 手机端技术页侧边栏自动移动到文章底部

### 7.5 其他模板

还需要创建以下模板：
- 新闻列表页模板（news-list.html）
- 产品分类列表页模板（products-category.html）
- 解决方案列表页模板（solutions-list.html）
- 技术支持列表页模板（support-list.html）
- 二级分类页模板（products-subcategory.html）- 带动态表格列

### 7.6 品牌列表页

- 品牌列表页要新增品牌卡片
- 后续新增品牌子目录网站时，依据新增品牌的产品、应用行业、解决方案定制内容
- 复制模板，修改 JSON 数据即可新增品牌子目录网站

---

## 8. 技术实现

### 8.1 技术栈

- **前端**：HTML5 + CSS3 + 原生 JavaScript（ES6+）
- **样式**：纯 CSS，使用 CSS 变量统一管理
- **构建**：Node.js 脚本批量生成 HTML
- **测试**：Playwright

### 8.2 目录结构

```
C:\Users\lenovo\Desktop\web20260323\
├── index.html                 # 首页
├── style.css                  # 全局样式
├── script.js                  # 全局脚本
├── sitemap.xml                # 网站地图（自动生成）
├── assets/
│   ├── images/               # 图片资源
│   ├── svg/                  # SVG 资源
│   └── css/                  # 分模块 CSS（可选）
├── data/
│   ├── infineon/
│   │   ├── products.json
│   │   ├── solutions.json
│   │   ├── support.json
│   │   └── news.json
│   └── semikron/             # 其他品牌数据
├── products/
│   ├── index.html            # 产品分类页
│   ├── igbt/
│   │   ├── index.html        # IGBT 二级分类页
│   │   └── BSZ097N04LS.html  # 产品详情页
│   └── mosfet/
│       └── ...
├── solutions/
│   ├── index.html
│   └── ev-charging.html
├── support/
│   ├── index.html
│   ├── guides/
│   │   └── how-to-select-mcu.html
│   └── ...
├── news/
│   ├── company/
│   │   └── index.html
│   ├── industry/
│   │   ├── index.html
│   │   └── infineon-new-product.html
│   └── ...
├── about/
│   ├── index.html
│   ├── history.html
│   ├── cases.html
│   └── contact.html
└── scripts/
    ├── generate-pages.js     # 页面生成脚本
    └── generate-sitemap.js   # 网站地图生成脚本
```

### 8.3 页面生成流程

1. 准备品牌 JSON 数据
2. 运行 `node scripts/generate-pages.js --brand infineon`
3. 脚本读取模板和 JSON 数据
4. 批量生成所有 HTML 页面
5. 运行 `node scripts/generate-sitemap.js` 生成 sitemap.xml
6. 用 JS 脚本生成 HTML 网页
7. 一次性生成一个品牌的完整数据

### 8.4 页面生成脚本逻辑

**generate-pages.js 功能**：
- 读取品牌 JSON 数据（products.json, solutions.json, support.json, news.json）
- 读取 HTML 模板文件
- 遍历每个分类和数据项
- 填充模板内容（标题、描述、正文、图片、结构化数据）
- 生成静态 HTML 文件到对应目录
- 生成分类列表页和二级分类页
- 输出日志和错误报告

**模板变量替换**：
- `{{title}}` - 页面标题
- `{{description}}` - Meta 描述
- `{{keywords}}` - Meta 关键词
- `{{breadcrumbs}}` - 面包屑导航 HTML
- `{{content}}` - 主要内容区域
- `{{sidebar}}` - 侧边栏 HTML
- `{{schema}}` - 结构化数据 JSON-LD

---

## 9. 开发流程

### 9.1 开发阶段

| 阶段 | 内容 | 技能调用 |
|------|------|----------|
| 规划 | UI/UX 规划设计 | brainstorming, ui/ux pro max |
| 计划 | 详细开发计划 | writing-plans |
| 开发 | 执行实施 | executing-plans, subagent-driven-development, dispatching-parallel-agents |
| 审查 | 代码审查 | requesting-code-review, receiving-code-review |
| 测试 | 系统调试 | systematic-debugging, playwright |
| 验证 | 完成前验证 | verification-before-completion |
| 完成分支 | 完成开发分支 | finishing-a-development-branch |

### 9.2 Git Worktrees

- 使用 `using-git-worktrees` 超级技能在工作区目录创建开发分支
- 每个单元模块在独立分支开发

### 9.3 单元模块审查测试规则

1. 每个单元模块完成后立即审查和测试，不等待
2. 审查和测试是该模块的一部分，不是独立阶段
3. 失败立即修复，修复后重新测试，通过后才继续下一个模块
4. 集成测试在所有单元通过后才开始

### 9.4 开发顺序

1. 先完成 Infineon 主站
2. 复制模板 + 填充 JSON 生成其他品牌

### 9.5 Playwright 测试计划

**测试内容**：
- 所有页面类型截图对比（桌面端 + 移动端）
- 样式是否失效检查
- 响应式布局验证
- 交互功能测试（Tab 切换、筛选、搜索）
- 暗色模式切换测试
- 对照 PRD 检查页面元素完整性

**测试流程**：
1. 每个单元模块完成后，使用 Playwright 截图
2. 对照 PRD 检查是否符合要求
3. 发现样式问题立即修复
4. 重新测试直到 OK
5. 所有单元通过后进行集成测试

**测试要求**：
- 检查样式设计是否有问题，要保证页面样式不失效
- 全站网页样式失效，用 Playwright 截图，修复，测试，直到 OK
- 子目录网站每类页面，用 Playwright 截图，对照 PRD 是否符合，修复，测试，直到 OK

### 9.6 检查点机制

- 审查测试后，插入 1 个检查点
- 给出关键状态、结果日志
- 如出现错误，去修复
- 写入工作区目录

### 9.7 TODO 集成要求

- TODO 步骤集成 superpowers 步骤
- 在 TODO 步骤调用对应的 skill
- 每完成一个步骤，做标记，再继续下一步
- 连贯开发模式，依次持续，直到完成

---

## 10. 验收标准

### 10.1 功能验收

- [ ] 所有页面模板正常渲染
- [ ] JSON 数据正确加载显示
- [ ] 筛选功能正常工作
- [ ] Tab 切换正常
- [ ] 响应式布局正常
- [ ] 暗色模式正常切换
- [ ] 所有链接有效，无 404 或空链接

### 10.2 SEO 验收

- [ ] 所有页面 Meta 标签正确
- [ ] 所有图片有 alt 属性
- [ ] 面包屑导航正确
- [ ] 结构化数据正确
- [ ] sitemap.xml 生成正确
- [ ] URL 结构符合规范
- [ ] 列表页和详情页 Title 独特、包含关键词

### 10.3 性能验收

- [ ] 页面加载时间 < 3 秒
- [ ] 移动端适配完美
- [ ] 无控制台错误
- [ ] 样式不失效
- [ ] 颜色对比度满足 WCAG AA 标准
- [ ] 所有交互元素支持键盘导航

### 10.4 内容验收

- [ ] Infineon 主站 50-80 个页面
- [ ] 每个产品分类至少 1 个产品
- [ ] 解决方案发布 5 个
- [ ] 技术文章每个分类至少 1 篇
- [ ] 新闻每个分类至少 1 篇
- [ ] 详情页内容≥800 字
- [ ] 产品分类页描述 200-300 字

### 10.5 模板验收

- [ ] 产品中心、解决方案、技术支持、新闻列表页、详情页模板全部补全
- [ ] 所有模板符合 PRD，网页样式、布局符合 PRD
- [ ] JSON 所有数据符合 PRD 要求
- [ ] 脚本可以自动生成产品、解决方案、技术支持、新闻创建列表页、详情页、产品分类页
- [ ] 分类列表页要用动态表格列
- [ ] 保证脚本可以自动生成产品、解决方案、技术支持、新闻创建列表页、详情页、产品分类页

### 10.6 品牌验收

- [ ] 依据品牌清单，依次新增品牌
- [ ] 补全每个品牌的列表页、分类页、关于品牌页
- [ ] 每个品牌内容差异化，避免 SEO 排名降权
- [ ] 新增品牌子目录网站，新增品牌的产品分类、应用行业、解决方案都和英飞凌不一样
- [ ] 依据新增品牌的产品、应用行业、解决方案，来定制内容
- [ ] 复制模板，修改 JSON 数据，即可新增品牌子目录网站
- [ ] 品牌列表页要新增品牌卡片
- [ ] 不要放 404 或空链接，对 SEO 优化不好
- [ ] Infineon 网站内容 SEO 不达标，请按照 prompt、PRD 文档优化，并优化 JSON 文件

---

## 11. 品牌清单

需要支持的品牌（按顺序开发）：

**第一批**：
- Infineon（英飞凌）- 主站优先完成
- Semikron（西门康）
- Fuji（富士）
- Mitsubishi（三菱）
- IXYS
- Cree
- GeneSic

**第二批**：
- SanRex
- PI
- Firstack
- Bronze

**第三批**：
- Yangjie
- Inventchip
- LEM
- Faratronic

**第四批**：
- Jianghai
- Aishi
- Hongfa
- 松下

**第五批**：
- 冠西
- 光宝
- Sinofuse
- Bussmann
- Littelfuse

**第六批**：
- Silan
- TI
- ADI
- ST
- Microchip
- 瑞萨
- NXP
- Allegro
- 乐鑫
- 兆易
- Crmicro
- CRRC
- Macmic
- Starpower
- BYD

---

## 12. 附录

### 12.1 关键词清单

**核心关键词**：英飞凌代理，西门康代理

**产品 + 核心词**：
- 英飞凌 IGBT 代理
- 英飞凌 MOSFET 代理
- 英飞凌 MCU 代理
- 英飞凌传感器代理

**资质 + 核心词**：
- 英飞凌授权代理
- 英飞凌一级代理

**问题型长尾词**：
- 如何选择英飞凌 MCU
- 英飞凌代理商有哪些
- 英飞凌官网代理查询

### 11.2 联系方式

- QQ：1145711755
- 联系页面：右侧悬浮侧边栏展示

---

## 13. 文档版本

| 版本 | 日期 | 修改内容 | 作者 |
|------|------|----------|------|
| v1.0 | 2026-03-23 | 初始版本 | AI |
| v1.1 | 2026-03-23 | 补充遗漏项：首页额外要求、产品分类页要求、产品详情页 CTA、技术支持标签系统、作者简介页面、新闻中心独立列表、关于我们报关单展示、布局系统要求、交互效果要求、性能可访问性要求、模板详细设计、CSS 样式类、品牌列表页、Git Worktrees、检查点机制、TODO 集成、验收标准扩展、品牌清单 | AI |
| v1.2 | 2026-03-23 | 二次检查补充：解决方案发布 5 个要求、分销商 CTA、每个详情页侧边栏相关详情页、列表页和详情页标题要求、Article/NewsArticle Schema、型号表格页 Product Schema、JSON 文件要求、模板通用要求补充、CSS 样式类补充、页面生成流程补充、brainstorming 技能、Playwright 测试要求、品牌验收标准 | AI |

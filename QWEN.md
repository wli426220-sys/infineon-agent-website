# QWEN.md - 项目上下文文档

## 项目概述

**项目名称**: 英飞凌代理网站 (Infineon Agent Website)

**项目类型**: B2B 电子元器件代理商企业网站 - 静态站点生成项目

**域名**: `www.infineon-elec.com` (部署于 Edge One)

**项目定位**: 为英飞凌代理商"力通电子"创建 SEO 优化的官方网站，展示公司作为英飞凌授权代理商的专业形象，支持多品牌扩展。

**目标用户**: 电子工程师（寻找元器件、技术方案）、采购人员（询价、采购决策）、企业客户（寻找可靠供应商）

---

## 技术栈

| 类别 | 技术 |
|------|------|
| **前端** | HTML5 + CSS3 + 原生 JavaScript (ES6+) |
| **样式** | 纯 CSS，使用 CSS 变量统一管理 |
| **构建** | Node.js 脚本批量生成 HTML |
| **测试** | Playwright (截图测试、功能测试) |
| **图形** | SVG (图标、Logo、背景) |
| **数据** | JSON 数据驱动页面生成 |

---

## 目录结构

```
C:\Users\lenovo\Desktop\web20260323\
├── index.html                 # 首页
├── style.css                  # 全局样式入口
├── script.js                  # 全局脚本
├── sitemap.xml                # 网站地图
├── PRD.md                     # 产品需求文档
├── DESIGN.md                  # 详细设计文档
├── PLAN.md                    # 开发计划
├── TODO.md                    # TODO 清单
├── assets/
│   ├── css/
│   │   ├── variables.css      # CSS 变量
│   │   ├── base.css           # 基础样式
│   │   ├── components.css     # 组件样式
│   │   ├── layout.css         # 布局样式
│   │   └── responsive.css     # 响应式样式
│   ├── images/                # 图片资源
│   └── svg/                   # SVG 资源
│       ├── icons/             # 图标
│       ├── products/          # 产品图
│       └── backgrounds/       # 背景图
├── data/
│   ├── infineon/              # 英飞凌品牌数据
│   │   ├── products.json      # 产品数据
│   │   ├── solutions.json     # 解决方案数据
│   │   ├── support.json       # 技术支持数据
│   │   └── news.json          # 新闻数据
│   └── semikron/              # 其他品牌数据
├── products/                  # 产品中心
│   ├── index.html             # 产品分类页
│   ├── igbt/                  # IGBT 分类
│   ├── mosfet/                # MOSFET 分类
│   ├── mcu/                   # MCU 分类
│   └── ...
├── solutions/                 # 解决方案
├── support/                   # 技术支持
├── news/                      # 新闻中心
│   ├── company/               # 公司新闻
│   └── industry/              # 行业动态
├── about/                     # 关于我们
│   ├── index.html             # 公司简介
│   └── contact.html           # 联系我们
└── scripts/
    ├── generate-pages.js      # 页面生成脚本
    └── generate-sitemap.js    # 网站地图生成脚本
```

---

## 核心功能模块

### 1. 首页 (index.html)
- Hero Banner - 静态背景 + 宣传文案
- 核心优势 - 4 个优势卡片（库存深度、技术支持、物流能力、价格优势）
- 产品中心入口 - 产品分类卡片
- 解决方案展示 - 行业解决方案预览
- 最新动态 - 新闻/技术文章预览
- 底部 CTA - 行动号召区域

### 2. 产品中心
- **产品分类页**: 展示所有产品分类卡片，含 200-300 字描述
- **二级分类页**: 动态参数表格，URL 参数筛选，侧边栏导航
- **产品详情页**: 双栏 Hero 区域、Tab 选项卡、规格参数表格、配套料号推荐、Product Schema

### 3. 解决方案
- **列表页**: 行业解决方案卡片，含摘要和关键词
- **详情页**: 方案框图、核心优势、BOM 清单、应用场景、侧边栏相关文章

### 4. 技术支持
- **分类**: 选型指南、应用笔记、问题排查、新品评测
- **功能**: 标签系统、文章目录 (Sticky)、作者简介、TechArticle Schema

### 5. 新闻中心
- **分类**: 公司新闻、行业动态（独立列表页）
- **详情页**: 全宽 Header Banner、社交分享、推荐阅读、NewsArticle Schema

### 6. 关于我们
- 公司简介、发展历程、服务案例、联系我们
- 右侧悬浮 QQ 侧边栏 (QQ: 1145711755)

---

## 设计规范

### 颜色系统
| 用途 | 颜色值 | 说明 |
|------|--------|------|
| 主色调 | `#0072CE` | 科技蓝 - 主按钮、链接 |
| 强调色 | `#FF6B00` | 活力橙 - CTA 按钮 |
| 背景色 | `#FFFFFF` / `#F8F9FA` | 白色主背景 / 浅灰次级背景 |
| 文字色 | `#333333` / `#666666` | 深灰主文字 / 中灰辅助文字 |
| 边框色 | `#E0E0E0` | 淡灰边框 |
| 成功色 | `#28A745` | 绿色 - 库存有货标签 |
| 询价色 | `#FF9800` | 橙色 - 询价标签 |

### 间距系统 (8px 网格)
```css
--space-1: 4px    --space-4: 16px    --space-8: 32px    --space-16: 64px
--space-2: 8px    --space-5: 20px    --space-10: 40px   --space-20: 80px
--space-3: 12px   --space-6: 24px    --space-12: 48px
```

### 响应式断点
| 断点 | 宽度 | 布局 |
|------|------|------|
| sm | 576px | 小屏手机 |
| md | 768px | 平板 |
| lg | 992px | 小屏桌面 |
| xl | 1200px | 标准桌面 |
| xxl | 1440px | 大屏桌面 |

---

## SEO 规范

### Meta 标签
```html
<!-- 首页 -->
<title>英飞凌代理 | 提供正品原装现货 | 力通</title>
<meta name="description" content="力通是英飞凌代理，长期稳定供应提供正品原装现货。并提供技术支持和优势价格，欢迎咨询。">
<meta name="keywords" content="英飞凌代理，电子元件现货，英飞凌 IGBT,英飞凌 MOSFET">
```

### 结构化数据 (Schema.org)
- **Product Schema**: 产品详情页
- **TechArticle Schema**: 技术支持文章
- **NewsArticle Schema**: 新闻文章
- **BreadcrumbList Schema**: 所有页面面包屑导航
- **Organization Schema**: 关于我们页面

### 关键词策略
| 类型 | 关键词示例 |
|------|-----------|
| 核心词 | 英飞凌代理，西门康代理 |
| 产品 + 核心词 | 英飞凌 IGBT 代理，英飞凌 MOSFET 代理 |
| 资质 + 核心词 | 英飞凌授权代理，英飞凌一级代理 |
| 长尾词 | 如何选择英飞凌 MCU，英飞凌代理商有哪些 |

---

## 构建与运行

### 页面生成
```bash
# 生成英飞凌品牌页面
node scripts/generate-pages.js infineon

# 生成其他品牌页面
node scripts/generate-pages.js semikron
```

### 生成网站地图
```bash
node scripts/generate-sitemap.js
```

### 本地测试
```bash
# 使用任意静态服务器
npx http-server -p 8080
# 或使用 Python
python -m http.server 8080
```

---

## 开发流程

### 技能调用规范
| 阶段 | 技能 | 用途 |
|------|------|------|
| 准备工作 | `using-git-worktrees` | 创建 Git 工作树 |
| CSS 开发 | `executing-plans` | 执行样式开发 |
| 组件开发 | `subagent-driven-development` | 子代理开发组件 |
| 代码审查 | `requesting-code-review` / `receiving-code-review` | 审查反馈 |
| 调试测试 | `systematic-debugging` / `playwright` | 系统调试和截图测试 |
| 验证完成 | `verification-before-completion` | 完成前验证 |
| 完成分支 | `finishing-a-development-branch` | 完成开发分支 |

### 开发顺序
1. 先完成 Infineon 主站
2. 复制模板 + 填充 JSON 生成其他品牌

### 品牌清单 (按顺序开发)
**第一批**: Infineon, Semikron, Fuji, Mitsubishi, IXYS, Cree, GeneSic  
**第二批**: SanRex, PI, Firstack, Bronze  
**第三批**: Yangjie, Inventchip, LEM, Faratronic  
**第四批**: Jianghai, Aishi, Hongfa, 松下  
**第五批**: 冠西，光宝，Sinofuse, Bussmann, Littelfuse  
**第六批**: Silan, TI, ADI, ST, Microchip, 瑞萨，NXP, Allegro, 乐鑫，兆易

---

## 关键配置

### CSS 变量 (variables.css)
```css
:root {
  --color-primary: #0072CE;
  --color-accent: #FF6B00;
  --color-bg-primary: #FFFFFF;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
  --container-max: 1319px;
  /* ... 更多变量见 variables.css */
}
```

### JSON 数据结构
```json
{
  "brand": "infineon",
  "categories": {
    "igbt": {
      "name": "IGBT",
      "description": "...",
      "products": [
        {
          "model": "FF300R12ME4",
          "series": "EconoDUAL™ 3",
          "parameters": { "voltage": "1200V", "current": "300A" },
          "stock": "in_stock",
          "datasheet": "/datasheets/FF300R12ME4.pdf"
        }
      ]
    }
  }
}
```

---

## 验收标准

### 功能验收
- [ ] 所有页面模板正常渲染
- [ ] JSON 数据正确加载显示
- [ ] 筛选功能、Tab 切换正常工作
- [ ] 响应式布局、暗色模式正常
- [ ] 所有链接有效，无 404

### SEO 验收
- [ ] 所有页面 Meta 标签正确
- [ ] 结构化数据 (Schema.org) 正确
- [ ] sitemap.xml 完整
- [ ] 图片 alt 属性完整

### 性能验收
- [ ] 页面加载时间 < 3 秒
- [ ] Lighthouse 性能得分 > 90
- [ ] 移动端适配完美
- [ ] 颜色对比度满足 WCAG AA

### 内容验收
- [ ] Infineon 主站 50-80 个页面
- [ ] 解决方案发布 5 个
- [ ] 技术文章每个分类至少 1 篇
- [ ] 详情页内容≥800 字

---

## 联系方式

- **QQ**: 1145711755
- **联系页面**: `/about/contact.html`
- **悬浮侧边栏**: 页面右侧固定显示 QQ 在线咨询

---

## 重要文档

| 文档 | 说明 |
|------|------|
| `PRD.md` | 产品需求文档 - 完整功能需求、SEO 要求、数据规范 |
| `DESIGN.md` | 详细设计文档 - 色彩、字体、组件规范、布局系统 |
| `PLAN.md` | 开发计划 - 10 个阶段 62 个任务的详细计划 |
| `TODO.md` | TODO 清单 - 集成技能调用的任务清单 |

---

## 注意事项

1. **不要放 404 或空链接** - 对 SEO 优化不好
2. **每个品牌内容差异化** - 避免 SEO 排名降权
3. **详情页侧边栏** - 显示相关详情页链接
4. **列表页和详情页 Title** - 必须独特、包含关键词
5. **审查测试** - 每个单元模块完成后立即审查测试
6. **连贯开发模式** - 按顺序执行，不跳跃、不遗漏

---

## 版本信息

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.0 | 2026-03-24 | 初始版本，基于现有项目结构生成 |

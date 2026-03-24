# 英飞凌代理网站开发 - TODO 清单

> **连贯开发模式**: 每完成一个步骤，做标记，再继续下一步。每完成一个单元模块，立即代码审查、测试。

## TODO 使用规则

1. **连贯开发**: 按顺序执行，不跳跃、不遗漏
2. **技能集成**: 每个任务包含对应的 skill 调用
3. **审查测试**: 每个单元模块完成后立即审查测试
4. **检查点**: 审查测试后插入检查点，记录关键状态和结果日志
5. **错误修复**: 如出现错误，立即修复，通过后才继续

---

## 审查测试规则补充

**每个单元模块必须调用的技能:**
1. `requesting-code-review` - 请求代码审查
2. `receiving-code-review` - 接收审查反馈
3. 修复审查发现的问题
4. `systematic-debugging` 或 `playwright` - 测试功能

**完整流程:**
```
开发完成 → requesting-code-review → receiving-code-review → 修复问题 → 测试 → 提交
```

---

## Superpowers 技能集成说明

**开发阶段与技能对应关系:**

| 阶段 | 主要技能 | 用途 |
|------|----------|------|
| 阶段 1: 准备工作 | `using-git-worktrees` | 创建 Git 工作树 |
| 阶段 2: CSS 基础架构 | `executing-plans` | 执行基础样式开发 |
| 阶段 3: 组件开发 | `subagent-driven-development` | 子代理开发 22 个组件 |
| 阶段 4: 页面模板开发 | `subagent-driven-development` | 子代理开发 13 个模板 |
| 阶段 5: SVG 资源生成 | `subagent-driven-development` | 子代理生成 SVG 资源 |
| 阶段 6: JSON 数据准备 | `executing-plans` | 执行 JSON 数据编写 |
| 阶段 7: 页面生成脚本 | `executing-plans` | 执行脚本开发 |
| 阶段 8: 集成测试 | `systematic-debugging`, `playwright` | 系统调试和截图测试 |
| 阶段 9: 验证完成 | `verification-before-completion` | 完成前验证 |
| 阶段 10: 完成分支 | `finishing-a-development-branch` | 完成开发分支 |
| 阶段 11: 新增品牌 | `executing-plans` | 执行新增品牌流程 |

**并行开发任务:**
- 使用 `dispatching-parallel-agents` 技能并行开发独立任务
- 例如：同时开发多个组件、同时生成多个 SVG 图标

---

## 阶段 1: 准备工作 (Task 1-3)

### Task 1: 创建 Git Worktree
- [ ] **步骤 1.1**: 调用 `using-git-worktrees` 技能创建工作树
- [ ] **步骤 1.2**: 验证分支创建成功
- [ ] **步骤 1.3**: 提交工作树创建日志
- [ ] **检查点**: 
  - 关键状态：Git worktree 创建成功
  - 结果日志：分支 feature/infineon-website 已创建
  - 技能调用：`using-git-worktrees` ✓

### Task 2: 创建项目目录结构
- [ ] **步骤 2.1**: 创建资源目录 (assets/css, assets/svg, assets/images)
- [ ] **步骤 2.2**: 创建数据目录 (data/infineon)
- [ ] **步骤 2.3**: 创建页面目录 (products/, solutions/, support/, news/, about/)
- [ ] **步骤 2.4**: 创建脚本目录 (scripts/)
- [ ] **步骤 2.5**: 提交目录结构
- [ ] **检查点**:
  - 关键状态：所有目录创建成功
  - 结果日志：20 个目录已创建，Git 提交成功
  - 技能调用：`executing-plans` ✓

### Task 3: 创建 CSS 变量文件
- [ ] **步骤 3.1**: 创建 assets/css/variables.css
- [ ] **步骤 3.2**: 定义颜色变量（主色、强调色、中性色、功能色、暗色模式）
- [ ] **步骤 3.3**: 定义间距、圆角、阴影变量
- [ ] **步骤 3.4**: 定义字体、字号、行高变量
- [ ] **步骤 3.5**: 定义过渡、断点变量
- [ ] **步骤 3.6**: 调用 `requesting-code-review` 审查代码
- [ ] **步骤 3.7**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 3.8**: 修复审查发现的问题
- [ ] **步骤 3.9**: 提交 CSS 变量文件
- [ ] **检查点**:
  - 关键状态：CSS 变量文件创建成功，审查通过
  - 结果日志：variables.css 已创建，包含 50+ 变量，审查问题 0 个
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

---

## 阶段 2: CSS 基础架构 (Task 4-7)

### Task 4: 创建基础样式文件
- [ ] **步骤 4.1**: 创建 assets/css/base.css
- [ ] **步骤 4.2**: 编写 CSS Reset
- [ ] **步骤 4.3**: 编写排版样式（body, h1-h6, p, a）
- [ ] **步骤 4.4**: 编写辅助类（.container, .sr-only, .skip-link）
- [ ] **步骤 4.5**: 调用 `requesting-code-review` 审查代码
- [ ] **步骤 4.6**: 调用 `receiving-code-review` 接收审查反馈
- [ ] **步骤 4.7**: 修复审查发现的问题
- [ ] **步骤 4.8**: 提交基础样式文件
- [ ] **检查点**:
  - 关键状态：基础样式文件创建成功
  - 结果日志：base.css 已创建，审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 5: 创建主样式文件
- [ ] **步骤 5.1**: 创建 style.css
- [ ] **步骤 5.2**: 导入所有 CSS 模块
- [ ] **步骤 5.3**: 编写通用工具类
- [ ] **步骤 5.4**: 调用 `requesting-code-review` 审查
- [ ] **步骤 5.5**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 5.6**: 修复问题并提交
- [ ] **检查点**:
  - 关键状态：主样式入口创建成功
  - 结果日志：style.css 已创建，导入 5 个 CSS 模块
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 6: 创建全局脚本文件
- [ ] **步骤 6.1**: 创建 script.js
- [ ] **步骤 6.2**: 编写导航栏滚动效果
- [ ] **步骤 6.3**: 编写移动端菜单切换
- [ ] **步骤 6.4**: 编写 Tab 选项卡切换
- [ ] **步骤 6.5**: 编写 FAQ 折叠
- [ ] **步骤 6.6**: 编写平滑滚动
- [ ] **步骤 6.7**: 编写搜索功能
- [ ] **步骤 6.8**: 编写暗色模式自动检测
- [ ] **步骤 6.9**: 调用 `requesting-code-review` 审查代码
- [ ] **步骤 6.10**: 调用 `receiving-code-review` 接收审查反馈
- [ ] **步骤 6.11**: 修复审查发现的问题
- [ ] **步骤 6.12**: 调用 `systematic-debugging` 测试功能
- [ ] **步骤 6.13**: 修复问题并提交
- [ ] **检查点**:
  - 关键状态：全局脚本创建成功，功能测试通过
  - 结果日志：script.js 已创建，8 个功能模块，测试通过率 100%
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓, `systematic-debugging` ✓

### Task 7: 创建组件样式文件
- [ ] **步骤 7.1**: 创建 assets/css/components.css
- [ ] **步骤 7.2**: 提交文件框架
- [ ] **步骤 7.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 7.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 7.5**: 修复问题并提交
- [ ] **检查点**:
  - 关键状态：组件样式文件创建成功
  - 结果日志：components.css 已创建，准备添加组件
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

---

## 阶段 3: 组件开发 (Task 8-29)

**注意**: 本阶段使用 `subagent-driven-development` 技能，每个组件由子代理开发，开发完成后立即审查测试

**技能调用:** `subagent-driven-development` ✓

**注意**: 每个组件开发完成后立即审查测试，不等待

### Task 8: 导航栏组件
- [ ] **步骤 8.1**: 编写导航栏 CSS（.navbar, .nav-link, .mobile-menu-toggle）
- [ ] **步骤 8.2**: 添加固定顶部样式
- [ ] **步骤 8.3**: 添加滚动时半透明背景效果
- [ ] **步骤 8.4**: 添加响应式样式（移动端汉堡菜单）
- [ ] **步骤 8.5**: 调用 `requesting-code-review` 审查代码
- [ ] **步骤 8.6**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 8.7**: 修复审查发现的问题
- [ ] **步骤 8.8**: 调用 `playwright` 截图测试（桌面端、移动端）
- [ ] **步骤 8.9**: 修复测试问题并提交
- [ ] **检查点**:
  - 关键状态：导航栏组件开发完成
  - 结果日志：审查通过，截图测试通过，问题 0 个
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓, `playwright` ✓

### Task 9: 页脚组件
- [ ] **步骤 9.1**: 编写页脚 CSS（.footer, .footer-links, .footer-copyright）
- [ ] **步骤 9.2**: 添加响应式样式
- [ ] **步骤 9.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 9.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 9.5**: 修复审查发现的问题
- [ ] **步骤 9.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：页脚组件开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 10: 按钮组件
- [ ] **步骤 10.1**: 编写按钮 CSS（.btn, .btn-primary, .btn-cta, .btn-outline）
- [ ] **步骤 10.2**: 添加悬停效果
- [ ] **步骤 10.3**: 添加焦点状态
- [ ] **步骤 10.4**: 添加按钮尺寸变体
- [ ] **步骤 10.5**: 调用 `requesting-code-review` 审查
- [ ] **步骤 10.6**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 10.7**: 修复审查发现的问题
- [ ] **步骤 10.8**: 调用 `playwright` 测试交互
- [ ] **步骤 10.9**: 提交代码
- [ ] **检查点**:
  - 关键状态：按钮组件开发完成
  - 结果日志：4 种按钮样式，交互测试通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓, `playwright` ✓

### Task 11: 卡片组件
- [ ] **步骤 11.1**: 编写卡片 CSS（.card, .product-card, .feature-card）
- [ ] **步骤 11.2**: 添加悬停提升效果
- [ ] **步骤 11.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 11.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 11.5**: 修复审查发现的问题
- [ ] **步骤 11.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：卡片组件开发完成
  - 结果日志：3 种卡片样式，审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 12: Hero Banner 组件
- [ ] **步骤 12.1**: 编写 Hero CSS（.hero, .hero-title, .hero-cta）
- [ ] **步骤 12.2**: 添加详情页 Header Banner 样式
- [ ] **步骤 12.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 12.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 12.5**: 修复审查发现的问题
- [ ] **步骤 12.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：Hero Banner 组件开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 13: 表单组件
- [ ] **步骤 13.1**: 编写表单 CSS（.form-input, .form-label, .form-group）
- [ ] **步骤 13.2**: 添加焦点状态
- [ ] **步骤 13.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 13.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 13.5**: 修复审查发现的问题
- [ ] **步骤 13.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：表单组件开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 14: 表格组件
- [ ] **步骤 14.1**: 编写表格 CSS（.spec-table, .zebra-striped）
- [ ] **步骤 14.2**: 添加响应式横向滚动
- [ ] **步骤 14.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 14.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 14.5**: 修复审查发现的问题
- [ ] **步骤 14.6**: 调用 `playwright` 测试表格响应式
- [ ] **步骤 14.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：表格组件开发完成
  - 结果日志：斑马纹表格，响应式测试通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓, `playwright` ✓

### Task 15: Tab 选项卡组件
- [ ] **步骤 15.1**: 编写 Tab CSS（.tab-container, .tab-button, .tab-panel）
- [ ] **步骤 15.2**: 添加 URL 锚点联动
- [ ] **步骤 15.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 15.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 15.5**: 修复审查发现的问题
- [ ] **步骤 15.6**: 调用 `systematic-debugging` 测试 Tab 切换
- [ ] **步骤 15.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：Tab 选项卡组件开发完成
  - 结果日志：Tab 切换功能测试通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓, `systematic-debugging` ✓

### Task 16: 侧边栏组件
- [ ] **步骤 16.1**: 编写侧边栏 CSS（.sidebar, .sticky-sidebar）
- [ ] **步骤 16.2**: 添加 Sticky 效果
- [ ] **步骤 16.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 16.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 16.5**: 修复审查发现的问题
- [ ] **步骤 16.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：侧边栏组件开发完成
  - 结果日志：Sticky 效果测试通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 17: 面包屑导航
- [ ] **步骤 17.1**: 编写面包屑 CSS（.breadcrumb, .breadcrumb-item）
- [ ] **步骤 17.2**: 添加完整层级显示
- [ ] **步骤 17.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 17.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 17.5**: 修复审查发现的问题
- [ ] **步骤 17.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：面包屑导航开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 18: 库存标签
- [ ] **步骤 18.1**: 编写库存标签 CSS（.stock-badge, .in-stock, .inquiry）
- [ ] **步骤 18.2**: 添加脉冲动画
- [ ] **步骤 18.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 18.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 18.5**: 修复审查发现的问题
- [ ] **步骤 18.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：库存标签开发完成
  - 结果日志：动画效果测试通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 19: 产品详情首屏
- [ ] **步骤 19.1**: 编写产品首屏 CSS（.product-detail-hero, .product-image-gallery, .product-info-panel）
- [ ] **步骤 19.2**: 添加双栏布局
- [ ] **步骤 19.3**: 添加图片画廊样式
- [ ] **步骤 19.4**: 调用 `requesting-code-review` 审查
- [ ] **步骤 19.5**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 19.6**: 修复审查发现的问题
- [ ] **步骤 19.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：产品详情首屏开发完成
  - 结果日志：双栏布局测试通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 20: 轮播组件
- [ ] **步骤 20.1**: 编写轮播 CSS（.carousel, .carousel-track, .carousel-nav）
- [ ] **步骤 20.2**: 添加导航按钮样式
- [ ] **步骤 20.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 20.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 20.5**: 修复审查发现的问题
- [ ] **步骤 20.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：轮播组件开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 21: 作者信息栏
- [ ] **步骤 21.1**: 编写作者栏 CSS（.author-box, .author-avatar）
- [ ] **步骤 21.2**: 添加 FAE 简介样式
- [ ] **步骤 21.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 21.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 21.5**: 修复审查发现的问题
- [ ] **步骤 21.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：作者信息栏开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 22: FAQ 组件
- [ ] **步骤 22.1**: 编写 FAQ CSS（.faq-item, .faq-question, .faq-answer）
- [ ] **步骤 22.2**: 添加折叠动画
- [ ] **步骤 22.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 22.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 22.5**: 修复审查发现的问题
- [ ] **步骤 22.6**: 调用 `systematic-debugging` 测试折叠功能
- [ ] **步骤 22.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：FAQ 组件开发完成
  - 结果日志：折叠动画测试通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓, `systematic-debugging` ✓

### Task 23: 技术文章排版
- [ ] **步骤 23.1**: 编写文章 CSS（.article-content, .article-content h2/h3）
- [ ] **步骤 23.2**: 添加代码块、引用块样式
- [ ] **步骤 23.3**: 添加标题左侧竖线装饰
- [ ] **步骤 23.4**: 调用 `requesting-code-review` 审查
- [ ] **步骤 23.5**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 23.6**: 修复审查发现的问题
- [ ] **步骤 23.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：技术文章排版开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 24: 社交分享按钮
- [ ] **步骤 24.1**: 编写分享按钮 CSS（.share-buttons, .share-button）
- [ ] **步骤 24.2**: 添加各平台颜色
- [ ] **步骤 24.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 24.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 24.5**: 修复审查发现的问题
- [ ] **步骤 24.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：社交分享按钮开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 25: BOM 清单表格
- [ ] **步骤 25.1**: 编写 BOM 表格 CSS（.bom-table, .part-link）
- [ ] **步骤 25.2**: 添加型号链接样式
- [ ] **步骤 25.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 25.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 25.5**: 修复审查发现的问题
- [ ] **步骤 25.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：BOM 清单表格开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 26: 悬浮 QQ 侧边栏
- [ ] **步骤 26.1**: 编写悬浮侧边栏 CSS（.floating-sidebar, .floating-sidebar-item）
- [ ] **步骤 26.2**: 添加固定定位
- [ ] **步骤 26.3**: 添加展开二维码面板
- [ ] **步骤 26.4**: 调用 `requesting-code-review` 审查
- [ ] **步骤 26.5**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 26.6**: 修复审查发现的问题
- [ ] **步骤 26.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：悬浮 QQ 侧边栏开发完成
  - 结果日志：展开功能测试通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

### Task 27: 暗色模式样式
- [ ] **步骤 27.1**: 编写暗色模式 CSS（@media prefers-color-scheme: dark）
- [ ] **步骤 27.2**: 添加变量切换
- [ ] **步骤 27.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 27.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 27.5**: 修复审查发现的问题
- [ ] **步骤 27.6**: 调用 `playwright` 测试暗色模式
- [ ] **步骤 27.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：暗色模式样式开发完成
  - 结果日志：暗色模式截图测试通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓, `playwright` ✓

### Task 28: 响应式布局
- [ ] **步骤 28.1**: 编写响应式 CSS（assets/css/responsive.css）
- [ ] **步骤 28.2**: 添加 5 个断点样式
- [ ] **步骤 28.3**: 添加移动端适配
- [ ] **步骤 28.4**: 调用 `requesting-code-review` 审查
- [ ] **步骤 28.5**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 28.6**: 修复审查发现的问题
- [ ] **步骤 28.7**: 调用 `playwright` 测试各断点
- [ ] **步骤 28.8**: 提交代码
- [ ] **检查点**:
  - 关键状态：响应式布局开发完成
  - 结果日志：5 个断点测试全部通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓, `playwright` ✓

### Task 29: 交互动效
- [ ] **步骤 29.1**: 编写交互动效 CSS（过渡、动画、悬停效果）
- [ ] **步骤 29.2**: 添加减少动画支持（prefers-reduced-motion）
- [ ] **步骤 29.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 29.4**: 调用 `receiving-code-review` 接收反馈
- [ ] **步骤 29.5**: 修复审查发现的问题
- [ ] **步骤 29.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：交互动效开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓, `receiving-code-review` ✓

---

## 阶段 4: 页面模板开发 (Task 30-42)

**注意**: 本阶段使用 `subagent-driven-development` 技能，每个页面模板由子代理开发

**技能调用:** `subagent-driven-development` ✓

### Task 30: 首页模板
- [ ] **步骤 30.1**: 创建 index.html
- [ ] **步骤 30.2**: 添加 SEO Meta 标签（title, description, keywords）
- [ ] **步骤 30.3**: 添加导航栏和页脚
- [ ] **步骤 30.4**: 添加 Hero Banner
- [ ] **步骤 30.5**: 添加核心优势模块
- [ ] **步骤 30.6**: 添加产品分类入口
- [ ] **步骤 30.7**: 添加解决方案展示
- [ ] **步骤 30.8**: 添加最新动态
- [ ] **步骤 30.9**: 添加底部 CTA
- [ ] **步骤 30.10**: 添加结构化数据（Organization Schema）
- [ ] **步骤 30.11**: 调用 `requesting-code-review` 审查
- [ ] **步骤 30.12**: 调用 `playwright` 截图测试
- [ ] **步骤 30.13**: 提交代码
- [ ] **检查点**:
  - 关键状态：首页模板开发完成
  - 结果日志：SEO Meta 完整，截图测试通过
  - 技能调用：`requesting-code-review` ✓, `playwright` ✓

### Task 31: 产品分类页模板
- [ ] **步骤 31.1**: 创建 products-category.html
- [ ] **步骤 31.2**: 添加产品分类卡片布局
- [ ] **步骤 31.3**: 添加 200-300 字描述内容
- [ ] **步骤 31.4**: 添加选型指南入口
- [ ] **步骤 31.5**: 调用 `requesting-code-review` 审查
- [ ] **步骤 31.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：产品分类页模板开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓

### Task 32: 二级分类页模板
- [ ] **步骤 32.1**: 创建 products-subcategory.html
- [ ] **步骤 32.2**: 添加动态参数表格
- [ ] **步骤 32.3**: 添加侧边栏分类导航
- [ ] **步骤 32.4**: 添加 Product Schema
- [ ] **步骤 32.5**: 调用 `requesting-code-review` 审查
- [ ] **步骤 32.6**: 调用 `playwright` 测试表格响应式
- [ ] **步骤 32.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：二级分类页模板开发完成
  - 结果日志：动态表格测试通过
  - 技能调用：`requesting-code-review` ✓, `playwright` ✓

### Task 33: 产品详情页模板
- [ ] **步骤 33.1**: 创建 product-detail.html
- [ ] **步骤 33.2**: 添加双栏 Hero 区域
- [ ] **步骤 33.3**: 添加 Tab 选项卡切换
- [ ] **步骤 33.4**: 添加斑马纹参数表格
- [ ] **步骤 33.5**: 添加配套料号推荐轮播
- [ ] **步骤 33.6**: 添加 Product Schema JSON-LD
- [ ] **步骤 33.7**: 调用 `requesting-code-review` 审查
- [ ] **步骤 33.8**: 调用 `playwright` 测试 Tab 切换
- [ ] **步骤 33.9**: 提交代码
- [ ] **检查点**:
  - 关键状态：产品详情页模板开发完成
  - 结果日志：Tab 切换测试通过，Schema 正确
  - 技能调用：`requesting-code-review` ✓, `playwright` ✓

### Task 34: 解决方案列表页模板
- [ ] **步骤 34.1**: 创建 solutions-list.html
- [ ] **步骤 34.2**: 添加解决方案卡片
- [ ] **步骤 34.3**: 添加摘要和关键词
- [ ] **步骤 34.4**: 调用 `requesting-code-review` 审查
- [ ] **步骤 34.5**: 提交代码
- [ ] **检查点**:
  - 关键状态：解决方案列表页模板开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓

### Task 35: 解决方案详情页模板
- [ ] **步骤 35.1**: 创建 solution-detail.html
- [ ] **步骤 35.2**: 添加方案框图
- [ ] **步骤 35.3**: 添加核心优势模块
- [ ] **步骤 35.4**: 添加 BOM 清单表格
- [ ] **步骤 35.5**: 添加应用场景
- [ ] **步骤 35.6**: 添加侧边栏相关文章
- [ ] **步骤 35.7**: 调用 `requesting-code-review` 审查
- [ ] **步骤 35.8**: 提交代码
- [ ] **检查点**:
  - 关键状态：解决方案详情页模板开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓

### Task 36: 技术支持列表页模板
- [ ] **步骤 36.1**: 创建 support-list.html
- [ ] **步骤 36.2**: 添加分类选项卡切换
- [ ] **步骤 36.3**: 添加标签系统
- [ ] **步骤 36.4**: 调用 `requesting-code-review` 审查
- [ ] **步骤 36.5**: 提交代码
- [ ] **检查点**:
  - 关键状态：技术支持列表页模板开发完成
  - 结果日志：选项卡切换测试通过
  - 技能调用：`requesting-code-review` ✓, `systematic-debugging` ✓

### Task 37: 技术文章详情页模板
- [ ] **步骤 37.1**: 创建 support-article.html
- [ ] **步骤 37.2**: 添加左宽右窄布局（1fr 300px）
- [ ] **步骤 37.3**: 添加 Sticky 文章目录
- [ ] **步骤 37.4**: 添加作者信息栏
- [ ] **步骤 37.5**: 添加 TechArticle Schema
- [ ] **步骤 37.6**: 调用 `requesting-code-review` 审查
- [ ] **步骤 37.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：技术文章详情页模板开发完成
  - 结果日志：Sticky 目录测试通过
  - 技能调用：`requesting-code-review` ✓

### Task 38: 新闻列表页模板
- [ ] **步骤 38.1**: 创建 news-list.html
- [ ] **步骤 38.2**: 添加公司/行业分类
- [ ] **步骤 38.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 38.4**: 提交代码
- [ ] **检查点**:
  - 关键状态：新闻列表页模板开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓

### Task 39: 新闻详情页模板
- [ ] **步骤 39.1**: 创建 news-detail.html
- [ ] **步骤 39.2**: 添加全宽 Header Banner
- [ ] **步骤 39.3**: 添加社交分享按钮
- [ ] **步骤 39.4**: 添加底部推荐阅读
- [ ] **步骤 39.5**: 添加 NewsArticle Schema
- [ ] **步骤 39.6**: 调用 `requesting-code-review` 审查
- [ ] **步骤 39.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：新闻详情页模板开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓

### Task 40: 关于我们页模板
- [ ] **步骤 40.1**: 创建 about.html
- [ ] **步骤 40.2**: 添加公司历史
- [ ] **步骤 40.3**: 添加团队实力
- [ ] **步骤 40.4**: 添加服务案例
- [ ] **步骤 40.5**: 添加报关单展示
- [ ] **步骤 40.6**: 调用 `requesting-code-review` 审查
- [ ] **步骤 40.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：关于我们页模板开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓

### Task 41: 联系我们页模板
- [ ] **步骤 41.1**: 创建 contact.html
- [ ] **步骤 41.2**: 插入 contact.png 图片
- [ ] **步骤 41.3**: 添加右侧悬浮 QQ 侧边栏
- [ ] **步骤 41.4**: 添加联系表单
- [ ] **步骤 41.5**: 调用 `requesting-code-review` 审查
- [ ] **步骤 41.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：联系我们页模板开发完成
  - 结果日志：contact.png 显示正常，QQ 侧边栏功能正常
  - 技能调用：`requesting-code-review` ✓

### Task 42: 品牌列表页模板
- [ ] **步骤 42.1**: 创建 brand.html
- [ ] **步骤 42.2**: 添加品牌卡片
- [ ] **步骤 42.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 42.4**: 提交代码
- [ ] **检查点**:
  - 关键状态：品牌列表页模板开发完成
  - 结果日志：审查通过
  - 技能调用：`requesting-code-review` ✓

---

## 阶段 5: SVG 资源生成 (Task 43-45)

**注意**: 本阶段使用 `subagent-driven-development` 技能，SVG 资源由子代理生成

**技能调用:** `subagent-driven-development` ✓

### Task 43: 产品图标库
- [ ] **步骤 43.1**: 生成 MCU 微控制器 SVG 图标
- [ ] **步骤 43.2**: 生成 IGBT SVG 图标
- [ ] **步骤 43.3**: 生成 MOSFET SVG 图标
- [ ] **步骤 43.4**: 生成传感器 SVG 图标
- [ ] **步骤 43.5**: 生成功能图标（搜索、菜单、下载、分享等）
- [ ] **步骤 43.6**: 调用 `requesting-code-review` 审查
- [ ] **步骤 43.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：产品图标库生成完成
  - 结果日志：10+ 图标已生成，风格统一
  - 技能调用：`requesting-code-review` ✓

### Task 44: Logo 设计
- [ ] **步骤 44.1**: 生成力通电子主 Logo SVG
- [ ] **步骤 44.2**: 生成品牌子目录 Logo 变体
- [ ] **步骤 44.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 44.4**: 提交代码
- [ ] **检查点**:
  - 关键状态：Logo 设计完成
  - 结果日志：主 Logo 和变体已生成
  - 技能调用：`requesting-code-review` ✓

### Task 45: 抽象背景图
- [ ] **步骤 45.1**: 生成电路板纹理 SVG 背景
- [ ] **步骤 45.2**: 生成科技线条 SVG 背景
- [ ] **步骤 45.3**: 调用 `requesting-code-review` 审查
- [ ] **步骤 45.4**: 提交代码
- [ ] **检查点**:
  - 关键状态：抽象背景图生成完成
  - 结果日志：2 种背景图已生成
  - 技能调用：`requesting-code-review` ✓

---

## 阶段 6: JSON 数据准备 (Task 46-49)

### Task 46: products.json
- [ ] **步骤 46.1**: 创建 data/infineon/products.json
- [ ] **步骤 46.2**: 添加产品分类（IGBT, MOSFET, MCU, 传感器）
- [ ] **步骤 46.3**: 添加每个分类的产品列表
- [ ] **步骤 46.4**: 添加产品参数、封装、系列等信息
- [ ] **步骤 46.5**: AI 生成产品描述（≥200 字）
- [ ] **步骤 46.6**: 调用 `requesting-code-review` 审查数据结构
- [ ] **步骤 46.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：products.json 创建完成
  - 结果日志：4 个分类，每个分类 1+ 产品，数据结构正确
  - 技能调用：`requesting-code-review` ✓

### Task 47: solutions.json
- [ ] **步骤 47.1**: 创建 data/infineon/solutions.json
- [ ] **步骤 47.2**: 添加 5 个解决方案
- [ ] **步骤 47.3**: 添加每个方案的摘要、框图、BOM 清单、应用场景
- [ ] **步骤 47.4**: AI 生成方案详情（≥800 字）
- [ ] **步骤 47.5**: 调用 `requesting-code-review` 审查
- [ ] **步骤 47.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：solutions.json 创建完成
  - 结果日志：5 个解决方案，内容完整
  - 技能调用：`requesting-code-review` ✓

### Task 48: support.json
- [ ] **步骤 48.1**: 创建 data/infineon/support.json
- [ ] **步骤 48.2**: 添加分类（选型指南、应用笔记、问题排查、新品评测）
- [ ] **步骤 48.3**: 添加每个分类的文章
- [ ] **步骤 48.4**: AI 生成文章内容（≥800 字）
- [ ] **步骤 48.5**: 添加标签系统
- [ ] **步骤 48.6**: 调用 `requesting-code-review` 审查
- [ ] **步骤 48.7**: 提交代码
- [ ] **检查点**:
  - 关键状态：support.json 创建完成
  - 结果日志：4 个分类，每个分类 1+ 文章，标签完整
  - 技能调用：`requesting-code-review` ✓

### Task 49: news.json
- [ ] **步骤 49.1**: 创建 data/infineon/news.json
- [ ] **步骤 49.2**: 添加分类（公司新闻、行业动态）
- [ ] **步骤 49.3**: 添加每个分类的新闻
- [ ] **步骤 49.4**: AI 生成新闻内容（≥800 字）
- [ ] **步骤 49.5**: 调用 `requesting-code-review` 审查
- [ ] **步骤 49.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：news.json 创建完成
  - 结果日志：2 个分类，每个分类 1+ 新闻
  - 技能调用：`requesting-code-review` ✓

---

## 阶段 7: 页面生成脚本 (Task 50-51)

### Task 50: generate-pages.js
- [ ] **步骤 50.1**: 创建 scripts/generate-pages.js
- [ ] **步骤 50.2**: 编写 JSON 数据读取功能
- [ ] **步骤 50.3**: 编写 HTML 模板读取功能
- [ ] **步骤 50.4**: 编写模板变量替换功能
- [ ] **步骤 50.5**: 编写页面生成功能
- [ ] **步骤 50.6**: 添加日志和错误报告
- [ ] **步骤 50.7**: 调用 `requesting-code-review` 审查
- [ ] **步骤 50.8**: 调用 `systematic-debugging` 测试脚本
- [ ] **步骤 50.9**: 提交代码
- [ ] **检查点**:
  - 关键状态：页面生成脚本开发完成
  - 结果日志：脚本运行成功，生成所有页面
  - 技能调用：`requesting-code-review` ✓, `systematic-debugging` ✓

### Task 51: generate-sitemap.js
- [ ] **步骤 51.1**: 创建 scripts/generate-sitemap.js
- [ ] **步骤 51.2**: 编写 HTML 文件扫描功能
- [ ] **步骤 51.3**: 编写 URL 列表生成功能
- [ ] **步骤 51.4**: 添加 lastmod, priority, changefreq
- [ ] **步骤 51.5**: 调用 `requesting-code-review` 审查
- [ ] **步骤 51.6**: 提交代码
- [ ] **检查点**:
  - 关键状态：网站地图生成脚本开发完成
  - 结果日志：sitemap.xml 生成成功
  - 技能调用：`requesting-code-review` ✓

---

## 阶段 8: 集成测试 (Task 52-58)

**注意**: 本阶段使用 `systematic-debugging` 和 `playwright` 技能进行系统测试

**技能调用:** `systematic-debugging` ✓, `playwright` ✓

**注意**: 集成测试在所有单元模块通过后才开始

### Task 52: 功能集成测试
- [ ] **步骤 52.1**: 调用 `playwright` 运行功能测试
- [ ] **步骤 52.2**: 测试所有页面链接
- [ ] **步骤 52.3**: 测试 Tab 切换、筛选、搜索功能
- [ ] **步骤 52.4**: 记录测试结果
- [ ] **步骤 52.5**: 修复发现的问题
- [ ] **检查点**:
  - 关键状态：功能集成测试完成
  - 结果日志：测试通过率 XX%，问题 X 个已修复
  - 技能调用：`playwright` ✓, `systematic-debugging` ✓

### Task 53: 样式集成测试
- [ ] **步骤 53.1**: 调用 `playwright` 截图测试所有页面
- [ ] **步骤 53.2**: 对照 PRD 检查样式
- [ ] **步骤 53.3**: 修复样式问题
- [ ] **检查点**:
  - 关键状态：样式集成测试完成
  - 结果日志：截图测试通过，样式问题已修复
  - 技能调用：`playwright` ✓

### Task 54: 性能集成测试
- [ ] **步骤 54.1**: 调用 Lighthouse 运行性能测试
- [ ] **步骤 54.2**: 测试页面加载时间、LCP、FCP
- [ ] **步骤 54.3**: 优化性能问题
- [ ] **检查点**:
  - 关键状态：性能集成测试完成
  - 结果日志：Lighthouse 得分 XX，加载时间 X 秒
  - 技能调用：`systematic-debugging` ✓

### Task 55: SEO 集成测试
- [ ] **步骤 55.1**: 检查所有页面 Meta 标签
- [ ] **步骤 55.2**: 检查结构化数据
- [ ] **步骤 55.3**: 检查 sitemap.xml
- [ ] **步骤 55.4**: 修复 SEO 问题
- [ ] **检查点**:
  - 关键状态：SEO 集成测试完成
  - 结果日志：SEO 检查通过，无问题
  - 技能调用：`systematic-debugging` ✓

### Task 56: 响应式集成测试
- [ ] **步骤 56.1**: 调用 `playwright` 测试所有断点
- [ ] **步骤 56.2**: 测试 375px, 768px, 1024px, 1440px
- [ ] **步骤 56.3**: 修复响应式问题
- [ ] **检查点**:
  - 关键状态：响应式集成测试完成
  - 结果日志：所有断点测试通过
  - 技能调用：`playwright` ✓

### Task 57: 暗色模式集成测试
- [ ] **步骤 57.1**: 调用 `playwright` 测试暗色模式
- [ ] **步骤 57.2**: 测试所有页面暗色模式
- [ ] **步骤 57.3**: 修复暗色模式问题
- [ ] **检查点**:
  - 关键状态：暗色模式集成测试完成
  - 结果日志：暗色模式测试通过
  - 技能调用：`playwright` ✓

### Task 58: 可访问性测试
- [ ] **步骤 58.1**: 调用 axe-core 运行可访问性测试
- [ ] **步骤 58.2**: 检查 WCAG AA 合规
- [ ] **步骤 58.3**: 修复可访问性问题
- [ ] **检查点**:
  - 关键状态：可访问性测试完成
  - 结果日志：WCAG AA 合规，无问题
  - 技能调用：`systematic-debugging` ✓

---

## 阶段 9: 验证完成 (Task 59-61)

**注意**: 本阶段使用 `verification-before-completion` 技能进行最终验收

**技能调用:** `verification-before-completion` ✓

### Task 59: 功能验收
- [ ] **步骤 59.1**: 调用 `verification-before-completion` 进行功能验收
- [ ] **步骤 59.2**: 检查所有功能验收标准
- [ ] **步骤 59.3**: 记录验收结果
- [ ] **检查点**:
  - 关键状态：功能验收完成
  - 结果日志：功能验收通过
  - 技能调用：`verification-before-completion` ✓

### Task 60: SEO 验收
- [ ] **步骤 60.1**: 调用 `verification-before-completion` 进行 SEO 验收
- [ ] **步骤 60.2**: 检查所有 SEO 验收标准
- [ ] **步骤 60.3**: 记录验收结果
- [ ] **检查点**:
  - 关键状态：SEO 验收完成
  - 结果日志：SEO 验收通过
  - 技能调用：`verification-before-completion` ✓

### Task 61: 性能验收
- [ ] **步骤 61.1**: 调用 `verification-before-completion` 进行性能验收
- [ ] **步骤 61.2**: 检查所有性能验收标准
- [ ] **步骤 61.3**: 记录验收结果
- [ ] **检查点**:
  - 关键状态：性能验收完成
  - 结果日志：性能验收通过
  - 技能调用：`verification-before-completion` ✓

---

## 阶段 10: 完成分支 (Task 62)

**注意**: 本阶段使用 `finishing-a-development-branch` 技能完成开发分支

**技能调用:** `finishing-a-development-branch` ✓

### Task 62: 完成开发分支
- [ ] **步骤 62.1**: 调用 `finishing-a-development-branch` 技能
- [ ] **步骤 62.2**: 运行最终测试
- [ ] **步骤 62.3**: 清理工作树
- [ ] **步骤 62.4**: 准备合并到主分支
- [ ] **检查点**:
  - 关键状态：开发分支完成
  - 结果日志：所有测试通过，准备合并
  - 技能调用：`finishing-a-development-branch` ✓

---

## 阶段 11: 新增品牌流程 (Task 63+)

**注意**: 本阶段使用 `executing-plans` 技能执行新增品牌流程

**技能调用:** `executing-plans` ✓

### Task 63: 新增品牌子目录网站
- [ ] **步骤 63.1**: 准备新品牌 JSON 数据
- [ ] **步骤 63.2**: 复制模板
- [ ] **步骤 63.3**: 填充 JSON 数据
- [ ] **步骤 63.4**: 运行页面生成脚本
- [ ] **步骤 63.5**: 验证新品牌网站
- [ ] **检查点**:
  - 关键状态：新品牌网站生成完成
  - 结果日志：品牌网站已生成，测试通过
  - 技能调用：`executing-plans` ✓

---

## TODO 进度追踪

| 阶段 | 总任务数 | 已完成 | 进行中 | 待开始 | 完成率 | 主要技能 |
|------|----------|--------|--------|--------|--------|----------|
| 1. 准备工作 | 3 | 0 | 0 | 3 | 0% | `using-git-worktrees` |
| 2. CSS 基础架构 | 4 | 0 | 0 | 4 | 0% | `executing-plans` |
| 3. 组件开发 | 22 | 0 | 0 | 22 | 0% | `subagent-driven-development` |
| 4. 页面模板开发 | 13 | 0 | 0 | 13 | 0% | `subagent-driven-development` |
| 5. SVG 资源生成 | 3 | 0 | 0 | 3 | 0% | `subagent-driven-development` |
| 6. JSON 数据准备 | 4 | 0 | 0 | 4 | 0% | `executing-plans` |
| 7. 页面生成脚本 | 2 | 0 | 0 | 2 | 0% | `executing-plans` |
| 8. 集成测试 | 7 | 0 | 0 | 7 | 0% | `systematic-debugging`, `playwright` |
| 9. 验证完成 | 3 | 0 | 0 | 3 | 0% | `verification-before-completion` |
| 10. 完成分支 | 1 | 0 | 0 | 1 | 0% | `finishing-a-development-branch` |
| 11. 新增品牌 | 1+ | 0 | 0 | 1+ | 0% | `executing-plans` |
| **总计** | **63** | **0** | **0** | **63** | **0%** | - |

---

## 技能调用统计

| 技能 | 调用次数 | 用途 | 调用位置 |
|------|----------|------|----------|
| using-git-worktrees | 1 | 创建 Git 工作树 | Task 1 |
| executing-plans | 15+ | 执行开发任务 | Task 2, 5, 7, 46-51, 63+ |
| subagent-driven-development | 40+ | 子代理开发组件、模板、SVG | Task 8-45 |
| dispatching-parallel-agents | 5+ | 并行开发独立任务 | Task 8-29(并行), Task 43-45(并行) |
| requesting-code-review | 60+ | 每个单元模块完成后请求审查 | 所有 Task |
| receiving-code-review | 60+ | 接收审查反馈（与 requesting-code-review 配对使用） | 所有 Task |
| systematic-debugging | 20+ | 功能测试 | Task 6, 15, 22, 36, 50, 52, 54, 56, 58 |
| playwright | 30+ | 截图测试 | Task 8, 10, 14, 27, 28, 30, 32, 33, 52-57 |
| verification-before-completion | 3 | 完成前验证 | Task 59-61 |
| finishing-a-development-branch | 1 | 完成开发分支 | Task 62 |

**注意:** 
- `requesting-code-review` 和 `receiving-code-review` 必须配对使用，每个单元模块完成后都要调用这两个技能
- `subagent-driven-development` 用于组件开发（Task 8-29）、页面模板开发（Task 30-42）、SVG 资源生成（Task 43-45）
- `dispatching-parallel-agents` 用于并行开发独立任务，如同时开发多个组件或生成多个 SVG 图标

---

## 文档版本

| 版本 | 日期 | 修改内容 | 作者 |
|------|------|----------|------|
| v1.0 | 2026-03-23 | 初始版本 - 完整 TODO 清单（63 个任务） | TODO Writer |
| v1.1 | 2026-03-23 | 修复审查测试技能调用：添加审查测试规则补充说明，确保每个单元模块都调用 requesting-code-review 和 receiving-code-review 技能，更新技能调用统计说明 | TODO Writer |
| v1.2 | 2026-03-23 | 集成 Superpowers 技能：添加 Superpowers 技能集成说明表，每个阶段添加技能调用标注，更新 TODO 进度追踪表添加主要技能列，更新技能调用统计表添加调用位置列 | TODO Writer |

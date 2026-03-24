# 本地测试说明

## 问题：无法访问 http://localhost:8080

### 原因
Python 或未安装 http-server 模块。

---

## 解决方案

### 方案 1: 直接打开 HTML 文件（推荐）

**最简单的方法** - 直接双击打开 HTML 文件：

1. 打开文件资源管理器
2. 导航到：`C:\Users\lenovo\Desktop\web20260323\`
3. 双击 `index.html` 文件
4. 浏览器会自动打开网站

**测试页面路径:**
- 首页：`C:\Users\lenovo\Desktop\web20260323\index.html`
- 产品分类：`C:\Users\lenovo\Desktop\web20260323\products\index.html`
- IGBT 分类：`C:\Users\lenovo\Desktop\web20260323\products\igbt\index.html`
- 产品详情：`C:\Users\lenovo\Desktop\web20260323\products\igbt\FF300R12ME4.html`
- 解决方案：`C:\Users\lenovo\Desktop\web20260323\solutions\index.html`
- 技术支持：`C:\Users\lenovo\Desktop\web20260323\support\index.html`
- 新闻：`C:\Users\lenovo\Desktop\web20260323\news\index.html`
- 关于我们：`C:\Users\lenovo\Desktop\web20260323\about\index.html`
- 联系我们：`C:\Users\lenovo\Desktop\web20260323\about\contact.html`

---

### 方案 2: 使用 Node.js http-server

如果要用 HTTP 服务器测试，需要先安装 http-server：

```bash
# 安装 http-server（全局）
npm install -g http-server

# 启动服务器
cd C:\Users\lenovo\Desktop\web20260323
http-server -p 8080

# 访问网站
# 浏览器打开：http://localhost:8080/
```

---

### 方案 3: 使用 VS Code Live Server

如果使用 VS Code 编辑器：

1. 安装 Live Server 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

---

## 文件验证结果

✅ **首页文件验证通过:**
- 文件大小：12524 bytes
- 包含 DOCTYPE: ✅
- 包含闭合标签：✅
- 包含 CSS 链接：✅
- 包含 JS 脚本：✅

---

## 测试清单

请在浏览器中打开后测试以下内容：

### 基础测试
- [ ] 页面能正常加载
- [ ] 样式显示正常（蓝色主题、卡片阴影等）
- [ ] 导航栏显示在顶部
- [ ] 能看到"力通电子"Logo

### 功能测试
- [ ] 点击导航链接能跳转
- [ ] 移动端菜单按钮（小屏幕时显示）
- [ ] 页面滚动正常
- [ ] 所有图片/图标显示正常

### 响应式测试
- [ ] 调整浏览器窗口大小
- [ ] 移动端布局正常（窗口宽度<768px 时）

---

## 常见问题

### Q: 样式不显示？
A: 检查是否所有 CSS 文件都在 `assets/css/` 目录中

### Q: 图片不显示？
A: contact.png 在工作区根目录，其他 SVG 在 `assets/svg/` 目录

### Q: JavaScript 错误？
A: 按 F12 打开开发者工具查看控制台错误

---

## 联系

如有问题，请查看：
- 开发者工具控制台 (F12)
- TEST_REPORT.md - 完整测试报告
- LOCAL_TEST.md - 本地测试清单

# EdgeOne Pages GitHub 自动部署指南

## 📋 部署流程概览

```
GitHub 仓库 → GitHub Actions → EdgeOne Pages → 全球 CDN 分发
```

---

## 步骤 1：推送代码到 GitHub

### 1.1 初始化 Git 仓库（如未初始化）
```bash
cd C:\Users\lenovo\Desktop\web20260323

# 初始化仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Infineon agent website"

# 关联远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/infineon-agent-website.git
```

### 1.2 推送到 GitHub
```bash
# 推送到 main 分支
git branch -M main
git push -u origin main
```

---

## 步骤 2：配置 EdgeOne API Token

### 2.1 获取 EdgeOne API Token
1. 访问 [腾讯云 EdgeOne 控制台](https://console.tencentcloud.com/edgeone)
2. 登录您的账号
3. 点击头像 → **个人设置**
4. 进入 **API 密钥** 标签页
5. 点击 **创建密钥**
6. 复制 API Token（格式类似：`AKIDxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`）

⚠️ **重要**：API Token 只显示一次，请妥善保存！

### 2.2 配置 GitHub Secrets
1. 打开您的 GitHub 仓库页面
2. 点击 **Settings** 标签页
3. 左侧菜单选择 **Secrets and variables > Actions**
4. 点击 **New repository secret** 按钮
5. 填写：
   - **Name**: `EDGEONE_API_TOKEN`
   - **Value**: 您复制的 API Token
6. 点击 **Add secret** 保存

---

## 步骤 3：自动部署

### 3.1 触发自动部署
推送代码到 `main` 分支时，GitHub Actions 会自动触发部署：

```bash
# 后续更新代码后
git add .
git commit -m "Update: 添加新产品页面"
git push
```

### 3.2 查看部署状态
1. 打开 GitHub 仓库页面
2. 点击 **Actions** 标签页
3. 查看 **Build and Deploy to EdgeOne Pages** 工作流
4. 点击运行记录查看详细日志

### 3.3 获取部署 URL
部署成功后，Actions 日志会输出：
```
✅ Deployed to EdgeOne Pages
🔗 URL: https://infineon-agent-website.edgeone.app
```

---

## 步骤 4：绑定自定义域名

### 4.1 在 EdgeOne 控制台绑定域名
1. 访问 [EdgeOne 控制台](https://console.tencentcloud.com/edgeone)
2. 找到您的站点 `infineon-agent-website`
3. 进入 **域名管理**
4. 点击 **添加域名**
5. 输入您的域名：`www.infineon-elec.com`
6. 保存

### 4.2 配置 DNS
在您的域名注册商处添加 CNAME 记录：

| 主机记录 | 记录类型 | 记录值 |
|----------|----------|--------|
| www | CNAME | infineon-agent-website.edgeone.app |

### 4.3 启用 HTTPS
1. 在 EdgeOne 控制台进入 **SSL 证书**
2. 选择 **免费证书**
3. 申请并启用 HTTPS

---

## 部署配置说明

### GitHub Actions 工作流配置
文件位置：`.github/workflows/deploy.yml`

```yaml
name: Build and Deploy to EdgeOne Pages

on:
  push:
    branches:
      - main      # 推送到 main 分支时触发
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Deploy to EdgeOne Pages
        run: |
          npx edgeone pages deploy . -n infineon-agent-website -t ${{ secrets.EDGEONE_API_TOKEN }}
```

### 部署参数说明
| 参数 | 说明 | 当前值 |
|------|------|--------|
| `.` | 部署目录（当前目录） | 项目根目录 |
| `-n` | EdgeOne 项目名称 | `infineon-agent-website` |
| `-t` | API Token | 从 Secrets 读取 |

---

## 常见问题

### Q1: 部署失败怎么办？
**检查项**：
1. GitHub Secrets 中的 API Token 是否正确
2. EdgeOne 账户是否有 Pages 服务权限
3. 查看 GitHub Actions 日志获取详细错误信息

### Q2: 如何手动触发部署？
1. 进入 GitHub 仓库 **Actions** 标签页
2. 选择 **Build and Deploy to EdgeOne Pages**
3. 点击 **Run workflow** 按钮
4. 选择分支后运行

### Q3: 如何部署预览环境？
修改 `.github/workflows/deploy.yml`，添加 preview 环境部署：
```yaml
- name: Deploy to EdgeOne Pages (Preview)
  run: |
    npx edgeone pages deploy . -n infineon-agent-website -t ${{ secrets.EDGEONE_API_TOKEN }} -e preview
```

### Q4: 部署后如何更新？
只需推送新的代码到 GitHub：
```bash
git add .
git commit -m "更新内容"
git push
```
GitHub Actions 会自动重新部署。

---

## 快速命令参考

```bash
# 本地测试
python -m http.server 8080

# 推送代码
git add .
git commit -m "提交信息"
git push

# 查看部署状态
# GitHub → Actions → 查看运行记录
```

---

## 相关链接

- [EdgeOne 控制台](https://console.tencentcloud.com/edgeone)
- [EdgeOne Pages 文档](https://cloud.tencent.com/document/product/1552)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [EdgeOne GitHub 集成指南](https://cloud.tencent.com/document/product/1552/127398)

---

## 部署检查清单

- [ ] 代码已推送到 GitHub
- [ ] EdgeOne API Token 已获取
- [ ] GitHub Secret `EDGEONE_API_TOKEN` 已配置
- [ ] `.github/workflows/deploy.yml` 已创建
- [ ] GitHub Actions 已触发部署
- [ ] 部署成功，获取到 EdgeOne URL
- [ ] 自定义域名已绑定（如需要）
- [ ] HTTPS 已启用（如需要）

---

**部署完成后，您的网站将通过 EdgeOne 全球 CDN 加速访问！** 🚀

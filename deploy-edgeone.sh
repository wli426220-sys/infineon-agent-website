#!/bin/bash
# Edge One 部署脚本
# 使用方法：./deploy-edgeone.sh

set -e

# 配置
SITE_NAME="infineon-agent-website"
DOMAIN="www.infineon-elec.com"
BUILD_DIR="."
EDGEONE_CONFIG="edgeone.json"

echo "======================================"
echo "Edge One 部署脚本"
echo "======================================"
echo ""

# 检查 Edge One CLI 是否安装
if ! command -v edgeone &> /dev/null; then
    echo "❌ Edge One CLI 未安装"
    echo "请运行：npm install -g @edgeone/cli"
    exit 1
fi

echo "✅ Edge One CLI 已安装"

# 检查是否已登录
if ! edgeone whoami &> /dev/null; then
    echo "⚠️  未登录 Edge One"
    echo "请运行：edgeone login"
    exit 1
fi

echo "✅ 已登录 Edge One"
echo ""

# 创建站点
echo "📦 创建站点：$SITE_NAME"
edgeone sites create --name "$SITE_NAME" --description "英飞凌代理网站"

# 获取站点 ID
SITE_ID=$(edgeone sites list --name "$SITE_NAME" --json | jq -r '.[0].id')
echo "✅ 站点 ID: $SITE_ID"
echo ""

# 部署文件
echo "🚀 部署文件..."
edgeone deploy --site-id "$SITE_ID" --dir "$BUILD_DIR"

echo "✅ 文件部署完成"
echo ""

# 绑定域名
echo "🔗 绑定域名：$DOMAIN"
edgeone domains add --site-id "$SITE_ID" --domain "$DOMAIN"

echo "✅ 域名绑定完成"
echo ""

# 启用 HTTPS
echo "🔒 启用 HTTPS"
edgeone ssl enable --site-id "$SITE_ID"

echo "✅ HTTPS 已启用"
echo ""

# 输出 DNS 配置
echo "======================================"
echo "DNS 配置说明"
echo "======================================"
echo ""
echo "请在您的域名注册商处添加以下 DNS 记录："
echo ""
echo "类型：CNAME"
echo "主机记录：www"
echo "记录值：edgeone.app"
echo ""
echo "或者等待 Edge One 自动配置 DNS"
echo ""
echo "======================================"
echo "部署完成！"
echo "======================================"
echo ""
echo "网站地址：https://$DOMAIN"
echo "Edge One 控制台：https://edgeone.ai/console/sites/$SITE_ID"

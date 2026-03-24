#!/usr/bin/env node
/**
 * 页面生成脚本
 * 根据 JSON 数据和模板批量生成 HTML 页面
 * 
 * 使用方法:
 * node scripts/generate-pages.js --brand infineon
 */

const fs = require('fs');
const path = require('path');

// 配置 - 从命令行参数获取品牌名
const BRAND = process.argv[2] || 'infineon';
const DATA_DIR = path.join(__dirname, '..', 'data', BRAND);
const OUTPUT_DIR = path.join(__dirname, '..');

console.log(`\n🚀 开始生成 ${BRAND} 品牌页面...\n`);

// 读取 JSON 数据
function readJSON(filename) {
  const filepath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.warn(`⚠️  文件不存在：${filepath}`);
    return null;
  }
  const content = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(content);
}

// 生成产品详情页
function generateProductPages(productsData) {
  if (!productsData) return;
  
  console.log('📦 生成产品详情页...');
  
  Object.keys(productsData.categories || {}).forEach(category => {
    const categoryData = productsData.categories[category];
    const categoryDir = path.join(OUTPUT_DIR, 'products', category);
    
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }
    
    (categoryData.products || []).forEach(product => {
      const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${product.description}">
  <meta name="keywords" content="${product.model},${category},英飞凌">
  <title>${product.model} | ${category.toUpperCase()} | 英飞凌代理</title>
  <link rel="stylesheet" href="../../style.css">
</head>
<body>
  <nav class="navbar">
    <div class="navbar-container">
      <a href="/" class="navbar-brand">
        <span style="font-weight: 600; color: #333;">力通电子</span>
      </a>
      <ul class="navbar-nav">
        <li><a href="/" class="nav-link">首页</a></li>
        <li><a href="/products/" class="nav-link">产品中心</a></li>
        <li><a href="/about/contact.html" class="nav-link">联系我们</a></li>
      </ul>
    </div>
  </nav>

  <main class="main-content">
    <div class="container">
      <nav class="breadcrumb">
        <a href="/">首页</a> / 
        <a href="/products/">产品</a> / 
        <a href="/products/${category}/">${category.toUpperCase()}</a> / 
        <span>${product.model}</span>
      </nav>

      <section class="product-detail-hero">
        <div class="product-image-gallery">
          <div class="product-main-image">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <rect x="40" y="60" width="120" height="80" rx="8" fill="#e0e0e0"/>
              <text x="100" y="105" text-anchor="middle" fill="#666" font-size="14">${product.model}</text>
            </svg>
          </div>
        </div>
        <div class="product-info-panel">
          <h1 class="product-model-title">${product.model}</h1>
          <div class="product-stock-row">
            <span class="stock-badge ${product.stock}">${product.stock === 'in_stock' ? '有货' : '询价'}</span>
            <span style="color: #666;">${product.series}</span>
          </div>
          <p class="product-description">${product.description}</p>
          <div class="product-cta-group">
            <a href="/about/contact.html" class="btn btn-cta">获取报价</a>
            <a href="${product.datasheet || '#'}" class="btn btn-outline">下载数据手册</a>
          </div>
        </div>
      </section>

      <div class="tab-container">
        <div class="tab-list">
          <button class="tab-button active">规格参数</button>
        </div>
        <div class="tab-panel active">
          <table class="spec-table">
            ${Object.entries(product.parameters || {}).map(([key, value]) => `
            <tr>
              <td>${key}</td>
              <td><strong>${value}</strong></td>
            </tr>
            `).join('')}
          </table>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-bottom">
        <span>© 2026 力通电子 版权所有</span>
        <span>QQ: 1145711755</span>
      </div>
    </div>
  </footer>
</body>
</html>
      `;
      
      const filepath = path.join(categoryDir, `${product.model}.html`);
      fs.writeFileSync(filepath, html.trim());
      console.log(`  ✅ ${product.model}.html`);
    });
  });
}

// 生成解决方案详情页
function generateSolutionPages(solutionsData) {
  if (!solutionsData) return;
  
  console.log('\n💡 生成解决方案详情页...');
  
  (solutionsData.solutions || []).forEach(solution => {
    const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${solution.summary}">
  <title>${solution.title} | 解决方案 | 力通电子</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <nav class="navbar">
    <div class="navbar-container">
      <a href="/" class="navbar-brand">
        <span style="font-weight: 600; color: #333;">力通电子</span>
      </a>
      <ul class="navbar-nav">
        <li><a href="/" class="nav-link">首页</a></li>
        <li><a href="/solutions/" class="nav-link">解决方案</a></li>
      </ul>
    </div>
  </nav>

  <main class="main-content">
    <section class="page-header">
      <div class="page-header-content">
        <h1 class="page-header-title">${solution.title}</h1>
        <span class="page-header-badge">${solution.industry}</span>
      </div>
    </section>

    <div class="container">
      <article class="article-content" style="max-width: 800px;">
        <p>${solution.summary}</p>
        <h2>核心优势</h2>
        <ul>
          ${solution.advantages.map(adv => `<li>${adv}</li>`).join('')}
        </ul>
        ${solution.bomList && solution.bomList.length > 0 ? `
        <h2>推荐物料清单</h2>
        <table class="bom-table">
          <thead>
            <tr><th>型号</th><th>描述</th><th>数量</th></tr>
          </thead>
          <tbody>
            ${solution.bomList.map(item => `
            <tr>
              <td>${item.part}</td>
              <td>${item.description}</td>
              <td>${item.quantity}</td>
            </tr>
            `).join('')}
          </tbody>
        </table>
        ` : ''}
      </article>
    </div>
  </main>

  <footer class="footer">
    <div class="footer-bottom">
      <span>© 2026 力通电子 版权所有</span>
    </div>
  </footer>
</body>
</html>
    `;
    
    const filepath = path.join(OUTPUT_DIR, 'solutions', `${solution.id}.html`);
    fs.writeFileSync(filepath, html.trim());
    console.log(`  ✅ ${solution.id}.html`);
  });
}

// 主函数
function main() {
  console.log(`📂 数据目录：${DATA_DIR}\n`);
  
  // 读取数据
  const productsData = readJSON('products.json');
  const solutionsData = readJSON('solutions.json');
  const supportData = readJSON('support.json');
  const newsData = readJSON('news.json');
  
  // 生成页面
  generateProductPages(productsData);
  generateSolutionPages(solutionsData);
  
  console.log('\n✅ 页面生成完成！\n');
}

// 运行
main();

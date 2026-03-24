#!/usr/bin/env node
/**
 * 网站地图生成脚本
 * 扫描所有 HTML 文件生成 sitemap.xml
 * 
 * 使用方法:
 * node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.infineon-elec.com';
const OUTPUT_DIR = path.join(__dirname, '..');

console.log('\n🗺️  开始生成网站地图...\n');

// 扫描 HTML 文件
function scanHTMLFiles(dir, urls = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    
    if (stat.isDirectory()) {
      scanHTMLFiles(filepath, urls);
    } else if (file.endsWith('.html')) {
      // 生成相对路径
      const relativePath = path.relative(OUTPUT_DIR, filepath).replace(/\\/g, '/');
      const urlPath = relativePath === 'index.html' ? '/' : '/' + relativePath.replace(/index\.html$/, '').replace(/\.html$/, '.html');
      
      urls.push({
        loc: BASE_URL + urlPath,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: getPriority(urlPath)
      });
      
      console.log(`  ✅ ${urlPath}`);
    }
  });
  
  return urls;
}

// 根据路径获取优先级
function getPriority(urlPath) {
  if (urlPath === '/') return '1.0';
  if (urlPath.includes('/products/')) return '0.8';
  if (urlPath.includes('/solutions/')) return '0.7';
  if (urlPath.includes('/support/')) return '0.6';
  if (urlPath.includes('/news/')) return '0.5';
  if (urlPath.includes('/about/')) return '0.6';
  return '0.5';
}

// 生成 sitemap.xml
function generateSitemap() {
  const urls = scanHTMLFiles(OUTPUT_DIR);
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  const filepath = path.join(OUTPUT_DIR, 'sitemap.xml');
  fs.writeFileSync(filepath, xml);
  
  console.log(`\n✅ 网站地图已生成：${filepath}`);
  console.log(`📊 共 ${urls.length} 个 URL\n`);
}

// 运行
generateSitemap();

const fs = require('fs');
const path = require('path');
const root = __dirname;
const decode = (s) => s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const plain = (s) => decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const urls = (type) => [...fs.readFileSync(path.join(root, `${type}-sitemap.xml`), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => decode(m[1]));
const wait = (ms) => new Promise(r => setTimeout(r, ms));
async function run() {
  const results = { checkedAt: '2026-11-12', source: 'Public product and category sitemaps of marketfolie.pl', categories: [], products: [], errors: [] };
  const jobs = [...urls('categories').map(url => ({ url, type: 'categories' })), ...urls('products').map(url => ({ url, type: 'products' }))];
  for (const [i, job] of jobs.entries()) {
    const started = Date.now();
    try {
      const response = await fetch(job.url, { signal: AbortSignal.timeout(20000) });
      const html = await response.text();
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const title = plain(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '');
      const canonical = decode(html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)?.[1] || response.url);
      const breadcrumbs = plain(html.match(/<div class="breadcrumbs row">([\s\S]*?)<div[^>]*id="(?:main|box)/)?.[1] || '').slice(0, 1000);
      const tables = [...html.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)].map(m => [...m[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map(row => [...row[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(cell => plain(cell[1]))));
      const descStart = html.indexOf('id="box_description"');
      const descEnd = html.indexOf('id="box_productcomments"', descStart);
      const description = descStart < 0 ? '' : plain(html.slice(descStart, descEnd < 0 ? descStart + 60000 : descEnd)).slice(0, 14000);
      const productIds = [...new Set([...html.matchAll(/data-product-id="(\d+)"/g)].map(m => m[1]))];
      const categoryNames = [...new Set([...html.matchAll(/data-category="([^"]+)"/g)].map(m => decode(m[1])))];
      const pdfs = [...new Set([...html.matchAll(/href="([^"]+\.pdf(?:\?[^"]*)?)"/gi)].map(m => new URL(decode(m[1]), response.url).href))];
      results[job.type].push({ url: job.url, canonical, title, breadcrumbs, tables, description, productIds, categoryNames, pdfs });
    } catch (e) { results.errors.push({ url: job.url, error: e.message }); }
    fs.writeFileSync(path.join(root, 'catalog-audit.json'), JSON.stringify(results, null, 2));
    if ((i + 1) % 20 === 0 || i === jobs.length - 1) console.log(`Read ${i + 1}/${jobs.length}; products ${results.products.length}; categories ${results.categories.length}; errors ${results.errors.length}`);
    await wait(Math.max(0, 1100 - (Date.now() - started)));
  }
}
run().catch(e => { console.error(e.message); process.exitCode = 1; });

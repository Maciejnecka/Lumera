const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const siteUrl = 'https://folielumera.pl';

const staticPages = [
  { path: '/', priority: '1.0' },
  { path: '/montaz-folii-okiennych-krakow', priority: '0.9' },
  { path: '/montaz-folii-okiennych-katowice', priority: '0.85' },
  { path: '/montaz-folii-lcd', priority: '0.82' },
  { path: '/cennik', priority: '0.84' },
  { path: '/folie-okienne-lokalnie', priority: '0.82' },
  { path: '/polityka-prywatnosci', priority: '0.3', changefreq: 'yearly' },
];

const dataSources = [
  {
    file: 'src/data/filmsData.js',
    priority: (pagePath) =>
      pagePath === '/okleiny-i-laminaty-architektoniczne' ? '0.78' : '0.75',
  },
  {
    file: 'src/data/problemPagesData.js',
    priority: '0.76',
  },
  {
    file: 'src/data/localServicePagesData.js',
    priority: (pagePath) =>
      pagePath.includes('lcd') || pagePath.includes('przeciwsloneczne') ? '0.8' : '0.74',
  },
];

const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const extractPaths = (file) => {
  const fullPath = path.join(rootDir, file);
  const source = fs.readFileSync(fullPath, 'utf8');
  const matches = [...source.matchAll(/path:\s*'([^']+)'/g)];

  return matches.map((match) => match[1]);
};

const addPage = (pages, page) => {
  if (!page.path || pages.has(page.path)) return;

  pages.set(page.path, {
    changefreq: 'monthly',
    ...page,
  });
};

const pages = new Map();

staticPages.forEach((page) => addPage(pages, { changefreq: 'monthly', ...page }));

dataSources.forEach((source) => {
  extractPaths(source.file).forEach((pagePath) => {
    addPage(pages, {
      path: pagePath,
      priority:
        typeof source.priority === 'function' ? source.priority(pagePath) : source.priority,
    });
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...pages.values()]
  .map(
    (page) => `  <url>
    <loc>${escapeXml(`${siteUrl}${page.path === '/' ? '/' : page.path}`)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(rootDir, 'public/sitemap.xml'), xml, 'utf8');

console.log(`Generated sitemap with ${pages.size} URLs.`);

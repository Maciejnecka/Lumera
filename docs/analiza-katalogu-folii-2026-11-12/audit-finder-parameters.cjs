const fs = require('node:fs');
const path = require('node:path');
const previous = require('./catalog-audit.json').products;
const selections = {
  'Perfecta': '/89', 'Perfecta Duo Premium': '/312',
  'Silver 20 Comfort': 'folia-przeciwsloneczna-zewnetrzna-Silver-20-Comfort',
  'Silver 40 Comfort': '/83', 'Silver 50 Comfort': '/301',
  'Silver 20 Duo Premium': '/82', 'Silver 40 Duo Premium': '/226',
  'Neutral 25': '/84', 'Neutral 40': '/85',
  'Invisible Comfort': '/78', 'Invisible Premium': '/79',
  'White Matte': '/109', 'Folia mrożona do plotera i druku': '/295', 'Folia szroniona kanalikowa': '/296',
  'Folia na szyby balkonowe': 'folia-na-szyby-balkonowe',
  'Polycarbon Silver': '/157', 'Polycarbon Silver Duo': '/158', 'Polycarbon White': '/159',
  'Anty UV Clear': '/224', 'Anty UV Clear Premium': '/281', 'Anty UV Total': '/282', 'Anty UV Amber': '/225',
  'Secur Out 3B3': '/152', 'HACCP 3B3': '/149', 'HACCP Matte 3B3': '/150', 'HACCP 2B2': '/304',
  'P1 wewnętrzna': '/153', 'P2 wewnętrzna': '/155', 'P1 zewnętrzna': '/238',
  'Clear Protect 3 mies.': '/249', 'Ochronna przeciw zarysowaniom': '/252',
  'Eco-Termic': '/229', 'LCD z klejem': '/228',
  'Projekcyjna Grey': '/95', 'Projekcyjna Trans': '/97', 'Projekcyjna Dual': '/99', 'Projekcyjna V-White': '/100',
};
const plain = s => s.replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/&#(\d+);/g, (_,n) => String.fromCodePoint(+n)).replace(/\s+/g, ' ').trim();
const result = { checkedAt: '2026-11-13', products: [], errors: [] };
const jobs = Object.entries(selections);
async function worker() {
  while (jobs.length) {
    const [name, suffix] = jobs.shift();
    const product = previous.find(p => p.url.endsWith(suffix));
    try {
      if (!product) throw Error('Missing source URL');
      const response = await fetch(product.url, {signal: AbortSignal.timeout(25000)});
      if (!response.ok) throw Error(`HTTP ${response.status}`);
      const html = await response.text();
      const facts = Object.fromEntries([...html.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)].flatMap(t => [...t[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map(r => [...r[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(c => plain(c[1])))).filter(r => r.length === 2 && r[0] && r[1]));
      if (!Object.keys(facts).length) throw Error('Missing parameter table');
      result.products.push({name, url:product.url, facts});
    } catch(e) {result.errors.push({name,url:product?.url,error:e.message});}
  }
}
Promise.all([worker(),worker(),worker(),worker()]).then(() => {
  result.products.sort((a,b)=>a.name.localeCompare(b.name));
  fs.writeFileSync(path.join(__dirname,'finder-parameters-2026-11-13.json'),JSON.stringify(result,null,2));
  console.log(JSON.stringify({checked:result.products.length, errors:result.errors}));
  if(result.errors.length) process.exitCode=1;
});

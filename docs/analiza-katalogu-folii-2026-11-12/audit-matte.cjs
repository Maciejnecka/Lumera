const fs = require('node:fs');
const path = require('node:path');
const previous = require('./catalog-audit.json').products;
const mapping = {109:'White Matte',111:'Silver Matte',112:'Grey Matte',113:'Bronze Matte',114:'Yellow Matte',115:'Red Matte',116:'Green Matte'};
const plain = s => s.replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const result = {checkedAt:'2026-11-15',products:[],errors:[]};
const jobs = Object.entries(mapping);
async function worker() { while(jobs.length) { const [id,name] = jobs.shift();const product = previous.find(p=>p.url.endsWith('/'+id));try {if(!product)throw Error('No source');const response=await fetch(product.url,{signal:AbortSignal.timeout(25000)});if(!response.ok)throw Error('HTTP '+response.status);const html=await response.text();const facts=Object.fromEntries([...html.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)].flatMap(t=>[...t[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map(r=>[...r[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(c=>plain(c[1])))).filter(r=>r.length===2&&r[0]&&r[1]));if(!Object.keys(facts).length)throw Error('No facts');result.products.push({id,name,url:product.url,facts});}catch(e){result.errors.push({id,name,error:e.message});}}}
Promise.all([worker(),worker(),worker(),worker()]).then(()=>{result.products.sort((a,b)=>+a.id-+b.id);fs.writeFileSync(path.join(__dirname,'matte-parameters-2026-11-15.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));if(result.errors.length)process.exitCode=1;});

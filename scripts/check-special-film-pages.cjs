const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const source = fs.readFileSync('src/data/specialFilmPagesData.js', 'utf8');
const data = vm.runInNewContext(`${source.replace('export const', 'const')}\nspecialFilmPagesData;`);
const finderSource = fs.readFileSync('src/data/filmFinderData.js', 'utf8').replace(/\bexport\s+/g, '');
const finder = vm.runInNewContext(`${finderSource}\nfinderSolutions;`);
const slugs = { thermal: 'folie-termoizolacyjne', 'anti-collision': 'folie-antykolizyjne', 'anti-uv': 'folie-anty-uv', 'anti-eavesdropping': 'folie-anty-podsluchowe' };
const llms = fs.readFileSync('public/llms-full.txt', 'utf8');
for (const [id, page] of Object.entries(data)) {
  const html = fs.readFileSync(`.next/server/pages/${slugs[id]}.html`, 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, id);
  assert(html.includes(`https://folielumera.pl/${slugs[id]}`), `${id}: canonical`);
  assert(html.includes(`/kontakt?temat=${id}`), `${id}: contact topic`);
  assert(html.includes('<table>'), `${id}: comparison`);
  assert(!/<h3[^>]*>\s*<\/h3>/.test(html), `${id}: empty card`);
  assert(!html.includes('do 80%'), `${id}: unsupported claim`);
  assert(!/href="https?:\/\/(?:www\.)?marketfolie\.pl/.test(html), `${id}: supplier link`);
  for (const anchor of ['zastosowanie', 'porownanie', 'pytania', 'wycena']) assert(html.includes(`id="${anchor}"`));
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((match) => {
    const parsed = JSON.parse(match[1]);
    return Array.isArray(parsed) ? parsed : parsed['@graph'] || [parsed];
  });
  assert(schemas.some((item) => item['@type'] === 'Service'), `${id}: service schema`);
  const faq = schemas.find((item) => item['@type'] === 'FAQPage');
  assert.equal(faq.mainEntity.length, page.faq.length);
  for (const item of page.faq) assert(faq.mainEntity.some((q) => q.name === item.question && q.acceptedAnswer.text === item.answer));
  for (const [title, text] of page.choiceCards) {
    assert(html.includes(title) && html.includes(text), `${id}: visible decision card`);
    assert(llms.includes(title) && llms.includes(text), `${id}: exported decision card`);
  }
  console.log(`OK ${slugs[id]}: headings, table, contact, FAQ/schema and LLM export`);
}
for (const row of data['anti-uv'].tableRows) {
  const model = finder.flatMap((solution) => solution.variants || []).find((variant) => variant.name === row[0]);
  assert(model, row[0]);
  assert.equal(row[1], `${String(model.uv).replace('.', ',')}%`);
  assert.equal(row[2], `${model.light}%`);
}
const uv = data['anti-uv'];
const uvHtml = fs.readFileSync('.next/server/pages/folie-anty-uv.html', 'utf8');
for (const model of uv.spectrum.models) {
  const variant = finder.find((item) => item.id === 'uv').variants.find((item) => item.name === model.name);
  assert.equal(model.readings.length, uv.spectrum.wavelengths.length);
  model.readings.forEach(([low, high, text], index) => {
    assert(low >= 0 && high <= 100 && low <= high);
    assert.equal(variant[`transmission${uv.spectrum.wavelengths[index].nm}`], text);
    assert(uvHtml.includes(text), `${model.name}: SSR spectral reading`);
    assert(llms.includes(`Przepuszczanie przy ${uv.spectrum.wavelengths[index].nm} nm: ${text}`));
  });
}
assert(uvHtml.includes('Wybierz długość fali'));
assert(!llms.includes('#### undefined'));
console.log('OK UV parameters agree with the existing finder catalogue.');

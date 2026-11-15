const fs = require('fs');
const vm = require('vm');
const assert = require('node:assert/strict');
const data = fs.readFileSync('src/data/filmFinderData.js', 'utf8').replace(/\bexport\s+/g, '');
const rules = fs.readFileSync('src/lib/filmFinder.js', 'utf8').replace(/^import .*;\r?\n/gm, '').replace(/\bexport\s+/g, '');
const api = vm.runInNewContext(`${data}\n${rules}\n({ finderGoals, finderPriorities, finderSolutions, windowSurfaces, wrapSurfaces, sanitizeFinderAnswers, getFinderResult, finderShareHash, buildFinderMessage, getFinderVariant, getFinderTint, getFinderVariants, finderSurfaces, finderPrioritiesFor, finderConditions, finderStepComplete, finderResumeStep, finderContactTopic, isCustomFinder })`, { URLSearchParams });
const result = (changes) => api.getFinderResult({ goal: 'heat', surface: 'window', priority: 'balanced', glass: 'unknown', access: 'unknown', ...changes });

assert.equal(result({}).complete, true);
assert.equal(result({ priority: 'light' }).solutions[0].id, 'selective');
assert.equal(result({ priority: 'strong' }).solutions[0].id, 'solar-reflective');
assert(!result({ glass: 'triple', access: 'no' }).solutions.some(s => s.id === 'internal'));
assert(result({ glass: 'triple', access: 'no' }).notes.some(n => n.includes('Dostęp tylko od środka')));
assert.equal(result({ surface: 'roof' }).solutions.length, 0, 'Roof glazing must not receive a standard vertical-window product');
assert.equal(result({ surface: 'balcony' }).solutions.length, 0, 'Balustrade film must not be recommended to cool a room');
assert.equal(result({ surface: 'polycarbonate', priority: 'strong' }).solutions[0].id, 'polycarbonate');
assert.equal(result({ goal: 'privacy', priority: 'constant', surface: 'polycarbonate' }).solutions.length, 0);
assert.equal(result({ goal: 'privacy', priority: 'constant', surface: 'balcony' }).solutions[0].id, 'balcony');
assert.equal(result({ goal: 'privacy', priority: 'constant', surface: 'partition' }).solutions[0].id, 'matte');
assert.equal(result({ goal: 'privacy', priority: 'day', surface: 'window' }).solutions[0].id, 'mirror');
assert(result({ goal: 'privacy', priority: 'day' }).notes.some(n => n.includes('wieczorem')));
assert.equal(result({ goal: 'cold', priority: 'draft' }).solutions.length, 0);
assert.equal(result({ goal: 'cold', priority: 'comfort' }).solutions[0].id, 'lowe');
assert.equal(result({ goal: 'safety', priority: 'intrusion' }).solutions[0].id, 'intrusion');
assert.equal(result({ goal: 'special', priority: 'projection' }).solutions[0].id, 'projection');
const wrap = { goal: 'renovation', surface: 'furniture', priority: 'wood', condition: 'damaged' };
assert.equal(result(wrap).solutions[0].id, 'wrap');
assert(result(wrap).notes.some(n => n.includes('wykluczyć oklejenie')));
assert.equal(api.sanitizeFinderAnswers({ goal: 'renovation', surface: 'window', priority: 'strong' }).surface, '');
assert.equal(api.sanitizeFinderAnswers({ goal: 'heat', priority: 'wood' }).priority, '');
assert.equal(api.sanitizeFinderAnswers(null).goal, '');
assert.equal(api.getFinderResult({ goal: 'heat' }).complete, false);
const safe = api.sanitizeFinderAnswers({ goal: '<script>', surface: '__proto__', glass: 'anything' });
assert.equal(safe.goal, ''); assert.equal(safe.surface, ''); assert.equal(safe.glass, 'unknown');
const hash = api.finderShareHash(wrap);
const restored = api.sanitizeFinderAnswers(Object.fromEntries(new URLSearchParams(hash.slice(1))));
assert.equal(api.getFinderResult(restored).solutions[0].id, 'wrap');
const message = api.buildFinderMessage({ goal: 'heat', surface: 'window', priority: 'light' }, ['selective']);
assert(message.includes('Jasna folia selektywna')); assert(!message.includes('Umiarkowana folia refleksyjna'));
assert(api.buildFinderMessage(wrap).includes('Ciepły dekor drewna'));
assert(api.buildFinderMessage(wrap, []).includes('Proszę o indywidualną ocenę'));

const knownTopics = new Set([...fs.readFileSync('src/data/filmsData.js', 'utf8').matchAll(/id: '([^']+)'/g)].map(m => m[1]).concat('solar-films'));
api.finderSolutions.forEach(s => {
  assert(knownTopics.has(s.topic), `Unknown contact topic: ${s.topic}`);
  assert(s.path.startsWith('/'));
});
let combinations = 0;
for (const goal of api.finderGoals) for (const surface of api.finderSurfaces(goal.id)) for (const priority of api.finderPrioritiesFor(goal.id, surface.id)) for (const glass of ['unknown','single','double','triple']) for (const access of ['unknown','yes','no']) {
  const input = { goal: goal.id, surface: surface.id, priority: priority.id, glass, access, side:'unknown', otherGoal:'Nietypowy cel', otherSurface:'Nietypowa powierzchnia', otherPriority:'Nietypowy efekt' };
  const r = api.getFinderResult(input);
  assert(r.complete && r.title && r.checks.length);
  assert(r.solutions.length <= 3);
  assert(!r.solutions.some(s => !api.finderSolutions.some(x => x.id === s.id)));
  assert.equal(api.finderResumeStep(input,true),4);
  if (api.isCustomFinder(api.sanitizeFinderAnswers(input))) assert.equal(r.solutions.length,0,'Custom descriptions must not silently select a product');
  combinations++;
}
console.log(`PASS: routing, material boundaries, unknown inputs, wraps, share links, contact topics, and ${combinations} answer combinations.`);

const silver = api.finderSolutions.find(s => s.id === 'solar-reflective');
assert.equal(silver.variants.length, 5);
for (const [priority, name] of [['strong','Silver 20 Comfort'],['balanced','Silver 40 Comfort'],['light','Silver 50 Comfort']]) assert.equal(api.getFinderVariant(silver,{goal:'heat',priority},null).name,name);
assert.equal(new Set(silver.variants.map(v => api.getFinderTint(v.light).darkness)).size,5);
assert.equal(new Set(silver.variants.map(v => api.getFinderTint(v.light).reflection)).size,5);
assert(api.getFinderTint(16).darkness > api.getFinderTint(40).darkness && api.getFinderTint(40).darkness > api.getFinderTint(55).darkness);
const shadeAnswers = {goal:'heat', surface:'window', priority:'strong'};
const shades = {'solar-reflective':'Silver 50 Comfort'};
const shadeParams = new URLSearchParams(api.finderShareHash(shadeAnswers,'solar-reflective',shades).slice(1));
assert.equal(shadeParams.get('film'),'solar-reflective');
assert.equal(api.getFinderVariant(silver,shadeAnswers,shadeParams.get('shade-solar-reflective')).name,'Silver 50 Comfort');
assert.equal(api.getFinderVariant(silver,shadeAnswers,'wrong family').name,'Silver 20 Comfort');
assert(api.buildFinderMessage(shadeAnswers,['solar-reflective'],shades).includes('Silver 50 Comfort'));
assert(!api.finderShareHash(shadeAnswers,'nonexistent',{}).includes('film='));
console.log('PASS: three distinct tint levels, priority defaults, safe variant restoration, share links and quote summary.');

for (const surface of ['doors','furniture','counter','frames']) for (const side of ['inside','outside','unknown']) for (const decor of ['oak','walnut','concrete','marble','ivory','anthracite','steel','champagne']) {
  const family = ['oak','walnut'].includes(decor) ? 'wood' : ['concrete','marble'].includes(decor) ? 'stone' : ['ivory','anthracite'].includes(decor) ? 'solid' : 'metal';
  const input = { goal:'renovation', surface, priority:family, decor, side, condition:'good' };
  const clean = api.sanitizeFinderAnswers(input);
  assert.equal(clean.decor,decor);
  assert.equal(clean.side,['doors','frames'].includes(surface) ? side : '');
  const restored = api.sanitizeFinderAnswers(Object.fromEntries(new URLSearchParams(api.finderShareHash(input,'wrap').slice(1))));
  assert.equal(restored.decor,clean.decor); assert.equal(restored.side,clean.side);
  const quote = api.buildFinderMessage(input,['wrap']);
  assert(quote.includes('Dekor poglądowy:'));
  if (['doors','frames'].includes(surface)) {
    assert(quote.includes('Strona oklejenia:'));
    if (side === 'outside') assert(api.getFinderResult(input).notes.some(n=>n.includes('przeznaczony do ekspozycji zewnętrznej')));
  } else assert(!quote.includes('Strona oklejenia:'));
}
assert.equal(api.sanitizeFinderAnswers({goal:'renovation',surface:'doors',priority:'wood',decor:'anthracite',side:'invalid'}).decor,'oak');
assert.equal(api.sanitizeFinderAnswers({goal:'heat',surface:'window',priority:'light',decor:'oak',side:'outside'}).decor,'');
assert.equal(api.sanitizeFinderAnswers({goal:'heat',surface:'window',priority:'light',side:'outside'}).side,'');
console.log('PASS: 96 decor/surface/side combinations, exterior guidance, share round trips, quote summaries and stale-answer cleanup.');

const offered = goal => Array.from(api.finderSurfaces(goal),x=>x.id);
for (const goal of ['heat','glare','cold','uv']) {
  assert(!offered(goal).includes('balcony'),goal+' must not offer a balustrade');
  assert(!offered(goal).includes('partition'),goal+' must not offer an internal partition');
  assert(offered(goal).includes('window') && offered(goal).includes('roof') && offered(goal).includes('other'));
}
assert.deepEqual(offered('renovation'),['doors','furniture','counter','frames','other']);
assert.deepEqual(offered('privacy'),['window','partition','balcony','other']);
assert(!offered('uv').includes('polycarbonate'));
const priorities = (goal,surface) => Array.from(api.finderPrioritiesFor(goal,surface),x=>x.id);
assert.deepEqual(priorities('privacy','balcony'),['constant','pattern','other']);
assert(!priorities('privacy','partition').includes('day'));
assert(!priorities('privacy','window').includes('switch'));
for(const surface of ['balcony','roof']) assert(!priorities('safety',surface).includes('intrusion'));
assert.deepEqual(priorities('special','polycarbonate'),['removal','other']);
assert(!priorities('special','partition').includes('birds'));
assert(!priorities('special','roof').includes('projection'));
assert(!priorities('uv','roof').includes('heat'));
assert.equal(result({goal:'safety',surface:'balcony',priority:'fragments'}).solutions[0].id,'safety');
assert(!result({goal:'safety',surface:'roof',priority:'fragments'}).solutions.some(x=>x.id==='haccp'));
assert(!result({goal:'privacy',surface:'window',priority:'constant'}).solutions.some(x=>x.id==='lcd'));
for(const input of [
  {goal:'heat',surface:'balcony',priority:'balanced'},
  {goal:'privacy',surface:'balcony',priority:'switch'},
  {goal:'safety',surface:'roof',priority:'intrusion'},
  {goal:'special',surface:'partition',priority:'birds'},
]) assert.equal(api.getFinderResult(input).complete,false,'Stale links cannot bypass contextual options');
assert.equal(api.finderConditions({goal:'cold',surface:'window',priority:'draft'}).glass,false);
assert.equal(api.finderConditions({goal:'cold',surface:'window',priority:'draft'}).access,false);
assert.equal(api.finderConditions({goal:'heat',surface:'polycarbonate',priority:'balanced'}).glass,false);
assert.equal(api.finderConditions({goal:'heat',surface:'polycarbonate',priority:'strong'}).access,false);
assert.equal(api.finderConditions({goal:'privacy',surface:'partition',priority:'switch'}).access,false);
assert.equal(api.finderConditions({goal:'renovation',surface:'doors',priority:'wood'}).glass,false);
assert.equal(api.finderResumeStep({goal:'renovation',surface:'doors',priority:'wood'},true),1);
assert.equal(api.finderResumeStep({goal:'privacy',surface:'balcony',priority:'switch'},true),2);
assert.equal(api.finderResumeStep({goal:'other',otherGoal:'   ',surface:'window',priority:'consult'},true),0);
for (const [field,textField,stage] of [['goal','otherGoal',0],['surface','otherSurface',1],['priority','otherPriority',2],['condition','otherCondition',3]]) {
  const input = {goal:field==='condition'?'renovation':'heat',surface:field==='condition'?'furniture':'window',priority:field==='condition'?'wood':'balanced',[field]:'other'};
  assert.equal(api.finderStepComplete(input,stage),false);
  input[textField]='Opis ze spacjami, polskimi znakami: łóź & # + <tekst>\nDruga linia';
  assert.equal(api.finderStepComplete(input,stage),true);
  if(field==='goal') input.priority='consult';
  input.details='Informacje dodatkowe';
  const hash = api.finderShareHash(input);
  const restored=api.sanitizeFinderAnswers(Object.fromEntries(new URLSearchParams(hash.slice(1))));
  assert.equal(restored[textField],input[textField]);
  assert.equal(api.getFinderResult(restored).complete,true);
  assert.equal(api.getFinderResult(restored).solutions.length,0);
  assert(api.buildFinderMessage(restored).includes(input[textField]));
  assert(api.buildFinderMessage(restored).includes('Informacje dodatkowe'));
}
const cleaned = api.sanitizeFinderAnswers({goal:'heat',surface:'window',priority:'balanced',otherGoal:'stale',otherSurface:'stale',otherPriority:'stale',otherCondition:'stale',details:'a'.repeat(900)});
for(const field of ['otherGoal','otherSurface','otherPriority','otherCondition']) assert.equal(cleaned[field],'');
assert.equal(cleaned.details.length,600);
assert.equal(api.sanitizeFinderAnswers({goal:'other',otherGoal:{x:1}}).otherGoal,'');
assert.equal(api.sanitizeFinderAnswers({goal:'other',otherGoal:'a'.repeat(500)}).otherGoal.length,300);
assert.equal(api.sanitizeFinderAnswers({goal:'heat',surface:'window',priority:'other',otherPriority:'x',glass:'triple',access:'yes'}).glass,'unknown');
assert.equal(api.finderContactTopic({goal:'other',otherGoal:'x',surface:'other',otherSurface:'x',priority:'consult'}),'wybierz');
assert.equal(api.finderContactTopic({goal:'safety',surface:'other',otherSurface:'x',priority:'fragments'}),'security');
console.log('PASS: every goal, contextual surfaces/priorities/technical fields, stale-link recovery, required Other descriptions, bounded text, link round trips and quotes.');

for(const goal of api.finderGoals) assert(!offered(goal.id).includes('unknown'),'Only one combined unrecognized/custom surface choice');
const legacySurface = api.sanitizeFinderAnswers({goal:'heat',surface:'unknown',priority:'light'});
assert.equal(legacySurface.surface,'other'); assert(legacySurface.otherSurface.includes('pomoc w rozpoznaniu'));
assert.equal(api.getFinderResult(legacySurface).complete,true); assert.equal(api.getFinderResult(legacySurface).solutions.length,0);
assert(api.buildFinderMessage(legacySurface).includes(legacySurface.otherSurface));
const perfecta=api.finderSolutions.find(x=>x.id==='selective');
assert.deepEqual(Array.from(perfecta.variants,v=>v.name),['Perfecta','Perfecta Duo Premium']);
assert.deepEqual(Array.from(perfecta.variants,v=>[v.light,v.solar,v.ir]),[[73,58,85],[75,59,95]]);
const premiumChoice={'selective':'Perfecta Duo Premium'};
const premiumHash=api.finderShareHash({goal:'heat',surface:'window',priority:'light'},'selective',premiumChoice);
const premiumParams=new URLSearchParams(premiumHash.slice(1));
assert.equal(api.getFinderVariant(perfecta,{},premiumParams.get('shade-selective')).name,'Perfecta Duo Premium');
assert(api.buildFinderMessage({goal:'heat',surface:'window',priority:'light'},['selective'],premiumChoice).includes('Perfecta Duo Premium'));
assert(api.getFinderTint(75).darkness < api.getFinderTint(73).darkness);
assert(Math.abs(api.getFinderTint(75).darkness-api.getFinderTint(73).darkness)<.01,'Closely matched VLT must not be shown as dramatically different tint');
console.log('PASS: merged surface option, legacy-link migration, both verified Perfecta variants and Premium link/quote selection.');

for(const goal of ['heat','glare']) {
  assert.deepEqual(priorities(goal,'polycarbonate'),goal==='heat'?['light','strong','other']:['light','strong','other']);
  assert.equal(api.finderResumeStep({goal,surface:'polycarbonate',priority:'balanced'},true),2);
  for(const access of ['yes','no','unknown']) {
    const input={goal,surface:'polycarbonate',priority:'strong',access};
    assert.equal(api.sanitizeFinderAnswers(input).access,'yes');
    assert(api.buildFinderMessage(input).includes('Wyłącznie od zewnątrz'));
    const restored=api.sanitizeFinderAnswers(Object.fromEntries(new URLSearchParams(api.finderShareHash(input).slice(1))));
    assert.equal(restored.access,'yes');
  }
}
assert.deepEqual(Array.from(silver.variants,v=>[v.name,v.light,v.solar]),[
['Silver 20 Comfort',16,82],['Silver 40 Comfort',40,66],['Silver 50 Comfort',55,50],['Silver 20 Duo Premium',17,87],['Silver 40 Duo Premium',39,73]]);
const premiumSilver={'solar-reflective':'Silver 40 Duo Premium'};
const premiumSilverHash=api.finderShareHash(shadeAnswers,'solar-reflective',premiumSilver);
assert.equal(api.getFinderVariant(silver,shadeAnswers,new URLSearchParams(premiumSilverHash.slice(1)).get('shade-solar-reflective')).name,'Silver 40 Duo Premium');
assert(api.buildFinderMessage(shadeAnswers,['solar-reflective'],premiumSilver).includes('Silver 40 Duo Premium'));
const everyModel=api.finderSolutions.flatMap(s=>s.variants||[]);
assert.equal(new Set(everyModel.map(v=>v.name)).size,58);
assert.equal(api.finderSolutions.filter(s=>s.variants?.length).length,17);
assert(api.finderSolutions.every(s=>s.parameters?.length));
for(const v of everyModel) for(const key of ['light','solar','uv','ir']) if(v[key]!==undefined) assert(Number.isFinite(v[key])&&v[key]>=0&&v[key]<=100,v.name+' '+key);
assert(!JSON.stringify(api.finderSolutions).includes('marketfolie.pl'));
const poly=api.finderSolutions.find(s=>s.id==='polycarbonate');
assert.equal(api.getFinderVariant(poly,{goal:'heat',surface:'polycarbonate',priority:'strong'}).name,'Polycarbon Silver');
assert(!everyModel.some(v=>v.name==='Polycarbon Silver Duo'));
assert.equal(api.getFinderVariant(poly,{goal:'heat',surface:'polycarbonate',priority:'strong'},'Polycarbon Silver Duo').name,'Polycarbon Silver','Old shared links fall back to an available model');
const neutral=api.finderSolutions.find(s=>s.id==='neutral');
assert.deepEqual(Array.from(neutral.variants,v=>[v.name,v.light,v.solar]),[['Neutral 25',21,74],['Neutral 40',40,51],['Titan 25 Duo Premium',19,77],['Titan 40 Duo Premium',36,65]]);
const titanVariants={neutral:'Titan 40 Duo Premium'};
assert(api.buildFinderMessage(shadeAnswers,['neutral'],titanVariants).includes('Titan 40 Duo Premium'));
assert.equal(api.getFinderVariant(neutral,shadeAnswers,new URLSearchParams(api.finderShareHash(shadeAnswers,'neutral',titanVariants).slice(1)).get('shade-neutral')).name,'Titan 40 Duo Premium');
assert.equal(api.getFinderVariant(poly,{goal:'heat',surface:'polycarbonate',priority:'light'}).name,'Polycarbon White');
const safety=api.finderSolutions.find(s=>s.id==='safety');
assert(api.getFinderVariants(safety,{goal:'safety',surface:'balcony',priority:'fragments'}).every(v=>v.mounting.toLowerCase().includes('zew')));
assert(api.getFinderVariants(safety,{goal:'safety',surface:'partition',priority:'fragments'}).every(v=>v.mounting.toLowerCase().includes('wew')));
const uv=api.finderSolutions.find(s=>s.id==='uv');
assert.equal(uv.variants.find(v=>v.name==='Anty UV Total').uv,99.9);
assert.equal(uv.variants.find(v=>v.name==='Anty UV Clear').solar,undefined,'No solar-energy value may be invented from UV reduction');
const lcd=api.finderSolutions.find(s=>s.id==='lcd').variants[0];
assert.equal(lcd.light,81); assert.equal(lcd.lightOff,52); assert.equal(lcd.filmVoltage,'48 V'); assert.equal(lcd.power,'3,5 W/m²');
assert.equal(result({goal:'uv',surface:'roof',priority:'light'}).solutions.length,0,'Vertical-window UV products must not be assigned to a roof by default');
console.log('PASS: polycarbonate choices/fixed exterior access, removed unavailable Duo, five Silver variants, Neutral/Titan variants, 58 models, contextual mounting, LCD and missing-parameter handling.');
const internal = api.finderSolutions.find(s=>s.id==='internal');
assert.equal(internal.variants.length,10);
assert(internal.variants.every(v=>v.mounting==='Wewnętrzny'));
assert.deepEqual(Array.from(internal.variants.filter(v=>/^R\d+ Silver$/.test(v.name)),v=>[v.name,v.light,v.solar]),[['R20 Silver',17.5,76],['R30 Silver',30,68],['R50 Silver',50,58]]);
assert.equal(api.getFinderVariant(internal,{goal:'heat',surface:'window',priority:'strong'}).name,'R20 Silver');
assert.equal(api.getFinderVariant(internal,{goal:'heat',surface:'window',priority:'light'}).name,'Invisible Comfort');
const mirror=api.finderSolutions.find(s=>s.id==='mirror');
assert.equal(mirror.variants.length,6);
assert(mirror.variants.every(v=>/Mirror/.test(v.name)&&!v.name.includes('Silver')));
assert.deepEqual(Array.from(mirror.variants,v=>[v.name,v.light,v.solar]),[['Mirror 40 zewnętrzna',40,66],['Mirror 20 zewnętrzna',16,82],['Mirror 10 zewnętrzna',10,86],['R30 Mirror wewnętrzna',30,68],['R20 Mirror wewnętrzna',17.5,76],['R10 Mirror wewnętrzna',6,80]]);
for(const [access,mounting] of [['yes','Zewnętrzny'],['no','Wewnętrzny']]) {
  const answers={goal:'privacy',surface:'window',priority:'day',access};
  const options=api.getFinderVariants(mirror,answers);
  assert.equal(options.length,3);assert(options.every(v=>v.mounting===mounting));
  assert.equal(api.getFinderVariant(mirror,answers).mounting,mounting);
  assert.equal(new Set(options.map(v=>api.getFinderTint(v.light).darkness)).size,3);
}
const mirrorAnswers={goal:'privacy',surface:'window',priority:'day',access:'no'};
assert.equal(api.getFinderVariant(mirror,mirrorAnswers,'Silver 40 Duo Premium').name,'R30 Mirror wewnętrzna');
const mirrorShade={mirror:'R10 Mirror wewnętrzna'};
assert(api.buildFinderMessage(mirrorAnswers,['mirror'],mirrorShade).includes('R10 Mirror wewnętrzna'));
assert.equal(api.getFinderVariant(mirror,mirrorAnswers,new URLSearchParams(api.finderShareHash(mirrorAnswers,'mirror',mirrorShade).slice(1)).get('shade-mirror')).name,'R10 Mirror wewnętrzna');
console.log('PASS: 10 interior solar films, 6 separate Mirror products, interior/exterior filtering, old-link migration, distinct tints and quote/share round trips.');
const matte=api.finderSolutions.find(s=>s.id==='matte');
assert.equal(matte.variants.length,7);
assert.equal(api.finderSolutions.filter(s=>/matte/.test(s.id)).length,1);
assert.deepEqual(Array.from(matte.variants,v=>[v.name,v.light,v.solar]),[['White Matte',72,28],['Silver Matte',18,80],['Grey Matte',30,39],['Bronze Matte',30,39],['Yellow Matte',70,20],['Red Matte',65,22],['Green Matte',55,33]]);
assert(matte.variants.every(v=>v.mounting==='Wewnętrzny'&&v.scene==='matte'&&v.tone));
assert.equal(new Set(matte.variants.map(v=>v.tone)).size,7);
const matteAnswers={goal:'privacy',surface:'window',priority:'constant'};
const matteShade={matte:'Red Matte'};
assert(api.buildFinderMessage(matteAnswers,['matte'],matteShade).includes('Red Matte'));
assert.equal(api.getFinderVariant(matte,matteAnswers,new URLSearchParams(api.finderShareHash(matteAnswers,'matte',matteShade).slice(1)).get('shade-matte')).name,'Red Matte');
assert(!result({goal:'privacy',surface:'balcony',priority:'constant'}).solutions.some(s=>s.id==='matte'));
assert(!api.getFinderVariants(matte,{...matteAnswers,glass:'triple'}).some(v=>v.name==='Silver Matte'));
assert.equal(api.getFinderVariant(matte,{...matteAnswers,glass:'triple'},'Silver Matte').name,'White Matte');
console.log('PASS: 7 matte finishes in one category, individual optical parameters, distinct preview colors, interior mounting, share/quote round trips and balcony separation.');

const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { randomUUID } = require('node:crypto');
const source = fs.readFileSync('src/lib/googleAds.js', 'utf8').replace(/\bexport\s+/g, '');
const memoryStorage = () => {
  const entries = new Map();
  return { getItem: key => entries.get(key) ?? null, setItem: (key, value) => entries.set(key, value), removeItem: key => entries.delete(key) };
};
function browser({ saved, blockedStorage = false, scripts = [], session = memoryStorage() } = {}) {
  const local = memoryStorage();
  if (saved) local.setItem('lumera-cookie-consent', saved);
  const window = { location: { href: 'https://folielumera.pl/kontakt?dobor=PRIVATE_MESSAGE&email=private@example.invalid&gclid=TEST_CLICK#details=PRIVATE_HASH' }, localStorage: local, sessionStorage: session };
  if (blockedStorage) for (const storage of ['localStorage','sessionStorage']) Object.defineProperty(window, storage, { get() { throw new Error('Storage blocked'); } });
  const document = { referrer: 'https://example.invalid/private/name?email=PRIVATE_REF', head: { appendChild: script => scripts.push(script) }, createElement: () => ({}), getElementById: id => scripts.find(script => script.id === id), querySelectorAll: () => scripts };
  const context = vm.createContext({ window, document, URL, URLSearchParams, Set });
  const api = vm.runInContext(`${source}\n({ GOOGLE_CONSENT_BOOTSTRAP, initializeGoogleAdsConsent, setGoogleAdsConsent, resetGoogleAdsConsent, getGoogleAdsConsent, syncGoogleAdsPageContext, trackConfirmedContactSubmission })`, context);
  vm.runInContext(api.GOOGLE_CONSENT_BOOTSTRAP, context);
  const commands = () => (window.dataLayer || []).map(args => Array.from(args));
  const conversions = () => commands().filter(args => args[0] === 'event' && args[1] === 'conversion');
  return { api, window, scripts, commands, conversions, session };
}
function success(api, id = randomUUID()) { return api.trackConfirmedContactSubmission({ httpOk: true, success: true, submissionId: id }); }

const fresh = browser();
assert.equal(fresh.commands()[0][0], 'consent');
assert.equal(fresh.commands()[0][1], 'default');
assert(Object.values(fresh.commands()[0][2]).every(value => value === 'denied'));
fresh.api.initializeGoogleAdsConsent();
assert.equal(fresh.scripts.length, 0);
const beforeConsent = randomUUID();
assert.equal(success(fresh.api, beforeConsent), false);
assert.equal(fresh.conversions().length, 0);
fresh.api.setGoogleAdsConsent('accepted');
assert.equal(success(fresh.api, beforeConsent), false, 'Do not replay pre-consent successes');
assert.equal(fresh.conversions().length, 0, 'Consent/render/page entry is not a conversion');
assert.equal(fresh.scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=AW-18125280330');
fresh.api.initializeGoogleAdsConsent();
fresh.api.setGoogleAdsConsent('accepted');
fresh.api.syncGoogleAdsPageContext();
assert.equal(fresh.scripts.length, 1);
assert.equal(fresh.commands().filter(args => args[0] === 'config').length, 1);
assert.equal(fresh.commands().filter(args => args[1] === 'default').length, 1);
const granted = fresh.commands().filter(args => args[0] === 'consent').at(-1)[2];
assert.equal(granted.ad_storage, 'granted');
assert.equal(granted.ad_user_data, 'granted');
assert.equal(granted.analytics_storage, 'denied');
assert.equal(granted.ad_personalization, 'denied');
for (const invalid of [undefined, {}, {httpOk:false,success:true,submissionId:randomUUID()}, {httpOk:true,success:false,submissionId:randomUUID()}, {httpOk:true,submissionId:randomUUID()}, {httpOk:true,success:true}, {httpOk:true,success:true,submissionId:'email@example.invalid'}]) assert.equal(fresh.api.trackConfirmedContactSubmission(invalid),false);
assert.equal(fresh.conversions().length, 0);
const id = randomUUID();
assert.equal(success(fresh.api,id),true);
assert.equal(success(fresh.api,id),false);
assert.equal(fresh.conversions().length,1);
const event = JSON.parse(JSON.stringify(fresh.conversions()[0][2]));
assert.deepEqual(event, { send_to:'AW-18125280330/EipsCPOs2LkdEMqo58JD', transaction_id:id, page_location:'https://folielumera.pl/kontakt?gclid=TEST_CLICK', page_referrer:'https://example.invalid' });
assert(!JSON.stringify(fresh.commands()).includes('PRIVATE_'));
assert(!JSON.stringify(fresh.commands()).includes('private@example.invalid'));
assert(!('value' in event) && !('currency' in event) && !('user_data' in event));
assert.equal(fresh.commands().find(args => args[0] === 'config')[2].allow_enhanced_conversions,false);
const reload = browser({saved:'accepted', session:fresh.session});
reload.api.initializeGoogleAdsConsent();
assert.equal(success(reload.api,id),false, 'Session deduplication survives remount/reload');
assert.equal(success(reload.api),true,'A genuinely new success can be reported');
reload.api.setGoogleAdsConsent('rejected');
assert.equal(success(reload.api),false);
assert(Object.values(reload.commands().filter(args => args[0] === 'consent').at(-1)[2]).every(value => value === 'denied'));
reload.api.resetGoogleAdsConsent();
assert.equal(reload.api.getGoogleAdsConsent(),null);
assert.equal(reload.window.localStorage.getItem('lumera-cookie-consent'),null);
const rejected = browser({saved:'rejected'});
rejected.api.initializeGoogleAdsConsent();
assert.equal(rejected.scripts.length,0);
assert.equal(success(rejected.api),false);
const blocked = browser({blockedStorage:true});
blocked.api.initializeGoogleAdsConsent();
blocked.api.setGoogleAdsConsent('accepted');
const blockedId=randomUUID();
assert.equal(success(blocked.api,blockedId),true);
assert.equal(success(blocked.api,blockedId),false);
const reuse = browser({saved:'accepted',scripts:[{src:'https://www.googletagmanager.com/gtag/js?id=G-EXISTING'}]});
reuse.api.initializeGoogleAdsConsent();
assert.equal(reuse.scripts.length,1,'Reuse an existing official gtag loader');
const broken = browser({saved:'accepted'});
broken.api.initializeGoogleAdsConsent();
broken.window.gtag = () => { throw new Error('Simulated blocker'); };
assert.equal(success(broken.api),false,'Optional measurement cannot throw into the form');
console.log('PASS: Consent Mode defaults/order, basic blocking, accepted/rejected/reset/storage failure, one loader/config, no retrospective conversion, success-only event, deduplication, PII-free context, no fictitious value.');

// Execute the real contact handler with isolated transport/parser dependencies.
// No SMTP connection, Google request, mailbox or client data is used.
async function testHandler() {
  const handlerSource = fs.readFileSync('pages/api/contact.js','utf8').replace(/^import .*;\r?\n/gm,'').replace('export default async function handler','async function handler').replace(/\bexport\s+/g,'');
  let smtpCalls = 0, mode = 'accepted', requestNumber = 0;
  const fields = { Imie_i_nazwisko:'TEST AUTOMATYCZNY', Telefon:'000000000', email:'test@example.invalid', miejsce_montazu:'TEST', wybrana_kategoria:'TEST', wiadomosc:'Synthetic test only', _started_at:String(Date.now()-10000) };
  const sandbox = { URLSearchParams, process:{env:{SMTP_HOST:'test.invalid',SMTP_PORT:'2525',SMTP_USER:'test',SMTP_PASS:'test'}}, console:{error:()=>{}}, fs:{readFile:async()=>Buffer.from('test'),unlink:async()=>{}}, randomUUID,
    formidable:()=>({parse:(req,cb)=>cb(null,req.testFields,{})}),
    nodemailer:{createTransport:()=>({sendMail:async()=>{smtpCalls++;if(mode==='error') throw new Error('SMTP failed');return {accepted:mode==='accepted'?['test@example.invalid']:[],rejected:[]};}})} };
  sandbox.globalThis = {};
  const handler = vm.runInNewContext(`${handlerSource}\nhandler;`,sandbox);
  const call = async(overrides={}) => {
    const req={method:'POST',headers:{},socket:{remoteAddress:`test-${requestNumber++}`},testFields:{...fields},...overrides};
    const res={statusCode:200,setHeader(){},status(code){this.statusCode=code;return this;},json(body){this.body=body;return this;}};
    await handler(req,res);return res;
  };
  const invalid=await call({testFields:{...fields,email:'invalid'}});
  assert.equal(invalid.statusCode,400);assert.equal(smtpCalls,0);assert(!invalid.body.submissionId);
  const ok=await call();assert.equal(ok.statusCode,200);assert.equal(ok.body.success,true);assert.match(ok.body.submissionId,/^[0-9a-f-]{36}$/);assert.equal(smtpCalls,1);
  mode='error';const failure=await call();assert.equal(failure.statusCode,500);assert(!failure.body.submissionId);
  mode='rejected';const rejection=await call();assert.equal(rejection.statusCode,500);assert(!rejection.body.submissionId);
  mode='accepted';const second=await call();assert.notEqual(second.body.submissionId,ok.body.submissionId);
  const method=await call({method:'GET'});assert.equal(method.statusCode,405);assert(!method.body.submissionId);
  const acceptedClient=browser({saved:'accepted'});acceptedClient.api.initializeGoogleAdsConsent();
  for(const result of [invalid,failure,rejection,method]) assert.equal(acceptedClient.api.trackConfirmedContactSubmission({httpOk:result.statusCode===200,...result.body}),false);
  assert.equal(acceptedClient.api.trackConfirmedContactSubmission({httpOk:true,...ok.body}),true);
  assert.equal(acceptedClient.api.trackConfirmedContactSubmission({httpOk:true,...ok.body}),false);
  assert.equal(acceptedClient.conversions().length,1);
  console.log('PASS: real API handler validation 400, SMTP accepted 200 + opaque UUID, SMTP failed/rejected 500, method 405, distinct successes and API-to-conversion integration without real messages.');
}
testHandler().catch(error=>{console.error(error);process.exitCode=1;});

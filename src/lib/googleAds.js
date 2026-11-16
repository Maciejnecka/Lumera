// Basic Consent Mode: no Google script or conversion before acceptance.
export const GOOGLE_ADS_ID = 'AW-18125280330';
export const CONTACT_CONVERSION_SEND_TO = 'AW-18125280330/EipsCPOs2LkdEMqo58JD';
export const COOKIE_CONSENT_KEY = 'lumera-cookie-consent';
export const CONSENT_CHANGE_EVENT = 'lumera-cookie-consent-change';
const SCRIPT_ID = 'lumera-google-ads-tag';
const REPORTED_KEY = 'lumera-ads-reported-submissions';
const denied = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' };

// Synchronous in _document, before NextScript and any external Google loader.
export const GOOGLE_CONSENT_BOOTSTRAP = `
window.dataLayer=window.dataLayer||[];
window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
if(!window.__lumeraConsentDefaultSet){
 window.gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});
 window.__lumeraConsentDefaultSet=true;
}`;

function state() {
  if (!window.__lumeraGoogleAds) window.__lumeraGoogleAds = { configured: false, seen: new Set() };
  return window.__lumeraGoogleAds;
}

function ensureQueue() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  if (!window.__lumeraConsentDefaultSet) {
    window.gtag('consent', 'default', { ...denied });
    window.__lumeraConsentDefaultSet = true;
  }
}

function storageGet(storage, key) {
  try { return window[storage].getItem(key); } catch { return null; }
}

function storageSet(storage, key, value) {
  try {
    if (value === null) window[storage].removeItem(key);
    else window[storage].setItem(key, value);
  } catch { /* In-memory consent and deduplication remain available. */ }
}

export function getGoogleAdsConsent() {
  if (typeof window === 'undefined') return null;
  const choice = state().choice === undefined ? storageGet('localStorage', COOKIE_CONSENT_KEY) : state().choice;
  return ['accepted', 'rejected'].includes(choice) ? choice : null;
}

function pageContext() {
  // Keep only Ads attribution IDs; finder text, arbitrary query values and hashes
  // must never become event context. Referrers are limited to their origin.
  try {
    const parsed = new URL(window.location.href);
    const clickIds = new URLSearchParams();
    ['gclid', 'gbraid', 'wbraid'].forEach((key) => {
      const value = parsed.searchParams.get(key);
      if (value && /^[a-z0-9_-]{1,512}$/i.test(value)) clickIds.set(key, value);
    });
    let referrer = '';
    try { referrer = new URL(document.referrer).origin; } catch { /* Direct visit. */ }
    return { page_location: `${parsed.origin}${parsed.pathname}${clickIds.size ? `?${clickIds}` : ''}`, page_referrer: referrer };
  } catch { return { page_location: '', page_referrer: '' }; }
}

export function syncGoogleAdsPageContext() {
  if (typeof window === 'undefined' || !state().configured) return;
  try { window.gtag('set', pageContext()); } catch { /* Measurement is optional. */ }
}

function loadGoogleAdsTag() {
  const current = state();
  if (!current.configured) {
    window.gtag('set', { ...pageContext(), ads_data_redaction: true });
    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ADS_ID, {
      ...pageContext(), send_page_view: false,
      allow_enhanced_conversions: false, allow_ad_personalization_signals: false,
    });
    current.configured = true;
  }
  const existing = document.getElementById(SCRIPT_ID) || [...document.querySelectorAll('script[src]')].find((script) => {
    try { const url = new URL(script.src); return url.hostname === 'www.googletagmanager.com' && url.pathname === '/gtag/js'; } catch { return false; }
  });
  if (existing) return;
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);
}

export function setGoogleAdsConsent(choice, persist = true) {
  if (typeof window === 'undefined') return null;
  const normalized = ['accepted', 'rejected'].includes(choice) ? choice : null;
  ensureQueue();
  state().choice = normalized;
  if (persist) storageSet('localStorage', COOKIE_CONSENT_KEY, normalized);
  window.gtag('consent', 'update', { ...denied, ...(normalized === 'accepted' ? { ad_storage: 'granted', ad_user_data: 'granted' } : {}) });
  // The banner covers Ads measurement, not analytics or personalized advertising.
  if (normalized === 'accepted') loadGoogleAdsTag();
  if (persist && typeof window.CustomEvent === 'function') window.dispatchEvent(new window.CustomEvent(CONSENT_CHANGE_EVENT, { detail: normalized }));
  return normalized;
}

export function initializeGoogleAdsConsent() {
  return setGoogleAdsConsent(getGoogleAdsConsent(), false);
}

export function resetGoogleAdsConsent() {
  return setGoogleAdsConsent(null);
}

export function trackConfirmedContactSubmission({ httpOk, success, submissionId } = {}) {
  if (typeof window === 'undefined' || httpOk !== true || success !== true ||
      typeof submissionId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionId)) return false;
  try {
    const current = state();
    if (current.seen.has(submissionId)) return false;
    current.seen.add(submissionId);
    // No pending queue: do not replay a success after later consent acceptance.
    if (getGoogleAdsConsent() !== 'accepted') return false;
    let reported;
    try { reported = JSON.parse(storageGet('sessionStorage', REPORTED_KEY) || '[]'); } catch { reported = []; }
    if (!Array.isArray(reported)) reported = [];
    if (reported.includes(submissionId)) return false;
    ensureQueue();
    loadGoogleAdsTag();
    window.gtag('event', 'conversion', { send_to: CONTACT_CONVERSION_SEND_TO, transaction_id: submissionId, ...pageContext() });
    storageSet('sessionStorage', REPORTED_KEY, JSON.stringify([...reported, submissionId].slice(-100)));
    return true; // Queued locally, not confirmation of receipt/attribution in Ads.
  } catch { return false; /* Measurement must never break a successful submission. */ }
}

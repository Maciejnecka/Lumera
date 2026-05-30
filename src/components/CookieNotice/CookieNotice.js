import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CookieNoticeWrap,
  CookieNoticeInner,
  CookieNoticeTitle,
  CookieNoticeText,
  CookieNoticeActions,
} from './CookieNotice.styled';

const STORAGE_KEY = 'lumera-cookie-consent';
const GOOGLE_ADS_ID = 'AW-18125280330';
const GOOGLE_SCRIPT_ID = 'lumera-google-ads-tag';
const CONSENT_ACCEPTED = 'accepted';
const CONSENT_REJECTED = 'rejected';

const loadGoogleAdsTag = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag('consent', 'default', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('config', GOOGLE_ADS_ID);

  if (document.getElementById(GOOGLE_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = GOOGLE_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);
};

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedConsent = window.localStorage.getItem(STORAGE_KEY);

    if (savedConsent === CONSENT_ACCEPTED) {
      loadGoogleAdsTag();
      return;
    }

    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, CONSENT_ACCEPTED);
      loadGoogleAdsTag();
    }

    setIsVisible(false);
  };

  const handleReject = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, CONSENT_REJECTED);
    }

    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <CookieNoticeWrap role="status" aria-live="polite">
      <CookieNoticeInner>
        <CookieNoticeTitle>Ustawienia prywatności</CookieNoticeTitle>
        <CookieNoticeText>
          Korzystamy z technicznych mechanizmów potrzebnych do działania strony. Google Ads
          uruchomimy tylko po Twojej zgodzie, żeby mierzyć skuteczność reklam i konwersje.
          Możesz zaakceptować albo pozostać przy ustawieniach niezbędnych.
        </CookieNoticeText>

        <CookieNoticeActions>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <button type="button" className="secondary" onClick={handleReject}>
            Tylko niezbędne
          </button>
          <button type="button" onClick={handleAccept}>
            Akceptuję Google Ads
          </button>
        </CookieNoticeActions>
      </CookieNoticeInner>
    </CookieNoticeWrap>
  );
};

export default CookieNotice;

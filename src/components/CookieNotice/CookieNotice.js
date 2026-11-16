import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { COOKIE_CONSENT_KEY, CONSENT_CHANGE_EVENT, initializeGoogleAdsConsent, setGoogleAdsConsent, syncGoogleAdsPageContext } from '../../lib/googleAds';
import {
  CookieNoticeWrap,
  CookieNoticeInner,
  CookieNoticeTitle,
  CookieNoticeText,
  CookieNoticeActions,
} from './CookieNotice.styled';

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsVisible(!initializeGoogleAdsConsent());
    const onChange = event => setIsVisible(!event.detail);
    const onStorage = event => {
      if (event.key === COOKIE_CONSENT_KEY || event.key === null) {
        setIsVisible(!setGoogleAdsConsent(event.newValue, false));
      }
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  useEffect(() => { syncGoogleAdsPageContext(); }, [router.asPath]);

  const handleAccept = () => { setGoogleAdsConsent('accepted'); setIsVisible(false); };
  const handleReject = () => { setGoogleAdsConsent('rejected'); setIsVisible(false); };

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

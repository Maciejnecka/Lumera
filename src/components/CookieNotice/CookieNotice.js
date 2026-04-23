import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CookieNoticeWrap,
  CookieNoticeInner,
  CookieNoticeText,
  CookieNoticeActions,
} from './CookieNotice.styled';

const STORAGE_KEY = 'lumera-cookie-notice-dismissed';

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isDismissed = window.localStorage.getItem(STORAGE_KEY) === 'true';
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'true');
    }

    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <CookieNoticeWrap role="status" aria-live="polite">
      <CookieNoticeInner>
        <CookieNoticeText>
          Ta strona korzysta wyłącznie z technicznych mechanizmów niezbędnych do
          działania, takich jak pamięć przeglądarki potrzebna do obsługi nawigacji
          i formularza. Obecnie nie używamy cookies analitycznych ani marketingowych.
        </CookieNoticeText>

        <CookieNoticeActions>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <button type="button" onClick={handleDismiss}>
            Rozumiem
          </button>
        </CookieNoticeActions>
      </CookieNoticeInner>
    </CookieNoticeWrap>
  );
};

export default CookieNotice;

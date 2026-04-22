import { useEffect } from 'react';
import { useRouter } from 'next/router';

const scrollToSection = (sectionId) => {
  requestAnimationFrame(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 110;
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: 'smooth',
    });
  });
};

const ScrollManager = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = router.asPath.includes('#') ? router.asPath.split('#')[1] : '';

    if (router.pathname === '/' && hash) {
      scrollToSection(decodeURIComponent(hash));
      return;
    }

    const targetSection = sessionStorage.getItem('lumera-scroll-target');

    if (router.pathname === '/' && targetSection) {
      sessionStorage.removeItem('lumera-scroll-target');
      scrollToSection(targetSection);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [router.asPath, router.pathname]);

  return null;
};

export default ScrollManager;

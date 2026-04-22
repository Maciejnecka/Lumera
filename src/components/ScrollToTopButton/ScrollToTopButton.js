import React, { useEffect, useState } from 'react';
import { ScrollButton } from './ScrollToTopButton.styled';

const SHOW_AFTER_PX = 420;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton
      type="button"
      $visible={isVisible}
      onClick={scrollToTop}
      aria-label="Wróć na górę strony"
    />
  );
};

export default ScrollToTopButton;

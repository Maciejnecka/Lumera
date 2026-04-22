import { useEffect } from 'react';
import AOS from 'aos';

const AosInitializer = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 650, easing: 'ease-out-cubic' });
  }, []);

  return null;
};

export default AosInitializer;

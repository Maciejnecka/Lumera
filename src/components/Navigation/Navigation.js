import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { throttle } from 'lodash';
import StyledNavbar from './Navigation.styled';
import LogoIcon from '../../icons/logo/LumeraLogo.svg';
import { filmsData } from '../../data/filmsData';

const navLinks = [
  { label: 'O nas', id: 'o-nas' },
  { label: 'Realizacje', id: 'realizacje' },
  { label: 'Kontakt', id: 'kontakt' },
];

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFilmsOpen, setIsFilmsOpen] = useState(false);
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);
  const isMounted = useRef(false);
  const isNavOpenRef = useRef(false);
  const isFilmsOpenRef = useRef(false);
  const router = useRouter();
  const pathname = router.asPath.split('#')[0] || '/';

  useEffect(() => {
    isNavOpenRef.current = isNavOpen;
  }, [isNavOpen]);

  useEffect(() => {
    isFilmsOpenRef.current = isFilmsOpen;
  }, [isFilmsOpen]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (!isMounted.current) {
        isMounted.current = true;
        return;
      }

      const currentScroll = window.scrollY;

      if (isNavOpenRef.current || isFilmsOpenRef.current) {
        setIsNavbarVisible(true);
        lastScrollY.current = currentScroll;
        return;
      }

      if (Math.abs(currentScroll - lastScrollY.current) > 80) {
        if (currentScroll > lastScrollY.current) {
          setIsNavbarVisible(false);
          setIsNavOpen(false);
          setIsFilmsOpen(false);
        } else {
          setIsNavbarVisible(true);
        }

        lastScrollY.current = currentScroll;
      }
    }, 120);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
        setIsFilmsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsNavOpen(false);
    setIsFilmsOpen(false);
  }, [pathname]);

  const goToHomeSection = (sectionId) => {
    setIsNavOpen(false);
    setIsFilmsOpen(false);

    if (pathname === '/') {
      const section = document.getElementById(sectionId);
      if (!section) return;
      const navbarHeight = navbarRef.current?.offsetHeight || 0;

      window.scrollTo({
        top: section.offsetTop - navbarHeight - 18,
        behavior: 'smooth',
      });
      return;
    }

    sessionStorage.setItem('lumera-scroll-target', sectionId);
    router.push('/');
  };

  return (
    <StyledNavbar
      $open={isNavOpen}
      $visible={isNavbarVisible.toString()}
      ref={navbarRef}
    >
      <div className="navbar__container">
        <Link className="navbar__brand" href="/">
          <img src={LogoIcon} alt="Lumera" className="navbar__logo" />
          <span className="navbar__brand-copy">
            <strong>Lumera</strong>
            <small>Folie okienne i montaż</small>
          </span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isNavOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((value) => !value)}
        >
          <span className="navbar__toggle-line" aria-hidden="true" />
          <span className="navbar__toggle-line" aria-hidden="true" />
          <span className="navbar__toggle-line" aria-hidden="true" />
        </button>

        <div className="navbar__links">
          <button
            type="button"
            className="navbar__dropdown-toggle"
            onClick={() => setIsFilmsOpen((value) => !value)}
            aria-expanded={isFilmsOpen}
          >
            <span>Folie okienne</span>
            <span className={`navbar__arrow${isFilmsOpen ? ' is-open' : ''}`} />
          </button>

          <div className={`navbar__dropdown${isFilmsOpen ? ' is-open' : ''}`}>
            {filmsData.map((film) => (
              <Link key={film.path} href={film.path}>
                {film.name}
              </Link>
            ))}
          </div>

          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              className="navbar__text-link"
              onClick={() => goToHomeSection(link.id)}
            >
              {link.label}
            </button>
          ))}

          <button
            type="button"
            className="navbar__cta"
            onClick={() => goToHomeSection('kontakt')}
          >
            Bezpłatna wycena
          </button>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navigation;

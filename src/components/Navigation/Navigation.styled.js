import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.8rem 5vw;
  transform: ${(props) =>
    props.$visible === 'true' ? 'translateY(0)' : 'translateY(-120%)'};
  transition: transform var(--transition);

  .navbar__container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.4rem 1.8rem;
    border: 1px solid var(--border-light);
    border-radius: 2.4rem;
    background: rgba(250, 247, 242, 0.88);
    backdrop-filter: blur(14px);
    box-shadow: var(--shadow-sm);
  }

  .navbar__brand {
    display: inline-flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--font-title);
  }

  .navbar__logo {
    width: auto;
    height: 4.8rem;
    display: block;
  }

  .navbar__brand-copy {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .navbar__brand-copy strong {
    font-size: 1.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .navbar__brand-copy small {
    font-size: 1.15rem;
    color: var(--font-muted);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .navbar__links {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.8rem;
    min-width: 0;
  }

  .navbar__dropdown-toggle,
  .navbar__text-link,
  .navbar__cta {
    font-family: inherit;
  }

  .navbar__dropdown-toggle,
  .navbar__text-link {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--font-dark);
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
  }

  .navbar__arrow {
    width: 1.8rem;
    height: 1.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    line-height: 0;
    transition: transform var(--transition-fast);
  }

  .navbar__arrow::before {
    content: '';
    width: 0.72rem;
    height: 0.72rem;
    display: block;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: translateY(-0.16rem) rotate(45deg);
  }

  .navbar__arrow.is-open {
    transform: rotate(180deg);
  }

  .navbar__dropdown {
    position: absolute;
    top: calc(100% + 1.4rem);
    left: 50%;
    width: min(68rem, calc(100vw - 4rem));
    max-height: min(64vh, 58rem);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.6rem;
    padding: 1.6rem;
    border: 1px solid var(--border-light);
    border-radius: 2rem;
    background: rgba(255, 252, 247, 0.98);
    box-shadow: var(--shadow-md);
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-color: rgba(43, 98, 86, 0.42) rgba(248, 244, 236, 0.84);
    scrollbar-width: thin;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translate(-50%, -12px);
    transition: var(--transition);
  }

  .navbar__dropdown.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translate(-50%, 0);
  }

  .navbar__dropdown::-webkit-scrollbar {
    width: 10px;
  }

  .navbar__dropdown::-webkit-scrollbar-track {
    border-radius: 999px;
    background: rgba(248, 244, 236, 0.84);
  }

  .navbar__dropdown::-webkit-scrollbar-thumb {
    border: 3px solid rgba(248, 244, 236, 0.84);
    border-radius: 999px;
    background: rgba(43, 98, 86, 0.42);
  }

  .navbar__dropdown a {
    padding: 1rem 1.2rem;
    border-radius: 1.4rem;
    color: var(--font-dark);
    font-size: 1.45rem;
    line-height: 1.5;
  }

  .navbar__dropdown a:hover {
    background: rgba(248, 244, 236, 0.96);
  }

  .navbar__cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 4.6rem;
    padding: 0 1.8rem;
    border: 0;
    border-radius: 999px;
    color: #fffdf8;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
    box-shadow: var(--shadow-md);
    cursor: pointer;
  }

  .navbar__toggle {
    display: none;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .navbar__toggle-icon {
    width: 4.6rem;
    height: 4.6rem;
  }

  ${media.md`
    padding: 1.4rem 2rem;

    .navbar__toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .navbar__links {
      position: absolute;
      top: calc(100% + 1rem);
      left: 2rem;
      right: 2rem;
      max-width: calc(100vw - 4rem);
      max-height: calc(100vh - 12rem);
      flex-direction: column;
      align-items: stretch;
      padding: 1.8rem;
      border: 1px solid var(--border-light);
      border-radius: 2rem;
      background: rgba(250, 247, 242, 0.98);
      box-shadow: var(--shadow-md);
      overflow-y: auto;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
      opacity: ${(props) => (props.$open ? '1' : '0')};
      visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
      pointer-events: ${(props) => (props.$open ? 'auto' : 'none')};
      transform: ${(props) =>
        props.$open ? 'translateY(0)' : 'translateY(-10px)'};
      transition: var(--transition);
    }

    .navbar__dropdown-toggle {
      width: 100%;
      min-height: 4.6rem;
      justify-content: space-between;
      padding: 0 0.2rem;
      text-align: left;
    }

    .navbar__arrow {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 999px;
      background: rgba(248, 244, 236, 0.9);
    }

    .navbar__arrow::before {
      width: 0.78rem;
      height: 0.78rem;
      transform: translateY(-0.16rem) rotate(45deg);
    }

    .navbar__dropdown {
      position: static;
      width: 100%;
      max-width: 100%;
      max-height: 48vh;
      grid-template-columns: 1fr;
      margin-top: 0.6rem;
      overflow-y: auto;
      overscroll-behavior: contain;
      transform: translateY(0);
      opacity: ${(props) => (props.$open && props.$visible === 'true' ? '1' : '0')};
    }

    .navbar__dropdown.is-open {
      transform: translateY(0);
    }

    .navbar__dropdown:not(.is-open) {
      display: none;
    }

    .navbar__cta {
      width: 100%;
      margin-top: 0.4rem;
    }
  `}

  ${media.sm`
    padding: 1.2rem 1.2rem;

    .navbar__container {
      padding: 1.2rem 1.4rem;
      gap: 1rem;
    }

    .navbar__logo {
      height: 4.2rem;
    }

    .navbar__brand-copy strong {
      font-size: 1.45rem;
    }

    .navbar__brand-copy small {
      font-size: 1rem;
    }
  `}
`;

export default StyledNavbar;

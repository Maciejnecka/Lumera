import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const PrivacyWrap = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 13rem 5vw 2rem;
`;

export const PrivacyHero = styled.section`
  position: relative;
  padding: clamp(3rem, 6vw, 5.6rem);
  overflow: hidden;
  border: 1px solid var(--border-light);
  border-radius: 3.2rem;
  background:
    radial-gradient(circle at 88% 12%, rgba(215, 180, 106, 0.22), transparent 28%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(247, 241, 232, 0.72));
  box-shadow: var(--shadow-md);

  &::after {
    content: '';
    position: absolute;
    right: -7rem;
    bottom: -9rem;
    width: 24rem;
    height: 24rem;
    border: 1px solid rgba(43, 98, 86, 0.14);
    border-radius: 999px;
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const PrivacyEyebrow = styled.span`
  display: inline-flex;
  margin-bottom: 1.4rem;
  color: var(--accent-primary);
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const PrivacyTitle = styled.h1`
  max-width: 82rem;
  margin: 0 0 1.5rem;
  color: var(--font-title);
  font-size: clamp(4rem, 7vw, 7rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
`;

export const PrivacyLead = styled.p`
  max-width: 76rem;
  margin: 0;
  color: var(--font-main);
  font-size: 1.85rem;
  line-height: 1.75;
`;

export const PrivacyActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.4rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 4.8rem;
    padding: 0 1.8rem;
    border-radius: 999px;
    font-size: 1.5rem;
    font-weight: 700;
    transition:
      transform var(--transition-fast),
      background var(--transition-fast);
  }

  a:first-child {
    color: #fffdf8;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
    box-shadow: var(--shadow-md);
  }

  a:last-child {
    border: 1px solid var(--border-light);
    background: rgba(255, 255, 255, 0.72);
    color: var(--font-dark);
  }

  a:hover {
    transform: translateY(-1px);
  }
`;

export const PrivacyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
  margin: 1.6rem 0 3.4rem;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const PrivacyCard = styled.article`
  padding: 2rem;
  border: 1px solid var(--border-light);
  border-radius: 2.2rem;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: var(--shadow-sm);

  span {
    display: block;
    margin-bottom: 0.8rem;
    color: var(--accent-primary);
    font-size: 1.1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    color: var(--font-title);
    font-size: 1.9rem;
    line-height: 1.35;
  }

  p {
    margin: 0.6rem 0 0;
    color: var(--font-main);
    font-size: 1.5rem;
    line-height: 1.65;
  }
`;

export const PrivacySection = styled.section`
  margin-top: 1.4rem;
  padding: clamp(2.2rem, 4vw, 3.2rem);
  border: 1px solid var(--border-light);
  border-radius: 2.4rem;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: var(--shadow-sm);

  h2 {
    margin: 0 0 1.2rem;
    color: var(--font-title);
    font-size: clamp(2.3rem, 3vw, 3.2rem);
    line-height: 1.15;
    letter-spacing: -0.035em;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.65rem;
    line-height: 1.8;
  }

  p + p {
    margin-top: 1rem;
  }

  a {
    color: var(--accent-primary);
    font-weight: 700;
  }
`;

export const PrivacyList = styled.ul`
  display: grid;
  gap: 0.8rem;
  margin: 1.2rem 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding: 1.1rem 1.3rem 1.1rem 3.6rem;
    border-radius: 1.5rem;
    background: rgba(248, 244, 236, 0.9);
    color: var(--font-main);
    font-size: 1.58rem;
    line-height: 1.65;
  }

  li::before {
    content: '';
    position: absolute;
    left: 1.4rem;
    top: 1.8rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 999px;
    background: var(--accent-primary);
  }
`;

export const PrivacyNotice = styled.p`
  margin-top: 1.4rem !important;
  padding: 1.4rem 1.6rem;
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 1.6rem;
  background: rgba(43, 98, 86, 0.08);
  color: var(--font-dark) !important;
`;

import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../Styled/mediaqueries';

export const SeoWrap = styled.div`
  width: 100%;
  max-width: calc(var(--max-width) + 10vw);
  margin: 0 auto;
  padding: 13rem 5vw 2rem;
`;

export const SeoHero = styled.section`
  padding: clamp(3rem, 6vw, 5.8rem);
  border: 1px solid var(--border-light);
  border-radius: 3.2rem;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(247, 241, 232, 0.78));
  box-shadow: var(--shadow-md);

  &.is-featured {
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(233, 241, 238, 0.86));
  }
`;

export const SeoEyebrow = styled.span`
  display: inline-flex;
  margin-bottom: 1.4rem;
  color: var(--accent-primary);
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SeoHeroFigure = styled.figure`
  margin: 3rem 0 0;
  overflow: hidden;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.8);

  img { display: block; width: 100%; height: auto; }
  figcaption { padding: 1.4rem 1.8rem; font-size: 1.4rem; line-height: 1.7; color: var(--font-main); }
  a { color: var(--accent-primary); text-decoration: underline; text-underline-offset: 0.2em; }
`;

export const SeoTitle = styled.h1`
  max-width: 92rem;
  margin: 0 0 1.6rem;
  color: var(--font-title);
  font-size: clamp(4rem, 7vw, 7rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
`;

export const SeoLead = styled.p`
  max-width: 86rem;
  margin: 0;
  color: var(--font-main);
  font-size: 1.85rem;
  line-height: 1.75;
`;

export const SeoActions = styled.div`
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

  &.seo-actions--bottom a {
    color: #fffdf8;
    border: 0;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
  }

  a:hover {
    transform: translateY(-1px);
  }
`;

export const SeoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
  margin: 1.6rem 0 3.4rem;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const SeoCard = styled.article`
  padding: 2rem;
  border: 1px solid var(--border-light);
  border-radius: 2.2rem;
  background: #edf1e5;
  box-shadow: none;

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

export const SeoSection = styled.section`
  scroll-margin-top: 12rem;
  &.service-section--quote { background: #e5ecdf; border: 2px solid #b8c9ad; padding: 3.4rem; }
  margin-top: 3.4rem;
  padding: clamp(2rem, 3vw, 3rem);
  border: 1px solid var(--border-light);
  border-radius: 2.4rem;
  background: #fffdf8;
  box-shadow: none;

  h2 {
    margin: 0 0 1.2rem;
    color: var(--font-title);
    font-size: clamp(2.8rem, 3.4vw, 4.2rem);
    line-height: 1.15;
    letter-spacing: -0.035em;
  }

  p {
    max-width: 92rem;
    margin: 0;
    color: var(--font-main);
    font-size: 1.65rem;
    line-height: 1.8;
  }
`;

export const SeoList = styled.ul`
  display: grid;
  gap: 0.8rem;
  margin: 0;
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

export const SeoLinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.6rem;

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const SeoLinkCard = styled(Link)`
  padding: 1.6rem;
  border: 1px solid var(--border-light);
  border-radius: 1.8rem;
  background: rgba(248, 244, 236, 0.9);
  color: var(--font-title);
  transition:
    transform var(--transition-fast),
    background var(--transition-fast);

  span {
    display: block;
    margin-bottom: 0.7rem;
    color: var(--accent-primary);
    font-size: 1.05rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    color: var(--font-title);
    font-size: 1.65rem;
    line-height: 1.35;
  }

  p {
    margin: 0.7rem 0 0;
    font-size: 1.38rem;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.92);
  }
`;

export const SeoFaq = styled.div`
  && details { padding: 2rem; box-shadow: none; }
  details::before { display: none; }
  summary { cursor: pointer; color: var(--font-title); font-size: 1.9rem; line-height: 1.5; }
  details[open] summary { margin-bottom: 1.2rem; }
  summary:focus-visible { outline: 3px solid #ad7726; outline-offset: 4px; }
  display: grid;
  gap: 1rem;

  details {
    position: relative;
    min-width: 0;
    padding: 1.6rem 1.6rem 1.6rem 4.2rem;
    border: 1px solid rgba(35, 48, 44, 0.1);
    border-radius: 1.8rem;
    background: rgba(255, 255, 255, 0.86);
    box-shadow: 0 10px 24px rgba(40, 48, 45, 0.04);
    transition:
      transform var(--transition-fast),
      border-color var(--transition-fast),
      background var(--transition-fast),
      box-shadow var(--transition-fast);
  }

  details::before {
    content: '';
    position: absolute;
    top: 1.75rem;
    left: 1.6rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 0.55rem rgba(43, 98, 86, 0.1);
  }

  details:hover {
    transform: translateY(-2px);
    border-color: rgba(43, 98, 86, 0.2);
    background: rgba(255, 255, 255, 0.94);
    box-shadow: var(--shadow-sm);
  }

  h3 {
    margin: 0 0 0.8rem;
    color: var(--font-title);
    font-size: 1.8rem;
  }

  p {
    margin: 0;
  }
`;

import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../Styled/mediaqueries';

export const LocalWrap = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 13rem 5vw 2rem;
`;

export const LocalHero = styled.section`
  position: relative;
  padding: clamp(3rem, 6vw, 5.8rem);
  overflow: hidden;
  border: 1px solid var(--border-light);
  border-radius: 3.2rem;
  background:
    radial-gradient(circle at 90% 12%, rgba(215, 180, 106, 0.24), transparent 28%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(247, 241, 232, 0.74));
  box-shadow: var(--shadow-md);

  &::after {
    content: '';
    position: absolute;
    right: -7rem;
    bottom: -8rem;
    width: 24rem;
    height: 24rem;
    border: 1px solid rgba(43, 98, 86, 0.14);
    border-radius: 999px;
    pointer-events: none;
  }
`;

export const LocalEyebrow = styled.span`
  display: inline-flex;
  margin-bottom: 1.4rem;
  color: var(--accent-primary);
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const LocalTitle = styled.h1`
  max-width: 86rem;
  margin: 0 0 1.6rem;
  color: var(--font-title);
  font-size: clamp(4rem, 7vw, 7rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
`;

export const LocalLead = styled.p`
  max-width: 78rem;
  margin: 0;
  color: var(--font-main);
  font-size: 1.85rem;
  line-height: 1.75;
`;

export const LocalActions = styled.div`
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

  &.local-actions--bottom {
    margin-top: 1.8rem;
  }

  &.local-actions--bottom a:last-child,
  &.local-actions--bottom a:first-child {
    color: #fffdf8;
    border: 0;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
  }

  a:hover {
    transform: translateY(-1px);
  }
`;

export const LocalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
  margin: 1.6rem 0 3.4rem;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const LocalCard = styled.article`
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

export const LocalSection = styled.section`
  margin-top: 1.4rem;
  padding: clamp(2.2rem, 4vw, 3.2rem);
  border: 1px solid var(--border-light);
  border-radius: 2.4rem;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: var(--shadow-sm);

  h2 {
    margin: 0 0 1.2rem;
    color: var(--font-title);
    font-size: clamp(2.4rem, 3vw, 3.4rem);
    line-height: 1.15;
    letter-spacing: -0.035em;
  }

  p {
    max-width: 86rem;
    margin: 0;
    color: var(--font-main);
    font-size: 1.65rem;
    line-height: 1.8;
  }
`;

export const LocalList = styled.ul`
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

export const LocalServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 1.6rem;

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const LocalServiceLink = styled(Link)`
  padding: 1.2rem 1.3rem;
  border: 1px solid var(--border-light);
  border-radius: 1.5rem;
  background: rgba(248, 244, 236, 0.9);
  color: var(--font-title);
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.4;
  transition:
    transform var(--transition-fast),
    background var(--transition-fast);

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.92);
  }
`;

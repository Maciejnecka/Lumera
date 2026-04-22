import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../Styled/mediaqueries';

export const DetailPageWrap = styled.div`
  padding: 13rem 5vw 4rem;
  overflow: hidden;
`;

export const DetailHero = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
  gap: 4rem;
  align-items: center;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const DetailHeroCopy = styled.div`
  max-width: 66rem;
  min-width: 0;
`;

export const DetailHeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.1rem;
`;

export const DetailBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 4rem;
  padding: 0 1.3rem;
  border: 1px solid rgba(43, 98, 86, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.62);
  color: var(--accent-primary);
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0 10px 22px rgba(40, 48, 45, 0.06);
  transition:
    transform var(--transition-fast),
    background var(--transition-fast);

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.84);
  }
`;

export const DetailHeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 4rem;
  padding: 0.85rem 1.4rem;
  border: 1px solid var(--border-light);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  color: var(--accent-primary);
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const DetailHeroTitle = styled.h1`
  margin: 2.1rem 0 1.6rem;
  color: var(--font-title);
  font-size: clamp(4rem, 5vw, 6rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
`;

export const DetailHeroLead = styled.p`
  margin: 0;
  color: var(--font-main);
  font-size: 1.8rem;
  line-height: 1.8;
`;

export const DetailHeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 2.6rem;
  min-width: 0;

  a,
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 5rem;
    padding: 0 1.9rem;
    border: 0;
    border-radius: 999px;
    font-family: inherit;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
  }

  a:first-child,
  button:first-child {
    color: #fffdf8;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
    box-shadow: var(--shadow-md);
  }

  a:last-child,
  button:last-child {
    color: var(--font-dark);
    border: 1px solid var(--border-light);
    background: rgba(255, 255, 255, 0.76);
  }
`;

export const DetailHeroVisual = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  display: grid;
  gap: 1.6rem;

  img {
    width: 100%;
    display: block;
    border-radius: 3rem;
    box-shadow: var(--shadow-lg);
    background: rgba(255, 255, 255, 0.7);
  }
`;

export const DetailHeroCard = styled.div`
  box-sizing: border-box;
  width: min(100%, 52rem);
  justify-self: end;
  padding: 1.9rem 2.1rem;
  border: 1px solid var(--border-light);
  border-radius: 2rem;
  background: rgba(255, 249, 240, 0.9);
  box-shadow: var(--shadow-md);

  span {
    display: block;
    margin-bottom: 0.7rem;
    color: var(--accent-primary);
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  strong {
    color: var(--font-title);
    font-size: 1.7rem;
    line-height: 1.45;
  }

  ${media.sm`
    width: 100%;
  `}
`;

export const DetailSection = styled.section`
  max-width: var(--max-width);
  margin: 5.2rem auto 0;
`;

export const DetailSectionIntro = styled.div`
  max-width: 78rem;
  margin-bottom: 2rem;

  span {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--accent-primary);
    font-size: 1.2rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 1.4rem;
    color: var(--font-title);
    font-size: clamp(2.8rem, 4vw, 4.6rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.65rem;
    line-height: 1.8;
  }
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.8rem;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const DetailPanel = styled.article`
  padding: 2.6rem;
  border: 1px solid var(--border-light);
  border-radius: 2.4rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-sm);

  &.detail-panel--wide {
    margin-top: 1.8rem;
  }

  h3 {
    margin: 0 0 1.4rem;
    color: var(--font-title);
    font-size: 2.3rem;
  }
`;

export const DetailList = styled.ul`
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 1.2rem 1.4rem;
    border-radius: 1.6rem;
    background: rgba(248, 244, 236, 0.92);
    color: var(--font-main);
    font-size: 1.6rem;
    line-height: 1.7;
  }
`;

export const DetailText = styled.p`
  margin: 0;
  color: var(--font-main);
  font-size: 1.65rem;
  line-height: 1.8;
`;

export const DetailDecisionLead = styled.p`
  max-width: 86rem;
  margin: 0;
  color: var(--font-main);
  font-size: 1.7rem;
  line-height: 1.85;
`;

export const DetailSpecs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.4rem;

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const DetailSpecCard = styled.article`
  min-height: 14rem;
  padding: 2rem;
  border: 1px solid var(--border-light);
  border-radius: 2.2rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(248, 244, 236, 0.9));
  box-shadow: var(--shadow-sm);

  span {
    display: block;
    margin-bottom: 1rem;
    color: var(--accent-primary);
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  strong {
    display: block;
    color: var(--font-title);
    font-size: 1.65rem;
    font-weight: 600;
    line-height: 1.55;
  }
`;

export const DetailFaq = styled.div`
  display: grid;
  gap: 1.2rem;
`;

export const DetailFaqItem = styled.article`
  padding: 2.2rem 2.4rem;
  border: 1px solid var(--border-light);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-sm);

  h3 {
    margin: 0 0 0.9rem;
    color: var(--font-title);
    font-size: 2rem;
    line-height: 1.3;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.58rem;
    line-height: 1.75;
  }
`;

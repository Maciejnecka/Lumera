import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const PricingWrap = styled.div`
  width: 100%;
  padding: 14rem 5vw 7rem;
`;

export const PricingHero = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 5rem;
  padding: clamp(2.4rem, 4vw, 4rem);
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 3.2rem;
  background:
    radial-gradient(circle at top right, rgba(215, 180, 106, 0.18), transparent 24%),
    radial-gradient(circle at left bottom, rgba(43, 98, 86, 0.12), transparent 30%),
    linear-gradient(180deg, rgba(255, 252, 246, 0.96) 0%, rgba(247, 242, 234, 0.9) 100%);
  box-shadow: var(--shadow-md);
`;

export const PricingEyebrow = styled.span`
  display: inline-block;
  margin: 1.2rem 0 1rem;
  color: var(--accent-primary);
  font-size: 1.3rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const PricingTitle = styled.h1`
  max-width: 82rem;
  margin: 0;
  color: var(--font-title);
  font-size: clamp(3.2rem, 5vw, 5.4rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
`;

export const PricingLead = styled.p`
  max-width: 79rem;
  margin: 2rem 0 0;
  color: var(--font-main);
  font-size: 1.8rem;
  line-height: 1.8;
`;

export const PricingActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.2rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 4.8rem;
    padding: 0 1.7rem;
    border-radius: 999px;
    font-size: 1.45rem;
    font-weight: 600;
  }

  a:first-child {
    color: #fffdf8;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
    box-shadow: var(--shadow-sm);
  }

  a:last-child {
    border: 1px solid rgba(35, 48, 44, 0.12);
    color: var(--font-dark);
    background: rgba(255, 255, 255, 0.58);
  }
`;

export const PricingHeroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
  margin-top: 2.6rem;

  ${media.md`
    grid-template-columns: 1fr;
  `}
`;

export const PricingHeroCard = styled.article`
  padding: 1.7rem 1.8rem;
  border: 1px solid rgba(35, 48, 44, 0.08);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.68);

  span {
    display: inline-block;
    margin-bottom: 0.8rem;
    color: var(--font-muted);
    font-size: 1.15rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin-bottom: 0.8rem;
    color: var(--font-title);
    font-size: 2rem;
    line-height: 1.15;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.5rem;
    line-height: 1.7;
  }
`;

export const PricingNotice = styled.p`
  margin: 2rem 0 0;
  padding: 1.45rem 1.6rem;
  border-left: 4px solid rgba(43, 98, 86, 0.42);
  border-radius: 1.4rem;
  background: rgba(43, 98, 86, 0.06);
  color: var(--font-dark);
  font-size: 1.55rem;
  line-height: 1.75;
`;

export const PricingSection = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 4.2rem;
`;

export const PricingSectionHeading = styled.div`
  margin-bottom: 2rem;

  span {
    display: inline-block;
    margin-bottom: 0.9rem;
    color: var(--accent-primary);
    font-size: 1.2rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 80rem;
    margin: 0;
    color: var(--font-title);
    font-size: clamp(2.8rem, 4vw, 4.4rem);
    line-height: 1.02;
    letter-spacing: -0.045em;
  }

  p {
    max-width: 86rem;
    margin: 1.2rem 0 0;
    color: var(--font-main);
    font-size: 1.7rem;
    line-height: 1.8;
  }
`;

export const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.8rem;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const PricingCard = styled.article`
  display: grid;
  grid-template-columns: 17rem minmax(0, 1fr);
  min-width: 0;
  border: 1px solid rgba(35, 48, 44, 0.08);
  border-radius: 2.6rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-sm);

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const PricingCardMedia = styled.div`
  min-height: 100%;
  padding: 2rem 1.4rem;
  background:
    linear-gradient(180deg, rgba(43, 98, 86, 0.1) 0%, rgba(215, 180, 106, 0.14) 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 11rem;
    height: auto;
    filter: drop-shadow(0 18px 24px rgba(32, 46, 41, 0.12));
  }
`;

export const PricingCardBody = styled.div`
  display: grid;
  gap: 1.35rem;
  min-width: 0;
  padding: 2rem;

  h3 {
    margin: 0;
    color: var(--font-title);
    font-size: 2.2rem;
    line-height: 1.1;
  }

  p {
    margin: 0.8rem 0 0;
    color: var(--font-main);
    font-size: 1.55rem;
    line-height: 1.72;
  }

  > a {
    width: fit-content;
    color: var(--accent-primary);
    font-size: 1.45rem;
    font-weight: 600;
  }
`;

export const PricingCardMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  ${media.sm`
    grid-template-columns: 1fr;
  `}

  > div {
    padding: 1.2rem 1.2rem 1.15rem;
    border-radius: 1.6rem;
    background: rgba(247, 241, 233, 0.7);
  }
`;

export const PricingLabel = styled.span`
  display: block;
  margin-bottom: 0.6rem;
  color: var(--font-muted);
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const PricingValue = styled.strong`
  display: block;
  color: var(--font-title);
  font-size: 1.95rem;
  line-height: 1.15;
`;

export const PricingPill = styled.span`
  display: inline-block;
  min-height: 3.2rem;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  color: var(--font-dark);
  font-size: 1.32rem;
  font-weight: 600;
  line-height: 1.5;
  white-space: normal;
  background: rgba(255, 255, 255, 0.82);
`;

export const PricingCardNote = styled.p`
  margin: 0;
  color: var(--font-dark);
  font-size: 1.48rem;
  line-height: 1.72;
`;

export const PricingFactorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.2rem;

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const PricingFactorCard = styled.article`
  padding: 1.45rem 1.4rem;
  border: 1px solid rgba(35, 48, 44, 0.08);
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.72);
  color: var(--font-dark);
  font-size: 1.48rem;
  line-height: 1.7;
`;

export const PricingProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.6rem;

  ${media.md`
    grid-template-columns: 1fr;
  `}
`;

export const PricingProcessCard = styled.article`
  padding: 1.8rem;
  border: 1px solid rgba(35, 48, 44, 0.08);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow-sm);

  h3 {
    margin: 0.9rem 0 0.8rem;
    color: var(--font-title);
    font-size: 2rem;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.52rem;
    line-height: 1.72;
  }
`;

export const PricingProcessStep = styled.span`
  width: 4.1rem;
  height: 4.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fffdf8;
  font-size: 1.6rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
`;

export const PricingFinalCta = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: clamp(2rem, 3vw, 3rem);
  border-radius: 3rem;
  background: linear-gradient(135deg, #203b34 0%, #1a2f2a 100%);
  box-shadow: 0 26px 52px rgba(18, 28, 26, 0.18);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  ${media.md`
    flex-direction: column;
    align-items: flex-start;
  `}

  span {
    display: inline-block;
    margin-bottom: 0.9rem;
    color: rgba(242, 231, 199, 0.76);
    font-size: 1.15rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 72rem;
    margin: 0;
    color: #fff8ec;
    font-size: clamp(2.6rem, 4vw, 4.1rem);
    line-height: 1.04;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 72rem;
    margin: 1.2rem 0 0;
    color: rgba(255, 248, 236, 0.76);
    font-size: 1.65rem;
    line-height: 1.76;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 5rem;
    padding: 0 1.8rem;
    border-radius: 999px;
    flex: 0 0 auto;
    color: #183329;
    background: linear-gradient(135deg, #f2e7c7, #e4d4a8);
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

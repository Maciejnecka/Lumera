import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const HeroSection = styled.header`
  position: relative;
  isolation: isolate;
  padding: 13rem 5vw 7.5rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: clamp(10rem, 16vw, 18rem);
    background: linear-gradient(
      180deg,
      rgba(247, 241, 233, 0) 0%,
      rgba(247, 241, 233, 0.46) 42%,
      rgba(247, 241, 233, 0.78) 68%,
      rgba(247, 241, 233, 0.32) 88%,
      rgba(247, 241, 233, 0) 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 4rem;
  align-items: center;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const HeroCopy = styled.div`
  max-width: 64rem;
  min-width: 0;
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.4rem;
  border: 1px solid var(--border-light);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  color: var(--accent-primary);
  font-size: 1.25rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  margin: 2.2rem 0 1.8rem;
  color: var(--font-title);
  font-size: clamp(4.1rem, 6vw, 6.8rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
`;

export const HeroLead = styled.p`
  margin: 0;
  font-size: 1.85rem;
  line-height: 1.8;
  color: var(--font-main);
`;

export const HeroLocation = styled.p`
  width: fit-content;
  max-width: 100%;
  margin: 1.8rem 0 0;
  padding: 1rem 1.35rem;
  border: 1px solid rgba(43, 98, 86, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  color: var(--accent-primary);
  font-size: 1.48rem;
  font-weight: 700;
  line-height: 1.45;
  overflow-wrap: anywhere;

  ${media.md`
    width: 100%;
    border-radius: 2.4rem;
  `}

  ${media.sm`
    padding: 1.15rem 1.35rem;
    border-radius: 2rem;
    font-size: 1.38rem;
    line-height: 1.55;
  `}
`;

export const HeroPromise = styled.div`
  position: relative;
  margin: 2rem 0 0;
  padding: 2rem 2.1rem;
  overflow: hidden;
  border: 1px solid rgba(43, 98, 86, 0.18);
  border-radius: 2.4rem;
  background:
    linear-gradient(135deg, rgba(255, 249, 240, 0.96), rgba(230, 239, 225, 0.82)),
    radial-gradient(circle at top right, rgba(244, 214, 139, 0.38), transparent 38%);
  box-shadow: var(--shadow-md);

  &::before {
    content: '';
    position: absolute;
    inset: 1.1rem auto 1.1rem 0;
    width: 0.45rem;
    border-radius: 999px;
    background: linear-gradient(180deg, var(--accent-primary), #d8b55a);
  }

  span {
    display: block;
    margin-bottom: 0.7rem;
    color: var(--accent-primary);
    font-size: 1.18rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    color: var(--font-title);
    font-size: clamp(2rem, 2.5vw, 2.55rem);
    line-height: 1.18;
    letter-spacing: -0.035em;
  }

  p {
    max-width: 55rem;
    margin: 0.9rem 0 1.4rem;
    color: var(--font-main);
    font-size: 1.52rem;
    line-height: 1.65;
  }
`;

export const HeroPromiseLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 4.4rem;
  padding: 0 1.7rem;
  border-radius: 999px;
  background: rgba(43, 98, 86, 0.1);
  color: var(--accent-primary);
  font-size: 1.35rem;
  font-weight: 800;
  transition: transform var(--transition), background var(--transition);

  &:hover {
    transform: translateY(-2px);
    background: rgba(43, 98, 86, 0.16);
  }
`;

export const HeroHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem 0;
`;

export const HighlightItem = styled.span`
  padding: 1.2rem 1.5rem;
  border: 1px solid var(--border-light);
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: var(--shadow-sm);
  color: var(--font-dark);
  font-size: 1.45rem;
  font-weight: 500;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  min-width: 0;
`;

const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 5.4rem;
  padding: 0 2.1rem;
  border-radius: 999px;
  font-size: 1.5rem;
  font-weight: 700;
  transition: transform var(--transition), box-shadow var(--transition);

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PrimaryButton = styled.a`
  ${buttonStyles}
  color: #fffdf8;
  background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
  box-shadow: var(--shadow-md);
`;

export const SecondaryButton = styled.a`
  ${buttonStyles}
  color: var(--font-dark);
  border: 1px solid var(--border-light);
  background: rgba(255, 255, 255, 0.76);
`;

export const HeroImageWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: 58rem;

  ${media.lg`
    min-height: auto;
    padding-bottom: 8rem;
  `}

  ${media.sm`
    padding-bottom: 0;
  `}
`;

export const HeroImageFrame = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  min-height: 58rem;
  border-radius: 3.2rem;
  box-shadow: var(--shadow-lg);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  ${media.lg`
    min-height: 46rem;
  `}

  ${media.sm`
    min-height: 34rem;
  `}
`;

export const HeroStatCard = styled.div`
  position: absolute;
  box-sizing: border-box;
  max-width: 24rem;
  padding: 1.8rem;
  border: 1px solid var(--border-light);
  border-radius: 2rem;
  background: rgba(255, 249, 240, 0.95);
  box-shadow: var(--shadow-md);

  span {
    display: block;
    margin-bottom: 0.8rem;
    color: var(--accent-primary);
    font-size: 1.15rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  strong {
    color: var(--font-title);
    font-size: 1.8rem;
    line-height: 1.45;
  }

  &.hero-card--top {
    top: 2.8rem;
    left: -2rem;
  }

  &.hero-card--bottom {
    right: -2rem;
    bottom: 3rem;
  }

  ${media.lg`
    &.hero-card--top {
      left: 1.6rem;
    }

    &.hero-card--bottom {
      right: 1.6rem;
    }
  `}

  ${media.sm`
    position: static;
    max-width: none;
    margin-top: 1.4rem;
  `}
`;

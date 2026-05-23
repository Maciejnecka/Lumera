import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const AboutSectionWrap = styled.section`
  position: relative;
  isolation: isolate;
  padding: 7.2rem 5vw 7rem;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(247, 241, 233, 0.06) 0%,
    rgba(248, 244, 236, 0.34) 36%,
    rgba(247, 241, 233, 0.12) 100%
  );

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: clamp(9rem, 14vw, 16rem);
    background: linear-gradient(
      180deg,
      rgba(247, 241, 233, 0) 0%,
      rgba(247, 241, 233, 0.62) 70%,
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

export const AboutShell = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(32rem, 46rem);
  gap: clamp(1.6rem, 3vw, 2.6rem);
  align-items: stretch;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const AboutHero = styled.div`
  min-width: 0;
  padding: clamp(2.8rem, 5vw, 4.8rem);
  border: 1px solid rgba(35, 48, 44, 0.09);
  border-radius: 2.8rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-md);
`;

export const AboutKicker = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 3.6rem;
  padding: 0 1.25rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(43, 98, 86, 0.14);
  border-radius: 999px;
  background: rgba(43, 98, 86, 0.08);
  color: var(--accent-primary);
  font-size: 1.18rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
`;

export const AboutTitle = styled.h2`
  max-width: 82rem;
  margin: 0;
  color: var(--font-title);
  font-size: clamp(3.4rem, 5vw, 5.8rem);
  line-height: 1.04;
  letter-spacing: 0;
`;

export const AboutLead = styled.p`
  max-width: 78rem;
  margin: 1.8rem 0 0;
  color: var(--font-main);
  font-size: clamp(1.75rem, 2vw, 2rem);
  line-height: 1.75;
`;

export const AboutNote = styled.p`
  max-width: 78rem;
  margin: 2rem 0 0;
  padding: 1.8rem 2rem;
  border: 1px solid rgba(43, 98, 86, 0.13);
  border-radius: 1.8rem;
  background: rgba(248, 244, 236, 0.88);
  color: var(--font-dark);
  font-size: 1.55rem;
  line-height: 1.76;
`;

export const ProofPanel = styled.aside`
  min-width: 0;
  height: 100%;
  display: grid;
  align-content: start;
  gap: 1.4rem;
  padding: clamp(2.2rem, 3vw, 2.8rem);
  border: 1px solid rgba(43, 98, 86, 0.13);
  border-radius: 2.8rem;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: var(--shadow-md);
`;

export const ProofHeader = styled.div`
  min-width: 0;

  span {
    display: inline-block;
    margin-bottom: 0.9rem;
    color: var(--accent-primary);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    color: var(--font-title);
    font-size: clamp(2.3rem, 2.8vw, 3rem);
    line-height: 1.16;
    letter-spacing: 0;
  }

  p {
    margin: 1rem 0 0;
    color: var(--font-main);
    font-size: 1.48rem;
    line-height: 1.7;
  }
`;

export const ProofStats = styled.div`
  display: grid;
  gap: 0.9rem;
  min-width: 0;
`;

export const ProofStat = styled.div`
  display: grid;
  gap: 0.45rem;
  align-items: start;
  min-width: 0;
  padding: 1.25rem;
  border: 1px solid rgba(35, 48, 44, 0.08);
  border-radius: 1.6rem;
  background: rgba(248, 244, 236, 0.78);

  strong {
    color: var(--font-title);
    font-size: clamp(2.1rem, 2.8vw, 3rem);
    line-height: 1.05;
    letter-spacing: 0;
    overflow-wrap: anywhere;
  }

  span {
    color: var(--font-main);
    font-size: 1.32rem;
    line-height: 1.55;
  }

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    align-items: center;
  `}

  ${media.sm`
    grid-template-columns: 1fr;
    align-items: start;
  `}
`;

export const PrinciplesGrid = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 1.6rem auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const PrincipleCard = styled.article`
  min-width: 0;
  padding: 1.8rem;
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 1.9rem;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast),
    box-shadow var(--transition-fast);

  span {
    display: block;
    margin-bottom: 0.7rem;
    color: var(--font-title);
    font-size: 1.82rem;
    font-weight: 800;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.46rem;
    line-height: 1.68;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(43, 98, 86, 0.24);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: var(--shadow-md);
  }
`;

export const SpacesPanel = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 1.6rem auto 0;
  padding: clamp(2.2rem, 3vw, 3rem);
  border: 1px solid rgba(35, 48, 44, 0.09);
  border-radius: 2.8rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-md);
  min-width: 0;
`;

export const SpacesHeader = styled.div`
  max-width: 82rem;
  min-width: 0;

  span {
    display: inline-block;
    margin-bottom: 0.8rem;
    color: var(--accent-primary);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    color: var(--font-title);
    font-size: clamp(2.6rem, 3.5vw, 4rem);
    line-height: 1.12;
    letter-spacing: 0;
  }

  p {
    margin: 1rem 0 0;
    color: var(--font-main);
    font-size: 1.58rem;
    line-height: 1.72;
  }
`;

export const SpacesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 0.9rem;
  margin-top: 1.8rem;
  min-width: 0;
`;

export const SpaceCard = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 5rem;
  padding: 1rem 1.25rem;
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 999px;
  background: rgba(43, 98, 86, 0.08);
  color: var(--accent-primary);
  font-size: 1.38rem;
  font-weight: 800;
  line-height: 1.25;
  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    color var(--transition-fast);

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    flex: 0 0 auto;
    margin-right: 0.85rem;
    border-radius: 999px;
    background: currentColor;
    box-shadow: 0 0 0 0.45rem rgba(43, 98, 86, 0.09);
  }

  &:hover {
    transform: translateY(-1px);
    background: var(--accent-primary);
    color: #fffdf8;
  }
`;

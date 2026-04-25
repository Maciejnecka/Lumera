import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const ProjectsWrap = styled.section`
  position: relative;
  isolation: isolate;
  padding: 6rem 5vw 6.8rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: clamp(6rem, 10vw, 11rem);
    background: linear-gradient(
      180deg,
      rgba(247, 241, 233, 0) 0%,
      rgba(247, 241, 233, 0.58) 58%,
      rgba(247, 241, 233, 0.88) 86%,
      rgba(247, 241, 233, 1) 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const SectionIntro = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2.6rem;
  min-width: 0;

  span {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--accent-primary);
    font-size: 1.25rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 86rem;
    margin: 0 0 1.6rem;
    color: var(--font-title);
    font-size: clamp(3rem, 4vw, 4.8rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 74rem;
    margin: 0;
    color: var(--font-main);
    font-size: 1.75rem;
    line-height: 1.85;
  }
`;

export const ProjectsGrid = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.8rem;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const ProjectCard = styled.article`
  min-width: 0;
  min-height: 28rem;
  padding: 2.6rem;
  border: 1px solid var(--border-light);
  border-radius: 2.4rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.7), rgba(249, 244, 236, 0.9)),
    repeating-linear-gradient(
      -45deg,
      rgba(208, 191, 156, 0.18),
      rgba(208, 191, 156, 0.18) 14px,
      rgba(255, 255, 255, 0.2) 14px,
      rgba(255, 255, 255, 0.2) 28px
    );
  box-shadow: var(--shadow-sm);

  span {
    display: inline-block;
    margin-bottom: 1.2rem;
    color: var(--accent-primary);
    font-size: 1.15rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 1.4rem;
    color: var(--font-title);
    font-size: 2.4rem;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.65rem;
    line-height: 1.8;
  }
`;

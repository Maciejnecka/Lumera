import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../Styled/mediaqueries';

export const RelatedProjectsWrap = styled.section`
  max-width: var(--max-width);
  margin: 5.2rem auto 0;
`;

export const RelatedProjectsIntro = styled.div`
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
    margin: 0 0 1.2rem;
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

export const RelatedProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.3rem;

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const RelatedProjectCard = styled(Link)`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border: 1px solid var(--border-light);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.78);
  color: var(--font-title);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    box-shadow var(--transition-fast);

  &::before,
  &::after {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 4;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, calc(-50% + 0.8rem));
    transition:
      opacity var(--transition-fast),
      transform var(--transition-fast);
  }

  &::before {
    content: '';
    inset: 0;
    left: 0;
    top: 0;
    background:
      linear-gradient(135deg, rgba(24, 45, 39, 0.34), rgba(43, 98, 86, 0.52)),
      rgba(22, 28, 26, 0.18);
    transform: none;
  }

  &::after {
    content: 'Zobacz realizację';
    width: max-content;
    max-width: calc(100% - 3rem);
    padding: 0.9rem 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.56);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.9);
    color: var(--accent-primary);
    font-size: 1.28rem;
    font-weight: 900;
    letter-spacing: 0.02em;
    text-align: center;
    box-shadow: 0 1rem 2.4rem rgba(17, 27, 24, 0.16);
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.94);
    box-shadow: var(--shadow-md);
  }

  &:hover::before,
  &:hover::after,
  &:focus-visible::before,
  &:focus-visible::after {
    opacity: 1;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: translate(-50%, -50%);
  }
`;

export const RelatedProjectImage = styled.div`
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: rgba(233, 241, 238, 0.72);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition:
      filter var(--transition-fast),
      transform var(--transition-fast);
  }

  ${RelatedProjectCard}:hover & img,
  ${RelatedProjectCard}:focus-visible & img {
    filter: saturate(0.82) brightness(0.76);
    transform: scale(1.025);
  }
`;

export const RelatedProjectBody = styled.div`
  padding: 1.6rem;

  span {
    display: block;
    margin-bottom: 0.75rem;
    color: var(--accent-primary);
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    color: var(--font-title);
    font-size: 1.75rem;
    line-height: 1.35;
  }

  p {
    margin: 0.8rem 0 0;
    color: var(--font-main);
    font-size: 1.38rem;
    line-height: 1.6;
  }
`;

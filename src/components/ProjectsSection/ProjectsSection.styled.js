import styled from 'styled-components';
import Link from 'next/link';
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
  max-width: calc(93rem + 2.5rem);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  min-width: 0;

  > * {
    flex: 0 1 31rem;
  }

  ${media.sm`
    > * {
      flex-basis: 100%;
    }
  `}
`;

export const ProjectCard = styled(Link)`
  position: relative;
  isolation: isolate;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--border-light);
  border-radius: 2.2rem;
  background: rgba(255, 255, 255, 0.8);
  color: var(--font-title);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    border-color var(--transition-fast),
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
    border-color: rgba(43, 98, 86, 0.22);
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

export const ProjectCardImage = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
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

  span {
    position: absolute;
    left: 1.2rem;
    bottom: 1.2rem;
    max-width: calc(100% - 2.4rem);
    padding: 0.65rem 1rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.88);
    color: var(--accent-primary);
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  ${ProjectCard}:hover & img,
  ${ProjectCard}:focus-visible & img {
    filter: saturate(0.82) brightness(0.76);
    transform: scale(1.025);
  }
`;

export const ProjectCardBody = styled.div`
  padding: 1.35rem;

  h3 {
    margin: 0 0 0.75rem;
    color: var(--font-title);
    font-size: 1.78rem;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.34rem;
    line-height: 1.6;
  }
`;

export const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 0.85rem;

  span {
    padding: 0.45rem 0.75rem;
    border-radius: 999px;
    background: rgba(248, 244, 236, 0.94);
    color: var(--accent-primary);
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

export const ProjectsActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 4.8rem;
    padding: 0 1.8rem;
    border-radius: 999px;
    color: #fffdf8;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
    font-size: 1.5rem;
    font-weight: 800;
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-fast);
  }

  a:hover {
    transform: translateY(-1px);
  }
`;

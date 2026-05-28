import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../Styled/mediaqueries';

export const ProjectsIndexWrap = styled.main`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 13rem 5vw 3rem;
`;

export const ProjectsHero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 0.46fr);
  gap: 2.4rem;
  align-items: stretch;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const ProjectsHeroCopy = styled.div`
  padding: clamp(3rem, 6vw, 5.8rem);
  border: 1px solid var(--border-light);
  border-radius: 3rem;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(233, 241, 238, 0.84));
  box-shadow: var(--shadow-md);

  > span {
    display: inline-flex;
    margin-bottom: 1.3rem;
    color: var(--accent-primary);
    font-size: 1.2rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 92rem;
    margin: 0 0 1.6rem;
    color: var(--font-title);
    font-size: clamp(4rem, 7vw, 7rem);
    line-height: 0.98;
    letter-spacing: -0.055em;
  }

  p {
    max-width: 82rem;
    margin: 0;
    color: var(--font-main);
    font-size: 1.78rem;
    line-height: 1.78;
  }
`;

export const ProjectsHeroPanel = styled(Link)`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: grid;
  align-content: start;
  border: 1px solid rgba(43, 98, 86, 0.14);
  border-radius: 2.8rem;
  background: rgba(255, 255, 255, 0.82);
  color: var(--font-title);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
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
      linear-gradient(135deg, rgba(24, 45, 39, 0.3), rgba(43, 98, 86, 0.5)),
      rgba(22, 28, 26, 0.16);
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

  > img {
    width: 100%;
    height: clamp(14rem, 17vw, 22rem);
    display: block;
    object-fit: cover;
    transition:
      filter var(--transition-fast),
      transform var(--transition-fast);
  }

  > div {
    display: grid;
    gap: 1rem;
    padding: 1.8rem;
  }

  span {
    color: var(--accent-primary);
    font-size: 1.1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  strong {
    color: var(--font-title);
    font-size: clamp(2.5rem, 4vw, 3.6rem);
    line-height: 1.1;
    letter-spacing: -0.035em;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.55rem;
    line-height: 1.75;
  }

  &:hover {
    transform: translateY(-2px);
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

  &:hover > img,
  &:focus-visible > img {
    filter: saturate(0.82) brightness(0.76);
    transform: scale(1.025);
  }
`;

export const ProjectFilters = styled.div`
  display: grid;
  gap: 1.2rem;
  margin: 2.4rem 0;
  padding: 1.4rem;
  border: 1px solid var(--border-light);
  border-radius: 2.2rem;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: var(--shadow-sm);
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;

  span {
    flex: 0 0 auto;
    color: var(--accent-primary);
    font-size: 1.08rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  button {
    min-height: 4rem;
    padding: 0 1.3rem;
    border: 1px solid rgba(43, 98, 86, 0.16);
    border-radius: 999px;
    background: rgba(248, 244, 236, 0.88);
    color: var(--font-title);
    font-family: inherit;
    font-size: 1.38rem;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform var(--transition-fast),
      background var(--transition-fast),
      border-color var(--transition-fast);
  }

  button:hover,
  button.is-active {
    transform: translateY(-1px);
    border-color: rgba(43, 98, 86, 0.28);
    background: rgba(233, 241, 238, 0.94);
  }
`;

export const ProjectsGrid = styled.div`
  width: 100%;
  max-width: calc(90rem + 2.5rem);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;

  > * {
    flex: 0 1 30rem;
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
  background: rgba(233, 241, 238, 0.7);

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

  h2 {
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

export const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 4.8rem;
  margin: 2.2rem auto 0;
  padding: 0 1.8rem;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
  color: #fffdf8;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: var(--shadow-md);
`;

export const EmptyProjects = styled.div`
  padding: 2.4rem;
  border: 1px solid var(--border-light);
  border-radius: 2.2rem;
  background: rgba(255, 255, 255, 0.78);
  color: var(--font-main);
  font-size: 1.6rem;
  line-height: 1.7;
`;

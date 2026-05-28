import styled from 'styled-components';
import Link from 'next/link';
import { media } from '../Styled/mediaqueries';

export const ProjectPageWrap = styled.main`
  padding: 13rem 5vw 4rem;
  overflow: hidden;
`;

export const ProjectHero = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.92fr);
  gap: 4rem;
  align-items: center;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const ProjectHeroCopy = styled.div`
  max-width: 68rem;
  min-width: 0;
`;

export const ProjectEyebrow = styled.span`
  display: inline-flex;
  margin: 1.6rem 0 1.4rem;
  color: var(--accent-primary);
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ProjectTitle = styled.h1`
  margin: 0 0 1.6rem;
  color: var(--font-title);
  font-size: clamp(4rem, 5.6vw, 6.6rem);
  line-height: 0.99;
  letter-spacing: -0.055em;
`;

export const ProjectLead = styled.p`
  margin: 0;
  color: var(--font-main);
  font-size: 1.78rem;
  line-height: 1.8;
`;

export const ProjectMetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.4rem;

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const ProjectMetaCard = styled.article`
  padding: 1.4rem 1.5rem;
  border: 1px solid rgba(43, 98, 86, 0.14);
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: var(--shadow-sm);

  span {
    display: block;
    margin-bottom: 0.55rem;
    color: var(--accent-primary);
    font-size: 1.05rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    color: var(--font-title);
    font-size: 1.55rem;
    line-height: 1.35;
  }
`;

export const ProjectActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.6rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 4.9rem;
    padding: 0 1.8rem;
    border-radius: 999px;
    font-size: 1.5rem;
    font-weight: 800;
    transition: transform var(--transition-fast);
  }

  a:first-child {
    color: #fffdf8;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
    box-shadow: var(--shadow-md);
  }

  a:not(:first-child) {
    border: 1px solid var(--border-light);
    background: rgba(255, 255, 255, 0.76);
    color: var(--font-dark);
  }

  a:hover {
    transform: translateY(-1px);
  }
`;

export const ProjectHeroVisual = styled.figure`
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 3rem;
  background: rgba(233, 241, 238, 0.7);
  box-shadow: var(--shadow-lg);

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  figcaption {
    position: absolute;
    left: 1.5rem;
    bottom: 1.5rem;
    max-width: calc(100% - 3rem);
    padding: 0.75rem 1rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.88);
    color: var(--accent-primary);
    font-size: 1.08rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

export const ProjectSection = styled.section`
  max-width: var(--max-width);
  margin: 5.2rem auto 0;
`;

export const ProjectSectionIntro = styled.div`
  max-width: 82rem;
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

export const ProjectStoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const ProjectStoryCard = styled.article`
  position: relative;
  padding: 2.2rem 2.2rem 2.2rem 4.8rem;
  border: 1px solid var(--border-light);
  border-radius: 2.2rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-sm);

  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 2.55rem;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 0.55rem rgba(43, 98, 86, 0.1);
  }

  h3 {
    margin: 0 0 1rem;
    color: var(--font-title);
    font-size: 2.1rem;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.55rem;
    line-height: 1.75;
  }
`;

export const ProjectList = styled.ul`
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding: 1.15rem 1.35rem 1.15rem 3.6rem;
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

export const ProjectLinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const ProjectLinkCard = styled(Link)`
  padding: 1.7rem;
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
    margin: 0.75rem 0 0;
    color: var(--font-main);
    font-size: 1.38rem;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.92);
  }
`;

export const ProjectNote = styled.div`
  padding: 2.2rem;
  border: 1px solid rgba(43, 98, 86, 0.14);
  border-radius: 2.2rem;
  background: rgba(233, 241, 238, 0.82);
  color: var(--font-title);
  box-shadow: var(--shadow-sm);

  p {
    margin: 0;
    font-size: 1.65rem;
    font-weight: 700;
    line-height: 1.7;
  }
`;

export const ProjectFaq = styled.div`
  display: grid;
  gap: 1rem;

  article {
    position: relative;
    min-width: 0;
    padding: 1.8rem 1.8rem 1.8rem 4.8rem;
    border: 1px solid rgba(35, 48, 44, 0.1);
    border-radius: 1.8rem;
    background: rgba(255, 255, 255, 0.86);
    box-shadow: var(--shadow-sm);
  }

  article::before {
    content: '';
    position: absolute;
    top: 2.05rem;
    left: 1.8rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 0.55rem rgba(43, 98, 86, 0.1);
  }

  h3 {
    margin: 0 0 0.8rem;
    color: var(--font-title);
    font-size: 1.85rem;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.55rem;
    line-height: 1.75;
  }
`;

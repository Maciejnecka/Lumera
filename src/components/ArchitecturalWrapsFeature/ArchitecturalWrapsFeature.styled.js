import styled from 'styled-components';
import { FeaturedFilm } from '../WindowFilmsSection/WindowFilmsSection.styled';

export const WrapFeature = styled(FeaturedFilm)`
  gap: 0;
  background: linear-gradient(120deg, #fffdf8, #f1e9dd);
  scroll-margin-top: 12rem;
`;

export const WrapCopy = styled.div`
  display: grid;
  align-content: center;
  gap: 1.5rem;
  min-width: 0;
  padding: clamp(2rem, 3vw, 3.4rem);
  h3 {
    margin: 0;
    color: var(--font-title);
    font-size: clamp(2.6rem, 3.4vw, 4.2rem);
    line-height: 1.08;
    letter-spacing: -0.035em;
    text-wrap: balance;
  }
  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.62rem;
    line-height: 1.78;
  }
  a:focus-visible { outline: 2px solid var(--accent-primary); outline-offset: 4px; }
`;

export const WrapEyebrow = styled.span`
  color: var(--accent-primary);
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SurfaceLinks = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
    padding: 1.1rem 1.2rem;
    border: 1px solid rgba(43, 98, 86, 0.15);
    border-radius: 1.2rem;
    background: rgba(255,255,255,0.7);
    color: var(--font-title);
    font-size: 1.42rem;
    font-weight: 700;
    line-height: 1.4;
    transition: background var(--transition-fast);
  }
  a:hover { background: rgba(43, 98, 86, 0.08); }
  span { color: var(--accent-primary); }
  @media (max-width: 380px) { grid-template-columns: 1fr; }
`;

export const WrapActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 4.4rem;
    padding: 1rem 1.4rem;
    border: 1px solid rgba(43,98,86,0.18);
    border-radius: 999px;
    color: var(--accent-primary);
    font-size: 1.35rem;
    font-weight: 800;
    line-height: 1.4;
    text-align: center;
  }
  a:first-child { color: #fffdf8; background: var(--accent-primary); }
  a:hover { box-shadow: var(--shadow-sm); }
`;

export const WrapVisual = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-width: 0;
  background: #eee5d8;
  > a { display: grid; align-items: center; min-width: 0; }
  img { display: block; width: 100%; height: auto; }
  a:focus-visible { outline: 2px solid var(--accent-primary); outline-offset: -4px; }
`;

export const WrapProjects = styled.div`
  display: grid;
  gap: 0.9rem;
  padding: 1.6rem clamp(2rem, 3vw, 3rem) 2rem;
  background: rgba(255,255,255,0.6);
  > span { color: var(--font-main); font-size: 1.15rem; letter-spacing: 0.06em; text-transform: uppercase; }
  a { display: flex; justify-content: space-between; gap: 1rem; color: var(--accent-primary); font-size: 1.45rem; font-weight: 700; line-height: 1.5; }
  a:hover { text-decoration: underline; text-underline-offset: 0.3rem; }
`;

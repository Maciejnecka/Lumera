import styled from 'styled-components';
import Link from 'next/link';

export const LocalHubWrap = styled.section`
  position: relative;
  isolation: isolate;
  padding: 6.8rem 5vw 7.2rem;
  overflow: hidden;
  background:
    radial-gradient(circle at 14% 10%, rgba(214, 177, 104, 0.16), transparent 30%),
    radial-gradient(circle at 88% 16%, rgba(43, 98, 86, 0.11), transparent 26%),
    linear-gradient(180deg, rgba(248, 244, 236, 0.72), rgba(247, 241, 233, 0.2));
`;

export const LocalHubHero = styled.header`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2rem;
  padding: clamp(2.8rem, 4.6vw, 4.4rem);
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 3rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(248, 244, 236, 0.92)),
    radial-gradient(circle at top right, rgba(214, 177, 104, 0.14), transparent 34%);
  box-shadow: var(--shadow-md);

  > span {
    display: inline-flex;
    align-items: center;
    min-height: 3.4rem;
    padding: 0 1.2rem;
    margin: 1rem 0 1.3rem;
    border: 1px solid rgba(43, 98, 86, 0.14);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    color: var(--accent-primary);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 82rem;
    margin: 0 0 1.5rem;
    color: var(--font-title);
    font-size: clamp(3.4rem, 5vw, 6rem);
    line-height: 1.03;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 78rem;
    margin: 0;
    color: var(--font-main);
    font-size: 1.78rem;
    line-height: 1.8;
  }

  @media (max-width: 560px) {
    border-radius: 2.4rem;
  }
`;

export const LocalHubGrid = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.6rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const LocalHubCard = styled.article`
  min-width: 0;
  padding: clamp(2.2rem, 3vw, 3rem);
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 2.4rem;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-sm);

  > span {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--accent-primary);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 1rem;
    color: var(--font-title);
    font-size: clamp(2.5rem, 3vw, 3.5rem);
    line-height: 1.12;
    letter-spacing: -0.03em;
  }

  p {
    margin: 0 0 1.6rem;
    color: var(--font-main);
    font-size: 1.58rem;
    line-height: 1.72;
  }
`;

export const LocalHubSection = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2rem;
  padding: clamp(2.2rem, 3vw, 3rem);
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 2.4rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-sm);

  > span {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--accent-primary);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 76rem;
    margin: 0 0 1rem;
    color: var(--font-title);
    font-size: clamp(2.8rem, 3.6vw, 4.2rem);
    line-height: 1.08;
    letter-spacing: -0.035em;
  }

  p {
    max-width: 82rem;
    margin: 0 0 1.8rem;
    color: var(--font-main);
    font-size: 1.62rem;
    line-height: 1.75;
  }
`;

export const CityLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;

  a {
    min-width: 0;
    padding: 1rem 1.15rem;
    border: 1px solid rgba(43, 98, 86, 0.12);
    border-radius: 1.3rem;
    background: rgba(43, 98, 86, 0.06);
    color: var(--accent-primary);
    font-size: 1.38rem;
    font-weight: 800;
    line-height: 1.25;
    transition:
      transform var(--transition-fast),
      background var(--transition-fast),
      color var(--transition-fast);
  }

  a:hover {
    transform: translateY(-2px);
    background: var(--accent-primary);
    color: #fffdf8;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceMatrix = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  article {
    min-width: 0;
    padding: 1.35rem;
    border: 1px solid rgba(43, 98, 86, 0.12);
    border-radius: 1.6rem;
    background: rgba(255, 255, 255, 0.7);
  }

  strong {
    display: block;
    min-height: 4.2rem;
    color: var(--font-title);
    font-size: 1.48rem;
    line-height: 1.25;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    min-height: 3.2rem;
    padding: 0 1rem;
    border-radius: 999px;
    background: rgba(43, 98, 86, 0.08);
    color: var(--accent-primary);
    font-size: 1.25rem;
    font-weight: 800;
  }

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const AreaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    min-height: 3.4rem;
    display: inline-flex;
    align-items: center;
    padding: 0 1.1rem;
    border: 1px solid rgba(43, 98, 86, 0.12);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.62);
    color: var(--font-main);
    font-size: 1.32rem;
    font-weight: 700;
  }
`;

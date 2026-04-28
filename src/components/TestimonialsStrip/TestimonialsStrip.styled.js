import styled, { css } from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const TestimonialsSection = styled.section`
  width: 100%;
  padding: 4rem 5vw 6.4rem;
`;

export const TestimonialsShell = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: clamp(2rem, 3vw, 2.8rem);
  border-radius: 3rem;
  background:
    radial-gradient(circle at top right, rgba(66, 133, 244, 0.12), transparent 26%),
    linear-gradient(180deg, #242529 0%, #1f2023 100%);
  box-shadow: 0 28px 60px rgba(15, 19, 18, 0.2);
`;

export const TestimonialsHeading = styled.div`
  margin-bottom: 2.4rem;

  span {
    display: inline-block;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.72);
    font-size: 1.2rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 82rem;
    margin: 0;
    color: #f4f6f8;
    font-size: clamp(2.6rem, 4vw, 4.1rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }
`;

export const TestimonialsSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.4rem;
  margin-top: 1.7rem;

  strong {
    color: #fbbc04;
    font-size: 1.7rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  span {
    color: rgba(255, 255, 255, 0.62);
    font-size: 1.4rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    padding: 0.95rem 1.35rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    color: #8ab4f8;
    font-size: 1.4rem;
    font-weight: 500;
    transition:
      border-color var(--transition-fast),
      background var(--transition-fast),
      color var(--transition-fast);
  }

  a:hover,
  a:focus-visible {
    border-color: rgba(138, 180, 248, 0.34);
    background: rgba(138, 180, 248, 0.08);
    color: #a8c7fa;
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.6rem;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const ReviewCard = styled.article`
  display: grid;
  align-content: start;
  gap: 1.5rem;
  min-width: 0;
  min-height: 100%;
  padding: 1.8rem 1.8rem 1.7rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2.2rem;
  background: linear-gradient(180deg, #282a2e 0%, #232428 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

export const ReviewCardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const ReviewAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1.15rem;
  min-width: 0;
`;

const avatarTones = {
  orange: css`
    background: linear-gradient(135deg, #ff7a18 0%, #ff5a36 100%);
  `,
  pink: css`
    background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%);
  `,
  violet: css`
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  `,
};

export const ReviewAvatar = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.85rem;
  font-weight: 700;
  ${(props) => avatarTones[props.$tone] || avatarTones.orange}
`;

export const ReviewMeta = styled.div`
  display: grid;
  min-width: 0;
  gap: 0.15rem;

  strong {
    color: #f1f3f4;
    font-size: 1.82rem;
    font-weight: 600;
    line-height: 1.25;
  }

  span {
    color: rgba(255, 255, 255, 0.54);
    font-size: 1.28rem;
    line-height: 1.45;
  }
`;

export const ReviewMenu = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.28rem;
  padding: 0.45rem 0.25rem;

  span {
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.45);
  }
`;

export const ReviewStars = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;

  div {
    display: inline-flex;
    align-items: center;
    gap: 0.15rem;
  }

  svg {
    width: 1.7rem;
    height: 1.7rem;
    fill: #fbbc04;
  }

  span {
    color: rgba(255, 255, 255, 0.64);
    font-size: 1.3rem;
  }

  b {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.55rem;
    border-radius: 0.7rem;
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.82);
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: 0.06em;
  }
`;

export const ReviewBody = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.63rem;
  line-height: 1.75;
`;

export const ReviewFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 0.1rem;

  small {
    color: rgba(255, 255, 255, 0.42);
    font-size: 1.25rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

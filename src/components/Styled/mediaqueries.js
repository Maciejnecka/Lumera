import { css } from 'styled-components';

export const breakpoints = {
  sm: '600px',
  md: '900px',
  lg: '1200px',
};

export const media = {
  sm: (...args) => css`
    @media (max-width: ${breakpoints.sm}) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: ${breakpoints.md}) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${breakpoints.lg}) {
      ${css(...args)}
    }
  `,
};

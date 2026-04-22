import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const FooterWrap = styled.footer`
  margin-top: 6rem;
  padding: 0 5vw 3rem;
  overflow: hidden;
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2.8rem;
  background: linear-gradient(135deg, #203b34, #162723);
  box-shadow: 0 30px 60px rgba(12, 24, 21, 0.24);
`;

export const FooterBrand = styled.div`
  max-width: 72rem;
  margin-bottom: 2.8rem;
  display: flex;
  align-items: center;
  gap: 2.2rem;

  ${media.sm`
    align-items: flex-start;
    flex-direction: column;
    gap: 1.4rem;
  `}
`;

export const FooterLogo = styled.img`
  width: 12.8rem;
  height: auto;
  display: block;
  flex: 0 0 auto;
  margin: -0.8rem 0 -1rem;
  filter:
    drop-shadow(0 12px 18px rgba(0, 0, 0, 0.14))
    brightness(1.15)
    saturate(0.9);

  ${media.sm`
    width: 10.8rem;
    margin: -0.5rem 0 -0.8rem;
  `}
`;

export const FooterBrandText = styled.div`
  max-width: 52rem;

  strong {
    display: block;
    margin-bottom: 0.7rem;
    color: #f2e7c7;
    font-size: 1.35rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: rgba(244, 240, 232, 0.78);
    font-size: 1.58rem;
    line-height: 1.75;
  }
`;

export const FooterCols = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.85fr 1fr 1.05fr;
  align-items: start;
  gap: 2.4rem;

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.md`
    grid-template-columns: 1fr;
  `}
`;

export const FooterCol = styled.div`
  display: grid;
  align-content: start;
  align-self: start;
  min-width: 0;
  gap: 1rem;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(242, 231, 199, 0.14);

  h3 {
    margin: 0 0 0.6rem;
    color: #fffaf0;
    font-size: 1.8rem;
  }

  a,
  span {
    color: rgba(244, 240, 232, 0.78);
    font-size: 1.55rem;
    line-height: 1.7;
  }

  a {
    width: fit-content;
    justify-self: start;
    transition: color var(--transition-fast);
  }

  a:hover,
  a:focus-visible {
    color: #f2e7c7;
  }
`;

export const ContactDetails = styled.ul`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: grid;
    grid-template-columns: 2.7rem minmax(0, 1fr);
    align-items: center;
    gap: 0.75rem;
    width: min(100%, 31rem);
    padding: 0.82rem 0;
    border-bottom: 1px solid rgba(242, 231, 199, 0.1);
  }

  .contact-detail__link {
    grid-column: 1 / -1;
    width: 100%;
    display: grid;
    grid-template-columns: 2.7rem minmax(0, 1fr);
    align-items: center;
    gap: 0.75rem;
    color: inherit;
  }

  li:first-child {
    padding-top: 0;
  }

  li:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  .contact-detail__icon {
    width: 2.7rem;
    height: 2.7rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(242, 231, 199, 0.2);
    border-radius: 999px;
    background: rgba(242, 231, 199, 0.1);
    color: #f2e7c7;
  }

  .contact-detail__icon svg {
    width: 1.3rem;
    height: 1.3rem;
    fill: currentColor;
  }

  .contact-detail__content {
    display: grid;
    min-width: 0;
    gap: 0.1rem;
  }

  .contact-detail__content > span {
    color: rgba(242, 231, 199, 0.78);
    font-size: 1.08rem;
    letter-spacing: 0.08em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  .contact-detail__link,
  strong {
    color: rgba(255, 250, 240, 0.9);
    font-size: 1.42rem;
    font-weight: 500;
    line-height: 1.5;
  }

  .contact-detail__link {
    transition: color var(--transition-fast);
  }

  .contact-detail__link:hover,
  .contact-detail__link:focus-visible {
    color: #f2e7c7;
  }
`;

export const SocialLinks = styled.div`
  display: grid;
  align-content: start;
  gap: 0.8rem;

  a {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 0.9rem;
    transition:
      color var(--transition-fast),
      transform var(--transition-fast);
  }

  a:hover {
    color: #f2e7c7;
    transform: translateX(0.3rem);
  }

  svg {
    width: 2rem;
    height: 2rem;
    flex: 0 0 auto;
    fill: currentColor;
  }
`;

export const BusinessHours = styled.div`
  display: grid;
  width: min(100%, 22rem);
  gap: 0.18rem;

  span {
    display: grid;
    grid-template-columns: minmax(9.8rem, 1fr) max-content;
    align-items: baseline;
    gap: 1rem;
    color: rgba(244, 240, 232, 0.78);
    font-size: 1.42rem;
    line-height: 1.55;
  }

  em,
  b {
    font-style: normal;
    font-weight: 500;
  }

  em {
    white-space: nowrap;
  }

  b {
    color: rgba(255, 250, 240, 0.94);
    text-align: right;
    white-space: nowrap;
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 1.6rem auto 0;
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
  color: var(--font-muted);
  font-size: 1.35rem;

  ${media.md`
    flex-direction: column;
  `}
`;

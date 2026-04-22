import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const ContactWrap = styled.section`
  padding: 6rem 5vw 0;
  overflow: hidden;
`;

export const ContactCard = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr 0.8fr;
  gap: 1.8rem;
  align-items: start;
  min-width: 0;

  .contact-form__target {
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    opacity: 0;
    pointer-events: none;
  }

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

const blockStyles = `
  padding: 2.8rem;
  border: 1px solid var(--border-light);
  border-radius: 2.4rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-sm);
`;

export const ContactIntro = styled.div`
  ${blockStyles}
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
    margin: 0 0 1.6rem;
    color: var(--font-title);
    font-size: clamp(2.8rem, 4vw, 4.3rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.7rem;
    line-height: 1.8;
  }
`;

export const ContactForm = styled.form`
  ${blockStyles}

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;
  min-width: 0;

  input,
  select,
  textarea {
    width: 100%;
    padding: 1.35rem 1.4rem;
    border: 1px solid rgba(31, 55, 48, 0.12);
    border-radius: 1.4rem;
    background: rgba(249, 246, 240, 0.82);
    color: var(--font-dark);
    font-size: 1.55rem;
  }

  input[aria-invalid='true'],
  select[aria-invalid='true'],
  textarea[aria-invalid='true'] {
    border-color: rgba(174, 68, 57, 0.72);
    background: rgba(255, 244, 241, 0.88);
    box-shadow: 0 0 0 3px rgba(174, 68, 57, 0.09);
  }

  textarea {
    resize: vertical;
    min-height: 14rem;
  }

  .contact-form__message {
    grid-column: 1 / -1;
  }

  > button[type='submit'] {
    grid-column: 1 / -1;
    min-height: 5.4rem;
    border: 0;
    border-radius: 999px;
    color: #fffdf8;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
    box-shadow: var(--shadow-md);
    font-size: 1.55rem;
    font-weight: 700;
    cursor: pointer;
  }

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const FieldGroup = styled.label`
  display: grid;
  gap: 0.8rem;
  color: var(--font-dark);
  font-size: 1.35rem;
  font-weight: 600;

  ${(props) =>
    props.$hasError &&
    `
      color: #8f352e;
    `}
`;

export const FieldError = styled.span`
  color: #8f352e;
  font-size: 1.25rem;
  line-height: 1.5;
`;

export const HiddenField = styled.label`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const WindowsBuilder = styled.div`
  grid-column: 1 / -1;
  display: grid;
  gap: 1.2rem;
  padding: 1.5rem;
  border: 1px solid
    ${(props) => (props.$hasError ? 'rgba(174, 68, 57, 0.72)' : 'rgba(31, 55, 48, 0.12)')};
  border-radius: 1.6rem;
  background: ${(props) =>
    props.$hasError ? 'rgba(255, 244, 241, 0.7)' : 'rgba(249, 246, 240, 0.6)'};

  > strong {
    color: var(--font-title);
    font-size: 1.55rem;
  }
`;

export const WindowInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  align-items: start;

  label {
    display: grid;
    gap: 0.7rem;
    color: var(--font-dark);
    font-size: 1.25rem;
    font-weight: 600;
    min-width: 0;
  }

  button {
    grid-column: 1 / -1;
    width: 100%;
    min-height: 5.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 2.2rem;
    border: 0;
    border-radius: 999px;
    background: var(--accent-primary);
    color: #fffdf8;
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
  }

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const WindowList = styled.ul`
  display: grid;
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const WindowListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid rgba(31, 55, 48, 0.08);
  border-radius: 1.4rem;
  background: rgba(255, 255, 255, 0.82);
  color: var(--font-dark);
  font-size: 1.4rem;
  box-shadow: 0 10px 24px rgba(40, 48, 45, 0.05);

  > span {
    min-width: 0;
    line-height: 1.5;
  }

  button {
    min-height: 3.4rem;
    padding: 0 1.1rem;
    border: 1px solid rgba(143, 53, 46, 0.16);
    border-radius: 999px;
    background: rgba(174, 68, 57, 0.08);
    color: #8f352e;
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform var(--transition-fast),
      background var(--transition-fast),
      border-color var(--transition-fast);
  }

  button:hover,
  button:focus-visible {
    transform: translateY(-1px);
    border-color: rgba(143, 53, 46, 0.3);
    background: rgba(174, 68, 57, 0.14);
  }

  .confirm-actions {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    flex: 0 0 auto;
    padding: 0.45rem;
    border-radius: 999px;
    background: rgba(255, 244, 241, 0.82);
    box-shadow: inset 0 0 0 1px rgba(143, 53, 46, 0.1);
  }

  small {
    color: #8f352e;
    font-size: 1.2rem;
    font-weight: 700;
    padding-left: 0.5rem;
    white-space: nowrap;
  }

  .confirm-actions button:first-of-type {
    color: #fffdf8;
    border-color: #8f352e;
    background: #8f352e;
  }

  .confirm-actions button:last-of-type {
    color: var(--font-dark);
    border-color: rgba(31, 55, 48, 0.12);
    background: rgba(255, 255, 255, 0.8);
  }

  ${media.sm`
    align-items: stretch;
    flex-direction: column;

    .confirm-actions {
      justify-content: space-between;
      flex-wrap: wrap;
      border-radius: 1.4rem;
    }
  `}
`;

export const FileHint = styled.span`
  color: var(--font-muted);
  font-size: 1.25rem;
  line-height: 1.5;
`;

export const FileList = styled.ul`
  display: grid;
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FileListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  border: 1px solid rgba(31, 55, 48, 0.1);
  border-radius: 1.4rem;
  background: rgba(255, 255, 255, 0.82);
  color: var(--font-dark);
  font-size: 1.35rem;
  box-shadow: 0 10px 24px rgba(40, 48, 45, 0.05);

  span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  button {
    width: 2.8rem;
    height: 2.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    border: 1px solid rgba(143, 53, 46, 0.16);
    border-radius: 999px;
    background: rgba(174, 68, 57, 0.08);
    color: #8f352e;
    font-family: inherit;
    font-size: 1.9rem;
    line-height: 1;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform var(--transition-fast),
      background var(--transition-fast),
      border-color var(--transition-fast);
  }

  button:hover,
  button:focus-visible {
    transform: translateY(-1px);
    border-color: rgba(143, 53, 46, 0.3);
    background: rgba(174, 68, 57, 0.14);
  }

  .confirm-actions {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    flex: 0 0 auto;
    padding: 0.45rem;
    border-radius: 999px;
    background: rgba(255, 244, 241, 0.82);
    box-shadow: inset 0 0 0 1px rgba(143, 53, 46, 0.1);
  }

  .confirm-actions button {
    width: auto;
    min-width: 4.2rem;
    padding: 0 0.9rem;
    font-size: 1.25rem;
  }

  .confirm-actions button:first-of-type {
    color: #fffdf8;
    border-color: #8f352e;
    background: #8f352e;
  }

  .confirm-actions button:last-of-type {
    color: var(--font-dark);
    border-color: rgba(31, 55, 48, 0.12);
    background: rgba(255, 255, 255, 0.8);
  }

  small {
    color: #8f352e;
    font-size: 1.2rem;
    font-weight: 700;
    padding-left: 0.5rem;
    white-space: nowrap;
  }

  ${media.sm`
    align-items: stretch;
    flex-direction: column;

    .confirm-actions {
      justify-content: space-between;
      flex-wrap: wrap;
      border-radius: 1.4rem;
    }
  `}
`;

export const FormStatus = styled.div`
  grid-column: 1 / -1;
  padding: 1.2rem 1.4rem;
  border-radius: 1.4rem;
  background: ${(props) =>
    props.$type === 'success' ? 'rgba(43, 98, 86, 0.11)' : 'rgba(174, 68, 57, 0.1)'};
  color: ${(props) => (props.$type === 'success' ? 'var(--accent-primary)' : '#8f352e')};
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.5;
`;

export const ContactPrivacyNote = styled.p`
  grid-column: 1 / -1;
  margin: -0.2rem 0 0;
  color: var(--font-muted);
  font-size: 1.25rem;
  line-height: 1.6;

  a {
    color: var(--accent-primary);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 0.22em;
  }
`;

export const ContactAside = styled.aside`
  ${blockStyles}
  min-width: 0;

  span {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--accent-primary);
    font-size: 1.2rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 1.6rem;
    color: var(--font-title);
    font-size: 2.4rem;
    line-height: 1.25;
  }

  p {
    margin: 1.8rem 0 0;
    color: var(--font-main);
    font-size: 1.6rem;
    line-height: 1.8;
  }
`;

export const ContactList = styled.ul`
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 1.3rem 1.4rem;
    border-radius: 1.5rem;
    background: rgba(248, 244, 236, 0.92);
  }

  strong {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--font-title);
    font-size: 1.45rem;
  }

  span,
  a {
    margin: 0;
    color: var(--font-main);
    font-size: 1.55rem;
    letter-spacing: 0;
    text-transform: none;
  }

  .contact-hours span {
    display: grid;
    grid-template-columns: minmax(8.8rem, 1fr) auto;
    align-items: baseline;
    gap: 1rem;
    line-height: 1.65;
  }

  .contact-hours span + span {
    margin-top: 0.25rem;
  }

  .contact-hours em,
  .contact-hours b {
    font-style: normal;
  }

  .contact-hours em {
    color: var(--font-main);
    font-weight: 500;
  }

  .contact-hours b {
    color: var(--font-title);
    font-weight: 700;
    text-align: right;
    white-space: nowrap;
  }

  a {
    display: inline-block;
    transition: color var(--transition-fast);
  }

  a:hover,
  a:focus-visible {
    color: var(--accent-primary);
  }
`;

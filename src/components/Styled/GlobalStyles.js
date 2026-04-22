import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-main-background: #f5efe7;
    --color-secondary-bg: #fbf8f3;
    --color-card-bg: rgba(255, 255, 255, 0.76);
    --accent-primary: #2b6256;
    --font-main: #5f6764;
    --font-muted: #8b8c87;
    --font-title: #1b2623;
    --font-dark: #23302c;
    --border-radius: 16px;
    --border-radius-large: 28px;
    --border-light: rgba(35, 48, 44, 0.1);
    --shadow-sm: 0 16px 34px rgba(40, 48, 45, 0.08);
    --shadow-md: 0 20px 42px rgba(40, 48, 45, 0.12);
    --shadow-lg: 0 30px 64px rgba(40, 48, 45, 0.15);
    --transition-fast: 0.2s ease;
    --transition: 0.3s ease;
    --transition-slow: 0.5s ease;
    --max-width: 1200px;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 0% 0%, rgba(215, 180, 106, 0.16), transparent 28%),
      radial-gradient(circle at 100% 14%, rgba(43, 98, 86, 0.12), transparent 22%),
      linear-gradient(180deg, #f7f1e9 0%, #f3ede4 42%, #f8f4ee 100%);
    color: var(--font-main);
    font-family: 'Georgia', 'Times New Roman', serif;
    -webkit-font-smoothing: antialiased;
  }

  #root,
  #__next {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  main {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;

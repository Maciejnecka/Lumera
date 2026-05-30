import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import 'aos/dist/aos.css';
import GlobalStyles from '../src/components/Styled/GlobalStyles';
import theme from '../src/components/Styled/theme';
import Navigation from '../src/components/Navigation';
import ScrollToTopButton from '../src/components/ScrollToTopButton';
import ScrollManager from '../src/components/ScrollManager';
import AosInitializer from '../src/components/AosInitializer';
import Footer from '../src/components/Footer';
import CookieNotice from '../src/components/CookieNotice';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <AosInitializer />
      <ScrollManager />
      <Navigation />
      <ScrollToTopButton />
      <Component {...pageProps} />
      <CookieNotice />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

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
      <Footer />
    </ThemeProvider>
  );
};

export default App;

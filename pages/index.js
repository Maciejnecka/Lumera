import HomePage from '../src/components/HomePage';
import PageSeo from '../src/seo/pageSeo';

const IndexPage = () => {
  return (
    <>
      <PageSeo path="/" />
      <HomePage />
    </>
  );
};

export default IndexPage;

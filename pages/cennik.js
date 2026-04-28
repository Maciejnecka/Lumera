import PricingPage from '../src/components/PricingPage/PricingPage';
import PageSeo from '../src/seo/pageSeo';

const breadcrumbs = [
  { label: 'Strona główna', href: '/' },
  { label: 'Cennik', href: '/cennik' },
];

const PricingRoute = () => {
  return (
    <>
      <PageSeo path="/cennik" />
      <PricingPage breadcrumbs={breadcrumbs} />
    </>
  );
};

export default PricingRoute;

import ContactSection from '../src/components/ContactSection';
import PageSeo, { buildBreadcrumbSchema } from '../src/seo/pageSeo';

const breadcrumbs = [
  { label: 'Strona główna', href: '/' },
  { label: 'Kontakt', href: '/kontakt' },
];

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://folielumera.pl/kontakt#contactpage',
  name: 'Kontakt i wycena folii okiennych Lumera',
  url: 'https://folielumera.pl/kontakt',
  inLanguage: 'pl-PL',
  about: {
    '@id': 'https://folielumera.pl/#localbusiness',
  },
};

const ContactPage = () => {
  return (
    <>
      <PageSeo
        path="/kontakt"
        extraSchema={[buildBreadcrumbSchema(breadcrumbs), contactPageSchema]}
      />
      <main id="main-content">
        <ContactSection />
      </main>
    </>
  );
};

export default ContactPage;

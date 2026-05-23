import ContactSection from '../src/components/ContactSection';
import { contactFaq } from '../src/data/contactPageData';
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

const contactFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const ContactPage = () => {
  return (
    <>
      <PageSeo
        path="/kontakt"
        extraSchema={[buildBreadcrumbSchema(breadcrumbs), contactPageSchema, contactFaqSchema]}
      />
      <main id="main-content">
        <ContactSection />
      </main>
    </>
  );
};

export default ContactPage;

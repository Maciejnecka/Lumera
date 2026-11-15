import FilmFinder from '../src/components/FilmFinder/FilmFinder';
import { finderFaq, finderPath, finderGroups } from '../src/data/filmFinderData';
import PageSeo, { buildBreadcrumbSchema, siteUrl } from '../src/seo/pageSeo';

const breadcrumbs = [
  { label: 'Strona główna', href: '/' },
  { label: 'Dobierz folię lub laminat', href: finderPath },
];
const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  '@id': `${siteUrl}${finderPath}#collection`,
  name: 'Pracownia doboru folii i laminatów Lumera',
  description: 'Interaktywny przewodnik po efektach folii okiennych i laminatów architektonicznych. Porównanie zastosowań, kompromisów i warunków doboru.',
  url: `${siteUrl}${finderPath}`, inLanguage: 'pl-PL',
  isPartOf: { '@id': `${siteUrl}/#website` },
  about: finderGroups.map(group => ({ '@type': 'Thing', name: group.label })),
};
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: finderFaq.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
export default function FilmFinderPage() {
  return <><PageSeo path={finderPath} extraSchema={[buildBreadcrumbSchema(breadcrumbs), collectionSchema, faqSchema]}/><FilmFinder breadcrumbs={breadcrumbs}/></>;
}

import DoorWrappingPage from '../src/components/DoorWrappingPage/DoorWrappingPage';
import { doorWrappingPageData as page } from '../src/data/doorWrappingPageData';
import PageSeo, { buildBreadcrumbSchema, siteUrl } from '../src/seo/pageSeo';

export default function DoorWrappingRoute() {
  return <><PageSeo path={page.path} extraSchema={[
    buildBreadcrumbSchema([{ label: 'Strona główna', href: '/' }, { label: 'Okleiny architektoniczne', href: '/okleiny-i-laminaty-architektoniczne' }, { label: page.title, href: page.path }]),
    { '@context': 'https://schema.org', '@type': 'Service', '@id': `${siteUrl}${page.path}#service`, name: page.title, serviceType: 'Oklejanie drzwi i futryn okleiną architektoniczną', description: page.seoDescription, url: `${siteUrl}${page.path}`, provider: { '@id': `${siteUrl}/#localbusiness` }, areaServed: [{ '@type': 'City', name: 'Kraków' }, { '@type': 'City', name: 'Katowice' }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
  ]}/><DoorWrappingPage/></>;
}

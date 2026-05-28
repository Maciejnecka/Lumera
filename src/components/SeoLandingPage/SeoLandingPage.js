import React from 'react';
import Link from 'next/link';
import { filmsData } from '../../data/filmsData';
import { problemPagesData } from '../../data/problemPagesData';
import { localServicePagesData } from '../../data/localServicePagesData';
import {
  getProjectRegion,
  getProjectsByFilmPath,
  getProjectsByLocalPath,
} from '../../data/projectPagesData';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import RelatedProjectsSection from '../RelatedProjectsSection';
import {
  SeoWrap,
  SeoHero,
  SeoEyebrow,
  SeoTitle,
  SeoLead,
  SeoActions,
  SeoGrid,
  SeoCard,
  SeoSection,
  SeoList,
  SeoLinkGrid,
  SeoLinkCard,
  SeoFaq,
} from './SeoLandingPage.styled';

const getFilm = (path) => filmsData.find((film) => film.path === path);
const getProblem = (path) => problemPagesData.find((page) => page.path === path);
const getLocalService = (path) => localServicePagesData.find((page) => page.path === path);

const filmPathContactTopics = {
  '/folie-przeciwsloneczne-zewnetrzne': 'solar-films',
  '/folie-przeciwsloneczne-wewnetrzne': 'solar-films',
};

const storeContactTopic = (topic) => {
  if (!topic || typeof window === 'undefined') return;

  sessionStorage.setItem('lumera-contact-topic', topic);
};

const uniqueProjects = (projects = []) => {
  const seen = new Set();

  return projects.filter((project) => {
    if (seen.has(project.path)) return false;
    seen.add(project.path);
    return true;
  });
};

const SeoLandingPage = ({ page, type, breadcrumbs }) => {
  const isProblemPage = type === 'problem';
  const isLocalServicePage = type === 'local-service';
  const isSurfaceService = Boolean(page.surfaceService);
  const recommendedFilms = (page.recommendedFilms || [page.filmPath])
    .map(getFilm)
    .filter(Boolean);
  const localLinks = (page.localLinks || [])
    .map((path) => getLocalService(path))
    .filter(Boolean);
  const relatedProblems = (page.relatedProblems || [])
    .map((path) => getProblem(path))
    .filter(Boolean);
  const mainFilm = page.filmPath ? getFilm(page.filmPath) : recommendedFilms[0];
  const mainFilmContactTopic = filmPathContactTopics[mainFilm?.path] || mainFilm?.id;
  const contactTopic =
    page.contactTopic || filmPathContactTopics[page.filmPath] || mainFilmContactTopic;
  const handleContactClick = () => storeContactTopic(contactTopic);
  const relatedProjects = uniqueProjects(
    isLocalServicePage
      ? [
          ...getProjectsByLocalPath(page.path),
          ...getProjectsByFilmPath(page.filmPath).filter(
            (project) => project.city === page.city || getProjectRegion(project) === page.city
          ),
        ]
      : (page.recommendedFilms || [page.filmPath])
          .filter(Boolean)
          .flatMap((filmPath) => getProjectsByFilmPath(filmPath))
  ).slice(0, 3);

  return (
    <main id="main-content">
      <SeoWrap>
        <SeoHero className={page.featured ? 'is-featured' : undefined}>
          <Breadcrumbs items={breadcrumbs} />
          <SeoEyebrow>{page.eyebrow}</SeoEyebrow>
          <SeoTitle>{page.title}</SeoTitle>
          <SeoLead>{page.lead}</SeoLead>
          <SeoActions>
            <Link href="/kontakt" onClick={handleContactClick}>
              Zapytaj o dobór folii
            </Link>
            {mainFilm && <Link href={mainFilm.path}>Zobacz: {mainFilm.name}</Link>}
          </SeoActions>
        </SeoHero>

        <SeoGrid>
          <SeoCard>
            <span>{isSurfaceService ? 'Najpierw powierzchnia' : 'Najpierw problem'}</span>
            <strong>{isProblemPage ? 'Dobieramy folię do objawu' : page.serviceName}</strong>
            {isSurfaceService ? (
              <p>
                Punktem wyjścia jest stan podłoża: krawędzie, narożniki, stabilność,
                sposób użytkowania i oczekiwane wykończenie.
              </p>
            ) : (
              <p>
                Punktem wyjścia są warunki przy szybie: słońce, prywatność, bezpieczeństwo,
                typ przeszklenia i oczekiwany efekt po montażu.
              </p>
            )}
          </SeoCard>
          <SeoCard>
            <span>Potem rozwiązanie</span>
            <strong>{mainFilm?.name || 'Folie okienne Lumera'}</strong>
            {isSurfaceService ? (
              <p>
                Każde zapytanie warto uzupełnić o zdjęcia całości i detali, wymiary,
                liczbę elementów oraz informację o wybranym kierunku wykończenia.
              </p>
            ) : (
              <p>
                Każde zapytanie warto uzupełnić o zdjęcia, wymiary i krótki opis sytuacji.
                Wymiary szyby najlepiej podawać od uszczelki do uszczelki.
                To przyspiesza wstępny dobór.
              </p>
            )}
          </SeoCard>
          <SeoCard>
            <span>Na końcu kontakt</span>
            <strong>+48 605 505 714</strong>
            <p>
              Możesz też wysłać formularz z załącznikami i opisem
              {isSurfaceService ? ' planowanej metamorfozy.' : ' problemu przy oknie.'}
            </p>
          </SeoCard>
        </SeoGrid>

        {page.sections?.map((section) => (
          <SeoSection key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </SeoSection>
        ))}

        {page.useCases && (
          <SeoSection>
            <h2>Gdzie to rozwiązanie ma najwięcej sensu?</h2>
            <SeoList>
              {page.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </SeoList>
          </SeoSection>
        )}

        {recommendedFilms.length > 0 && (
          <SeoSection>
            <h2>
              {isProblemPage
                ? 'Polecane rodzaje folii'
                : isSurfaceService
                  ? 'Główna kategoria usługi'
                  : 'Główna kategoria folii'}
            </h2>
            <p>
              {isSurfaceService
                ? 'Poniższa kategoria porządkuje usługi związane z okleinami, laminatami i zmianą wyglądu powierzchni bez wymiany elementów.'
                : 'Poniższe kategorie prowadzą od problemu do konkretnego typu folii. Dzięki temu łatwiej porównać efekt, zastosowanie i ograniczenia danego rozwiązania.'}
            </p>
            <SeoLinkGrid>
              {recommendedFilms.map((film) => (
                <SeoLinkCard key={film.path} href={film.path}>
                  <span>{film.id === 'architectural-wraps' ? 'Okleiny' : 'Folia'}</span>
                  <strong>{film.name}</strong>
                  <p>{film.shortDescription}</p>
                </SeoLinkCard>
              ))}
            </SeoLinkGrid>
          </SeoSection>
        )}

        <RelatedProjectsSection
          projects={relatedProjects}
          title={
            isLocalServicePage
              ? `Realizacje powiązane z lokalizacją ${page.city}`
              : 'Realizacje powiązane z tą kategorią'
          }
          lead="Przykłady montaży pomagają zobaczyć, jak opis usługi przekłada się na realną szybę, detale i efekt po aplikacji."
        />

        {(localLinks.length > 0 || relatedProblems.length > 0) && (
          <SeoSection>
            <h2>
              {localLinks.length > 0 && relatedProblems.length > 0
                ? 'Powiązane usługi i tematy'
                : localLinks.length > 0
                  ? 'Powiązane usługi'
                  : 'Powiązane tematy'}
            </h2>
            <SeoLinkGrid>
              {localLinks.map((item) => (
                <SeoLinkCard key={item.path} href={item.path}>
                  <span>Lokalnie</span>
                  <strong>{item.title}</strong>
                  <p>{item.seoDescription}</p>
                </SeoLinkCard>
              ))}
              {relatedProblems.map((item) => (
                <SeoLinkCard key={item.path} href={item.path}>
                  <span>Problem</span>
                  <strong>{item.title}</strong>
                  <p>{item.seoDescription}</p>
                </SeoLinkCard>
              ))}
            </SeoLinkGrid>
          </SeoSection>
        )}

        {page.faq && (
          <SeoSection>
            <h2>Najczęstsze pytania</h2>
            <SeoFaq>
              {page.faq.map((item) => (
                <article key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </SeoFaq>
          </SeoSection>
        )}

        <SeoSection>
          <h2>Jak przejść od pomysłu do wyceny?</h2>
          {isSurfaceService ? (
            <p>
              Najprościej wysłać zdjęcia całej powierzchni, zbliżenia krawędzi,
              narożników i miejsc intensywnie używanych, orientacyjne wymiary,
              liczbę elementów oraz informację, czy chodzi o ramy, drzwi, futryny,
              meble, ladę czy inną zabudowę.
            </p>
          ) : (
            <p>
              Najprościej wysłać zdjęcie okna, orientacyjne wymiary od uszczelki do
              uszczelki, liczbę szyb i krótko opisać, co przeszkadza: ciepło, brak
              prywatności, odblaski, ryzyko uszkodzenia szyby albo potrzeba estetycznego
              wykończenia.
            </p>
          )}
          <SeoActions className="seo-actions--bottom">
            <Link href="/kontakt" onClick={handleContactClick}>
              Przejdź do formularza
            </Link>
          </SeoActions>
        </SeoSection>
      </SeoWrap>
    </main>
  );
};

export default SeoLandingPage;

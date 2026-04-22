import React from 'react';
import { useRouter } from 'next/router';
import SmartFilmPreview from '../SmartFilmPreview';
import {
  DetailPageWrap,
  DetailHero,
  DetailHeroCopy,
  DetailHeroMeta,
  DetailHeroBadge,
  DetailHeroTitle,
  DetailHeroLead,
  DetailHeroActions,
  DetailHeroVisual,
  DetailHeroCard,
  DetailSection,
  DetailSectionIntro,
  DetailGrid,
  DetailPanel,
  DetailList,
  DetailBackLink,
  DetailText,
  DetailSpecs,
  DetailSpecCard,
  DetailDecisionLead,
  DetailFaq,
  DetailFaqItem,
} from './FilmDetailPage.styled';

const FilmDetailPage = ({ film }) => {
  const router = useRouter();

  const goToHomeSection = (sectionId, contactTopic) => {
    sessionStorage.setItem('lumera-scroll-target', sectionId);

    if (contactTopic) {
      sessionStorage.setItem('lumera-contact-topic', contactTopic);
    }

    router.push('/');
  };

  return (
    <main id="main-content">
      <DetailPageWrap>
        <DetailHero>
          <DetailHeroCopy data-aos="fade-up">
            <DetailHeroMeta>
              <DetailBackLink href="/">← Wróć na stronę główną</DetailBackLink>
              <DetailHeroBadge>Folie okienne Lumera</DetailHeroBadge>
            </DetailHeroMeta>
            <DetailHeroTitle>{film.name}</DetailHeroTitle>
            <DetailHeroLead>{film.lead}</DetailHeroLead>

            <DetailHeroActions>
              <button type="button" onClick={() => goToHomeSection('kontakt', film.id)}>
                Zapytaj o montaż
              </button>
              <button type="button" onClick={() => goToHomeSection('folie-okienne')}>
                Zobacz pozostałe folie
              </button>
            </DetailHeroActions>
          </DetailHeroCopy>

          <DetailHeroVisual
            className={film.id === 'lcd' ? 'is-lcd-preview' : undefined}
            data-aos="fade-left"
          >
            {film.id === 'lcd' ? (
              <SmartFilmPreview
                src={film.image}
                alt={film.name}
                variant="detail"
                loading="eager"
              />
            ) : (
              <img src={film.image} alt={film.name} loading="eager" decoding="async" />
            )}
            <DetailHeroCard>
              <span>Krótko</span>
              <strong>{film.shortDescription}</strong>
            </DetailHeroCard>
          </DetailHeroVisual>
        </DetailHero>

        <DetailSection>
          <DetailSectionIntro data-aos="fade-up">
            <span>Najważniejsze korzyści</span>
            <h2>Dlaczego klienci wybierają właśnie to rozwiązanie?</h2>
          </DetailSectionIntro>

          <DetailGrid>
            <DetailPanel data-aos="fade-up">
              <h3>Korzyści</h3>
              <DetailList>
                {film.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </DetailList>
            </DetailPanel>

            <DetailPanel data-aos="fade-up" data-aos-delay="60">
              <h3>Najczęstsze zastosowania</h3>
              <DetailList>
                {film.usage.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </DetailList>
            </DetailPanel>
          </DetailGrid>
        </DetailSection>

        <DetailSection>
          <DetailSectionIntro data-aos="fade-up">
            <span>Zakres i przygotowanie</span>
            <h2>Zakres prac ustalamy na podstawie miejsca, warunków i oczekiwanego efektu.</h2>
          </DetailSectionIntro>

          <DetailPanel data-aos="fade-up">
            <DetailList>
              {film.parameters.map((parameter) => (
                <li key={parameter}>{parameter}</li>
              ))}
            </DetailList>
          </DetailPanel>
        </DetailSection>

        {film.effectDetails && (
          <DetailSection>
            <DetailSectionIntro data-aos="fade-up">
              <span>Efekt i właściwości</span>
              <h2>{film.effectTitle}</h2>
              <DetailText>{film.effectLead}</DetailText>
            </DetailSectionIntro>

            <DetailSpecs data-aos="fade-up">
              {film.effectDetails.map(([label, value]) => (
                <DetailSpecCard key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </DetailSpecCard>
              ))}
            </DetailSpecs>
          </DetailSection>
        )}

        {(film.bestFor || film.beforeInstall) && (
          <DetailSection>
            <DetailSectionIntro data-aos="fade-up">
              <span>Praktyczne informacje</span>
              <h2>Co warto wiedzieć przed decyzją?</h2>
            </DetailSectionIntro>

            <DetailGrid>
              {film.bestFor && (
                <DetailPanel data-aos="fade-up">
                  <h3>Dla kogo to dobry wybór?</h3>
                  <DetailList>
                    {film.bestFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </DetailList>
                </DetailPanel>
              )}

              {film.beforeInstall && (
                <DetailPanel data-aos="fade-up" data-aos-delay="60">
                  <h3>Przed montażem</h3>
                  <DetailList>
                    {film.beforeInstall.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </DetailList>
                </DetailPanel>
              )}
            </DetailGrid>
          </DetailSection>
        )}

        {(film.decisionIntro || film.chooseWhen || film.betterAlternative || film.maintenance) && (
          <DetailSection>
            <DetailSectionIntro data-aos="fade-up">
              <span>Dobór rozwiązania</span>
              <h2>Czy ta opcja pasuje do Twojej sytuacji?</h2>
              {film.decisionIntro && <DetailDecisionLead>{film.decisionIntro}</DetailDecisionLead>}
            </DetailSectionIntro>

            <DetailGrid>
              {film.chooseWhen && (
                <DetailPanel data-aos="fade-up">
                  <h3>Kiedy warto wybrać?</h3>
                  <DetailList>
                    {film.chooseWhen.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </DetailList>
                </DetailPanel>
              )}

              {film.betterAlternative && (
                <DetailPanel data-aos="fade-up" data-aos-delay="60">
                  <h3>Kiedy rozważyć inną opcję?</h3>
                  <DetailList>
                    {film.betterAlternative.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </DetailList>
                </DetailPanel>
              )}
            </DetailGrid>

            {film.maintenance && (
              <DetailPanel className="detail-panel--wide" data-aos="fade-up">
                <h3>Montaż, użytkowanie i pielęgnacja</h3>
                <DetailList>
                  {film.maintenance.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </DetailList>
              </DetailPanel>
            )}
          </DetailSection>
        )}

        {film.faq && (
          <DetailSection>
            <DetailSectionIntro data-aos="fade-up">
              <span>FAQ</span>
              <h2>Najczęstsze pytania o {film.name.toLowerCase()}</h2>
            </DetailSectionIntro>

            <DetailFaq data-aos="fade-up">
              {film.faq.map((item) => (
                <DetailFaqItem key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </DetailFaqItem>
              ))}
            </DetailFaq>
          </DetailSection>
        )}
      </DetailPageWrap>
    </main>
  );
};

export default FilmDetailPage;

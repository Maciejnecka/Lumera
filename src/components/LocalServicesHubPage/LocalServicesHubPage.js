import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { localServicePagesData } from '../../data/localServicePagesData';
import {
  LocalHubWrap,
  LocalHubHero,
  LocalHubGrid,
  LocalHubCard,
  LocalHubSection,
  CityLinks,
  ServiceMatrix,
  AreaList,
} from './LocalServicesHubPage.styled';

const cityIntro = {
  Kraków:
    'Montaż folii i oklein w Krakowie najczęściej dotyczy mieszkań, lokali z witrynami, biur, gabinetów oraz większych przeszkleń od strony południowej i zachodniej.',
  Katowice:
    'W Katowicach pomagamy przy biurach, lokalach usługowych, witrynach, przeszkleniach wewnętrznych i powierzchniach, które wymagają szybkiej metamorfozy bez wymiany elementów.',
};

const krakowArea = ['Rudawa', 'Zabierzów', 'Krzeszowice', 'Modlniczka', 'Balice', 'Wieliczka', 'Skawina'];
const silesiaArea = ['Chorzów', 'Sosnowiec', 'Tychy', 'Gliwice', 'Zabrze', 'Mysłowice', 'Siemianowice Śląskie'];

const getPagesByCity = (city) =>
  localServicePagesData.filter((page) => page.city === city);

const groupedServices = localServicePagesData.reduce((groups, page) => {
  const key = page.serviceName;
  return {
    ...groups,
    [key]: [...(groups[key] || []), page],
  };
}, {});

const LocalServicesHubPage = ({ breadcrumbs }) => {
  const krakowPages = getPagesByCity('Kraków');
  const katowicePages = getPagesByCity('Katowice');

  return (
    <main id="main-content">
      <LocalHubWrap>
        <LocalHubHero>
          <Breadcrumbs items={breadcrumbs} />
          <span>Montaż lokalnie</span>
          <h1>Folie okienne, folie LCD i okleiny w Krakowie oraz Katowicach.</h1>
          <p>
            Zebraliśmy lokalne podstrony w jednym miejscu, żeby łatwo przejść od miasta
            do konkretnej usługi: folii przeciwsłonecznych, matowych, antywłamaniowych,
            LCD, luster weneckich oraz oklein na ramy, drzwi, futryny i meble.
          </p>
        </LocalHubHero>

        <LocalHubGrid>
          <LocalHubCard>
            <span>Kraków</span>
            <h2>Usługi lokalne w Krakowie</h2>
            <p>{cityIntro.Kraków}</p>
            <CityLinks>
              {krakowPages.map((page) => (
                <Link key={page.path} href={page.path}>
                  {page.title}
                </Link>
              ))}
            </CityLinks>
          </LocalHubCard>

          <LocalHubCard>
            <span>Katowice</span>
            <h2>Usługi lokalne w Katowicach</h2>
            <p>{cityIntro.Katowice}</p>
            <CityLinks>
              {katowicePages.map((page) => (
                <Link key={page.path} href={page.path}>
                  {page.title}
                </Link>
              ))}
            </CityLinks>
          </LocalHubCard>
        </LocalHubGrid>

        <LocalHubSection>
          <span>Typy usług lokalnych</span>
          <h2>Ta sama usługa, dwa główne kierunki dojazdu.</h2>
          <p>
            Jeżeli wiesz już, czego potrzebujesz, najwygodniej wybrać usługę i miasto.
            Jeżeli nie, zacznij od problemu: zbyt dużo słońca, brak prywatności,
            bezpieczniejsze szyby albo metamorfoza ram, drzwi i mebli.
          </p>
          <ServiceMatrix>
            {Object.entries(groupedServices).map(([serviceName, pages]) => (
              <article key={serviceName}>
                <strong>{serviceName}</strong>
                <div>
                  {pages.map((page) => (
                    <Link key={page.path} href={page.path}>
                      {page.city}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </ServiceMatrix>
        </LocalHubSection>

        <LocalHubGrid>
          <LocalHubCard>
            <span>Okolice Krakowa</span>
            <h2>Najbliższe miejscowości obsługiwane przy realizacjach</h2>
            <p>
              Przy większych przeszkleniach, witrynach i okleinach zakres dojazdu
              ustalamy indywidualnie. Najszybciej ocenimy temat po zdjęciach,
              wymiarach od uszczelki do uszczelki i krótkim opisie miejsca montażu.
            </p>
            <AreaList>
              {krakowArea.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </AreaList>
          </LocalHubCard>

          <LocalHubCard>
            <span>Śląsk</span>
            <h2>Katowice i miasta dojazdowe</h2>
            <p>
              Na Śląsku szczególnie często pojawiają się zapytania o biura,
              witryny, lokale usługowe, folie przeciwsłoneczne, prywatność oraz
              zabezpieczenie szyb w miejscach dostępnych od ulicy.
            </p>
            <AreaList>
              {silesiaArea.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </AreaList>
          </LocalHubCard>
        </LocalHubGrid>
      </LocalHubWrap>
    </main>
  );
};

export default LocalServicesHubPage;

import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {
  PrivacyWrap,
  PrivacyHero,
  PrivacyEyebrow,
  PrivacyTitle,
  PrivacyLead,
  PrivacyGrid,
  PrivacyCard,
  PrivacySection,
  PrivacyList,
  PrivacyNotice,
  PrivacyActions,
} from './PrivacyPolicyPage.styled';

const CONTACT_EMAIL = 'biuro@folielumera.pl';
const CONTACT_PHONE = '+48 605 505 714';
const CONTACT_ADDRESS = 'Rudawa, ul. Łanowa 14, 32-064 Rudawa';
const CONTACT_EMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;

const PrivacyPolicyPage = ({ breadcrumbs }) => {
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.open(CONTACT_EMAIL_COMPOSE_HREF, '_blank', 'noopener,noreferrer');
  };

  return (
    <main id="main-content">
      <PrivacyWrap>
        <PrivacyHero>
          <Breadcrumbs items={breadcrumbs} />
          <PrivacyEyebrow>Informacje formalne</PrivacyEyebrow>
          <PrivacyTitle>Polityka prywatności</PrivacyTitle>
          <PrivacyLead>
            Poniżej znajdziesz informacje o tym, jakie dane mogą być przetwarzane
            podczas korzystania ze strony Lumera, wysyłania formularza kontaktowego
            oraz przesyłania załączników potrzebnych do przygotowania odpowiedzi lub
            wstępnej wyceny.
          </PrivacyLead>
          <PrivacyActions>
            <Link href="/">Wróć na stronę główną</Link>
            <Link href="/#kontakt">Napisz do nas</Link>
          </PrivacyActions>
        </PrivacyHero>

        <PrivacyGrid>
          <PrivacyCard>
            <span>Administrator danych</span>
            <strong>Lumera</strong>
            <p>{CONTACT_ADDRESS}</p>
          </PrivacyCard>
          <PrivacyCard>
            <span>Kontakt w sprawie danych</span>
            <strong>
              <a href={`mailto:${CONTACT_EMAIL}`} onClick={handleEmailClick}>
                {CONTACT_EMAIL}
              </a>
            </strong>
            <p>{CONTACT_PHONE}</p>
          </PrivacyCard>
          <PrivacyCard>
            <span>Zakres strony</span>
            <strong>Folie okienne i montaż</strong>
            <p>Obsługa zapytań, kontaktu oraz materiałów przesłanych przez klienta.</p>
          </PrivacyCard>
        </PrivacyGrid>

        <PrivacySection>
          <h2>1. Kto jest administratorem danych?</h2>
          <p>
            Administratorem danych osobowych przekazywanych za pośrednictwem strony
            jest Lumera, z siedzibą: {CONTACT_ADDRESS}. W sprawach związanych z
            prywatnością możesz skontaktować się mailowo pod adresem{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} onClick={handleEmailClick}>
              {CONTACT_EMAIL}
            </a>{' '}
            albo telefonicznie
            pod numerem <a href={`tel:+48605505714`}>{CONTACT_PHONE}</a>.
          </p>
        </PrivacySection>

        <PrivacySection>
          <h2>2. Jakie dane możemy przetwarzać?</h2>
          <p>
            Przetwarzamy wyłącznie dane, które są potrzebne do obsługi zapytania,
            kontaktu z klientem i przygotowania informacji o możliwym montażu folii.
          </p>
          <PrivacyList>
            <li>imię i nazwisko podane w formularzu,</li>
            <li>adres e-mail i numer telefonu,</li>
            <li>wybrany temat zapytania lub kategoria folii,</li>
            <li>treść wiadomości wpisaną w formularzu,</li>
            <li>wymiary okien, liczba sztuk i łączna powierzchnia podana do wyceny,</li>
            <li>zdjęcia lub pliki PDF dodane jako załączniki,</li>
            <li>podstawowe dane techniczne związane z działaniem strony, np. informacje o błędach wysyłki formularza.</li>
          </PrivacyList>
        </PrivacySection>

        <PrivacySection>
          <h2>3. W jakim celu wykorzystujemy dane?</h2>
          <PrivacyList>
            <li>aby odpowiedzieć na zapytanie przesłane przez formularz kontaktowy, e-mail lub telefon,</li>
            <li>aby przygotować wstępną informację o doborze folii, zakresie prac lub możliwej wycenie,</li>
            <li>aby ustalić szczegóły ewentualnej usługi montażu lub demontażu folii,</li>
            <li>aby zabezpieczyć stronę i formularz przed nadużyciami, błędami technicznymi oraz spamem,</li>
            <li>aby dochodzić lub bronić się przed ewentualnymi roszczeniami, jeżeli będzie to konieczne.</li>
          </PrivacyList>
        </PrivacySection>

        <PrivacySection>
          <h2>4. Podstawa prawna przetwarzania</h2>
          <p>
            Dane z formularza i korespondencji przetwarzamy przede wszystkim dlatego,
            że jest to potrzebne do odpowiedzi na Twoje zapytanie i podjęcia działań
            przed ewentualnym zawarciem umowy. W zależności od sytuacji podstawą może
            być art. 6 ust. 1 lit. b RODO, art. 6 ust. 1 lit. f RODO, czyli prawnie
            uzasadniony interes administratora, albo art. 6 ust. 1 lit. c RODO, jeżeli
            konkretne przepisy nakładają obowiązek przechowywania dokumentów.
          </p>
        </PrivacySection>

        <PrivacySection>
          <h2>5. Formularz kontaktowy i załączniki</h2>
          <p>
            Formularz pozwala podać dane kontaktowe, kategorię zapytania, opis sprawy,
            wymiary okien oraz dodać zdjęcia lub pliki PDF. Załączniki powinny dotyczyć
            wyłącznie miejsca montażu, okien, szyb albo innych elementów potrzebnych do
            oceny zapytania. Nie przesyłaj dokumentów zawierających dane wrażliwe,
            danych osób trzecich ani informacji, które nie są potrzebne do przygotowania
            odpowiedzi.
          </p>
          <PrivacyNotice>
            Zdjęcia i pliki są używane tylko po to, aby lepiej zrozumieć zapytanie,
            ocenić zakres prac i wrócić z konkretniejszą odpowiedzią.
          </PrivacyNotice>
        </PrivacySection>

        <PrivacySection>
          <h2>6. Odbiorcy danych i narzędzia zewnętrzne</h2>
          <p>
            Dane mogą być przekazywane podmiotom, które pomagają w obsłudze strony,
            poczty e-mail, hostingu, zabezpieczeń technicznych lub formularza
            kontaktowego. W szczególności formularz może korzystać z zewnętrznej usługi
            wysyłki wiadomości e-mail, aby dostarczyć zapytanie na skrzynkę Lumera.
          </p>
          <p>
            Dane nie są sprzedawane innym podmiotom i nie są wykorzystywane do
            automatycznego podejmowania decyzji wobec użytkownika.
          </p>
        </PrivacySection>

        <PrivacySection>
          <h2>7. Jak długo przechowujemy dane?</h2>
          <PrivacyList>
            <li>dane z zapytań przechowujemy przez czas potrzebny do obsługi sprawy i dalszej korespondencji,</li>
            <li>dane związane z realizacją usługi mogą być przechowywane przez okres wymagany przepisami księgowymi lub podatkowymi,</li>
            <li>dane potrzebne do obrony lub dochodzenia roszczeń mogą być przechowywane do czasu przedawnienia takich roszczeń,</li>
            <li>załączniki, które nie są już potrzebne do obsługi zapytania, powinny być usuwane lub ograniczane do niezbędnego minimum.</li>
          </PrivacyList>
        </PrivacySection>

        <PrivacySection>
          <h2>8. Prawa osoby, której dane dotyczą</h2>
          <p>
            W związku z przetwarzaniem danych możesz poprosić o dostęp do swoich danych,
            ich sprostowanie, usunięcie, ograniczenie przetwarzania, przeniesienie danych
            albo wnieść sprzeciw wobec przetwarzania opartego na prawnie uzasadnionym
            interesie. Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych
            Osobowych.
          </p>
        </PrivacySection>

        <PrivacySection>
          <h2>9. Pliki cookies i pamięć lokalna przeglądarki</h2>
          <p>
            Strona korzysta obecnie wyłącznie z technicznych mechanizmów niezbędnych
            do działania, takich jak pamięć lokalna lub pamięć sesji przeglądarki.
            Służą one między innymi do poprawnego przenoszenia użytkownika między
            sekcjami strony, zapamiętania wybranej kategorii przy przejściu do
            formularza oraz zapisania informacji o zamknięciu komunikatu technicznego.
          </p>
          <p>
            Obecnie strona nie używa cookies analitycznych, reklamowych ani
            marketingowych i nie prowadzi profilowania użytkowników na potrzeby reklam.
            Jeżeli w przyszłości zostaną dodane narzędzia analityczne, reklamowe,
            mapa, czat, piksele social media lub inne podobne usługi, polityka
            prywatności i komunikat cookies powinny zostać zaktualizowane przed
            ich uruchomieniem.
          </p>
        </PrivacySection>

        <PrivacySection>
          <h2>10. Dobrowolność podania danych</h2>
          <p>
            Podanie danych w formularzu jest dobrowolne, ale bez podstawowych danych
            kontaktowych i opisu sprawy możemy nie być w stanie odpowiedzieć na zapytanie
            lub przygotować wstępnej informacji o usłudze.
          </p>
        </PrivacySection>

        <PrivacySection>
          <h2>11. Aktualizacja polityki</h2>
          <p>
            Polityka prywatności może być aktualizowana, gdy zmieni się zakres usług,
            sposób działania formularza, wykorzystywane narzędzia techniczne albo
            obowiązujące przepisy. Aktualna wersja dokumentu jest zawsze dostępna na tej
            stronie.
          </p>
          <PrivacyNotice>
            Ostatnia aktualizacja: 21 kwietnia 2026 r. Dokument jest praktycznym wzorem
            dla obecnej wersji strony i warto go zweryfikować przed publikacją po
            uzupełnieniu pełnych danych działalności.
          </PrivacyNotice>
        </PrivacySection>
      </PrivacyWrap>
    </main>
  );
};

export default PrivacyPolicyPage;

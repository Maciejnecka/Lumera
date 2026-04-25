import imagePrzeciwsloneczneZewnetrzne from '../img/films/folie-przeciwsloneczne-zewnetrzne.svg';
import imageLustraWeneckie from '../img/films/folie-lustra-weneckie.svg';
import imagePrzeciwsloneczneWewnetrzne from '../img/films/folie-przeciwsloneczne-wewnetrzne.svg';
import imageLCD from '../img/films/folie-lcd.svg';
import imagePoliweglan from '../img/films/folie-na-poliweglan.svg';
import imageAntyUV from '../img/films/folie-anty-uv.svg';
import imageMatowe from '../img/films/folie-matowe.svg';
import imageMrozone from '../img/films/folie-mrozone.svg';
import imageHaccp from '../img/films/folie-bezpieczne-haccp.svg';
import imageAntywlamaniowe from '../img/films/folie-antywlamaniowe.svg';
import imageOchronne from '../img/films/folie-ochronne.svg';
import imageZabezpieczajace from '../img/films/folie-zabezpieczajace.svg';
import imageAntyPodsluchowe from '../img/films/folie-anty-podsluchowe.svg';
import imageTermoizolacyjne from '../img/films/folie-termoizolacyjne.svg';
import imageProjekcyjne from '../img/films/folie-projekcyjne.svg';
import imageAntykolizyjne from '../img/films/folie-antykolizyjne.svg';
import imageDemontaz from '../img/films/demontaz-folii-okiennych.svg';
import imageArchitecturalWraps from '../img/films/okleiny-laminaty-architektoniczne.svg';
import { filmSeoData } from './filmSeoData';
import { filmDecisionData } from './filmDecisionData';
import { filmExtraFaqData } from './filmExtraFaqData';
import { filmStrengtheningData } from './filmStrengtheningData';

const baseFilmsData = [
  {
    id: 'external-solar',
    path: '/folie-przeciwsloneczne-zewnetrzne',
    name: 'Folie przeciwsłoneczne zewnętrzne',
    shortDescription:
      'Skuteczna redukcja nagrzewania i odblasków przy dużych przeszkleniach oraz elewacjach mocno wystawionych na słońce.',
    lead:
      'Folie przeciwsłoneczne zewnętrzne stosujemy tam, gdzie priorytetem jest możliwie wysoka redukcja ciepła i lepsza kontrola światła. To rozwiązanie szczególnie dobrze sprawdza się przy dużych przeszkleniach, witrynach oraz nowoczesnych elewacjach.',
    highlights: [
      'bardzo dobra ochrona przed przegrzewaniem pomieszczeń',
      'ograniczenie odblasków i poprawa komfortu pracy przy oknach',
      'polecane do mocno nasłonecznionych przeszkleń',
    ],
    parameters: [
      'Montaż: zewnętrzny',
      'Główna korzyść: redukcja ciepła i odbicia promieni słonecznych',
      'Zastosowanie: domy, biura, lokale usługowe, witryny',
      'Typy polecane przez dostawcę: serie Comfort i Perfecta',
    ],
    usage: [
      'duże przeszklenia od strony południowej lub zachodniej',
      'biura z monitorami ustawionymi blisko okien',
      'lokale usługowe i witryny narażone na silne słońce',
    ],
    image: imagePrzeciwsloneczneZewnetrzne,
  },
  {
    id: 'mirror',
    path: '/folie-lustra-weneckie',
    name: 'Folie lustra weneckie',
    shortDescription:
      'Refleksyjna folia dla okien od ulicy, chodnika lub sąsiedniego budynku.',
    lead:
      'Folie lustra weneckiego zmieniają odbiór przeszklenia: szyba staje się bardziej refleksyjna, a wnętrze mniej oczywiste dla osób z zewnątrz. To dobry wybór, gdy prywatność ma iść w parze z wyrazistym, nowoczesnym wyglądem.',
    highlights: [
      'intensywny efekt lustra weneckiego przy właściwych warunkach światła',
      'ochrona prywatności i atrakcyjny wygląd szyby',
      'dodatkowa redukcja promieniowania słonecznego i UV',
    ],
    parameters: [
      'Redukcja całkowitego promieniowania słonecznego: do 76%',
      'Redukcja promieni UV: do 99%',
      'Przepuszczalność światła: około 17,5% dla wariantu R20',
      'Montaż: najczęściej wewnętrzny lub zewnętrzny zależnie od doboru produktu',
    ],
    usage: [
      'biura i gabinety z potrzebą prywatności w dzień',
      'przeszklenia między pomieszczeniami',
      'lokale, w których ważny jest efekt lustra i ochrona przed wglądem',
    ],
    image: imageLustraWeneckie,
  },
  {
    id: 'internal-solar',
    path: '/folie-przeciwsloneczne-wewnetrzne',
    name: 'Folie przeciwsłoneczne wewnętrzne',
    shortDescription:
      'Rozwiązanie dla wnętrz, w których chcemy ograniczyć słońce i odblaski bez ingerencji po zewnętrznej stronie szyby.',
    lead:
      'Folie przeciwsłoneczne wewnętrzne to dobry wybór tam, gdzie montaż od zewnątrz jest utrudniony albo klient preferuje aplikację od środka. Pomagają ograniczyć nadmiar światła, poprawiają komfort pracy i codziennego przebywania we wnętrzu.',
    highlights: [
      'redukcja nadmiaru światła i odblasków',
      'mniejszy dyskomfort w pomieszczeniach z monitorami',
      'estetyczny montaż po stronie wewnętrznej',
    ],
    parameters: [
      'Montaż: wewnętrzny',
      'Główna korzyść: ograniczenie nasłonecznienia i poprawa komfortu',
      'Zastosowanie: mieszkania, domy, biura, gabinety',
      'Dobór: zależny od typu szyby i oczekiwanego poziomu przyciemnienia',
    ],
    usage: [
      'pomieszczenia biurowe z ekranami',
      'mieszkania z dużym salonem lub sypialnią od strony słońca',
      'gabinetowe przeszklenia, gdzie liczy się wygoda użytkowania',
    ],
    image: imagePrzeciwsloneczneWewnetrzne,
  },
  {
    id: 'lcd',
    path: '/folie-lcd',
    name: 'Folie LCD – inteligentne folie',
    shortDescription:
      'Inteligentna folia PDLC/LCD, która zmienia szkło z przezroczystego w mleczne po przełączeniu zasilania.',
    lead:
      'Folie LCD, nazywane też foliami PDLC lub smart film, pozwalają sterować prywatnością na szklanej powierzchni bez rolet, żaluzji i stałego matowienia szyby. W trybie transparentnym szkło pozostaje przejrzyste, a po wyłączeniu zasilania przyjmuje mleczny, rozpraszający obraz wygląd. To rozwiązanie premium do biur, gabinetów, sal konferencyjnych, hoteli, showroomów i nowoczesnych wnętrz, ale wymaga dokładniejszego przygotowania niż klasyczna folia dekoracyjna: trzeba zaplanować zasilanie, sterowanie, krawędzie oraz sposób ukrycia przewodów.',
    highlights: [
      'prywatność na żądanie: szkło transparentne albo mleczne po przełączeniu',
      'nowoczesny efekt bez ciężkich osłon, kaset i prowadnic przy przeszkleniu',
      'możliwość sterowania przełącznikiem, pilotem lub systemem automatyki po ustaleniu instalacji',
      'tryb mleczny może działać jako powierzchnia do prezentacji lub projekcji w wybranych aranżacjach',
    ],
    parameters: [
      'Technologia: folia przełączalna PDLC/LCD z ciekłymi kryształami w warstwie polimerowej',
      'Domyślny efekt: najczęściej mleczny bez zasilania i transparentny po podaniu napięcia',
      'Zasilanie: wymagany zasilacz oraz zaplanowane prowadzenie przewodów',
      'Sterowanie: przełącznik, pilot, przycisk ścienny lub integracja z automatyką po uzgodnieniu projektu',
      'Montaż: na istniejącej szybie lub jako element nowej zabudowy szklanej, zależnie od rozwiązania',
    ],
    usage: [
      'sale konferencyjne, meeting roomy i szklane boksy w biurach',
      'gabinety lekarskie, kosmetologiczne, zarządcze i konsultacyjne',
      'hotele, apartamenty, łazienki premium i strefy spa',
      'showroomy, witryny i przestrzenie, gdzie szkło ma mieć efekt technologiczny',
      'przeszklenia, które czasem mają być otwarte wizualnie, a czasem prywatne',
    ],
    image: imageLCD,
    featuredPath: '/montaz-folii-lcd',
  },
  {
    id: 'polycarbonate',
    path: '/folie-na-poliweglan',
    name: 'Folie na poliwęglan (świetliki dachowe)',
    shortDescription:
      'Rozwiązania dla świetlików i tworzyw, które pracują inaczej niż klasyczna szyba.',
    lead:
      'Przy poliwęglanie najważniejsze jest nie tylko ograniczenie słońca, ale też zgodność folii z materiałem. Przed rekomendacją sprawdzamy typ tworzywa, stan powierzchni, naprężenia i warunki, w jakich pracuje świetlik.',
    highlights: [
      'ocena kompatybilności przed doborem folii',
      'mniej ostrego światła wpadającego od góry',
      'rozwiązanie dla hal, lokali i przeszkleń technicznych',
    ],
    parameters: [
      'Podłoże: poliwęglan i podobne tworzywa',
      'Główna korzyść: ograniczenie słońca i ciepła',
      'Miejsce montażu: świetliki dachowe, przeszklenia techniczne',
      'Dobór: wymaga sprawdzenia kompatybilności materiałowej',
    ],
    usage: [
      'świetliki dachowe w halach i obiektach komercyjnych',
      'przeszklenia techniczne z tworzyw sztucznych',
      'miejsca o bardzo dużym nasłonecznieniu od góry',
    ],
    image: imagePoliweglan,
  },
  {
    id: 'anti-uv',
    path: '/folie-anty-uv',
    name: 'Folie okienne anty UV',
    shortDescription:
      'Przezroczyste lub delikatne folie chroniące wnętrze przed szkodliwym promieniowaniem UV i blaknięciem materiałów.',
    lead:
      'Folie anty UV to dobre rozwiązanie dla osób, które chcą chronić meble, podłogi, tkaniny i ekspozycje przed płowieniem, bez wyraźnego ograniczania światła dziennego. Dobrze sprawdzają się zarówno w domach, jak i w przestrzeniach komercyjnych.',
    highlights: [
      'ochrona przed promieniowaniem UV',
      'mniejsze ryzyko blaknięcia kolorów we wnętrzu',
      'zachowanie wysokiej przejrzystości szyby',
    ],
    parameters: [
      'Redukcja promieniowania UV: bardzo wysoka, zależna od modelu',
      'Wpływ na światło dzienne: niski przy foliach transparentnych',
      'Montaż: najczęściej wewnętrzny',
      'Zastosowanie: domy, salony sprzedaży, gabinety, ekspozycje',
    ],
    usage: [
      'mieszkania z dużą ilością naturalnego światła',
      'salony, w których chronimy podłogi i wyposażenie',
      'przestrzenie komercyjne z produktami narażonymi na płowienie',
    ],
    image: imageAntyUV,
  },
  {
    id: 'matte',
    path: '/folie-matowe',
    name: 'Folie matowe',
    shortDescription:
      'Satynowe wykończenie szyby do dyskretnego zasłonięcia widoku bez ciężkich osłon.',
    lead:
      'Folie matowe porządkują wygląd przeszklenia i rozpraszają obraz po drugiej stronie szyby. Można nimi okleić całą taflę, tylko dolny pas albo wybrany fragment, dlatego łatwo dopasować poziom zasłonięcia do wnętrza.',
    highlights: [
      'możliwość pełnego lub częściowego oklejenia szyby',
      'czysty, spokojny wygląd bez montażu rolet',
      'dobry wybór tam, gdzie prywatność ma być stała',
    ],
    parameters: [
      'Efekt: mleczny lub satynowy',
      'Światło: zachowany dopływ światła dziennego',
      'Zastosowanie: przeszklenia wewnętrzne i wybrane okna',
      'Możliwość personalizacji: pasy, wzory, oznaczenia',
    ],
    usage: [
      'drzwi i ścianki szklane w biurach',
      'łazienki i gabinety',
      'lokale usługowe wymagające prywatności i estetyki',
    ],
    image: imageMatowe,
  },
  {
    id: 'frosted',
    path: '/folie-mrozone',
    name: 'Folie mrożone',
    shortDescription:
      'Folie o bardziej wyczuwalnej strukturze, które imitują efekt mrożonego szkła i dają dekoracyjny charakter.',
    lead:
      'Folie mrożone sprawdzają się tam, gdzie oprócz prywatności liczy się wyraźniejszy efekt dekoracyjny. Nadają przeszkleniom bardziej charakterystyczny wygląd i świetnie wpisują się w nowoczesne wnętrza komercyjne oraz biurowe.',
    highlights: [
      'efekt mrożonego szkła z delikatną strukturą',
      'prywatność połączona z dekoracyjnym wykończeniem',
      'dobre rozwiązanie pod wycinanie lub nadruk',
    ],
    parameters: [
      'Efekt: mrożone szkło',
      'Światło: przepuszczone, ale rozproszone',
      'Zastosowanie: przeszklenia wewnętrzne, biura, lokale',
      'Możliwość personalizacji: grafiki, logotypy, pasy',
    ],
    usage: [
      'biura i sale spotkań',
      'witryny i drzwi z potrzebą oznakowania',
      'przeszklenia dekoracyjne w lokalach usługowych',
    ],
    image: imageMrozone,
  },
  {
    id: 'haccp',
    path: '/folie-bezpieczne-haccp',
    name: 'Folie bezpieczne HACCP',
    shortDescription:
      'Folie wzmacniające szybę i ograniczające ryzyko rozsypania szkła, zgodne z wymaganiami bezpieczeństwa HACCP.',
    lead:
      'To rozwiązanie przeznaczone przede wszystkim do miejsc, w których obowiązują wysokie standardy bezpieczeństwa szyb. Folie HACCP pomagają zatrzymać odłamki szkła po uderzeniu i wspierają bezpieczne użytkowanie przeszkleń w strefach wymagających kontroli.',
    highlights: [
      'ograniczenie rozsypania szkła po rozbiciu',
      'wsparcie zgodności z wymaganiami HACCP',
      'większe bezpieczeństwo użytkowników i otoczenia',
    ],
    parameters: [
      'Klasa bezpieczeństwa: 3B3 dla wskazanego produktu referencyjnego',
      'Montaż: wewnętrzny',
      'Zastosowanie: gastronomia, produkcja, zaplecza, obiekty usługowe',
      'Korzyść: zatrzymanie odłamków szkła po uderzeniu',
    ],
    usage: [
      'zakłady produkcyjne i spożywcze',
      'kuchnie, zaplecza i lokale gastronomiczne',
      'obiekty, gdzie wymagane jest zabezpieczenie szyb przed odłamkami',
    ],
    image: imageHaccp,
  },
  {
    id: 'anti-burglary',
    path: '/folie-antywlamaniowe',
    name: 'Folie antywłamaniowe',
    shortDescription:
      'Folie wzmacniające szybę i wydłużające czas sforsowania przeszklenia podczas próby włamania.',
    lead:
      'Folie antywłamaniowe zwiększają odporność szyby i utrudniają szybkie wybicie przeszklenia. To rozwiązanie wybierane do domów, biur i lokali, w których ważne jest podniesienie poziomu bezpieczeństwa bez wymiany całej stolarki.',
    highlights: [
      'wydłużenie czasu włamania przez przeszkloną powierzchnię',
      'wzmocnienie szyby i ograniczenie skutków wybicia',
      'większe bezpieczeństwo domu, biura lub lokalu',
    ],
    parameters: [
      'Przykładowa klasa: P1 dla produktu referencyjnego',
      'Zastosowanie: szyby okienne, witryny, przeszklone wejścia',
      'Główna korzyść: opóźnienie sforsowania przeszklenia',
      'Montaż: dobierany do typu zabezpieczanej powierzchni',
    ],
    usage: [
      'domy i mieszkania parterowe',
      'biura oraz lokale usługowe',
      'witryny i przeszklenia narażone na ingerencję z zewnątrz',
    ],
    image: imageAntywlamaniowe,
  },
  {
    id: 'protective',
    path: '/folie-ochronne',
    name: 'Folie ochronne',
    shortDescription:
      'Folie do zabezpieczenia gładkich powierzchni w czasie prac, użytkowania lub zmiany aranżacji.',
    lead:
      'Folie ochronne dobiera się do konkretnej sytuacji: remontu, intensywnego dotyku, ryzyka zabrudzeń albo potrzeby czasowego zabezpieczenia szkła. Innego produktu wymaga witryna w trakcie prac, a innego powierzchnia używana codziennie.',
    highlights: [
      'warianty czasowe lub długoterminowe',
      'dobór pod szkło, witrynę albo inną gładką powierzchnię',
      'mniej ryzyka przy pracach wykończeniowych i serwisowych',
    ],
    parameters: [
      'Typ: folia ochronna czasowa lub stała, zależnie od potrzeb',
      'Zastosowanie: szyby, witryny, powierzchnie gładkie',
      'Główna korzyść: ograniczenie uszkodzeń mechanicznych',
      'Dobór: zależny od czasu użytkowania i miejsca aplikacji',
    ],
    usage: [
      'zabezpieczenie nowych przeszkleń',
      'ochrona witryn i drzwi szklanych',
      'powierzchnie narażone na czasowe uszkodzenia w trakcie prac',
    ],
    image: imageOchronne,
  },
  {
    id: 'security',
    path: '/folie-zabezpieczajace',
    name: 'Folie zabezpieczające',
    shortDescription:
      'Folie przeznaczone do wzmacniania i stabilizacji szyby, kiedy ważna jest odporność i bezpieczeństwo użytkowania.',
    lead:
      'Folie zabezpieczające dobieramy wtedy, gdy chcemy zwiększyć stabilność przeszklenia i ograniczyć skutki ewentualnego uszkodzenia. To rozwiązanie uniwersalne dla obiektów prywatnych i komercyjnych, gdzie liczy się dodatkowa warstwa ochrony.',
    highlights: [
      'większa stabilność przeszklenia',
      'ograniczenie rozprysku szkła po uszkodzeniu',
      'możliwość dopasowania do różnych typów obiektów',
    ],
    parameters: [
      'Zastosowanie: budynki prywatne i komercyjne',
      'Główna korzyść: podniesienie bezpieczeństwa przeszkleń',
      'Dobór: zależny od wymaganego poziomu ochrony',
      'Montaż: zgodny z przeznaczeniem wybranego produktu',
    ],
    usage: [
      'drzwi i witryny w lokalach usługowych',
      'okna i przeszklenia w budynkach użyteczności',
      'przestrzenie wymagające większej trwałości szyb',
    ],
    image: imageZabezpieczajace,
  },
  {
    id: 'anti-eavesdropping',
    path: '/folie-anty-podsluchowe',
    name: 'Folie anty-podsłuchowe',
    shortDescription:
      'Rozwiązania wspierające prywatność i ograniczające możliwość obserwacji lub odczytu informacji przez szyby.',
    lead:
      'Folie anty-podsłuchowe dobiera się do przestrzeni, w których liczy się większa poufność i ochrona informacji. Mogą wspierać prywatność wizualną oraz ograniczać komfort obserwacji wnętrza z zewnątrz, szczególnie w biurach, gabinetach i strefach poufnych.',
    highlights: [
      'większa poufność w przestrzeniach biurowych i gabinetowych',
      'ograniczenie możliwości obserwacji wnętrza',
      'dobre uzupełnienie stref wymagających prywatności',
    ],
    parameters: [
      'Główna korzyść: wsparcie prywatności i poufności',
      'Zastosowanie: biura, gabinety, sale spotkań',
      'Dobór: zależny od charakteru przeszklenia i oczekiwanego efektu',
      'Montaż: według zaleceń dla wybranej folii specjalistycznej',
    ],
    usage: [
      'sale spotkań i gabinety zarządcze',
      'biura z poufną dokumentacją lub rozmowami',
      'strefy wymagające dodatkowej prywatności wizualnej',
    ],
    image: imageAntyPodsluchowe,
  },
  {
    id: 'thermal',
    path: '/folie-termoizolacyjne',
    name: 'Folie termoizolacyjne',
    shortDescription:
      'Wtórna warstwa Low-E dla szyb, przy których zimą wyraźnie czuć chłód od przeszklenia.',
    lead:
      'Folie termoizolacyjne dobiera się przede wszystkim do starszych szyb i pakietów, które słabo trzymają ciepło. Nie są zamiennikiem folii przeciwsłonecznych - ich zadaniem jest poprawa komfortu przy oknie w chłodniejszych okresach.',
    highlights: [
      'mniejsze odczucie zimnej szyby w pobliżu okna',
      'rozwiązanie dla szyb bez nowoczesnych powłok izolacyjnych',
      'dobór poprzedzony oceną typu pakietu szybowego',
    ],
    parameters: [
      'Typ: folia niskoemisyjna nakładana na istniejącą szybę',
      'Najpierw sprawdzamy: wiek okna, liczbę szyb i obecność powłok',
      'Nie rekomendujemy w ciemno: nowe pakiety mogą już mieć podobną funkcję',
      'Cel: poprawa komfortu bez wymiany całej stolarki',
    ],
    usage: [
      'mieszkania w starszej zabudowie',
      'pomieszczenia z miejscem pracy lub siedzenia tuż przy oknie',
      'lokale, w których wymiana szyb nie jest możliwa od razu',
    ],
    image: imageTermoizolacyjne,
  },
  {
    id: 'projection',
    path: '/folie-projekcyjne',
    name: 'Folie projekcyjne',
    shortDescription:
      'Folie pozwalające wykorzystać szybę jako powierzchnię do prezentacji obrazu, komunikatu lub reklamy.',
    lead:
      'Folie projekcyjne to rozwiązanie dla witryn, przeszkleń i powierzchni ekspozycyjnych, które mają stać się nośnikiem obrazu. Umożliwiają tworzenie nowoczesnych prezentacji i komunikatów wizualnych bez budowania dodatkowych ekranów.',
    highlights: [
      'zamiana szyby w powierzchnię ekspozycyjną',
      'ciekawy efekt dla witryn i przestrzeni komercyjnych',
      'możliwość budowy nowoczesnej komunikacji wizualnej',
    ],
    parameters: [
      'Typ: folia do projekcji na szybie',
      'Zastosowanie: witryny, lokale, stoiska, ekspozycje',
      'Dobór: zależny od projektora i warunków światła',
      'Efekt: obraz bezpośrednio na przeszklonej powierzchni',
    ],
    usage: [
      'witryny sklepowe i lokale usługowe',
      'stoiska targowe i punkty prezentacyjne',
      'nowoczesne ekspozycje wewnętrzne i zewnętrzne',
    ],
    image: imageProjekcyjne,
  },
  {
    id: 'anti-collision',
    path: '/folie-antykolizyjne',
    name: 'Folie antykolizyjne',
    shortDescription:
      'Specjalistyczne folie pomagające ograniczyć ryzyko zderzeń ptaków z szybami przy zachowaniu estetyki przeszkleń.',
    lead:
      'Folie antykolizyjne są przeznaczone do nowoczesnych przeszkleń, które mogą być nieczytelne dla ptaków. To rozwiązanie wspierające bezpieczeństwo przyrody i odpowiedzialne projektowanie elewacji oraz witryn bez pogarszania wyglądu szyby.',
    highlights: [
      'zmniejszenie ryzyka zderzeń ptaków z szybą',
      'zachowanie estetyki nowoczesnych przeszkleń',
      'rozwiązanie przyjazne środowisku i architekturze',
    ],
    parameters: [
      'Skuteczność referencyjna: do 80% redukcji ryzyka kolizji według przytoczonych badań',
      'Wygląd szyby: bez wyraźnego wpływu na estetykę szkła',
      'Zastosowanie: elewacje, witryny, przeszklenia narażone na kolizje ptaków',
      'Typ produktu: folia specjalistyczna ochrony ptaków',
    ],
    usage: [
      'przeszklone elewacje budynków',
      'wiaty, witryny i nowoczesne fasady',
      'obiekty, które chcą ograniczyć wpływ na środowisko',
    ],
    image: imageAntykolizyjne,
  },
  {
    id: 'architectural-wraps',
    path: '/okleiny-i-laminaty-architektoniczne',
    name: 'Okleiny i laminaty architektoniczne',
    serviceBadge: 'Okleiny i laminaty Lumera',
    shortDescription:
      'Metamorfoza ram okiennych, drzwi, futryn, mebli i gładkich powierzchni bez wymiany elementów.',
    lead:
      'Okleiny i laminaty architektoniczne to osobna gałąź oferty Lumera: nie są folią okienną na szybę, tylko materiałem do odnawiania i zmiany wyglądu istniejących powierzchni. Stosuje się je na ramy okienne, drzwi, futryny, fronty meblowe, zabudowy, lady, panele i inne gładkie elementy, gdy chcesz uzyskać efekt drewna, kamienia, betonu, metalu albo jednolitego koloru bez demontażu i kosztownej wymiany. To dobre rozwiązanie do mieszkań, lokali usługowych, biur, hoteli i obiektów, w których liczy się szybka, czysta zmiana wizualna przy zachowaniu istniejącej konstrukcji.',
    highlights: [
      'zmiana wyglądu powierzchni bez wymiany ram, drzwi, futryn lub mebli',
      'szeroki wybór wykończeń: drewno, kamień, beton, metal, mat, połysk i kolory jednolite',
      'czystsza i szybsza alternatywa dla remontu, malowania lub wymiany zabudowy',
      'możliwość odnowienia elementów, które technicznie są sprawne, ale wizualnie nie pasują do wnętrza',
    ],
    parameters: [
      'To nie jest folia na szybę: montaż dotyczy ram, drzwi, futryn, mebli i wybranych powierzchni gładkich',
      'Podłoże: stabilne, czyste, odtłuszczone, bez łuszczącej się farby i głębokich uszkodzeń',
      'Efekt: dekoracyjny laminat lub okleina o wybranym wykończeniu',
      'Zakres: pojedyncze elementy, komplet drzwi, ramy okienne, zabudowy meblowe, recepcje, lady i fronty',
      'Wycena: potrzebne zdjęcia powierzchni, wymiary, liczba elementów, miejsce montażu i oczekiwany kierunek wykończenia',
    ],
    usage: [
      'ramy okienne i parapety wewnętrzne, które mają zmienić kolor lub lepiej pasować do wnętrza',
      'drzwi, futryny i ościeżnice po zmianie aranżacji mieszkania, biura lub lokalu',
      'fronty meblowe, szafy, zabudowy, lady recepcyjne i elementy wyposażenia',
      'lokale usługowe, gabinety, biura i hotele wymagające szybkiego odświeżenia bez długiego remontu',
      'powierzchnie, które są technicznie dobre, ale wizualnie zużyte, niemodne albo niespójne z projektem',
    ],
    image: imageArchitecturalWraps,
  },
  {
    id: 'film-removal',
    path: '/demontaz-folii-okiennych',
    name: 'Demontaż folii okiennych',
    shortDescription:
      'Usuwanie starej aplikacji razem z klejem i przygotowanie szyby pod dalsze prace.',
    lead:
      'Demontaż folii okiennych wykonujemy wtedy, gdy aplikacja zestarzała się, zaczęła odchodzić od szyby albo przeszklenie ma zostać przygotowane pod nową folię. Zakres zależy od kleju, wieku folii i tego, czy po usunięciu planowany jest kolejny montaż.',
    highlights: [
      'usunięcie starej folii, kleju i zabrudzeń po aplikacji',
      'przygotowanie szyby pod nowy montaż lub pozostawienie czystej powierzchni',
      'bezpieczniejsza alternatywa dla samodzielnego zrywania folii',
    ],
    parameters: [
      'Zakres: demontaż folii okiennych, przeciwsłonecznych, matowych i ochronnych',
      'Główna korzyść: czysta szyba bez resztek folii i kleju',
      'Dobór metody: zależny od rodzaju folii, wieku aplikacji i stanu szyby',
      'Możliwość połączenia: demontaż starej folii i montaż nowej w jednej realizacji',
    ],
    usage: [
      'stare folie z pęcherzami, przebarwieniami lub odklejonymi krawędziami',
      'szyby przygotowywane pod nową folię',
      'witryny, biura i lokale po zmianie aranżacji lub najemcy',
    ],
    image: imageDemontaz,
  },
];

export const filmsData = baseFilmsData.map((film) => {
  const seoData = filmSeoData[film.id] || {};
  const extraFaq = filmExtraFaqData[film.id] || [];

  return {
    ...film,
    ...seoData,
    ...filmDecisionData[film.id],
    ...filmStrengtheningData[film.id],
    faq: [...(seoData.faq || []), ...extraFaq],
  };
});

export const getFilmByPath = (path) =>
  filmsData.find((film) => film.path === path);

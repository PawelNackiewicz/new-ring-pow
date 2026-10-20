# IdoSell: granice wdrożenia

Stan źródeł: 20.10.2026. Nie logowano się do panelu sklepu. PoC nie jest szablonem do importu do IdoSell; React służy wyłącznie porównaniu propozycji.

## Potwierdzone w dokumentacji

| Możliwość | Źródło i znaczenie |
|---|---|
| Własny CSS dla STANDARD | [Modyfikacja szablonu](https://pomoc.idosell.com/wyglad-i-konfiguracja/composer/modyfikacja-szablonu-sklepu): Sklep → Szablon sklepu → Dostosuj → Edycja CSS → CUSTOM.CSS. P1, bez zmiany logiki komponentu. |
| Kolory, fonty, przyciski | [Zarządzanie szablonami](https://pomoc.idosell.com/wyglad-i-konfiguracja/zarzadzanie-szablonami-strony): schematy kolorystyczne obejmują font i styl przycisków; custom.css dodawany jest do podstron. Style należy ograniczyć do głównej. |
| Komponenty i Less | [Composer](https://pomoc.idosell.com/wyglad-i-konfiguracja/composer/konfiguracja): strona główna ma osobny widok komponentów; istnieje wymiana, ukrywanie, kolejność i historia. Edycja kodu komponentu/wersja Pro to inny zakres niż proste treści/CSS. |
| Banery HTML | [Bannery i reklamy](https://pomoc.idosell.com/wyglad-i-konfiguracja/bannery-toplayery-reklamy/bannery-i-reklamy): tryb HTML, grafika, tekst, ustawienia kolejności i liczby reklam. P2 dla nowej struktury HTML. |
| Strefy CMS i menu | [Konfiguracja strony głównej](https://pomoc.idosell.com/wyglad-i-konfiguracja/konfiguracja-strony-glownej-w-szablonach-idosell): Sklep → Dodatkowe treści CMS; Banery i buttony; Menu i podstrony opisowe w masce. Dokładne strefy zależą od kompozycji. |
| Standard i Lite | [Galeria szablonów](https://pomoc.idosell.com/wyglad-i-konfiguracja/galeria-szablonow): gotowe szablony RWD oraz możliwość konfiguracji treści i kompozycji. Nie wynika z tego, że dowolna zmiana kodu jest bezpłatna. |
| Aktualizacje dostępności | [Komponenty WCAG](https://pomoc.idosell.com/wyglad-i-konfiguracja/composer/komponenty-standard-z-aktualizacjami-zwiekszajacymi-zgodnosc-z-wcag): aktualizacje STANDARD obejmują m.in. menu, hotspoty, strukturę strony. |

## Potwierdzone w DOM sklepu

`#main_banner1 .main_slider` jest ramką bannerową ze Slick i wideo. `#main_hotspot_zone1` to hotspot produktowy. `#main_blog` to ramka artykułów. `#main_cms .kategorie__wrapper` zawiera własne kafle z tłem, a `#main_cms2 ._ae_desc` tekst SEO. `#menu_categories` zawiera istniejące wielopoziomowe menu. Źródła: [strona](https://ring-sport.pl/), `sources/home.html`, `sources/home-dom.json`, `sources/store.css`.

## Poziomy i założenia do sprawdzenia w panelu

- **P0**: edycja treści i semantyki w istniejącym WYSIWYG, podmiana banera, linków, alt, title/description, wybór produktów i kolejność gotowych ramek. Zakładamy, że właściciel ma dostęp do tych modułów.
- **P1**: custom.css / schemat kolorów, odstępy, siatki, typografia, kadrowanie obrazu. Proste selektory pod kontenerem strony głównej; bez zastępowania treści pseudoelementami.
- **P2**: nowy statyczny HTML w strefie CMS lub bannerze: cele, proces, wycena, FAQ/details. Bez skryptów, własnych filtrów i karuzel.
- Nie potwierdzono nazwy kompozycji i możliwości przesunięcia konkretnej strefy. W wariancie 1 zakładamy przesunięcie istniejącego bloku korzyści w Composerze lub CSS, bez napisania nowego bloku. Jeśli panel nie pozwoli go wydzielić, zostawić istniejący blok na miejscu — nie obiecywać wykonania P0.
- Wariant 1: H1 i CTA w istniejącym edytowalnym opisie/bannerze, przez WYSIWYG (P0), układ obok istniejącej grafiki (P1). Jeżeli istniejący moduł nie udostępnia nagłówka/linków, najtańszy wariant P0 to H1 nad bannerem w istniejącej strefie opisu; nowy HTML hero byłby już P2 i nie należy do wariantu 1.
- Nazwy panelowe w drawerze są wskazówkami; nie gwarantujemy identycznych etykiet w każdej rewizji panelu. Dla pól SEO trzeba znaleźć ustawienia strony głównej/SEO w używanym panelu.
- Semantyczna zmiana viewport leży w komponencie struktury szablonu. Nie przypisujemy jej pozornie do CSS. W sklepie należy sprawdzić aktualizację STANDARD/usunąć ograniczenie przez wsparcie; to osobna czynność poza zmianami P0–P2 PoC.
- JSON-LD jest **propozycją w panelu audytu**, nie kodem wstrzykniętym do PoC. Aktualizację istniejących danych trzeba skoordynować z generatorem IdoSell, bez dodawania duplikatów przez CMS. Nie zakładamy, że edytor przepuszcza `<script>`.
- Proces konsultacja → dobór → produkcja → dostawa/montaż → wsparcie jest proponowanym sposobem opisu oferty, a nie potwierdzonym SLA firmy. Montaż i produkcję trzeba uzgodnić dla konkretnego zamówienia. Nie obiecujemy terminów, bezpłatnej dostawy ani produkcji każdego towaru przez RING.

## Mapowanie elementów we wszystkich wariantach

Każda sekcja ma atrybut `data-level`; wszystkie warianty dziedziczą nagłówek i stopkę P0 oraz styl P1. Drawer pokazuje także zmiany wspólne. React, taby, URL wariantu i drawer należą tylko do powłoki prezentacyjnej.

| Sekcja | W1 | W2 | W3 | W4 | W5 | Miejsce |
|---|---|---|---|---|---|---|
| Nagłówek, menu i stopka | P0 | P0 | P0 | P0 | P0 | Logo/top, menu, dane firmy |
| Hero/H1/CTA | P0 + P1 | P2 + P1 | P2 + P1 | P0 + P1 | P2 + P1 | Istniejący edytor w W1/W4; banner HTML w W2/W3/W5 |
| Pasek zaufania | P0 + P1 | P0 + P1 | P0 + P1 | P0 + P1 | P0 + P1 | Istniejące korzyści / kolejność komponentów |
| Kafle kategorii | P0 + P1 | P0 + P1 | P0 + P1 | P0 + P1 | P0 + P1 | Istniejąca strefa kafli |
| Produkty/bestsellery/promocje/outlet | P0 + P1 | P0 + P1 | P0 + P1 | P0 + P1 | P0 + P1 | Istniejące ramki produktowe/hotspoty |
| Cztery ścieżki | — | P2 | — | — | P2 | Nowy blok CMS |
| Historia/polecenie/opinie | — | — | P2 | — | — | Nowy blok CMS + istniejący banner |
| Proces | — | — | P2 | — | P2 | Statyczna lista CMS |
| B2B / kontakt | — | P2 | P2 | — | P2 | CMS, link do kontaktu/tel/mailto |
| Korzyści zakupowe | P0 | P0 | P0 | P0 | P0 | Istniejące odnośniki informacyjne |
| Blog, tekst SEO, Instagram | P0 + P1 | P0 + P1 | P0 + P1 | P0 + P1 | P0 + P1 | Ramka bloga, WYSIWYG, istniejący link |
| FAQ | — | — | P2 | — | P2 | HTML details/summary |

## Poza zakresem

Żadnej nowej logiki koszyka, konta, wyszukiwania, formularza, konfiguratora, JS slidera, filtrów, integracji danych, scroll animations ani wielojęzyczności. Linki otwierają istniejący sklep. W prawdziwym IdoSell zachowuje się natywne mechanizmy platformy. PoC nie zawiera danych klientów ani śledzenia.

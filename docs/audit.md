# Audyt strony głównej RING-SPORT

20.10.2026. Podstawa: [research](research.md) i zapisane źródła. To audyt ekspercki bez GA4, Search Console, wywiadów i pomiarów konwersji. Skutki zmian są hipotezami, nie prognozą procentowego wzrostu.

## Co działa

Produkcja w Krasiejowie i historia od 2007 r. to konkretne wyróżniki. Oferta obejmuje detal, wyposażenie sal, ringi/klatki i boiska. Firma opisuje hurt, produkcję dla innych marek i przetargi. Widoczny widget Smile 4,9/5 (214 opinii w odczycie). Banner z poleceniem Głowackiego — wykorzystujemy istniejący materiał, bez dopisywania cytatu czy tytułów sportowych. Są prawdziwe bestsellery, przydatne artykuły oraz telefon i e-mail.

## Problemy UX

- Różne grupy odbiorców trafiają na jedno rozbudowane menu. Klub i amator potrzebują innego pierwszego kroku.
- Hero zmienia przekaz; tekst na grafice nie zastępuje stałego H1. Pierwszy slajd to wideo produktu. Przy droższym zakupie przyda się osobny kontakt w sprawie wyceny.
- Korzyści producenta są daleko pod hero. Propozycja: przenieść istniejący pasek wyżej, jeśli pozwala kompozycja.
- Kafle mają ogólne „Zobacz”; lepsze opisowe nazwy i klikalny obszar. P0 edycja linku/nazwy, P1 siatka.
- Nieaktualny staż budzi niepotrzebną wątpliwość. Używać „Od 2007 roku”.
- Mobile: blokada zoomu jest potwierdzona w viewport. Gęste menu i duże bannery wymagają sprawdzenia dotykiem. Nie twierdzimy, że zmierzono Core Web Vitals oryginalnej strony.
- W promocjach trzeba zachować cenę bieżącą, regularną i najniższą z 30 dni. Nie zastępować ich wymyśloną przekreśloną ceną.

## Problemy SEO

Brak H1; title jest rozbudowany; blok SEO powtarza podobne obietnice, ma zagnieżdżone strong mimo normalnej wagi spanów. Potwierdzone błędy alt i parametry kampanii w linkach wewnętrznych. Mieszane formaty URL i powtórzenia menu wymagają kontroli przekierowań, a nie automatycznej wymiany całego menu. Canonical strony głównej jest poprawny.

Istnieją Organization i WebSite + SearchAction. Warto uzupełnić nazwę, kontakt, adres i sameAs w jednym spójnym grafie. LocalBusiness dopiero po potwierdzeniu charakteru placówki i danych lokalnych; bez wymyślonych godzin/geo. Nie dodawać AggregateRating z recenzji o własnej firmie jako sposobu uzyskania gwiazdek.

FAQ jest przydatne użytkownikowi, ale nie traktujemy go jako szybkiej drogi do rozszerzonych wyników. [Google wyłączył FAQ rich results w maju 2026](https://developers.google.com/search/updates); [sitelinks search box usunięto w listopadzie 2024](https://developers.google.com/search/blog/2024/10/sitelinks-search-box). Zachowanie SearchAction nie powoduje samo w sobie problemu, ale nie daje tej funkcji w Google. Propozycje JSON-LD w drawerze nie są automatycznie wdrażane ani dublowane w PoC.

## Persony

| Klient | Potrzeba | Obawa | Co powinien zobaczyć |
|---|---|---|---|
| Zawodnik / amator | Sprzęt do konkretnego treningu | Wybór modelu, cena, zwrot | Kategorie boks/MMA, zdjęcie i cena, bestsellery, linki do warunków zakupów |
| Trener / klub | Wyposażenie sali i uzupełnianie sprzętu | Dopasowanie do powierzchni, trwałość, obsługa | Maty/worki/mocowania, producent, doradztwo, łatwa wycena |
| Szkoła / obiekt / samorząd | Sala lub boisko, dokumentacja zamówienia | Zgodność z potrzebami, dostawa i montaż, procedura zakupu | Oferta obiektów, boiska/trybuny, informacja o doświadczeniu w przetargach, dane firmy i kontakt |
| Hurtownik / sklep | Stała współpraca i zakup większej ilości | Warunki współpracy, kontakt, ciągłość dostaw | Hurt, produkcja dla innych marek, istniejąca rejestracja hurtownika i kontakt; bez obietnicy rabatu |

## Quick wins według efektu do nakładu

| Kolejność | Zmiana | Poziom / nakład | Efekt (hipoteza) | Pomiar |
|---|---|---|---|---|
| 1 | Stały H1 + jasne CTA do sprzętu; drugi link do wyceny | P0/P1, S–M | Wysoki | CTR hero do kategorii i kontaktu |
| 2 | Usunąć tracking z wewnętrznych linków, poprawić alt i staż | P0, S | Średni | Kontrola crawl + przejścia do kategorii |
| 3 | Przenieść potwierdzone korzyści producenta pod hero | P0/P1, S–M | Wysoki | Przejścia produkt/kontakt; osobno mobile |
| 4 | Cztery ścieżki do istniejącej oferty | P2/P1, M | Wysoki | CTR ścieżek, przejścia do produktu, zapytania |
| 5 | Skrócić SEO: title/description, H2/H3, linki tematyczne | P0, S | Średni | GSC: CTR i zapytania przy porównywalnej pozycji |
| 6 | Wyżej ramki produktów z prawdziwymi cenami | P0/P1, M | Wysoki dla detalu | Przejście na produkt, dodania do koszyka w sklepie, konwersja |
| 7 | Stała sekcja wyceny dla obiektów | P2, M | Wysoki dla B2B | Kliknięcia tel/mailto i zakwalifikowane zapytania |
| 8 | Uporządkować istniejący JSON-LD i viewport | Weryfikacja szablonu/wsparcie | Średni | Walidacja grafu, test zoom 200% |

S = zwykle do 2 h; M = zwykle 2–8 h; L = ponad dzień. Szacunki orientacyjne przy dostępie do panelu, materiałów i znajomości kompozycji; nie stanowią wyceny. Osobna sesja testowa wymagana po publikacji w sklepie.

## Pięć hipotez i rekomendacja

1. **Porządki**: najtańszy punkt odniesienia; zachowuje hero → bestsellery → kategorie → blog → SEO → Instagram → stopka, jedynie korzyści idą wyżej. W1 nie ma nowego HTML P2.
2. **Ścieżki celu**: najlepszy start po podstawowych poprawkach W1. Firma rzeczywiście obsługuje detal, kluby, obiekty i hurt, więc jedna prosta sekcja może ograniczyć zagubienie klientów.
3. **Producent z Krasiejowa**: historia, istniejące polecenie, link do opinii i proponowany proces. Dla osób porównujących dostawców droższego sprzętu.
4. **Sklep najpierw**: krótsze hero, kategorie i ramki bestsellerów/promocji/outletu wysoko. Dla ruchu detalicznego; dobry test przy kampaniach kierowanych do amatorów.
5. **Obiekty i B2B**: dwie jawne drogi, materiały dla klubów/szkół, ringi i klatki z kontaktem, boiska/trybuny i hurt. Nie wymyślamy certyfikacji, realizacji ani terminów. Proces to propozycja treści do uzgodnienia.

Wszystkie pomysły mają podstawę w ofercie. Na start rekomendacja: **W2, poprzedzony wspólnymi poprawkami W1**. Przy bardzo małym budżecie wdrożyć samo W1. Zestawić 2 tygodnie pomiaru bazowego i 2–4 tygodnie po zmianie (przy wystarczającym ruchu), kontrolując źródła ruchu, sezonowość i urządzenia. Kliknięcie mailto nie jest równoznaczne z otrzymanym zapytaniem; weryfikować także realne kontakty. PoC nie instaluje analityki.

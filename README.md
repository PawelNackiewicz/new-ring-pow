# RING-SPORT — pięć wariantów strony głównej

React + TypeScript + Vite. Tylko strona główna, desktop i mobile. Wspólne dane marki, 11 prawdziwych produktów, zdjęcia hotlinkowane z ring-sport.pl oraz osobny panel audytu dla każdego wariantu. Bez Tailwinda, bibliotek UI i animacji.

## Uruchomienie

Node 22.12+ (kontrola danych korzysta z eksperymentalnego strip-types w Node 22), npm 10+.

```bash
npm ci
npm run dev
npm run build
npm run lint
npm run check:content
npm run preview
```

Otwórz adres pokazany przez Vite. Linki `/?v=1` … `/?v=5` otwierają konkretny wariant. Brak/nieprawidłowe `v` wybiera wariant 1. Taby obsługują strzałki, Home/End, historię wstecz/dalej. CTA kierują do istniejącego sklepu, kontaktu lub widocznej sekcji. Nie wykonują zakupu ani nie wysyłają wiadomości.

## Warianty

| Wariant | Pomysł | Maksymalny poziom |
|---|---|---|
| 1. Porządki | Znajomy układ, stały H1, korzyści wyżej, uporządkowane treści | P1 |
| 2. Ścieżki celu | Cztery drogi: trening, klub/sala, ring/klatka, hurt | P2 |
| 3. Producent z Krasiejowa | Historia, prawdziwy banner polecenia, link do opinii, proces | P2 |
| 4. Sklep najpierw | Krótsze hero, kategorie, bestsellery, promocja i outlet | P1 |
| 5. Obiekty i B2B | Oferta dla obiektów i hurtu oraz wyraźny kontakt w sprawie wyceny | P2 |

„Audyt strony” otwiera natywny modalny dialog. Ma zamknięcie Escape, kontrolę fokusu i blokadę przewijania tła. Zawiera wspólny audyt, odbiorcę, hipotezę, metrykę, poziomy P0/P1/P2, szacunek S/M/L, spodziewany efekt, instrukcje panelowe oraz propozycję SEO i JSON-LD. Taby i dialog są powłoką PoC, nie elementami do wdrożenia w IdoSell.

## Dokumentacja i dane

- [Research, firma, produkty, pełne drzewo menu, SEO i inspiracje](docs/research.md).
- [Potwierdzone możliwości IdoSell, założenia i mapowanie sekcji](docs/idosell-constraints.md).
- [Audyt UX/SEO, persony i priorytety](docs/audit.md).
- [Kontrole jakości i ograniczenia weryfikacji](docs/qa.md).
- `docs/sources/`: zapis pobranego HTML i CSS oraz renderowanego DOM. Surowe źródła mogą zawierać pierwotne literówki i parametry śledzące; nigdy nie są wykonywane przez PoC ani dodawane do paczki frontendu.
- `src/data/content.ts`: jedyne źródło danych marki, cen, URL, obrazów i tekstów sekcji. Treści redagowane są oznaczone `// PROPOZYCJA`.
- `src/data/audit.ts`: analizy, propozycje SEO, instrukcje wdrożenia; dane firmy pobiera z content.ts.
- `src/components/`: współdzielone sekcje, taby, drawer.
- `src/variants/Variant1..5.tsx`: różna kolejność i wybór sekcji.
- `src/styles/base.css` + `variant-1..5.css`: zwykły CSS. Sekcje mają `data-level`, style sklepu są P1. Dokładne mapowanie w dokumencie ograniczeń.

## Założenia i ograniczenia

1. Research z 20.10.2026. Ceny i oceny są snapshotem. Widget sklepu wskazywał 4,9/5 i 214 opinii. Nie wymyślono recenzji, rabatów, terminów, certyfikatów ani klientów.
2. Ringi i klatki bez jawnej kwoty mają „Cena na telefon”. Promocja zachowuje obecną cenę, regularną i najniższą z 30 dni. W IdoSell ceny mają pochodzić z natywnych ramek, nie statycznego CMS.
3. Produkcja w Krasiejowie i historia od 2007 r. są potwierdzone. Proces obsługi jest proponowanym opisem do uzgodnienia, bez gwarancji montażu lub produkcji każdego towaru z oferty. „Ringi/klatki na wymiar” nie jest rozszerzone na niezweryfikowane możliwości modeli; PoC kieruje do rozmowy o doborze.
4. Nie znamy zainstalowanej kompozycji, uprawnień ani dokładnego układu panelu. W1 zakłada edycję istniejącego WYSIWYG i przesunięcie istniejących korzyści. Jeśli kompozycja nie pozwala na przeniesienie korzyści, pozostawić je na miejscu. Nowy hero HTML byłby P2; nie należy go sprzedawać jako P0. W3/W5 wymagają dostępnej strefy HTML CMS.
5. React nie jest do osadzenia w IdoSell. Po wyborze przenosi się treści, konfigurację ramek i proste reguły CSS; sekcje P2 odtwarza jako statyczny HTML. Nie przygotowano importowalnego szablonu IdoSell. Nagłówek PoC prezentuje skrócone odnośniki do oferty. Natywną wyszukiwarkę, konto i koszyk zachowuje się w produkcyjnym sklepie; ich logiki tutaj nie implementowano.
6. Wszystkie obrazy mają lazy loading, wymiary i alt oraz neutralny fallback. Duże hero korzysta z kadru istniejącego banera SVG; bez pobierania lub przerabiania zdjęć. Kadrowanie jest CSS, nie konfigurator. Oryginalne bannery mogą przedstawiać wizualizacje — nie nazywamy ich dokumentacją konkretnych realizacji.
7. **Przy weryfikacji wszystkie użyte obrazy załadowały się poprawnie.** Hotlinki mogą przestać działać po zmianach w sklepie. Fallback pokazuje „Zdjęcie chwilowo niedostępne”; przetestowano również wymuszony błąd. Oryginalne małe kafle mogą być mniej ostre na ekranach HiDPI. Ilustracje poradników to istniejące zdjęcia kategorii, nie oryginalne okładki bloga.
8. `noindex,nofollow` oraz robots.txt chronią przed indeksowaniem demonstracji. Propozycje title/description/JSON-LD są w drawerze, nie symulują produkcyjnego SEO na domenie PoC. Brak canonical do sklepu jest świadomy. Nie wstrzykujemy schema o sklepie na obcej domenie ani nie tworzymy powielonych Organization. Wdrożenie grafu wymaga współpracy z generatorem IdoSell. LocalBusiness wymaga potwierdzenia lokalnej placówki.
9. FAQ jest statyczne (`details`). Nie obiecujemy FAQ rich results ani pola wyszukiwania Google za SearchAction. Uzasadnienie i źródła Google w audycie.
10. P0/P1/P2 i S/M/L są klasyfikacją oraz szacunkiem, nie ofertą wdrożenia. Nie testowano zmian w rzeczywistym panelu IdoSell ani działania natywnego koszyka sklepu.
11. Terminal nie rozwiązywał DNS. HTML pobrano przez fetch w przeglądarce. Zależności zainstalowano z lokalnego cache; lockfile oraz przypięte zakresy overrides dla dostępnych zależności przechodnich pozwalają odtworzyć instalację. Cache nie należy do projektu. W normalnym środowisku użyj `npm ci`.
12. Lokalna konfiguracja Sites (`.openai/`) jest pomijana w repozytorium. Projekt nie wymaga kluczy API ani zmiennych środowiskowych.

## Wdrożenie na Vercel

Zaimportuj repozytorium `PawelNackiewicz/new-ring-pow` i wybierz gałąź `main`. Plik `vercel.json` ustawia:

- Framework: Vite.
- Install Command: `npm ci`.
- Build Command: `npm run build`.
- Output Directory: `dist`.
- Root Directory: główny katalog repozytorium.

Użyj Node.js 22.x. Nie są potrzebne zmienne środowiskowe ani backend. Warianty działają pod adresem wdrożenia z parametrem `?v=1` … `?v=5`; nie wymagają dodatkowych reguł routingu. Publiczny podgląd nadal ma `noindex` i blokadę indeksowania w robots.txt, ponieważ jest demonstracją istniejącego sklepu.


## Rekomendacja

W2 „Ścieżki celu” po wspólnych poprawkach W1. Jest zgodny z rzeczywistym podziałem klientów firmy, a do najtańszych poprawek dokłada prostą sekcję CMS. Przy minimalnym budżecie zacząć wyłącznie od W1. Hipotezy mierzyć w prawdziwym sklepie, osobno dla detalu i zapytań o obiekty; PoC nie zbiera analityki.

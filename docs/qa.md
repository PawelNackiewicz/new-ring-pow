# Weryfikacja PoC — 20.10.2026

## Wykonane kontrole

- `npm run build`: TypeScript i produkcyjny Vite build.
- `npm run lint`: ESLint z regułami TypeScript i React Hooks.
- `npm run check:content`: pięć wariantów, 11 produktów, limity 60/155 znaków, poprawny JSON-LD, brak P2 w W1, oczyszczone linki i źródła produktów.
- Chrome: każdy wariant przy szerokościach 360, 768 i 1440 px. `scrollWidth === innerWidth`; jedno H1; każda sekcja main oznaczona P0/P1/P2.
- Wszystkie użyte obrazy w pięciu wariantach zdekodowane: zero błędów i zero placeholderów podczas sprawdzania dostępności. W teście zdjęć wymuszono ładowanie obrazów poniżej ekranu, aby lazy loading nie dał fałszywych wyników.
- Fallback: podmieniono źródło obrazu na nieistniejący plik; pojawił się neutralny placeholder z etykietą dostępną. Po przeładowaniu oryginalne zdjęcie działało. FAQ otwiera odpowiedź natywnym details.
- Taby: kliknięcie zmienia widok i parametr `v`; ArrowLeft przenosi wybór i focus; historia Back odtwarza wariant.
- Drawer: otwarcie, focus na zamknięciu, modalność, zatrzymanie fokusu w dialogu, Escape, powrót na przycisk oraz odblokowanie przewijania.
- Lighthouse snapshot, desktop: dostępność **100/100 dla każdego z pięciu wariantów**, Best Practices 100. Drawer na mobile: dostępność 100/100. To test automatyczny, nie deklaracja pełnej zgodności WCAG całego sklepu.
- Poprawiono wykryty kontrast numerów tabów i podpisu Instagrama. Dodano poprawny robots.txt, zamiast odpowiedzi HTML z fallbacku Vite.

## Granice

Lighthouse snapshot nie jest testem wydajności ani crawlowalności produkcyjnego IdoSell. Wynik SEO 100 w tym trybie nie potwierdza indeksowalności — PoC celowo ma noindex. Dodatkowa eksperymentalna kategoria „Agentic Browsing” zgłasza brak llms.txt; taki plik nie jest częścią wymagań i nie dodano go dla poprawy punktacji.

Nie sprawdzono Safari/Firefox, czytnika ekranu ani panelu IdoSell. Nie wykonano pomiaru konwersji lub Core Web Vitals oryginalnego sklepu. Zrzuty desktop i mobile przejrzano wizualnie w przeglądarce.

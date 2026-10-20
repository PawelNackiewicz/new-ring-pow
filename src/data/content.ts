// Dane zweryfikowane 20.10.2026. Źródła: docs/sources/ i docs/research.md.
export type Level = 'P0' | 'P1' | 'P2';
export type VariantId = 1 | 2 | 3 | 4 | 5;
export interface Product { id: string; name: string; url: string; price: string; image: string; group: string; source: string; regularPrice?: string; lowestPrice?: string }
export interface MenuItem { name: string; url: string; children?: MenuItem[] }
export const brand = {
  "name": "RING-SPORT",
  "legalName": "RING-SPORT sp. z o.o.",
  "since": "2007",
  "phone": "694 297 160",
  "phoneUrl": "tel:+48694297160",
  "email": "biuro@ring-sport.pl",
  "address": "Młyńska 14, 46-040 Krasiejów",
  "postalAddress": {"streetAddress": "Młyńska 14", "postalCode": "46-040", "addressLocality": "Krasiejów", "addressCountry": "PL"},
  "nip": "9910542866",
  "krs": "0000942323",
  "regon": "520810848",
  "logo": "https://ring-sport.pl/data/gfx/mask/pol/logo_1_big.png",
  "url": "https://ring-sport.pl/",
  "contact": "https://ring-sport.pl/pl/contact.html",
  "about": "https://ring-sport.pl/Informacje-o-sklepie-cterms-pol-19.html",
  "instagram": "https://www.instagram.com/ringsportpoland/",
  "facebook": "https://www.facebook.com/ringsportPL",
  "reviewsUrl": "https://zaufaneopinie.smile.pl/ring-sport.pl",
  "rating": "4,9",
  "reviewCount": 214,
  "sourceDate": "2026-10-20",
  "colors": {
    "primary": "#ca4c56",
    "text": "#333333",
    "background": "#ffffff",
    "border": "#c4c7c8"
  },
  "font": "Arial, Helvetica, sans-serif"
};

export const originalMenu: MenuItem[] = [
  {
    "name": "Asortyment",
    "url": "https://ring-sport.pl/asortyment.html",
    "children": [
      {
        "name": "Worki treningowe",
        "url": "https://ring-sport.pl/worki-treningowe.html",
        "children": [
          {
            "name": "Worki bokserskie",
            "url": "https://ring-sport.pl/worki-bokserskie.html"
          },
          {
            "name": "Worki treningowe stojące",
            "url": "https://ring-sport.pl/worki-treningowe-stojace.html"
          },
          {
            "name": "Worki do MMA",
            "url": "https://ring-sport.pl/worki-treningowe-mma.html"
          },
          {
            "name": "Worki bokserskie dla dzieci",
            "url": "https://ring-sport.pl/pl/menu/worki-bokserskie-dla-dzieci-305.html"
          },
          {
            "name": "Mocowania i uchwyty",
            "url": "https://ring-sport.pl/mocowania-i-uchwyty.html"
          },
          {
            "name": "Zestawy bokserskie",
            "url": "https://ring-sport.pl/zestawy-bokserskie.html"
          }
        ]
      },
      {
        "name": "Gruszki bokserskie",
        "url": "https://ring-sport.pl/gruszki-bokserskie.html",
        "children": [
          {
            "name": "Gruszki bokserskie",
            "url": "https://ring-sport.pl/pl/menu/gruszki-bokserskie-216.html"
          },
          {
            "name": "Gruszki refleksówki",
            "url": "https://ring-sport.pl/gruszki-refleksowki.html"
          },
          {
            "name": "Platformy bokserskie",
            "url": "https://ring-sport.pl/platformy-bokserskie.html"
          }
        ]
      },
      {
        "name": "Kamizelki obciążeniowe",
        "url": "https://ring-sport.pl/kamizelki-obciazeniowe.html"
      },
      {
        "name": "Rękawice",
        "url": "https://ring-sport.pl/rekawice-treningowe.html",
        "children": [
          {
            "name": "Rękawice bokserskie",
            "url": "https://ring-sport.pl/rekawice-bokserskie.html"
          },
          {
            "name": "Rękawice MMA",
            "url": "https://ring-sport.pl/rekawice-mma.html"
          },
          {
            "name": "Rękawice na siłownię",
            "url": "https://ring-sport.pl/rekawiczki-na-silownie.html"
          },
          {
            "name": "Rękawiczki fitness",
            "url": "https://ring-sport.pl/rekawiczki-fitness.html"
          },
          {
            "name": "Bandaże i owijki bokserskie",
            "url": "https://ring-sport.pl/bandaze-i-owijki-bokserskie.html"
          }
        ]
      },
      {
        "name": "Tarcze treningowe",
        "url": "https://ring-sport.pl/tarcze-treningowe.html",
        "children": [
          {
            "name": "Tarcze do kopnięć",
            "url": "https://ring-sport.pl/tarcze-do-kopniec.html"
          },
          {
            "name": "Tarcze tajskie",
            "url": "https://ring-sport.pl/tarcze-tajskie-pao.html"
          },
          {
            "name": "Łapy trenera - packi",
            "url": "https://ring-sport.pl/pl/menu/lapy-trenera-packi-214.html"
          },
          {
            "name": "Tarcze ścienne",
            "url": "https://ring-sport.pl/pl/menu/tarcze-scienne-215.html"
          }
        ]
      },
      {
        "name": "Ochraniacze",
        "url": "https://ring-sport.pl/pl/menu/ochraniacze-163.html",
        "children": [
          {
            "name": "Ochraniacze piszczeli i stopy",
            "url": "https://ring-sport.pl/ochraniacze-na-piszczele-i-stopy.html"
          },
          {
            "name": "Ochraniacze na zęby",
            "url": "https://ring-sport.pl/pl/menu/ochraniacze-na-zeby-221.html"
          },
          {
            "name": "Kaski bokserskie",
            "url": "https://ring-sport.pl/kaski-bokserskie-treningowe.html"
          },
          {
            "name": "Ochraniacze krocza - suspensory",
            "url": "https://ring-sport.pl/pl/menu/ochraniacze-krocza-suspensory-223.html"
          },
          {
            "name": "Ochraniacze brzucha i tułowia",
            "url": "https://ring-sport.pl/pl/menu/ochraniacze-brzucha-i-tulowia-224.html"
          },
          {
            "name": "Ochraniacze dłoni",
            "url": "https://ring-sport.pl/pl/menu/ochraniacze-dloni-309.html"
          }
        ]
      },
      {
        "name": "Sandbagi i powerbagi",
        "url": "https://ring-sport.pl/sandbagi-i-powerbagi.html",
        "children": [
          {
            "name": "Sandbag",
            "url": "https://ring-sport.pl/pl/menu/sandbag-225.html"
          },
          {
            "name": "Powerbag",
            "url": "https://ring-sport.pl/pl/menu/powerbag-226.html"
          }
        ]
      },
      {
        "name": "Materace i maty",
        "url": "https://ring-sport.pl/materace-i-maty-sportowe.html",
        "children": [
          {
            "name": "Materace gimnastyczne",
            "url": "https://ring-sport.pl/materace-gimnastyczne.html"
          },
          {
            "name": "Maty Tatami",
            "url": "https://ring-sport.pl/maty-tatami.html"
          },
          {
            "name": "Maty Puzzle",
            "url": "https://ring-sport.pl/maty-puzzle.html"
          },
          {
            "name": "Maty do sportów walki",
            "url": "https://ring-sport.pl/pl/menu/maty-do-sztuk-walk-188.html"
          },
          {
            "name": "Materace asekuracyjne",
            "url": "https://ring-sport.pl/materace-asekuracyjne.html"
          },
          {
            "name": "Materace dla strażaków",
            "url": "https://ring-sport.pl/materace-dla-strazakow.html"
          },
          {
            "name": "Pokrowce na materace",
            "url": "https://ring-sport.pl/pokrowce-na-materace-sportowe.html"
          }
        ]
      },
      {
        "name": "Mocowania i uchwyty",
        "url": "https://ring-sport.pl/pl/menu/mocowania-i-uchwyty-166.html",
        "children": [
          {
            "name": "Mocowania sufitowe",
            "url": "https://ring-sport.pl/pl/menu/mocowania-sufitowe-232.html"
          },
          {
            "name": "Mocowania ścienne",
            "url": "https://ring-sport.pl/pl/menu/mocowania-scienne-233.html"
          },
          {
            "name": "Mocowania na drabinki",
            "url": "https://ring-sport.pl/pl/menu/mocowania-na-drabinki-234.html"
          },
          {
            "name": "Akcesoria",
            "url": "https://ring-sport.pl/pl/menu/akcesoria-235.html"
          }
        ]
      },
      {
        "name": "Akcesoria treningowe",
        "url": "https://ring-sport.pl/pl/menu/akcesoria-treningowe-167.html",
        "children": [
          {
            "name": "Skakanki",
            "url": "https://ring-sport.pl/skakanki.html"
          },
          {
            "name": "Piłki lekarskie",
            "url": "https://ring-sport.pl/pl/menu/pilki-lekarskie-219.html"
          },
          {
            "name": "Pałki treningowe",
            "url": "https://ring-sport.pl/pl/menu/palki-treningowe-313.html"
          },
          {
            "name": "Skrzynie plyometryczne",
            "url": "https://ring-sport.pl/pl/menu/skrzynie-plyometryczne-304.html"
          },
          {
            "name": "Liny wspinaczkowe",
            "url": "https://ring-sport.pl/pl/menu/liny-wspinaczkowe-308.html"
          },
          {
            "name": "Inne",
            "url": "https://ring-sport.pl/pl/menu/inne-238.html"
          }
        ]
      },
      {
        "name": "Stoły do armwrestlingu",
        "url": "https://ring-sport.pl/pl/menu/stoly-do-armwrestlingu-168.html",
        "children": [
          {
            "name": "Stoły ze skóry naturalnej",
            "url": "https://ring-sport.pl/pl/menu/stoly-ze-skory-naturalnej-251.html"
          },
          {
            "name": "Stoły ze skóry syntetycznej",
            "url": "https://ring-sport.pl/pl/menu/stoly-ze-skory-syntetycznej-252.html"
          }
        ]
      },
      {
        "name": "Akcesoria i gadżety",
        "url": "https://ring-sport.pl/pl/menu/akcesoria-i-gadzety-255.html"
      },
      {
        "name": "Odzież",
        "url": "https://ring-sport.pl/pl/menu/odziez-300.html",
        "children": [
          {
            "name": "Koszulki",
            "url": "https://ring-sport.pl/pl/menu/koszulki-302.html"
          },
          {
            "name": "Spodenki",
            "url": "https://ring-sport.pl/pl/menu/spodenki-303.html"
          }
        ]
      },
      {
        "name": "Produkty nietypowe",
        "url": "https://ring-sport.pl/pl/menu/produkty-nietypowe-307.html"
      },
      {
        "name": "Promocje",
        "url": "https://ring-sport.pl/pl/promotions/promocja.html"
      },
      {
        "name": "OUTLET",
        "url": "https://ring-sport.pl/pl/menu/outlet-318.html"
      }
    ]
  },
  {
    "name": "Zastosowanie",
    "url": "https://ring-sport.pl/pl/menu/zastosowanie-153.html",
    "children": [
      {
        "name": "Sprzęt do boksu",
        "url": "https://ring-sport.pl/sprzet-bokserski-i-akcesoria.html"
      },
      {
        "name": "Sprzęt do MMA",
        "url": "https://ring-sport.pl/sprzet-do-mma.html"
      },
      {
        "name": "Ochraniacze",
        "url": "https://ring-sport.pl/ochraniacze-do-sztuk-walki.html"
      },
      {
        "name": "Wyposażenie obiektów",
        "url": "https://ring-sport.pl/pl/menu/wyposazenie-obiektow-172.html"
      }
    ]
  },
  {
    "name": "Ringi i klatki",
    "url": "https://ring-sport.pl/pl/categories/ringi-i-klatki-mma-1214553964.html",
    "children": [
      {
        "name": "Ringi",
        "url": "https://ring-sport.pl/pl/m/ringi-bokserskie.html",
        "children": [
          {
            "name": "Ringi podłogowe",
            "url": "https://ring-sport.pl/pl/menu/ringi-podlogowe-174.html"
          },
          {
            "name": "Ringi z podestem",
            "url": "https://ring-sport.pl/pl/menu/ringi-z-podestem-241.html"
          },
          {
            "name": "Akcesoria do ringów",
            "url": "https://ring-sport.pl/pl/menu/akcesoria-do-ringow-177.html"
          }
        ]
      },
      {
        "name": "Klatki MMA",
        "url": "https://ring-sport.pl/pl/menu/klatki-mma-244.html",
        "children": [
          {
            "name": "Klatki MMA podłogowe",
            "url": "https://ring-sport.pl/pl/menu/klatki-mma-podlogowe-245.html"
          },
          {
            "name": "Klatki MMA z podestem",
            "url": "https://ring-sport.pl/pl/menu/klatki-z-podestem-mma-180.html"
          },
          {
            "name": "Panele ścienne",
            "url": "https://ring-sport.pl/pl/menu/panele-scienne-293.html"
          }
        ]
      }
    ]
  },
  {
    "name": "Zestawy",
    "url": "https://ring-sport.pl/pl/menu/zestawy-157.html",
    "children": [
      {
        "name": "Zestawy bokserskie wypełnione",
        "url": "https://ring-sport.pl/pl/menu/zestawy-bokserskie-wypelnione-249.html"
      },
      {
        "name": "Zestawy bokserskie puste",
        "url": "https://ring-sport.pl/pl/menu/zestawy-bokserskie-puste-250.html"
      },
      {
        "name": "Zestawy bokserskie dla dzieci i młodzieży",
        "url": "https://ring-sport.pl/pl/menu/zestawy-bokserskie-dla-dzieci-i-mlodziezy-248.html"
      }
    ]
  },
  {
    "name": "Wyposażenie obiektów sportowych",
    "url": "https://ring-sport.pl/pl/menu/wyposazenie-obiektow-sportowych-154.html",
    "children": [
      {
        "name": "Ringi",
        "url": "https://ring-sport.pl/pl/m/ringi-bokserskie.html",
        "children": [
          {
            "name": "Ringi podłogowe",
            "url": "https://ring-sport.pl/pl/menu/ringi-podlogowe-174.html"
          },
          {
            "name": "Ringi z podestem",
            "url": "https://ring-sport.pl/pl/menu/ringi-z-podestem-241.html"
          },
          {
            "name": "Akcesoria do ringów",
            "url": "https://ring-sport.pl/pl/menu/akcesoria-do-ringow-177.html"
          }
        ]
      },
      {
        "name": "Klatki MMA",
        "url": "https://ring-sport.pl/pl/menu/klatki-mma-244.html",
        "children": [
          {
            "name": "Klatki podłogowe MMA",
            "url": "https://ring-sport.pl/pl/menu/klatki-mma-podlogowe-245.html"
          },
          {
            "name": "Klatki z podestem MMA",
            "url": "https://ring-sport.pl/pl/menu/klatki-z-podestem-mma-180.html"
          }
        ]
      },
      {
        "name": "Materace i maty",
        "url": "https://ring-sport.pl/materace-i-maty-sportowe.html",
        "children": [
          {
            "name": "Materace gimnastyczne",
            "url": "https://ring-sport.pl/pl/menu/materace-gimnastyczne-182.html"
          },
          {
            "name": "Materace asekuracyjne",
            "url": "https://ring-sport.pl/materace-asekuracyjne.html"
          },
          {
            "name": "Maty tatami",
            "url": "https://ring-sport.pl/pl/menu/maty-tatami-290.html"
          },
          {
            "name": "Maty Puzzle",
            "url": "https://ring-sport.pl/pl/menu/maty-puzzle-291.html"
          }
        ]
      },
      {
        "name": "Osłony ścian i filarów",
        "url": "https://ring-sport.pl/oslony-scian-i-filarow.html"
      },
      {
        "name": "Maty zapaśnicze",
        "url": "https://ring-sport.pl/pl/menu/maty-zapasnicze-187.html"
      },
      {
        "name": "Maty do sztuk walk",
        "url": "https://ring-sport.pl/pl/menu/maty-do-sztuk-walk-188.html"
      },
      {
        "name": "Stoły do armwrestlingu",
        "url": "https://ring-sport.pl/pl/menu/stoly-do-armwrestlingu-168.html",
        "children": [
          {
            "name": "Stoły ze skóry naturalnej",
            "url": "https://ring-sport.pl/pl/menu/stoly-ze-skory-naturalnej-251.html"
          },
          {
            "name": "Stoły ze skóry syntetycznej",
            "url": "https://ring-sport.pl/pl/menu/stoly-ze-skory-syntetycznej-252.html"
          }
        ]
      }
    ]
  },
  {
    "name": "Wyposażenie boisk",
    "url": "https://ring-sport.pl/pl/menu/wyposazenie-boisk-256.html",
    "children": [
      {
        "name": "Piłkochwyty",
        "url": "https://ring-sport.pl/pl/menu/pilkochwyty-257.html",
        "children": [
          {
            "name": "Słupy",
            "url": "https://ring-sport.pl/pl/menu/slupy-283.html"
          }
        ]
      },
      {
        "name": "Piłka nożna",
        "url": "https://ring-sport.pl/pl/menu/pilka-nozna-258.html",
        "children": [
          {
            "name": "Akcesoria",
            "url": "https://ring-sport.pl/pl/menu/akcesoria-269.html"
          }
        ]
      },
      {
        "name": "Piłka ręczna",
        "url": "https://ring-sport.pl/pl/menu/pilka-reczna-259.html",
        "children": [
          {
            "name": "Akcesoria",
            "url": "https://ring-sport.pl/pl/menu/akcesoria-272.html"
          }
        ]
      },
      {
        "name": "Koszykówka",
        "url": "https://ring-sport.pl/pl/menu/koszykowka-260.html"
      },
      {
        "name": "Siatkówka",
        "url": "https://ring-sport.pl/pl/menu/siatkowka-261.html",
        "children": [
          {
            "name": "Słupki",
            "url": "https://ring-sport.pl/pl/menu/slupki-284.html"
          },
          {
            "name": "Siatki",
            "url": "https://ring-sport.pl/pl/menu/siatki-276.html"
          },
          {
            "name": "Akcesoria",
            "url": "https://ring-sport.pl/pl/menu/akcesoria-277.html"
          }
        ]
      },
      {
        "name": "Tenis ziemny",
        "url": "https://ring-sport.pl/pl/menu/tenis-ziemny-262.html",
        "children": [
          {
            "name": "Akcesoria",
            "url": "https://ring-sport.pl/pl/menu/akcesoria-279.html"
          }
        ]
      },
      {
        "name": "Badminton",
        "url": "https://ring-sport.pl/pl/menu/badminton-263.html",
        "children": [
          {
            "name": "Akcesoria",
            "url": "https://ring-sport.pl/pl/menu/akcesoria-281.html"
          }
        ]
      },
      {
        "name": "Trybuny sportowe",
        "url": "https://ring-sport.pl/trybuny-sportowe.html"
      }
    ]
  },
  {
    "name": "KATALOG",
    "url": "https://ring-sport.pl/pl/menu/katalog-311.html"
  }
];

// PROPOZYCJA: skrócone etykiety istniejących kategorii; URL i zdjęcia ze sklepu.
export const categories = [
  {
    "name": "Worki bokserskie",
    "url": "https://ring-sport.pl/worki-bokserskie.html",
    "image": "https://ring-sport.pl/data/include/cms/_dodatki/kat_1.webp"
  },
  {
    "name": "Rękawice bokserskie",
    "url": "https://ring-sport.pl/rekawice-bokserskie.html",
    "image": "https://ring-sport.pl/data/include/cms/_dodatki/kat_2.webp"
  },
  {
    "name": "Rękawice MMA",
    "url": "https://ring-sport.pl/rekawice-mma.html",
    "image": "https://ring-sport.pl/data/include/cms/_dodatki/kat_3.webp"
  },
  {
    "name": "Tarcze treningowe",
    "url": "https://ring-sport.pl/tarcze-treningowe.html",
    "image": "https://ring-sport.pl/data/include/cms/_dodatki/kat_4.webp"
  },
  {
    "name": "Mocowania worków",
    "url": "https://ring-sport.pl/mocowania-i-uchwyty.html",
    "image": "https://ring-sport.pl/data/include/cms/_dodatki/kat_5.webp"
  },
  {
    "name": "Maty i materace",
    "url": "https://ring-sport.pl/materace-i-maty-sportowe.html",
    "image": "https://ring-sport.pl/data/include/cms/_dodatki/kat_6.webp"
  },
  {
    "name": "Ringi bokserskie",
    "url": "https://ring-sport.pl/pl/m/ringi-bokserskie.html",
    "image": "https://ring-sport.pl/data/include/cms/_dodatki/kat_7.png"
  },
  {
    "name": "Klatki MMA",
    "url": "https://ring-sport.pl/pl/menu/klatki-mma-244.html",
    "image": "https://ring-sport.pl/data/include/cms/_dodatki/kat_8.png"
  }
];

export const products: Product[] = [
  {
    "name": "Worek bokserski Super 160 x 40 cm 50 kg",
    "url": "https://ring-sport.pl/worek-bokserski-super-160-x-40-cm-50-kg-16-p.html",
    "price": "349,00 zł brutto",
    "image": "https://ring-sport.pl/hpeciai/f83c7685c489825e50c9fbd1fafed1a6/pol_il_Worek-bokserski-Super-160-x-40-cm-50-kg-16.jpg",
    "id": "p1",
    "group": "bestseller",
    "source": "https://ring-sport.pl/"
  },
  {
    "name": "Worek bokserski Kolos 180 x 45 cm 60 kg czerwony",
    "url": "https://ring-sport.pl/worek-bokserski-kolos-180-x-45-cm-60-kg-czerwony-30-p.html",
    "price": "370,00 zł brutto",
    "image": "https://ring-sport.pl/hpeciai/ceaa3acf933a93f23e1ca382d71f9c64/pol_il_Worek-bokserski-Kolos-180-x-45-cm-60-kg-czerwony-30.jpg",
    "id": "p2",
    "group": "bestseller",
    "source": "https://ring-sport.pl/"
  },
  {
    "name": "Worek bokserski Super 140 x 40 cm 40 kg",
    "url": "https://ring-sport.pl/worek-bokserski-super-140-x-40-cm-40-kg-15-p.html",
    "price": "330,00 zł brutto",
    "image": "https://ring-sport.pl/hpeciai/35f9e66f55f2304a4449def68713a9a6/pol_il_Worek-bokserski-Super-140-x-40-cm-40-kg-15.jpg",
    "id": "p3",
    "group": "bestseller",
    "source": "https://ring-sport.pl/"
  },
  {
    "name": "Mata sportowa Plawil 200 x 100 x 4 cm R200",
    "url": "https://ring-sport.pl/mata-sportowa-plawil-200-x-100-x-4-cm-r200-408-p.html",
    "price": "509,00 zł brutto",
    "image": "https://ring-sport.pl/hpeciai/482575568299cac2a84f2567bac5aef8/pol_il_Mata-sportowa-Plawil-200-x-100-x-4-cm-R200-408.jpg",
    "id": "p4",
    "group": "bestseller",
    "source": "https://ring-sport.pl/"
  },
  {
    "name": "Rękawice bokserskie QUANTUM",
    "url": "https://ring-sport.pl/pl/products/rekawice-bokserskie-quantum-777.html",
    "price": "192,00 zł / para brutto",
    "image": "https://ring-sport.pl/hpeciai/a827ef58cb6f8e3e4ef53506ec57f896/pol_is_Rekawice-bokserskie-QUANTUM-777.jpg",
    "id": "p5",
    "group": "selection",
    "source": "https://ring-sport.pl/rekawice-bokserskie.html"
  },
  {
    "name": "Rękawice bokserskie Fire",
    "url": "https://ring-sport.pl/rekawice-bokserskie-fire-118-p.html",
    "price": "78,00 zł / para brutto",
    "image": "https://ring-sport.pl/hpeciai/7678be0c7501f1f2195abb7ca3b469d4/pol_is_Rekawice-bokserskie-Fire-118.jpg",
    "id": "p6",
    "group": "selection",
    "source": "https://ring-sport.pl/rekawice-bokserskie.html"
  },
  {
    "name": "Rękawice skórzane MMA ALPHA",
    "url": "https://ring-sport.pl/pl/products/rekawice-skorzane-mma-alpha-774.html",
    "price": "78,00 zł / para brutto",
    "image": "https://ring-sport.pl/hpeciai/e29752572f8ac7e4c1c89fe0d7c577ab/pol_is_Rekawice-skorzane-MMA-ALPHA-774.jpg",
    "id": "p7",
    "group": "selection",
    "source": "https://ring-sport.pl/rekawice-mma.html"
  },
  {
    "name": "Profesjonalny ring bokserski z podestem 5 x 5 m",
    "url": "https://ring-sport.pl/profesjonalny-ring-bokserski-z-podestem-5-x-5-m-280-p.html",
    "price": "Cena na telefon",
    "image": "https://ring-sport.pl/hpeciai/ed035a383b78eeb8e91a0ce8038160f4/pol_is_Profesjonalny-ring-bokserski-z-podestem-5-x-5-m-280.png",
    "id": "p8",
    "group": "selection",
    "source": "https://ring-sport.pl/pl/menu/ringi-z-podestem-241.html"
  },
  {
    "name": "Profesjonalna klatka MMA z podestem 6 x 6 m",
    "url": "https://ring-sport.pl/profesjonalna-klatka-mma-z-podestem-6-x-6-m-291-p.html",
    "price": "Cena na telefon",
    "image": "https://ring-sport.pl/hpeciai/51759fa08e7018fb25f2e1fc52b2ecd6/pol_is_Profesjonalna-klatka-MMA-z-podestem-6-x-6-m-291.jpg",
    "id": "p9",
    "group": "selection",
    "source": "https://ring-sport.pl/pl/menu/klatki-mma-244.html"
  },
  {
    "name": "Młodzieżowy zestaw bokserski treningowy 100 x 35 cm niebieski + rękawice + mocowanie",
    "url": "https://ring-sport.pl/mlodziezowy-zestaw-bokserski-treningowy-100-x-35-cm-niebieski-rekawice-mocowanie-255-p.html",
    "price": "220,00 zł / szt. brutto",
    "image": "https://ring-sport.pl/hpeciai/4b2abbbc015a99a8a94e0963c51d5d0f/pol_is_Mlodziezowy-zestaw-bokserski-treningowy-100-x-35-cm-niebieski-rekawice-mocowanie-255.jpg",
    "id": "p10",
    "regularPrice": "359,00 zł",
    "lowestPrice": "307,00 zł",
    "group": "promotion",
    "source": "https://ring-sport.pl/pl/promotions/promocja.html"
  },
  {
    "name": "WYPRZEDAŻ Skakanka drewniana z łożyskiem żyłka II gatunek",
    "url": "https://ring-sport.pl/pl/products/wyprzedaz-skakanka-drewniana-z-lozyskiem-zylka-ii-gatunek-668.html",
    "price": "40,00 zł / szt. brutto",
    "image": "https://ring-sport.pl/hpeciai/eda774dec1938b3db82cc6404422fd7f/pol_is_WYPRZEDAZ-Skakanka-drewniana-z-lozyskiem-zylka-II-gatunek-668.jpg",
    "id": "p11",
    "group": "outlet",
    "source": "https://ring-sport.pl/pl/menu/outlet-318.html"
  }
];

export const links = {
  shop: 'https://ring-sport.pl/asortyment.html',
  facilities: 'https://ring-sport.pl/pl/menu/wyposazenie-obiektow-sportowych-154.html',
  fields: 'https://ring-sport.pl/pl/menu/wyposazenie-boisk-256.html',
  stands: 'https://ring-sport.pl/trybuny-sportowe.html',
  rings: 'https://ring-sport.pl/pl/categories/ringi-i-klatki-mma-1214553964.html',
  wholesale: 'https://ring-sport.pl/pl/client-new.html?register&wholesaler=true',
  bestsellers: 'https://ring-sport.pl/pl/bestsellers/bestseller.html',
  promotions: 'https://ring-sport.pl/pl/promotions/promocja.html',
  outlet: 'https://ring-sport.pl/pl/menu/outlet-318.html',
  blog: 'https://ring-sport.pl/pl/blog.html',
  delivery: 'https://ring-sport.pl/pl/delivery.html',
  terms: 'https://ring-sport.pl/pl/terms.html',
  privacy: 'https://ring-sport.pl/pl/privacy-and-cookie-notice.html',
};
export const assets = {
  arena: 'https://ring-sport.pl/data/include/img/links/1791885926.svg?t=1792104979',
  athlete: 'https://ring-sport.pl/data/include/img/links/1791846828.svg?t=1792105024',
  fire: 'https://ring-sport.pl/data/include/img/links/1791845550.svg?t=1792105045',
};
// PROPOZYCJA: krótkie opisy linków; nazwy usług i adresy pochodzą ze sklepu.
export const shoppingBenefits = [
  { name: 'Paczkomaty 24/7', detail: 'Sprawdź opcje dostawy', url: 'https://ring-sport.pl/Paczkomaty-24-7-dla-wygodnych-cabout-pol-12.html' },
  { name: 'Darmowe zwroty', detail: 'Poznaj warunki usługi', url: 'https://ring-sport.pl/Darmowe-zwroty-Poczta-Polska-cabout-pol-15.html' },
  { name: 'Program lojalnościowy', detail: 'Zobacz zasady programu', url: 'https://ring-sport.pl/Pozyskiwanie-i-wymiana-punktow-cabout-pol-26.html' },
  { name: 'Karta podarunkowa', detail: 'Podaruj wybór', url: 'https://ring-sport.pl/Karta-podarunkowa-cabout-pol-28.html' },
];
// PROPOZYCJA: etykiety tematyczne i dobór istniejących zdjęć kategorii do poradników.
// Tytuły i URL artykułów są oryginalne; ilustracje nie są oryginalnymi okładkami wpisów.
export const articles = [
  { name: 'Jaki sprzęt zabrać na obóz sportowy? Checklista fightera', url: 'https://ring-sport.pl/pl/blog/jaki-sprzet-zabrac-na-oboz-sportowy-checklista-fightera-1751278187.html', image: categories[1].image, topic: 'Przygotowanie do treningu' },
  { name: 'Jak wyposażyć domową siłownię? Praktyczny przewodnik dla osób aktywnych', url: 'https://ring-sport.pl/pl/blog/jak-wyposazyc-domowa-silownie-praktyczny-przewodnik-dla-osob-aktywnych-1748342424.html', image: categories[0].image, topic: 'Twoja przestrzeń do sportu' },
];

// PROPOZYCJA: wszystkie poniższe nagłówki, CTA i skróty opisów są redakcją UX.
// Twierdzenia oparto na stronie głównej i Informacjach o firmie; nie są cytatami.
export const nav = [
  { name: 'Sprzęt do treningu', url: links.shop },
  { name: 'Ringi i klatki', url: links.rings },
  { name: 'Wyposażenie sal', url: links.facilities },
  { name: 'Boiska i trybuny', url: links.fields },
  { name: 'Poradnik', url: links.blog },
  { name: 'Kontakt', url: brand.contact },
];
export const variants = [
  { id: 1, name: 'Porządki', short: 'Małe zmiany. Wyraźny efekt.', scope: 'P0 + P1', hero: { eyebrow: 'Polski producent · od 2007 roku', title: 'Sprzęt do walki.\nGotowy na Twój trening.', description: 'Worki, rękawice i wyposażenie sal. Wybierz sprzęt do boksu i MMA z oferty polskiego producenta z Krasiejowa.', primary: 'Wybierz sprzęt', primaryUrl: links.shop, secondary: 'Porozmawiaj z nami', secondaryUrl: brand.contact, caption: 'Od pierwszego treningu po własny ring.', image: assets.arena } },
  { id: 2, name: 'Ścieżki celu', short: 'Dobra droga do właściwego sprzętu.', scope: 'P0 + P1 + P2', hero: { eyebrow: 'Twój trening. Twój klub. Twój cel.', title: 'Każdy cel zaczyna\nsię od dobrego sprzętu.', description: 'Trenujesz dla siebie, wyposażasz klub czy planujesz ring? Pomożemy Ci znaleźć właściwy kierunek.', primary: 'Znajdź swoją ścieżkę', primaryUrl: '#sciezki', secondary: 'Zobacz cały sklep', secondaryUrl: links.shop, caption: 'Sprzęt do sportów walki. Produkcja w Krasiejowie.', image: assets.arena } },
  { id: 3, name: 'Producent z Krasiejowa', short: 'Poznaj ludzi stojących za sprzętem.', scope: 'P0 + P1 + P2', hero: { eyebrow: 'RING-SPORT · Krasiejów, Polska', title: 'Za Twoim sprzętem\nstoi producent.', description: 'Od 2007 roku tworzymy sprzęt sportowy. W Krasiejowie łączymy doświadczenie produkcji z doradztwem dla zawodników i klubów.', primary: 'Poznaj RING-SPORT', primaryUrl: '#producent', secondary: 'Zapytaj o sprzęt', secondaryUrl: brand.contact, caption: 'Polska marka. Bezpośredni kontakt.', image: assets.arena } },
  { id: 4, name: 'Sklep najpierw', short: 'Mniej szukania. Więcej treningu.', scope: 'P0 + P1', hero: { eyebrow: 'Boks · MMA · trening', title: 'Twój następny trening\nzaczyna się tutaj.', description: 'Rękawice, worki, maty i akcesoria. Znajdź sprzęt dla siebie i wracaj do treningu.', primary: 'Zobacz bestsellery', primaryUrl: '#produkty', secondary: 'Sprawdź promocje', secondaryUrl: '#promocje', caption: 'Sprzęt dla zawodników i amatorów.', image: assets.fire } },
  { id: 5, name: 'Obiekty i B2B', short: 'Od pomysłu na salę do wyposażenia.', scope: 'P0 + P1 + P2', hero: { eyebrow: 'Dla klubów, szkół i obiektów sportowych', title: 'Twoja przestrzeń.\nNasze wyposażenie.', description: 'Ringi i klatki MMA, wyposażenie sal, boisk i trybuny. Porozmawiajmy o potrzebach Twojego obiektu.', primary: 'Poproś o wycenę', primaryUrl: brand.contact, secondary: 'Kupuję sprzęt dla siebie', secondaryUrl: links.shop, caption: 'Detal, hurt i wyposażenie obiektów.', image: assets.arena } },
] as const;
export const paths = [
  { name: 'Trenuję dla siebie', description: 'Worki, rękawice i akcesoria do boksu i MMA.', cta: 'Wybierz sprzęt', url: links.shop, image: categories[1].image },
  { name: 'Wyposażam salę lub klub', description: 'Maty, mocowania i wyposażenie do wspólnych treningów.', cta: 'Zobacz wyposażenie', url: links.facilities, image: categories[5].image },
  { name: 'Szukam ringu lub klatki', description: 'Konstrukcje do treningu i zawodów. Zapytaj o dobór.', cta: 'Poznaj ofertę', url: links.rings, image: categories[6].image },
  { name: 'Kupuję hurtowo', description: 'Współpraca dla sklepów i partnerów handlowych.', cta: 'Zapytaj o współpracę', url: brand.contact, image: categories[0].image },
];
export const trust = [
  { title: 'Polski producent', detail: 'Produkcja w Krasiejowie', symbol: 'flag', url: brand.about },
  { title: 'Od 2007 roku', detail: 'Doświadczenie w sporcie', symbol: 'clock', url: brand.about },
  { title: 'Profesjonalne doradztwo', detail: 'Pomoc w doborze sprzętu', symbol: 'chat', url: brand.contact },
  { title: `${brand.rating}/5 · opinie klientów`, detail: `Smile · odczyt ${brand.sourceDate}`, symbol: 'star', url: brand.reviewsUrl },
];
export const processSteps = [
  { name: 'Rozmowa', text: 'Opowiedz o dyscyplinie, obiekcie i swoich potrzebach.' },
  { name: 'Dobór sprzętu', text: 'Uzgodnij wyposażenie i zakres zamówienia.' },
  { name: 'Produkcja', text: 'Dla produktów wykonywanych na zamówienie ustal szczegóły z producentem.' },
  { name: 'Dostawa i montaż', text: 'Uzgodnij sposób dostawy oraz możliwość montażu w swoim obiekcie.' },
  { name: 'Wsparcie', text: 'Skontaktuj się w sprawie użytkowania i uzupełnienia wyposażenia.' },
];
export const faq = [
  { question: 'Czy mogę zamówić wyposażenie dla klubu lub szkoły?', answer: 'Tak. RING-SPORT oferuje wyposażenie sal i boisk oraz opisuje udział w przetargach na wyposażenie hal sportowych, siłowni i szkół. Zakres konkretnego zamówienia ustalisz z biurem obsługi.' },
  { question: 'Jak sprawdzić cenę ringu lub klatki MMA?', answer: 'Wybrane ringi i klatki mają w sklepie oznaczenie „Cena na telefon”. Skontaktuj się z RING-SPORT i podaj interesujący model oraz potrzeby obiektu.' },
  { question: 'Czy firma prowadzi sprzedaż hurtową?', answer: 'Tak. Firma prowadzi sprzedaż detaliczną i hurtową oraz produkuje dla innych marek. Warunki współpracy uzgodnisz bezpośrednio z RING-SPORT.' },
];
export const copy = {
  categories: { eyebrow: 'Wybierz swoją dyscyplinę', title: 'Sprzęt, którego potrzebujesz.', link: 'Cały asortyment' },
  products: { eyebrow: 'Sprawdź w sklepie', title: 'Bestsellery RING-SPORT', link: 'Wszystkie bestsellery', note: 'Ceny brutto z odczytu 20.10.2026. Aktualną cenę i dostępność sprawdzisz w sklepie.', action: 'Zobacz produkt', quote: 'Zapytaj o wycenę' },
  paths: { eyebrow: 'Zacznij od siebie', title: 'Czego potrzebujesz?', text: 'Cztery proste drogi do właściwej oferty.' },
  brand: { eyebrow: 'Stąd pochodzi Twój sprzęt', title: 'Krasiejów. Tu powstaje RING.', text: 'Jesteśmy polskim producentem sprzętu sportowego. Od 2007 roku rozwijamy ofertę dla zawodników, trenerów i obiektów sportowych. Prowadzimy sprzedaż detaliczną i hurtową, produkujemy także dla innych marek.', link: 'Przeczytaj historię firmy', endorsement: 'Głowacki poleca RING-SPORT', endorsementText: 'Zobacz polecenie prezentowane w oficjalnym banerze marki.', reviews: 'Opinie, które możesz sprawdzić.', reviewsText: 'Ocena z widgetu Smile na stronie sklepu. Stan z dnia 20.10.2026.', reviewsLink: 'Przeczytaj opinie w Smile' },
  process: { eyebrow: 'Porozmawiajmy o Twoim projekcie', title: 'Od pierwszej rozmowy do treningu.', text: 'Ustal z nami etapy i zakres swojego zamówienia.' },
  b2b: { eyebrow: 'Większy plan? Zacznijmy od rozmowy.', title: 'Zbuduj przestrzeń\ndo sportu.', text: 'Od wyposażenia sali po ring, klatkę MMA i boisko. Opowiedz nam o swoim obiekcie — zapytaj o dobór sprzętu i wycenę.', cta: 'Poproś o wycenę', small: 'Wolisz zadzwonić?', links: [ {name: 'Wyposażenie sal i klubów', url: links.facilities}, {name: 'Ringi i klatki MMA', url: links.rings}, {name: 'Boiska sportowe', url: links.fields}, {name: 'Trybuny sportowe', url: links.stands}, {name: 'Rejestracja hurtownika', url: links.wholesale} ] },
  blog: { eyebrow: 'Wiedza, która wspiera trening', title: 'Zanim wejdziesz na salę.', link: 'Wszystkie poradniki', action: 'Przeczytaj poradnik' },
  seo: { title: 'Sprzęt do boksu, MMA i wyposażenie obiektów', sections: [ {title: 'Dla zawodników i amatorów', text: 'RING-SPORT to polska marka działająca od 2007 roku. W sklepie znajdziesz rękawice, worki bokserskie, tarcze, maty i akcesoria do sportów walki.', link:'Wybierz sprzęt do treningu', url:links.shop}, {title:'Dla klubów, szkół i partnerów', text:'Oferta obejmuje ringi bokserskie, klatki MMA, wyposażenie sal i boisk. Firma prowadzi sprzedaż hurtową oraz doradza przy doborze wyposażenia.', link:'Poznaj ofertę dla obiektów', url:links.facilities} ] },
  instagram: { title: 'RING-SPORT poza sklepem.', text: '@ringsportpoland', link: 'Zobacz nas na Instagramie' },
  footer: { tagline: 'Polski producent sprzętu sportowego.\nProdukcja w Krasiejowie od 2007 roku.', contact: 'Porozmawiajmy o sprzęcie', offer: 'Oferta', help: 'Przydatne informacje', legal: 'Dane firmy', bottom: 'RING-SPORT · Sport zaczyna się od treningu.' },
  faqTitle: 'Przed pierwszą rozmową',
  promotionsTitle: 'Promocja i outlet',
  selectionTitle: 'Od treningu po wyposażenie sali',
  b2bProductsTitle: 'Ringi i klatki. Zapytaj o swój model.',
  imageFallback: 'Zdjęcie chwilowo niedostępne',
};

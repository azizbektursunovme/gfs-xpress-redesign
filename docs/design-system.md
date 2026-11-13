# Dizayn tizimi — "Navy va signal qizil"

Jonli ko'rinishi: `/styleguide/`. Kod: `src/styles/global.css` (`:root` tokenlari).
Tuzilma T-LOGISTICS va Lion King redizaynlari bilan bir xil; ranglar GFS Express logotipidan (navy `#09386A`, qizil `#F93320`).

## Ranglar

| Token | Hex | Qayerda |
|---|---|---|
| `--dark-900` | `#0A1F3D` | Yuqori qator, hero, footer |
| `--dark-800` | `#0F2A50` | Coverage bandi, dispatch paneli |
| `--accent` | `#D62D1C` | Logotip qizili, biroz to'qroq: tugmalar oq matn bilan (4.9:1) |
| `--accent-600` | `#B9241A` | Tugma hover |
| `--accent-300` | `#FF8A7D` | Navy fonda qizil (7.2:1), fokus |
| `--link` | `#0B4A8B` | Oq fonda havolalar va ikonkalar (8.9:1) |
| `--tint` | `#EAF1FB` | Ikonka doiralari, info xabar |
| `--ink` / `--text` / `--muted` | `#0F1B2D` / `#344054` / `#5B6678` | Sarlavha, matn, ikkinchi darajali matn |
| `--soft` / `--line` | `#F4F6FA` / `#E2E8F0` | Ikkinchi fon, chegaralar |

Qoida: logotipning asl qizili (`#F93320`) oq matn bilan 3.8:1, o'qish uchun yetmaydi; tugmalarda faqat `--accent`.

## Kun / tun mavzusi

Header'dagi oy/quyosh tugmasi; birinchi kirishda qurilma sozlamasiga qaraydi, tanlov shu qurilmada eslab qolinadi (`localStorage`, kalit `gx-theme`). Mavzu sahifa chizilishidan oldin qo'yiladi. JavaScript o'chiq bo'lsa sayt oq rejimda.

| Token | Kun | Tun |
|---|---|---|
| `--bg` | `#FFFFFF` | `#0B1220` |
| `--surface` | `#FFFFFF` | `#121B2C` |
| `--ink` / `--text` / `--muted` | yuqoridagi | `#F1F5FB` / `#D3DBE8` / `#9FB0C8` |
| `--line` | `#E2E8F0` | `#24324A` |
| `--link` | `#0B4A8B` | `#8FB8FF` |

Logotip: oq fonda asl SVG, to'q fonda (hero, footer, tun rejimi) navy qismi oq bo'lgan `logo-light.svg`.

## Shrift, oraliqlar, komponentlar

- Archivo (variable), h1/h2 katta harflarda 800, matn 17px. Inputlar 17px, tugmalar 48px (kichigi 44px).
- 4px oraliq tizimi, kontent 1200px, breakpoint'lar 640 / 768 / 900 / 960 / 1024 / 1100.
- Komponentlar: shaffof→oq header, foto hero, qisqa forma paneli, raqamlar qatori, suratli kartalar (3 ustun), AQSh xaritasi, ikonkali xususiyatlar, raqamli jarayon, FAQ (`details`), bo'sh holat, LeadForm (barcha formalar uchun bitta holat mantiqi), dispatch paneli, brendli 404.
- Animatsiya yo'q (faqat hover), `prefers-reduced-motion` hurmat qilinadi.

# GFS Express — sayt redizayni

[gfs-xpress.com](https://gfs-xpress.com) uchun yangi versiya. Asos: ClickUp'dagi "gfs-xpress.com — sayt va dizayn ko'rigi" xulosasi.
Bu alohida repo; asosiy saytga ko'chirish dasturchi bilan kelishiladi.

- Ko'rish havolasi: https://azizbektursunovme.github.io/gfs-xpress-redesign/
- Repo: https://github.com/azizbektursunovme/gfs-xpress-redesign

- Uslub: **navy va qizil** (logotip ranglari), T-LOGISTICS va Lion King redizaynlari bilan bir xil tuzilma: hero'da yuk mashinasi surati, hero ichida qisqa narx so'rash formasi, suratli xizmat kartalari, AQSh xaritasi, tepada shaffof navbar, kun/tun mavzusi.
- Texnologiya: [Astro 7](https://astro.build), statik HTML, faqat kichik skriptlar (menyu, formalar, telefon havolasi, mavzu).
- Shrift: Archivo (o'zimizda, 35 KB). Tashqi CDN va kuzatuv skriptlari yo'q.
- Logotip: hozirgi saytdagi SVG (`public/brand/logo.svg`), qora fon uchun oq varianti `logo-light.svg`.
- Suratlar: **vaqtinchalik** bepul litsenziyali suratlar (Wikimedia Commons), mualliflari `/credits/` da. Haqiqiy GFS Express suratlari kelganda almashtiriladi.

## Ishga tushirish

Node.js **22.23.4 yoki undan yangi** kerak (Node 24 LTS tavsiya).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ papkaga statik sayt
npm run preview    # build'ni lokal ko'rish
npm run deploy:pages   # preview'ni GitHub Pages'ga (gh-pages branch) joylash
```

Sozlamalar (`.env.example` dan `.env` qiling):

| O'zgaruvchi | Nima uchun |
|---|---|
| `PUBLIC_QUOTE_ENDPOINT` | Narx so'rash formasi (`/quote/`) JSON yuboradigan API |
| `PUBLIC_CARRIER_ENDPOINT` | Carrier setup formasi (`/carriers/#apply`) |
| `PUBLIC_PORTAL_ENDPOINT` | Login so'rovi formasi (`/portal/`) |
| `PUBLIC_CONTACT_ENDPOINT` | Kontakt formasi (`/contact/`, ish arizalari ham shu yerda) |
| `PUBLIC_TRACK_URL` | "Track Shipment" ochadigan TMS sahifasi (`?ref=<raqam>` qo'shiladi) |
| `PUBLIC_PORTAL_URL` | "Request Login" sahifasidagi "Sign in" tugmasi manzili |
| `PUBLIC_CANONICAL_ORIGIN` | canonical va og:url domeni, standart `https://gfs-xpress.com` |
| `PUBLIC_NOINDEX` | `true` bo'lsa sahifalar Google'da indekslanmaydi (preview uchun) |

Endpoint bo'sh bo'lsa forma **preview rejimda**: hech narsa yuborilmaydi va buni ochiq aytadi.

## Sahifalar

| Sahifa | Holati | Izoh |
|---|---|---|
| `/` | Tayyor | Hero + qisqa forma, raqamlar, 6 xizmat (har "Learn more" o'z xizmatiga), 48 shtat xaritasi, shipper/carrier bloki |
| `/services/` | Tayyor | 6 xizmat (`#dry-van`, `#ltl`, `#flatbed`, `#refrigerated`, `#expedited`, `#dedicated`), 4 qadamli jarayon |
| `/shippers/` | Tayyor | Afzalliklar, jarayon, uskunalar, FAQ (`#faq`) |
| `/carriers/` | Tayyor, API kutilmoqda | Afzalliklar, 3 qadamli setup, talablar, yo'nalishlar, carrier setup formasi, FAQ |
| `/loads/` | Tayyor, TMS kutilmoqda | Load board: yuklar `site.ts` dagi `loads` dan; bo'sh bo'lsa "hozir e'lon yo'q, dispatch'ga qo'ng'iroq qiling" |
| `/quote/` | Tayyor, API kutilmoqda | 2 qadamli forma, bosh sahifadagi qisqa formadan ma'lumot o'tadi (URL orqali emas) |
| `/track/` | Tayyor, TMS kutilmoqda | Load/PRO/BOL raqami; TMS ulanmaguncha soxta status ko'rsatmaydi |
| `/portal/` | Tayyor, API kutilmoqda | "Request Login": shipper/carrier login so'rovi |
| `/about/`, `/jobs/`, `/contact/` | Tayyor | Kompaniya, 6 ta ish o'rni (ariza kontakt formasi orqali), kontakt |
| `/privacy/`, `/terms/` | **Qoralama** | Begona shablon matn o'rniga yangi matn; yurist ko'rishi kerak |
| `/credits/`, `/styleguide/`, `404` | Tayyor | |
| `/technology/`, `/resources/`, `/testimonials/` | Yo'naltirish | Eski URL'lar yangi sahifaga o'tadi; serverda 301 qilish tavsiya |
| `/robots.txt`, `/sitemap.xml` | Tayyor | Production domeni bilan |

Batafsil: [docs/sitemap.md](docs/sitemap.md), [docs/design-system.md](docs/design-system.md), [docs/needs.md](docs/needs.md).

## Ko'rikdagi muammolar qanday hal qilindi

| Talab | Yangi versiyada |
|---|---|
| To'g'ri domen hamma joyda gfs-xpress.com | Saytda `gfs-express.com` yo'q (avtomatik tekshirildi): email, canonical, og:url, JSON-LD, sitemap hammasi gfs-xpress.com |
| Begona shablon matnlar yo'q | Yuridik firma, klinika va karyer (quarry) matnlari olib tashlandi; Privacy va Terms qayta yozildi (qoralama) |
| Mavzuga mos rasmlar, AQSh bozoriga mos hero | AQSh yo'llaridagi dry van, reefer, flatbed suratlari (vaqtinchalik); "Air/Ocean freight", "international" yo'q |
| Bitta uslub, to'q fonda ko'rinadigan tugmalar | Bitta dizayn tizimi; qizil tugmalar oq matn bilan (4.9:1), to'q fonda oq chegarali tugmalar |
| Telefonda bosh sahifa qisqa, tugmalar 44px+ | Bosh sahifa telefonda ~6.8 ekran (eskisi ~18); tugma va inputlar 44px+ |
| Har tugma o'z joyiga | Track Shipment → `/track/`, Request Login → `/portal/`, har "Learn more" o'z xizmatiga; ishlamaydigan "Read more" maqolalari yo'q |
| Bo'sh "Specialized" tabi, "Load undefined", "Origin TBD" yo'q; /contact ishlaydi | Tablar yo'q; load board bo'sh holatni to'g'ri ko'rsatadi; `/contact/` bor |
| Shablon sharhlar, eskirgan "Great Place To Work", zid raqamlar yo'q | Hammasi olib tashlandi; faqat tekshirib bo'ladigan raqamlar (48 shtat, 6 xizmat, 24/7) |
| Forma holatlari, "yuborildi" faqat server javobidan keyin, mini forma URL'ga ism/email qo'shmaydi | Yuborilmoqda / xato / yuborildi; "yuborildi" faqat 2xx javobdan keyin; mini formada shaxsiy ma'lumot yo'q. Ko'rish: `?state=error`, `?state=sending` |
| canonical, robots.txt, sitemap.xml; sarlavhada "GFS Express" takrorlanmaydi | Hammasi bor; har sarlavhada "GFS Express" bir marta |

## Tezlik

GitHub Pages preview, PageSpeed Insights (bosh sahifa, 2026-11-13): telefonda 99 (LCP 1.5 s, TBT 30 ms, CLS 0), kompyuterda 100. Accessibility va Best Practices 100.
SEO 66 faqat preview'dagi noindex sababli; asosiy domenda `PUBLIC_NOINDEX` bo'sh qoldiriladi.
Lighthouse 13.6 (lokal, 10 sahifa): telefonda 99–100, kompyuterda 100; Accessibility, Best Practices, SEO 100.

## Ma'lumotlarni o'zgartirish

Hamma kompaniya ma'lumoti `src/data/site.ts` da: telefon, manzil, USDOT/MC, ijtimoiy havolalar, xizmatlar, carrier talablari, ish o'rinlari, sharhlar, load board. `PENDING` deb belgilanganlar rahbardan keladi.
Haqiqiy suratlar: `public/photos/` dagi bir xil nomli WebP fayllarni almashtiring va `src/data/credits.ts` dan o'chiring.
Xarita: `src/data/us-map.json` (`node scripts/build-us-map.mjs`, bosh ofis koordinatasi skriptda).

## Forma API (dasturchi uchun)

Hamma formalar `POST` qiladi, JSON, `Content-Type: application/json`. 2xx javob = yuborildi, boshqasi yoki 15 soniyada javob yo'q = xato.
Har payload'da: `source`, `page`, `submittedAt`.

- Quote: `pickup, delivery, pickupDate, equipment, commodity, weightLbs, company, name, email, phone, notes`
- Carrier: `company, mc, dot, equipment, trucks, lanes, name, email, phone`
- Portal: `role, company, name, email, phone, reference`
- Contact: `topic, position, name, email, phone, message`

API boshqa domenda bo'lsa, CORS'da sayt domenini ruxsat eting.

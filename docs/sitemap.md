# Sahifalar xaritasi va bloklar

```
/                    Bosh sahifa
├── /services/       Xizmatlar (#dry-van, #ltl, #flatbed, #refrigerated, #expedited, #dedicated)
├── /shippers/       Yuk jo'natuvchilar uchun (#how-it-works, #faq)
├── /carriers/       Carrier'lar uchun (#apply, #faq)
├── /loads/          Load board
├── /quote/          Narx so'rash formasi (#load)
├── /track/          Track shipment
├── /portal/         Request login
├── /about/          Kompaniya haqida
├── /jobs/           Ish o'rinlari (#positions)
├── /contact/        Kontakt formasi (?topic=careers&role=<id>)
├── /privacy/        Privacy Policy (qoralama)
├── /terms/          Terms of Service (qoralama)
├── /credits/        Vaqtinchalik suratlar mualliflari
├── /styleguide/     Dizayn tizimi (ichki, indekslanmaydi)
├── /technology/, /resources/, /testimonials/   Eski URL'lar → yangi sahifalar
├── /robots.txt, /sitemap.xml
└── 404              Brendli
```

Yuqori qator (≥1024px): bosh ofis (USDOT/MC kelsa shu yerda), Track shipment, Request login, Careers, Contact.
Header: logotip, Services, Shippers, Carriers, Load board, About, telefon, "Get a quote", kun/tun tugmasi. Tepada shaffof, scroll'da oq (tun rejimida to'q).
Telefonda: logotip + kun/tun + "Menu"; menyu ichida 9 band, "Get a quote", "Call".
Footer: logotip, Shippers (6 xizmat + quote), Carriers and company, Contact, legal havolalar.

## `/`
1. Hero: "Freight you can count on.", tavsif (St. Louis, MO; dry van, reefer, flatbed, LTL, expedited), "Get a quote", "Haul with us".
2. Qisqa forma: pickup, delivery, sana, uskuna → `/quote/` (shaxsiy ma'lumot yo'q).
3. Raqamlar: 48 shtat, 6 xizmat, 24/7, St. Louis.
4. 6 xizmat kartasi, har birida o'z "Learn more".
5. Coverage (navy band): asosiy yo'nalishlar, AQSh xaritasi, Missouri va St. Louis belgisi.
6. Shippers / Carriers bloki.

## `/services/`
Sarlavha → 6 xizmat bloki (surat + ro'yxat + o'z quote tugmasi, uskuna oldindan tanlanadi) → 4 qadamli jarayon.

## `/shippers/`
Sarlavha → 4 afzallik → 4 qadamli jarayon → uskunalar → FAQ.

## `/carriers/`
Sarlavha → 6 afzallik → 3 qadamli setup → talablar va yo'nalishlar → carrier setup formasi + carrier jamoasi paneli → FAQ.

## `/loads/`, `/track/`, `/portal/`
Sarlavha → bo'sh holat yoki jadval / tracking formasi / login so'rovi formasi + dispatch paneli.

## `/about/`, `/jobs/`, `/contact/`, `/quote/`
About: ish uslubi, qadriyatlar, ofis. Jobs: 4 imtiyoz, 6 lavozim, ochiq ariza. Contact: forma + dispatch paneli. Quote: 2 qadamli forma + dispatch paneli.

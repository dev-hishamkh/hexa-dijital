const basePath = "";

export const projectFilterTabs = [
  { id: "all", labelTR: "Tümü", labelEN: "All" },
  {
    id: "food",
    labelTR: "Restoran & Paket Servis",
    labelEN: "Restaurant & Delivery",
  },
  {
    id: "automation",
    labelTR: "Özel Yazılım & Kasa",
    labelEN: "Custom Software & POS",
  },
  {
    id: "web",
    labelTR: "Web & Performans",
    labelEN: "Web & Performance",
  },
  {
    id: "brand",
    labelTR: "Marka Kimliği & Tabela",
    labelEN: "Brand Identity & Signage",
  },
  {
    id: "seo",
    labelTR: "Harita & İtibar",
    labelEN: "Maps & Reputation",
  },
];

export const projectsData = [
  {
    id: 1,
    slug: "paninoteca",
    title: "Paninoteca",
    client: "Paninoteca Italian Street Food",
    category: "food",
    badge: {
      tr: "Yemek Platformları & QR Menü",
      en: "Delivery Platforms & QR Menu",
    },
    categoryLabel: {
      tr: "Yemek Platformları & Yerel Arama",
      en: "Delivery Marketplaces & Local Search",
    },
    year: "2025",
    location: "Bursa / Nilüfer",
    role: {
      tr: "Yemek Platformları Yönetimi, Fotoğraf Prodüksiyonu, QR Menü & Google SEO",
      en: "Food Marketplace Management, 4K Photography, QR Menu & Google Local SEO",
    },
    impact: {
      tr: "Yemek Sitelerinde Satış Artışı & Dükkana Yeni Müşteri Akışı",
      en: "Food App Turnover Growth & Inbound Physical Footprint",
    },
    description: {
      tr: "Yemeksepeti, Trendyol Yemek ve Getir mağazalarının optimizasyonu, 4K profesyonel yemek çekimleri ve Google Haritalar yerel müşteri akışı.",
      en: "Aggregator marketplace re-engineering, 4K studio food photography, and Google Maps local search dominance.",
    },
    heroLead: {
      tr: "Yemeksepeti, Trendyol Yemek ve Getir mağazalarının baştan aşağı devralınması, 4K profesyonel yemek çekimleri, masalara QR menü ve dükkanın kendi kapısından müşteri sokan Google Harita optimizasyonu.",
      en: "Complete takeover of food aggregator stores, commercial food photography, tabletop QR ordering, and Google Maps ranking funnels.",
    },
    imageSrc: `${basePath}/projects/paninoteca/image-1.webp`,
    imageAlt: {
      tr: "Restoran QR Menü Sipariş ve Paket Servis Yazılımı - Paninoteca",
      en: "Restaurant QR Menu Ordering System - Paninoteca",
    },
    monogram: "PNT",
    features8: [
      {
        icon: "Camera",
        serifTitle: { tr: "4K Yemek Prodüksiyonu", en: "4K Food Production" },
        copy: {
          tr: "Karanlık telefon fotoğrafları yerine iştah açıcı stüdyo ışıklarıyla çekilen taze panini kareleri.",
          en: "Cinema-grade studio lighting and macro lens captures replacing blurry mobile phone images.",
        },
      },
      {
        icon: "UtensilsCrossed",
        serifTitle: { tr: "Platformlarda İlk Sıra", en: "App Top Ranking" },
        copy: {
          tr: "Yemeksepeti ve Trendyol'da algoritmanın aradığı etiketlerle üst sıralara tırmanan mağaza düzeni.",
          en: "Algorithmic menu tagging climbing the ranks across regional delivery marketplaces.",
        },
      },
      {
        icon: "MapPin",
        serifTitle: {
          tr: "Dükkana Doğrudan Müşteri",
          en: "Direct Foot Traffic",
        },
        copy: {
          tr: "Google Haritalar üzerinden dükkanın kapısından içeri giren yeni fiziksel müşteri akışı.",
          en: "Direct physical foot traffic captured via optimized Google Maps search signals.",
        },
      },
    ],
    gallery: [
      `${basePath}/projects/paninoteca/image-1.webp`,
      `${basePath}/projects/paninoteca/image-2.webp`,
      `${basePath}/projects/paninoteca/image-3.webp`,
    ],
    crisisHeading: {
      tr: "Kötü telefon fotoğrafları ve arkalarda kaybolan yemek mağazaları.",
      en: "Subpar phone photos and low rankings across delivery aggregator apps.",
    },
    crisisStory: {
      tr: "Paninoteca lezzet olarak harika ürünler çıkarmasına rağmen internet ortamında görünmüyordu. Yemeksepeti ve Trendyol Yemek'te listelenen fotoğraflar karanlık telefon çekimleriydi, ürün açıklamaları yetersizdi ve sipariş veren müşteriler diğer zincir restoranların gölgesinde kalıyordu.",
      en: "Despite superior taste, Paninoteca remained invisible online. Delivery marketplace listings suffered from dim mobile photos and incomplete copy, losing orders to generic commercial franchises.",
    },
    discoveryHeading: {
      tr: "Dükkana gittik, paninileri tattık ve sipariş akışını yerinde inceledik.",
      en: "On-site kitchen inspection, tasting, and delivery bottleneck analysis.",
    },
    discoveryStory: {
      tr: "Uzaktan masa başı tavsiyeler vermek yerine dükkanda bir araya geldik. Hangi ürünün kâr marjının daha yüksek olduğunu, mutfağın hangi saatlerde yoğunlaştığını ve paket servis müşterisinin en çok hangi lezzetlere yöneldiğini yerinde tespit ettik.",
      en: "Rather than remote guesswork, we visited the venue in-person. We evaluated high-margin menu items, kitchen rush hours, and customer retention triggers face-to-face.",
    },
    solutionHeading: {
      tr: "4K çekimlerden arama algoritmalarına uzanan eksiksiz dönüşüm.",
      en: "Turnkey transformation spanning 4K optics to algorithmic indexing.",
    },
    solutionSteps: [
      {
        num: "01",
        title: {
          tr: "Stüdyo Işıklarıyla 4K Yemek Çekimi",
          en: "4K Commercial Food Shoot",
        },
        desc: {
          tr: "Makro lensler ve profesyonel ışıklandırmayla paninilerin taze malzemelerini gösteren iştah açıcı fotoğraflar çekildi.",
          en: "Studio lighting and cinema-grade macro lenses capturing freshness and appetizing details.",
        },
      },
      {
        num: "02",
        title: {
          tr: "Yemek Platformları Menü Optimizasyonu",
          en: "Marketplace Menu Architecture",
        },
        desc: {
          tr: "Trendyol Yemek, Getir ve Yemeksepeti mağazalarında ürün isimleri ve algoritmanın öne çıkardığı etiketler baştan yazıldı.",
          en: "Product titles, modifier options, and search tags rebuilt for maximum algorithm visibility.",
        },
      },
      {
        num: "03",
        title: {
          tr: "Masalara QR Kodlu Dijital Menü",
          en: "Tabletop QR Digital Menu",
        },
        desc: {
          tr: "Dükkana gelen müşterilerin telefonundan anında açtığı, fiyatı ve görselleri tek tıkla güncellenebilen modern QR menü kuruldu.",
          en: "Zero-latency browser QR menu allowing instant backoffice price adjustments without print costs.",
        },
      },
      {
        num: "04",
        title: {
          tr: "Google Harita & Sosyal Medya",
          en: "Google Maps & Social Authority",
        },
        desc: {
          tr: "Google İşletme Profili konum etiketli fotoğraflarla güçlendirildi; canlı bir marka kimliği oluşturuldu.",
          en: "Google Business Profile infused with geotagged media to siphon high-intent local foot traffic.",
        },
      },
    ],
    shiftHeading: {
      tr: "İlk hafta sonunda dükkanın hem paketi hem de masaları dolmaya başladı.",
      en: "Immediate lift across online tickets and physical table covers.",
    },
    shiftStory: {
      tr: "Yeni fotoğraflar ve arama optimizasyonu devreye girdiği ilk hafta sonu, yemek platformlarındaki sipariş bildirim zilleri susmadı. İştah kabartan profesyonel görselleri gören müşterilerin sepet onaylama oranı katlandı.",
      en: "Within the first weekend of deployment, order notification chimes rang continuously. Appetizing imagery converted browsing prospects into paying patrons at double the baseline rate.",
    },
    metrics: [
      {
        figure: "2.8x",
        label: {
          tr: "Yemek Sitelerinde Sipariş Artışı",
          en: "Marketplace Order Volume Lift",
        },
      },
      {
        figure: "4.8",
        label: { tr: "Google İşletme Puanı", en: "Google Business Rating" },
      },
      {
        figure: "100%",
        label: {
          tr: "Masalarda Sıfır Baskı Masrafı",
          en: "Zero Tabletop Print Cost",
        },
      },
      {
        figure: "20+",
        label: {
          tr: "Günlük Yeni Dükkan Ziyaretçisi",
          en: "Daily Inbound Foot Patrons",
        },
      },
    ],
  },
  {
    id: 2,
    slug: "munchico-fried-chicken",
    title: "Munchico Fried Chicken",
    client: "Munchico Crispy Chicken",
    category: "brand",
    badge: {
      tr: "Marka Kimliği & Tabela",
      en: "Brand Identity & Signage",
    },
    categoryLabel: {
      tr: "Sıfırdan Marka Kimliği & Tabela",
      en: "Ground-Up Brand Identity & Facade",
    },
    year: "2024",
    location: "Bursa / Nilüfer",
    role: {
      tr: "Marka İsmi, Logo, Işıklı Tabela, Kampanya Afişleri, Yemek Çekimi & Maliyet Hesabı",
      en: "Naming, Logo, Illuminated Signage, Posters, Food Photography & Unit Cost Engineering",
    },
    impact: {
      tr: "Marka İsmi, Logo, Işıklı Tabela & Ürün Başına Maliyet Hesabı",
      en: "Authoritative Naming, Signage Renders & Unit-Cost Margins",
    },
    description: {
      tr: "Dükkanın isim babalığından kurumsal renk paletine, ışıklı lightbox tabelasından kuruşu kuruşuna kâr bırakan menü maliyet hesabına kadar eksiksiz marka inşası.",
      en: "From naming and visual branding to illuminated facade projects and itemized cost accounting.",
    },
    heroLead: {
      tr: "Dükkanın isim babalığından kurumsal renk paletine, ışıklı lightbox tabelasından '1 Alana 2.si %50' dükkan önü afişlerine, profesyonel yemek çekimlerinden maliyet hesabına kadar eksiksiz anahtar teslim marka inşası.",
      en: "Turnkey brand creation spanning naming, vector trademarks, illuminated lightbox facade systems, and mathematical menu profitability models.",
    },
    imageSrc: `${basePath}/projects/munchico/image-1.webp`,
    imageAlt: {
      tr: "Çıtır Tavuk Restoranı Marka Kimliği ve Tabela Tasarımı - Munchico",
      en: "Crispy Chicken Brand Identity and Signage Design - Munchico",
    },
    monogram: "MFC",
    features8: [
      {
        icon: "Palette",
        serifTitle: { tr: "Özgün Marka Kimliği", en: "Original Identity" },
        copy: {
          tr: "Marka ismi, renk paleti ve cadde üzerinde hemen fark edilen tescilli logo tasarımı.",
          en: "Trademark-ready naming, dynamic palettes, and street-commanding logo marks.",
        },
      },
      {
        icon: "Building2",
        serifTitle: { tr: "Işıklı Lightbox Tabela", en: "Illuminated Facade" },
        copy: {
          tr: "Gece ve gündüz kaldırımdan geçen herkesin iştahını açan 1/1 ölçülü tabela imalat projeleri.",
          en: "1:1 architectural fabrication blueprints for high-visibility illuminated street signage.",
        },
      },
      {
        icon: "CircleDollarSign",
        serifTitle: { tr: "Kuruş Kuruş Maliyet", en: "Unit-Cost Margins" },
        copy: {
          tr: "Hangi menünün ne kadar net kâr bıraktığını gösteren matematiksel maliyet hesabı.",
          en: "Itemized spreadsheets calculating net margins down to the exact gram and cent.",
        },
      },
    ],
    gallery: [
      `${basePath}/projects/munchico/image-1.webp`,
      `${basePath}/projects/munchico/image-2.webp`,
      `${basePath}/projects/munchico/image-3.webp`,
      `${basePath}/projects/munchico/image-4.webp`,
    ],
    crisisHeading: {
      tr: "Sadece bir dükkan vardı; isim, tabela, konsept ve maliyet hesabı yoktu.",
      en: "A bare physical venue with zero naming, branding, or cost mathematics.",
    },
    crisisStory: {
      tr: "Yatırımcı lezzetli bir çıtır tavuk dükkanı açmak istiyordu ancak ortada ne akılda kalıcı bir isim, ne kurumsal bir logo, ne de menü fiyatlandırması vardı. Gramaj ve ambalaj giderleri hesaplanmadığı için kârlılık tamamen belirsizdi.",
      en: "The investor possessed recipes but lacked brand identity, pricing structure, and supplier unit costs, creating severe financial ambiguity before launch.",
    },
    discoveryHeading: {
      tr: "Masanın başına geçtik, gramajları tarttık ve markanın karakterini çizdik.",
      en: "On-site table discovery, ingredient scaling, and personality sketching.",
    },
    discoveryStory: {
      tr: "Dükkanda buluştuk. 'Munchico' ismini ürettik; dinamik renk paletini belirledik. Her bir menünün tavuk gramajını ve kutu maliyetini dinamik tabloya işleyerek net kârı kuruşu kuruşuna modelledik.",
      en: "We convened on-site, conceptualized 'Munchico', locked the identity, and calculated exact ingredient grammages into a dynamic pricing dashboard.",
    },
    solutionHeading: {
      tr: "Tabeladan el ilanına, menü panolarından platformlara tek elden üretim.",
      en: "Unified execution spanning signage, menus, and campaign collateral.",
    },
    solutionSteps: [
      {
        num: "01",
        title: {
          tr: "Özgün İsim, Logo ve Renk Paleti",
          en: "Naming, Identity & Palette",
        },
        desc: {
          tr: "Cadde üzerinde parlayan, akılda kalıcı 'Munchico' marka ismi tescillendi ve modern logosu çizildi.",
          en: "Memorable naming trademarked alongside vector logo marks and distinct palettes.",
        },
      },
      {
        num: "02",
        title: {
          tr: "Işıklı Lightbox Tabela & Menü Panoları",
          en: "Illuminated Facade & Menu Boards",
        },
        desc: {
          tr: "Kaldırımdan geçen herkesin iştahını kabartan 1/1 teknik ölçülü ışıklı tabela projelendirildi.",
          en: "Engineered 1:1 blueprints for street-facing lightbox signs and overhead ordering displays.",
        },
      },
      {
        num: "03",
        title: {
          tr: "Kampanya Afişleri & El İlanları",
          en: "Promotional Signage & Flyers",
        },
        desc: {
          tr: "Açılış haftası için '1 Alana 2.si %50' dükkan önü ayaklı afişleri ve kuşe el ilanları tasarlandı.",
          en: "Launch campaign collateral designed to capture high-density neighborhood foot traffic.",
        },
      },
      {
        num: "04",
        title: {
          tr: "Ürün Başı Net Maliyet Hesabı",
          en: "Unit-Cost Mathematical Engine",
        },
        desc: {
          tr: "Hangi menünün ne kadar net kâr bıraktığını kuruşu kuruşuna gösteren dinamik maliyet tablosu teslim edildi.",
          en: "Dynamic spreadsheets calculating food costs, margins, and break-even points per item.",
        },
      },
    ],
    shiftHeading: {
      tr: "Açılış günü dükkanın önünde metrelerce kuyruk oluştu.",
      en: "Day-one lines wrapping around the commercial street frontage.",
    },
    shiftStory: {
      tr: "Lightbox tabelanın yandığı ve afişlerin çıktığı ilk gün, dükkanın önünde beklenenin çok üzerinde bir yoğunluk yaşandı. Doğru maliyet hesabı sayesinde indirim yapılırken bile kârlılık korundu.",
      en: "From the moment the illuminated facade lit up, foot traffic exceeded all initial projections, maintaining healthy unit margins even through heavy launch discounting.",
    },
    metrics: [
      {
        figure: "Day 1",
        label: {
          tr: "Cadde Hakimiyeti ve Tanınırlık",
          en: "Immediate Street Dominance",
        },
      },
      {
        figure: "100%",
        label: {
          tr: "Kuruş Kuruş Net Maliyet Kontrolü",
          en: "Margin Predictability",
        },
      },
      {
        figure: "3,500+",
        label: {
          tr: "İlk Ayda Servis Edilen Menü",
          en: "Meals Served in Month 1",
        },
      },
      {
        figure: "0 Risk",
        label: {
          tr: "Şeffaf Yatırım ve Bütçe Planlaması",
          en: "Zero Capital Budget Surprises",
        },
      },
    ],
  },
  {
    id: 3,
    slug: "taha-usta",
    title: "Taha Usta",
    client: "Taha Usta Lahmacun & Pide",
    category: "automation",
    badge: {
      tr: "Özel Sipariş & Kasa",
      en: "Custom POS & Orders",
    },
    categoryLabel: {
      tr: "Özel Sipariş Uygulaması & Kasa",
      en: "Bespoke Order App & Cashier POS",
    },
    year: "2024",
    location: "Bursa / Osmangazi",
    role: {
      tr: "Özel Sipariş Takip Yazılımı, Termal Yazıcı Entegrasyonu & Finans Takip Modülü",
      en: "Bespoke Delivery Order Software, Thermal Printer Bridge & Financial Module",
    },
    impact: {
      tr: "Telefon ve WhatsApp Sipariş Kaosunu Kökten Bitiren Mutfak Otomasyonu",
      en: "Zero-Error Kitchen Dispatch Eradicating Phone & Chat Bottlenecks",
    },
    description: {
      tr: "Telefon çaldığı an müşteriyi tanıyan, mutfağa anında termal fiş basan ve gün sonu net kârı kuruşu kuruşuna döken hafif işletme yazılımı.",
      en: "Caller ID customer lookup, autonomous kitchen ticket printing, and daily register accounting.",
    },
    heroLead: {
      tr: "Müşterilerin sürekli arayarak ve WhatsApp'tan yazarak oluşturduğu sipariş karmaşasını bitiren, gelen çağrıları tek ekranda toplayıp mutfak yazıcısından otomatik fiş basan ve ay sonu net kârı gösteren özel yazılım.",
      en: "A custom operational bridge unifying phone calls and chat messages into single-tap kitchen printer tickets with daily financial telemetry.",
    },
    imageSrc: `${basePath}/projects/taha-usta/image-1.webp`,
    imageAlt: {
      tr: "Restoran Masaları Adisyon ve Kasa Otomasyon Yazılımı - Taha Usta",
      en: "Restaurant POS and Cashier Automation System - Taha Usta",
    },
    monogram: "THU",
    features8: [
      {
        icon: "PhoneCall",
        serifTitle: { tr: "Arayanı Tanıyan Ekran", en: "Instant Caller ID" },
        copy: {
          tr: "Telefon çaldığı anda müşterinin adı, adresi ve eski siparişleri saniyesinde ekranda.",
          en: "Incoming calls instantly match customer records, addresses, and order history.",
        },
      },
      {
        icon: "Printer",
        serifTitle: { tr: "Otomatik Termal Fiş", en: "Thermal Ticket Bridge" },
        copy: {
          tr: "Ürün seçildiği anda mutfaktaki ve kurye masasındaki yazıcıdan anında çıkan fiş.",
          en: "Single-tap order confirmation printing tickets simultaneously to kitchen and courier stations.",
        },
      },
      {
        icon: "Receipt",
        serifTitle: { tr: "Net Ciro ve Kasa", en: "Real-Time Register Tally" },
        copy: {
          tr: "Ay sonunda dükkana net ne kadar kâr kaldığını kuruşu kuruşuna gösteren kasa modülü.",
          en: "Live breakdown of cash, card, and delivery balances showing pure net profit.",
        },
      },
    ],
    gallery: [
      `${basePath}/projects/taha-usta/image-1.webp`,
      `${basePath}/projects/taha-usta/image-2.webp`,
      `${basePath}/projects/taha-usta/image-3.webp`,
    ],
    crisisHeading: {
      tr: "Aynı anda çalan telefonlar, kaybolan kağıt adisyonlar ve yanlış giden siparişler.",
      en: "Overlapping phone calls, lost paper tickets, and kitchen dispatch errors.",
    },
    crisisStory: {
      tr: "Taha Usta'da paket servis talebi çok yüksekti ancak tüm süreç ilkel yöntemlerle yürütülüyordu. Kağıtlar kayboluyor, müşterinin notları mutfağa iletilemiyor, kasa açıkları yaşanıyordu.",
      en: "High takeout demand was throttled by manual scribbles on paper slips. Peak evening hours suffered from lost orders, misplaced custom requests, and daily register discrepancies.",
    },
    discoveryHeading: {
      tr: "Mutfakta 2 saat durduk; siparişin kağıttan pakete gidişini adım adım izledik.",
      en: "2-hour on-site kitchen audit monitoring order intake to courier handoff.",
    },
    discoveryStory: {
      tr: "Taha Usta'nın dükkanına gittik. Ustaların siparişi hazırlarken nasıl zorlandığını, kuryelerin hangi paketi alacağını şaşırdığını gözlerimizle gördük.",
      en: "We inspected floor and kitchen operations on-site. Seeing line cooks struggle with illegible handwriting, we engineered a dedicated touch interface tailored to their exact workflow.",
    },
    solutionHeading: {
      tr: "Aramayı tanıyan, mutfağa anında fiş basan ve net ciroyu gösteren özel yazılım.",
      en: "Caller ID integration, instant ticket dispatch, and daily financial reporting.",
    },
    solutionSteps: [
      {
        num: "01",
        title: {
          tr: "Gelen Çağrıyı Anında Yakalama",
          en: "Automated Caller Ingestion",
        },
        desc: {
          tr: "Telefon çaldığı anda müşterinin adı, adresi ve geçmiş siparişleri anında ekrana dökülen sistem kuruldu.",
          en: "Phone calls automatically ingest customer records and recent orders onto the cashier screen.",
        },
      },
      {
        num: "02",
        title: {
          tr: "Tek Dokunuşla Mutfak Fişi Dökümü",
          en: "Instant Kitchen Ticket Dispatch",
        },
        desc: {
          tr: "Ürünler seçildiği anda mutfaktaki ve kurye masasındaki termal yazıcıdan adisyon fişi saniyesinde çıktı.",
          en: "Single-tap confirmation printing tickets instantly across line cook and delivery courier stations.",
        },
      },
      {
        num: "03",
        title: {
          tr: "Sıfır Hata ve Kaçak Önleme",
          en: "Zero Preparation Error",
        },
        desc: {
          tr: "Özel notlar fişin üstünde kocaman puntolarla basılarak mutfaktaki sipariş hataları sıfırlandı.",
          en: "Special dietary notes printed in bold high-contrast font, eliminating line errors.",
        },
      },
      {
        num: "04",
        title: {
          tr: "Gün Sonu & Ay Sonu Net Kasa Raporu",
          en: "Automated Register Reconciliation",
        },
        desc: {
          tr: "Kasanın içine entegre edilen modülle gün sonunda toplam paket sayısı ve net kalan kâr tek tuşla döküldü.",
          en: "Single-button register closeouts calculating total tickets, cash balances, and net profit.",
        },
      },
    ],
    shiftHeading: {
      tr: "Akşam yoğunluğundaki o bağırma çağırma ve kargaşa tamamen bitti.",
      en: "Peak evening chaos replaced by smooth, silent kitchen execution.",
    },
    shiftStory: {
      tr: "Uygulamanın devreye alındığı ilk hafta sonunda dükkanda tam bir sessizlik ve düzen hakimdi. Telefon çaldığında adres hazırdı, tek tıkla fiş çıktı ve kurye yola çıktı.",
      en: "Within the first weekend of live rollout, order intake became silent and fluid. Callers were identified in two seconds, tickets printed automatically, and delivery times shrank drastically.",
    },
    metrics: [
      {
        figure: "0%",
        label: {
          tr: "Sipariş Karışıklığı ve Hata Payı",
          en: "Order Dispatch Error Rate",
        },
      },
      {
        figure: "15s",
        label: {
          tr: "Sipariş Alma ve Fiş Çıkma Süresi",
          en: "Order-to-Print Speed",
        },
      },
      {
        figure: "100%",
        label: {
          tr: "Günlük Nakit ve Kredi Kartı Takibi",
          en: "Cash & Card Accuracy",
        },
      },
      {
        figure: "Flawless",
        label: {
          tr: "Mutfak ve Kurye Arası Koordinasyon",
          en: "Kitchen-to-Courier Sync",
        },
      },
    ],
  },
  {
    id: 4,
    slug: "omer-usta",
    title: "Ömer Usta",
    client: "Ömer Usta Kebap & Pide Salonu",
    category: "food",
    badge: {
      tr: "Web & Paket Satış",
      en: "Web & Delivery",
    },
    categoryLabel: {
      tr: "Web Sitesi & Paket Satış",
      en: "Web Platform & Marketplace Delivery",
    },
    year: "2024",
    location: "Bursa / Yıldırım",
    role: {
      tr: "Özel Web Sitesi, Yemek Platformları Kurulumu & Paket Servis Ciro Artışı",
      en: "Bespoke Web Platform, Delivery Store Onboarding & Turnover Optimization",
    },
    impact: {
      tr: "Özel İnternet Sitesi & Yemek Sitelerinde Paket Satış Artışı",
      en: "Sub-Second Web Storefront & Aggregator Sales Lift",
    },
    description: {
      tr: "Ömer Usta için modern bir internet sitesinin hazırlanması, Yemeksepeti, Trendyol Yemek ve Getir mağazalarının eksiksiz kurulumu.",
      en: "Sub-second corporate web presence and full onboarding across all major food delivery platforms.",
    },
    heroLead: {
      tr: "Ömer Usta için modern bir internet sitesinin hazırlanması, Yemeksepeti, Trendyol Yemek ve Getir mağaza kurulumlarının yapılması ve menü içeriklerinin düzenlenerek paket servis cirosunun artırılması.",
      en: "Modern corporate web design coupled with turnkey marketplace onboarding and algorithm-tuned menu titles to double daily delivery covers.",
    },
    imageSrc: `${basePath}/projects/omer-usta/image-1.webp`,
    imageAlt: {
      tr: "Kebap ve Pide Restoranı Web Tasarım ve Paket Satış Kurulumu - Ömer Usta",
      en: "Kebab Restaurant Web Design and Food Delivery Setup - Omer Usta",
    },
    monogram: "OMU",
    features8: [
      {
        icon: "Globe",
        serifTitle: { tr: "Özel Tanıtım Sitesi", en: "Bespoke Web Presence" },
        copy: {
          tr: "Dükkanı, kebapları ve telefon numarasını tek tıkla müşterinin karşısına getiren hafif web sitesi.",
          en: "Sub-second mobile loading connecting local diners directly to phone dialers.",
        },
      },
      {
        icon: "UtensilsCrossed",
        serifTitle: {
          tr: "Yemek Siteleri Kurulumu",
          en: "Aggregator Onboarding",
        },
        copy: {
          tr: "Yemeksepeti, Getir ve Trendyol mağazalarının eksiksiz evrak ve menü onay süreçleri.",
          en: "Turnkey documentation and store approvals across top regional delivery marketplaces.",
        },
      },
      {
        icon: "TrendingUp",
        serifTitle: { tr: "Paket Satış Artışı", en: "Delivery Volume Lift" },
        copy: {
          tr: "Arama yapan müşteriyi yakalayan doğru menü isimleri ve porsiyon seçenekleri.",
          en: "High-converting menu names and portion modifiers matching consumer search intent.",
        },
      },
    ],
    gallery: [
      `${basePath}/projects/omer-usta/image-1.webp`,
      `${basePath}/projects/omer-usta/image-2.webp`,
    ],
    crisisHeading: {
      tr: "Sadece dükkandaki müşteriye bağımlı, paket servisi durma noktasında bir işletme.",
      en: "Sole reliance on dine-in guests with zero digital delivery footprint.",
    },
    crisisStory: {
      tr: "Ömer Usta lezzetleri çok iyi yapan bir kebap ve pide ustasıydı. Fakat internette ismi aratıldığında hiçbir web sitesi çıkmıyordu, yemek uygulamalarında mağazası yoktu.",
      en: "Master artisan recipes were limited strictly to local walk-ins. Zero search presence existed online, and no store accounts existed on food delivery apps.",
    },
    discoveryHeading: {
      tr: "Ömer Usta ile masaya oturduk; lezzetlerini dijital paket servise taşıdık.",
      en: "Face-to-face discovery translating artisan grills into digital delivery.",
    },
    discoveryStory: {
      tr: "Dükkanına misafir olduk. Paket servise en uygun, yolda lezzetini kaybetmeyecek menüleri birlikte seçtik.",
      en: "We met at his restaurant, engineered delivery-hardened portion options, and charted a dual rollout of corporate web presence and marketplace stores.",
    },
    solutionHeading: {
      tr: "Kurumsal internet vitrini ve yemek platformlarında güçlü başlangıç.",
      en: "Corporate web platform paired with high-velocity marketplace onboarding.",
    },
    solutionSteps: [
      {
        num: "01",
        title: {
          tr: "Hızlı ve Modern İnternet Sitesi",
          en: "Rapid Mobile Website",
        },
        desc: {
          tr: "Ömer Usta'nın dükkanını, kebaplarını ve telefonunu tek dokunuşla ekrana getiren hafif tanıtım sitesi kuruldu.",
          en: "High-speed corporate platform placing dishes and phone dialers at users' fingertips.",
        },
      },
      {
        num: "02",
        title: {
          tr: "Yemeksepeti, Getir & Trendyol Kurulumu",
          en: "Aggregator Store Onboarding",
        },
        desc: {
          tr: "Tüm resmi evrak ve mağaza onay süreçleri yönetilerek tüm popüler yemek uygulamalarına eksiksiz kaydedildi.",
          en: "End-to-end legal documentation and store registration across all regional delivery apps.",
        },
      },
      {
        num: "03",
        title: {
          tr: "Doğru Ürün İsimleri & Açıklamaları",
          en: "Algorithm Menu Copywriting",
        },
        desc: {
          tr: "Menüler müşterinin uygulamada arattığı anahtar kelimelere göre yapılandırıldı.",
          en: "Menu items retitled to match high-frequency food search terms.",
        },
      },
      {
        num: "04",
        title: {
          tr: "Google Haritalar Canlı İletişim",
          en: "Google Maps Phone Siphon",
        },
        desc: {
          tr: "Google Harita kaydı yapılarak çevreden geçen insanların doğrudan telefonla sipariş vermesi sağlandı.",
          en: "Geotagged local listings routing nearby mobile searchers straight into phone orders.",
        },
      },
    ],
    shiftHeading: {
      tr: "Dükkandaki masalara ek olarak her gün onlarca paket servisi çıkmaya başladı.",
      en: "A continuous flow of daily takeout orders augmenting dining room covers.",
    },
    shiftStory: {
      tr: "Web sitesinin yayına girmesi ve yemek uygulamalarının açılmasıyla birlikte dükkan adeta ikinci bir şube açmış gibi paket servis üretmeye başladı.",
      en: "Post-rollout, kitchen delivery production surged to equal a second branch, drawing repeat orders across adjacent districts.",
    },
    metrics: [
      {
        figure: "3 Platforms",
        label: {
          tr: "Eksiksiz Online Mağaza Kurulumu",
          en: "Live Marketplace Outlets",
        },
      },
      {
        figure: "2x",
        label: {
          tr: "Günlük Paket Servis Hacmi",
          en: "Daily Takeout Ticket Lift",
        },
      },
      {
        figure: "< 0.8s",
        label: {
          tr: "Web Sitesi Mobil Açılış Hızı",
          en: "Mobile Page Load Latency",
        },
      },
      {
        figure: "7 Days",
        label: {
          tr: "Tüm Sürecin Anahtar Teslim Bitirilmesi",
          en: "Turnkey Turnaround",
        },
      },
    ],
  },
  {
    id: 5,
    slug: "hira-koltuk-yikama",
    title: "Hira Halı & Koltuk Yıkama",
    client: "Hira Halı & Koltuk Yıkama Fabrikası",
    category: "web",
    badge: {
      tr: "Web Performans & SEO",
      en: "Web Performance & SEO",
    },
    categoryLabel: {
      tr: "Web Performans & Google 1. Sıra",
      en: "Web Performance & Google #1 Rank",
    },
    year: "2024",
    location: "Bursa / Nilüfer",
    role: {
      tr: "Tasarımı Korumalı Kodlama, Hız Performansı & Google Arama SEO",
      en: "Design-Preserving Re-Engineering, Latency Optimization & Search SEO",
    },
    impact: {
      tr: "Tasarımı Bozulmadan Uçurulan Hız & Google Aramalarında 1. Sıra",
      en: "Visual Identity Preserved, Latency Eradicated & Top Search Rank",
    },
    description: {
      tr: "Müşterinin alıştığı orijinal tasarım korunarak sıfırdan temiz kodlandı; açılış hızı anında seviyesine çekilerek reklam çağrıları 4 katına çıktı.",
      en: "Client's legacy layout cloned into clean code, locking sub-second speed and quadrupling incoming ad calls.",
    },
    heroLead: {
      tr: "Müşterinin alıştığı eski tasarımına dokunmadan; altyapıyı temiz kodla baştan kodlayarak açılış hızını anında ekrana gelecek seviyeye çekmemiz ve Google yerel aramalarda telefonları patlatan 1. sıra başarısı.",
      en: "Preserving familiar visual aesthetics while rewriting backend code from scratch to lock instant loading and capture #1 regional Google search rankings.",
    },
    imageSrc: `${basePath}/projects/hira/image-1.webp`,
    imageAlt: {
      tr: "Web Tasarım ve Google Ads Reklam Yönetimi - Hira Koltuk Yıkama",
      en: "Web Design and Google Ads Acquisition Engine - Hira Cleaning",
    },
    monogram: "HHY",
    features8: [
      {
        icon: "Zap",
        serifTitle: { tr: "Anında Mobil Açılış", en: "Instant Mobile Load" },
        copy: {
          tr: "Açılması saniyeler süren eski sitenin mikrosaniyede ekrana gelen jilet gibi hıza kavuşması.",
          en: "Replaced 5-second loading latency with instantaneous mobile screen rendering.",
        },
      },
      {
        icon: "Search",
        serifTitle: { tr: "Google'da İlk Sıra", en: "Google Top Rank" },
        copy: {
          tr: "Açılış hızı tam puana ulaşınca Google'ın siteyi en tepeye taşıması.",
          en: "Perfect Core Web Vitals rewarded with top local search engine positioning.",
        },
      },
      {
        icon: "PhoneCall",
        serifTitle: { tr: "4 Kat Fazla Çağrı", en: "4x Inbound Calls" },
        copy: {
          tr: "Reklam bütçesi artırılmadan dükkana gelen doğrudan müşteri aramalarının 4 katına çıkışı.",
          en: "Direct inbound phone leads multiplied by four on the exact same ad budget.",
        },
      },
    ],
    gallery: [
      `${basePath}/projects/hira/image-1.webp`,
      `${basePath}/projects/hira/image-4.webp`,
      `${basePath}/projects/hira/image-3.webp`,
      `${basePath}/projects/hira/image-2.webp`,
    ],
    crisisHeading: {
      tr: "Açılması saniyeler süren eski site yüzünden boşa yanan reklam paraları.",
      en: "Wasted ad budget caused by a sluggish legacy site that visitors abandoned.",
    },
    crisisStory: {
      tr: "Hira Halı Yıkama işletmecisi tasarımına çok alışmıştı ve değişmesini istemiyordu. Ancak site o kadar yavaştı ki, Google reklamlarına tıklayan müşteriler sayfa açılmadan kapatıyordu.",
      en: "The owner insisted on retaining his existing layout. However, 5-second mobile load times caused ad clickers to bounce before the phone number even rendered.",
    },
    discoveryHeading: {
      tr: "Müşterinin şartını dinledik: 'Tasarımıma dokunmayın ama sitem uçsun.'",
      en: "Listening to exact client parameters: 'Preserve my design, but make it fly.'",
    },
    discoveryStory: {
      tr: "İşletmeciyle görüştük. Talebi çok netti: Alışılan renkler ve yerleşim aynı kalmalı, ancak site tıklandığı an açılmalıydı. Temiz kodla sıfırdan dokuma kararı aldık.",
      en: "We met on-site. His mandate was clear: preserve brand familiarity, but eliminate all latency. We hand-coded his existing visual design into modern clean code.",
    },
    solutionHeading: {
      tr: "Görsel hafıza korundu, motor baştan aşağı turbo seviyesine çekildi.",
      en: "Visual memory preserved, backend engine upgraded to maximum performance.",
    },
    solutionSteps: [
      {
        num: "01",
        title: {
          tr: "Tasarımı Birebir Klonlayarak Temiz Kodlama",
          en: "Pixel-Level Code Rewrite",
        },
        desc: {
          tr: "Müşterinin sevdiği tüm sayfa düzeni korundu, arkadaki hantal kodlar tamamen çöpe atıldı.",
          en: "Exact layout preserved while discarding bloated third-party template bloat.",
        },
      },
      {
        num: "02",
        title: {
          tr: "Anında Açılan Sayfa Hızı",
          en: "Sub-Second Page Latency",
        },
        desc: {
          tr: "Sitenin ağırlığı hafifletildi; telefonda tıklandığı an ekrana gelen altyapı kuruldu.",
          en: "Asset weight compressed to render instantly on mobile cellular connections.",
        },
      },
      {
        num: "03",
        title: {
          tr: "Google Kalite Puanı & İlk Sıra",
          en: "Ad Quality Scores & Rank",
        },
        desc: {
          tr: "Açılış hızı tam puana ulaşınca Google siteyi ödüllendirdi ve aramalarda en tepeye yerleştirdi.",
          en: "100/100 speed scores lowered Google cost-per-click while driving top positions.",
        },
      },
      {
        num: "04",
        title: {
          tr: "Tek Tıkla Doğrudan Arama Butonları",
          en: "One-Tap Call Action Buttons",
        },
        desc: {
          tr: "Ziyaretçiyi sayfada oyalamadan doğrudan telefon hattına bağlayan arama kurgusu yerleştirildi.",
          en: "Frictionless direct-dial buttons routing high-intent visitors immediately into calls.",
        },
      },
    ],
    shiftHeading: {
      tr: "Reklam bütçesi tek kuruş artırılmadı; gelen telefon araması 4 katına çıktı.",
      en: "Zero ad spend increase; fourfold verified phone call volume.",
    },
    shiftStory: {
      tr: "Site yeni altyapıyla yayına girdiği ilk hafta, tıklayan herkes sayfa anında açıldığı için doğrudan 'Ara' butonuna bastı. Servis araçları aralıksız randevuya yetişmeye başladı.",
      en: "With immediate mobile page rendering, visitors no longer bounced. Ad clicks turned into direct calls, booking the service fleet to full capacity across Bursa.",
    },
    metrics: [
      {
        figure: "< 0.6s",
        label: { tr: "Mobil Sayfa Açılış Hızı", en: "Mobile Page Load Speed" },
      },
      {
        figure: "4x",
        label: {
          tr: "Günlük Doğrudan Telefon Çağrısı",
          en: "Daily Inbound Call Multiplier",
        },
      },
      {
        figure: "#1 Rank",
        label: {
          tr: "Bölgesel Google Arama Konumu",
          en: "Regional Search Position",
        },
      },
      {
        figure: "100%",
        label: {
          tr: "Müşterinin İstediği Orijinal Görsellik",
          en: "Original UI Design Preserved",
        },
      },
    ],
  },
  {
    id: 6,
    slug: "alya-davet",
    title: "Alya Davet & Organizasyon",
    client: "Alya Davet & Kına Konağı",
    category: "seo",
    badge: {
      tr: "Haritada 1. Sıra",
      en: "Maps #1 Ranking",
    },
    categoryLabel: {
      tr: "Google İtibar Yönetimi & Web Sitesi",
      en: "Reputation Management & Booking Web",
    },
    year: "2025",
    location: "Bursa / Nilüfer",
    role: {
      tr: "Google İtibar Temizliği, Yorum & Puan Yönetimi & Şık Rezervasyon Sitesi",
      en: "Google Reputation Cleanup, 5-Star Review Funnel & Elegant Booking Web",
    },
    impact: {
      tr: "3.9'dan 4.5'e Çıkarılan Google Puanı & Prestijli Rezervasyon Sitesi",
      en: "Google Rating Elevated from 3.9 to 4.5 & 3x Event Inbound Bookings",
    },
    description: {
      tr: "Asılsız ve haksız yorumlar yüzünden düşen Google puanının 4.5'e çıkarılması ve salon rezervasyonlarını 3 katına katlayan şık web sitesi inşası.",
      en: "Google map rating restored to 4.5 stars via verified NFC review collection and high-converting venue web architecture.",
    },
    heroLead: {
      tr: "Asılsız ve haksız kötü yorumlar yüzünden Google puanı 3.9'a kadar düşen işletmenin harita itibarının 4.5 yıldıza çekilmesi, haksız yorumların temizlenmesi ve şık bir cemiyet rezervasyon web sitesi inşası.",
      en: "Lifting Google Maps reputation from a damaged 3.9 to an authoritative 4.5 stars, purging malicious reviews, and deploying an elegant corporate event booking platform.",
    },
    imageSrc: `${basePath}/projects/alya/image-1.webp`,
    imageAlt: {
      tr: "Yerel SEO ve Google Haritalar 1. Sıra Çalışması - Alya Davet",
      en: "Local SEO and Google Maps #1 Ranking - Alya Event",
    },
    monogram: "ADY",
    features8: [
      {
        icon: "Star",
        serifTitle: { tr: "4.5 Yıldız İtibarı", en: "4.5 Star Authority" },
        copy: {
          tr: "Asılsız 1 yıldızlı yorumların temizlenmesi ve gerçek müşterilerden toplanan yüksek puanlama.",
          en: "Purged fake 1-star reviews replaced with authentic high-volume customer endorsements.",
        },
      },
      {
        icon: "ShieldCheck",
        serifTitle: { tr: "Google İtibar Koruması", en: "Reputation Shield" },
        copy: {
          tr: "Salonun itibarını zedeleyen sahte ve art niyetli yorumların resmi itirazlarla silinmesi.",
          en: "Legal and algorithmic dispute workflows removing malicious fake competitor reviews.",
        },
      },
      {
        icon: "CalendarCheck",
        serifTitle: { tr: "3 Kat Fazla Rezervasyon", en: "3x Booking Inquiry" },
        copy: {
          tr: "Şık salon web sitesi sayesinde ailelerin güvenle doğrudan salonu arayıp randevu alması.",
          en: "Elegant architectural gallery and booking web inspiring confident direct inquiries.",
        },
      },
    ],
    gallery: [
      `${basePath}/projects/alya/image-1.webp`,
      `${basePath}/projects/alya/image-2.webp`,
    ],
    crisisHeading: {
      tr: "Haritada 3.9 puana düşen itibar ve gelen telefonların kesilmesi.",
      en: "Map rating depressed to 3.9 stars by unverified reviews, choking inbound calls.",
    },
    crisisStory: {
      tr: "Alya Davet çok nezih bir salon olmasına rağmen rakiplerin ve sahte hesapların bıraktığı 1 yıldızlı asılsız yorumlar yüzünden puan 3.9'a kadar gerilemişti. Aileler bu puanı gördüğü an aramaktan vazgeçiyordu.",
      en: "Despite a luxurious venue, malicious 1-star reviews dragged the Google rating to 3.9. Prospective wedding couples seeing this score immediately abandoned booking inquiries.",
    },
    discoveryHeading: {
      tr: "Salonda bir araya geldik; tüm haksız yorumları tek tek dosyaladık.",
      en: "On-site venue session cataloging every defamatory and spam review.",
    },
    discoveryStory: {
      tr: "Salonun masasında oturduk. Gerçekte yaşanmamış tüm sahte yorumları Google'ın resmi politikaları kapsamında tek tek inceledik ve itibar onarım planını hazırladık.",
      en: "We met with management inside the venue, cataloging every violation against Google's spam policies, while planning a frictionless NFC review collection stand.",
    },
    solutionHeading: {
      tr: "Hukuki ve algoritmik itirazlar, 5 yıldızlı müşteri akışı ve modern web vitrini.",
      en: "Algorithmic policy appeals, NFC 5-star collection, and elegant web design.",
    },
    solutionSteps: [
      {
        num: "01",
        title: {
          tr: "Asılsız Yorumlara Resmi İtirazlar",
          en: "Policy Dispute Submissions",
        },
        desc: {
          tr: "Google spam ve sahte hesap politikaları kapsamında haksız 1 yıldızlı yorumlara teknik itirazlar yapılarak kaldırılması sağlandı.",
          en: "Formal technical dispute petitions resulting in the removal of illegitimate 1-star reviews.",
        },
      },
      {
        num: "02",
        title: {
          tr: "Memnun Müşterilerden Gerçek Yorum Sistemi",
          en: "Contactless NFC 5-Star Stands",
        },
        desc: {
          tr: "Memnun ayrılan ailelerin saniyeler içinde 5 yıldız vermesini sağlayan pratik temassız NFC/QR standı kuruldu.",
          en: "Contactless counter stands prompting happy clients to tap their phone and rate 5 stars instantly.",
        },
      },
      {
        num: "03",
        title: {
          tr: "Harita Puanının 4.5 Yıldıza Çıkışı",
          en: "Rating Elevated to 4.5 Stars",
        },
        desc: {
          tr: "Yapılan temizlik ve gelen onlarca gerçek olumlu yorumla birlikte salonun harita puanı 3.9'dan 4.5 yıldıza sıçradı.",
          en: "Dozens of genuine customer ratings catapulted the public venue score to a prestigious 4.5 stars.",
        },
      },
      {
        num: "04",
        title: {
          tr: "Şık Cemiyet ve Rezervasyon Web Sitesi",
          en: "High-End Corporate Event Web",
        },
        desc: {
          tr: "Salonun fotoğraflarını, kapasitesini ve menü detaylarını sergileyen şık kurumsal web sitesi kodlandı.",
          en: "A bespoke booking portal showcasing venue aesthetics, catering menus, and direct inquiry forms.",
        },
      },
    ],
    shiftHeading: {
      tr: "Gelin ve damat adayları artık salonu gönül rahatlığıyla aramaya başladı.",
      en: "Wedding couples inquiring with complete commercial confidence.",
    },
    shiftStory: {
      tr: "Google Haritalar'da 4.5 yıldızı ve pırıl pırıl müşteri yorumlarını gören ailelerin güveni yeniden sağlandı. Web sitesindeki fotoğrafları inceleyen müşterilerin doğrudan arama oranı 3 katına çıktı.",
      en: "Seeing a verified 4.5-star rating alongside authentic customer praise restored trust immediately. Direct incoming tour and reservation calls tripled.",
    },
    metrics: [
      {
        figure: "4.5 Stars",
        label: {
          tr: "Google Harita Puanı (Önce 3.9)",
          en: "Google Maps Rating (Was 3.9)",
        },
      },
      {
        figure: "18 Removed",
        label: {
          tr: "Kaldırılan Asılsız / Sahte Kötü Yorum",
          en: "Defamatory Reviews Purged",
        },
      },
      {
        figure: "3x",
        label: {
          tr: "Salon Ziyareti ve Teklif Talebi Artışı",
          en: "Tour & Booking Lead Multiplier",
        },
      },
      {
        figure: "100%",
        label: {
          tr: "Geri Kazanılan Kurumsal Güven",
          en: "Corporate Commercial Trust Restored",
        },
      },
    ],
  },
];

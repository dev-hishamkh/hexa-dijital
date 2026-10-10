import { servicesData } from "./servicesData";

const basePath = "";
// Hazırladığın 24 Özgün Görselin Hizmetlerle Birebir Eşleşmesi
const serviceHeroStockMap = {
  // 01. Web Siteleri & Dijital Vitrin
  "tek-sayfa-tanitim-siteleri": `${basePath}/services/custom_one_page.webp`,
  "kurumsal-web-siteleri": `${basePath}/services/custom_corporate_website.webp`,
  "qr-kodlu-menu": `${basePath}/services/web.webp`,
  "ozel-tasarim-3d-siteler": `${basePath}/services/3d_website.webp`,
  "e-ticaret-siteleri": `${basePath}/services/e-commerce_website.webp`,

  // 02. Sipariş & Satış Sistemleri
  "toptan-bayi-siparis-sistemi": `${basePath}/services/scalable_web_application.webp`,
  "komisyonsuz-paket-servis": `${basePath}/services/custom_e-commerce.webp`,
  "whatsapp-siparis-sistemi": `${basePath}/services/ready_to_use_theme_one_page.webp`,
  "yemek-sitelerinde-satis-artirma": `${basePath}/services/hotel.webp`,
  "pazar-yerlerinde-satis-artirma": `${basePath}/services/product_showcase.webp`,

  // 03. İşletme Otomasyonu & Yazılım
  "adisyon-kasa-programi": `${basePath}/services/custom_mobile_application_development.webp`,
  "otomatik-randevu-sistemi": `${basePath}/services/appointment_management.webp`,
  "yapay-zeka-musteri-asistani": `${basePath}/services/local_ai.webp`,
  "is-evrak-takip-programi": `${basePath}/services/automated_business_operations.webp`,
  "barkod-stok-takip-sistemi": `${basePath}/services/ready_to_use_theme_corporate.webp`,

  // 04. Büyüme Reklamı & Haritalar İlk Sıra
  "meta-instagram-facebook-reklamlari": `${basePath}/services/content_scheduling.webp`,
  "sosyal-medya-yonetimi": `${basePath}/services/community_management.webp`,
  "google-reklamlari": `${basePath}/services/google.webp`,
  "google-haritalar-1-sira": `${basePath}/services/google_maps.webp`,
  "google-yorum-puan-artirma": `${basePath}/services/customer_review.webp`,

  // 05. Marka Kimliği, Tasarım & Fotoğraf
  "ozel-logo-tasarimi": `${basePath}/services/logo.webp`,
  "kartvizit-magnet-ambalaj-baskilari": `${basePath}/services/kartvizit.webp`,
  "urun-dukkan-fotograf-cekimi": `${basePath}/services/product_photo.webp`,
  "tabela-cephe-giydirme-tasarimi": `${basePath}/services/brand_identity.webp`,
};

// 24 Hizmetin Her Biri İçin Başlığa Özel 3 Farklı İkon Eşleştirmesi
const servicePillarIconsMap = {
  "tek-sayfa-tanitim-siteleri": ["PhoneCall", "Target", "TrendingUp"],
  "kurumsal-web-siteleri": ["Building2", "Sliders", "Award"],
  "qr-kodlu-menu": ["QrCode", "FileX", "UtensilsCrossed"],
  "ozel-tasarim-3d-siteler": ["Sparkles", "Layers", "Award"],
  "e-ticaret-siteleri": ["CreditCard", "ShoppingBag", "Truck"],
  "toptan-bayi-siparis-sistemi": ["Boxes", "Sliders", "Truck"],
  "komisyonsuz-paket-servis": ["Percent", "Printer", "Coins"],
  "whatsapp-siparis-sistemi": ["MessageSquare", "MapPin", "Zap"],
  "yemek-sitelerinde-satis-artirma": ["Search", "Tag", "Star"],
  "pazar-yerlerinde-satis-artirma": [
    "ShoppingBag",
    "CircleDollarSign",
    "ShieldCheck",
  ],
  "adisyon-kasa-programi": ["LayoutGrid", "Smartphone", "Receipt"],
  "otomatik-randevu-sistemi": ["PhoneOff", "CalendarCheck", "Award"],
  "yapay-zeka-musteri-asistani": ["Bot", "MessageSquare", "Database"],
  "is-evrak-takip-programi": ["Workflow", "FileText", "Timer"],
  "barkod-stok-takip-sistemi": ["Barcode", "BellRing", "PackageCheck"],
  "meta-instagram-facebook-reklamlari": ["Target", "Video", "BarChart3"],
  "sosyal-medya-yonetimi": ["Share2", "Video", "MessageCircle"],
  "google-reklamlari": ["Search", "Filter", "PhoneCall"],
  "google-haritalar-1-sira": ["MapPin", "Star", "Award"],
  "google-yorum-puan-artirma": ["ShieldAlert", "QrCode", "Star"],
  "ozel-logo-tasarimi": ["PenTool", "Ruler", "Award"],
  "kartvizit-magnet-ambalaj-baskilari": ["Layers", "CreditCard", "Printer"],
  "urun-dukkan-fotograf-cekimi": ["Camera", "Focus", "TrendingUp"],
  "tabela-cephe-giydirme-tasarimi": ["Building2", "Lightbulb", "Ruler"],
};

const richServiceProfiles = {
  tr: {
    "tek-sayfa-tanitim-siteleri": {
      categoryTag: "Web Mimarisi",
      title: "Tek Sayfa Tanıtım Siteleri",
      leadText:
        "Reklam bütçenizi doğrudan telefon aramasına ve WhatsApp mesajına dönüştüren, telefonda anında açılan tek sayfa satış motoru.",
      features8: [
        {
          icon: "PhoneCall",
          serifTitle: "Doğrudan Telefon Çaldırır",
          copy: "Ziyaretçiyi karmaşık menülerde kaybetmeden tek tuşla işletmenizi aratan cerrahi akış.",
        },
        {
          icon: "Zap",
          serifTitle: "Göz Açıp Kapayıncaya Kadar Hızlı",
          copy: "Reklama tıklayan müşteriyi bekletmeden anında ekrana getiren hafif altyapı.",
        },
        {
          icon: "Target",
          serifTitle: "Boşa Reklam Parası Yakmaz",
          copy: "Hangi reklamdan kaç telefon araması geldiğini kuruşu kuruşuna gösteren net takip sistemi.",
        },
      ],
      features11: {
        headlineMain: "Reklama para verip gelen müşteri",
        headlineItalic: "açılmayan sayfalarda bekleyip",
        headlineEnd: "rakibe kaçmamalı.",
        leadParagraph:
          "İnternetten acil hizmet arayan bir müşteri tıkladığı sayfa 2 saniye içinde açılmazsa veya arama butonunu hemen göremezse çıkar, rakibinizi arar. Tek sayfa tanıtım sitelerimiz müşteriyi bekletmeden doğrudan işletmenize bağlar.",
        cards: [
          {
            index: "01",
            icon: "Zap",
            title: "Telefonda Anında Açılır",
            text: "Ağır ve hantal temalar yerine saf kodlama yapıyoruz; site müşterinin telefonunda saniyesinde belirir.",
            actionText: "Açılış hızını inceleyin",
          },
          {
            index: "02",
            icon: "PhoneCall",
            title: "Tek Dokunuşla Arama",
            text: "Uzun formlarla uğraştırmaz; ekranın her yerinde hazır bekleyen WhatsApp ve arama butonlarıyla telefonu çaldırır.",
            actionText: "Arama butonlarını görün",
          },
          {
            index: "03",
            icon: "Target",
            title: "Reklam Maliyetinizi Düşürür",
            text: "Google ve Instagram hızlı açılan siteleri ödüllendirir; aynı bütçeyle rakiplerinizden çok daha fazla müşteri çekersiniz.",
            actionText: "Reklam kazancını görün",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Doğrudan Arama Odağı",
          heading:
            "Müşterinin aklını karıştırmayan, tek dokunuşla telefon bağlayan ekran.",
          text: "Hakkımızda, vizyon gibi sayfalarla vakit kaybettirmiyoruz. Sayfa doğrudan ne iş yaptığınızı, fiyat avantajınızı anlatıp tek tuşla dükkanınızın telefonunu çaldırır.",
          icon: "PhoneCall",
        },
        block2: {
          tag: "02 · Şeffaf Reklam Dönüşümü",
          heading:
            "Hangi reklamın kaç telefon getirdiğini kuruşu kuruşuna görün.",
          text: "Google veya Instagram reklamlarına verdiğiniz paranın nereye gittiğini tam bilirsiniz. Gün içinde kaç kişinin aradığını net sayılarla takip edersiniz.",
          icon: "Target",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading:
            "Hira Halı & Koltuk Yıkama — Günde 35+ Doğrudan Müşteri Çağrısı",
          text: "Açılması 5 saniye süren eski site yerine telefon odaklı tek sayfa mimariye geçildi; reklam harcaması artırılmadan gelen doğrudan müşteri çağrısı 4 katına çıktı.",
          metricBadge: "Günde 35+ Gerçek Müşteri Çağrısı",
          icon: "TrendingUp",
        },
      },
      deliverablesHeader: {
        eyebrow: "Net ve Eksiksiz Teslimat",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Sürpriz maliyetler olmadan, doğrudan telefon çaldırmak ve satış kapatmak için ihtiyacınız olan her şey resmi sözleşmeyle hazır teslim edilir.",
      },
      pillars: [
        {
          icon: "Gauge",
          title: "Işık Hızında Mobil Açılış",
          desc: "Telefonda bekleme yapmayan, müşterinin tıkladığı an karşısına çıkan temiz sayfa yapısı.",
        },
        {
          icon: "PhoneCall",
          title: "Tek Dokunuşla Arama & WhatsApp",
          desc: "Müşterinin numara kopyalamasına gerek kalmadan doğrudan hattınızı bağlayan akıllı butonlar.",
        },
        {
          icon: "Target",
          title: "Google & Instagram Reklam Takibi",
          desc: "Reklamlardan gelen her tıklamayı ölçen ve reklam maliyetinizi düşüren teknik altyapı.",
        },
        {
          icon: "Sliders",
          title: "Sade Talep Formu",
          desc: "Müşteriyi sıkmadan sadece isim ve telefon alarak size anında bildirim atan mini form.",
        },
        {
          icon: "MailCheck",
          title: "Şirket Adına E-Posta & SSL Kilidi",
          desc: "Müşteriye güven veren yeşil kilitli güvenlik sertifikası ve resmi şirket e-posta adresleri.",
        },
        {
          icon: "Fingerprint",
          title: "%100 Şirketinize Ait Mülkiyet",
          desc: "Yıllık tema veya kiralama bedeli yok; site, alan adı ve tüm dosyalar doğrudan sizin adınıza tescillenir.",
        },
      ],
      faq: [
        {
          q: "Tek sayfa tanıtım sitesi kurumsal siteden neden daha çok telefon çaldırır?",
          a: "Kurumsal siteler şirketin tüm tarihini anlatırken müşteri sayfalar arasında dağılır. Tek sayfa tanıtım sitesi ise sadece müşterinin sorununa ve aradığı hizmete odaklanır; sayfayı gezdirmek yerine doğrudan 'Hemen Arayın' dedirtir.",
        },
        {
          q: "Sayfadaki telefon numarasını veya yazıları kendimiz değiştirebilir miyiz?",
          a: "Evet. Kod bilmenize kesinlikle gerek yok. Telefonunuzdan bile girip numaranızı veya kampanya yazılarınızı saniyeler içinde güncelleyebilirsiniz.",
        },
      ],
      relatedSlugs: ["kurumsal-web-siteleri", "google-reklamlari"],
    },
    "kurumsal-web-siteleri": {
      categoryTag: "Web Mimarisi",
      title: "Kurumsal Web Siteleri",
      leadText:
        "Telefonda ve bilgisayarda 1 saniyenin altında açılan, kurumsal güven veren ve Google aramalarında şirketinizi en tepeye taşıyan prestijli şirket vitrini.",
      features8: [
        {
          icon: "Gauge",
          serifTitle: "1 Saniyenin Altında Açılış",
          copy: "Tüm telefonlarda ve bilgisayarlarda takılmadan, anında yüklenen kusursuz hız standardı.",
        },
        {
          icon: "KeyRound",
          serifTitle: "%100 Şirketinize Ait Mülkiyet",
          copy: "Ajansa bağımlı kalmadan; tüm şifreleri, alan adı ve kaynak kodları doğrudan adınıza tescilli altyapı.",
        },
        {
          icon: "ShieldCheck",
          serifTitle: "Sıfır Çökme & Tam Güvenlik",
          copy: "Sürekli güncellenmesi gereken hantal eklentiler olmadan, siber saldırılara karşı korumalı temiz sistem.",
        },
      ],
      features11: {
        headlineMain: "Kurumsal bir şirket sitesi",
        headlineItalic: "yavaş açılıp prestij kaybettirmemeli,",
        headlineEnd: "güven aşılamalı.",
        leadParagraph:
          "Müşterileriniz veya yurt dışındaki iş ortaklarınız firmanızı araştırırken açılmayan bir siteyle karşılaşırsa profesyonelliğinizden şüphe duyar. Şirketinizin ağırlığına yakışan, saniyeler içinde açılan kurumsal platformlar inşa ediyoruz.",
        cards: [
          {
            index: "01",
            icon: "Zap",
            title: "Tüm Cihazlarda Kusursuz Hız",
            text: "Ziyaretçi sitenize girdiği anda tüm sayfalar bekletmeden açılır; kurumsal prestijiniz ilk saniyede hissedilir.",
            actionText: "Hız avantajını görün",
          },
          {
            index: "02",
            icon: "ShieldCheck",
            title: "Yıllık Bakım Tuzağı Yok",
            text: "Her yıl tema yenileme veya eklenti güncelleme parası ödemezsiniz. Sistem kurulur ve yıllarca tıkır tıkır çalışır.",
            actionText: "Mülkiyet şartlarını inceleyin",
          },
          {
            index: "03",
            icon: "TrendingUp",
            title: "Google'da Prestij ve İlk Sıra",
            text: "Google hızlı ve temiz siteleri sever. Rakiplerinizi geride bırakıp sektörünüzdeki aramalarda en tepede yer alırsınız.",
            actionText: "Arama görünürlüğünü görün",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Kurumsal Prestij",
          heading:
            "Şirketinizin büyüklüğünü ve güvenini internete eksiksiz yansıtın.",
          text: "Piyasadaki kalitesiz kopyala-yapıştır şablonlar firmanızı amatör gösterir. Fabrikanızı, referanslarınızı ve belgelerinizi en şık şekilde sergileyen arayüzler kodluyoruz.",
          icon: "Building2",
        },
        block2: {
          tag: "02 · Kolay Yönetim & Bağımsızlık",
          heading: "Yazıları ve referansları kendiniz tek tıkla güncelleyin.",
          text: "Küçük bir görsel veya yazı değiştirmek için ajans peşinde koşmazsınız. Telefonunuzdan bile girip referanslarınızı saniyeler içinde ekleyebileceğiniz kolay bir panel veriyoruz.",
          icon: "Sliders",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading: "Tataroğlu İnşaat — Anında Açılış & 3 Kat Teklif Talebi",
          text: "Eski hantal web sitesi yenilenerek açılış süresi hızlandırıldı; aramalarda ilk sıraya yükselerek kurumsal proje teklif taleplerini 3 katına çıkardı.",
          metricBadge: "Anında Açılış · 3 Kat Fazla Teklif",
          icon: "Award",
        },
      },
      deliverablesHeader: {
        eyebrow: "Mühendislik Standartları",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Her detay şirketinize prestij katmak, Google'da güven aşılamak ve müşterilerinize kesintisiz ulaşmak için hazırlanır.",
      },
      pillars: [
        {
          icon: "Code2",
          title: "Özel ve Hafif Kodlama",
          desc: "Hazır şablon çöplüğü olmadan, sadece firmanıza özel sıfırdan çizilmiş modern yapı.",
        },
        {
          icon: "Gauge",
          title: "Google Hız Testlerinde Tam Puan",
          desc: "Arama motoru hız testlerinde tam puan alarak rakiplerinizi sıralamada geride bırakan hafiflik.",
        },
        {
          icon: "FileCode2",
          title: "Google Firma Kimliği Kaydı",
          desc: "Google botlarının firmanızı, adresinizi ve hizmetlerinizi eksiksiz tanımasını sağlayan teknik şifreleme.",
        },
        {
          icon: "ShieldAlert",
          title: "Siber Güvenlik Kalkanı",
          desc: "Sitenizin çökmesini veya hacklenmesini engelleyen kurumsal şifreleme ve güvenlik kilidi.",
        },
        {
          icon: "Sliders",
          title: "Türkçe Sade Yönetim Paneli",
          desc: "Bilgisayar bilmeyen personelin bile tek tıkla ürün ve referans yükleyebileceği kolay ekran.",
        },
        {
          icon: "Headset",
          title: "Kesintisiz Destek Masası",
          desc: "Haftanın her günü doğrudan teknik ekiple görüşebileceğiniz kesintisiz telefon ve WhatsApp desteği.",
        },
      ],
      faq: [
        {
          q: "Neden hazır WordPress teması yerine özel kodlama tercih etmeliyiz?",
          a: "Hazır temalar onlarca gereksiz eklentiyle kurulduğu için zamanla ağırlaşır ve çöker. Özel kodladığımız siteler ise sıfır eklentiyle çalışır, yıllar geçse de aynı hızda açılır.",
        },
      ],
      relatedSlugs: ["google-haritalar-1-sira", "ozel-tasarim-3d-siteler"],
    },
    "qr-kodlu-menu": {
      categoryTag: "Web Mimarisi",
      title: "QR Kodlu Menü Sistemleri",
      leadText:
        "Fiyat değiştikçe kağıt menü bastırma maliyetini bitiren, masalarda telefondan anında açılan ve garson yükünü azaltan dijital menü.",
      features8: [
        {
          icon: "QrCode",
          serifTitle: "Sıfır Baskı Masrafı",
          copy: "Fiyatlar değiştikçe yüzlerce liralık kağıt menü bastırma derdine son veren tek tıkla güncelleme.",
        },
        {
          icon: "Zap",
          serifTitle: "Uygulama İndirtmez",
          copy: "Müşterinin telefonuna uygulama yükletmeden kamerayı tuttuğu an saniyesinde açılan hız.",
        },
        {
          icon: "UtensilsCrossed",
          serifTitle: "İştah Açan Görseller",
          copy: "Yemeklerin ve içeceklerin gerçek, yüksek çözünürlüklü fotoğraflarıyla masada sipariş artışı.",
        },
      ],
      features11: {
        headlineMain: "Masaya oturan müşteri",
        headlineItalic: "yıpranmış kağıt menü beklememeli,",
        headlineEnd: "lezzeti anında görmeli.",
        leadParagraph:
          "Eski kağıt menüler yıpranır, üzerindeki fiyat karalamaları müşteride güvensizlik yaratır. QR kodlu dijital menü ile masadaki herkes menünüzü kendi telefonundan şık ve iştah kabartan fotoğraflarla inceler.",
        cards: [
          {
            index: "01",
            icon: "Zap",
            title: "Anında Açılan Web Menü",
            text: "Uygulama indirme mecburiyeti yok. Telefon kamerasını okuttuğu an menünüz ekranda parlar.",
            actionText: "Açılış deneyimini görün",
          },
          {
            index: "02",
            icon: "Sliders",
            title: "Tek Tıkla Fiyat Değişimi",
            text: "Girdi maliyetleri arttığında veya yeni ürün eklendiğinde telefonunuzdan saniyeler içinde güncelleyin.",
            actionText: "Yönetim kolaylığını görün",
          },
          {
            index: "03",
            icon: "Award",
            title: "Alerjen ve Porsiyon Etiketleri",
            text: "Glutensiz, acılı, vegan veya gramaj bilgilerini ürünlerin altına net şekilde ekleyin.",
            actionText: "Etiket detaylarını inceleyin",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Masada Temassız Deneyim",
          heading: "Kamerayı tuttuğu an telefonda açılan modern dijital menü.",
          text: "Müşterileriniz hiçbir uygulama indirmeden; tüm yemekleri, tatlıları ve içecekleri net fotoğraflarıyla saniyeler içinde inceler.",
          icon: "QrCode",
        },
        block2: {
          tag: "02 · Sıfır Baskı Faturası",
          heading:
            "Yılda binlerce liralık kağıt menü masrafını tamamen çöpe atın.",
          text: "Fiyatlar değiştiğinde menülerin üzerini etiketle kapatmak zorunda kalmazsınız. Cep telefonunuzdan paneli açıp yeni fiyatı yazın, tüm masalarda aynı anda güncellensin.",
          icon: "FileX",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading: "Paninoteca — Masalarda Sıfır Baskı & Lezzet Odaklı Sipariş",
          text: "Kağıt menü masrafları sıfırlandı; menü fotoğrafları profesyonelleştirilerek masalarda ek tatlı ve içecek sipariş oranı hissedilir derecede arttı.",
          metricBadge: "Yüzde 100 Sıfır Baskı Maliyeti",
          icon: "UtensilsCrossed",
        },
      },
      deliverablesHeader: {
        eyebrow: "Restoran & Kafe Çözümü",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Masalarda bekleme yapmayan, garsonun işini hafifleten ve işletme kârınızı artıran dijital menü mimarisi.",
      },
      pillars: [
        {
          icon: "QrCode",
          title: "Masa Bazlı Şık QR Tasarımı",
          desc: "Masalarınıza özel ahşap, pleksi veya metal standlara basılmaya hazır şık QR kod tasarımları.",
        },
        {
          icon: "Sliders",
          title: "Canlı Fiyat & Ürün Paneli",
          desc: "Tükenen ürünleri tek tuşla 'bitti' yapabileceğiniz, fiyatları saniyede güncelleyebileceğiniz panel.",
        },
        {
          icon: "Camera",
          title: "İştah Kabartan Görsel Düzeni",
          desc: "Yemeklerinizi porsiyon seçenekleriyle ve net açıklamalarıyla sergileyen görsel yerleşim.",
        },
        {
          icon: "Zap",
          title: "Uygulamasız Hızlı Açılış",
          desc: "Telefonda tarayıcı üzerinden saniyesinde ekrana gelen ultra hafif kod yapısı.",
        },
        {
          icon: "Layers",
          title: "Kategori & Arama Filtresi",
          desc: "Müşterinin tatlı, ana yemek veya içeceği saniyeler içinde bulmasını sağlayan akıllı filtre.",
        },
        {
          icon: "Headset",
          title: "Bursa İçi Yerinde Masada Kurulum",
          desc: "Dükkanınıza gelip menünüzü masanızda birlikte dijitale aktarıyor ve eğitimi yerinde veriyoruz.",
        },
      ],
      faq: [
        {
          q: "Müşterilerin QR menüyü açabilmesi için bir uygulama indirmesi gerekir mi?",
          a: "Asla. iPhone veya Android telefonun kamerasını QR koda tuttuğu anda menü doğrudan telefonun kendi tarayıcısında 1 saniyede açılır.",
        },
      ],
      relatedSlugs: ["komisyonsuz-paket-servis", "adisyon-kasa-programi"],
    },
    "komisyonsuz-paket-servis": {
      categoryTag: "Sipariş & Satış",
      title: "Komisyonsuz Paket Servis Sitesi",
      leadText:
        "Yemeksepeti ve Getir'e her ay yüzde 30 komisyon kaptırmadan, siparişleri doğrudan kendi dükkanınıza çeken ve mutfak yazıcısına fiş basan sistem.",
      features8: [
        {
          icon: "Percent",
          serifTitle: "%0 Komisyon Kesintisi",
          copy: "Her pakette kazandığınız paranın tamamının dükkanınızın kasasında kalması.",
        },
        {
          icon: "Printer",
          serifTitle: "Mutfak Yazıcısına Otomatik Fiş",
          copy: "Müşteri siparişi verdiği an mutfaktaki ve kurye masasındaki termal yazıcıdan fiş dökümü.",
        },
        {
          icon: "Database",
          serifTitle: "Müşteri Verisi Size Kalır",
          copy: "Telefon numaraları aracı sitelere değil, doğrudan sizin işletmenizin rehberine tescillenir.",
        },
      ],
      features11: {
        headlineMain: "Her ay aracı yemek sitelerine",
        headlineItalic: "yüz binlerce lira komisyon ödemek",
        headlineEnd: "kaderiniz değil.",
        leadParagraph:
          "Yemek platformları dükkanınızın cirosuna ortak olur, müşterinin telefonunu sizden saklar ve her siparişte yüzde 30'a varan pay keser. Kendi online paket servis sisteminizle sadık müşterilerinizi doğrudan dükkanınıza bağlayın.",
        cards: [
          {
            index: "01",
            icon: "Percent",
            title: "Yüzde 0 Komisyon",
            text: "100 TL'lik siparişin 100 TL'si de kasanıza girer. Aracı şirketlere haraç gibi komisyon ödemezsiniz.",
            actionText: "Komisyon kazancını hesaplayın",
          },
          {
            index: "02",
            icon: "Printer",
            title: "Otomatik Adisyon Fişi",
            text: "Sipariş ekrana düştüğü an mutfaktaki termal yazıcıdan adisyon fişi saniyesinde basılır.",
            actionText: "Yazıcı entegrasyonunu görün",
          },
          {
            index: "03",
            icon: "MapPin",
            title: "Semt Bazlı Minimum Tutar",
            text: "Uzak mahallelere minimum sepet tutarı ve kurye teslimat ücreti belirleme esnekliği.",
            actionText: "Bölge ayarlarını inceleyin",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Sıfır Komisyon Hattı",
          heading:
            "Kendi müşterinizi aracı sitelere kaptırmayın, kârınız cebinizde kalsın.",
          text: "Dükkanınızın paket kutularına veya Instagram sayfasına koyacağınız linkle müşteriler siparişini doğrudan kendi sitenizden verir. Yüzde 30 komisyon kesintisi tamamen sıfırlanır.",
          icon: "Percent",
        },
        block2: {
          tag: "02 · Mutfakta Otomatik Fiş",
          heading:
            "Gelen her sipariş mutfak yazıcısından anında fiş olarak dökülsün.",
          text: "Personelinizin telefonla adres karalama derdi biter. Müşterinin adresi, kapı zili, acısız/acılı notu mutfak termal yazıcısından büyük harflerle saniyesinde çıkar.",
          icon: "Printer",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading:
            "Munchico Fried Chicken — Ayda Yüzbinlerce Lira Komisyon Tasarrufu",
          text: "Paket müşterileri dükkanın kendi sipariş sistemine yönlendirildi; aracı sitelere komisyon kaptırmadan doğrudan dükkandan sipariş alınmaya başlandı.",
          metricBadge: "Yüzde 0 Komisyon ile Kendi Sipariş Hattı",
          icon: "Coins",
        },
      },
      deliverablesHeader: {
        eyebrow: "Restoran Sipariş Altyapısı",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Aracı sitelerin boyunduruğundan kurtulup kendi bağımsız paket servis hattınızı kurmanız için gereken her şey hazır.",
      },
      pillars: [
        {
          icon: "Percent",
          title: "Sıfır Komisyonlu Sipariş Yazılımı",
          desc: "Alınan hiçbir siparişten yüzde kesintisi olmayan, tamamen dükkanınıza ait web sitesi.",
        },
        {
          icon: "Printer",
          title: "Termal Yazıcı Bağlantısı",
          desc: "Sipariş geldiği an mutfakta ve kuryede otomatik adisyon basan yazıcı sistemi.",
        },
        {
          icon: "CreditCard",
          title: "Kapıda Ödeme & Online Sanal POS",
          desc: "Kapıda nakit, kapıda kredi kartı veya siteden güvenli online ödeme alma seçeneği.",
        },
        {
          icon: "MapPin",
          title: "Bölge & Mahalle Teslimat Ayarı",
          desc: "Hangi mahalleye kaç dakikada gideceğinizi ve minimum sepet tutarını haritadan çizme.",
        },
        {
          icon: "Database",
          title: "Müşteri Telefon Veritabanı",
          desc: "Dükkanınızdan sipariş veren müşterilerin rehberini toplayıp özel SMS kampanyaları yapma.",
        },
        {
          icon: "Headset",
          title: "Bursa İçi Yerinde Masada Kurulum",
          desc: "Dükkanınıza gelip mutfak yazıcınızı bağlıyor, sistemi masanızda yüz yüze kuruyoruz.",
        },
      ],
      faq: [
        {
          q: "Yemeksepeti veya Trendyol Yemek mağazalarımızı kapatmamız gerekir mi?",
          a: "Hayır. Onlar yeni müşteri çekmek için açık kalabilir. Ancak dükkanınızdan bir kez sipariş vermiş sadık müşterilere kutu içi kuponlar vererek sonraki siparişleri kendi komisyonsuz sitenize çekersiniz.",
        },
      ],
      relatedSlugs: ["adisyon-kasa-programi", "qr-kodlu-menu"],
    },
    "toptan-bayi-siparis-sistemi": {
      categoryTag: "Sipariş & Satış",
      title: "Bayi Sipariş Sistemi & Toptan Sipariş Programı",
      leadText:
        "WhatsApp ve telefonla sipariş karmaşasına son verin. Bayilerinizin doğrudan stok görüp sipariş girdiği, komisyonsuz ve hızlı toptan sipariş sistemi.",
      features8: [
        {
          icon: "Boxes",
          serifTitle: "Sıfır Sipariş Karışıklığı",
          copy: "WhatsApp'tan eksik gelen siparişler, yanlış kodlar ve telefon trafiğinin kökten bitmesi.",
        },
        {
          icon: "Sliders",
          serifTitle: "Bayiye Özel Fiyat & İskonto",
          copy: "Her bayi grubuna sadece kendi anlaştığınız özel fiyat ve vadeleri gösteren akıllı ekran.",
        },
        {
          icon: "Truck",
          serifTitle: "Depoya Anında Bildirim",
          copy: "Bayi siparişi onayladığı an deponun ekranına ve muhasebeye dökülen net sipariş listesi.",
        },
      ],
      features11: {
        headlineMain: "Toptan siparişleri telefonla ve",
        headlineItalic: "karışık mesajlarla toplamak",
        headlineEnd: "zaman kaybettirmemeli.",
        leadParagraph:
          "Toptancıların ve imalatçıların en büyük derdi eksik yazılan siparişler ve fiyat tartışmalarıdır. Bayilerinize özel tanımlayacağınız pratik web paneliyle bayileriniz kendi telefonundan günün her saati hatasız sipariş verir.",
        cards: [
          {
            index: "01",
            icon: "Boxes",
            title: "Toplu Sepet Oluşturma",
            text: "Bayiler yüzlerce kalemi tek ekrandan adet girerek saniyeler içinde sepete ekler.",
            actionText: "Sipariş ekranını görün",
          },
          {
            index: "02",
            icon: "Sliders",
            title: "Özel Fiyat Tanımlama",
            text: "A bayisine yüzde 20, B bayisine yüzde 35 iskonto; herkes sadece kendi fiyatını görür.",
            actionText: "Fiyatlandırma yapısını inceleyin",
          },
          {
            index: "03",
            icon: "Truck",
            title: "Excel ile Tek Tıkla Güncelleme",
            text: "Fiyatlar veya stoklar değiştiğinde Excel listenizi yükleyin, tüm bayilerde anında güncellensin.",
            actionText: "Excel aktarımını görün",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Telefon Trafiğine Son",
          heading:
            "Bayileriniz gece bile olsa kendi ekranından siparişini girsin.",
          text: "Müşteriniz mesai saati beklemeden; stoğu görür, ihtiyacı olan adetleri seçer ve siparişini iletir. Telefon başında sipariş notu alma dönemi tamamen kapanır.",
          icon: "Boxes",
        },
        block2: {
          tag: "02 · Hatasız Depo Çıkışı",
          heading:
            "Depocunun eline ürün kodları ve adetleri net yazılı liste gitsin.",
          text: "WhatsApp'taki ses kayıtlarından veya okunmayan el yazılarından sipariş hazırlama derdi biter. Sipariş depoya net bir kontrol listesi olarak düşer.",
          icon: "Sliders",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading: "Bursa Tekstil Toptancısı — Günlük 4 Saat Zaman Tasarrufu",
          text: "80 aktif bayi sipariş sistemine geçirildi; sipariş hazırlamadaki ürün karışıklıkları sıfıra indi ve ofis personeli tüm gün telefon yanıtlamaktan kurtuldu.",
          metricBadge: "%100 Hatasız Toptan Sipariş",
          icon: "Truck",
        },
      },
      deliverablesHeader: {
        eyebrow: "Toptan Satış Altyapısı",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Toptan ticaretinizi düzene sokan, personelin iş yükünü hafifleten ve bayilerinizi bağlayan pratik yazılım.",
      },
      pillars: [
        {
          icon: "Boxes",
          title: "Bayi Girişli Web Portalı",
          desc: "Bayilerinizin kullanıcı adı ve şifresiyle girip sipariş verdiği şifreli özel sistem.",
        },
        {
          icon: "Sliders",
          title: "Kademeli İskonto & Fiyatlandırma",
          desc: "Bayi bazında veya ürün kategorisi bazında farklı kâr marjları ve iskontolar tanımlama.",
        },
        {
          icon: "FileCode2",
          title: "Excel İçe & Dışa Aktarım",
          desc: "Binlerce ürünü ve güncel fiyatları tek bir Excel tablosuyla anında sisteme yükleme.",
        },
        {
          icon: "MailCheck",
          title: "Anlık Sipariş ve PDF Dökümü",
          desc: "Onaylanan siparişin otomatik olarak kaşeli sipariş formu şeklinde PDF'e dönüşmesi.",
        },
        {
          icon: "ShieldCheck",
          title: "Cari Bakiye & Limit Uyarısı",
          desc: "Limiti dolan veya vadesi geçen bayilerin sipariş geçmesini engelleyen bakiye kontrolü.",
        },
        {
          icon: "Headset",
          title: "Bursa İçi Masada Kurulum & Eğitim",
          desc: "İşletmenize gelip ürünlerinizi yüklüyor ve personelinize sistemi masasında öğretiyoruz.",
        },
      ],
      faq: [
        {
          q: "Bayilerimizin bu sistemi kullanabilmesi için bilgisayar bilmesi gerekir mi?",
          a: "Kesinlikle hayır. Akıllı telefon kullanan herkesin 1 dakikada anlayabileceği, sadece adet yazıp 'Siparişi Tamamla' butonuna basacağı kadar basittir.",
        },
        {
          q: "Mevcut muhasebe programımızla uyumlu çalışır mı?",
          a: "Sistem tüm ürün ve sipariş verilerini Excel formatında dışa aktarabildiği için kullandığınız tüm muhasebe programlarına kolayca veri aktarabilirsiniz.",
        },
      ],
      relatedSlugs: ["is-evrak-takip-programi", "barkod-stok-takip-sistemi"],
    },
    "adisyon-kasa-programi": {
      categoryTag: "İşletme Otomasyonu",
      title: "Adisyon ve Kasa Programı",
      leadText:
        "Masalarda hesap karışıklığını ve kaçakları bitiren, garsonların cepten sipariş girdiği ve gün sonu net kârı kuruşu kuruşuna döken sistem.",
      features8: [
        {
          icon: "Receipt",
          serifTitle: "Sıfır Hesap Hatası",
          copy: "Masalarda unutulan çaylar, yanlış giden siparişler ve hesap kaçaklarının kökten bitmesi.",
        },
        {
          icon: "Printer",
          serifTitle: "Cepten Gir, Mutfağa Dök",
          copy: "Garson masadan siparişi girdiği anda mutfaktaki yazıcıdan saniyesinde fiş çıkması.",
        },
        {
          icon: "ShieldCheck",
          serifTitle: "İnternet Gitse Bile Çalışır",
          copy: "İnternet kesintilerinde dükkanda aksama yapmadan çalışmaya devam eden güvenli altyapı.",
        },
      ],
      features11: {
        headlineMain: "Akşam yoğunluğundaki o kargaşa,",
        headlineItalic: "kaybolan kağıt adisyonlar",
        headlineEnd: "ve hesap kaçakları bitmeli.",
        leadParagraph:
          "Garsonlar kağıtlara sipariş karalarken mutfaktaki usta siparişi yanlış hazırlar, masalardaki ilave içecekler hesaba yazılmaz. Dokunmatik ekran ve cep telefonu uyumlu adisyon programımız masaları kusursuz bir düzene sokar.",
        cards: [
          {
            index: "01",
            icon: "Smartphone",
            title: "Garson Mobil Sipariş",
            text: "Garson masanın başından ayrılmadan cep telefonundan siparişi tıklar, mutfağa anında gider.",
            actionText: "Mobil garson ekranını görün",
          },
          {
            index: "02",
            icon: "Receipt",
            title: "Masa Birleştirme & Bölme",
            text: "Grup masalarında 'ben sadece kahvemi ödeyeceğim' diyen müşteriye saniyede parçalı hesap kesme.",
            actionText: "Hesap bölme özelliğini görün",
          },
          {
            index: "03",
            icon: "ShieldCheck",
            title: "Gün Sonu Kasa Raporu",
            text: "Kasada ne kadar nakit, ne kadar pos çekimi var; dükkan sahibine tek tuşla döküm verir.",
            actionText: "Kasa raporunu inceleyin",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Masalarda Canlı Kroki",
          heading:
            "Hangi masa kaç saattir oturuyor, ne kadar hesap birikti tek ekranda.",
          text: "Dükkandaki tüm masaların doluluk durumunu, bekleyen siparişlerini ve toplam tutarını renkli masa krokisi üzerinden anlık olarak izleyin.",
          icon: "LayoutGrid",
        },
        block2: {
          tag: "02 · Garson Cepten Girer, Mutfak Yazar",
          heading: "Garson masadan tıklar, mutfak yazıcısı anında fişi keser.",
          text: "Garsonun mutfağa koşup '3 lahmacun biri acısız' diye bağırmasına gerek kalmaz. Sipariş notları mutfak fişine net ve büyük harflerle dökülür.",
          icon: "Smartphone",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading: "Taha Usta — Akşam Yoğunluğunda Sıfır Hata & Net Kasa",
          text: "Kağıt adisyonlar çöpe atıldı; gelen çağrılar ve masalar tek ekrana bağlanarak mutfaktaki sipariş hataları tamamen sıfırlandı.",
          metricBadge: "Yüzde 0 Sipariş Hatası ve Kaçak",
          icon: "Receipt",
        },
      },
      deliverablesHeader: {
        eyebrow: "Adisyon & Kasa Donanımı",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Dükkanınızdaki hesap kaçaklarını bitirmek ve mutfak trafiğini hızlandırmak için tam entegre sistem.",
      },
      pillars: [
        {
          icon: "Receipt",
          title: "Dokunmatik Kasa & Garson Yazılımı",
          desc: "Kasadaki dokunmatik ekrandan veya garsonların telefonundan çalışan hızlı adisyon.",
        },
        {
          icon: "Printer",
          title: "Mutfak & Bar Yazıcı Entegrasyonu",
          desc: "İçecekleri bara, yemekleri mutfağa ayrı ayrı otomatik yönlendiren akıllı fiş yönlendirici.",
        },
        {
          icon: "Sliders",
          title: "Masa Krokisi & Taşıma",
          desc: "Dükkanınızın masa yerleşimine göre özel çizilen renkli masa takip ekranı.",
        },
        {
          icon: "ShieldCheck",
          title: "Z-Raporu & Kasa Takibi",
          desc: "Gün sonunda kasadaki nakit ve kartı net gösteren, personele kaçak imkanı bırakmayan kasa modülü.",
        },
        {
          icon: "Zap",
          title: "Yerel Ağda Kesintisiz Çalışma",
          desc: "İnternet kesildiğinde bile dükkan içinde fiş basmaya ve sipariş almaya devam eden altyapı.",
        },
        {
          icon: "Headset",
          title: "Bursa İçi Masada Birebir Eğitim",
          desc: "Dükkanınıza gelip tüm personelinize ve kasiyerinize sistemi masasında yüz yüze öğretiyoruz.",
        },
      ],
      faq: [
        {
          q: "Pahalı dokunmatik bilgisayarlar almak zorunda mıyız?",
          a: "Hayır. Sistem dükkanınızda mevcut olan herhangi bir bilgisayarda, tablette veya personelin cep telefonlarında sorunsuz çalışır.",
        },
      ],
      relatedSlugs: ["komisyonsuz-paket-servis", "qr-kodlu-menu"],
    },
    "otomatik-randevu-sistemi": {
      categoryTag: "İşletme Otomasyonu",
      title: "Otomatik Randevu Sistemi",
      leadText:
        "Randevu defteri tutma karmaşasını bitiren, müşterilerinizin 7/24 boş saatleri görüp telefonundan anında randevu aldığı ve otomatik WhatsApp hatırlatması atan sistem.",
      features8: [
        {
          icon: "CalendarCheck",
          serifTitle: "7/24 Kendi Kendine Randevu",
          copy: "Gece saatlerinde bile müşterilerinizin boş saatleri görüp anında randevusunu oluşturması.",
        },
        {
          icon: "BellRing",
          serifTitle: "Otomatik WhatsApp Hatırlatması",
          copy: "Randevudan 2 saat önce müşteriye otomatik giden hatırlatma mesajıyla 'unuttum' bahanesine son.",
        },
        {
          icon: "Timer",
          serifTitle: "Sıfır Telefon Trafiği",
          copy: "Sürekli çalan randevu telefonları yerine işinize ve hastalarınıza odaklanma rahatlığı.",
        },
      ],
      features11: {
        headlineMain: "Randevu almak isteyen müşteri",
        headlineItalic: "meşgul çalan telefonlarda",
        headlineEnd: "beklememeli.",
        leadParagraph:
          "Diş hekimleri, güzellik merkezleri ve kuaförler gün boyu randevu telefonu yanıtlamaktan asıl işine odaklanamaz. Akıllı randevu sistemimiz tüm süreci 7/24 otomatik yönetir.",
        cards: [
          {
            index: "01",
            icon: "CalendarCheck",
            title: "Canlı Takvim Ekranı",
            text: "Müşteri müsait uzmanı ve boş saati seçer, tek tıkla onaylar.",
            actionText: "Randevu akışını görün",
          },
          {
            index: "02",
            icon: "MessageSquare",
            title: "WhatsApp & SMS Teyidi",
            text: "Randevu saati onaylandığı an hem müşteriye hem de işletmeye otomatik bilgi gider.",
            actionText: "Mesaj şablonlarını görün",
          },
          {
            index: "03",
            icon: "CircleDollarSign",
            title: "İsteğe Bağlı Kapora Sistemi",
            text: "Randevusuna gelmeyen müşterilerin oluşturduğu kaybı önlemek için ön ödeme alma esnekliği.",
            actionText: "Kapora modülünü görün",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Çalan Telefonlar Sussun",
          heading:
            "Siz hastanızla veya müşterinizle ilgilenirken randevular kendi kendine dolsun.",
          text: "Müşterileriniz akşam 10'da veya pazar günü bile sitenizden randevu oluşturabilir. Kaçan randevuların ve meşgul çalan telefonların yerini tam bir düzen alır.",
          icon: "PhoneOff",
        },
        block2: {
          tag: "02 · Uzman Takvim Senkronu",
          heading:
            "Hangi uzmanın hangi saatte dolu olduğunu tek ekrandan yönetin.",
          text: "Kliniğinizdeki veya salonunuzdaki tüm personelin randevu takvimini tek ekrandan yönetebilir, çakışmaları sıfırlayabilirsiniz.",
          icon: "CalendarCheck",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading: "Özel Diş Kliniği — Ayda 160+ Otomatik Randevu",
          text: "Telefon trafiği yüzde 70 azaldı; mesai saatleri dışında web sitesi üzerinden alınan otomatik randevularla aylık doluluk oranı yüzde 95'e ulaştı.",
          metricBadge: "Ayda 160+ Otomatik Randevu",
          icon: "Award",
        },
      },
      deliverablesHeader: {
        eyebrow: "Randevu Altyapısı",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Günün her saati kendi kendine çalışan, müşteriye otomatik hatırlatma atan güvenli randevu yazılımı.",
      },
      pillars: [
        {
          icon: "CalendarCheck",
          title: "Mobil Randevu Formu",
          desc: "Müşterinin uygulama indirmeden saniyeler içinde gün ve saat seçebileceği temiz ekran.",
        },
        {
          icon: "BellRing",
          title: "WhatsApp & SMS Hatırlatma",
          desc: "Randevu saatinden önce müşteriye otomatik giden randevu saati bildirimi.",
        },
        {
          icon: "Sliders",
          title: "Çalışma Saatleri & Mola Ayarı",
          desc: "Öğle molalarını, izin günlerini ve özel çalışma saatlerini tek tıkla kurgulama.",
        },
        {
          icon: "CreditCard",
          title: "Kapora ve Ön Ödeme Modülü",
          desc: "Gelmemezlikleri önlemek için randevu anında kredi kartıyla kapora alma imkanı.",
        },
        {
          icon: "Database",
          title: "Müşteri Randevu Geçmişi",
          desc: "Hangi hastanın veya müşterinin ne zaman geldiğini gösteren dijital müşteri kartı.",
        },
        {
          icon: "Headset",
          title: "Kesintisiz Kurulum & Destek",
          desc: "Sistemin işletmenize göre ayarlanması ve personelinize kullanım eğitimi.",
        },
      ],
      faq: [
        {
          q: "Müşteriler randevu almak için bir mobil uygulama indirmek zorunda mı?",
          a: "Hayır. Sistem doğrudan web siteniz üzerinden tarayıcıda çalışır. Müşteri hiçbir şey indirmeden 15 saniyede randevusunu alır.",
        },
      ],
      relatedSlugs: ["yapay-zeka-musteri-asistani", "kurumsal-web-siteleri"],
    },
    "is-evrak-takip-programi": {
      categoryTag: "İşletme Yazılımı",
      title: "İşletmelere Özel Yazılım & İş Takip Programı",
      leadText:
        "Excel tablolarından ve kağıt karmaşasından kurtulun. İşletmenizin sipariş, üretim ve müşteri süreçlerini tek ekrandan yöneten sahada çalışan özel yazılımlar.",
      features8: [
        {
          icon: "Workflow",
          serifTitle: "Sıfır Excel Karmaşası",
          copy: "Farklı bilgisayarlarda kaybolan dosyalar yerine tüm işletmenin tek bir canlı ekrandan yönetilmesi.",
        },
        {
          icon: "Timer",
          serifTitle: "Geciken İş Kalmaz",
          copy: "Hangi personelde hangi işin ne kadar süredir beklediğini gösteren şeffaf teslimat takibi.",
        },
        {
          icon: "FileText",
          serifTitle: "Aradığınız Evrak Saniyede Önünüzde",
          copy: "Klasörler dolusu evrak aramak yerine müşteri adına tıklandığı an tüm geçmişin dökülmesi.",
        },
      ],
      features11: {
        headlineMain: "Şirketinizin operasyonu",
        headlineItalic: "kontrolsüz Excel tablolarında",
        headlineEnd: "kaybolmamalı.",
        leadParagraph:
          "İşletmeniz büyüdükçe kimin ne yaptığı, hangi işin teslim edildiği unutulur. Piyasada satılan hazır kalıp programlar ise sizin iş akışınıza uymaz. Tam olarak şirketinizin alışkanlıklarına göre çalışan özel yazılımlar kuruyoruz.",
        cards: [
          {
            index: "01",
            icon: "Workflow",
            title: "Tam Size Özel Tasarım",
            text: "Kullanmayacağınız gereksiz butonlar yok; sadece sizin işinizi çözen yalın ekranlar.",
            actionText: "Ekran yapısını görün",
          },
          {
            index: "02",
            icon: "Smartphone",
            title: "Sahadan Cepten Kontrol",
            text: "Ustalar veya servis personeli sahadan fotoğraf yükleyip işi tek dokunuşla 'tamamlandı' yapar.",
            actionText: "Mobil kullanımı inceleyin",
          },
          {
            index: "03",
            icon: "ShieldCheck",
            title: "Yetki ve Güvenlik Sınırı",
            text: "Çalışan sadece kendi işini görür; kasa, maliyet ve kâr gibi kritik alanlar sadece patrona açıktır.",
            actionText: "Yetkilendirme detayını görün",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Tek Ekranda Tam Kontrol",
          heading:
            "Bugün dükkanda veya fabrikada hangi işler var, anında görün.",
          text: "Ofise girdiğinizde personelin tek tek peşinde koşmazsınız. Ekrana baktığınız anda bekleyen, tamamlanan ve geciken tüm işler önünüzde listelenir.",
          icon: "Workflow",
        },
        block2: {
          tag: "02 · Dijital Müşteri Kartı",
          heading:
            "Bir müşteri aradığında tüm geçmişi 2 saniyede önünüze gelsin.",
          text: "Müşterinin telefonunu girdiğiniz an daha önce hangi işlerin yapıldığı, ne kadar ücret alındığı ve hangi evrakların imzalandığı tek sayfada açılır.",
          icon: "FileText",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading: "Nilüfer Mühendislik — 12 Personelli Ofiste Sıfır İş Kaybı",
          text: "Masaüstü Excel tabloları yerine ortak takip paneline geçildi; projelerin teslim süreleri yüzde 40 hızlandı ve evrak kayıpları tamamen son buldu.",
          metricBadge: "Yüzde 40 Daha Hızlı Teslimat",
          icon: "Award",
        },
      },
      deliverablesHeader: {
        eyebrow: "Özel Yazılım Standartları",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Aylık kullanıcı başı lisans ücretleri ödemeden, doğrudan şirketinize ait bağımsız yönetim sistemi.",
      },
      pillars: [
        {
          icon: "Code2",
          title: "İşletmenize Özel Yazılım Mimarisi",
          desc: "Hazır şablon olmadan, işletmenizin tam ihtiyaçlarına göre sıfırdan kodlanan altyapı.",
        },
        {
          icon: "Smartphone",
          title: "Mobil ve Tablet Tam Uyumu",
          desc: "Saha personelinin telefonundan kolayca iş fotoğrafı ve form yükleyebileceği hızlı arayüz.",
        },
        {
          icon: "FileText",
          title: "Dijital Evrak & Sözleşme Kasası",
          desc: "Müşteri sözleşmelerinin, ruhsatların veya teknik çizimlerin kaybolmasını önleyen güvenli arşiv.",
        },
        {
          icon: "BellRing",
          title: "Otomatik Hatırlatıcılar & Bildirimler",
          desc: "Vadesi yaklaşan işler veya teslim tarihi gelen projeler için yöneticiye otomatik uyarı.",
        },
        {
          icon: "Fingerprint",
          title: "%100 Şirketinize Ait Mülkiyet",
          desc: "Kullanıcı başına her ay kira ödemezsiniz; sistem kurulur ve tamamen firmanıza teslim edilir.",
        },
        {
          icon: "Headset",
          title: "Bursa İçi Yüz Yüze Kurulum & Destek",
          desc: "Ofisinize gelip sistemi personelinize masasında öğretiyor, sorularını anında yanıtlıyoruz.",
        },
      ],
      faq: [
        {
          q: "Programı kullanabilmek için özel sunucular almamız gerekir mi?",
          a: "Hayır. Güvenli bulut altyapısı sayesinde herhangi bir bilgisayardan, tabletten veya telefondan internet tarayıcısıyla anında giriş yapabilirsiniz.",
        },
        {
          q: "İleride işletmemiz büyüdüğünde yeni özellikler eklenebilir mi?",
          a: "Evet. Yazılımı sıfırdan şirketinize özel geliştirdiğimiz için yarın yeni bir departman veya özel bir raporlama ihtiyacı doğduğunda sistemi kolayca genişletebiliriz.",
        },
      ],
      relatedSlugs: [
        "barkod-stok-takip-sistemi",
        "toptan-bayi-siparis-sistemi",
      ],
    },
    "sosyal-medya-yonetimi": {
      categoryTag: "Büyüme & Reklam",
      title: "Bursa Sosyal Medya Yönetimi & Reklam Ajansı",
      leadText:
        "Boş takipçi değil, kasaya para bırakan müşteri kazandırıyoruz. Instagram ve Google reklamlarıyla işletmenize her gün yeni müşteri ve telefon araması getirin.",
      features8: [
        {
          icon: "Share2",
          serifTitle: "Güven Veren Canlı Vitrin",
          copy: "Profilinize giren müşterinin 'burası işini çok iyi yapıyor' dediği kaliteli ve düzenli paylaşımlar.",
        },
        {
          icon: "Video",
          serifTitle: "İzleten Reels Videoları",
          copy: "Sıradan stok görüntüler değil; işletmenizi, ustanızı ve ürünlerinizi öne çıkaran net videolar.",
        },
        {
          icon: "MessageCircle",
          serifTitle: "Gelen Mesajı Satışa Çevirme",
          copy: "Yorum ve mesaj atan potansiyel müşterileri bekletmeden dükkanınıza yönlendiren profesyonel karşılama.",
        },
      ],
      features11: {
        headlineMain: "Terkedilmiş gibi duran bir Instagram hesabı",
        headlineItalic: "müşteride güvensizlik yaratır,",
        headlineEnd: "canlı görünmeli.",
        leadParagraph:
          "İnsanlar artık bir dükkana gitmeden veya bir ustayı aramadan önce Instagram sayfasına bakıyor. Kalitesiz fotoğraflar ve haftalarca paylaşım yapılmayan sayfalar müşteriyi kaçırır. Markanızın değerine yakışan, her gün güven aşılayan bir vitrin kuruyoruz.",
        cards: [
          {
            index: "01",
            icon: "Share2",
            title: "Aylık Planlı Paylaşım",
            text: "'Bugün ne paylaşsak' derdi biter; ay başında hazırlanan onaylı takvimle düzenli yayın yapılır.",
            actionText: "İçerik planını görün",
          },
          {
            index: "02",
            icon: "Video",
            title: "Sektöre Özel Reels Kurguları",
            text: "Algoritmanın sevdiği, bölgenizdeki hedef kitlenin karşısına düşen dinamik kısa videolar.",
            actionText: "Video stratejisini inceleyin",
          },
          {
            index: "03",
            icon: "Target",
            title: "Mesaj Getiren Reklam Desteği",
            text: "Boş beğeni toplamak yerine doğrudan WhatsApp'ınıza 'fiyat alabilir miyim' dedirten reklamlar.",
            actionText: "Reklam modelini görün",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Kurumsal Prestij",
          heading: "Dükkanınızın kalitesini ekranlara eksiksiz yansıtın.",
          text: "Piyasadaki amatör canva şablonlarıyla hazırlanan sayfalar markanızı ucuz gösterir. Özel tipografi ve renk düzenlemeleriyle sektörünüzde en güvenilir kurum olarak konumlanırsınız.",
          icon: "Share2",
        },
        block2: {
          tag: "02 · Sıfır Zaman Kaybı",
          heading: "Siz işinize bakın, sosyal medyanızı uzman ekip yürütsün.",
          text: "Görsel tasarımı, metin yazarlığı, video montajı ve etiket planlaması... Tüm operasyonu üstleniyoruz; siz sadece dükkanınıza gelen yeni müşterilerle ilgilenirsiniz.",
          icon: "Video",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading: "Bursa Estetik & Klinik — Ayda 120+ Doğrudan Randevu Talebi",
          text: "Düzenli vaka paylaşımları ve yerel hedeflemeli Reels videolarıyla profil ziyaretçilerinin doğrudan WhatsApp hattına akması sağlandı.",
          metricBadge: "Ayda 120+ Nitelikli Müşteri Mesajı",
          icon: "Award",
        },
      },
      deliverablesHeader: {
        eyebrow: "Sosyal Medya Standartları",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Takipçi satın alma hileleriyle değil; gerçek, güven veren ve dükkanınıza müşteri getiren profesyonel yönetim.",
      },
      pillars: [
        {
          icon: "Share2",
          title: "Aylık Kurumsal Gönderi Tasarımları",
          desc: "Marka kimliğinize uygun renklerde hazırlanan haftalık düzenli grafik ve görsel tasarımlar.",
        },
        {
          icon: "Video",
          title: "Kısa Video & Reels Prodüksiyonu",
          desc: "İşletmenizin hizmetlerini ve işçiliğini anlatan dikkat çekici dikey video kurguları.",
        },
        {
          icon: "Sliders",
          title: "Biyografi ve Öne Çıkanlar Düzeni",
          desc: "Sayfanıza ilk giren müşterinin adres, menü ve referansları hemen bulmasını sağlayan kapaklar.",
        },
        {
          icon: "Target",
          title: "Meta Reklam Entegrasyonu",
          desc: "Paylaşılan güçlü içeriklerin bölgenizdeki potansiyel müşterilere reklam olarak sunulması.",
        },
        {
          icon: "MessageCircle",
          title: "Gelen Yorum ve Mesaj Takibi",
          desc: "Gönderilerin altına gelen soruların hızlıca karşılanması ve iletişim hattına yönlendirilmesi.",
        },
        {
          icon: "Headset",
          title: "Aylık Şeffaf İlerleme Raporu",
          desc: "Ay sonunda hangi gönderinin ne kadar kişiye ulaştığını ve kaç müşteri kazandırdığını gösteren net rapor.",
        },
      ],
      faq: [
        {
          q: "Sayfamıza bot veya sahte takipçi atıyor musunuz?",
          a: "Kesinlikle hayır. Sahte takipçiler sayfanızın etkileşimini öldürür ve Google/Instagram algoritmalarında hesabınızı cezalandırır. Sadece gerçek ve dükkanınızdan hizmet alma potansiyeli olan yerel kitleye odaklanıyoruz.",
        },
        {
          q: "Fotoğraf ve videoları kim çekecek?",
          a: "Bursa içi işletmelerde profesyonel ekipmanlarımızla yerinde çekim yapabiliyoruz ya da tarafınızdan çekilen ham görüntüleri profesyonel montaj ve renklendirmeden geçirerek yayına hazırlıyoruz.",
        },
      ],
      relatedSlugs: [
        "meta-instagram-facebook-reklamlari",
        "urun-dukkan-fotograf-cekimi",
      ],
    },
    "google-haritalar-1-sira": {
      categoryTag: "Büyüme & Reklam",
      title: "Google Haritalar İlk Sıra",
      leadText:
        "Bölgenizde hizmetinizi arayan müşterilerin karşısına Google Haritalar'da ilk 3'te çıkıp dükkanınıza doğrudan telefon ve yol tarifi akıtma çalışması.",
      features8: [
        {
          icon: "MapPin",
          serifTitle: "Haritada İlk 3 Sıra",
          copy: "Bursa'da yakındaki işletmeleri arayan müşterilerin ilk gördüğü 3 dükkandan biri olma.",
        },
        {
          icon: "PhoneCall",
          serifTitle: "Doğrudan Yol Tarifi & Arama",
          copy: "Müşterinin aracı sitelere girmeden doğrudan dükkanınızı araması veya dükkanınıza gelmesi.",
        },
        {
          icon: "Star",
          serifTitle: "Yüksek Güven & Prestij",
          copy: "Pırıl pırıl 5 yıldızlı yorumlar ve doğrulanmış işletme profiliyle rakipleri geride bırakma.",
        },
      ],
      features11: {
        headlineMain: "Bölgenizde arama yapan müşteri",
        headlineItalic: "rakiplerin dükkanına gitmemeli,",
        headlineEnd: "haritada sizi görmeli.",
        leadParagraph:
          "İnsanlar artık 'en yakın dönerci', 'diş hekimi', 'oto çekici' veya 'kuaför' aramasını Google Haritalar'dan yapıyor. İlk 3 sırada yoksanız, o ciro doğrudan rakiplerinize akıyor demektir.",
        cards: [
          {
            index: "01",
            icon: "MapPin",
            title: "Konum Algoritması Uyumu",
            text: "Google botlarının dükkanınızı tam olarak aranan sektörle eşleştirmesi için teknik sinyaller.",
            actionText: "Harita optimizasyonunu görün",
          },
          {
            index: "02",
            icon: "Star",
            title: "5 Yıldızlı Yorum Standı",
            text: "Memnun müşterilerinizin saniyeler içinde 5 yıldız vermesini sağlayan temassız NFC/QR standlar.",
            actionText: "Yorum mekanizmasını görün",
          },
          {
            index: "03",
            icon: "PhoneCall",
            title: "Arama Yarıçapını Genişletme",
            text: "Sadece bulunduğunuz sokağa değil, tüm çevre ilçelere haritanızın görünürlüğünü yayma.",
            actionText: "Görünürlük haritasını inceleyin",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Yerel Arama Hakimiyeti",
          heading:
            "Bölgenizde Google'ı açan herkes ilk sırada dükkanınızın pinini görsün.",
          text: "İşletmenizin fotoğraflarını, kategorilerini ve adres sinyallerini haritanıza işliyoruz. Google aramalarında telefon çaldıran o prestijli ilk 3'lü harita paketine dükkanınızı yerleştiriyoruz.",
          icon: "MapPin",
        },
        block2: {
          tag: "02 · 5 Yıldızlı Temassız Stand",
          heading:
            "Kasaya koyacağınız tek bir dokunuşla müşteriden 5 yıldız toplayın.",
          text: "Müşterinin dükkana girmeden önce baktığı tek şey puanınızdır. Temassız NFC standlarımızla memnun ayrılan her müşterinizden saniyede 5 yıldız topluyoruz.",
          icon: "Star",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading:
            "Alya Davet — 3.9'dan 4.5 Yıldıza Sıçrayış & 3 Kat Rezervasyon",
          text: "Haksız kötü yorumlar temizlendi, gerçek cemiyet sahiplerinden toplanan 5 yıldızlarla harita puanı 4.5'e çıktı ve salon randevuları 3 katına katlandı.",
          metricBadge: "Google Haritalarda 4.5 Yıldız İtibarı",
          icon: "Award",
        },
      },
      deliverablesHeader: {
        eyebrow: "Yerel SEO & Haritalar",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Rakipleri geride bırakıp bölgenizdeki telefon aramalarını doğrudan dükkanınıza yönlendiren yerel çalışma.",
      },
      pillars: [
        {
          icon: "MapPin",
          title: "Google İşletme Profili İnce Ayarı",
          desc: "Kategorilerin, ürünlerin ve anahtar kelimelerin algoritmaya tam uyumlu yapılandırılması.",
        },
        {
          icon: "Camera",
          title: "Konum Etiketli 4K Dükkan Fotoğrafları",
          desc: "Fotoğrafların içine GPS koordinatları işlenerek harita sinyallerinin güçlendirilmesi.",
        },
        {
          icon: "Star",
          title: "Temassız QR/NFC Yorum Kartı",
          desc: "Masalarınıza veya kasanıza özel, müşterinin telefonunu dokundurup 5 yıldız bıraktığı stand.",
        },
        {
          icon: "ShieldCheck",
          title: "Asılsız Yorum Temizleme Başvurusu",
          desc: "Rakiplerden veya sahte hesaplardan gelen haksız yorumlara resmi teknik itirazlar yapma.",
        },
        {
          icon: "PhoneCall",
          title: "Doğrudan Çağrı & Yol Tarifi Takibi",
          desc: "Haritanızdan kaç kişinin yol tarifi aldığını ve aradığını gösteren aylık net rapor.",
        },
        {
          icon: "Headset",
          title: "Bursa İçi Yerinde Ziyaretle Başlangıç",
          desc: "Dükkanınıza gelip dükkanın çevresini inceliyor, süreci masanızda yüz yüze başlatıyoruz.",
        },
      ],
      faq: [
        {
          q: "Google Haritalar'da ilk 3 sıraya çıkmak ne kadar sürer?",
          a: "Profil optimizasyonu ve konum etiketli fotoğraflar yüklendikten sonra ortalama 2 ila 4 hafta içinde bölgenizdeki arama görünürlüğünde gözle görülür bir sıçrama başlar.",
        },
      ],
      relatedSlugs: ["google-reklamlari", "kurumsal-web-siteleri"],
    },
    "ozel-logo-tasarimi": {
      categoryTag: "Marka & Tasarım",
      title: "Bursa Logo Tasarımı & Kurumsal Kimlik Tasarımı",
      leadText:
        "Hazır şablonlar değil, markanızı büyüten %100 özgün tasarımlar. Tabeladan dijitale tüm mecralara uygun vektörel logo, kurumsal kimlik ve marka tasarımı.",
      features8: [
        {
          icon: "PenTool",
          serifTitle: "%100 Özgün Vektörel Çizim",
          copy: "İnternetten kopyalanmış hazır ikonlar değil, dükkanınıza özel sıfırdan çizilmiş tescile uygun logo.",
        },
        {
          icon: "Ruler",
          serifTitle: "Tabelada ve Dijitalde Keskin",
          copy: "Büyütüldüğünde bozulmayan, tabelacıya veya ekrana verildiğinde pürüzsüz duran vektörel formatlar.",
        },
        {
          icon: "Award",
          serifTitle: "Eksiksiz Dosya Teslimi",
          copy: "Tüm renk alternatifleri, fontları ve vektörel kaynak dosyalarıyla (AI, PDF, SVG) doğrudan mülkiyet.",
        },
      ],
      features11: {
        headlineMain: "Markanızı temsil eden logonuz",
        headlineItalic: "hazır şablonlarla amatör durmamalı,",
        headlineEnd: "güven aşılamalı.",
        leadParagraph:
          "Müşterinin dükkanınızı veya firmanızı gördüğünde ilk baktığı yer logonuzdur. Hazır ikonlar işletmenizi sıradan gösterir. Tabelanızda, sosyal medyanızda ve faturalarınızda markanıza ağırlık katan özgün tasarımlar hazırlıyoruz.",
        cards: [
          {
            index: "01",
            icon: "PenTool",
            title: "Sıfırdan Özgün Çizim",
            text: "Markanızın sektörüne ve ruhuna uygun, başka hiçbir yerde olmayan tamamen size özel fikirler.",
            actionText: "Çizim sürecini inceleyin",
          },
          {
            index: "02",
            icon: "Ruler",
            title: "Tabelacıya Hazır Format",
            text: "Ustanın doğrudan makineye atıp kesebileceği ölçülü ve pürüzsüz vektörel teknik teslimat.",
            actionText: "Teknik formatları görün",
          },
          {
            index: "03",
            icon: "Award",
            title: "Kurumsal Renk & Kimlik",
            text: "Tüm mecralarda aynı ciddiyeti koruyan renk kodları ve sosyal medya yerleşim kılavuzu.",
            actionText: "Kimlik kılavuzunu görün",
          },
        ],
      },
      zigzagShowcase: {
        block1: {
          tag: "01 · Özgün Marka İmzası",
          heading:
            "Kopyala-yapıştır şablonları unutun, markanıza özel imza atın.",
          text: "Canva veya hazır sitelerdeki herkesin kullandığı logolar işletmenizin değerini düşürür. Nilüfer ve Osmangazi başta olmak üzere Bursa'daki markalara sahada ağırlık koyan özgün kimlikler çiziyoruz.",
          icon: "PenTool",
        },
        block2: {
          tag: "02 · Sıfır Pürüz Teknik Teslim",
          heading:
            "İster dev tabelaya büyütün, ister faturaya basın; asla bozulmaz.",
          text: "Logonuzu piksel piksel dağılan resim olarak değil; AI, PDF ve SVG vektörel kaynaklarıyla veriyoruz. Tabelacınızdan nakışçınıza kim isterse doğrudan kullanır.",
          icon: "Ruler",
        },
        block3: {
          tag: "03 · Doğrulanmış Saha Çıktısı",
          heading: "Munchico & Güven — Akılda Kalan Sokak Kimliği",
          text: "Cadde üzerinde dikkat çeken tabela yerleşimi ve ambalajlarda güven veren amblem tasarımıyla markalaşma süreci sıfırdan başarıyla tamamlandı.",
          metricBadge: "%100 Özgün & Tescile Uygun Çizim",
          icon: "Award",
        },
      },
      deliverablesHeader: {
        eyebrow: "Tasarım Standartları",
        heading: "İşletmenize sağlanan somut çıktılar",
        lead: "Baskı hamallığıyla vakit kaybetmeden; matbaanıza, tabelacınıza ve dijital ajansınıza doğrudan teslim edeceğiniz eksiksiz grafik paketi.",
      },
      pillars: [
        {
          icon: "PenTool",
          title: "Vektörel Çizim Dosyaları (AI, PDF, SVG)",
          desc: "İstediğiniz boyuta büyüttüğünüzde bozulmayan, tüm sektör standartlarında kaynak dosyalar.",
        },
        {
          icon: "Layers",
          title: "Açık ve Koyu Zemin Varyasyonları",
          desc: "Siyah, beyaz ve şeffaf zeminlerde net görünen farklı renk alternatifleri.",
        },
        {
          icon: "Sliders",
          title: "Renk Kodları & Tipografi",
          desc: "Markanızın dijitalde ve fizikselde kullanacağı kesin renk (HEX, CMYK) ve font kuralları.",
        },
        {
          icon: "Share2",
          title: "Sosyal Medya Profil Paketleri",
          desc: "Instagram, WhatsApp ve LinkedIn profil yuvarlaklarına tam oturan hazır simgeler.",
        },
        {
          icon: "Building2",
          title: "Tabela & Dış Cephe Çizimleri",
          desc: "Işıklı kutu harf ve pleksi tabelacılara doğrudan verilecek ölçülü kılavuz.",
        },
        {
          icon: "Fingerprint",
          title: "%100 Marka Mülkiyeti",
          desc: "Tasarlanan tüm logoların telif ve kullanım hakları tamamen şirketinize devredilir.",
        },
      ],
      faq: [
        {
          q: "Baskı veya tabela üretimini de yapıyor musunuz?",
          a: "Biz baskı veya tabela imalatçısı değiliz; işin en kritik kısmı olan tasarımı yapıyoruz. Tabelacınıza veya matbaanıza doğrudan verebileceğiniz 1/1 ölçülü, hatasız vektörel dosyaları teslim ediyoruz.",
        },
        {
          q: "Logoyu ileride marka tescili için Türk Patent'e verebilir miyiz?",
          a: "Evet. Tasarımlarımız hazır şablon içermeyen %100 özgün vektörel çizimler olduğu için marka tescil başvurularına tamamen uygundur.",
        },
      ],
      relatedSlugs: ["tabela-cephe-giydirme-tasarimi", "kurumsal-web-siteleri"],
    },
  },
  en: {},
};

export function getServiceDetailData(slug, lang = "tr") {
  const currentLang = lang === "en" ? "en" : "tr";
  const isTr = currentLang === "tr";
  const groups = servicesData[currentLang] || servicesData.tr;

  let matchedService = null;
  let matchedDept = null;

  for (const dept of groups) {
    const s = dept.services.find((item) => item.slug === slug);
    if (s) {
      matchedService = s;
      matchedDept = dept;
      break;
    }
  }

  if (!matchedService) return null;

  // Hazırladığın Özgün .webp Görselleri
  const serviceImageUrl =
    serviceHeroStockMap[slug] ||
    `${basePath}/services/custom_corporate_website.webp`;

  const defaultIcons = servicePillarIconsMap[slug] || [
    "Zap",
    "Workflow",
    "ShieldCheck",
  ];
  const richData = richServiceProfiles[currentLang]?.[slug];

  if (richData) {
    return {
      slug: matchedService.slug,
      departmentTitle: matchedDept.categoryTitle,
      name: matchedService.name,
      kpi: matchedService.kpi,
      sectors: matchedService.sectors || [],
      imageUrl: serviceImageUrl,
      ...richData,
    };
  }

  const fallbackPillars = [
    {
      icon: "Code2",
      title: isTr ? "Özel ve Hafif Mimari" : "Bespoke Clean Architecture",
      desc: isTr
        ? `${matchedService.name} için sıfırdan hazırlanan, hazır şablon barındırmayan hafif altyapı.`
        : `Turnkey architecture engineered specifically for ${matchedService.name}.`,
    },
    {
      icon: "Gauge",
      title: isTr ? "Anında Açılan Hız" : "Zero Latency Standard",
      desc: isTr
        ? "Tüm telefon ve bilgisayarlarda anında açılan ve kasmayan modern performans altyapısı."
        : "Fast responsive execution across all desktop and mobile viewports.",
    },
    {
      icon: "FileCode2",
      title: isTr ? "Google Kurumsal Şeması" : "Semantic Schema Graph",
      desc: isTr
        ? "Arama motorlarının işletmenizi eksiksiz tanımasını sağlayan teknik şifreleme."
        : "Structured data graph ensuring search engines index your corporate entities with precision.",
    },
    {
      icon: "ShieldAlert",
      title: isTr ? "Kurumsal Güvenlik & SSL" : "Enterprise Security",
      desc: isTr
        ? "Siber saldırılara karşı güvenlik duvarı ve şifrelenmiş veri akışı garantisi."
        : "Hardened security policies with automated encryption.",
    },
    {
      icon: "Sliders",
      title: isTr ? "Sade Yönetim Paneli" : "Intuitive Backoffice",
      desc: isTr
        ? "Kod bilmenize gerek kalmadan içeriklerinizi dilediğiniz an güncelleyebileceğiniz sade panel."
        : "Lightweight dashboard allowing non-technical personnel to update projects in seconds.",
    },
    {
      icon: "Fingerprint",
      title: isTr ? "%100 Şirketinize Ait Mülkiyet" : "100% IP Ownership",
      desc: isTr
        ? "Ajansa bağımlı kalmadan tüm kaynak kodları ve kontrol doğrudan şirketinize teslim edilir."
        : "Zero vendor lock-ins with complete corporate asset ownership.",
    },
  ];

  return {
    slug: matchedService.slug,
    departmentTitle: matchedDept.categoryTitle,
    categoryTag: matchedDept.categoryTitle,
    name: matchedService.name,
    title: matchedService.name,
    kpi: matchedService.kpi,
    sectors: matchedService.sectors || [],
    imageUrl: serviceImageUrl,
    leadText: isTr
      ? `${matchedService.outcome} ${matchedService.target}`
      : `${matchedService.outcome} ${matchedService.target}`,
    features8: [
      {
        icon: defaultIcons[0] || "Target",
        serifTitle: isTr
          ? `${matchedService.kpi} Standardı`
          : `${matchedService.kpi} Benchmark`,
        copy: isTr
          ? "İşletmenizin satışlarını ve kâr marjını artıran taahhütlü teknik çıktı."
          : "Delivery benchmark engineered to accelerate operational turnover.",
      },
      {
        icon: defaultIcons[1] || "Zap",
        serifTitle: isTr ? "Anında Açılan Hız" : "Zero-Latency SLA",
        copy: isTr
          ? "Tüm cihazlarda anında açılan ve takılmayan modern kod altyapısı."
          : "Fast execution across all desktop and mobile viewports.",
      },
      {
        icon: defaultIcons[2] || "ShieldCheck",
        serifTitle: isTr
          ? "%100 Şirketinize Ait Mülkiyet"
          : "100% IP Ownership",
        copy: isTr
          ? "Hiçbir ajansa bağımlı olmadan tüm kaynak kodları ve kontrolü şirketinize ait sistem."
          : "Zero vendor lock-ins with complete corporate asset ownership.",
      },
    ],
    features11: {
      headlineMain: isTr ? `${matchedService.name}` : `${matchedService.name}`,
      headlineItalic: isTr ? "hantal ve karmaşık" : "shouldn't be complicated",
      headlineEnd: isTr ? "süreçlerle yürütülmemeli." : "or slow.",
      leadParagraph: isTr
        ? "Gereksiz karmaşıklığı ve yavaşlığı ortadan kaldırarak işletmenize doğrudan ciro ve hız kazandıran saf bir dijital akış kurduk."
        : "Eliminating digital friction to deliver high-concurrency commercial execution.",
      cards: [
        {
          index: "01",
          icon: defaultIcons[0] || "Zap",
          title: isTr ? `${matchedService.kpi} Hedefi` : "Performance SLA",
          text: isTr
            ? "Müşteri kaybını önleyen ve dönüşüm oranlarını artıran yüksek hızlı mimari."
            : "Engineered to maximize operational turnover and conversion velocity.",
          actionText: isTr ? "Kapsamı görün" : "Explore scope",
        },
        {
          index: "02",
          icon: defaultIcons[1] || "ShieldCheck",
          title: isTr ? "Sıfır Bağımlılık & Kontrol" : "Total Ownership",
          text: isTr
            ? "Tüm kontrolü ve veri mülkiyetini doğrudan şirketinize teslim eden şeffaf yapı."
            : "Complete corporate asset ownership with zero vendor lock-ins.",
          actionText: isTr ? "Mülkiyet şartları" : "See terms",
        },
        {
          index: "03",
          icon: defaultIcons[2] || "TrendingUp",
          title: isTr ? "Kesintisiz Büyüme" : "Commercial Growth",
          text: isTr
            ? "Satın almaya hazır müşterileri doğrudan kasanıza çeken odaklı mekanizma."
            : "Bespoke digital architecture converting high-intent demand.",
          actionText: isTr ? "Büyüme adımları" : "Growth engine",
        },
      ],
    },
    zigzagShowcase: {
      block1: {
        tag: isTr ? "01 · Saha Teşhisi" : "01 · Diagnosis",
        heading: isTr
          ? `${matchedService.name} sürecinde geleneksel kalıpların ötesi.`
          : `Beyond legacy workflows in ${matchedService.name}.`,
        text: isTr
          ? "Hantal ve ezber şablonlar işletmenizin müşteri dönüşümünü sınırlar. Biz her süreci ölçülebilir ciro ve sıfır gecikme hedefiyle sıfırdan kodluyoruz."
          : "Generic templates restrict operational throughput. We engineer lightweight architectures tuned for maximum conversion.",
        icon: defaultIcons[0],
      },
      block2: {
        tag: isTr ? "02 · Operasyonel Süreç" : "02 · Execution",
        heading: isTr
          ? "Kod bilmeden kolay yönetim ve tam bağımsızlık."
          : "Frictionless operational control without code.",
        text: isTr
          ? "Süreçlerinizi tek ekrandan yönetebileceğiniz, kod bilgisi gerektirmeyen, hızlı ve güvenli yönetim altyapısı."
          : "Lightweight backoffice allowing non-technical teams to manage operations in seconds.",
        icon: defaultIcons[1],
      },
      block3: {
        tag: isTr ? "03 · Doğrulanmış Çıktı" : "03 · Verified Output",
        heading: isTr
          ? "Ölçülebilir başarı ve doğrudan ciro artışı."
          : "Verifiable growth and bottom-line turnover.",
        text: isTr
          ? `İşletmeler için geliştirilen ${matchedService.name} altyapısı ile kanıtlanmış somut saha çıktısı.`
          : `Verified commercial performance engineered for forward-thinking enterprises.`,
        metricBadge: isTr
          ? `${matchedService.kpi} Başarısı`
          : `${matchedService.kpi} Verified`,
        icon: defaultIcons[2],
      },
    },
    deliverablesHeader: {
      eyebrow: isTr ? "Mühendislik Standartları" : "Engineering Standards",
      heading: isTr
        ? "İşletmenize sağlanan teknik çıktılar"
        : "Engineered technical deliverables",
      lead: isTr
        ? "Her teslimat kalemimiz ölçülebilir hız, sıfır eklenti güvenliği ve şirketinize ait bağımsız mülkiyet taahhüdüyle sunulur."
        : "Every single deliverable is codified with verifiable speed, zero plugin bloat, and full intellectual property ownership.",
    },
    pillars: fallbackPillars,
    faq: [
      {
        q: isTr
          ? `${matchedService.name} işletmemize ne kadar sürede sonuç verir?`
          : `How quickly does ${matchedService.name} deliver results?`,
        a: isTr
          ? "Altyapı devreye alındığı andan itibaren operasyonel hızınız artar; doğrudan müşteri ve sipariş akışında net bir sıçrama elde edersiniz."
          : "Operational velocity improves immediately upon deployment, driving measurable conversion gains.",
      },
    ],
    relatedSlugs: ["kurumsal-web-siteleri", "google-haritalar-1-sira"],
  };
}

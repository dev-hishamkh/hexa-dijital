import { servicesData } from "./servicesData";

const richServiceProfiles = {
  tr: {
    "kurumsal-web-siteleri": {
      categoryTag: "Web Mimarisi",
      title: "Kurumsal Web Siteleri",
      leadText:
        "Bursa sanayisi ve kurumsal markalar için 0.8 saniyede açılan, sıfır WordPress eklentisiyle Next.js üzerinden temiz kodlanmış, Google'da güven veren şirket vitrini.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
      features8: [
        {
          icon: "Gauge",
          serifTitle: "0.8 Saniye Açılış",
          copy: "Tüm cihazlarda anında yüklenen Core Web Vitals 100/100 performans standardı.",
        },
        {
          icon: "KeyRound",
          serifTitle: "Tam Kod Mülkiyeti",
          copy: "Yıllık lisans veya ajans bağımlılığı olmayan %100 şirketinize ait temiz kod tabanı.",
        },
        {
          icon: "ShieldCheck",
          serifTitle: "Sıfır Eklenti Güvenliği",
          copy: "WordPress açıkları barındırmayan, Cloudflare Enterprise korumalı siber altyapı.",
        },
      ],
      features11: {
        headlineMain: "Kurumsal bir web sitesi",
        headlineItalic: "bu kadar hantal ve karmaşık",
        headlineEnd: "olmamalı.",
        leadParagraph:
          "Piyasadaki hantal temalardan, sürekli çöken eklentilerden ve ajansa bağımlı kılan kilitli sistemlerden bıktığımız için işletmelere hafif, saf kodlu ve ciro getiren bir mühendislik kurduk.",
        cards: [
          {
            index: "01",
            icon: "Zap",
            title: "0.8s Açılış & Sıfır Kayıp",
            text: "3 saniyeden uzun süren açılışlar ziyaretçilerin yarısını kaçırır. Next.js ile sayfalarınızı anında açıyoruz.",
            actionText: "Hız standardını inceleyin",
          },
          {
            index: "02",
            icon: "ShieldCheck",
            title: "Sıfır Eklenti, %100 Mülkiyet",
            text: "Yıllık bakım veya tema yenileme ücreti yok. Kaynak kodları ve sunucu yetkileri tamamen şirketinize aittir.",
            actionText: "Mülkiyet şartlarını görün",
          },
          {
            index: "03",
            icon: "TrendingUp",
            title: "Doğrudan Ciro & İtibar",
            text: "Sadece güzel duran değil; Bursa ve Türkiye genelindeki kurumsal müşterilerden doğrudan talep toplayan UX.",
            actionText: "Dönüşüm mimarisi",
          },
        ],
      },
      orbitalHub: {
        badge: "DİJİTAL ENTEGRASYON",
        heading: "İşletmenizin tüm dijital kanalları tek merkezde bağlı.",
        description:
          "Web siteniz, WhatsApp müşteri hattınız, Google Harita puanlarınız, ödeme sistemleriniz ve reklam pikselleriniz birbirinden kopuk çalışmasın. Hexa mimarisi tüm kanallarınızı tek bir senkronize akışta birleştirir.",
        actionBtnText: "Entegrasyon Kapsamını Görün",
        nodes: [
          { icon: "MessageSquare", label: "WhatsApp" },
          { icon: "Search", label: "Google SEO" },
          { icon: "ShieldCheck", label: "SSL & Güvenlik" },
          { icon: "Gauge", label: "0.8s Hız" },
          { icon: "Database", label: "Yönetim Paneli" },
          { icon: "Share2", label: "Sosyal Medya" },
        ],
      },
      deliverablesHeader: {
        eyebrow: "Mühendislik Standartları",
        heading: "İşletmenize sağlanan teknik çıktılar",
        lead: "Her teslimat kalemimiz ölçülebilir hız, sıfır eklenti güvenliği ve şirketinize ait bağımsız mülkiyet taahhüdüyle sunulur.",
      },
      pillars: [
        {
          icon: "Code2",
          title: "Next.js Saf Mimari",
          desc: "Hiçbir hazır tema veya şablon olmadan, sıfırdan hafif kodlanan frontend.",
        },
        {
          icon: "Gauge",
          title: "Core Web Vitals 100",
          desc: "Google arama motoru hız testlerinde tüm cihazlarda yeşil tam puan skoru.",
        },
        {
          icon: "FileCode2",
          title: "JSON-LD Şemaları",
          desc: "Hizmetlerinizi arama motorlarına eksiksiz tanıtan zengin semantik veri ağı.",
        },
        {
          icon: "ShieldAlert",
          title: "Cloudflare Koruması",
          desc: "Kurumsal seviyede DDoS koruması ve uçtan uca SSL veri şifreleme katmanı.",
        },
        {
          icon: "Sliders",
          title: "Sade Yönetim Kokpiti",
          desc: "Kod bilmeden referans ve içeriklerinizi tek tıkla güncelleyebileceğiniz panel.",
        },
        {
          icon: "MailCheck",
          title: "Kurumsal E-Posta",
          desc: "Spam filtreli, kesintisiz çalışan şirket uzantılı resmi e-posta altyapısı.",
        },
        {
          icon: "Fingerprint",
          title: "%100 Kod Mülkiyeti",
          desc: "Tüm kaynak kodlar ve sunucu yetkileri doğrudan şirketinize teslim edilir.",
        },
        {
          icon: "Headset",
          title: "Canlı Destek SLA",
          desc: "Bursa Proje Masası üzerinden haftanın her günü kesintisiz teknik destek.",
        },
      ],
      caseHighlight: {
        client: "Tataroğlu İnşaat",
        badge: "BAŞARI HİKAYESİ",
        metric: "0.6s Açılış · %180 Form Artışı",
        summary:
          "Eski hantal altyapı Next.js ile sıfırdan kodlandı; açılış süresi 4.8 saniyeden 0.6 saniyeye çekilerek yerel aramalarda 1. sıraya yerleşti.",
      },
      faq: [
        {
          q: "Neden WordPress yerine Next.js ile özel yazılım tercih etmelisiniz?",
          a: "WordPress eklentileri sitenizi ağırlaştırır, sürekli güncelleme ve bakım masrafı çıkarır. Next.js ile sıfırdan yazdığımız siteler 0.8 saniyenin altında açılır, hacklenme riski barındırmaz ve arama motorlarında rakiplerinizin önüne geçer.",
        },
        {
          q: "Site yayına girdikten sonra içerikleri kendimiz güncelleyebilir miyiz?",
          a: "Elbette. Menülerinizi, yazılarınızı, projelerinizi ve iletişim bilgilerinizi teknik bilgiye ihtiyaç duymadan tek tıkla değiştirebileceğiniz son derece sade ve güvenli bir panel teslim ediyoruz.",
        },
        {
          q: "Eski sitemizi yenilerken Google sıralamalarımızı kaybeder miyiz?",
          a: "Asla. Eski sitenizdeki tüm indekslenmiş linkleri 301 kalıcı yönlendirmeyle sıfır kayıpla yeni altyapıya aktarıyoruz. Sayfa hızınız katlandığı için sıralamalarınız yükselir.",
        },
        {
          q: "Projenin teslim süresi ortalama ne kadar sürüyor?",
          a: "Kurumsal web siteleri ortalama 10 ila 14 iş günü içinde tüm testleri tamamlanmış olarak anahtar teslim yayına alınır.",
        },
      ],
      relatedSlugs: ["google-haritalar-1-sira", "ozel-tasarim-3d-siteler"],
    },
    "google-haritalar-1-sira": {
      categoryTag: "Yerel SEO & Büyüme",
      title: "Google Haritalar 1. Sıra",
      leadText:
        "Bursa genelinde hizmetinizi aratan müşterilerin karşısına haritada ilk 3 sırada çıkın; telefon araması, web ziyareti ve yol tarifi trafiğini doğrudan dükkanınıza çekin.",
      imageUrl:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=85",
      features8: [
        {
          icon: "MapPin",
          serifTitle: "İlk 3 Sıra Hakimiyeti",
          copy: "Bursa ve çevre ilçelerdeki yerel aramalarda doğrudan Google 3-Pack kutusunda yer alma garantisi.",
        },
        {
          icon: "PhoneCall",
          serifTitle: "Doğrudan Çağrı Akışı",
          copy: "Aracı platformlara komisyon ödemeden her gün dükkanınıza telefon ve yol tarifi çeken organik motor.",
        },
        {
          icon: "Star",
          serifTitle: "5 Yıldızlı Otorite",
          copy: "Temassız NFC ve QR sistemleriyle gerçek dükkan müşterilerinden toplanan güven verici puanlama.",
        },
      ],
      features11: {
        headlineMain: "Haritada görünür olmak",
        headlineItalic: "şansa veya tesadüfe",
        headlineEnd: "bırakılamaz.",
        leadParagraph:
          "Google İşletme profilini sadece açıp bırakmak yeterli değildir. Yerel arama sinyallerini, coğrafi etiketleri ve gerçek müşteri yorumlarını algoritmaya işleyerek dükkanınızı ilk 3 sıraya kilitliyoruz.",
        cards: [
          {
            index: "01",
            icon: "MapPin",
            title: "Bölgesel 3-Pack Hakimiyeti",
            text: "Nilüfer'den İnegöl'e kadar geniş bir yarıçapta arama yapan herkesin ilk 3 sırada sizi görmesi.",
            actionText: "Harita kapsamını görün",
          },
          {
            index: "02",
            icon: "PhoneCall",
            title: "Her Gün Doğrudan Çağrı",
            text: "Reklam bütçesi harcamadan, organik harita aramalarından dükkanınıza kesintisiz telefon ve yol tarifi akışı.",
            actionText: "Çağrı motoru detayı",
          },
          {
            index: "03",
            icon: "Star",
            title: "5 Yıldızlı Tescilli Otorite",
            text: "Temassız NFC masa kartları ile gerçek müşterilerinizden saniyeler içinde toplanan 5.0 puan otoritesi.",
            actionText: "NFC yorum sistemi",
          },
        ],
      },
      orbitalHub: {
        badge: "YEREL EKOSİSTEM",
        heading: "Harita profiliniz tüm arama kanallarıyla senkron.",
        description:
          "Google Arama, Haritalar, Apple Maps, Navigasyon uygulamaları ve web siteniz tek bir merkezden beslenir; müşteriniz nerede ararsa arasın dükkanınız ilk sırada görünür.",
        actionBtnText: "Yerel SEO Yol Haritası",
        nodes: [
          { icon: "MapPin", label: "Google Haritalar" },
          { icon: "PhoneCall", label: "Doğrudan Çağrı" },
          { icon: "Star", label: "NFC Yorum" },
          { icon: "Compass", label: "Navigasyon" },
          { icon: "Building2", label: "Yerel Dizinler" },
          { icon: "Search", label: "Google Arama" },
        ],
      },
      deliverablesHeader: {
        eyebrow: "Yerel SEO Çıktıları",
        heading: "İşletmenize sağlanan teknik çıktılar",
        lead: "Bursa yerel aramalarında rakipleri geride bırakıp telefonlarınızı çaldıracak tescilli harita optimizasyon kalemleri.",
      },
      pillars: [
        {
          icon: "Settings2",
          title: "Algoritmik Profil Revizyonu",
          desc: "Kategori hiyerarşisi ve arama niyetine uygun işletme fihristi kurgusu.",
        },
        {
          icon: "Compass",
          title: "Geotagged Görseller",
          desc: "Fotoğrafların meta verilerine Bursa GPS koordinatlarının işlenmesi.",
        },
        {
          icon: "Building2",
          title: "40+ Dizin Senkronu",
          desc: "Türkiye ve Bursa genelindeki tüm yerel rehberlere birebir tutarlı NAP kaydı.",
        },
        {
          icon: "Radio",
          title: "Rank Grid Genişletme",
          desc: "Harita arama görünürlük yarıçapını 5-15 km çevre ilçelere yayma stratejisi.",
        },
        {
          icon: "QrCode",
          title: "NFC / QR Yorum Kartı",
          desc: "Müşterilerin saniyeler içinde 5 yıldız vermesini sağlayan temassız donanım.",
        },
        {
          icon: "BarChart3",
          title: "Canlı Çağrı Raporu",
          desc: "Aylık gelen telefon aramalarını ve harita yol tariflerini gösteren telemetri.",
        },
        {
          icon: "ShieldCheck",
          title: "Spam & Ceza Koruması",
          desc: "Sahte yorum riskinden uzak, %100 organik ve tescilli profil güvenliği.",
        },
        {
          icon: "Headset",
          title: "Aylık Sıralama Takibi",
          desc: "İlk 3 sıra konumunun korunması için sürekli algoritma izleme desteği.",
        },
      ],
      caseHighlight: {
        client: "Alya Davet & Organizasyon",
        badge: "BAŞARI HİKAYESİ",
        metric: "Haritalarda 1. Sıra · 3 Kat Çağrı Hacmi",
        summary:
          "Nilüfer ve Osmangazi genelindeki yerel aramalarda ilk 3 harita sırasına yerleşerek doğrudan telefonla alınan rezervasyonları 3 katına çıkardı.",
      },
      faq: [
        {
          q: "Google Haritalar'da ilk 3 sıraya yükselmek ne kadar sürer?",
          a: "Sektörünüzün rekabetine göre ilk sıralama hareketleri 2-3 hafta içinde başlar; 30 ila 45 gün içinde hedeflenen anahtar kelimelerde ilk 3 dominasyonu sağlanır.",
        },
        {
          q: "Sahte yorum mu yapılıyor, profilimiz ceza alır mı?",
          a: "Asla sahte bot yorum kullanmıyoruz. Gerçek dükkan müşterilerinizin saniyeler içinde 5 yıldız bırakmasını sağlayan temassız NFC masa kartları ve QR otomasyonları kuruyoruz. %100 organiktir.",
        },
        {
          q: "Sadece dükkanımızın yakınında mı çıkarız?",
          a: "Hayır. Standart profiller sadece 500 metre civarında görünürken, uyguladığımız yerel SEO ile Nilüfer, Osmangazi, Yıldırım ve çevre sanayi bölgelerindeki aramalarda da ilk 3'e çıkarsınız.",
        },
        {
          q: "Haritada üst sıraya çıktıktan sonra kalıcı olur mu?",
          a: "Doğru inşa edilen yerel otorite ve düzenli gelen gerçek yorumlar sayesinde elde edilen ilk 3 konumu uzun aylar boyunca yerini korur.",
        },
      ],
      relatedSlugs: [
        "kurumsal-web-siteleri",
        "meta-instagram-facebook-reklamlari",
      ],
    },
    "komisyonsuz-paket-servis": {
      categoryTag: "Sipariş Sistemleri",
      title: "Komisyonsuz Paket Servis Sitesi",
      leadText:
        "Yemek platformlarına yüzde 30 komisyon ödemeden, kendi alan adınız üzerinden doğrudan dükkanınıza çalışan ve mutfak yazıcısından otomatik fiş çıkaran paket servis hattı.",
      imageUrl:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85",
      features8: [
        {
          icon: "Percent",
          serifTitle: "%0 Komisyon Kesintisi",
          copy: "Aracı platformlara yüz binlerce lira kaptırmadan tüm kârın kasanızda kalması.",
        },
        {
          icon: "Printer",
          serifTitle: "Otomatik Termal Fiş",
          copy: "Sipariş düştüğü anda mutfak ve kurye yazıcısından adisyonun otomatik basılması.",
        },
        {
          icon: "Database",
          serifTitle: "%100 Müşteri Mülkiyeti",
          copy: "Müşterilerinizin telefon ve adreslerini toplayarak bağımsız sadakat ağı kurma gücü.",
        },
      ],
      features11: {
        headlineMain: "Restoran paket servisi",
        headlineItalic: "%30 komisyonlarla eriyip",
        headlineEnd: "gitmemeli.",
        leadParagraph:
          "Yemeksepeti ve Getir'e her ay devasa komisyonlar kaptıran restoranlar için kendi alan adından doğrudan çalışan, kurye ve mutfak yazıcısına tam entegre sıfır komisyonlu sipariş motoru kurduk.",
        cards: [
          {
            index: "01",
            icon: "Percent",
            title: "%0 Komisyon, Net Kâr",
            text: "Aracı platformlara sipariş başına yüzde 30 kaptırmadan tüm gelirin doğrudan dükkanda kalması.",
            actionText: "Tasarruf hesabı yapın",
          },
          {
            index: "02",
            icon: "Printer",
            title: "Mutfak Yazıcı Otomasyonu",
            text: "Sipariş geldiğinde telefonla uğraşmadan mutfak ve kurye fişinin otomatik yazıcıdan dökülmesi.",
            actionText: "Yazıcı entegrasyonu",
          },
          {
            index: "03",
            icon: "Database",
            title: "Kendi Müşteri Veritabanınız",
            text: "Sipariş veren müşterilerin telefon numaralarını toplayıp tek tıkla WhatsApp ve SMS kampanyası yapma gücü.",
            actionText: "Müşteri paneli detayı",
          },
        ],
      },
      orbitalHub: {
        badge: "SİPARİŞ OTOMASYONU",
        heading: "Mutfaktan kuryeye tüm sipariş akışı tek merkezde.",
        description:
          "Müşteri webden sipariş verir, mutfak termal yazıcısından fiş anında çıkar, kurye paneline adres otomatik düşer ve ödeme doğrudan hesabınıza yatar.",
        actionBtnText: "Paket Servis Sistemini Görün",
        nodes: [
          { icon: "ShoppingBag", label: "Web Menü" },
          { icon: "Printer", label: "Mutfak Yazıcısı" },
          { icon: "Truck", label: "Kurye Takip" },
          { icon: "CreditCard", label: "Sanal POS" },
          { icon: "MessageSquare", label: "WhatsApp Onay" },
          { icon: "Database", label: "Müşteri Paneli" },
        ],
      },
      deliverablesHeader: {
        eyebrow: "Sipariş Altyapısı",
        heading: "İşletmenize sağlanan teknik çıktılar",
        lead: "Aracı platformlara komisyon ödemeden dükkanınızı tam bağımsız dijital sipariş merkezine dönüştüren modüller.",
      },
      pillars: [
        {
          icon: "Smartphone",
          title: "Mobil Hızlı Menü & Sepet",
          desc: "Uygulama indirmeden tek tıkla çalışan yüksek hızlı sipariş arayüzü.",
        },
        {
          icon: "Printer",
          title: "Termal Printer Eşleştirmesi",
          desc: "Sipariş geldiği anda mutfak ve kurye fişini otomatik çıkaran yazıcı entegrasyonu.",
        },
        {
          icon: "MapPin",
          title: "Bölgesel Teslimat Ücreti",
          desc: "Mahallelere göre minimum sepet tutarı ve kurye bedeli belirleme kurgusu.",
        },
        {
          icon: "CreditCard",
          title: "Online & Kapıda Tahsilat",
          desc: "Iyzico/PayTR sanal POS veya kapıda nakit/kredi kartı ödeme seçenekleri.",
        },
        {
          icon: "Tag",
          title: "Kupon & Sadakat Motoru",
          desc: "Müşterileri bağlayan indirim kodları ve kişiye özel promosyon sistemi.",
        },
        {
          icon: "Truck",
          title: "Kurye Takip Paneli",
          desc: "Hangi siparişin hangi kuryede olduğunu gösteren canlı dükkan kokpiti.",
        },
        {
          icon: "Database",
          title: "Müşteri Veritabanı",
          desc: "Telefon ve adres datasını arşivleyip SMS/WhatsApp kampanyası yapma gücü.",
        },
        {
          icon: "ShieldCheck",
          title: "Sıfır Komisyon Sözleşmesi",
          desc: "Hexa Dijital tarafından ciro üzerinden asla yüzde kesilmeyen bağımsız mülkiyet.",
        },
      ],
      caseHighlight: {
        client: "Munchico Fried Chicken",
        badge: "BAŞARI HİKAYESİ",
        metric: "%0 Komisyon · Ayda 140.000₺ Kâr Artışı",
        summary:
          "Paket müşterilerini doğrudan dükkana ait web sitesine yönlendirerek platformlara ödenen fahiş komisyonları sıfırladı; doğrudan sipariş cirosunu 4 katına çıkardı.",
      },
      faq: [
        {
          q: "Yemeksepeti ve Getir mağazalarımızı kapatmak zorunda mıyız?",
          a: "Hayır. O platformları açık tutabilir; ancak giden her paketin içine koyacağımız indirim kuponlarıyla müşterilerin sonraki siparişlerini komisyonsuz kendi sitenizden vermesini sağlarsınız.",
        },
        {
          q: "Mutfakta yeni bir cihaza veya pahalı bir ekrana gerek var mı?",
          a: "Hayır. Dükkandaki herhangi bir bilgisayar, tablet veya telefon ile çalışan küçük bir termal yazıcı sistemi çalıştırmak için yeterlidir.",
        },
        {
          q: "Aylık ciro üzerinden veya sipariş başına komisyon alıyor musunuz?",
          a: "Asla. Hexa Dijital olarak hiçbir siparişten yüzde komisyon kesmeyiz. Sistem %100 dükkanınızın mülkiyetindedir.",
        },
        {
          q: "Sipariş geldiğinde personeli nasıl uyarıyor?",
          a: "Sistem hem sesli alarm çalar hem de mutfak yazıcısından anında adisyon fişi döker; siparişin gözden kaçma ihtimali yoktur.",
        },
      ],
      relatedSlugs: ["qr-kodlu-menu", "adisyon-kasa-programi"],
    },
  },
  en: {
    "kurumsal-web-siteleri": {
      categoryTag: "Web Architecture",
      title: "Corporate Web Architecture",
      leadText:
        "Sub-second bespoke web platforms engineered with clean Next.js code, zero plugin bloat, and perfect Core Web Vitals to command undeniable commercial prestige.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
      features8: [
        {
          icon: "Gauge",
          serifTitle: "Sub-0.8s SLA",
          copy: "Instantaneous load times with locked 100/100 Core Web Vitals across all viewports.",
        },
        {
          icon: "KeyRound",
          serifTitle: "Pure IP Ownership",
          copy: "Zero proprietary platform locks or ongoing vendor subscription overhead.",
        },
        {
          icon: "ShieldCheck",
          serifTitle: "Hardened Security",
          copy: "Zero plugin vulnerabilities deployed directly on edge infrastructure.",
        },
      ],
      features11: {
        headlineMain: "Corporate digital systems",
        headlineItalic: "shouldn't be this bloated",
        headlineEnd: "or complicated.",
        leadParagraph:
          "We've experienced slow template chaos ourselves, so we engineered a sub-second, clean-code Next.js architecture that delivers verifiable commercial growth.",
        cards: [
          {
            index: "01",
            icon: "Zap",
            title: "Sub-0.8s Instant Loading",
            text: "Over 53% of mobile visitors abandon sites exceeding 3 seconds. We lock load times under 0.8s.",
            actionText: "Explore latency benchmarks",
          },
          {
            index: "02",
            icon: "ShieldCheck",
            title: "Zero Plugin Dependencies",
            text: "100% intellectual property ownership with no recurring third-party template maintenance fees.",
            actionText: "See ownership terms",
          },
          {
            index: "03",
            icon: "TrendingUp",
            title: "High-Value Inbound Funnels",
            text: "Authoritative cyber-luxury UX engineered to convert enterprise decision-makers into clients.",
            actionText: "Explore conversion architecture",
          },
        ],
      },
      orbitalHub: {
        badge: "DIGITAL INTEGRATIONS",
        heading: "Every commercial channel wired into one control hub.",
        description:
          "Your web architecture, WhatsApp pipelines, payment gateways, review platforms, and ad trackers function in complete sync.",
        actionBtnText: "Explore Integrations",
        nodes: [
          { icon: "MessageSquare", label: "WhatsApp" },
          { icon: "Search", label: "Google SEO" },
          { icon: "ShieldCheck", label: "SSL & Security" },
          { icon: "Gauge", label: "0.8s Speed" },
          { icon: "Database", label: "Backoffice" },
          { icon: "Share2", label: "Social Media" },
        ],
      },
      deliverablesHeader: {
        eyebrow: "Engineering Standards",
        heading: "Engineered technical deliverables",
        lead: "Every single deliverable is codified with verifiable speed, zero plugin bloat, and full intellectual property ownership.",
      },
      pillars: [
        {
          icon: "Code2",
          title: "Next.js Clean Code",
          desc: "Bespoke frontend without generic themes, built specifically for your enterprise.",
        },
        {
          icon: "Gauge",
          title: "Core Web Vitals 100",
          desc: "Locked 100/100 performance scores across all desktop and mobile viewports.",
        },
        {
          icon: "FileCode2",
          title: "Semantic Schema Graph",
          desc: "Deep JSON-LD structured data ensuring search engines index your corporate entities.",
        },
        {
          icon: "ShieldAlert",
          title: "Cloudflare Security",
          desc: "Enterprise DDoS firewalls, SSL automation, and strict Content Security Policies.",
        },
        {
          icon: "Sliders",
          title: "Lightweight Cockpit",
          desc: "Intuitive dashboard allowing non-technical personnel to update projects in seconds.",
        },
        {
          icon: "MailCheck",
          title: "Corporate Mail System",
          desc: "Encrypted enterprise mailboxes protected with spam and phishing firewalls.",
        },
        {
          icon: "Fingerprint",
          title: "100% IP Ownership",
          desc: "Complete source code, database access, and domain registration handed to you.",
        },
        {
          icon: "Headset",
          title: "Proactive Support SLA",
          desc: "24/7 server telemetry and dedicated engineering desk support.",
        },
      ],
      caseHighlight: {
        client: "Tataroglu Construction",
        badge: "VERIFIED CASE",
        metric: "0.6s Load · 180% Inbound Lift",
        summary:
          "Replaced legacy architecture with sub-second Next.js; slashed latency from 4.8s to 0.6s and secured top organic search positions.",
      },
      faq: [
        {
          q: "Why choose bespoke Next.js over WordPress templates?",
          a: "WordPress relies on bloated database calls and insecure plugins. Next.js delivers sub-0.8s static rendering, zero hack risk, and undeniable Google ranking favor.",
        },
        {
          q: "Can our internal team update content without coding?",
          a: "Yes. We integrate an intuitive, secure backoffice dashboard allowing non-technical staff to update projects and copy in seconds.",
        },
        {
          q: "Will we lose our existing search rankings during migration?",
          a: "No. We implement precise 301 redirection maps ensuring zero traffic drop and immediate ranking acceleration post-launch.",
        },
        {
          q: "What is the typical completion timeframe?",
          a: "Corporate web platforms are deployed within 10 to 14 business days backed by formal SLAs and milestone contracts.",
        },
      ],
      relatedSlugs: ["google-haritalar-1-sira", "ozel-tasarim-3d-siteler"],
    },
  },
};

const serviceConfigMap = {
  "tek-sayfa-tanitim-siteleri": {
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1800&q=85",
    icons: ["Target", "Zap", "PhoneCall"],
    hubNodes: [
      { icon: "Target", label: "Reklam Hedefi" },
      { icon: "PhoneCall", label: "Doğrudan Arama" },
      { icon: "MessageSquare", label: "WhatsApp" },
      { icon: "Zap", label: "0.8s Hız" },
      { icon: "CreditCard", label: "Form & Ödeme" },
      { icon: "ShieldCheck", label: "SSL Güvenlik" },
    ],
  },
  "kurumsal-web-siteleri": {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
    icons: ["Gauge", "KeyRound", "ShieldCheck"],
    hubNodes: [
      { icon: "MessageSquare", label: "WhatsApp" },
      { icon: "Search", label: "Google SEO" },
      { icon: "ShieldCheck", label: "SSL & Güvenlik" },
      { icon: "Gauge", label: "0.8s Hız" },
      { icon: "Database", label: "Yönetim Paneli" },
      { icon: "Share2", label: "Sosyal Medya" },
    ],
  },
  "qr-kodlu-menu": {
    image:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85",
    icons: ["QrCode", "UtensilsCrossed", "Zap"],
    hubNodes: [
      { icon: "QrCode", label: "Masa QR" },
      { icon: "UtensilsCrossed", label: "Canlı Menü" },
      { icon: "Smartphone", label: "Mobil Hız" },
      { icon: "Database", label: "Fiyat Paneli" },
      { icon: "Tag", label: "Alerjen Etiketi" },
      { icon: "Printer", label: "Masa Baskısı" },
    ],
  },
  "ozel-tasarim-3d-siteler": {
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85",
    icons: ["Sparkles", "Layers", "Award"],
    hubNodes: [
      { icon: "Sparkles", label: "WebGL 3D" },
      { icon: "Layers", label: "Lenis Akış" },
      { icon: "Award", label: "Ödüllü UI/UX" },
      { icon: "Gauge", label: "60-120 FPS" },
      { icon: "Palette", label: "Tipografi" },
      { icon: "ShieldCheck", label: "Edge Dağıtım" },
    ],
  },
  "e-ticaret-siteleri": {
    image:
      "https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1800&q=85",
    icons: ["ShoppingBag", "CreditCard", "Truck"],
    hubNodes: [
      { icon: "ShoppingBag", label: "Online Mağaza" },
      { icon: "CreditCard", label: "Sanal POS" },
      { icon: "Truck", label: "Kargo API" },
      { icon: "Boxes", label: "Stok Takip" },
      { icon: "Receipt", label: "E-Fatura" },
      { icon: "ShieldCheck", label: "3D Secure" },
    ],
  },
  "toptan-bayi-siparis-sistemi": {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
    icons: ["Boxes", "Building2", "Workflow"],
    hubNodes: [
      { icon: "Building2", label: "Bayi Portalı" },
      { icon: "Workflow", label: "ERP Entegre" },
      { icon: "CreditCard", label: "Cari Tahsilat" },
      { icon: "Boxes", label: "Canlı Stok" },
      { icon: "FileText", label: "Ekstreler" },
      { icon: "ShieldCheck", label: "Yetki Paneli" },
    ],
  },
  "komisyonsuz-paket-servis": {
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85",
    icons: ["Percent", "Printer", "Database"],
    hubNodes: [
      { icon: "ShoppingBag", label: "Web Menü" },
      { icon: "Printer", label: "Mutfak Yazıcısı" },
      { icon: "Truck", label: "Kurye Takip" },
      { icon: "CreditCard", label: "Sanal POS" },
      { icon: "MessageSquare", label: "WhatsApp Onay" },
      { icon: "Database", label: "Müşteri Paneli" },
    ],
  },
  "whatsapp-siparis-sistemi": {
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1800&q=85",
    icons: ["MessageSquare", "Zap", "Truck"],
    hubNodes: [
      { icon: "MessageSquare", label: "WhatsApp Hat" },
      { icon: "ShoppingBag", label: "1-Tık Sepet" },
      { icon: "MapPin", label: "Konum Alma" },
      { icon: "CreditCard", label: "Kapıda Tahsilat" },
      { icon: "Zap", label: "Anında Onay" },
      { icon: "Database", label: "Müşteri Listesi" },
    ],
  },
  "yemek-sitelerinde-satis-artirma": {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=85",
    icons: ["TrendingUp", "Award", "UtensilsCrossed"],
    hubNodes: [
      { icon: "UtensilsCrossed", label: "Menü Optimizasyonu" },
      { icon: "TrendingUp", label: "Algoritma 1. Sıra" },
      { icon: "Star", label: "Yüksek Puan" },
      { icon: "Tag", label: "Joker / İndirim" },
      { icon: "Timer", label: "Hızlı Teslimat" },
      { icon: "Award", label: "Restoran Statüsü" },
    ],
  },
  "pazar-yerlerinde-satis-artirma": {
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1800&q=85",
    icons: ["ShoppingBag", "CircleDollarSign", "TrendingUp"],
    hubNodes: [
      { icon: "ShoppingBag", label: "Trendyol / Amazon" },
      { icon: "CircleDollarSign", label: "Buybox Kazanımı" },
      { icon: "Search", label: "Ürün SEO" },
      { icon: "Star", label: "Satıcı Puanı" },
      { icon: "Target", label: "Sponsorlu Reklam" },
      { icon: "TrendingUp", label: "Ciro Katlama" },
    ],
  },
  "adisyon-kasa-programi": {
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1800&q=85",
    icons: ["Receipt", "Printer", "ShieldCheck"],
    hubNodes: [
      { icon: "Receipt", label: "Masa Yönetimi" },
      { icon: "Printer", label: "Mutfak Yazıcısı" },
      { icon: "CreditCard", label: "Kasa & Z Raporu" },
      { icon: "Smartphone", label: "Garson El Terminali" },
      { icon: "Boxes", label: "Anlık Stok" },
      { icon: "ShieldCheck", label: "Sıfır Kaçak" },
    ],
  },
  "otomatik-randevu-sistemi": {
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1800&q=85",
    icons: ["CalendarCheck", "Timer", "MessageSquare"],
    hubNodes: [
      { icon: "CalendarCheck", label: "7/24 Randevu" },
      { icon: "MessageSquare", label: "WhatsApp Onay" },
      { icon: "Timer", label: "Otomatik Hatırlatma" },
      { icon: "CreditCard", label: "Kapora Tahsilat" },
      { icon: "Building2", label: "Personel Takvimi" },
      { icon: "Search", label: "Google Takvim" },
    ],
  },
  "yapay-zeka-musteri-asistani": {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85",
    icons: ["Bot", "Cpu", "MessageSquare"],
    hubNodes: [
      { icon: "Bot", label: "Yapay Zeka" },
      { icon: "MessageSquare", label: "WhatsApp API" },
      { icon: "Zap", label: "Anında Yanıt" },
      { icon: "CircleDollarSign", label: "Satış Kapatma" },
      { icon: "CalendarCheck", label: "Randevu Alma" },
      { icon: "Headset", label: "Canlı Devir" },
    ],
  },
  "is-evrak-takip-programi": {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=85",
    icons: ["FileText", "CheckCircle2", "Workflow"],
    hubNodes: [
      { icon: "FileText", label: "Dijital Arşiv" },
      { icon: "Workflow", label: "Görev Atama" },
      { icon: "Timer", label: "Termin Takibi" },
      { icon: "BellRing", label: "Gecikme Uyarısı" },
      { icon: "Building2", label: "Saha Raporu" },
      { icon: "ShieldCheck", label: "Rol Yetkilendirme" },
    ],
  },
  "barkod-stok-takip-sistemi": {
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1800&q=85",
    icons: ["Barcode", "PackageCheck", "BellRing"],
    hubNodes: [
      { icon: "Barcode", label: "Barkod Okuyucu" },
      { icon: "PackageCheck", label: "Depo Giriş/Çıkış" },
      { icon: "BellRing", label: "Kritik Stok Alarmı" },
      { icon: "Boxes", label: "Transfer Takibi" },
      { icon: "Receipt", label: "Maliyet Hesabı" },
      { icon: "FileText", label: "Excel Aktarımı" },
    ],
  },
  "meta-instagram-facebook-reklamlari": {
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1800&q=85",
    icons: ["Target", "TrendingUp", "CircleDollarSign"],
    hubNodes: [
      { icon: "Target", label: "Mikro Hedefleme" },
      { icon: "Sparkles", label: "Video Kreatifler" },
      { icon: "MessageSquare", label: "WhatsApp Reklamı" },
      { icon: "TrendingUp", label: "Yüksek ROAS" },
      { icon: "CircleDollarSign", label: "Doğrudan Satış" },
      { icon: "BarChart3", label: "Canlı Raporlama" },
    ],
  },
  "sosyal-medya-yonetimi": {
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1800&q=85",
    icons: ["Palette", "Sparkles", "Award"],
    hubNodes: [
      { icon: "Palette", label: "Grafik Tasarım" },
      { icon: "Sparkles", label: "Reels Kurgusu" },
      { icon: "Award", label: "Kurumsal Vitrin" },
      { icon: "MessageSquare", label: "DM Yönetimi" },
      { icon: "Share2", label: "Düzenli Akış" },
      { icon: "BarChart3", label: "Etkileşim Analizi" },
    ],
  },
  "google-reklamlari": {
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1800&q=85",
    icons: ["Search", "PhoneCall", "TrendingUp"],
    hubNodes: [
      { icon: "Search", label: "Arama Ağı" },
      { icon: "PhoneCall", label: "Telefon Araması" },
      { icon: "Target", label: "Negatif Filtreleme" },
      { icon: "CircleDollarSign", label: "Düşük TBM Maliyeti" },
      { icon: "Zap", label: "Hazır Müşteri" },
      { icon: "BarChart3", label: "Dönüşüm Takibi" },
    ],
  },
  "google-haritalar-1-sira": {
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1800&q=85",
    icons: ["MapPin", "PhoneCall", "Star"],
    hubNodes: [
      { icon: "MapPin", label: "Google Haritalar" },
      { icon: "PhoneCall", label: "Doğrudan Çağrı" },
      { icon: "Star", label: "NFC Yorum" },
      { icon: "Compass", label: "Navigasyon" },
      { icon: "Building2", label: "Yerel Dizinler" },
      { icon: "Search", label: "Google Arama" },
    ],
  },
  "google-yorum-puan-artirma": {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
    icons: ["Star", "Award", "ShieldCheck"],
    hubNodes: [
      { icon: "Star", label: "5.0 Puan Otoritesi" },
      { icon: "QrCode", label: "NFC Masa Kartı" },
      { icon: "ShieldCheck", label: "Organik Yorum" },
      { icon: "MapPin", label: "Harita Yükselişi" },
      { icon: "Award", label: "Müşteri Güveni" },
      { icon: "MessageSquare", label: "Geri Bildirim" },
    ],
  },
  "ozel-logo-tasarimi": {
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1800&q=85",
    icons: ["Palette", "Ruler", "Award"],
    hubNodes: [
      { icon: "Palette", label: "Vektörel Çizim" },
      { icon: "Building2", label: "Tabela Uyumu" },
      { icon: "Award", label: "Marka Tescili" },
      { icon: "FileText", label: "Kurumsal Kılavuz" },
      { icon: "Share2", label: "Sosyal Medya" },
      { icon: "Printer", label: "Matbaa Baskı" },
    ],
  },
  "kartvizit-magnet-ambalaj-baskilari": {
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1800&q=85",
    icons: ["Layers", "Printer", "CheckCircle2"],
    hubNodes: [
      { icon: "Printer", label: "Kalın Gramaj Baskı" },
      { icon: "Sparkles", label: "Kabartma Lak" },
      { icon: "ShoppingBag", label: "Baskılı Ambalaj" },
      { icon: "Layers", label: "Magnet Çözümleri" },
      { icon: "CheckCircle2", label: "Baskı Provası" },
      { icon: "Truck", label: "Kapıya Teslimat" },
    ],
  },
  "urun-dukkan-fotograf-cekimi": {
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1800&q=85",
    icons: ["Camera", "Sparkles", "Palette"],
    hubNodes: [
      { icon: "Camera", label: "4K Kamera & Işık" },
      { icon: "UtensilsCrossed", label: "Yemek / Ürün" },
      { icon: "Building2", label: "Mekan Çekimi" },
      { icon: "Palette", label: "Renk Rötuşu" },
      { icon: "Share2", label: "Sosyal Medya" },
      { icon: "Printer", label: "Baskı Çözünürlüğü" },
    ],
  },
  "tabela-cephe-giydirme-tasarimi": {
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85",
    icons: ["Building2", "Ruler", "Frame"],
    hubNodes: [
      { icon: "Building2", label: "Dış Cephe" },
      { icon: "Ruler", label: "3D Pafta Çizimi" },
      { icon: "Sparkles", label: "Işıklı Kutu Harf" },
      { icon: "Frame", label: "Kompozit Kaplama" },
      { icon: "Radio", label: "Gece Görünürlüğü" },
      { icon: "Award", label: "Cadde Hakimiyeti" },
    ],
  },
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

  const config = serviceConfigMap[slug] || {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
    icons: ["Zap", "ShieldCheck", "TrendingUp"],
    hubNodes: [
      { icon: "Zap", label: "Hız & Altyapı" },
      { icon: "ShieldCheck", label: "Güvenlik" },
      { icon: "TrendingUp", label: "Ciro Motoru" },
      { icon: "Database", label: "Veri Yönetimi" },
      { icon: "MessageSquare", label: "İletişim" },
      { icon: "Search", label: "Arama Motoru" },
    ],
  };

  const richData = richServiceProfiles[currentLang]?.[slug];

  if (richData) {
    return {
      slug: matchedService.slug,
      departmentTitle: matchedDept.categoryTitle,
      name: matchedService.name,
      kpi: matchedService.kpi,
      imageUrl: config.image,
      ...richData,
    };
  }

  // Dinamik Features 11, Orbital Hub & Deliverables Fallback Motoru
  const otherSlugsInDept = matchedDept.services
    .filter((s) => s.slug !== matchedService.slug)
    .map((s) => s.slug)
    .slice(0, 2);

  const fallbackDeliverables = matchedService.deliverables?.map((item, idx) => {
    const iconList = [
      "Code2",
      "Gauge",
      "FileCode2",
      "ShieldAlert",
      "Sliders",
      "MailCheck",
      "Fingerprint",
      "Headset",
    ];
    return {
      icon: iconList[idx % iconList.length],
      title: item,
      desc: isTr
        ? `İşletmenizin ${matchedService.name} sürecinde maksimum verim alması için uygulanan teknik standart.`
        : `Turnkey engineering standard deployed to maximize throughput for ${matchedService.name}.`,
    };
  }) || [
    {
      icon: "Code2",
      title: isTr ? "Özel Mimari Tasarımı" : "Bespoke Architecture",
      desc: matchedService.summary || matchedService.outcome,
    },
    {
      icon: "Gauge",
      title: isTr ? "Sıfır Gecikme & Hız Standardı" : "Zero Latency SLA",
      desc: isTr
        ? "Tüm cihazlarda anında açılan ve kesintisiz çalışan modern kod altyapısı."
        : "Sub-second responsive execution across all desktop and mobile viewports.",
    },
    {
      icon: "ShieldAlert",
      title: isTr ? "Entegrasyon & Veri Güvenliği" : "API & Security Layer",
      desc: isTr
        ? "Kurumsal güvenlik katmanı ve güvenli veri akışı garantisi."
        : "Hardened security policies with automated cloud encryption.",
    },
    {
      icon: "Headset",
      title: isTr ? "Kesintisiz Canlı Destek" : "Continuous Support SLA",
      desc: isTr
        ? "Canlıya alma sonrası Bursa Proje Masası üzerinden kesintisiz destek."
        : "Proactive server telemetry and direct engineering support desk.",
    },
  ];

  return {
    slug: matchedService.slug,
    departmentTitle: matchedDept.categoryTitle,
    categoryTag: matchedDept.categoryTitle,
    name: matchedService.name,
    title: matchedService.name,
    kpi: matchedService.kpi,
    imageUrl: config.image,
    leadText: isTr
      ? `${matchedService.outcome} ${matchedService.target}`
      : `${matchedService.outcome} ${matchedService.target}`,
    features8: [
      {
        icon: config.icons[0] || "Target",
        serifTitle: isTr
          ? `${matchedService.kpi} Standardı`
          : `${matchedService.kpi} Benchmark`,
        copy: isTr
          ? "İşletmenizin hızını ve pazar otoritesini artıran taahhütlü teknik çıktı."
          : "Contractual delivery benchmark engineered to accelerate operational turnover.",
      },
      {
        icon: config.icons[1] || "Zap",
        serifTitle: isTr ? "Sıfır Gecikme & SLA" : "Zero-Latency SLA",
        copy: isTr
          ? "Tüm cihazlarda 0.8 saniyenin altında açılan ve takılmayan modern kod altyapısı."
          : "Sub-second execution across all desktop and mobile viewports.",
      },
      {
        icon: config.icons[2] || "ShieldCheck",
        serifTitle: isTr ? "%100 Şeffaf Mülkiyet" : "100% IP Ownership",
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
          icon: config.icons[0] || "Zap",
          title: isTr ? `${matchedService.kpi} Hedefi` : "Performance SLA",
          text: isTr
            ? "Müşteri kaybını önleyen ve dönüşüm oranlarını artıran yüksek hızlı mimari."
            : "Engineered to maximize operational turnover and conversion velocity.",
          actionText: isTr ? "Kapsamı görün" : "Explore scope",
        },
        {
          index: "02",
          icon: config.icons[1] || "ShieldCheck",
          title: isTr ? "Sıfır Bağımlılık & Kontrol" : "Total Ownership",
          text: isTr
            ? "Tüm kontrolü ve veri mülkiyetini doğrudan şirketinize teslim eden şeffaf yapı."
            : "Complete corporate asset ownership with zero vendor lock-ins.",
          actionText: isTr ? "Mülkiyet şartları" : "See terms",
        },
        {
          index: "03",
          icon: config.icons[2] || "TrendingUp",
          title: isTr ? "Kesintisiz Büyüme" : "Commercial Growth",
          text: isTr
            ? "Bursa ve Türkiye genelindeki müşterileri doğrudan yakalayan odaklı mekanizma."
            : "Bespoke digital architecture converting high-intent local demand.",
          actionText: isTr ? "Büyüme motoru" : "Growth engine",
        },
      ],
    },
    orbitalHub: {
      badge: isTr ? "DİJİTAL ENTEGRASYON" : "DIGITAL HUB",
      heading: isTr
        ? "Tüm dijital kanallarınız tek merkezde senkron."
        : "All digital channels wired into one hub.",
      description: isTr
        ? "İletişim, ödeme, harita ve reklam araçlarınız birbirinden kopuk çalışmaz; Hexa altyapısı tüm kanalları tek akışta birleştirir."
        : "Your communication, payments, maps, and acquisition funnels run in complete synchronization.",
      actionBtnText: isTr ? "Entegrasyonu Başlatın" : "Connect Digital Hub",
      nodes: config.hubNodes || [
        { icon: "MessageSquare", label: "WhatsApp" },
        { icon: "Search", label: "Google SEO" },
        { icon: "CreditCard", label: "Sanal POS" },
        { icon: "Target", label: "Meta & Ads" },
        { icon: "ShieldCheck", label: "Güvenlik" },
        { icon: "Database", label: "Veri Paneli" },
      ],
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
    pillars: fallbackDeliverables,
    caseHighlight: {
      client: "Hexa Engineering Engine",
      badge: isTr ? "KANITLANMIŞ PERFORMANS" : "VERIFIED PERFORMANCE",
      metric: isTr
        ? `${matchedService.kpi} Başarısı`
        : `${matchedService.kpi} Verified`,
      summary: isTr
        ? `Bursa genelindeki öncü markalar için geliştirilen ${matchedService.name} altyapısı ile kanıtlanmış somut saha başarısı.`
        : `Verified commercial performance engineered for forward-thinking enterprises.`,
    },
    faq: [
      {
        q: isTr
          ? `${matchedService.name} işletmemize ne kadar sürede sonuç verir?`
          : `How quickly does ${matchedService.name} deliver results?`,
        a: isTr
          ? "Altyapı devreye alındığı andan itibaren operasyonel hızınız artar; doğrudan müşteri ve sipariş akışında net bir sıçrama elde edersiniz."
          : "Operational velocity improves immediately upon deployment, driving measurable conversion gains.",
      },
      {
        q: isTr
          ? "Proje boyunca hangi aşamalarda onayımız alınıyor?"
          : "What are the sign-off gates during the project?",
        a: isTr
          ? "Tek satır kod yazılmadan önce strateji ve tasarım onayınız alınır; her aşama canlı test ortamında tarafınıza sunulur."
          : "Strategy, UI design, and technical integration checkpoints require explicit sign-offs before live rollout.",
      },
      {
        q: isTr
          ? "Sonradan sürpriz ek maliyet çıkar mı?"
          : "Are there any hidden unexpected fees?",
        a: isTr
          ? "Hayır. Sözleşmede belirtilen anahtar teslim teklif geçerlidir; gizli ek maliyet veya zorunlu lisans ücretleri bulunmaz."
          : "Zero hidden costs. All deliverables and pricing parameters are fixed in our binding agreement.",
      },
      {
        q: isTr
          ? "Teslimattan sonra teknik destek nasıl işliyor?"
          : "How does support function post-deployment?",
        a: isTr
          ? "Bursa Proje Masamız haftanın her günü 09:00 - 17:00 canlı olmak üzere 7/24 sunucu izleme desteği sağlar."
          : "Our technical project desk provides real-time support and 24/7 automated telemetry monitoring.",
      },
    ],
    relatedSlugs:
      otherSlugsInDept.length >= 2
        ? otherSlugsInDept
        : ["kurumsal-web-siteleri", "google-haritalar-1-sira"],
  };
}

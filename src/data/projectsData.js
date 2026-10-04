const basePath =
  process.env.NODE_ENV === "production" ? "/hexa-dijital-final" : "";

export const projectsData = [
  {
    id: 1,
    slug: "paninoteca",
    title: "Paninoteca",
    client: "Paninoteca Italian Street Food",
    category: "food",
    categoryLabel: "Yemek Platformları & Yerel Arama",
    year: "2025",
    location: "Bursa / Nilüfer",
    role: "Yemek Platformları Yönetimi, Fotoğraf Prodüksiyonu, QR Menü & Google SEO",
    impact: "Yemek Sitelerinde Satış Artışı & Dükkana Yeni Müşteri Akışı",
    heroLead:
      "Yemeksepeti, Trendyol Yemek ve Getir mağazalarının baştan aşağı devralınması, 4K profesyonel yemek çekimleri, masalara QR menü ve dükkanın kendi kapısından müşteri sokan Google Harita optimizasyonu.",
    imageSrc: `${basePath}/projects/project-1.webp`,
    monogram: "PNT",

    // HERO ALTI 3 SÜTUNLU FEATURES 8 BÖLÜMÜ
    features8: [
      {
        icon: "Camera",
        serifTitle: "4K Yemek Prodüksiyonu",
        copy: "Karanlık telefon fotoğrafları yerine iştah açıcı stüdyo ışıklarıyla çekilen taze panini kareleri.",
      },
      {
        icon: "UtensilsCrossed",
        serifTitle: "Platformlarda İlk Sıra",
        copy: "Yemeksepeti ve Trendyol'da algoritmanın aradığı etiketlerle üst sıralara tırmanan mağaza düzeni.",
      },
      {
        icon: "MapPin",
        serifTitle: "Dükkana Doğrudan Müşteri",
        copy: "Google Haritalar üzerinden dükkanın kapısından içeri giren yeni fiziksel müşteri akışı.",
      },
    ],

    // İSTEDİĞİN KADAR GÖRSEL EKLEYEBİLECEĞİN KAYDIRMALI GALERİ
    gallery: [
      `${basePath}/projects/project-1.webp`,
      `${basePath}/projects/project-4.jpg`,
      `${basePath}/projects/project-5.jpg`,
      `${basePath}/projects/project-2.webp`,
    ],

    crisisHeading:
      "Kötü telefon fotoğrafları ve arkalarda kaybolan yemek mağazaları.",
    crisisStory:
      "Paninoteca lezzet olarak harika ürünler çıkarmasına rağmen internet ortamında görünmüyordu. Yemeksepeti ve Trendyol Yemek'te listelenen fotoğraflar karanlık telefon çekimleriydi, ürün açıklamaları yetersizdi ve sipariş veren müşteriler diğer zincir restoranların gölgesinde kalıyordu. Üstelik dükkanın Google Haritalar kaydı düzgün yapılandırılmadığı için caddeden geçen insanlar bile dükkanın varlığından habersizdi.",

    discoveryHeading:
      "Dükkana gittik, paninileri tattık ve sipariş akışını yerinde inceledik.",
    discoveryStory:
      "Uzaktan masa başı tavsiyeler vermek yerine dükkanda bir araya geldik. Hangi ürünün kâr marjının daha yüksek olduğunu, mutfağın hangi saatlerde yoğunlaştığını ve paket servis müşterisinin en çok hangi lezzetlere yöneldiğini yerinde tespit ettik. Hem online yemek sitelerinde ilk sıraya çıkacak hem de caddeden geçen insanı dükkana sokacak 4 adımlı bir eylem planı hazırladık.",

    solutionHeading:
      "4K çekimlerden arama algoritmalarına uzanan eksiksiz dönüşüm.",
    solutionSteps: [
      {
        num: "01",
        title: "Stüdyo Işıklarıyla 4K Yemek Çekimi",
        desc: "Makro lensler ve profesyonel ışıklandırmayla paninilerin taze malzemelerini ve soslarını gösteren iştah açıcı fotoğraflar çekildi.",
      },
      {
        num: "02",
        title: "Yemek Platformları Menü Optimizasyonu",
        desc: "Trendyol Yemek, Getir ve Yemeksepeti mağazalarında ürün isimleri, menü grupları ve algoritmanın öne çıkardığı etiketler baştan yazıldı.",
      },
      {
        num: "03",
        title: "Masalara QR Kodlu Dijital Menü",
        desc: "Dükkana gelen müşterilerin telefonundan anında açtığı, fiyatı ve görselleri tek tıkla güncellenebilen modern QR menü kuruldu.",
      },
      {
        num: "04",
        title: "Google Harita & Sosyal Medya",
        desc: "Google İşletme Profili konum etiketli fotoğraflarla güçlendirildi; özel gün paylaşımlarıyla canlı bir marka kimliği oluşturuldu.",
      },
    ],

    shiftHeading:
      "İlk hafta sonunda dükkanın hem paketi hem de masaları dolmaya başladı.",
    shiftStory:
      "Yeni fotoğraflar ve arama optimizasyonu devreye girdiği ilk hafta sonu, yemek platformlarındaki sipariş bildirim zilleri susmadı. İştah kabartan profesyonel görselleri gören müşterilerin sepet onaylama oranı katlandı. Google Harita profili sayesinde çevre ofis ve iş yerlerinden dükkana ilk kez gelen onlarca yeni müşteri kazanıldı.",

    metrics: [
      { figure: "2.8 Kat", label: "Yemek Sitelerinde Sipariş Artışı" },
      { figure: "4.8", label: "Google İşletme Puanı" },
      { figure: "%100", label: "Masalarda Sıfır Baskı Masrafı" },
      { figure: "20+", label: "Günlük Yeni Dükkan Ziyaretçisi" },
    ],
  },

  {
    id: 2,
    slug: "munchico-fried-chicken",
    title: "Munchico Fried Chicken",
    client: "Munchico Crispy Chicken",
    category: "brand",
    categoryLabel: "Sıfırdan Marka Kimliği & Tabela",
    year: "2024",
    location: "Bursa / Nilüfer",
    role: "Marka İsmi, Logo, Işıklı Tabela, Kampanya Afişleri, Yemek Çekimi & Maliyet Hesabı",
    impact: "Marka İsmi, Logo, Işıklı Tabela & Ürün Başına Maliyet Hesabı",
    heroLead:
      "Dükkanın isim babalığından kurumsal renk paletine, ışıklı lightbox tabelasından '1 Alana 2.si %50' dükkan önü afişlerine, profesyonel yemek çekimlerinden Hexa Finans maliyet hesabına kadar eksiksiz anahtar teslim marka inşası.",
    imageSrc: `${basePath}/projects/project-1.webp`,
    monogram: "MFC",

    features8: [
      {
        icon: "Palette",
        serifTitle: "Özgün Marka Kimliği",
        copy: "Marka ismi, renk paleti ve cadde üzerinde hemen fark edilen tescilli logo tasarımı.",
      },
      {
        icon: "Building2",
        serifTitle: "Işıklı Lightbox Tabela",
        copy: "Gece ve gündüz kaldırımdan geçen herkesin iştahını açan 1/1 ölçülü tabela imalat projeleri.",
      },
      {
        icon: "CircleDollarSign",
        serifTitle: "Kuruş Kuruş Maliyet",
        copy: "Hangi menünün ne kadar net kâr bıraktığını gösteren matematiksel Hexa Finans hesabı.",
      },
    ],

    gallery: [
      `${basePath}/projects/project-1.webp`,
      `${basePath}/projects/project-5.jpg`,
      `${basePath}/projects/project-4.jpg`,
      `${basePath}/projects/project-3.jpeg`,
    ],

    crisisHeading:
      "Sadece bir dükkan vardı; isim, tabela, konsept ve maliyet hesabı yoktu.",
    crisisStory:
      "Yatırımcı lezzetli bir çıtır tavuk dükkanı açmak istiyordu ancak ortada ne akılda kalıcı bir isim, ne kurumsal bir logo, ne de menü fiyatlandırması vardı. Tavuk gramajı, sos maliyeti ve ambalaj giderleri kuruşu kuruşuna hesaplanmadığı için hangi menünün ne kadar kâr bırakacağı tamamen belirsizdi. Cadde üzerindeki onlarca fast-food devi arasında fark edilmek için çok güçlü bir kimlik gerekiyordu.",

    discoveryHeading:
      "Masanın başına geçtik, gramajları tarttık ve markanın karakterini çizdik.",
    discoveryStory:
      "Dükkanın fiziki yerinde buluştuk. 'Munchico' ismini ürettik; genç, dinamik ve iştah açıcı renk paletini belirledik. Ardından mutfağa girerek her bir menünün çıtır tavuk gramajını, kızartma yağını, patatesini ve kutu ambalaj maliyetini Hexa Finans tablosuna işleyerek dükkan sahibinin kuruşu kuruşuna kârını görebileceği matematiksel bir fiyatlandırma çıkardık.",

    solutionHeading:
      "Tabeladan el ilanına, menü panolarından platformlara tek elden üretim.",
    solutionSteps: [
      {
        num: "01",
        title: "Özgün İsim, Logo ve Renk Paleti",
        desc: "Cadde üzerinde parlayan, akılda kalıcı 'Munchico' marka ismi tescillendi ve modern vektörel logosu çizildi.",
      },
      {
        num: "02",
        title: "Işıklı Lightbox Tabela & Menü Panoları",
        desc: "Kaldırımdan geçen herkesin iştahını kabartan 1/1 teknik ölçülü ışıklı tabela ve kasanın üstündeki arkadan aydınlatmalı menü panoları projelendirildi.",
      },
      {
        num: "03",
        title: "Kampanya Afişleri & El İlanları",
        desc: "Açılış haftası için '1 Alana 2.si %50' dükkan önü ayaklı afişleri ve semte dağıtılacak kuşe el ilanları tasarlandı.",
      },
      {
        num: "04",
        title: "Hexa Finans Ürün Başı Maliyet Hesabı",
        desc: "Hangi menünün ne kadar net kâr bıraktığını kuruşu kuruşuna gösteren dinamik maliyet tablosu teslim edildi.",
      },
    ],

    shiftHeading: "Açılış günü dükkanın önünde metrelerce kuyruk oluştu.",
    shiftStory:
      "Lightbox tabelanın yandığı ve '1 Alana 2.si %50' afişlerinin caddeye çıktığı ilk gün, dükkanın önünde beklenenin çok üzerinde bir hareketlilik yaşandı. Doğru maliyet hesabı sayesinde indirim yapılırken bile dükkan zarar etmedi, aksine binlerce yeni müşteri markanın lezzetiyle tanıştı.",

    metrics: [
      { figure: "1 Günde", label: "Cadde Hakimiyeti ve Tanınırlık" },
      { figure: "%100", label: "Kuruş Kuruş Net Maliyet Kontrolü" },
      { figure: "3.500+", label: "İlk Ayda Servis Edilen Menü" },
      { figure: "0 Sürpriz", label: "Şeffaf Yatırım ve Bütçe Planlaması" },
    ],
  },

  {
    id: 3,
    slug: "taha-usta",
    title: "Taha Usta",
    category: "automation",
    categoryLabel: "Özel Sipariş Uygulaması & Kasa",
    year: "2024",
    location: "Bursa / Osmangazi",
    role: "Özel Sipariş Takip Yazılımı, Termal Yazıcı Entegrasyonu & Finans Takip Modülü",
    impact:
      "Telefon ve WhatsApp Sipariş Kaosunu Kökten Bitiren Mutfak Otomasyonu",
    heroLead:
      "Müşterilerin sürekli arayarak ve WhatsApp'tan yazarak oluşturduğu sipariş karmaşasını bitiren, gelen çağrıları tek ekranda toplayıp mutfak yazıcısından otomatik fiş basan ve ay sonu net kârı gösteren özel yazılım.",
    imageSrc: `${basePath}/projects/project-4.jpg`,
    monogram: "THU",

    features8: [
      {
        icon: "PhoneCall",
        serifTitle: "Arayanı Tanıyan Ekran",
        copy: "Telefon çaldığı anda müşterinin adı, adresi ve eski siparişleri saniyesinde ekranda.",
      },
      {
        icon: "Printer",
        serifTitle: "Otomatik Termal Fiş",
        copy: "Ürün seçildiği anda mutfaktaki ve kurye masasındaki yazıcıdan anında çıkan fiş.",
      },
      {
        icon: "Receipt",
        serifTitle: "Net Ciro ve Kasa",
        copy: "Ay sonunda dükkana net ne kadar kâr kaldığını kuruşu kuruşuna gösteren kasa modülü.",
      },
    ],

    gallery: [
      `${basePath}/projects/project-4.jpg`,
      `${basePath}/projects/project-5.jpg`,
      `${basePath}/projects/project-3.jpeg`,
      `${basePath}/projects/project-1.webp`,
    ],

    crisisHeading:
      "Aynı anda çalan telefonlar, kaybolan kağıt adisyonlar ve yanlış giden siparişler.",
    crisisStory:
      "Taha Usta'da paket servis talebi çok yüksekti ancak tüm süreç ilkel yöntemlerle yürütülüyordu. Personel bir yandan çalan telefona bakıyor, diğer yandan WhatsApp mesajlarını okuyor, bir yandan da kağıtlara sipariş karalıyordu. Cuma ve cumartesi akşamları kağıtlar kayboluyor, müşterinin 'acısız' dediği lahmacun 'acılı' gidiyor, dükkan sahibi gün sonunda ne kadar kâr ettiğini asla bilemiyordu.",

    discoveryHeading:
      "Mutfakta 2 saat durduk; siparişin kağıttan pakete gidişini adım adım izledik.",
    discoveryStory:
      "Taha Usta'nın dükkanına gittik. Ustaların siparişi hazırlarken nasıl zorlandığını, kuryelerin hangi siparişi alacağını şaşırdığını gözlerimizle gördük. Karmaşık ve pahalı adisyon programları yerine; ustanın ve kasiyerin tek dokunuşla kullanabileceği, telefona ve tablete uyumlu özel bir sipariş takip sistemi yazmaya karar verdik.",

    solutionHeading:
      "Aramayı tanıyan, mutfağa anında fiş basan ve net ciroyu gösteren özel yazılım.",
    solutionSteps: [
      {
        num: "01",
        title: "Gelen Çağrıyı Anında Yakalama",
        desc: "Telefon çaldığı anda müşterinin adı, adresi ve geçmiş siparişleri anında ekrana dökülen arayanı tanıma sistemi kuruldu.",
      },
      {
        num: "02",
        title: "Tek Dokunuşla Mutfak Fişi Dökümü",
        desc: "Ürünler ekrandan seçildiği anda mutfaktaki ve kurye masasındaki termal yazıcıdan adisyon fişi saniyesinde otomatik çıktı.",
      },
      {
        num: "03",
        title: "Sıfır Hata ve Kaçak Önleme",
        desc: "Özel notlar (acısız, duble yeşillik vb.) fişin üstünde kocaman puntolarla basılarak mutfaktaki sipariş hataları sıfırlandı.",
      },
      {
        num: "04",
        title: "Gün Sonu & Ay Sonu Net Finans Raporu",
        desc: "Kasanın içine entegre edilen modülle gün sonunda toplam paket sayısı, nakit, kart ve net kalan kâr tek tuşla döküldü.",
      },
    ],

    shiftHeading:
      "Akşam yoğunluğundaki o bağırma çağırma ve kargaşa tamamen bitti.",
    shiftStory:
      "Uygulamanın devreye alındığı ilk hafta sonunda dükkanda tam bir sessizlik ve düzen hakimdi. Telefon çaldığında müşterinin adresi zaten hazırdı, tek tıkla fiş çıktı, usta fişe bakıp hazırladı ve kurye adrese götürdü. Taha Usta ilk kez ay sonunda cebine ne kadar net para kaldığını kuruşu kuruşuna gördü.",

    metrics: [
      { figure: "%0", label: "Sipariş Karışıklığı ve Hata Payı" },
      { figure: "15 Saniye", label: "Sipariş Alma ve Fiş Çıkma Süresi" },
      { figure: "Tam Net", label: "Günlük Nakit ve Kredi Kartı Takibi" },
      { figure: "100%", label: "Mutfak ve Kurye Arası Koordinasyon" },
    ],
  },

  {
    id: 4,
    slug: "omer-usta",
    title: "Ömer Usta",
    category: "food",
    categoryLabel: "Web Sitesi & Paket Satış",
    year: "2024",
    location: "Bursa / Yıldırım",
    role: "Özel Web Sitesi, Yemek Platformları Kurulumu & Paket Servis Ciro Artışı",
    impact: "Özel İnternet Sitesi & Yemek Sitelerinde Paket Satış Artışı",
    heroLead:
      "Ömer Usta için modern bir internet sitesinin hazırlanması, Yemeksepeti, Trendyol Yemek ve Getir mağaza kurulumlarının yapılması ve menü içeriklerinin arama algoritmalarına uygun düzenlenerek paket servis cirosunun artırılması.",
    imageSrc: `${basePath}/projects/project-5.jpg`,
    monogram: "OMU",

    features8: [
      {
        icon: "Globe",
        serifTitle: "Özel Tanıtım Sitesi",
        copy: "Dükkanı, kebapları ve telefon numarasını tek tıkla müşterinin karşısına getiren hafif web sitesi.",
      },
      {
        icon: "UtensilsCrossed",
        serifTitle: "Yemek Siteleri Kurulumu",
        copy: "Yemeksepeti, Getir ve Trendyol mağazalarının eksiksiz evrak ve menü onay süreçleri.",
      },
      {
        icon: "TrendingUp",
        serifTitle: "Paket Satış Artışı",
        copy: "Arama yapan müşteriyi yakalayan doğru menü isimleri ve porsiyon seçenekleri.",
      },
    ],

    gallery: [
      `${basePath}/projects/project-5.jpg`,
      `${basePath}/projects/project-1.webp`,
      `${basePath}/projects/project-4.jpg`,
      `${basePath}/projects/project-2.webp`,
    ],

    crisisHeading:
      "Sadece dükkandaki müşteriye bağımlı, paket servisi durma noktasında bir işletme.",
    crisisStory:
      "Ömer Usta geleneksel lezzetleri çok iyi yapan bir kebap ve pide ustasıydı. Fakat dükkanına sadece mahalleden gelen tanıdıklar uğruyordu. Yemeksepeti veya Trendyol Yemek'te mağazası yoktu, internette ismi aratıldığında hiçbir web sitesi çıkmıyordu. Çevredeki binlerce potansiyel paket servis müşterisi rakip restoranlardan sipariş veriyordu.",

    discoveryHeading:
      "Ömer Usta ile masaya oturduk; lezzetlerini dijital paket servise taşıdık.",
    discoveryStory:
      "Dükkanına misafir olduk. Paket servise en uygun, yolda lezzetini kaybetmeyecek menüleri birlikte seçtik. Ömer Usta'nın hem internetten kurumsal olarak güven vermesini sağlayacak şık bir siteye hem de tüm yemek uygulamalarında hızlıca ciro yapacak profesyonel mağaza kurulumlarına ihtiyacı vardı.",

    solutionHeading:
      "Kurumsal internet vitrini ve yemek platformlarında güçlü başlangıç.",
    solutionSteps: [
      {
        num: "01",
        title: "Hızlı ve Modern İnternet Sitesi",
        desc: "Ömer Usta'nın dükkanını, kebaplarını ve iletişim numarasını tek dokunuşla ekrana getiren hafif tanıtım sitesi kuruldu.",
      },
      {
        num: "02",
        title: "Yemeksepeti, Getir & Trendyol Kurulumu",
        desc: "Tüm resmi evrak ve mağaza onay süreçleri yönetilerek Ömer Usta tüm popüler yemek uygulamalarına eksiksiz kaydedildi.",
      },
      {
        num: "03",
        title: "Doğru Ürün İsimleri & Açıklamaları",
        desc: "Menüler müşterinin uygulamada arattığı anahtar kelimelere göre yapılandırıldı; porsiyon seçenekleri netleştirildi.",
      },
      {
        num: "04",
        title: "Google Haritalar Canlı İletişim",
        desc: "Google Harita kaydı yapılarak çevreden geçen insanların doğrudan telefonla sipariş vermesi sağlandı.",
      },
    ],

    shiftHeading:
      "Dükkandaki masalara ek olarak her gün onlarca paket servisi çıkmaya başladı.",
    shiftStory:
      "Web sitesinin yayına girmesi ve yemek uygulamalarının açılmasıyla birlikte Ömer Usta'nın dükkanı adeta ikinci bir şube açmış gibi paket servis üretmeye başladı. Mahallenin dışındaki çevre semtlerden düzenli sipariş veren sadık bir müşteri kitlesi oluştu.",

    metrics: [
      { figure: "3 Platform", label: "Eksiksiz Online Mağaza Kurulumu" },
      { figure: "2 Kat", label: "Günlük Paket Servis Hacmi" },
      { figure: "0.8s", label: "Web Sitesi Mobil Açılış Hızı" },
      { figure: "7 Gün", label: "Tüm Sürecin Anahtar Teslim Bitirilmesi" },
    ],
  },

  {
    id: 5,
    slug: "hira-koltuk-yikama",
    title: "Hira Halı & Koltuk Yıkama",
    category: "web",
    categoryLabel: "Web Performans & Google 1. Sıra",
    year: "2024",
    location: "Bursa / Nilüfer",
    role: "Tasarımı Korumalı Kodlama, Hız Performansı & Google Arama SEO",
    impact:
      "2016 Tasarımı Bozulmadan Uçurulan Hız & Google Aramalarında 1. Sıra",
    heroLead:
      "Müşterinin 2016'dan kalan eski tasarımına dokunmadan; altyapıyı temiz kodla baştan kodlayarak açılış hızını 5 saniyeden 0.7 saniyeye düşürmemiz ve Google yerel aramalarda telefonları patlatan 1. sıra başarısı.",
    imageSrc: `${basePath}/projects/project-3.jpeg`,
    monogram: "HHY",

    features8: [
      {
        icon: "Zap",
        serifTitle: "0.7s Mobil Açılış",
        copy: "Açılması 5 saniye süren eski sitenin mikrosaniyede ekrana gelen jilet gibi hıza kavuşması.",
      },
      {
        icon: "Search",
        serifTitle: "Google'da İlk Sıra",
        copy: "Açılış hızı 100 tam puana ulaşınca Google'ın siteyi en tepeye taşıması.",
      },
      {
        icon: "PhoneCall",
        serifTitle: "4 Kat Fazla Çağrı",
        copy: "Reklam bütçesi artırılmadan dükkana gelen doğrudan müşteri aramalarının 4 katına çıkışı.",
      },
    ],

    gallery: [
      `${basePath}/projects/project-3.jpeg`,
      `${basePath}/projects/project-1.webp`,
      `${basePath}/projects/project-5.jpg`,
      `${basePath}/projects/project-4.jpg`,
    ],

    crisisHeading:
      "Açılması 5 saniye süren eski site yüzünden boşa yanan reklam paraları.",
    crisisStory:
      "Hira Halı Yıkama işletmecisi 2016 yılında bir site yaptırmıştı. Tasarımına gözü çok alışmıştı ve kesinlikle tasarımın değişmesini istemiyordu. Ancak site o kadar yavaştı ki (4-5 saniye), Google Ads reklamlarına tıklayan müşteriler sayfa açılmadan kapatıp gidiyordu. Hem reklam bütçesi boşa yanıyor hem de Google yavaş siteyi cezalandırarak aramalarda en arka sayfalara itiyordu.",

    discoveryHeading:
      "Müşterinin şartını dinledik: 'Tasarımıma dokunmayın ama sitem uçsun.'",
    discoveryStory:
      "İşletmeciyle dükkanında görüştük. Talebi çok netti: Müşterilerinin alıştığı o yeşil kurumsal renkler ve yerleşim aynı kalmalı, ancak site telefonda tıklandığı an açılmalıydı. Hazır temalara dokunmadan, o eski görsel tasarımı pırıl pırıl temiz kodla sıfırdan dokuma kararı aldık.",

    solutionHeading:
      "Görsel hafıza korundu, motor baştan aşağı turbo seviyesine çekildi.",
    solutionSteps: [
      {
        num: "01",
        title: "Tasarımı Birebir Klonlayarak Temiz Kodlama",
        desc: "Müşterinin sevdiği tüm sayfa düzeni ve butonlar korundu, arkadaki hantal WordPress kodları tamamen çöpe atıldı.",
      },
      {
        num: "02",
        title: "0.7 Saniyenin Altında Açılış Hızı",
        desc: "Sitenin ağırlığı 8 kat hafifletildi; telefonda tıklandığı mikrosaniyede ekrana gelen jilet gibi bir altyapı kuruldu.",
      },
      {
        num: "03",
        title: "Google Kalite Puanı & İlk Sıra",
        desc: "Açılış hızı 100/100 tam puana ulaşınca Google siteyi ödüllendirdi ve 'Bursa koltuk yıkama' aramalarında en tepeye yerleştirdi.",
      },
      {
        num: "04",
        title: "Tek Tıkla Doğrudan Arama Butonları",
        desc: "Ziyaretçiyi sayfada oyalamadan doğrudan telefon hattına bağlayan akıllı arama kurgusu yerleştirildi.",
      },
    ],

    shiftHeading:
      "Reklam bütçesi tek kuruş artırılmadı; gelen telefon araması 4 katına çıktı.",
    shiftStory:
      "Site yeni altyapıyla yayına girdiği ilk hafta, reklam tıklamalarının artık boşa gitmediği hemen anlaşıldı. Tıklayan herkes sayfa anında açıldığı için doğrudan 'Ara' butonuna bastı. Dükkandaki servis araçları Nilüfer ve Osmangazi genelinde aralıksız koltuk ve halı yıkama randevusuna yetişmeye başladı.",

    metrics: [
      { figure: "0.7s", label: "Mobil Sayfa Açılış Hızı (Önce 4.8s)" },
      { figure: "4 Kat", label: "Günlük Doğrudan Telefon Çağrısı" },
      { figure: "1. Sıra", label: "Bölgesel Google Arama Konumu" },
      { figure: "%100", label: "Müşterinin İstediği Orijinal Görsellik" },
    ],
  },

  {
    id: 6,
    slug: "alya-davet",
    title: "Alya Davet & Organizasyon",
    category: "seo",
    categoryLabel: "Google İtibar Yönetimi & Web Sitesi",
    year: "2025",
    location: "Bursa / Nilüfer",
    role: "Google İtibar Temizliği, Yorum & Puan Yönetimi & Şık Rezervasyon Sitesi",
    impact:
      "3.9'dan 4.5'e Çıkarılan Google Puanı & Prestijli Rezervasyon Sitesi",
    heroLead:
      "Asılsız ve haksız kötü yorumlar yüzünden Google puanı 3.9'a kadar düşen işletmenin harita itibarının 4.5 yıldıza çekilmesi, haksız yorumların temizlenmesi ve şık bir cemiyet rezervasyon web sitesi inşası.",
    imageSrc: `${basePath}/projects/project-2.webp`,
    monogram: "ADY",

    features8: [
      {
        icon: "Star",
        serifTitle: "4.5 Yıldız İtibarı",
        copy: "Asılsız 1 yıldızlı yorumların temizlenmesi ve gerçek müşterilerden toplanan yüksek puanlama.",
      },
      {
        icon: "ShieldCheck",
        serifTitle: "Google İtibar Koruması",
        copy: "Salonun itibarını zedeleyen sahte ve art niyetli yorumların resmi itirazlarla silinmesi.",
      },
      {
        icon: "CalendarCheck",
        serifTitle: "3 Kat Fazla Rezervasyon",
        copy: "Şık salon web sitesi sayesinde ailelerin güvenle doğrudan salonu arayıp randevu alması.",
      },
    ],

    gallery: [
      `${basePath}/projects/project-2.webp`,
      `${basePath}/projects/project-5.jpg`,
      `${basePath}/projects/project-1.webp`,
      `${basePath}/projects/project-3.jpeg`,
    ],

    crisisHeading:
      "Haritada 3.9 puana düşen itibar ve gelen telefonların kesilmesi.",
    crisisStory:
      "Alya Davet çok nezih bir salon olmasına rağmen Google Haritalar'da büyük bir itibar krizi yaşıyordu. Rakip işletmelerin ve art niyetli kişilerin bıraktığı 1 yıldızlı asılsız yorumlar yüzünden puan 3.9'a kadar gerilemişti. Düğün, nişan veya kına yapacak gelin-damat adayları Google'da bu düşük puanı gördüğü an salonu aramaktan vazgeçiyordu.",

    discoveryHeading:
      "Salonda bir araya geldik; tüm haksız yorumları tek tek dosyaladık.",
    discoveryStory:
      "Alya Davet işletmecileriyle salonun masasında oturduk. Gerçekte yaşanmamış, haksız ve sahte hesaplardan gelen tüm yorumları Google'ın resmi politikaları kapsamında tek tek inceledik. Hem bu haksız lekeyi silmek hem de salonun büyüklüğünü gösterecek şık bir internet sitesi kurmak için harekete geçtik.",

    solutionHeading:
      "Hukuki ve algoritmik itirazlar, 5 yıldızlı müşteri akışı ve modern web vitrini.",
    solutionSteps: [
      {
        num: "01",
        title: "Asılsız Yorumlara Resmi İtirazlar",
        desc: "Google spam ve sahte hesap politikaları kapsamında haksız 1 yıldızlı yorumlara teknik itirazlar yapılarak kaldırılması sağlandı.",
      },
      {
        num: "02",
        title: "Memnun Müşterilerden Gerçek Yorum Sistemi",
        desc: "Salonda cemiyet yapan ve memnun ayrılan ailelerin saniyeler içinde 5 yıldız vermesini sağlayan pratik QR yorum standı kuruldu.",
      },
      {
        num: "03",
        title: "Harita Puanının 4.5 Yıldıza Çıkışı",
        desc: "Yapılan temizlik ve gelen onlarca gerçek olumlu yorumla birlikte salonun harita puanı 3.9'dan 4.5 yıldıza sıçradı.",
      },
      {
        num: "04",
        title: "Şık Cemiyet ve Rezervasyon Web Sitesi",
        desc: "Salonun fotoğraflarını, kapasitesini ve menü detaylarını sergileyen şık, prestijli bir kurumsal web sitesi kodlandı.",
      },
    ],

    shiftHeading:
      "Gelin ve damat adayları artık salonu gönül rahatlığıyla aramaya başladı.",
    shiftStory:
      "Google Haritalar'da 4.5 yıldızı ve pırıl pırıl müşteri yorumlarını gören ailelerin güveni yeniden sağlandı. Web sitesindeki şık salon fotoğraflarını inceleyen müşterilerin doğrudan randevu için arama oranı 3 katına çıktı. Salonun hafta sonu takvimi aylar öncesinden rezerve edildi.",

    metrics: [
      { figure: "4.5 Yıldız", label: "Google Harita Puanı (Önce 3.9)" },
      { figure: "18 Adet", label: "Kaldırılan Asılsız / Sahte Kötü Yorum" },
      { figure: "3 Kat", label: "Salon Ziyareti ve Teklif Talebi Artışı" },
      { figure: "100%", label: "Geri Kazanılan Kurumsal Güven" },
    ],
  },
];

import type { Lang } from "@/lib/i18n";

export type CategoryId = "omnigrid" | "omnisafe" | "omnidetect" | "omniasset" | "other-products";

interface CategoryText { name: string; tagline: string; description: string; scope: string[] }
export interface Category extends CategoryText { id: CategoryId; tr: CategoryText }

interface ProductText { short: string; overview: string; features: string[]; specs: [string, string][] }
export interface Product extends ProductText {
  id: string;
  category: CategoryId;
  title: string;
  subtitleTr: string;
  tags: string[];
  tagsTr: string[];
  tr: ProductText;
}

export const categories: Category[] = [
  {
    id: "omnigrid",
    name: "OMNIGRID",
    tagline: "Grid monitoring & automation",
    description: "Real-time visibility for overhead distribution lines and substations — fault location, dynamic line rating and IEC 61850 integration.",
    scope: ["Overhead line monitoring", "Substation automation", "Dynamic line rating", "SCADA integration"],
    tr: {
      name: "OMNIGRID",
      tagline: "Şebeke izleme ve otomasyon",
      description: "Havai dağıtım hatları ve trafo merkezleri için gerçek zamanlı görünürlük — arıza yeri tespiti, dinamik hat kapasitesi ve IEC 61850 entegrasyonu.",
      scope: ["Havai hat izleme", "Trafo merkezi otomasyonu", "Dinamik hat kapasitesi", "SCADA entegrasyonu"],
    },
  },
  {
    id: "omnisafe",
    name: "OMNISAFE",
    tagline: "Operator & equipment safety",
    description: "Protection systems that keep field crews out of harm's way — ultra-fast arc flash detection and remote breaker operation.",
    scope: ["Arc flash protection", "Remote tripping", "Blast-zone safety", "Switchgear retrofits"],
    tr: {
      name: "OMNISAFE",
      tagline: "Operatör ve ekipman güvenliği",
      description: "Saha ekiplerini tehlikeden uzak tutan koruma sistemleri — ultra hızlı ark algılama ve uzaktan kesici kumandası.",
      scope: ["Ark koruması", "Uzaktan açma", "Patlama bölgesi güvenliği", "Hücre modernizasyonu"],
    },
  },
  {
    id: "omnidetect",
    name: "OMNIDETECT",
    tagline: "Fault detection & early warning",
    description: "Locate underground cable faults precisely and catch thermal hotspots before they become outages.",
    scope: ["Cable fault location", "Insulation diagnostics", "Thermal indicators", "Preventive maintenance"],
    tr: {
      name: "OMNIDETECT",
      tagline: "Arıza tespiti ve erken uyarı",
      description: "Yeraltı kablo arızalarını hassas şekilde bulun, sıcak noktaları kesintiye dönüşmeden yakalayın.",
      scope: ["Kablo arıza yeri tespiti", "İzolasyon teşhisi", "Termal göstergeler", "Önleyici bakım"],
    },
  },
  {
    id: "omniasset",
    name: "OMNIASSET",
    tagline: "Asset health & lifecycle analytics",
    description: "Online transformer condition monitoring and predictive analytics that extend asset life and optimise maintenance budgets.",
    scope: ["Online DGA", "Health indexing", "Predictive maintenance", "Fleet analytics"],
    tr: {
      name: "OMNIASSET",
      tagline: "Varlık sağlığı ve yaşam döngüsü analitiği",
      description: "Varlık ömrünü uzatan ve bakım bütçelerini optimize eden çevrimiçi transformatör izleme ve öngörücü analitik.",
      scope: ["Çevrimiçi DGA", "Sağlık indeksi", "Kestirimci bakım", "Filo analitiği"],
    },
  },
  {
    id: "other-products",
    name: "Other Products",
    tagline: "Authorized representations",
    description: "AES is the official representative of Applied Precision and Vicentinos — world-class meter testing and line insulation solutions.",
    scope: ["Applied Precision (TR & Iraq)", "Vicentinos insulators", "Meter calibration", "Line hardware"],
    tr: {
      name: "Diğer Ürünler",
      tagline: "Yetkili temsilcilikler",
      description: "AES, Applied Precision ve Vicentinos'un resmi temsilcisidir — dünya standartlarında sayaç test ve hat izolasyon çözümleri.",
      scope: ["Applied Precision (TR & Irak)", "Vicentinos izolatörler", "Sayaç kalibrasyonu", "Hat donanımı"],
    },
  },
];

export const products: Product[] = [
  {
    id: "omnigrid-overhead",
    category: "omnigrid",
    title: "Overhead Line Monitoring System",
    subtitleTr: "Havai Hat İzleme Sistemi",
    short: "Real-time fault location, thermal line rating and dynamic sag monitoring for distribution lines.",
    overview: "Line-mounted sensors continuously measure current, conductor temperature and sag, streaming data to a central platform that pinpoints faults within seconds and calculates real-time thermal capacity.",
    tags: ["Fault Location", "DLR", "Sag Monitoring", "LoRa / GSM"],
    tagsTr: ["Arıza Yeri", "DLR", "Sehim İzleme", "LoRa / GSM"],
    features: [
      "Fault passage indication with section-level localisation",
      "Dynamic thermal line rating (IEEE 738)",
      "Conductor sag and clearance monitoring",
      "Energy-harvesting, live-line installable sensors",
      "SCADA integration via IEC 60870-5-104 / DNP3",
    ],
    specs: [["Voltage range", "6 kV – 36 kV"], ["Current measurement", "0 – 1000 A, ±1%"], ["Temperature range", "-40 °C to +125 °C"], ["Communication", "LoRaWAN, 4G/LTE"], ["Protection class", "IP67"]],
    tr: {
      short: "Dağıtım hatları için gerçek zamanlı arıza yeri tespiti, termal hat kapasitesi ve dinamik sehim izleme.",
      overview: "Hat üzerine monte edilen sensörler akım, iletken sıcaklığı ve sehimi sürekli ölçer; verileri arızaları saniyeler içinde tespit eden ve gerçek zamanlı termal kapasiteyi hesaplayan merkezi platforma iletir.",
      features: [
        "Bölüm seviyesinde lokalizasyonlu arıza geçiş göstergesi",
        "Dinamik termal hat kapasitesi (IEEE 738)",
        "İletken sehim ve açıklık izleme",
        "Enerji hasatlı, enerjili hatta takılabilir sensörler",
        "IEC 60870-5-104 / DNP3 ile SCADA entegrasyonu",
      ],
      specs: [["Gerilim aralığı", "6 kV – 36 kV"], ["Akım ölçümü", "0 – 1000 A, ±%1"], ["Sıcaklık aralığı", "-40 °C ile +125 °C"], ["Haberleşme", "LoRaWAN, 4G/LTE"], ["Koruma sınıfı", "IP67"]],
    },
  },
  {
    id: "omnigrid-substation",
    category: "omnigrid",
    title: "Substation Automation & Gateway Unit",
    subtitleTr: "Trafo Merkezi Otomasyon ve Gateway Ünitesi",
    short: "IEC 61850 compatible gateway for medium-voltage switchgear integration and grid stability.",
    overview: "A ruggedised gateway that unifies protection relays, meters and switchgear under one IEC 61850 data model, enabling remote control and secure telemetry to the control centre.",
    tags: ["IEC 61850", "RTU", "Cybersecure", "MV Switchgear"],
    tagsTr: ["IEC 61850", "RTU", "Siber Güvenli", "OG Hücre"],
    features: [
      "IEC 61850 MMS / GOOSE client & server",
      "Protocol conversion: Modbus, DNP3, IEC 104",
      "Embedded logic for automatic reclosing schemes",
      "IEC 62351 cybersecurity and role-based access",
      "Web-based configuration and diagnostics",
    ],
    specs: [["Protocols", "IEC 61850, IEC 60870-5-101/104, DNP3, Modbus"], ["Ethernet ports", "4 × 10/100/1000, PRP/HSR"], ["Serial ports", "4 × RS-485/232"], ["Power supply", "24–220 V DC/AC"], ["Operating temp.", "-25 °C to +70 °C"]],
    tr: {
      short: "Orta gerilim hücre entegrasyonu ve şebeke kararlılığı için IEC 61850 uyumlu gateway.",
      overview: "Koruma rölelerini, sayaçları ve hücreleri tek bir IEC 61850 veri modeli altında birleştiren dayanıklı gateway; kontrol merkezine uzaktan kumanda ve güvenli telemetri sağlar.",
      features: [
        "IEC 61850 MMS / GOOSE istemci ve sunucu",
        "Protokol dönüşümü: Modbus, DNP3, IEC 104",
        "Otomatik tekrar kapama şemaları için gömülü mantık",
        "IEC 62351 siber güvenlik ve rol tabanlı erişim",
        "Web tabanlı yapılandırma ve teşhis",
      ],
      specs: [["Protokoller", "IEC 61850, IEC 60870-5-101/104, DNP3, Modbus"], ["Ethernet portları", "4 × 10/100/1000, PRP/HSR"], ["Seri portlar", "4 × RS-485/232"], ["Besleme", "24–220 V DC/AC"], ["Çalışma sıcaklığı", "-25 °C ile +70 °C"]],
    },
  },
  {
    id: "omnisafe-arc",
    category: "omnisafe",
    title: "Fast Arc Flash Detection & Protection System",
    subtitleTr: "Hızlı Ark Algılama ve Koruma Sistemi",
    short: "Ultra-fast optical sensor protection to safeguard field crews from distribution cabinet hazards.",
    overview: "Optical point and fibre sensors detect the light of an arc flash and, combined with overcurrent supervision, trip the upstream breaker in under 2 ms — dramatically reducing incident energy.",
    tags: ["< 2 ms Trip", "Optical Sensors", "Personnel Safety"],
    tagsTr: ["< 2 ms Açma", "Optik Sensörler", "Personel Güvenliği"],
    features: [
      "Light + current dual-criteria tripping",
      "Point and loop fibre optic sensor options",
      "Self-supervision of sensors and wiring",
      "Selective zone tripping for large switchboards",
      "Event logging with timestamp",
    ],
    specs: [["Trip time", "< 2 ms (light only), < 7 ms (light + I)"], ["Sensor channels", "Up to 10 per unit, expandable"], ["Light threshold", "8,000 – 25,000 lux adjustable"], ["Outputs", "4 × high-speed trip relays"], ["Standards", "IEC 60255, IEC 61000"]],
    tr: {
      short: "Saha ekiplerini dağıtım panosu tehlikelerinden koruyan ultra hızlı optik sensörlü koruma.",
      overview: "Optik nokta ve fiber sensörler ark ışığını algılar ve aşırı akım denetimiyle birlikte üst kesiciyi 2 ms'den kısa sürede açarak olay enerjisini büyük ölçüde azaltır.",
      features: [
        "Işık + akım çift kriterli açma",
        "Nokta ve döngü fiber optik sensör seçenekleri",
        "Sensör ve kabloların kendi kendini denetlemesi",
        "Büyük panolar için seçici bölge açma",
        "Zaman damgalı olay kaydı",
      ],
      specs: [["Açma süresi", "< 2 ms (yalnız ışık), < 7 ms (ışık + I)"], ["Sensör kanalları", "Ünite başına 10'a kadar, genişletilebilir"], ["Işık eşiği", "8.000 – 25.000 lüks ayarlanabilir"], ["Çıkışlar", "4 × yüksek hızlı açma rölesi"], ["Standartlar", "IEC 60255, IEC 61000"]],
    },
  },
  {
    id: "omnisafe-remote-trip",
    category: "omnisafe",
    title: "Remote Switch & Pushbutton System",
    subtitleTr: "Uzak Buton Sistemi",
    short: "Wireless and remote breaker tripping system ensuring technician safety outside blast zones.",
    overview: "Lets technicians open, close or trip circuit breakers from a safe distance using a wired pendant or encrypted wireless handset — keeping personnel outside the arc flash boundary.",
    tags: ["Wireless", "Encrypted", "Breaker Control"],
    tagsTr: ["Kablosuz", "Şifreli", "Kesici Kontrolü"],
    features: [
      "Wireless operation up to 100 m line of sight",
      "AES-128 encrypted command link",
      "Two-step confirmation to prevent mis-operation",
      "Universal adapters for major breaker brands",
      "Battery status and link health indicators",
    ],
    specs: [["Range", "Up to 100 m (wireless), 30 m (cable)"], ["Frequency", "868 MHz ISM"], ["Handset battery", "Li-ion, > 1,000 operations"], ["Coil drive", "24 – 220 V DC"], ["Enclosure", "IP54 handset"]],
    tr: {
      short: "Teknisyenlerin patlama bölgesi dışında güvenliğini sağlayan kablosuz ve uzaktan kesici açma sistemi.",
      overview: "Teknisyenlerin kablolu kumanda veya şifreli kablosuz el ünitesiyle kesicileri güvenli mesafeden açıp kapatmasını sağlar — personeli ark sınırının dışında tutar.",
      features: [
        "100 m'ye kadar görüş hattında kablosuz kullanım",
        "AES-128 şifreli komut bağlantısı",
        "Hatalı işlemi önleyen iki adımlı onay",
        "Önde gelen kesici markaları için evrensel adaptörler",
        "Pil durumu ve bağlantı sağlığı göstergeleri",
      ],
      specs: [["Menzil", "100 m'ye kadar (kablosuz), 30 m (kablolu)"], ["Frekans", "868 MHz ISM"], ["El ünitesi pili", "Li-ion, > 1.000 işlem"], ["Bobin sürme", "24 – 220 V DC"], ["Muhafaza", "IP54 el ünitesi"]],
    },
  },
  {
    id: "omnidetect-cable-fault",
    category: "omnidetect",
    title: "Underground Cable Fault Locator",
    subtitleTr: "Yeraltı Kablo Arıza Tespit Cihazı",
    short: "Pinpoints MV and HV cable degradation, insulation breakdown and acoustic thumper location.",
    overview: "An integrated pre-location and pinpointing system combining TDR, arc reflection and surge generation with an acoustic-magnetic receiver for precise fault localisation in buried cables.",
    tags: ["TDR", "Surge Generator", "Acoustic Pinpoint", "MV / HV"],
    tagsTr: ["TDR", "Darbe Jeneratörü", "Akustik Nokta Tespiti", "OG / YG"],
    features: [
      "TDR, ARM and ICE pre-location methods",
      "Surge (thumper) generator up to 32 kV",
      "Acoustic-magnetic pinpointing receiver",
      "Cable route and depth tracing",
      "Report generation with GPS tagging",
    ],
    specs: [["Test voltage", "0 – 32 kV"], ["Surge energy", "Up to 2,000 J"], ["TDR range", "Up to 60 km"], ["Resolution", "0.1 m"], ["Mounting", "Portable or van-installed"]],
    tr: {
      short: "OG ve YG kablo bozulmalarını, izolasyon delinmelerini ve akustik darbe noktasını hassas şekilde tespit eder.",
      overview: "Gömülü kablolarda hassas arıza lokalizasyonu için TDR, ark yansıması ve darbe üretimini akustik-manyetik alıcıyla birleştiren entegre ön konumlama ve nokta tespit sistemi.",
      features: [
        "TDR, ARM ve ICE ön konumlama yöntemleri",
        "32 kV'a kadar darbe (thumper) jeneratörü",
        "Akustik-manyetik nokta tespit alıcısı",
        "Kablo güzergahı ve derinlik takibi",
        "GPS etiketli rapor oluşturma",
      ],
      specs: [["Test gerilimi", "0 – 32 kV"], ["Darbe enerjisi", "2.000 J'a kadar"], ["TDR menzili", "60 km'ye kadar"], ["Çözünürlük", "0,1 m"], ["Montaj", "Portatif veya araç üstü"]],
    },
  },
  {
    id: "omnidetect-thermo-clip",
    category: "omnidetect",
    title: "Thermochromic Early Warning Clips",
    subtitleTr: "Termokromik Klips",
    short: "Passive colour-changing thermal indicators for junctions, busbars and high-load connections.",
    overview: "Maintenance-free clips that permanently change colour when a connection exceeds its threshold temperature — a zero-power visual alarm visible from the ground.",
    tags: ["Passive", "No Power", "Visual Alarm"],
    tagsTr: ["Pasif", "Enerji Gerektirmez", "Görsel Alarm"],
    features: [
      "Irreversible colour change at set threshold",
      "Multiple thresholds: 60, 70, 80, 100 °C",
      "Tool-free installation on conductors & busbars",
      "UV-stabilised polymer for outdoor use",
      "Visible from 10+ m distance",
    ],
    specs: [["Thresholds", "60 / 70 / 80 / 100 °C"], ["Accuracy", "±3 °C"], ["Conductor size", "Ø 8 – 40 mm"], ["Material", "UV-resistant polymer"], ["Service life", "> 10 years"]],
    tr: {
      short: "Ek noktaları, baralar ve yüksek yüklü bağlantılar için pasif, renk değiştiren termal göstergeler.",
      overview: "Bağlantı eşik sıcaklığını aştığında kalıcı olarak renk değiştiren bakım gerektirmeyen klipsler — yerden görülebilen, enerji gerektirmeyen görsel alarm.",
      features: [
        "Ayarlı eşikte geri dönüşsüz renk değişimi",
        "Çoklu eşik: 60, 70, 80, 100 °C",
        "İletken ve baralara aletsiz montaj",
        "Dış mekân için UV stabilize polimer",
        "10+ m mesafeden görülebilir",
      ],
      specs: [["Eşikler", "60 / 70 / 80 / 100 °C"], ["Doğruluk", "±3 °C"], ["İletken çapı", "Ø 8 – 40 mm"], ["Malzeme", "UV dayanımlı polimer"], ["Kullanım ömrü", "> 10 yıl"]],
    },
  },
  {
    id: "omniasset-transformer",
    category: "omniasset",
    title: "Transformer Fleet Health & DGA Monitor",
    subtitleTr: "Transformatör Sağlık ve DGA İzleme",
    short: "Real-time online dissolved gas analysis, moisture detection and insulation life estimation.",
    overview: "An online monitor that measures key fault gases and moisture in transformer oil, combining them with load and temperature data to estimate remaining insulation life.",
    tags: ["Online DGA", "Moisture", "Ageing Model"],
    tagsTr: ["Çevrimiçi DGA", "Nem", "Yaşlanma Modeli"],
    features: [
      "Multi-gas measurement incl. H₂, CO, C₂H₂",
      "Moisture-in-oil and oil temperature",
      "Duval triangle and IEC 60599 diagnostics",
      "Hot-spot and loss-of-life per IEC 60076-7",
      "Alarms via SCADA, e-mail and SMS",
    ],
    specs: [["Gases", "H₂, CO, CO₂, CH₄, C₂H₂, C₂H₄, C₂H₆"], ["Moisture", "0 – 100 ppm"], ["Sampling", "Every 1 hour (configurable)"], ["Interfaces", "IEC 61850, Modbus, DNP3"], ["Operating temp.", "-40 °C to +55 °C"]],
    tr: {
      short: "Gerçek zamanlı çevrimiçi çözünmüş gaz analizi, nem tespiti ve izolasyon ömrü tahmini.",
      overview: "Transformatör yağındaki temel arıza gazlarını ve nemi ölçen, bunları yük ve sıcaklık verileriyle birleştirerek kalan izolasyon ömrünü tahmin eden çevrimiçi izleme cihazı.",
      features: [
        "H₂, CO, C₂H₂ dahil çoklu gaz ölçümü",
        "Yağdaki nem ve yağ sıcaklığı",
        "Duval üçgeni ve IEC 60599 teşhisi",
        "IEC 60076-7'ye göre sıcak nokta ve ömür kaybı",
        "SCADA, e-posta ve SMS ile alarm",
      ],
      specs: [["Gazlar", "H₂, CO, CO₂, CH₄, C₂H₂, C₂H₄, C₂H₆"], ["Nem", "0 – 100 ppm"], ["Örnekleme", "Saatte bir (ayarlanabilir)"], ["Arayüzler", "IEC 61850, Modbus, DNP3"], ["Çalışma sıcaklığı", "-40 °C ile +55 °C"]],
    },
  },
  {
    id: "omniasset-fleet-analytics",
    category: "omniasset",
    title: "Distribution Asset Lifecycle Management Software",
    subtitleTr: "Dağıtım Varlık Yaşam Döngüsü Yazılımı",
    short: "Predictive AI algorithms calculating health index for breakers, switches and power transformers.",
    overview: "A cloud or on-premise platform that unifies inspection, test and online data to compute health and criticality indices, prioritising capital and maintenance spending.",
    tags: ["AI / ML", "Health Index", "CBM", "GIS"],
    tagsTr: ["YZ / ML", "Sağlık İndeksi", "Durum Bazlı Bakım", "CBS"],
    features: [
      "Health & criticality index per asset",
      "Risk matrix and investment prioritisation",
      "Predictive failure models",
      "GIS map view of entire fleet",
      "Work-order integration with ERP/CMMS",
    ],
    specs: [["Deployment", "Cloud or on-premise"], ["Asset types", "Transformers, breakers, RMUs, cables"], ["Integrations", "SCADA, GIS, SAP PM, REST API"], ["Users", "Unlimited, role-based"], ["Language", "Turkish, English"]],
    tr: {
      short: "Kesiciler, ayırıcılar ve güç transformatörleri için sağlık indeksi hesaplayan öngörücü yapay zekâ algoritmaları.",
      overview: "Muayene, test ve çevrimiçi verileri birleştirerek sağlık ve kritiklik indeksleri hesaplayan, yatırım ve bakım harcamalarını önceliklendiren bulut veya yerel platform.",
      features: [
        "Varlık bazında sağlık ve kritiklik indeksi",
        "Risk matrisi ve yatırım önceliklendirme",
        "Öngörücü arıza modelleri",
        "Tüm filonun CBS harita görünümü",
        "ERP/CMMS ile iş emri entegrasyonu",
      ],
      specs: [["Kurulum", "Bulut veya yerel"], ["Varlık türleri", "Transformatörler, kesiciler, RMU'lar, kablolar"], ["Entegrasyonlar", "SCADA, CBS, SAP PM, REST API"], ["Kullanıcılar", "Sınırsız, rol tabanlı"], ["Dil", "Türkçe, İngilizce"]],
    },
  },
  {
    id: "applied-precision-meter-test",
    category: "other-products",
    title: "Applied Precision Meter Test Benches",
    subtitleTr: "Sayaç Ayar ve Kalibrasyon Masası",
    short: "High-precision automated test benches for single and 3-phase meters. Official distributor for TR & Iraq.",
    overview: "Applied Precision test systems automate accuracy testing and calibration of electricity meters for utilities, manufacturers and accredited laboratories.",
    tags: ["Applied Precision", "Calibration", "Official Distributor"],
    tagsTr: ["Applied Precision", "Kalibrasyon", "Resmi Distribütör"],
    features: [
      "Single and three-phase meter testing",
      "Up to 40 positions per bench",
      "Fully automated test sequences",
      "Isolated current transformers per position",
      "Traceable reference standard class 0.02",
    ],
    specs: [["Accuracy class", "0.02 / 0.05"], ["Voltage", "Up to 3 × 480 V"], ["Current", "1 mA – 120 A"], ["Positions", "6 – 40"], ["Territory", "Türkiye & Iraq (AES official)"]],
    tr: {
      short: "Tek ve üç fazlı sayaçlar için yüksek hassasiyetli otomatik test masaları. TR ve Irak resmi distribütörü.",
      overview: "Applied Precision test sistemleri; dağıtım şirketleri, üreticiler ve akredite laboratuvarlar için elektrik sayaçlarının doğruluk testini ve kalibrasyonunu otomatikleştirir.",
      features: [
        "Tek ve üç fazlı sayaç testi",
        "Masa başına 40 pozisyona kadar",
        "Tam otomatik test dizileri",
        "Pozisyon başına izoleli akım trafoları",
        "İzlenebilir 0,02 sınıfı referans standart",
      ],
      specs: [["Doğruluk sınıfı", "0,02 / 0,05"], ["Gerilim", "3 × 480 V'a kadar"], ["Akım", "1 mA – 120 A"], ["Pozisyon", "6 – 40"], ["Bölge", "Türkiye ve Irak (AES resmi)"]],
    },
  },
  {
    id: "vicentinos-insulators",
    category: "other-products",
    title: "Vicentinos Polymeric Insulators & Line Hardware",
    subtitleTr: "Vicentinos Polimer İzolatörler",
    short: "High-performance silicone rubber composite insulators for transmission and distribution lines.",
    overview: "Vicentinos composite insulators combine a fibreglass core with HTV silicone rubber housing for superior pollution performance, light weight and vandal resistance.",
    tags: ["Vicentinos", "Silicone Rubber", "Composite"],
    tagsTr: ["Vicentinos", "Silikon Kauçuk", "Kompozit"],
    features: [
      "Suspension, pin and post insulator types",
      "HTV silicone housing with hydrophobicity recovery",
      "Lightweight, easy installation",
      "High resistance to pollution and vandalism",
      "Complete line hardware and fittings",
    ],
    specs: [["Voltage", "11 kV – 400 kV"], ["Core", "ECR fibreglass rod"], ["Housing", "HTV silicone rubber"], ["Standards", "IEC 61109, IEC 62217"], ["Creepage", "Up to 31 mm/kV"]],
    tr: {
      short: "İletim ve dağıtım hatları için yüksek performanslı silikon kauçuk kompozit izolatörler.",
      overview: "Vicentinos kompozit izolatörler, üstün kirlilik performansı, hafiflik ve vandalizm direnci için fiberglas çekirdeği HTV silikon kauçuk gövdeyle birleştirir.",
      features: [
        "Askı, mesnet ve post izolatör tipleri",
        "Hidrofobiklik geri kazanımlı HTV silikon gövde",
        "Hafif, kolay montaj",
        "Kirlilik ve vandalizme karşı yüksek direnç",
        "Eksiksiz hat donanımı ve bağlantı elemanları",
      ],
      specs: [["Gerilim", "11 kV – 400 kV"], ["Çekirdek", "ECR fiberglas çubuk"], ["Gövde", "HTV silikon kauçuk"], ["Standartlar", "IEC 61109, IEC 62217"], ["Kaçak yolu", "31 mm/kV'a kadar"]],
    },
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const getProduct = (cat: string, id: string) => products.find((p) => p.category === cat && p.id === id);
export const productsIn = (cat: string) => products.filter((p) => p.category === cat);

export const locCategory = (c: Category, lang: Lang) => ({ id: c.id, ...(lang === "tr" ? c.tr : c) });
export const locProduct = (p: Product, lang: Lang) =>
  lang === "tr"
    ? { ...p, ...p.tr, title: p.subtitleTr, subtitle: p.title, tags: p.tagsTr }
    : { ...p, subtitle: p.subtitleTr };

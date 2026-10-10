export type CategoryId = "omnigrid" | "omnisafe" | "omnidetect" | "omniasset" | "other-products";

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
  scope: string[];
}

export interface Product {
  id: string;
  category: CategoryId;
  title: string;
  subtitleTr: string;
  short: string;
  overview: string;
  tags: string[];
  features: string[];
  specs: [string, string][];
}

export const categories: Category[] = [
  {
    id: "omnigrid",
    name: "OMNIGRID",
    tagline: "Grid monitoring & automation",
    description:
      "Real-time visibility for overhead distribution lines and substations — fault location, dynamic line rating and IEC 61850 integration.",
    scope: ["Overhead line monitoring", "Substation automation", "Dynamic line rating", "SCADA integration"],
  },
  {
    id: "omnisafe",
    name: "OMNISAFE",
    tagline: "Operator & equipment safety",
    description:
      "Protection systems that keep field crews out of harm's way — ultra-fast arc flash detection and remote breaker operation.",
    scope: ["Arc flash protection", "Remote tripping", "Blast-zone safety", "Switchgear retrofits"],
  },
  {
    id: "omnidetect",
    name: "OMNIDETECT",
    tagline: "Fault detection & early warning",
    description:
      "Locate underground cable faults precisely and catch thermal hotspots before they become outages.",
    scope: ["Cable fault location", "Insulation diagnostics", "Thermal indicators", "Preventive maintenance"],
  },
  {
    id: "omniasset",
    name: "OMNIASSET",
    tagline: "Asset health & lifecycle analytics",
    description:
      "Online transformer condition monitoring and predictive analytics that extend asset life and optimise maintenance budgets.",
    scope: ["Online DGA", "Health indexing", "Predictive maintenance", "Fleet analytics"],
  },
  {
    id: "other-products",
    name: "Other Products",
    tagline: "Authorized representations",
    description:
      "AES is the official representative of Applied Precision and Vicentinos — world-class meter testing and line insulation solutions.",
    scope: ["Applied Precision (TR & Iraq)", "Vicentinos insulators", "Meter calibration", "Line hardware"],
  },
];

export const products: Product[] = [
  {
    id: "omnigrid-overhead",
    category: "omnigrid",
    title: "Overhead Line Monitoring System",
    subtitleTr: "Havai Hat İzleme Sistemi",
    short: "Real-time fault location, thermal line rating and dynamic sag monitoring for distribution lines.",
    overview:
      "Line-mounted sensors continuously measure current, conductor temperature and sag, streaming data to a central platform that pinpoints faults within seconds and calculates real-time thermal capacity.",
    tags: ["Fault Location", "DLR", "Sag Monitoring", "LoRa / GSM"],
    features: [
      "Fault passage indication with section-level localisation",
      "Dynamic thermal line rating (IEEE 738)",
      "Conductor sag and clearance monitoring",
      "Energy-harvesting, live-line installable sensors",
      "SCADA integration via IEC 60870-5-104 / DNP3",
    ],
    specs: [
      ["Voltage range", "6 kV – 36 kV"],
      ["Current measurement", "0 – 1000 A, ±1%"],
      ["Temperature range", "-40 °C to +125 °C"],
      ["Communication", "LoRaWAN, 4G/LTE"],
      ["Protection class", "IP67"],
    ],
  },
  {
    id: "omnigrid-substation",
    category: "omnigrid",
    title: "Substation Automation & Gateway Unit",
    subtitleTr: "Trafo Merkezi Otomasyon ve Gateway Ünitesi",
    short: "IEC 61850 compatible gateway for medium-voltage switchgear integration and grid stability.",
    overview:
      "A ruggedised gateway that unifies protection relays, meters and switchgear under one IEC 61850 data model, enabling remote control and secure telemetry to the control centre.",
    tags: ["IEC 61850", "RTU", "Cybersecure", "MV Switchgear"],
    features: [
      "IEC 61850 MMS / GOOSE client & server",
      "Protocol conversion: Modbus, DNP3, IEC 104",
      "Embedded logic for automatic reclosing schemes",
      "IEC 62351 cybersecurity and role-based access",
      "Web-based configuration and diagnostics",
    ],
    specs: [
      ["Protocols", "IEC 61850, IEC 60870-5-101/104, DNP3, Modbus"],
      ["Ethernet ports", "4 × 10/100/1000, PRP/HSR"],
      ["Serial ports", "4 × RS-485/232"],
      ["Power supply", "24–220 V DC/AC"],
      ["Operating temp.", "-25 °C to +70 °C"],
    ],
  },
  {
    id: "omnisafe-arc",
    category: "omnisafe",
    title: "Fast Arc Flash Detection & Protection System",
    subtitleTr: "Hızlı Ark Algılama ve Koruma Sistemi",
    short: "Ultra-fast optical sensor protection to safeguard field crews from distribution cabinet hazards.",
    overview:
      "Optical point and fibre sensors detect the light of an arc flash and, combined with overcurrent supervision, trip the upstream breaker in under 2 ms — dramatically reducing incident energy.",
    tags: ["< 2 ms Trip", "Optical Sensors", "Personnel Safety"],
    features: [
      "Light + current dual-criteria tripping",
      "Point and loop fibre optic sensor options",
      "Self-supervision of sensors and wiring",
      "Selective zone tripping for large switchboards",
      "Event logging with timestamp",
    ],
    specs: [
      ["Trip time", "< 2 ms (light only), < 7 ms (light + I)"],
      ["Sensor channels", "Up to 10 per unit, expandable"],
      ["Light threshold", "8,000 – 25,000 lux adjustable"],
      ["Outputs", "4 × high-speed trip relays"],
      ["Standards", "IEC 60255, IEC 61000"],
    ],
  },
  {
    id: "omnisafe-remote-trip",
    category: "omnisafe",
    title: "Remote Switch & Pushbutton System",
    subtitleTr: "Uzak Buton Sistemi",
    short: "Wireless and remote breaker tripping system ensuring technician safety outside blast zones.",
    overview:
      "Lets technicians open, close or trip circuit breakers from a safe distance using a wired pendant or encrypted wireless handset — keeping personnel outside the arc flash boundary.",
    tags: ["Wireless", "Encrypted", "Breaker Control"],
    features: [
      "Wireless operation up to 100 m line of sight",
      "AES-128 encrypted command link",
      "Two-step confirmation to prevent mis-operation",
      "Universal adapters for major breaker brands",
      "Battery status and link health indicators",
    ],
    specs: [
      ["Range", "Up to 100 m (wireless), 30 m (cable)"],
      ["Frequency", "868 MHz ISM"],
      ["Handset battery", "Li-ion, > 1,000 operations"],
      ["Coil drive", "24 – 220 V DC"],
      ["Enclosure", "IP54 handset"],
    ],
  },
  {
    id: "omnidetect-cable-fault",
    category: "omnidetect",
    title: "Underground Cable Fault Locator",
    subtitleTr: "Yeraltı Kablo Arıza Tespit Cihazı",
    short: "Pinpoints MV and HV cable degradation, insulation breakdown and acoustic thumper location.",
    overview:
      "An integrated pre-location and pinpointing system combining TDR, arc reflection and surge generation with an acoustic-magnetic receiver for precise fault localisation in buried cables.",
    tags: ["TDR", "Surge Generator", "Acoustic Pinpoint", "MV / HV"],
    features: [
      "TDR, ARM and ICE pre-location methods",
      "Surge (thumper) generator up to 32 kV",
      "Acoustic-magnetic pinpointing receiver",
      "Cable route and depth tracing",
      "Report generation with GPS tagging",
    ],
    specs: [
      ["Test voltage", "0 – 32 kV"],
      ["Surge energy", "Up to 2,000 J"],
      ["TDR range", "Up to 60 km"],
      ["Resolution", "0.1 m"],
      ["Mounting", "Portable or van-installed"],
    ],
  },
  {
    id: "omnidetect-thermo-clip",
    category: "omnidetect",
    title: "Thermochromic Early Warning Clips",
    subtitleTr: "Termokromik Klips",
    short: "Passive colour-changing thermal indicators for junctions, busbars and high-load connections.",
    overview:
      "Maintenance-free clips that permanently change colour when a connection exceeds its threshold temperature — a zero-power visual alarm visible from the ground.",
    tags: ["Passive", "No Power", "Visual Alarm"],
    features: [
      "Irreversible colour change at set threshold",
      "Multiple thresholds: 60, 70, 80, 100 °C",
      "Tool-free installation on conductors & busbars",
      "UV-stabilised polymer for outdoor use",
      "Visible from 10+ m distance",
    ],
    specs: [
      ["Thresholds", "60 / 70 / 80 / 100 °C"],
      ["Accuracy", "±3 °C"],
      ["Conductor size", "Ø 8 – 40 mm"],
      ["Material", "UV-resistant polymer"],
      ["Service life", "> 10 years"],
    ],
  },
  {
    id: "omniasset-transformer",
    category: "omniasset",
    title: "Transformer Fleet Health & DGA Monitor",
    subtitleTr: "Transformatör Sağlık ve DGA İzleme",
    short: "Real-time online dissolved gas analysis, moisture detection and insulation life estimation.",
    overview:
      "An online monitor that measures key fault gases and moisture in transformer oil, combining them with load and temperature data to estimate remaining insulation life.",
    tags: ["Online DGA", "Moisture", "Ageing Model"],
    features: [
      "Multi-gas measurement incl. H₂, CO, C₂H₂",
      "Moisture-in-oil and oil temperature",
      "Duval triangle and IEC 60599 diagnostics",
      "Hot-spot and loss-of-life per IEC 60076-7",
      "Alarms via SCADA, e-mail and SMS",
    ],
    specs: [
      ["Gases", "H₂, CO, CO₂, CH₄, C₂H₂, C₂H₄, C₂H₆"],
      ["Moisture", "0 – 100 ppm"],
      ["Sampling", "Every 1 hour (configurable)"],
      ["Interfaces", "IEC 61850, Modbus, DNP3"],
      ["Operating temp.", "-40 °C to +55 °C"],
    ],
  },
  {
    id: "omniasset-fleet-analytics",
    category: "omniasset",
    title: "Distribution Asset Lifecycle Management Software",
    subtitleTr: "Dağıtım Varlık Yaşam Döngüsü Yazılımı",
    short: "Predictive AI algorithms calculating health index for breakers, switches and power transformers.",
    overview:
      "A cloud or on-premise platform that unifies inspection, test and online data to compute health and criticality indices, prioritising capital and maintenance spending.",
    tags: ["AI / ML", "Health Index", "CBM", "GIS"],
    features: [
      "Health & criticality index per asset",
      "Risk matrix and investment prioritisation",
      "Predictive failure models",
      "GIS map view of entire fleet",
      "Work-order integration with ERP/CMMS",
    ],
    specs: [
      ["Deployment", "Cloud or on-premise"],
      ["Asset types", "Transformers, breakers, RMUs, cables"],
      ["Integrations", "SCADA, GIS, SAP PM, REST API"],
      ["Users", "Unlimited, role-based"],
      ["Language", "Turkish, English"],
    ],
  },
  {
    id: "applied-precision-meter-test",
    category: "other-products",
    title: "Applied Precision Meter Test Benches",
    subtitleTr: "Sayaç Ayar ve Kalibrasyon Masası",
    short: "High-precision automated test benches for single and 3-phase meters. Official distributor for TR & Iraq.",
    overview:
      "Applied Precision test systems automate accuracy testing and calibration of electricity meters for utilities, manufacturers and accredited laboratories.",
    tags: ["Applied Precision", "Calibration", "Official Distributor"],
    features: [
      "Single and three-phase meter testing",
      "Up to 40 positions per bench",
      "Fully automated test sequences",
      "Isolated current transformers per position",
      "Traceable reference standard class 0.02",
    ],
    specs: [
      ["Accuracy class", "0.02 / 0.05"],
      ["Voltage", "Up to 3 × 480 V"],
      ["Current", "1 mA – 120 A"],
      ["Positions", "6 – 40"],
      ["Territory", "Türkiye & Iraq (AES official)"],
    ],
  },
  {
    id: "vicentinos-insulators",
    category: "other-products",
    title: "Vicentinos Polymeric Insulators & Line Hardware",
    subtitleTr: "Vicentinos Polimer İzolatörler",
    short: "High-performance silicone rubber composite insulators for transmission and distribution lines.",
    overview:
      "Vicentinos composite insulators combine a fibreglass core with HTV silicone rubber housing for superior pollution performance, light weight and vandal resistance.",
    tags: ["Vicentinos", "Silicone Rubber", "Composite"],
    features: [
      "Suspension, pin and post insulator types",
      "HTV silicone housing with hydrophobicity recovery",
      "Lightweight, easy installation",
      "High resistance to pollution and vandalism",
      "Complete line hardware and fittings",
    ],
    specs: [
      ["Voltage", "11 kV – 400 kV"],
      ["Core", "ECR fibreglass rod"],
      ["Housing", "HTV silicone rubber"],
      ["Standards", "IEC 61109, IEC 62217"],
      ["Creepage", "Up to 31 mm/kV"],
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const getProduct = (cat: string, id: string) =>
  products.find((p) => p.category === cat && p.id === id);
export const productsIn = (cat: string) => products.filter((p) => p.category === cat);

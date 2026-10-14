# Omni Solution Vault

Build a comprehensive, multi-page corporate web application for "AES Akıllı Enerji Sistemleri" (AES Energy) using React, React Router, Tailwind CSS, and Lucide Icons.

Do NOT build a single-page landing site. Implement a fully routed, deep multi-page application with real data, real categories, and dedicated product detail views.

==================================================
1. DESIGN & BRAND IDENTITY
==================================================
- Background: Clean white (#FFFFFF) and very light gray/slate (#F8FAFC) backgrounds. Avoid dark mode layouts.
- Primary Colors: AES Corporate Electric Blue (#0066CC / #0284C7) for buttons, badges, and accents; Deep Navy (#0B192C / #0F172A) for headers, navbar, and footer.
- Typography: High contrast, clean corporate hierarchy (Inter / Sans-serif).
- Cards & Badges: Subtle borders (slate-200), smooth hover elevations, modern technical badge tags.

==================================================
2. COMPLETE MULTI-PAGE ROUTING ARCHITECTURE
==================================================
Implement React Router with these exact accessible routes:
- `/` -> Homepage
- `/about` -> About Us & Corporate Profile
- `/products` -> All Products & Solutions Catalog
- `/products/omnigrid` -> OMNIGRID Family Page
- `/products/omnisafe` -> OMNISAFE Family Page
- `/products/omnidetect` -> OMNIDETECT Family Page
- `/products/omniasset` -> OMNIASSET Family Page
- `/products/other-products` -> Authorized Representations & Other Products (Applied Precision & Vicentinos)
- `/products/:category/:productId` -> Dedicated Individual Product Detail Page
- `/quality` -> Quality, Environment & Safety Policies
- `/contact` -> Contact Page with Form & Location Info

==================================================
3. EMBEDDED PRODUCT DATABASE (`src/data/products.ts`)
==================================================
Create a centralized TypeScript dataset containing the following verified AES Energy products:

[OMNIGRID]
1. `omnigrid-overhead`: Overhead Line Monitoring System (Havai Hat İzleme Sistemi)
   - Real-time fault location, thermal line rating, and dynamic sag monitoring for distribution lines.
2. `omnigrid-substation`: Substation Automation & Gateway Unit
   - IEC 61850 compatible gateway for medium voltage switchgear integration and grid stability.

[OMNISAFE]
3. `omnisafe-arc`: Fast Arc Flash Detection & Protection System
   - Ultra-fast optical sensor protection to safeguard field crew from distribution cabinet hazards.
4. `omnisafe-remote-trip`: Remote Switch & Pushbutton System (Uzak Buton)
   - Wireless and remote breaker tripping system ensuring technician safety outside blast zones.

[OMNIDETECT]
5. `omnidetect-cable-fault`: Underground Cable Fault Locator (Yeraltı Kablo Arıza Tespit Cihazı)
   - Pinpoints medium and high-voltage cable degradation, insulation breakdown, and acoustic thumper location.
6. `omnidetect-thermo-clip`: Thermochromic Early Warning Clips (Termokromik Klips)
   - Passive color-changing thermal indicators for junction points, busbars, and high-load connections.

[OMNIASSET]
7. `omniasset-transformer`: Transformer Fleet Health & DGA Monitor
   - Real-time online dissolved gas analysis, moisture detection, and insulation life estimation.
8. `omniasset-fleet-analytics`: Distribution Asset Lifecycle Management Software
   - Predictive AI algorithms calculating health index for breakers, switches, and power transformers.

[OTHER PRODUCTS / AUTHORIZED PARTNERS]
9. `applied-precision-meter-test`: Applied Precision Meter Test Benches (Sayaç Ayar ve Kalibrasyon Masası)
   - High-precision automated test benches for single and 3-phase electricity meters (Official Distributor for TR & Iraq).
10. `vicentinos-insulators`: Vicentinos Polymeric Insulators & Line Hardware
   - High-performance silicone rubber composite insulators for power transmission and distribution lines.

==================================================
4. PAGE SPECIFICATIONS & INTERACTIONS
==================================================
1. NAVBAR:
   - AES Energy logo with blue energy glyph.
   - Links: Home, About, Products (Dropdown menu linking to: OMNIGRID, OMNISAFE, OMNIDETECT, OMNIASSET, Other Products), Quality & Environment, Contact.
   - TR / EN language toggle button.
   - "Get a Quote" action button leading to `/contact`.
   - Mobile responsive drawer menu.

2. HOMEPAGE (`/`):
   - Hero section: "Next Generation Smart Grid & Energy Reliability", tagline, CTA buttons ("Explore Omni Family", "Contact Sales").
   - Omni Family Interactive Grid: Cards for OMNIGRID, OMNISAFE, OMNIDETECT, OMNIASSET with short summaries and "Discover" links.
   - Featured Technical Metrics (e.g. 99.9% Grid Uptime, 10,000+ Monitored Points, Field Tested).
   - Official Representations Showcase: Highlighting partnerships with Applied Precision & Vicentinos.
   - Direct CTA section leading to `/contact`.

3. CATEGORY PAGES (`/products/:category`):
   - Hero banner with the specific category description and scope.
   - Filterable/sortable grid of products belonging to this category.
   - Each card contains: Product title, bilingual subtitle, short description, technical tags, and "View Product Details" button navigating to `/products/:category/:productId`.

4. DEDICATED PRODUCT DETAIL PAGE (`/products/:category/:productId`):
   - Breadcrumb navigation: `Home > Products > [Category] > [Product Name]`.
   - Product showcase layout: Left column contains high-tech schematic placeholder imagery with download datasheet button; Right column contains overview, full key features list, and technical specification table.
   - "Inquire About This Product" button opening an inquiry modal or jumping to an inquiry form pre-filled with the product title.
   - Related products carousel from the same category family.

5. ABOUT PAGE (`/about`):
   - Founded in 2019 with over 20+ years of cumulative electrical engineering and energy distribution experience.
   - Mission, Vision, and R&D focus on reducing power outages and enhancing operator safety.

6. CONTACT PAGE (`/contact`):
   - Real Address: AC Moment Istanbul B-213, 34880 Kartal / İstanbul, Türkiye.
   - Real Phone: +90 216 504 6570 | Email: info@aesenergy.com.tr
   - Interactive contact form (Name, Company, Email, Phone, Product of Interest dropdown, Message).
   - Embedded Google Map view for Kartal / Istanbul.

==================================================
5. CRITICAL LOGICAL CONSTRAINTS
==================================================
- Ensure all deep links work directly without 404s when refreshed.
- Use distinct page components; do not concatenate all subpages into home page scroll anchors.
- Clean TypeScript code, accessible buttons, and consistent margins across all views.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2ee08d4e-2540-5802-80dc-07574e32c6d6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

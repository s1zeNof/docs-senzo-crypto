# 📚 Senzo Documentation Platform (`docs.senzolab.xyz`)

> Official engineering knowledge base for the **Senzo Lab**, **Senzo Node Network (SNN)**, and **Launch OS** ecosystem.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Status-Live%20on%20Vercel-success)](https://docs.senzolab.xyz)

---

## 🌟 Architecture & Key Features

- **⚡ Blazing Fast Static Site Generation (SSG):** 100% of pages are pre-rendered into static HTML during build (first load JS is only ~106 kB). Loads in under 0.2s globally via Vercel Edge Network.
- **🌐 100% English Technical Standard:** All articles, navigation labels, and code guides adhere to international Web3 engineering standards.
- **🏷️ Versioning & Update Metadata:** Every article tracks its version (`v1.0.0`, `v1.1.0`), date (`lastUpdated`), update notes (`updateNote`), and status badges (`HOT`, `CORE`, `NEW`, `UPD`).
- **🔍 Instant Global Search (`Cmd + K`):** Built-in modal search across all articles, sections, and code snippets.
- **📑 Dynamic Table of Contents:** Right sticky sidebar with real-time scroll-spy highlighting active sections.
- **💻 Interactive Code Blocks & 1-Click Launchers:** Copyable snippets, terminal output previews, and downloadable standalone launchers (`senzo-worker.bat` for Windows and `senzo-worker.sh` for Linux/macOS).
- **🛡️ Clean Brand Isolation:** External repository links removed from client-facing UI; direct navigation to `senzolab.xyz`, Operator Hub, and Launchpad.

---

## 📂 Article Directory & Slugs

```text
docs.senzolab.xyz/
├── 🌐 /nodes/                 # Senzo Node Network (SNN) — DePIN
│   ├── /quickstart            # Step-by-step PC Worker launch in under 60 seconds
│   ├── /overview              # DePIN architecture, Non-Custodial security & dual tiers
│   ├── /claim                 # 6-digit cryptographic Claim Code (SNZ-XXXXXX) flow
│   ├── /capsule-observers     # Dedicated token observer mode (--project <slug>)
│   ├── /providers             # High-throughput Tier-1 TON RPC Provider nodes
│   └── /rewards               # 80% subscription reward pool economics & withdrawals
│
├── 🚀 /launchpad/             # Launch OS & Capsule Center
│   ├── /architecture          # Modular Project Capsule (Token, TMA, Quests, Observers)
│   ├── /bonding-curves        # Deterministic bonding curves & 100% anti-rugpull guarantees
│   └── /dex-migration         # Autonomous liquidity graduation to DeDust & STON.fi
│
└── ⚡ /developers/            # Developers & API Reference
    ├── /rest-api              # REST endpoints for OHLCV candles & node telemetry
    ├── /smart-contracts       # TON Jetton TEP-74 contract architecture
    └── /identity-bridge       # Cross-App SSO Session Bridge (HMAC-SHA256)
```

---

## 🛠️ Management via Senzo Admin

Documentation articles can be inspected, edited, and expanded directly through **Senzo Admin** (`d:\My IT Projects\senzo-crypto\senzo-admin`):
- Navigation: sidebar divider **`DOCS SENZO CRYPTO`** -> **`Senzo Docs Hub`** (`/docs`).
- Inspect any article's full content, code snippets, callouts, and tables.
- Edit metadata, versions, and update notes with local persistence.
- Create new articles and export updated structures directly into `src/data/docsData.ts`.

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (SSG)
npm run build
```

---

*Senzo Ecosystem Core Engineering · 2026*

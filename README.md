# 📚 Senzo Documentation Platform (`docs.senzolab.xyz`)

> Офіційний інженерний портал технічної документації екосистеми **Senzo Lab**, **Senzo Node Network (SNN)** та **Launch OS**.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 🌟 Архітектура та можливості

- **⚡ Blazing Fast SSG:** 100% сторінок генеруються у статичний HTML під час збірки (бандл лише ~106 kB). Завантаження сторінки займає менше 0.2 секунди по всьому світу через Vercel Edge Network.
- **🏷️ Метадані версій та оновлень (UPD & Dates):** Кожна стаття містить версію (`v1.0.0`), дату останнього оновлення (`lastUpdated: 2026-09-24`), примітку про зміни (`updateNote`) та бейджі (`HOT`, `CORE`, `NEW`, `UPD`).
- **🔍 Миттєвий глобальний пошук:** Підтримка гарячих клавіш `Cmd+K` / `Ctrl+K` для швидкого переходу між статтями, кодом та розділами.
- **📑 Dynamic Table of Contents (Зміст):** Права колонка автоматично відстежує позицію скролу користувача та підсвічує активні підрозділи з прямими якірними посиланнями (`#anchor`).
- **💻 Інтерактивні блоки коду:** Підсвітка синтаксису, копіювання в 1 клік та підтримка завантаження `.BAT` (Windows) та `.SH` (Linux/Mac) файлів.

---

## 📂 Структура розділів

```text
docs.senzolab.xyz/
├── 🌐 /nodes/                 # Senzo Node Network (SNN) — DePIN
│   ├── /quickstart            # Покроковий запуск Worker-ноди на домашньому ПК
│   ├── /overview              # Архітектура DePIN та Non-Custodial модель
│   ├── /claim                 # Прив'язка ноди за 6-значним Claim Code
│   ├── /capsule-observers     # Режим спостерігача для токен-капсул (--project)
│   ├── /providers             # Високошвидкісні Provider ноди для TON RPC
│   └── /rewards               # Економіка винагород (80% пулу) та виплати
│
├── 🚀 /launchpad/             # Launch OS & Capsule Center
│   ├── /architecture          # Модульна концепція Project Capsule
│   ├── /bonding-curves        # Математика бондинг-кривих та захист від rugpull
│   └── /dex-migration         # Автоматичний лістинг ліквідності на DeDust / STON.fi
│
└── ⚡ /developers/            # Розробникам & Смарт-контракти
    ├── /rest-api              # Публічні REST ендпоінти та ліміти
    ├── /smart-contracts       # Смарт-контракти TON Jetton TEP-74
    └── /identity-bridge       # Cross-App SSO зв'язування сесій
```

---

## 🛠️ Як додати нову статтю або оновити наявну

Уся документація централізовано описана в [`src/data/docsData.ts`](./src/data/docsData.ts).

### Приклад додавання / оновлення статті:

```typescript
'nodes/my-new-guide': {
  slug: 'nodes/my-new-guide',
  section: 'Senzo Node Network (SNN)',
  sectionId: 'snn-nodes',
  title: 'Назва статті',
  description: 'Короткий опис для пошуковиків та прев\'ю',
  version: 'v1.1.0',                     // Версія
  lastUpdated: '2026-09-24',             // Дата оновлення
  updateNote: 'UPD: Опис того, що змінено', // Опціональна плашка змін
  badge: 'NEW',                          // 'NEW' | 'UPD' | 'HOT' | 'CORE'
  readingTimeMinutes: 3,
  content: {
    lead: 'Вступний абзац жирним шрифтом...',
    sections: [
      {
        id: 'step-1',                    // Якір для змісту (#step-1)
        title: '1. Перший крок',
        body: ['Текст інструкції...'],
        codeSnippet: {
          code: 'npm run node:worker',
          lang: 'bash',
          filename: 'terminal'
        },
        callout: {
          type: 'security',              // 'info' | 'warning' | 'success' | 'security'
          title: 'Безпека',
          text: 'Важливе застереження...'
        }
      }
    ]
  }
}
```

---

## 🚀 Локальний запуск та розробка

```bash
# Встановлення залежностей
npm install

# Запуск локального dev-сервера (порт 3005)
npm run dev

# Збірка для продакшну
npm run build

# Локальний попередній перегляд зібраного сайту
npm run start
```

---

## 🌐 Розгортання на Vercel (`docs.senzolab.xyz`)

1. Імпортуйте репозиторій `https://github.com/s1zeNof/docs-senzo-crypto` у ваш акаунт [Vercel](https://vercel.com).
2. Framework Preset: **Next.js** (визначається автоматично).
3. Після деплою у вкладці **Settings → Domains** додайте:
   - `docs.senzolab.xyz`
4. У вашому DNS (Cloudflare / Namecheap тощо) додайте CNAME запис:
   - **Type:** `CNAME`
   - **Name:** `docs`
   - **Target:** `cname.vercel-dns.com` (або IP `76.76.21.21`)

---

© 2026 Senzo Lab. Open-Source Web3 Documentation.

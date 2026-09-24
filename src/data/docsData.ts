export interface DocArticle {
  slug: string; // e.g. "nodes/quickstart"
  section: string;
  sectionId: string;
  title: string;
  description: string;
  version: string;
  lastUpdated: string;
  updateNote?: string;
  badge?: 'NEW' | 'UPD' | 'CORE' | 'HOT';
  readingTimeMinutes: number;
  content: {
    lead: string;
    sections: {
      id: string;
      title: string;
      body: string[];
      codeSnippet?: {
        code: string;
        lang: string;
        filename?: string;
      };
      callout?: {
        type: 'info' | 'warning' | 'success' | 'security';
        title?: string;
        text: string;
      };
      downloads?: {
        title: string;
        filename: string;
        url: string;
        os: 'windows' | 'linux' | 'universal';
        description: string;
      }[];
      table?: {
        headers: string[];
        rows: string[][];
      };
    }[];
  };
  prevSlug?: string;
  nextSlug?: string;
}

export interface NavSection {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: {
    slug: string;
    title: string;
    badge?: 'NEW' | 'UPD' | 'CORE' | 'HOT';
    version?: string;
  }[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'snn-nodes',
    title: 'Senzo Node Network (SNN)',
    description: 'DePIN інфраструктура, запуск нод та винагороди операторів',
    iconName: 'Server',
    items: [
      { slug: 'nodes/quickstart', title: 'Швидкий старт: Нода на ПК', badge: 'HOT', version: 'v1.0.0' },
      { slug: 'nodes/overview', title: 'Огляд DePIN архітектури', badge: 'CORE', version: 'v1.0.0' },
      { slug: 'nodes/claim', title: "Прив'язка ноди за кодом", version: 'v1.0.0' },
      { slug: 'nodes/capsule-observers', title: 'Обсервери для капсул', badge: 'NEW', version: 'v1.1.0' },
      { slug: 'nodes/providers', title: 'Provider ноди для TON RPC', version: 'v1.0.0' },
      { slug: 'nodes/rewards', title: 'Винагороди та виплати (80%)', badge: 'UPD', version: 'v1.0.2' },
    ],
  },
  {
    id: 'launchpad',
    title: 'Launch OS & Capsule Center',
    description: 'Створення токен-капсул, бондинг-криві та токеноміка',
    iconName: 'Rocket',
    items: [
      { slug: 'launchpad/architecture', title: 'Концепція Project Capsule', badge: 'CORE', version: 'v2.0.0' },
      { slug: 'launchpad/bonding-curves', title: 'Математика бондинг-кривих', version: 'v1.5.0' },
      { slug: 'launchpad/dex-migration', title: 'Міграція на DeDust & STON.fi', version: 'v1.2.0' },
    ],
  },
  {
    id: 'developers',
    title: 'Розробникам & API',
    description: 'Публічні інтерфейси, смарт-контракти та SDK',
    iconName: 'Code',
    items: [
      { slug: 'developers/rest-api', title: 'REST API & Аутентифікація', version: 'v1.0.0' },
      { slug: 'developers/smart-contracts', title: 'Смарт-контракти TON Jetton', version: 'v1.0.0' },
      { slug: 'developers/identity-bridge', title: 'Cross-App Identity Bridge', version: 'v1.0.0' },
    ],
  },
];

export const DOC_ARTICLES: Record<string, DocArticle> = {
  'nodes/quickstart': {
    slug: 'nodes/quickstart',
    section: 'Senzo Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Швидкий старт: запуск Worker-ноди на домашньому ПК',
    description: 'Покроковий гайд із запуску децентралізованого воркера на Windows, macOS або Linux менш ніж за 60 секунд.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    updateNote: 'UPD: Додано автономні 1-Click .BAT та .SH лаунчери з автоматичним завантаженням залежностей',
    badge: 'HOT',
    readingTimeMinutes: 2,
    prevSlug: 'nodes/overview',
    nextSlug: 'nodes/claim',
    content: {
      lead: 'Worker-нода Senzo — це легкий клієнтський демон, який здійснює незалежну перевірку доступності смарт-контрактів, пінгує RPC вузли мережі TON та валідує стан Telegram Mini Apps. Для запуску не потрібні виділені сервери — достатньо звичайного домашнього ПК або ноутбука.',
      sections: [
        {
          id: 'requirements',
          title: '1. Системні вимоги',
          body: [
            'Worker розроблено з акцентом на мінімальне споживання ресурсів. Демон працює у фоновому режимі та не навантажує відеокарту чи процесор під час щоденної роботи за комп\'ютером.',
          ],
          table: {
            headers: ['Параметр', 'Мінімальні вимоги', 'Рекомендовано'],
            rows: [
              ['Процесор', '2 ядра (будь-який Intel / AMD / Apple Silicon)', '4+ ядер'],
              ['Оперативна пам\'ять', '100 МБ вільної RAM', '250 МБ RAM'],
              ['Дисковий простір', '50 МБ вільного місця', '100 МБ'],
              ['Операційна система', 'Windows 10/11, macOS 12+, Ubuntu 20.04+', 'Будь-яка сучасна ОС'],
              ['Середовище', 'Node.js v18 або новіша версія', 'Node.js v20 LTS / v22'],
            ],
          },
          callout: {
            type: 'security',
            title: 'Абсолютна безпека (100% Non-Custodial)',
            text: 'Worker генерує виключно тимчасовий Ed25519 ключ для підпису власних пінгів (телеметрії). Скрипт ніколи не запитує мнемонічні фрази, секретні паролі чи приватні ключі гаманців. Ваші цифрові активи в цілковитій безпеці.',
          },
        },
        {
          id: 'one-click-launch',
          title: '2. Спосіб №1: Запуск через 1-Click файл (Найпростіший)',
          body: [
            'Якщо ви не хочете вводити команди в консолі, завантажте готовий файл запуску для вашої операційної системи. Файл автоматично перевірить наявність Node.js та запустить ноду.',
          ],
          downloads: [
            {
              title: 'Windows 1-Click Launcher',
              filename: 'senzo-worker.bat',
              url: '/downloads/senzo-worker.bat',
              os: 'windows',
              description: 'Для Windows 10 / 11. Просто двічі клікніть після завантаження.',
            },
            {
              title: 'Linux / macOS Shell Script',
              filename: 'senzo-worker.sh',
              url: '/downloads/senzo-worker.sh',
              os: 'linux',
              description: 'Для macOS та Ubuntu/Debian. Запуск: bash senzo-worker.sh',
            },
          ],
        },
        {
          id: 'cli-launch',
          title: '3. Спосіб №2: Запуск через термінал (Консоль)',
          body: [
            'Якщо ви маєте клонований репозиторій або запускаєте воркер у терміналі VS Code чи PowerShell, виконайте одну з команд:',
          ],
          codeSnippet: {
            lang: 'bash',
            filename: 'terminal',
            code: `# Варіант А: Якщо ви в папці репозиторію senzo-crypto або senzo-explorer:
npm run node:worker

# Варіант Б: Прямий виклик через Node.js:
node scripts/senzo-worker.cjs

# Варіант В: Запуск як спостерігача для конкретної капсули токена:
node scripts/senzo-worker.cjs --project my-token-slug`,
          },
        },
        {
          id: 'terminal-output',
          title: '4. Що відбувається після запуску',
          body: [
            'Після запуску скрипт протестує ваші ядра процесора, обсяг RAM та затримку до публічних Liteserver TON (цільовий показник: менше 35–100 мс).',
            'Після цього в терміналі з\'явиться велика рамка з вашим унікальним кодом прив\'язки:',
          ],
          codeSnippet: {
            lang: 'text',
            filename: 'Console Output Preview',
            code: `==============================================================
   🚀 SENZO NODE NETWORK (SNN) — COMMUNITY WORKER DAEMON v1.0 
==============================================================
🔍 Benchmarking host hardware & network...
 • Hardware: 12th Gen Intel Core i5-12400F (12 Cores)
 • Memory: 15.8 GB RAM (Free: 9.4 GB)
 • Platform: win32 (x64) on DESKTOP-PC
 • TON Liteserver Latency: 28 ms (Sub-35ms benchmark passed)
--------------------------------------------------------------
📡 Registering node in Senzo Node Network...
✅ Node registered successfully!

==============================================================
   🔑 YOUR CLAIM CODE:   SNZ-5PG54A 
--------------------------------------------------------------
   👉 Open https://senzolab.xyz/app/nodes
   👉 Click "Клейм за кодом" (Claim Node)
   👉 Enter code: SNZ-5PG54A
==============================================================

⏳ Waiting for operator to claim this node... (Heartbeats active)`,
          },
        },
        {
          id: 'next-steps',
          title: '5. Прив\'язка ноди до вашого кабінету',
          body: [
            'Скопіюйте згенерований 6-значний код (наприклад, SNZ-5PG54A).',
            'Перейдіть у кабінет оператора за адресою https://senzolab.xyz/app/nodes.',
            'Натисніть кнопку «Клейм за кодом», вставте код та надайте ноді будь-яку зручну назву (наприклад, "Home Ryzen PC").',
            'Одразу після клейму ви отримаєте +100 Welcome SNN Points, а статус ноди зміниться на Online.',
          ],
          callout: {
            type: 'info',
            title: 'Чи потрібно тримати термінал відкритим?',
            text: 'Так! Нода активна доти, доки працює вікно консолі або фоновий процес. Ви можете згорнути термінал у трей і продовжувати займатися своїми справами. Якщо ви вимкнете ПК, нода перейде в статус degraded/offline, а після повторного запуску автоматично відновить зв\'язок.',
          },
        },
      ],
    },
  },

  'nodes/overview': {
    slug: 'nodes/overview',
    section: 'Senzo Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Огляд мережі Senzo Node Network (SNN)',
    description: 'Архітектура децентралізованого інфраструктурного шару (DePIN), що з\'єднує senzolab.xyz та launch.senzolab.xyz.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    badge: 'CORE',
    readingTimeMinutes: 3,
    prevSlug: undefined,
    nextSlug: 'nodes/quickstart',
    content: {
      lead: 'Senzo Node Network (SNN) — це децентралізована мережа операторів, створена для незалежного моніторингу аптайму, аудиту бондинг-кривих, індексації подій смарт-контрактів TON та захисту користувачів від інфраструктурних збоїв.',
      sections: [
        {
          id: 'why-depin',
          title: '1. Навіщо потрібна децентралізована мережа спостерігачів?',
          body: [
            'У традиційних лаунчпадах та Web3-платформах перевірка працездатності здійснюється одним централізованим сервером. Якщо сервер перевантажений або піддається DDoS-атаці, користувачі не можуть торгувати або відкривати Telegram Mini Apps.',
            'Senzo вирішує це через DePIN (Decentralized Physical Infrastructure Network): сотні незалежних комп\'ютерів по всьому світу паралельно пінгують контракти і API. Досягається консенсус перевірки стану 24/7.',
          ],
        },
        {
          id: 'two-tiers',
          title: '2. Два рівні мережі: Workers та Providers',
          body: [
            'Мережа SNN складається з двох спеціалізованих типів вузлів:',
          ],
          table: {
            headers: ['Характеристика', 'Worker Node (Легкий воркер)', 'Provider Node (RPC Провайдер)'],
            rows: [
              ['Призначення', 'Перевірка аптайму TMA, пінг RPC, моніторинг капсул', 'Високошвидкісний TON Liteserver, приватні RPC запити'],
              ['Залізо', 'Будь-який ПК/ноутбук (2+ ядра, 100MB RAM)', 'Виділений сервер (8-16 vCPU, 32GB RAM, NVMe)'],
              ['Мережа', 'Звичайний домашній інтернет', '1 Gbps статичний IP канал (sub-35ms)'],
              ['Нагороди', 'SNN Points + частка фонду підписок', 'Підвищений множник (до 3.5x) у TON/USDT'],
            ],
          },
        },
        {
          id: 'snn-economics',
          title: '3. Економічний зв\'язок з Launchpad',
          body: [
            'Кожен проєкт токен-капсули на launch.senzolab.xyz сплачує щомісячний внесок за захист своєї інфраструктури ($20–$250/міс).',
            '80% усіх зібраних коштів розподіляється між активними операторами нод відповідно до їхнього аптайму та виконаних робіт.',
          ],
          callout: {
            type: 'success',
            title: 'Sustainable Economics',
            text: 'Нагороди операторів формуються не за рахунок безкінечної емісії "пустих" токенів, а з реального щомісячного доходу підписок від проєктів-замовників.',
          },
        },
      ],
    },
  },

  'nodes/claim': {
    slug: 'nodes/claim',
    section: 'Senzo Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: "Прив'язка ноди за 6-значним кодом (Claim Code)",
    description: 'Як заклеймити запущений демон до свого акаунту оператора на senzolab.xyz та почати накопичувати винагороди.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 2,
    prevSlug: 'nodes/quickstart',
    nextSlug: 'nodes/capsule-observers',
    content: {
      lead: 'Claim Code — це безпечний криптографічний токен швидкого зв\'язування заліза оператора з його Web3-профілем. Він дозволяє прив\'язати демон за 1 клік без перенесення ключів чи складних конфігурацій.',
      sections: [
        {
          id: 'claim-workflow',
          title: '1. Алгоритм роботи механізму клейму',
          body: [
            'При першому старті демон senzo-worker генерує тимчасовий публічний код формату SNZ-XXXXXX (термін дії — 60 хвилин) та реєструє телеметрію вашого заліза в реєстрі нод.',
            'Коли ви вводите цей код на сайті senzolab.xyz/app/nodes, система перевіряє право володіння та закріплює ID ноди за вашим UUID оператора.',
          ],
        },
        {
          id: 'operator-benefits',
          title: '2. Що дає успішний клейм',
          body: [
            '• +100 вітальних SNN Points одразу після завершення прив\'язки.',
            '• Активація лічильника безперервного аптайму (Uptime %).',
            '• Доступ до щоденних нарахувань з пулу виплат.',
            '• Можливість виведення коштів на торговий баланс Senzo або TON-гаманець.',
          ],
          callout: {
            type: 'info',
            title: 'Чи потрібно клеймити ноду повторно після перезавантаження?',
            text: 'Ні! Кожна нода клеймиться лише один раз. Навіть якщо ви вимкнете комп\'ютер чи перезавантажите систему, нода назавжди залишається закріпленою за вашим профілем.',
          },
        },
      ],
    },
  },

  'nodes/capsule-observers': {
    slug: 'nodes/capsule-observers',
    section: 'Senzo Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Спостерігачі для Capsule-проєктів (Capsule Observers)',
    description: 'Запуск окремого децентралізованого обсервера для моніторингу конкретного смарт-контракту та токена на launch.senzolab.xyz.',
    version: 'v1.1.0',
    lastUpdated: '2026-09-24',
    updateNote: 'UPD: Запущено модуль CapsuleObserverNodeManager у лаунчпаді з 1-Click завантаженням під кожен токен',
    badge: 'NEW',
    readingTimeMinutes: 2,
    prevSlug: 'nodes/claim',
    nextSlug: 'nodes/providers',
    content: {
      lead: 'Capsule Observer — це спеціалізований режим роботи воркера, орієнтований на захист і моніторинг конкретної токен-капсули. Спільнота кожного проєкту на launch.senzolab.xyz може запускати такі ноди, підвищуючи індекс довіри свого токена.',
      sections: [
        {
          id: 'how-it-works',
          title: '1. Як це працює',
          body: [
            'Запустивши воркер із прапорцем --project <slug>, нода починає відстежувати:',
            '• Стан бондинг-кривої та транзакції контракту в блокчейні TON.',
            '• Доступність Telegram Mini App та бекенд-серверів гри чи сервісу.',
            '• Пінг та синхронізацію ліквідності з DEX агрегаторами.',
          ],
        },
        {
          id: 'one-click-per-capsule',
          title: '2. Завантаження готового стартера зі сторінки проєкту',
          body: [
            'На сторінці кожної створеної капсули на launch.senzolab.xyz/launch/[id] є розділ "DePIN Observers & Node Network".',
            'Вам достатньо натиснути кнопку «Download .BAT (Windows)» — сайт автоматично згенерує файл run-observer-[slug].bat, де назва вашого проєкту вже зашита в код!',
          ],
          codeSnippet: {
            lang: 'bash',
            filename: 'Terminal Command',
            code: `# Прямий запуск для вашого токена:
node scripts/senzo-worker.cjs --project my-awesome-coin

# Або завантажений batch файл:
run-observer-my-awesome-coin.bat`,
          },
        },
      ],
    },
  },

  'nodes/providers': {
    slug: 'nodes/providers',
    section: 'Senzo Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Provider-ноди для високошвидкісного TON RPC',
    description: 'Вимоги до серверів Hetzner/AWS, запуск у Docker контейнері та статус Tier-1 провайдера.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 3,
    prevSlug: 'nodes/capsule-observers',
    nextSlug: 'nodes/rewards',
    content: {
      lead: 'Provider-ноди обслуговують високочастотні запити на читання блокчейну TON із затримкою менше 35 мс. Вони підходять для професійних валідаторів, хостинг-провайдерів та технічних користувачів.',
      sections: [
        {
          id: 'specs',
          title: '1. Технічні вимоги до сервера',
          body: [
            '• 8–16 vCPU Cores (Intel Xeon або AMD EPYC).',
            '• 32 GB RAM.',
            '• 500 GB NVMe SSD (висока швидкість IOPS для бази даних стану TON).',
            '• 1 Gbps нелімітований канал зв\'язку із фіксованою публічною IP-адресою.',
          ],
        },
        {
          id: 'docker-launch',
          title: '2. Розгортання через Docker',
          body: [
            'Provider-вузол постачається як готовий Docker-образ:',
          ],
          codeSnippet: {
            lang: 'bash',
            filename: 'docker-compose.yml',
            code: `docker run -d \\
  --name senzo-provider \\
  --restart always \\
  -e SNN_TIER=provider \\
  -e OPERATOR_WALLET=EQB... \\
  -p 8080:8080 -p 443:443 \\
  -v /var/ton-db:/var/ton-db \\
  ghcr.io/senzolab/provider-node:latest --liteserver`,
          },
        },
      ],
    },
  },

  'nodes/rewards': {
    slug: 'nodes/rewards',
    section: 'Senzo Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Винагороди, SNN поінти та виплати (80% пулу)',
    description: 'Детальна формула розрахунку виплат, нарахування SNN балів та виведення коштів на баланс або гаманець.',
    version: 'v1.0.2',
    lastUpdated: '2026-09-24',
    updateNote: 'UPD: Активовано нульову комісію при виведенні на внутрішній торговий баланс Senzo',
    badge: 'UPD',
    readingTimeMinutes: 3,
    prevSlug: 'nodes/providers',
    nextSlug: 'launchpad/architecture',
    content: {
      lead: 'Усі проєкти, що запускаються на launch.senzolab.xyz, сплачують інфраструктурну підписку. 80% цих надходжень акумулюється в Operator Reward Pool та виплачується операторам нод щотижня.',
      sections: [
        {
          id: 'formula',
          title: '1. Формула нарахування винагороди',
          body: [
            'Виплата оператора розраховується за формулою:',
            'Reward = (BasePool * UptimeWeight * PerformanceMultiplier * TierWeight) / TotalActiveNodes',
            '• UptimeWeight: відсоток часу, протягом якого нода була онлайн (вимагається 95%+).',
            '• PerformanceMultiplier: якість пінгу до TON RPC (sub-35ms отримує 1.2x буст).',
            '• TierWeight: Bronze (1.0x), Silver (1.4x), Gold (2.0x), Platinum (3.5x).',
          ],
        },
        {
          id: 'withdrawals',
          title: '2. Як вивести кошти',
          body: [
            'У кабінеті оператора на senzolab.xyz/app/nodes доступні два способи виведення зароблених USD/TON:',
            '1. Миттєво на баланс Senzo: без комісій, кошти одразу доступні для торгівлі, копітрейдингу або підписок.',
            '2. На зовнішній TON гаманець (Tonkeeper, Telegram Wallet): прямий он-чейн переказ.',
          ],
        },
      ],
    },
  },

  'launchpad/architecture': {
    slug: 'launchpad/architecture',
    section: 'Launch OS & Capsule Center',
    sectionId: 'launchpad',
    title: 'Архітектура Project Capsule',
    description: 'Як влаштована модульна капсула на launch.senzolab.xyz: Токен, Telegram Mini App, Квести та Подарунки.',
    version: 'v2.0.0',
    lastUpdated: '2026-09-24',
    badge: 'CORE',
    readingTimeMinutes: 4,
    prevSlug: 'nodes/rewards',
    nextSlug: 'launchpad/bonding-curves',
    content: {
      lead: 'Project Capsule — це комплексний контейнер Web3 проєкту. Замість окремого створення токена, бота, гри та промо-кампанії, Capsule об\'єднує всі ці компоненти в єдину керовану екосистему.',
      sections: [
        {
          id: 'modules',
          title: '1. Доступні модулі капсули',
          body: [
            '• Token & Economy: смарт-контракт Jetton, бондинг-крива та ліквідність.',
            '• Telegram Mini App (TMA): вбудований Web-додаток для аудиторії Telegram.',
            '• Quests & Gamification: система завдань для залучення підписників.',
            '• Collectible Gifts: лімітовані подарунки та бейджі учасників.',
            '• DePIN Observers: підключення децентралізованих нод захисту SNN.',
          ],
        },
      ],
    },
  },

  'launchpad/bonding-curves': {
    slug: 'launchpad/bonding-curves',
    section: 'Launch OS & Capsule Center',
    sectionId: 'launchpad',
    title: 'Математика бондинг-кривих та захист від rugpull',
    description: 'Автоматичне ціноутворення, збір пулу ліквідності та правила безпечного запуску токенів.',
    version: 'v1.5.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 3,
    prevSlug: 'launchpad/architecture',
    nextSlug: 'launchpad/dex-migration',
    content: {
      lead: 'Бондинг-крива (Bonding Curve) гарантує 100% ліквідність з першої секунди запуску. Користувачі можуть купувати або продавати токени безпосередньо через смарт-контракт за математично визначеною ціною.',
      sections: [
        {
          id: 'curve-formula',
          title: '1. Алгоритм ціноутворення',
          body: [
            'Ціна зростає з кожною покупкою і знижується при продажу. Усі зібрані кошти TON блокуються в незмінному смарт-контракті кривої.',
            'Коли капіталізація сягає цільового порогу (Bonding Target), зібрана ліквідність автоматично мігрує на децентралізовані біржі DeDust або STON.fi, а LP-токени спалюються назавжди.',
          ],
        },
      ],
    },
  },

  'launchpad/dex-migration': {
    slug: 'launchpad/dex-migration',
    section: 'Launch OS & Capsule Center',
    sectionId: 'launchpad',
    title: 'Міграція ліквідності на DeDust та STON.fi',
    description: 'Автоматичний перехід токена у відкритий ринок DEX після завершення бондинг-кривої.',
    version: 'v1.2.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 2,
    prevSlug: 'launchpad/bonding-curves',
    nextSlug: 'developers/rest-api',
    content: {
      lead: 'Процес міграції ліквідності відбувається повністю автономно без участі розробників проєкту, що виключає ризик маніпуляцій або вилучення коштів.',
      sections: [
        {
          id: 'graduation-flow',
          title: '1. Етапи Graduation (Випуску)',
          body: [
            '1. Досягнення 100% бондинг-кривої (зібрано необхідний обсяг TON).',
            '2. Смарт-контракт формує пул ліквідності на DeDust/STON.fi.',
            '3. Токени постачальника ліквідності (LP) негайно відправляються на нульову адресу (Burn Address).',
            '4. Токен з\'являється у торгових списках терміналу Senzo та агрегаторах котирувань.',
          ],
        },
      ],
    },
  },

  'developers/rest-api': {
    slug: 'developers/rest-api',
    section: 'Розробникам & API',
    sectionId: 'developers',
    title: 'REST API & Публічні Ендпоінти',
    description: 'Документація для алготрейдерів, ботів та розробників додатків.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 3,
    prevSlug: 'launchpad/dex-migration',
    nextSlug: 'developers/smart-contracts',
    content: {
      lead: 'Senzo Lab надає високопродуктивне REST API для отримання ринкових даних, історичних свічок, аналізу ліквідності та телеметрії децентралізованих нод.',
      sections: [
        {
          id: 'endpoints',
          title: '1. Основні ендпоінти',
          body: [
            '• GET https://senzolab.xyz/api/candles — отримання OHLCV свічок для аналізу.',
            '• POST https://senzolab.xyz/api/nodes/claim — програмна прив\'язка ноди оператора.',
            '• GET https://launch.senzolab.xyz/api/launch — список активних токен-капсул.',
          ],
          codeSnippet: {
            lang: 'bash',
            filename: 'cURL Example',
            code: `curl -X GET "https://senzolab.xyz/api/candles?symbol=TONUSDT&interval=15m" \\
  -H "Accept: application/json"`,
          },
        },
      ],
    },
  },

  'developers/smart-contracts': {
    slug: 'developers/smart-contracts',
    section: 'Розробникам & API',
    sectionId: 'developers',
    title: 'Смарт-контракти TON Jetton',
    description: 'Архітектура смарт-контрактів на мові FunC/Tact, верифікація та стандарти TEP-74.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 3,
    prevSlug: 'developers/rest-api',
    nextSlug: 'developers/identity-bridge',
    content: {
      lead: 'Усі токени, випущені через Launchpad, строго відповідають офіційному стандарту TON TEP-74 Jetton та проходять автоматичну верифікацію коду.',
      sections: [
        {
          id: 'contract-standards',
          title: '1. Архітектура контрактів',
          body: [
            '• Jetton Master Contract: керує емісією та метаданими.',
            '• Jetton Wallet Contract: зберігає індивідуальні баланси користувачів.',
            '• Bonding Curve Locker: блокує ліквідність до моменту лістингу.',
          ],
        },
      ],
    },
  },

  'developers/identity-bridge': {
    slug: 'developers/identity-bridge',
    section: 'Розробникам & API',
    sectionId: 'developers',
    title: 'Cross-App Identity Bridge',
    description: 'Безшовна SSO авторизація між senzolab.xyz та launch.senzolab.xyz.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 2,
    prevSlug: 'developers/smart-contracts',
    nextSlug: undefined,
    content: {
      lead: 'Cross-App Identity Bridge забезпечує безпечне криптографічне підтвердження сесії між різними доменами екосистеми Senzo без необхідності повторного логіну.',
      sections: [
        {
          id: 'bridge-flow',
          title: '1. Принцип роботи',
          body: [
            'Коли користувач переходить між senzolab.xyz та launch.senzolab.xyz, генерується одноразовий підписаний HMAC-SHA256 assertion токен із часом життя 5 хвилин.',
            'Цільовий сервіс верифікує підпис за спільним секретом та автоматично створює зв\'язану сесію.',
          ],
        },
      ],
    },
  },
};

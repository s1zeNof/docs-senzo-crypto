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
    title: 'Node Network (SNN)',
    description: 'DePIN infrastructure, node deployment, and operator rewards',
    iconName: 'Server',
    items: [
      { slug: 'nodes/quickstart', title: 'Quickstart: Run Node on PC', badge: 'HOT', version: 'v1.0.0' },
      { slug: 'nodes/overview', title: 'DePIN Architecture Overview', badge: 'CORE', version: 'v1.0.0' },
      { slug: 'nodes/claim', title: 'Claim Node via 6-Digit Code', version: 'v1.0.0' },
      { slug: 'nodes/capsule-observers', title: 'Capsule Observers', badge: 'NEW', version: 'v1.1.0' },
      { slug: 'nodes/providers', title: 'Provider Nodes for TON RPC', version: 'v1.0.0' },
      { slug: 'nodes/rewards', title: 'Rewards & Payouts (80% Pool)', badge: 'UPD', version: 'v1.0.2' },
    ],
  },
  {
    id: 'launchpad',
    title: 'Launch OS & Capsule Center',
    description: 'Token capsules, bonding curves, and tokenomics',
    iconName: 'Rocket',
    items: [
      { slug: 'launchpad/architecture', title: 'Project Capsule Architecture', badge: 'CORE', version: 'v2.0.0' },
      { slug: 'launchpad/bonding-curves', title: 'Bonding Curve Mathematics', version: 'v1.5.0' },
      { slug: 'launchpad/dex-migration', title: 'DEX Graduation & Migration', version: 'v1.2.0' },
    ],
  },
  {
    id: 'developers',
    title: 'Developers & API',
    description: 'Public endpoints, smart contracts, and SDKs',
    iconName: 'Code',
    items: [
      { slug: 'developers/rest-api', title: 'REST API & Authentication', version: 'v1.0.0' },
      { slug: 'developers/smart-contracts', title: 'TON Jetton Smart Contracts', version: 'v1.0.0' },
      { slug: 'developers/identity-bridge', title: 'Cross-App Identity Bridge', version: 'v1.0.0' },
    ],
  },
];

export const DOC_ARTICLES: Record<string, DocArticle> = {
  'nodes/quickstart': {
    slug: 'nodes/quickstart',
    section: 'Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Quickstart: Run a Worker Node on Your PC',
    description: 'Step-by-step guide to deploying a decentralized worker daemon on Windows, macOS, or Linux in under 60 seconds.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    updateNote: 'UPD: Added standalone 1-Click .BAT and .SH launchers with automatic dependency resolution',
    badge: 'HOT',
    readingTimeMinutes: 2,
    prevSlug: 'nodes/overview',
    nextSlug: 'nodes/claim',
    content: {
      lead: 'The Senzo Worker Node is a lightweight client daemon that performs independent smart contract availability checks, pings TON blockchain RPC nodes, and monitors the health of Telegram Mini Apps. No dedicated servers required — any standard home PC or laptop is fully sufficient.',
      sections: [
        {
          id: 'requirements',
          title: '1. System Requirements',
          body: [
            'The worker is engineered for minimal resource consumption. The daemon runs silently in the background without straining your CPU or GPU during everyday computing tasks.',
          ],
          table: {
            headers: ['Specification', 'Minimum Requirement', 'Recommended'],
            rows: [
              ['CPU', '2 Cores (any Intel / AMD / Apple Silicon)', '4+ Cores'],
              ['Memory', '100 MB free RAM', '250 MB RAM'],
              ['Disk Space', '50 MB free disk space', '100 MB'],
              ['Operating System', 'Windows 10/11, macOS 12+, Ubuntu 20.04+', 'Any modern 64-bit OS'],
              ['Runtime', 'Node.js v18 or higher', 'Node.js v20 LTS / v22'],
            ],
          },
          callout: {
            type: 'security',
            title: 'Absolute Security (100% Non-Custodial)',
            text: 'The worker generates an ephemeral Ed25519 keypair solely for signing its own telemetry pings. The script never asks for seed phrases, private keys, or wallet credentials. Your digital assets remain entirely secure and isolated.',
          },
        },
        {
          id: 'one-click-launch',
          title: '2. Method #1: 1-Click Launcher (Easiest)',
          body: [
            'If you prefer not to touch terminal commands, download the pre-packaged launcher for your operating system. The script automatically verifies Node.js and starts the node daemon.',
          ],
          downloads: [
            {
              title: 'Windows 1-Click Launcher',
              filename: 'senzo-worker.bat',
              url: '/downloads/senzo-worker.bat',
              os: 'windows',
              description: 'For Windows 10 / 11. Simply double-click after downloading.',
            },
            {
              title: 'Linux / macOS Shell Script',
              filename: 'senzo-worker.sh',
              url: '/downloads/senzo-worker.sh',
              os: 'linux',
              description: 'For macOS and Ubuntu/Debian. Run with: bash senzo-worker.sh',
            },
          ],
        },
        {
          id: 'cli-launch',
          title: '3. Method #2: Launch via Terminal (CLI)',
          body: [
            'If you have cloned the repository or are operating within VS Code, PowerShell, or bash, run one of the following commands:',
          ],
          codeSnippet: {
            lang: 'bash',
            filename: 'terminal',
            code: `# Option A: From senzo-crypto or senzo-explorer workspace:
npm run node:worker

# Option B: Direct execution via Node.js:
node scripts/senzo-worker.cjs

# Option C: Run as dedicated observer for a specific capsule:
node scripts/senzo-worker.cjs --project my-token-slug`,
          },
        },
        {
          id: 'terminal-output',
          title: '4. Expected Terminal Output',
          body: [
            'Upon launch, the daemon will benchmark your CPU cores, RAM capacity, and network latency to public TON Liteservers (target benchmark: <35–100 ms).',
            'A high-visibility banner containing your unique claim code will appear in the console:',
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
   👉 Click "Claim Node"
   👉 Enter code: SNZ-5PG54A
==============================================================

⏳ Waiting for operator to claim this node... (Heartbeats active)`,
          },
        },
        {
          id: 'next-steps',
          title: '5. Claiming Your Node in Operator Hub',
          body: [
            'Copy the generated 6-character claim code (e.g., SNZ-5PG54A).',
            'Navigate to the Operator Hub at https://senzolab.xyz/app/nodes.',
            'Click "Claim Node", paste the code, and give your node a recognizable label (e.g., "Home Ryzen PC").',
            'Immediately upon claiming, you will receive +100 Welcome SNN Points, and your node status will transition to Online.',
          ],
          callout: {
            type: 'info',
            title: 'Do I need to keep the terminal open?',
            text: 'Yes! The node remains active as long as the console window or background process is running. You can minimize the terminal to the system tray and continue your everyday work. If you shut down your PC, the node status will gracefully degrade to offline, and will resume automatically when you re-launch.',
          },
        },
      ],
    },
  },

  'nodes/overview': {
    slug: 'nodes/overview',
    section: 'Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Senzo Node Network (SNN) Architecture Overview',
    description: 'The decentralized physical infrastructure network (DePIN) bridging senzolab.xyz and launch.senzolab.xyz.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    badge: 'CORE',
    readingTimeMinutes: 3,
    prevSlug: undefined,
    nextSlug: 'nodes/quickstart',
    content: {
      lead: 'Senzo Node Network (SNN) is a decentralized network of community node operators designed for independent uptime monitoring, bonding curve integrity audits, TON smart contract event indexing, and protecting ecosystem users from infrastructure disruptions.',
      sections: [
        {
          id: 'why-depin',
          title: '1. Why a Decentralized Observer Network?',
          body: [
            'In conventional launchpads and Web3 platforms, health checks rely on centralized cloud servers. If those servers experience load spikes or DDoS attacks, users lose access to trading terminals and Telegram Mini Apps.',
            'Senzo solves this via DePIN (Decentralized Physical Infrastructure Network): hundreds of distributed computers worldwide perform parallel contract pings and API validations, establishing 24/7 consensus on system health.',
          ],
        },
        {
          id: 'two-tiers',
          title: '2. Dual-Tier Topology: Workers vs. Providers',
          body: [
            'The SNN network operates on a two-tier node hierarchy:',
          ],
          table: {
            headers: ['Specification', 'Worker Node (Lightweight Worker)', 'Provider Node (RPC Provider)'],
            rows: [
              ['Primary Role', 'TMA uptime validation, RPC latency pings, capsule audits', 'High-throughput TON Liteserver, private RPC endpoints'],
              ['Hardware', 'Any standard PC / Laptop (2+ cores, 100MB RAM)', 'Dedicated Server (8–16 vCPU, 32GB RAM, NVMe)'],
              ['Network', 'Standard residential broadband', '1 Gbps static IP uplink (sub-35ms benchmark)'],
              ['Rewards', 'SNN Points + 80% subscription reward pool share', 'Elevated multiplier (up to 3.5x) in TON/USDT'],
            ],
          },
        },
        {
          id: 'snn-economics',
          title: '3. Economic Synergy with Launchpad',
          body: [
            'Every project capsule deployed on launch.senzolab.xyz pays an infrastructure defense subscription ($20–$250/month).',
            '80% of all aggregated protocol subscription revenue flows directly into the Operator Reward Pool, distributed to active node operators based on verified uptime and telemetry benchmarks.',
          ],
          callout: {
            type: 'success',
            title: 'Sustainable Tokenomics',
            text: 'Operator rewards are backed by real monthly subscription revenue from deployed projects — not inflationary emissions of unbacked tokens.',
          },
        },
      ],
    },
  },

  'nodes/claim': {
    slug: 'nodes/claim',
    section: 'Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Claiming Your Node via 6-Digit Code',
    description: 'How to bind your running worker daemon to your operator account on senzolab.xyz and start accumulating rewards.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 2,
    prevSlug: 'nodes/quickstart',
    nextSlug: 'nodes/capsule-observers',
    content: {
      lead: 'The Claim Code is a secure cryptographic handshake mechanism that binds host hardware to an operator Web3 profile in a single click, eliminating the need for manual key copying or complex configuration files.',
      sections: [
        {
          id: 'claim-workflow',
          title: '1. How the Claim Mechanism Works',
          body: [
            'On first boot, the senzo-worker daemon generates an ephemeral public token formatted as SNZ-XXXXXX (valid for 60 minutes) and registers your hardware telemetry with the node registry.',
            'When you input this code at senzolab.xyz/app/nodes, the registry validates hardware ownership and permanently binds the node ID to your operator UUID.',
          ],
        },
        {
          id: 'operator-benefits',
          title: '2. Post-Claim Benefits',
          body: [
            '• +100 Welcome SNN Points credited immediately upon binding.',
            '• Real-time Uptime % counter activation on the dashboard.',
            '• Eligibility for weekly distributions from the 80% subscription reward pool.',
            '• Direct one-click withdrawals to Senzo trading balance or external TON wallets.',
          ],
          callout: {
            type: 'info',
            title: 'Do I need to re-claim after restarting my PC?',
            text: 'No! Each node is claimed exactly once. Even if you restart your computer or update the OS, the node remains permanently tied to your profile.',
          },
        },
      ],
    },
  },

  'nodes/capsule-observers': {
    slug: 'nodes/capsule-observers',
    section: 'Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Dedicated Observers for Capsule Projects',
    description: 'Deploying dedicated decentralized observers to monitor specific smart contracts and tokens on launch.senzolab.xyz.',
    version: 'v1.1.0',
    lastUpdated: '2026-09-24',
    updateNote: 'UPD: CapsuleObserverNodeManager module enabled on launchpad with 1-Click .bat downloads tailored per capsule',
    badge: 'NEW',
    readingTimeMinutes: 2,
    prevSlug: 'nodes/claim',
    nextSlug: 'nodes/providers',
    content: {
      lead: 'A Capsule Observer is a specialized worker mode dedicated to monitoring and auditing a specific project capsule. Community members and token holders can run observers for their favorite projects, boosting trust and security ratings.',
      sections: [
        {
          id: 'how-it-works',
          title: '1. How Observers Operate',
          body: [
            'By starting a worker with the --project <slug> flag, the node tracks:',
            '• Bonding curve status and contract state changes on the TON blockchain.',
            '• Telegram Mini App availability and backend game/service response times.',
            '• DEX liquidity synchronization and price parity across pools.',
          ],
        },
        {
          id: 'one-click-per-capsule',
          title: '2. 1-Click Launchers from Capsule Pages',
          body: [
            'On any capsule detail page at launch.senzolab.xyz/launch/[id], find the "DePIN Observers & Node Network" section.',
            'Click "Download .BAT (Windows)" — the platform generates a custom run-observer-[slug].bat with your project slug pre-configured!',
          ],
          codeSnippet: {
            lang: 'bash',
            filename: 'Terminal Command',
            code: `# Direct CLI launch for your specific project capsule:
node scripts/senzo-worker.cjs --project my-awesome-coin

# Or via downloaded batch file:
run-observer-my-awesome-coin.bat`,
          },
        },
      ],
    },
  },

  'nodes/providers': {
    slug: 'nodes/providers',
    section: 'Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Provider Nodes for High-Speed TON RPC',
    description: 'Server requirements, Docker deployment, and qualifying for Tier-1 provider status.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 3,
    prevSlug: 'nodes/capsule-observers',
    nextSlug: 'nodes/rewards',
    content: {
      lead: 'Provider Nodes service high-frequency blockchain read queries with sub-35ms latency. Designed for professional validators, infrastructure providers, and high-spec homelab operators.',
      sections: [
        {
          id: 'specs',
          title: '1. Technical Server Specifications',
          body: [
            '• 8–16 vCPU Cores (Intel Xeon or AMD EPYC).',
            '• 32 GB RAM minimum.',
            '• 500 GB NVMe SSD (high IOPS required for TON state database).',
            '• 1 Gbps unmetered uplink with dedicated static public IP.',
          ],
        },
        {
          id: 'docker-launch',
          title: '2. Deployment via Docker',
          body: [
            'Provider nodes are distributed as pre-built production Docker containers:',
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
    section: 'Node Network (SNN)',
    sectionId: 'snn-nodes',
    title: 'Rewards, SNN Points & Payouts (80% Pool)',
    description: 'Reward calculation formula, SNN point distribution, and payout withdrawals to balance or TON wallets.',
    version: 'v1.0.2',
    lastUpdated: '2026-09-24',
    updateNote: 'UPD: Zero withdrawal fees activated when transferring earnings to internal Senzo trading balance',
    badge: 'UPD',
    readingTimeMinutes: 3,
    prevSlug: 'nodes/providers',
    nextSlug: 'launchpad/architecture',
    content: {
      lead: 'All projects launching on launch.senzolab.xyz pay an infrastructure defense subscription. 80% of these platform fees accumulate into the Operator Reward Pool and are distributed weekly to active node operators.',
      sections: [
        {
          id: 'formula',
          title: '1. Reward Calculation Formula',
          body: [
            'Operator payouts are computed according to the following formula:',
            'Reward = (BasePool * UptimeWeight * PerformanceMultiplier * TierWeight) / TotalActiveNodes',
            '• UptimeWeight: Percentage of verified uptime throughout the billing epoch (95%+ target).',
            '• PerformanceMultiplier: Benchmark latency to TON RPC (sub-35ms yields a 1.2x boost).',
            '• TierWeight: Bronze (1.0x), Silver (1.4x), Gold (2.0x), Platinum (3.5x).',
          ],
        },
        {
          id: 'withdrawals',
          title: '2. How to Withdraw Funds',
          body: [
            'Within the Operator Hub at senzolab.xyz/app/nodes, operators have two flexible payout options:',
            '1. Instant transfer to Senzo Trading Balance: 0% fee, funds instantly available for trading, copy-trading, or ecosystem subscriptions.',
            '2. External TON Wallet (Tonkeeper, Telegram Wallet, MyTonWallet): Direct on-chain transfer to your non-custodial address.',
          ],
        },
      ],
    },
  },

  'launchpad/architecture': {
    slug: 'launchpad/architecture',
    section: 'Launch OS & Capsule Center',
    sectionId: 'launchpad',
    title: 'Project Capsule Modular Architecture',
    description: 'How modular project capsules work on launch.senzolab.xyz: Token, Telegram Mini App, Quests, and Collectibles.',
    version: 'v2.0.0',
    lastUpdated: '2026-09-24',
    badge: 'CORE',
    readingTimeMinutes: 4,
    prevSlug: 'nodes/rewards',
    nextSlug: 'launchpad/bonding-curves',
    content: {
      lead: 'A Project Capsule is an all-in-one container for Web3 applications. Rather than separately deploying a token contract, Telegram bot, frontend app, and marketing quests, a Capsule unifies all core primitives into a cohesive, managed ecosystem.',
      sections: [
        {
          id: 'modules',
          title: '1. Core Capsule Modules',
          body: [
            '• Token & Economy: Jetton smart contract, automated bonding curve, and liquidity provisioning.',
            '• Telegram Mini App (TMA): Seamless web view integrated directly into Telegram for viral community distribution.',
            '• Quests & Gamification: Social and on-chain mission engine to drive engagement and reward loyal community members.',
            '• Collectible Gifts: Limited-edition on-chain badges and achievements.',
            '• DePIN Observers: Integrated network of community nodes actively validating contract state and uptime.',
          ],
        },
      ],
    },
  },

  'launchpad/bonding-curves': {
    slug: 'launchpad/bonding-curves',
    section: 'Launch OS & Capsule Center',
    sectionId: 'launchpad',
    title: 'Bonding Curve Mathematics & Anti-Rugpull Architecture',
    description: 'Algorithmic price discovery, liquidity pool accumulation, and rug-proof token launch mechanics.',
    version: 'v1.5.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 3,
    prevSlug: 'launchpad/architecture',
    nextSlug: 'launchpad/dex-migration',
    content: {
      lead: 'Bonding Curves guarantee 100% instant liquidity from the moment of creation. Users can buy or sell tokens directly through the immutable smart contract at a mathematically deterministic price.',
      sections: [
        {
          id: 'curve-formula',
          title: '1. Price Discovery Algorithm',
          body: [
            'The token price increases deterministically with each purchase and decreases on sales. All contributed TON funds remain securely locked inside the immutable bonding curve contract.',
            'Once total capitalization reaches the pre-configured Bonding Target, collected liquidity is automatically graduated to decentralized exchanges (DeDust or STON.fi), and LP tokens are permanently burned.',
          ],
        },
      ],
    },
  },

  'launchpad/dex-migration': {
    slug: 'launchpad/dex-migration',
    section: 'Launch OS & Capsule Center',
    sectionId: 'launchpad',
    title: 'Automated DEX Graduation (DeDust & STON.fi)',
    description: 'Autonomous transition of token liquidity to open decentralized exchange orderbooks upon curve completion.',
    version: 'v1.2.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 2,
    prevSlug: 'launchpad/bonding-curves',
    nextSlug: 'developers/rest-api',
    content: {
      lead: 'The DEX graduation process executes 100% autonomously without project creator intervention, completely eliminating the risk of developer rugpulls or liquidity extraction.',
      sections: [
        {
          id: 'graduation-flow',
          title: '1. Graduation Stages',
          body: [
            '1. Curve Completion: 100% of the bonding curve target is reached (required TON reserve accumulated).',
            '2. Pool Creation: The contract autonomously deploys a liquidity pair on DeDust or STON.fi.',
            '3. Permanent LP Burn: Liquidity Provider (LP) tokens are immediately sent to the unrecoverable zero burn address.',
            '4. Open Market Discovery: The token becomes publicly tradeable across Senzo Terminal and Web3 market aggregators.',
          ],
        },
      ],
    },
  },

  'developers/rest-api': {
    slug: 'developers/rest-api',
    section: 'Developers & API',
    sectionId: 'developers',
    title: 'REST API & Public Endpoints',
    description: 'Technical documentation for algorithmic traders, Telegram bot developers, and external Web3 integrations.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 3,
    prevSlug: 'launchpad/dex-migration',
    nextSlug: 'developers/smart-contracts',
    content: {
      lead: 'Senzo Lab provides high-throughput REST APIs for retrieving market candles, real-time depth, node network telemetry, and capsule status.',
      sections: [
        {
          id: 'endpoints',
          title: '1. Core Endpoints',
          body: [
            '• GET https://senzolab.xyz/api/candles — Retrieve historical OHLCV candlestick data for market analysis.',
            '• POST https://senzolab.xyz/api/nodes/claim — Programmatically claim a running worker daemon via API.',
            '• GET https://launch.senzolab.xyz/api/launch — Fetch active token capsules and bonding curve states.',
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
    section: 'Developers & API',
    sectionId: 'developers',
    title: 'TON Jetton Smart Contracts',
    description: 'FunC and Tact smart contract architecture, TEP-74 standard compliance, and security audits.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 3,
    prevSlug: 'developers/rest-api',
    nextSlug: 'developers/identity-bridge',
    content: {
      lead: 'All tokens minted through Senzo Launchpad strictly adhere to the official TON TEP-74 Jetton standard and feature automated bytecode verification.',
      sections: [
        {
          id: 'contract-standards',
          title: '1. Contract Architecture',
          body: [
            '• Jetton Master Contract: Manages total supply, minting permissions, and on-chain metadata.',
            '• Jetton Wallet Contract: Handles individual user balances, gas optimizations, and token transfers.',
            '• Bonding Curve Locker: Cryptographically locks collected TON reserves until graduation criteria are satisfied.',
          ],
        },
      ],
    },
  },

  'developers/identity-bridge': {
    slug: 'developers/identity-bridge',
    section: 'Developers & API',
    sectionId: 'developers',
    title: 'Cross-App Identity Bridge',
    description: 'Cryptographic SSO session sharing between senzolab.xyz and launch.senzolab.xyz.',
    version: 'v1.0.0',
    lastUpdated: '2026-09-24',
    readingTimeMinutes: 2,
    prevSlug: 'developers/smart-contracts',
    nextSlug: undefined,
    content: {
      lead: 'The Cross-App Identity Bridge provides secure, seamless cryptographic session synchronization between distinct domains across the Senzo ecosystem without requiring repeated logins.',
      sections: [
        {
          id: 'bridge-flow',
          title: '1. Architecture & Protocol Flow',
          body: [
            'When navigating between senzolab.xyz and launch.senzolab.xyz, an ephemeral signed HMAC-SHA256 assertion token with a 5-minute TTL is generated.',
            'The destination domain validates the cryptographic signature using a shared secret and instantiates a linked operator session seamlessly.',
          ],
        },
      ],
    },
  },
};

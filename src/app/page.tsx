import React from 'react';
import Link from 'next/link';
import {
  Server,
  Rocket,
  Code,
  Terminal,
  Download,
  ArrowRight,
  ShieldCheck,
  Radio,
  BookOpen,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { NAV_SECTIONS } from '../data/docsData';

export default function DocsHomePage() {
  return (
    <div className="space-y-12 animate-fade-in pb-16">
      {/* ── Hero Banner ────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#07090e] to-[#05070b] p-6 sm:p-10 shadow-2xl">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Radio className="h-3.5 w-3.5 animate-pulse text-cyan-400" />
            <span>Офіційна документація Senzo v1.0.0</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Інженерна база знань екосистеми <span className="gradient-text">Senzo</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Повні посібники із запуску DePIN воркерів на ПК, підключення токен-капсул до Launchpad, взаємодії з бондинг-кривими та інтеграції торгового API.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/nodes/quickstart"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-black px-5 py-3 text-xs sm:text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:-translate-y-0.5"
            >
              <Terminal className="h-4 w-4" />
              <span>Швидкий старт: Нода на ПК</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="/downloads/senzo-worker.bat"
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 px-4 py-3 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              <span>1-Click Windows .BAT</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Category Cards Grid ───────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Node Network (DePIN) */}
        <div className="rounded-3xl border border-cyan-500/25 bg-cyan-950/10 p-6 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all group">
          <div className="space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Server className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Node Network (SNN)
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                DePIN
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Запуск легкої ноди на домашньому комп\'ютері, клейм за 6-значним кодом, моніторинг аптайму та отримання винагород (80% пулу).
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/[0.08]">
            <Link
              href="/nodes/quickstart"
              className="flex items-center justify-between text-xs text-cyan-400 hover:text-cyan-300 font-medium py-1"
            >
              <span>Покроковий гайд на ПК</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/nodes/claim"
              className="flex items-center justify-between text-xs text-gray-400 hover:text-gray-200 py-1"
            >
              <span>Як заклеймити ноду</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/nodes/capsule-observers"
              className="flex items-center justify-between text-xs text-gray-400 hover:text-gray-200 py-1"
            >
              <span>Обсервери для токенів</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 2: Launch OS & Capsule Center */}
        <div className="rounded-3xl border border-white/10 bg-[#07090e] p-6 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all group">
          <div className="space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400">
              <Rocket className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                Launch OS & Capsules
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                Launchpad
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Архітектура токен-капсул, інтеграція Telegram Mini Apps, математика бондинг-кривих та лістинг ліквідності на DeDust/STON.fi.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/[0.08]">
            <Link
              href="/launchpad/architecture"
              className="flex items-center justify-between text-xs text-teal-400 hover:text-teal-300 font-medium py-1"
            >
              <span>Концепція Project Capsule</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/launchpad/bonding-curves"
              className="flex items-center justify-between text-xs text-gray-400 hover:text-gray-200 py-1"
            >
              <span>Механіка бондинг-кривих</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/launchpad/dex-migration"
              className="flex items-center justify-between text-xs text-gray-400 hover:text-gray-200 py-1"
            >
              <span>Автоматична міграція на DEX</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 3: Developers & API */}
        <div className="rounded-3xl border border-white/10 bg-[#07090e] p-6 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all group">
          <div className="space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Code className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                Розробникам & API
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                Core API
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              REST ендпоінти отримання свічок, аутентифікація ботів, специфікація контрактів TON Jetton TEP-74 та Identity Bridge.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/[0.08]">
            <Link
              href="/developers/rest-api"
              className="flex items-center justify-between text-xs text-purple-400 hover:text-purple-300 font-medium py-1"
            >
              <span>REST API Reference</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/developers/smart-contracts"
              className="flex items-center justify-between text-xs text-gray-400 hover:text-gray-200 py-1"
            >
              <span>Смарт-контракти Jetton</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/developers/identity-bridge"
              className="flex items-center justify-between text-xs text-gray-400 hover:text-gray-200 py-1"
            >
              <span>Cross-App SSO Bridge</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Changelog & Updates Feed (Журнал оновлень) ─────────── */}
      <div className="rounded-3xl border border-white/[0.08] bg-[#07090e] p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2.5">
            <Calendar className="h-5 w-5 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-bold text-white">Журнал оновлень документації (Changelog)</h3>
          </div>
          <span className="text-xs text-gray-500">Останнє оновлення: 24.09.2026</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,242,254,0.8)] shrink-0" />
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <strong className="text-white">v1.1.0 — Запуск модуля Capsule Observers</strong>
                <span className="text-[10px] text-gray-500">24.09.2026</span>
              </div>
              <p className="text-gray-400">
                Додано параметр <code className="text-cyan-300">--project &lt;slug&gt;</code> у воркер та 1-Click завантаження батників зі сторінки створення капсул.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0" />
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <strong className="text-white">v1.0.0 — Реліз Senzo Node Network (SNN)</strong>
                <span className="text-[10px] text-gray-500">24.09.2026</span>
              </div>
              <p className="text-gray-400">
                Повний гайд запуску Worker-ноди, інструкція генерації 6-значного Claim коду та механізм виплат 80% пулу підписок.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

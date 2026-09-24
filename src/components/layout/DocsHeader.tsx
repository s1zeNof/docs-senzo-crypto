'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  ExternalLink,
  Github,
  Radio,
  Menu,
  X,
  BookOpen,
  Server,
  Rocket
} from 'lucide-react';
import { SearchModal } from '../docs/SearchModal';

interface DocsHeaderProps {
  onToggleMobileMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

export const DocsHeader: React.FC<DocsHeaderProps> = ({
  onToggleMobileMenu,
  isMobileMenuOpen
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#05070b]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Brand Logo & Version */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleMobileMenu}
              className="p-2 -ml-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 lg:hidden"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-400 p-[1px] shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                <div className="h-full w-full rounded-[11px] bg-[#05070b] flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold tracking-tight text-white text-base">SENZO</span>
                <span className="gradient-text font-bold text-sm">DOCS</span>
              </div>
            </Link>

            <span className="hidden sm:inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
              v1.0.0
            </span>
          </div>

          {/* Center: Search Trigger (Cmd+K) */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-gray-400 hover:border-white/20 hover:text-gray-200 transition-all shadow-inner"
            >
              <span className="flex items-center gap-2">
                <Search className="h-3.5 w-3.5 text-gray-500" />
                <span>Швидкий пошук документації...</span>
              </span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-gray-400 font-mono">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right: Ecosystem Navigation & GitHub */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 md:hidden"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>

            <a
              href="https://senzolab.xyz/app/nodes"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-cyan-300 transition-colors"
            >
              <Server className="h-3.5 w-3.5 text-cyan-400" />
              <span>Operator Hub</span>
            </a>

            <span className="hidden sm:inline text-gray-700">&middot;</span>

            <a
              href="https://launch.senzolab.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-cyan-300 transition-colors"
            >
              <Rocket className="h-3.5 w-3.5 text-teal-400" />
              <span>Launchpad</span>
            </a>

            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

            <a
              href="https://github.com/s1zeNof/docs-senzo-crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white transition-all"
              title="View on GitHub"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
              <ExternalLink className="h-3 w-3 text-gray-500" />
            </a>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

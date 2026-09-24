'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, FileText, ArrowRight } from 'lucide-react';
import { DOC_ARTICLES } from '../../data/docsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Handle Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const articles = Object.values(DOC_ARTICLES);
  const filtered = query.trim()
    ? articles.filter(
        a =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.description.toLowerCase().includes(query.toLowerCase()) ||
          a.section.toLowerCase().includes(query.toLowerCase()) ||
          a.content.sections.some(s =>
            s.title.toLowerCase().includes(query.toLowerCase()) ||
            s.body.some(b => b.toLowerCase().includes(query.toLowerCase()))
          )
      )
    : articles.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl rounded-2xl border border-white/15 bg-[#0a0d14] p-4 shadow-2xl z-10 space-y-4">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-3 px-2">
          <Search className="h-5 w-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Пошук у документації (напр. quickstart, worker, claim, api)..."
            className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto space-y-2 pr-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-gray-500">
              Нічого не знайдено за запитом &quot;{query}&quot;
            </div>
          ) : (
            filtered.map(item => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all group"
              >
                <div className="space-y-0.5 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400/80">
                      {item.section}
                    </span>
                    {item.badge && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-cyan-500/20 text-cyan-300">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="border-t border-white/5 pt-2 px-2 flex items-center justify-between text-[11px] text-gray-500">
          <span>Навігація по статтях</span>
          <span>Esc для виходу</span>
        </div>
      </div>
    </div>
  );
};

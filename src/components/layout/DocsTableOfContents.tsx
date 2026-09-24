'use client';

import React, { useEffect, useState } from 'react';
import { List, MessageSquare, ExternalLink } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
}

interface DocsTableOfContentsProps {
  items: TocItem[];
}

export const DocsTableOfContents: React.FC<DocsTableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="space-y-6 text-xs">
      <div className="space-y-3">
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-gray-400">
          <List className="h-3.5 w-3.5 text-cyan-400" />
          <span>On this page</span>
        </div>
        <ul className="space-y-2 border-l border-white/[0.08] pl-3">
          {items.map(item => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block transition-all ${
                    isActive
                      ? 'font-semibold text-cyan-300 -translate-x-[13px] border-l-2 border-cyan-400 pl-2.5'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Community card */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 space-y-2.5 text-gray-400">
        <div className="flex items-center gap-2 text-white font-semibold">
          <MessageSquare className="h-4 w-4 text-cyan-400" />
          <span>Need help?</span>
        </div>
        <p className="text-[11px] leading-relaxed">
          Have questions about running a node or configuring a token capsule? Join our community chat.
        </p>
        <a
          href="https://t.me/senzo_network"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300"
        >
          <span>Telegram Community</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Server,
  Rocket,
  Code,
  FileText,
  ChevronRight,
  ExternalLink,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';
import { NAV_SECTIONS } from '../../data/docsData';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="h-4 w-4 text-cyan-400" />,
  Rocket: <Rocket className="h-4 w-4 text-teal-400" />,
  Code: <Code className="h-4 w-4 text-purple-400" />,
  FileText: <FileText className="h-4 w-4 text-amber-400" />,
};

interface DocsSidebarProps {
  onItemClick?: () => void;
}

export const DocsSidebar: React.FC<DocsSidebarProps> = ({ onItemClick }) => {
  const pathname = usePathname();

  return (
    <aside className="w-full space-y-6 py-6 text-sm">
      {NAV_SECTIONS.map(section => (
        <div key={section.id} className="space-y-2">
          {/* Section Heading */}
          <div className="flex items-center gap-2 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            {iconMap[section.iconName] || <Layers className="h-4 w-4 text-cyan-400" />}
            <span>{section.title}</span>
          </div>

          {/* Items */}
          <div className="space-y-0.5">
            {section.items.map(item => {
              const itemHref = `/${item.slug}`;
              const isActive = pathname === itemHref || pathname === `/${item.slug}/`;

              return (
                <Link
                  key={item.slug}
                  href={itemHref}
                  onClick={onItemClick}
                  className={`group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-300 font-semibold border border-cyan-500/30 shadow-[0_0_12px_rgba(0,242,254,0.15)]'
                      : 'text-gray-400 hover:bg-white/[0.04] hover:text-gray-200'
                  }`}
                >
                  <span className="truncate">{item.title}</span>

                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    {item.badge && (
                      <span
                        className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                          item.badge === 'HOT'
                            ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                            : item.badge === 'NEW'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : item.badge === 'UPD'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      {/* External Fast Links Box */}
      <div className="pt-4 border-t border-white/[0.08] px-3 space-y-2">
        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
          Quick Resources
        </div>
        <a
          href="https://senzolab.xyz/app/nodes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-xs text-gray-400 hover:text-cyan-300 transition-colors py-1"
        >
          <span>Node Operator Hub</span>
          <ExternalLink className="h-3 w-3" />
        </a>
        <a
          href="https://launch.senzolab.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-xs text-gray-400 hover:text-cyan-300 transition-colors py-1"
        >
          <span>Create Token Capsule</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </aside>
  );
};

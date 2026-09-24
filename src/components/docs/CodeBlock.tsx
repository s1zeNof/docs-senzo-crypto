'use client';

import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  lang?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang = 'bash', filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 overflow-hidden rounded-2xl border border-white/10 bg-[#07090e] shadow-xl">
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs">
        <div className="flex items-center gap-2 text-gray-400 font-mono">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          <span>{filename || lang}</span>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] px-2.5 py-1 text-[11px] font-medium text-gray-300 hover:text-white transition-all"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-gray-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto leading-relaxed whitespace-pre">
        <code>{code}</code>
      </div>
    </div>
  );
};

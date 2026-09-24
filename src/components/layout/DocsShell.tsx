'use client';

import React, { useState } from 'react';
import { DocsHeader } from './DocsHeader';
import { DocsSidebar } from './DocsSidebar';

export const DocsShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#05070b]">
      {/* Header */}
      <DocsHeader
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Main Container */}
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Desktop Left Sidebar */}
          <div className="hidden lg:block border-r border-white/[0.08] pr-6 min-h-[calc(100vh-4rem)]">
            <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <DocsSidebar />
            </div>
          </div>

          {/* Mobile Drawer */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-[#0c0f17] border-r border-white/10 p-6 overflow-y-auto z-10 shadow-2xl">
                <DocsSidebar onItemClick={() => setIsMobileMenuOpen(false)} />
              </div>
            </div>
          )}

          {/* Main Article Content */}
          <main className="py-8 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
};

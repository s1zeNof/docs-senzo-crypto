import type { Metadata } from 'next';
import './globals.css';
import { DocsShell } from '../components/layout/DocsShell';

export const metadata: Metadata = {
  title: 'Senzo Documentation | Official Technical Docs',
  description:
    'Complete technical documentation for the Senzo Ecosystem: Senzo Node Network (SNN), DePIN worker nodes, Launch OS token capsules, bonding curves, and Trading API.',
  keywords: [
    'Senzo',
    'Senzo Docs',
    'Senzo Node Network',
    'SNN',
    'DePIN',
    'TON',
    'Launchpad',
    'Worker Node',
    'Provider Node',
  ],
  authors: [{ name: 'Senzo Core Team' }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#05070b] text-[#f8fafc] antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  );
}

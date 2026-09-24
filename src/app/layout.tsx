import type { Metadata } from 'next';
import './globals.css';
import { DocsShell } from '../components/layout/DocsShell';

export const metadata: Metadata = {
  title: 'Senzo Documentation | Офіційна документація екосистеми Senzo',
  description:
    'Повна технічна документація екосистеми Senzo: Senzo Node Network (SNN), DePIN запуск воркерів, Launch OS токен-капсули, бондинг-криві та Trading API.',
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
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="dark">
      <body className="min-h-screen bg-[#05070b] text-[#f8fafc] antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  );
}

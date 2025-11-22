import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DisleksiAI - Adaptif Okuma Yardımcısı',
  description: 'Kişiselleştirilmiş disleksi öğrenme platformu - 10-16 yaş öğrenciler için AI destekli okuma eğitimi',
  keywords: ['disleksi', 'okuma', 'eğitim', 'yapay zeka', 'öğrenme', 'Türkçe'],
  authors: [{ name: 'DisleksiAI Team' }],
  creator: 'DisleksiAI',
  publisher: 'DisleksiAI',
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    title: 'DisleksiAI - Adaptif Okuma Yardımcısı',
    description: 'Kişiselleştirilmiş disleksi öğrenme platformu',
    siteName: 'DisleksiAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DisleksiAI - Adaptif Okuma Yardımcısı',
    description: 'Kişiselleştirilmiş disleksi öğrenme platformu',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow zoom for accessibility
  userScalable: true,
  themeColor: '#2563EB',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased min-h-screen">
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

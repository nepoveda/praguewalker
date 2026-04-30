import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prague Walker',
  description: 'Explore Prague with our guided tours.',
  openGraph: {
    title: 'Prague Walker',
    description: 'Explore Prague with our guided tours.',
    url: 'https://praguewalker.example.com',
    siteName: 'Prague Walker',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Prague Walker logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

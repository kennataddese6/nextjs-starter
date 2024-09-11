import '@/app/ui/global.css';
import { Metadata } from 'next';
import { inter } from '@/app/ui/font';

export const metadata: Metadata = {
  title: {
    template: '%s | Next JS Starter',
    default: 'Next JS Starter',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

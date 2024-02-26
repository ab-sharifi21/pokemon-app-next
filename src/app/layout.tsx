import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokemon App',
  description: 'Simple Pokemon App with Next',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex min-h-screen justify-center bg-primaryBgColor text-white`}
      >
        <div className="p-6">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

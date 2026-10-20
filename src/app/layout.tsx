import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Parth Hada | Full-Stack Developer & AI Systems Builder',
  description: 'Portfolio of Parth Hada, Computer Science student at IIIT Vadodara building full-stack applications and AI systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

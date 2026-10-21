'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';

const links = [
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['About', '#about'],
  ['Contact', '#contact'],
];

export default function PortfolioNavbar() {
  return (
    <header className="portfolio-nav">
      <div className="site-container nav-inner">
        <Link href="#home" className="wordmark" aria-label="Parth Hada home">PH<span>.</span></Link>
        <nav aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a href="/resume" download className="nav-resume">Resume <Download size={14} /></a>
      </div>
    </header>
  );
}

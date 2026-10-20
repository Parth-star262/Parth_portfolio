'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const portfolioLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function PortfolioNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080615]/90 backdrop-blur-xl text-white">
      <div className="site-container flex h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-xl font-semibold tracking-tight text-white"
          onClick={closeMobile}
        >
          Parth<span className="text-violet-400">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {portfolioLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://dsa-judge.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/12 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
          >
            <span>DSA-Judge</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            href="/resume"
            download
            className="inline-flex items-center rounded-lg bg-violet-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#0c0a18] lg:hidden"
          >
            <nav className="site-container grid gap-1 py-4" aria-label="Mobile">
              {portfolioLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 px-1">
                <a
                  href="https://dsa-judge.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-slate-200"
                >
                  DSA-Judge
                </a>
                <a
                  href="/resume"
                  download
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white"
                >
                  Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

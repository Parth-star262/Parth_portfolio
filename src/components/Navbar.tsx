'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Code2, Menu, X } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#030014]/85 backdrop-blur-2xl text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group" onClick={closeMobile}>
          <div className="text-2xl font-black tracking-tight text-white font-['Outfit']">
            Parth<span className="text-indigo-400">.</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
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

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://dsa-judge.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-500/20 hover:border-indigo-500/50"
          >
            <Code2 size={13} />
            <span>DSA-Judge</span>
            <ArrowUpRight size={12} className="text-indigo-400" />
          </a>
          <a
            href="/resume"
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-900 shadow transition hover:bg-slate-200 active:scale-[0.98]"
          >
            <span>Resume</span>
            <span>↓</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#07091b] md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
              {portfolioLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex gap-2">
                <a
                  href="https://dsa-judge.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 text-xs font-bold rounded-lg border border-indigo-500/30 bg-indigo-500/20 text-indigo-300"
                >
                  DSA-Judge ↗
                </a>
                <a
                  href="/resume"
                  download
                  className="flex-1 text-center py-2 text-xs font-bold rounded-lg bg-white text-slate-900"
                >
                  Resume ↓
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

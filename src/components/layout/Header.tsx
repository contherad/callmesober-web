'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from 'next-themes';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/safety', label: 'Safety' },
  { href: '/support', label: 'Support' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logos/logo-orange.svg"
            alt="Call Me Sober"
            className="h-20 w-auto dark:hidden"
          />
          <img
            src="/logos/logo-white.svg"
            alt="Call Me Sober"
            className="h-20 w-auto hidden dark:block"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-subtle hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="w-px h-6 bg-border" />

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-xl hover:bg-card transition-colors text-subtle hover:text-foreground"
            aria-label="Toggle theme"
          >
            <Sun className="w-[18px] h-[18px] hidden dark:block" />
            <Moon className="w-[18px] h-[18px] dark:hidden" />
          </button>

          <Link
            href="/#download"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-6 py-2.5 rounded-full hover:brightness-110 transition-all shadow-[0_2px_12px_rgba(232,85,12,0.3)]"
          >
            <Download className="w-4 h-4" />
            Download
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-xl hover:bg-card transition-colors text-subtle"
            aria-label="Toggle theme"
          >
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 dark:hidden" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-xl hover:bg-card transition-colors text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-subtle hover:text-foreground py-3 px-4 rounded-xl hover:bg-card transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/#download"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground text-center font-medium px-6 py-3.5 rounded-full hover:brightness-110 transition-all shadow-[0_2px_12px_rgba(232,85,12,0.3)]"
            >
              <Download className="w-4 h-4" />
              Download the App
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

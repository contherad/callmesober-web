import Link from 'next/link';
import { Heart } from 'lucide-react';
import CrisisBanner from './CrisisBanner';
import { DONATION_URL, SUPPORT_EMAIL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        {/* Crisis banner */}
        <div className="mb-12">
          <CrisisBanner />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/logos/logo-orange.svg"
              alt="Call Me Sober"
              className="h-16 w-auto mb-4 dark:hidden"
            />
            <img
              src="/logos/logo-white.svg"
              alt="Call Me Sober"
              className="h-16 w-auto mb-4 hidden dark:block"
            />
            <p className="text-sm text-muted leading-relaxed">
              Free, anonymous peer support for addiction recovery. No judgment. Just a call.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Learn More</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/safety" className="hover:text-foreground transition-colors">Safety &amp; Privacy</Link></li>
              <li><Link href="/support" className="hover:text-foreground transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Donate */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Support the Line</h3>
            <p className="text-sm text-muted mb-4">
              Your optional donation helps keep the line open.
            </p>
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:brightness-110 transition-all shadow-[0_2px_12px_rgba(232,85,12,0.25)]"
            >
              <Heart className="w-4 h-4" />
              Donate via PayPal
            </a>
            <p className="text-xs text-muted mt-3">
              Donations are optional and do not unlock any app features.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Southworth Group, LLC. All rights reserved.</p>
          <p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-foreground transition-colors">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Mail, MessageCircle, Heart, Phone, AlertTriangle } from 'lucide-react';
import { DONATION_URL, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help using Call Me Sober or support our mission with an optional donation.',
};

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Support</h1>
        <p className="text-subtle">Get help or support our mission</p>
      </div>

      {/* Get Help */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Get Help</h2>
        <div className="space-y-3">
          <Link
            href="/faq"
            className="flex items-center gap-4 p-4 bg-background rounded-lg hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-medium text-foreground">Frequently Asked Questions</div>
              <div className="text-sm text-muted">Find answers to common questions</div>
            </div>
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-4 p-4 bg-background rounded-lg hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-medium text-foreground">Contact Us</div>
              <div className="text-sm text-muted">Send us a message</div>
            </div>
          </Link>

          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="flex items-center gap-4 p-4 bg-background rounded-lg hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-medium text-foreground">Email Support</div>
              <div className="text-sm text-muted">{SUPPORT_EMAIL}</div>
            </div>
          </a>
        </div>
      </div>

      {/* Support the Line */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Support the Line</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Call Me Sober is free to use. Your optional donation helps keep the line open for others in their moment of need.
        </p>
        <a
          href={DONATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-medium px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          <Heart className="w-5 h-5" />
          Donate via PayPal
        </a>
        <p className="text-xs text-muted mt-3">
          Donations are not required and do not unlock any features.
        </p>
      </div>

      {/* Emergency Notice */}
      <div className="bg-destructive/5 border border-destructive/15 rounded-xl p-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <AlertTriangle className="w-4 h-4 text-destructive" />
          <span className="text-sm font-medium text-destructive">This is not an emergency service.</span>
        </div>
        <p className="text-sm text-muted">
          If you are in immediate danger, call{' '}
          <a href="tel:911" className="text-foreground underline font-medium">911</a>
        </p>
      </div>
    </div>
  );
}

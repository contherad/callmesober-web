import { Heart } from 'lucide-react';
import { DONATION_URL } from '@/lib/constants';

export default function DonateCTA() {
  return (
    <section className="py-20 md:py-32 section-warm-gradient">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="relative bg-card border border-border rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent pointer-events-none" />

          <div className="relative">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-breathe">
              <Heart className="w-7 h-7 text-primary" strokeWidth={1.8} />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Support the Line
            </h2>
            <p className="text-lg text-subtle mb-8 max-w-md mx-auto leading-relaxed">
              Call Me Sober is free to use. Your optional donation helps keep the line open for someone in their moment of need.
            </p>

            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-full text-lg hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(232,85,12,0.35)] hover:shadow-[0_6px_28px_rgba(232,85,12,0.45)]"
            >
              <Heart className="w-5 h-5" />
              Donate via PayPal
            </a>

            <p className="text-sm text-muted mt-5">
              Donations are optional and do not unlock any app features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

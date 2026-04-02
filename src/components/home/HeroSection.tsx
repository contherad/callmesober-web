import { HEADLINE, SUBHEADLINE, TAGLINE } from '@/lib/constants';
import { Phone } from 'lucide-react';
import BetaSignupForm from '@/components/ui/BetaSignupForm';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-glow">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-32 text-center">
        {/* Pulsing phone icon — the brand mark */}
        <div className="flex justify-center mb-10 animate-fade-in-up">
          <div className="relative">
            {/* Outer pulse ring */}
            <div className="absolute inset-[-16px] bg-primary/10 rounded-full animate-pulse-ring-outer" />
            {/* Inner pulse ring */}
            <div className="absolute inset-[-8px] bg-primary/15 rounded-full animate-pulse-ring" />
            {/* Icon circle */}
            <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(232,85,12,0.35)]">
              <Phone className="w-10 h-10 text-primary-foreground" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {HEADLINE}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-subtle max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {SUBHEADLINE}
        </p>

        {/* Tagline */}
        <p
          className="font-serif italic text-tagline text-base md:text-lg mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          &ldquo;{TAGLINE}&rdquo;
        </p>

        {/* Beta signup form */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <BetaSignupForm id="beta" />
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent pointer-events-none" />
    </section>
  );
}

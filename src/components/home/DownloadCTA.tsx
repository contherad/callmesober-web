import { ArrowDown } from 'lucide-react';
import BetaSignupForm from '@/components/ui/BetaSignupForm';

export default function DownloadCTA() {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
          <ArrowDown className="w-4 h-4" />
          Available on iOS &amp; Android
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Get the App
        </h2>
        <p className="text-lg text-subtle mb-10 max-w-lg mx-auto leading-relaxed">
          Currently in beta. Join early and help shape the future of peer support for addiction recovery.
        </p>

        <BetaSignupForm />
      </div>
    </section>
  );
}

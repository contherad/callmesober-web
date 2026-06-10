import AppStoreButton from '@/components/ui/AppStoreButton';
import GooglePlayBadge from '@/components/ui/GooglePlayBadge';
import WaitlistForm from '@/components/ui/WaitlistForm';
import { AppleLogo } from '@/components/ui/BrandLogos';

export default function DownloadCTA() {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
          <AppleLogo className="w-4 h-4" />
          Now available on iPhone
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Get the App
        </h2>
        <p className="text-lg text-subtle mb-10 max-w-lg mx-auto leading-relaxed">
          Call Me Sober is live on the App Store. Download it free and connect with
          someone who&apos;s been there, whenever you need it.
        </p>

        <div className="flex flex-col items-center">
          <AppStoreButton />
        </div>

        <div className="mt-12 pt-10 border-t border-border max-w-md mx-auto flex flex-col items-center">
          <GooglePlayBadge />
          <p className="text-base font-semibold text-foreground mt-3 mb-1">Coming soon to Android</p>
          <p className="text-sm text-subtle mb-5">
            Not on iPhone? Join the wait list and we&apos;ll email you the moment the
            Android app launches.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

import AppStoreButton from '@/components/ui/AppStoreButton';
import GooglePlayBadge from '@/components/ui/GooglePlayBadge';
import { Smartphone } from 'lucide-react';
import ArtDirectedImage from '@/components/ui/ArtDirectedImage';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 md:py-32 bg-card relative overflow-hidden scroll-mt-28">
      {/* Photo backdrop — scrim in the card color keeps the headline and store
          badges fully legible in both themes. */}
      <div className="absolute inset-0" aria-hidden="true">
        <ArtDirectedImage
          name="sober-friends-recovery-community-connection"
          alt=""
          width={2400}
          height={1610}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-card/90" />
      </div>

      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
          <Smartphone className="w-4 h-4" />
          Now available on iPhone and Android
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Get the App
        </h2>
        <p className="text-lg text-subtle mb-10 max-w-lg mx-auto leading-relaxed">
          Call Me Sober is live on the App Store and Google Play. Download it free and
          connect with someone who&apos;s been there, whenever you need it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <AppStoreButton />
          <GooglePlayBadge />
        </div>
      </div>
    </section>
  );
}

import HeroSection from '@/components/home/HeroSection';
import FounderStory from '@/components/home/FounderStory';
import HowItWorks from '@/components/home/HowItWorks';
import FeatureHighlights from '@/components/home/FeatureHighlights';
import WhyCallMeSober from '@/components/home/WhyCallMeSober';
import ConnectionQuote from '@/components/home/ConnectionQuote';
import DownloadCTA from '@/components/home/DownloadCTA';
import DonateCTA from '@/components/home/DonateCTA';
import { websiteSchema, mobileAppSchema } from '@/lib/schema';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema()) }}
      />
      <HeroSection />
      <FounderStory />
      <HowItWorks />
      <FeatureHighlights />
      <WhyCallMeSober />
      <ConnectionQuote />
      <DownloadCTA />
      <DonateCTA />
    </>
  );
}

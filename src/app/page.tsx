import HeroSection from '@/components/home/HeroSection';
import FounderStory from '@/components/home/FounderStory';
import HowItWorks from '@/components/home/HowItWorks';
import WhyCallMeSober from '@/components/home/WhyCallMeSober';
import DownloadCTA from '@/components/home/DownloadCTA';
import DonateCTA from '@/components/home/DonateCTA';
import { websiteSchema } from '@/lib/schema';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <HeroSection />
      <FounderStory />
      <HowItWorks />
      <WhyCallMeSober />
      <DownloadCTA />
      <DonateCTA />
    </>
  );
}

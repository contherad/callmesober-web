import { YouTubeEmbed } from '@next/third-parties/google';
import { founderStoryVideoSchema } from '@/lib/schema';

export default function FounderStory() {
  return (
    <section className="py-20 md:py-28 bg-card relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderStoryVideoSchema()) }}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Why we built this
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.15]">
            We&rsquo;ve never been more connected.
            <br />
            Yet never more alone.
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto leading-relaxed">
            A short film about addiction, isolation, and the power of human connection.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(232,85,12,0.12)] border border-border bg-background">
          <YouTubeEmbed
            videoid="97ASAZ88pJg"
            params="rel=0"
            playlabel="Play: A founder's story"
          />
        </div>
      </div>
    </section>
  );
}

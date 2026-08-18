import { TAGLINE } from '@/lib/constants';

export default function ConnectionQuote() {
  const [firstSentence] = TAGLINE.split(' It’s ');

  return (
    <section className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <figure className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="text-primary text-6xl md:text-7xl font-bold leading-none select-none mb-4 md:mb-6" aria-hidden="true">
          &ldquo;
        </div>
        <blockquote>
          <p className="text-3xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight text-balance">
            {firstSentence}
            <br className="hidden md:block" />{' '}
            It&rsquo;s <span className="text-primary">connection</span>.
          </p>
        </blockquote>
        <figcaption className="mt-8 md:mt-10 text-sm font-medium text-muted uppercase tracking-wider">
          Johann Hari
        </figcaption>
      </figure>
    </section>
  );
}

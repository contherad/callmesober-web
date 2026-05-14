import type { Metadata } from 'next';
import { Heart, Users, Lock, Shield, Headphones } from 'lucide-react';
import { TAGLINE, SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Call Me Sober is a free, anonymous peer-to-peer support hotline for addiction recovery. Learn about our mission, values, and the people behind the line.',
};

const VALUES = [
  {
    icon: Lock,
    title: 'Anonymity as Dignity',
    description: 'Phone numbers are never shared. Display names are aliases. The system is designed so no participant can identify another.',
  },
  {
    icon: Users,
    title: 'Peer Over Professional',
    description: 'We deliberately position as peer support, not medical advice. Our listeners understand through lived experience, not textbooks.',
  },
  {
    icon: Shield,
    title: 'Accessibility Through Simplicity',
    description: 'Free, donation-funded, and requires only a phone number. The call flow is three steps: tap, match, talk.',
  },
  {
    icon: Heart,
    title: 'Reciprocity',
    description: 'The dual-role system creates a community, not a service. Listeners are peers who choose to give back.',
  },
  {
    icon: Headphones,
    title: 'Radical Honesty About Limitations',
    description: 'We are transparent about what we are not. Every screen includes a clear path to 911 and 988 for emergencies.',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-10">About Call Me Sober</h1>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-foreground mb-3">Our Mission</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Call Me Sober is a free, anonymous peer-to-peer support hotline connecting people struggling with addiction to peers who understand through lived experience. We exist to make human connection available at the moment of crisis &mdash; no cost, no judgment, no identity required.
        </p>
        <p className="font-serif italic text-tagline text-base">
          &ldquo;{TAGLINE}&rdquo;
        </p>
      </section>

      {/* Why We Built This */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-foreground mb-3">Why We Built This</h2>
        <p className="text-sm text-muted leading-relaxed mb-3">
          We built Call Me Sober for the 2 AM moment. When someone is alone, struggling, and needs to hear a human voice &mdash; not read a text, not attend a meeting, not schedule a session, not call an institutional helpline.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          No other product combines immediate, free, anonymous, voice-based peer support specifically for addiction. We occupy a unique space: more immediate than therapy apps, more personal than text-based crisis lines, more focused than general crisis lines, more accessible than recovery communities, and more human than tracking apps.
        </p>
      </section>

      {/* What We're Not */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-foreground mb-3">What We&apos;re Not</h2>
        <p className="text-sm text-muted leading-relaxed">
          Call Me Sober is peer support, not professional counseling. We are not an emergency service, not a substitute for therapy, and not a crisis hotline. Our listeners are real people with lived experience &mdash; not licensed therapists. If you are in immediate danger, please call <a href="tel:911" className="text-foreground underline">911</a> or the <a href="tel:988" className="text-foreground underline">988 Suicide &amp; Crisis Lifeline</a>.
        </p>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-foreground mb-6">Our Values</h2>
        <div className="space-y-5">
          {VALUES.map((value, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-lg font-bold text-foreground mb-3">The Team</h2>
        <p className="text-sm text-muted leading-relaxed mb-2">
          Call Me Sober is operated by Beehavr LLC.
        </p>
        <p className="text-sm text-muted">
          Questions? Reach out at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-foreground underline font-medium">
            {SUPPORT_EMAIL}
          </a>
        </p>
      </section>
    </div>
  );
}

import { Lock, Heart, Shield, Phone } from 'lucide-react';

const VALUES = [
  {
    icon: Lock,
    title: 'Completely Anonymous',
    description: 'Phone numbers are never shared. No personal info collected. Your identity stays private throughout the entire call.',
    gradient: 'from-primary/10 to-transparent',
  },
  {
    icon: Heart,
    title: 'Peer Support, Not Clinical',
    description: 'Real people with lived experience in addiction and recovery. They\u2019ve been there. They understand.',
    gradient: 'from-success/10 to-transparent',
  },
  {
    icon: Shield,
    title: 'Free Forever',
    description: 'No fees, no subscriptions, no hidden costs. Funded by optional community donations.',
    gradient: 'from-accent-foreground/10 to-transparent',
  },
  {
    icon: Phone,
    title: 'Available When You Need It',
    description: 'Toggle your availability on when you\u2019re ready. Get matched in moments. Talk now, not next Tuesday.',
    gradient: 'from-primary/10 to-transparent',
  },
];

export default function WhyCallMeSober() {
  return (
    <section className="py-20 md:py-32 section-warm-gradient relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Why Call Me Sober</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Built for the 2 AM moment
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto leading-relaxed">
            When you need to hear a human voice &mdash; not read a text, not attend a meeting, not schedule a session. We&apos;re here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 stagger-children">
          {VALUES.map((value, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl p-7 lg:p-8 hover:border-primary/30 hover:shadow-[0_4px_24px_rgba(232,85,12,0.08)] transition-all duration-300"
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-base text-muted leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

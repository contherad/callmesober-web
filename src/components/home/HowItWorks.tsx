import { Download, Heart, Users, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: Download,
    title: 'Download the app',
    description: 'Free on iOS and Android. Just sign up with your email and phone number.',
    accent: 'from-primary/20 to-primary/5',
  },
  {
    icon: Heart,
    title: 'Tap \u201CI\'m Struggling\u201D',
    description: 'We\u2019ll find a peer supporter and connect you anonymously. No names, no numbers shared.',
    accent: 'from-primary/15 to-primary/5',
  },
  {
    icon: Users,
    title: 'Talk to someone who gets it',
    description: 'Up to 20-minute calls with real people who\u2019ve been through addiction. No judgment. Just a call.',
    accent: 'from-success/15 to-success/5',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-card relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three steps to human connection
          </h2>
          <p className="text-lg text-subtle max-w-lg mx-auto">
            No appointments. No waitlists. Just a call when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {STEPS.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-background border border-border rounded-2xl p-8 h-full hover:border-primary/30 hover:shadow-[0_4px_24px_rgba(232,85,12,0.08)] transition-all duration-300">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.accent} rounded-2xl flex items-center justify-center`}>
                    <step.icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                  </div>
                  <span className="text-xs font-bold text-muted uppercase tracking-widest">Step {i + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-base text-muted leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow connector (hidden on last + mobile) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-background border border-border rounded-full items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-muted" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

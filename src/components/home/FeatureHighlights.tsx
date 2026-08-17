import { CalendarHeart, Mic, MessagesSquare, BellRing } from 'lucide-react';
import ArtDirectedImage from '@/components/ui/ArtDirectedImage';

const FEATURES = [
  {
    icon: CalendarHeart,
    title: 'Sobriety Tracker',
    description:
      'Keep a quiet record of your days with gentle daily check-ins and milestone celebrations. No streaks, no scorekeeping. And if something happens, the clock resets — what you learned doesn’t.',
  },
  {
    icon: Mic,
    title: 'AI Sobriety Coach',
    description:
      'A short, judgment-free voice session whenever you need one. A few minutes, your voice, whatever’s on your mind — the coach won’t lecture or keep score. Private to you, deletable anytime.',
  },
  {
    icon: MessagesSquare,
    title: 'Community',
    description:
      'Anonymous, moderated discussion boards where you can find and offer support — from early recovery questions to cravings, triggers, wins, and milestones.',
  },
  {
    icon: BellRing,
    title: 'Reminders',
    description:
      'Gentle nudges you set for yourself — to journal, call a friend, breathe, get to a meeting, or anything else that helps you stay steady.',
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl overflow-hidden mb-14 md:mb-16 aspect-[16/9] sm:aspect-[2/1]">
          <ArtDirectedImage
            name="addiction-recovery-support-call-at-night"
            alt="A man sitting on the edge of his bed at night, on the phone"
            width={2400}
            height={1340}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">More Than a Hotline</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Support between the calls, too
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto leading-relaxed">
            The call is the heart of Call Me Sober. Around it, we&apos;ve built quiet tools
            for the everyday work of recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 stagger-children">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl p-7 lg:p-8 hover:border-primary/30 hover:shadow-[0_4px_24px_rgba(232,85,12,0.08)] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-base text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

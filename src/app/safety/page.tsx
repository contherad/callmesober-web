import type { Metadata } from 'next';
import { AlertTriangle, Heart, Lock, Users, Shield, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Safety & Privacy',
  description:
    'How Call Me Sober keeps you safe and anonymous. Emergency information, anonymity details, and community guidelines.',
};

export default function SafetyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Safety &amp; Privacy</h1>

      {/* Emergency Notice */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Emergency Services</h2>
            <p className="text-sm text-muted leading-relaxed mb-3">
              This app is <strong className="text-foreground">not</strong> a substitute for emergency services. If you or someone else is in immediate danger, please call:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:911"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call 911
              </a>
              <a
                href="tel:988"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-sm font-medium px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call 988
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* What This App Provides */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">What This App Provides</h2>
          </div>
          <div className="text-sm text-muted leading-relaxed space-y-2">
            <p>
              Call Me Sober connects you with peer supporters who have lived experience with addiction and recovery. Our listeners offer empathy, understanding, and a non-judgmental ear.
            </p>
            <p>
              <strong className="text-foreground">Important:</strong> This is peer support, not professional counseling or medical advice. Our listeners are not licensed therapists or healthcare providers.
            </p>
            <p className="mt-4">
              <strong className="text-foreground">Operated by:</strong> Southworth Group, LLC
            </p>
          </div>
        </section>

        {/* Your Anonymity */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <Lock className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Your Anonymity</h2>
          </div>
          <p className="text-sm text-muted leading-relaxed mb-2">
            Calls are completely anonymous. Neither party sees the other&apos;s real name, phone number, or any identifying information during the call. You can share as much or as little as you&apos;re comfortable with.
          </p>
          <ul className="list-disc list-inside text-sm text-muted space-y-1">
            <li>Your phone number is never shared</li>
            <li>You choose your display name or alias</li>
            <li>Calls are not recorded</li>
            <li>Call history is only visible to you</li>
          </ul>
        </section>

        {/* How Calls Work */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">How Calls Work</h2>
          </div>
          <p className="text-sm text-muted leading-relaxed mb-2">
            When you request a call, we match you with an available Support Listener. The call is routed through our secure system, keeping both parties&apos; contact information private.
          </p>
          <ul className="list-disc list-inside text-sm text-muted space-y-1">
            <li>Calls have a 20-minute time limit</li>
            <li>Either party can end the call at any time</li>
            <li>A gentle timer shows remaining time</li>
            <li>You can provide optional feedback after calls</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Data Protection</h2>
          </div>
          <p className="text-sm text-muted leading-relaxed mb-2">
            We take your privacy seriously. Your data is encrypted and stored securely. We never sell your information to third parties.
          </p>
          <ul className="list-disc list-inside text-sm text-muted space-y-1">
            <li>End-to-end encryption for all communications</li>
            <li>Minimal data collection</li>
            <li>You can delete your account at any time</li>
            <li>HIPAA-conscious practices</li>
          </ul>
        </section>

        {/* Community Guidelines */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Community Guidelines</h2>
          </div>
          <p className="text-sm text-muted leading-relaxed mb-2">
            We&apos;re committed to maintaining a safe, supportive community. We do not tolerate:
          </p>
          <ul className="list-disc list-inside text-sm text-muted space-y-1">
            <li>Harassment or abusive behavior</li>
            <li>Discrimination of any kind</li>
            <li>Solicitation or promotion of illegal activities</li>
            <li>Sharing of explicit or inappropriate content</li>
          </ul>
          <p className="text-sm text-muted mt-3">
            Violations may result in immediate account suspension. Please report any concerns using the Report feature after a call.
          </p>
        </section>
      </div>
    </div>
  );
}

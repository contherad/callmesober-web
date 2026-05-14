import type { Metadata } from 'next';
import { PRIVACY_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Call Me Sober collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-subtle mb-10">Last updated: May 13, 2026</p>

      <div className="space-y-8 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Overview</h2>
          <p>
            Call Me Sober (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is operated by Beehavr LLC. This Privacy Policy explains how we collect, use, and protect your information when you use our peer support calling application and the optional Voice Coach feature.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Information We Collect</h2>
          <p>
            <strong className="text-foreground">Account Information:</strong> Email address and phone number for authentication and call delivery.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Peer Call Data:</strong> Call duration, timestamps, and connection status. We do not record or store audio from peer support calls.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Voice Coach Data:</strong> If you use the optional Voice Coach feature, we record your microphone audio during the session, generate a transcript, and store both on our servers. See the Voice Coach &amp; Third-Party AI section below.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Usage Data:</strong> Basic app interaction data to improve our service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To connect you with peer supporters via phone calls</li>
            <li>To deliver the Voice Coach feature when you choose to use it</li>
            <li>To authenticate your account and prevent abuse</li>
            <li>To improve our service and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Privacy Protection</h2>
          <p>
            <strong className="text-foreground">Anonymous Peer Matching:</strong> Your phone number is never shared with other users. Peer calls are connected through our secure system.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">No Peer Call Recording:</strong> We do not record, transcribe, or store any audio from peer support calls. (Voice Coach sessions are handled separately &mdash; see below.)
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Data Encryption:</strong> Phone numbers, Voice Coach transcripts and recordings, and other sensitive data are encrypted at rest and in transit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Data Retention</h2>
          <p>
            We retain your account information while your account is active. Call metadata is retained for service improvement and safety purposes. Voice Coach transcripts and recordings are retained until you delete them or close your account. You may delete your account at any time through the app settings, which will remove or anonymize your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Delete your account and associated data</li>
            <li>Delete your Voice Coach transcripts and recordings at any time</li>
            <li>Withdraw Voice Coach consent at any time</li>
            <li>Opt out of non-essential communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Voice Coach &amp; Third-Party AI</h2>
          <p>
            The Voice Coach is an optional AI-powered conversation feature. It works differently from peer calls, and you must give separate, explicit permission inside the app before your first session.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Who we share data with.</strong> Microphone audio captured during a Voice Coach session is transmitted to ElevenLabs, Inc. (a third-party AI voice service in the United States), which uses that audio to generate the coach&apos;s spoken responses in real time. We do not share your name, email, phone number, contacts, or other account identifiers with ElevenLabs. See{' '}
            <a href="https://elevenlabs.io/privacy-policy" className="text-foreground underline" target="_blank" rel="noreferrer">
              elevenlabs.io/privacy-policy
            </a>
            .
          </p>
          <p className="mt-2">
            <strong className="text-foreground">What we send.</strong> Only what you say into the microphone during an active coach session, plus a small set of non-identifying context fields (such as your sobriety streak count, if you&apos;ve enabled the tracker).
          </p>
          <p className="mt-2">
            <strong className="text-foreground">What we store.</strong> Unlike peer calls, Voice Coach sessions are recorded and transcribed so you can review them and so we can improve safety tooling. Recordings and transcripts are stored encrypted on our servers and are visible only to your account.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Not an emergency service.</strong> The coach is not a clinician and cannot dispatch help. If the conversation reaches a crisis threshold, the coach will surface hotline resources (988, Crisis Text Line, SAMHSA).
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Your control.</strong> You may decline Voice Coach entirely, withdraw consent at any time, and delete all coach data in Settings &rarr; Voice Coach &rarr; Delete coach data. Deletion wipes every transcript, recording, and session record tied to your account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Third-Party Services</h2>
          <p>
            We use Twilio (
            <a href="https://www.twilio.com/legal/privacy" className="text-foreground underline" target="_blank" rel="noreferrer">
              twilio.com/legal/privacy
            </a>
            ) for secure call routing. Twilio processes call connections but does not have access to peer call content.
          </p>
          <p className="mt-2">
            If you use the Voice Coach, we also share microphone audio with ElevenLabs, Inc. as described in the Voice Coach &amp; Third-Party AI section above.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Equivalent protection.</strong> Twilio and ElevenLabs are bound by written data-processing agreements that require them to protect your information with safeguards at least equal to those described in this Privacy Policy, to use the data only to provide the service we requested, and not to sell or repurpose it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Children&apos;s Privacy</h2>
          <p>
            This service is not intended for users under 18 years of age. We do not knowingly collect information from children.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. We will notify you of significant changes through the app or via email.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            <strong className="text-foreground">Beehavr LLC</strong>
            <br />
            Email:{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`} className="text-foreground underline">
              {PRIVACY_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}

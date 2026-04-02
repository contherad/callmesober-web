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
      <p className="text-subtle mb-10">Last updated: January 30, 2026</p>

      <div className="space-y-8 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Overview</h2>
          <p>
            Call Me Sober (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is operated by Southworth Group, LLC. This Privacy Policy explains how we collect, use, and protect your information when you use our peer support calling application.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Information We Collect</h2>
          <p>
            <strong className="text-foreground">Account Information:</strong> Email address and phone number for authentication and call delivery.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Call Data:</strong> Call duration, timestamps, and connection status. We do not record or store audio from calls.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Usage Data:</strong> Basic app interaction data to improve our service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To connect you with peer supporters via phone calls</li>
            <li>To authenticate your account and prevent abuse</li>
            <li>To improve our service and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Privacy Protection</h2>
          <p>
            <strong className="text-foreground">Anonymous Matching:</strong> Your phone number is never shared with other users. Calls are connected through our secure system.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">No Call Recording:</strong> We do not record, transcribe, or store any audio from your conversations.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Data Encryption:</strong> Phone numbers and sensitive data are encrypted at rest and in transit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Data Retention</h2>
          <p>
            We retain your account information while your account is active. Call metadata is retained for service improvement and safety purposes. You may delete your account at any time through the app settings, which will remove or anonymize your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Delete your account and associated data</li>
            <li>Opt out of non-essential communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Third-Party Services</h2>
          <p>
            We use Twilio for secure call routing. Twilio processes call connections but does not have access to call content. For more information, see Twilio&apos;s privacy policy at twilio.com/legal/privacy.
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
            <strong className="text-foreground">Southworth Group, LLC</strong>
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

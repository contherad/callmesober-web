import type { Metadata } from 'next';
import { LEGAL_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Call Me Sober peer support application.',
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
      <p className="text-subtle mb-10">Last updated: January 30, 2026</p>

      <div className="space-y-8 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Agreement to Terms</h2>
          <p>
            By using Call Me Sober (&ldquo;the App&rdquo;), you agree to these Terms of Service. The App is operated by Southworth Group, LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). If you do not agree to these terms, please do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Nature of Service</h2>
          <p>
            <strong className="text-foreground">Peer Support Only:</strong> Call Me Sober provides peer-to-peer support from individuals with lived experience in addiction and recovery. This is NOT professional counseling, therapy, medical advice, or emergency services.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Not Emergency Services:</strong> If you are experiencing a medical emergency or are in immediate danger, call 911 or your local emergency services immediately. This App is not designed for crisis intervention.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">No Professional Advice:</strong> Our peer supporters are not licensed therapists, counselors, or healthcare providers. Nothing said during a call should be considered professional medical or mental health advice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Eligibility</h2>
          <p>
            You must be at least 18 years old to use this App. By using the App, you represent that you meet this age requirement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">User Conduct</h2>
          <p>You agree NOT to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Use the App for any illegal purpose</li>
            <li>Harass, abuse, or threaten other users</li>
            <li>Share explicit, violent, or harmful content</li>
            <li>Attempt to identify or contact other users outside the App</li>
            <li>Record calls without consent of all parties</li>
            <li>Misrepresent yourself or impersonate others</li>
            <li>Use the App while impaired in a way that endangers yourself or others</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Privacy and Anonymity</h2>
          <p>
            We protect user anonymity. Your phone number is never shared with other users. Calls are routed through our secure system to maintain privacy. Please see our Privacy Policy for details on how we collect, use, and protect your information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Reporting and Blocking</h2>
          <p>
            You may report inappropriate behavior or block users after calls. We take reports seriously and may suspend or terminate accounts that violate these terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Account Termination</h2>
          <p>
            You may delete your account at any time through the App settings. We reserve the right to suspend or terminate accounts that violate these Terms of Service or engage in harmful behavior.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Disclaimer of Warranties</h2>
          <p className="uppercase text-xs">
            The App is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee that the service will be uninterrupted, secure, or error-free. We do not warrant the quality, accuracy, or suitability of any advice or support received through the App.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Limitation of Liability</h2>
          <p className="uppercase text-xs">
            To the maximum extent permitted by law, Southworth Group, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to personal injury, emotional distress, or loss of data, arising from your use of the App.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Southworth Group, LLC from any claims, damages, or expenses arising from your use of the App or violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of the App after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Contact Us</h2>
          <p>If you have questions about these Terms of Service, please contact us at:</p>
          <p className="mt-2">
            <strong className="text-foreground">Southworth Group, LLC</strong>
            <br />
            Email:{' '}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-foreground underline">
              {LEGAL_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}

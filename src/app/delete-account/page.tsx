import type { Metadata } from 'next';
import { PRIVACY_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Delete Your Account',
  description:
    'How to request deletion of your Call Me Sober account and associated data, what gets deleted, what is kept, and how long it is retained.',
};

export default function DeleteAccountPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Delete Your Account</h1>
      <p className="text-subtle mb-10">Last updated: May 29, 2026</p>

      <div className="space-y-8 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Overview</h2>
          <p>
            <strong className="text-foreground">Call Me Sober</strong>, operated by Beehavr LLC, lets you delete your
            account and the personal data associated with it at any time. This page explains the steps to request
            deletion, exactly what we delete, what we keep in anonymized form, and how long anything is retained.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">How to request deletion</h2>
          <p>
            <strong className="text-foreground">Option 1 &mdash; In the app (fastest, immediate).</strong> Open Call Me
            Sober and go to <strong className="text-foreground">Settings &rarr; Delete Account</strong>, then confirm.
            Your account and personal data are removed right away and you are signed out.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Option 2 &mdash; Delete Voice Coach data only.</strong> If you only want
            to erase your optional AI Voice Coach history without closing your account, go to{' '}
            <strong className="text-foreground">Settings &rarr; Voice Coach &rarr; Delete coach data</strong>. This wipes
            every coach transcript, audio recording, session record, and consent record tied to your account.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Option 3 &mdash; By email.</strong> If you can no longer sign in to the
            app, email{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`} className="text-foreground underline">
              {PRIVACY_EMAIL}
            </a>{' '}
            from the email address on your account with the subject line &ldquo;Delete my account.&rdquo; We will verify
            ownership and complete the deletion within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">What we delete</h2>
          <p>When you delete your account, we permanently remove:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Your login credentials and authentication identity (email, and any Apple or Google sign-in)</li>
            <li>Your profile, including your chosen pseudonym and display name</li>
            <li>Your phone number and masked-calling identity</li>
            <li>Your listener availability status and settings</li>
            <li>Personal notes you wrote in call feedback</li>
            <li>Abuse-prevention rate-limit records tied to your account</li>
            <li>
              Your Voice Coach data &mdash; audio recordings, transcripts, session records, and consent records (removed
              when you close your account or use &ldquo;Delete coach data&rdquo;)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">What we keep (anonymized)</h2>
          <p>
            For safety, abuse prevention, and legal compliance, a limited set of records is kept in{' '}
            <strong className="text-foreground">anonymized</strong> form &mdash; your identity is stripped out so the data
            can no longer be linked back to you:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Peer call records &mdash; timestamps, duration, and connection status, with your user identifier removed.
              We never record or store audio from peer calls, so there is no call audio to delete.
            </li>
            <li>Security and audit logs, with your user identifier removed</li>
          </ul>
          <p className="mt-2">
            This anonymized data contains no name, email, phone number, or pseudonym and cannot be used to identify or
            contact you.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Retention period</h2>
          <p>
            Your account and personal data are deleted immediately when you confirm deletion in the app. Records we keep
            are anonymized at the same moment. Any residual copies that remain in our encrypted database backups are
            overwritten on our normal backup rotation within 30 days. Email-based deletion requests are completed within
            30 days of our verifying that you own the account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Questions</h2>
          <p>If you have any questions about deleting your account or your data, contact us at:</p>
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

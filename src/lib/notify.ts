import { Resend } from 'resend';

export async function notifyBetaSignup(email: string, platform: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipients = process.env.NOTIFY_EMAILS;

  if (!apiKey || !recipients) {
    console.warn('Email notification skipped: RESEND_API_KEY or NOTIFY_EMAILS not configured');
    return;
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? 'onboarding@resend.dev';

  await resend.emails.send({
    from,
    to: recipients.split(',').map((e) => e.trim()),
    subject: `New Beta Signup: ${email}`,
    text: `New beta signup:\n\nEmail: ${email}\nPlatform: ${platform}\nTime: ${new Date().toISOString()}`,
  });
}

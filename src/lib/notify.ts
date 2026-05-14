import { Resend } from 'resend';

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const recipients = process.env.NOTIFY_EMAILS;
  if (!apiKey || !recipients) return null;
  return {
    resend: new Resend(apiKey),
    from: process.env.RESEND_FROM ?? 'onboarding@resend.dev',
    to: recipients.split(',').map((e) => e.trim()),
  };
}

export async function notifyBetaSignup(email: string, platform: string): Promise<void> {
  const cfg = getResendConfig();
  if (!cfg) {
    console.warn('Email notification skipped: RESEND_API_KEY or NOTIFY_EMAILS not configured');
    return;
  }

  await cfg.resend.emails.send({
    from: cfg.from,
    to: cfg.to,
    subject: `New Beta Signup: ${email}`,
    text: `New beta signup:\n\nEmail: ${email}\nPlatform: ${platform}\nTime: ${new Date().toISOString()}`,
  });
}

export async function notifyContactMessage(
  name: string,
  email: string,
  message: string,
): Promise<void> {
  const cfg = getResendConfig();
  if (!cfg) {
    throw new Error('RESEND_API_KEY or NOTIFY_EMAILS not configured');
  }

  const { error } = await cfg.resend.emails.send({
    from: cfg.from,
    to: cfg.to,
    replyTo: email,
    subject: `Contact form: ${name}`,
    text: `New contact form message:\n\nName: ${name}\nEmail: ${email}\nTime: ${new Date().toISOString()}\n\n${message}`,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}

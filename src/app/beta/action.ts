'use server';

import { appendBetaSignup } from '@/lib/google-sheets';
import { notifyBetaSignup } from '@/lib/notify';

type BetaResult = { success: boolean; error?: string };

export async function submitBetaSignup(
  _prev: BetaResult,
  formData: FormData,
): Promise<BetaResult> {
  const email = (formData.get('email') as string)?.trim();
  const platform = (formData.get('platform') as string)?.trim();
  const honeypot = (formData.get('website') as string)?.trim(); // honeypot field

  // Bot detection: honeypot field should be empty
  if (honeypot) {
    // Silently reject bots — return success so they don't know
    return { success: true };
  }

  // Validation
  if (!email || !email.includes('@') || !email.includes('.') || email.length > 255) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  if (!platform || !['ios', 'android', 'both'].includes(platform)) {
    return { success: false, error: 'Please select a platform.' };
  }

  try {
    await appendBetaSignup(email, platform);

    // Fire-and-forget: don't block the user on email notification
    notifyBetaSignup(email, platform).catch((err) =>
      console.error('Notification error:', err),
    );

    return { success: true };
  } catch (err) {
    console.error('Beta signup error:', err);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}

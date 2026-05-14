'use server';

import { notifyContactMessage } from '@/lib/notify';

type ContactResult = { success: boolean; error?: string };

export async function submitContactForm(
  _prev: ContactResult,
  formData: FormData,
): Promise<ContactResult> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!name || name.length > 100) return { success: false, error: 'Name is required (max 100 characters).' };
  if (!email || !email.includes('@') || !email.includes('.') || email.length > 255) {
    return { success: false, error: 'A valid email address is required.' };
  }
  if (!message || message.length > 2000) return { success: false, error: 'Message is required (max 2000 characters).' };

  try {
    await notifyContactMessage(name, email, message);
    return { success: true };
  } catch (err) {
    console.error('Contact form error:', err);
    return { success: false, error: 'Failed to send message. Please try again or email us directly.' };
  }
}

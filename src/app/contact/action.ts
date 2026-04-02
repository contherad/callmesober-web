'use server';

type ContactResult = { success: boolean; error?: string };

export async function submitContactForm(
  _prev: ContactResult,
  formData: FormData,
): Promise<ContactResult> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  // Validation
  if (!name || name.length > 100) return { success: false, error: 'Name is required (max 100 characters).' };
  if (!email || !email.includes('@') || !email.includes('.') || email.length > 255) {
    return { success: false, error: 'A valid email address is required.' };
  }
  if (!message || message.length > 2000) return { success: false, error: 'Message is required (max 2000 characters).' };

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // If Supabase is not configured, fall back gracefully
    console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY');
    return { success: false, error: 'Contact form is temporarily unavailable. Please email us directly.' };
  }

  try {
    const res = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      throw new Error(`Supabase function responded with ${res.status}`);
    }

    return { success: true };
  } catch (err) {
    console.error('Contact form error:', err);
    return { success: false, error: 'Failed to send message. Please try again or email us directly.' };
  }
}

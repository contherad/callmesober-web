'use server';

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

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // If Supabase is not configured, log and return success message
    console.log(`Beta signup: ${email} (${platform})`);
    return { success: true };
  }

  try {
    // Insert into a beta_signups table (you'll need to create this table in Supabase)
    const res = await fetch(`${supabaseUrl}/rest/v1/beta_signups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${supabaseKey}`,
        apikey: supabaseKey,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email, platform }),
    });

    if (!res.ok && res.status !== 409) {
      // 409 = duplicate, which is fine
      throw new Error(`Supabase responded with ${res.status}`);
    }

    return { success: true };
  } catch (err) {
    console.error('Beta signup error:', err);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}

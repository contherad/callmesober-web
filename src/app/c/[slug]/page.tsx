import OpenInApp, { linkPageMetadata } from '@/components/app-links/OpenInApp';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/lib/app-links';

// A challenge invite: who invited you, what the challenge is, one button.
// Readable without knowing Call Me Sober. The preview comes from the public
// challenge_invite_preview RPC (the same one the app's invite screen uses);
// joining happens in the app, where the link opens directly when installed.

type Params = Promise<{ slug: string }>;
type Search = Promise<{ ref?: string | string[] }>;

interface Preview {
  challenge: { title: string | null; tagline: string | null; duration_days: number | null } | null;
  participant_count: number | null;
  inviter: { display_name: string | null } | null;
  host: { display_name: string | null } | null;
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function loadPreview(slug: string, ref: string | null): Promise<Preview | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/challenge_invite_preview`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ref ? { p_slug: slug, p_ref: ref } : { p_slug: slug }),
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const p = (await res.json()) as Preview | null;
    return p?.challenge ? p : null;
  } catch {
    return null;
  }
}

function inviterRef(ref: string | string[] | undefined): string | null {
  return typeof ref === 'string' && UUID.test(ref) ? ref : null;
}

function linkPath(slug: string, ref: string | null): string {
  return `/c/${encodeURIComponent(slug)}${ref ? `?ref=${ref}` : ''}`;
}

export async function generateMetadata({ params, searchParams }: { params: Params; searchParams: Search }) {
  const [{ slug }, { ref }] = await Promise.all([params, searchParams]);
  const preview = await loadPreview(slug, inviterRef(ref));
  const title = preview?.challenge?.title ? `Join "${preview.challenge.title}"` : 'Join a challenge';
  return linkPageMetadata(title, "You've been invited to a challenge on Call Me Sober.", linkPath(slug, inviterRef(ref)));
}

export default async function ChallengeInvitePage({ params, searchParams }: { params: Params; searchParams: Search }) {
  const [{ slug }, { ref }] = await Promise.all([params, searchParams]);
  const inviter = inviterRef(ref);
  const preview = await loadPreview(slug, inviter);
  const path = linkPath(slug, inviter);

  if (!preview?.challenge) {
    return (
      <OpenInApp
        eyebrow="Challenge"
        title="This challenge isn't available"
        body="It may have ended or been taken down. You can still open the app and find one to take on."
        path={path}
      />
    );
  }

  const c = preview.challenge;
  const name = preview.inviter?.display_name || preview.host?.display_name;
  const facts: string[] = [];
  if (c.duration_days) facts.push(`${c.duration_days} days`);
  if (preview.participant_count && preview.participant_count > 0) {
    facts.push(`${preview.participant_count} ${preview.participant_count === 1 ? 'person' : 'people'} in`);
  }

  return (
    <OpenInApp
      eyebrow={name ? `${name} invited you to` : "You're invited to"}
      title={c.title || 'A challenge'}
      body="Open the app to join. If their run hasn't started, you start day 1 together; if it has, you join them where they are."
      path={path}
    >
      {c.tagline ? <p className="text-subtle">{c.tagline}</p> : null}
      {facts.length ? <p className="text-sm text-muted">{facts.join(' · ')}</p> : null}
    </OpenInApp>
  );
}

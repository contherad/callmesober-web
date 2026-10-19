import OpenInApp, { linkPageMetadata } from '@/components/app-links/OpenInApp';

type Params = Promise<{ token: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { token } = await params;
  return linkPageMetadata('Join a Circle', 'Someone wants you in their support circle on Call Me Sober.', `/i/${token}`);
}

export default async function CircleInviteLinkPage({ params }: { params: Params }) {
  const { token } = await params;
  return (
    <OpenInApp
      eyebrow="My Circle"
      title="Someone wants you in their Circle"
      body="Your Circle is the people you let close: one tap to message, call, or leave a voice note. Open the app to add them."
      path={`/i/${token}`}
    />
  );
}

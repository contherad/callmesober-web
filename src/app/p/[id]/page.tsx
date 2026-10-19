import OpenInApp, { linkPageMetadata } from '@/components/app-links/OpenInApp';

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  return linkPageMetadata('A Community thread', 'Someone shared a thread from the Call Me Sober community.', `/p/${id}`);
}

export default async function ForumThreadLinkPage({ params }: { params: Params }) {
  const { id } = await params;
  return (
    <OpenInApp
      eyebrow="Community"
      title="Someone shared a thread with you"
      body="Threads in the Call Me Sober community are anonymous and open to members. Open the app to read it and reply."
      path={`/p/${id}`}
    />
  );
}

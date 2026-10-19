import OpenInApp, { linkPageMetadata } from '@/components/app-links/OpenInApp';

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  return linkPageMetadata('A post on Call Me Sober', 'Someone shared a post from Call Me Sober.', `/f/${id}`);
}

export default async function FeedPostLinkPage({ params }: { params: Params }) {
  const { id } = await params;
  return (
    <OpenInApp
      eyebrow="Social"
      title="Someone shared a post with you"
      body="Posts on Call Me Sober are for members. Open the app to see it, cheer them on, or leave a comment."
      path={`/f/${id}`}
    />
  );
}

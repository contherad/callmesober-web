import OpenInApp, { linkPageMetadata } from '@/components/app-links/OpenInApp';

export const metadata = linkPageMetadata('Open the app', 'Open Call Me Sober, or get it on the App Store or Google Play.', '/app');

export default function AppLinkPage() {
  return (
    <OpenInApp
      eyebrow="Call Me Sober"
      title="Someone who gets it, one call away"
      body="A sober-day tracker, a support circle, challenges you take on together, and a peer to call when a craving hits. No judgment. Just a call."
      path="/app"
    />
  );
}

// iOS reads this (through Apple's CDN) to learn which paths the app may
// open. Served as JSON with no extension and no redirect, as Apple
// requires. `webcredentials` keeps password autofill working for the app.
import { APPLE_TEAM_ID, APP_LINK_PATHS, IOS_BUNDLE_ID } from '@/lib/app-links';

export const dynamic = 'force-static';

export function GET() {
  const appID = `${APPLE_TEAM_ID}.${IOS_BUNDLE_ID}`;
  const body = {
    applinks: {
      details: [
        {
          appIDs: [appID],
          components: APP_LINK_PATHS.map((path) => ({ '/': path })),
        },
      ],
    },
    webcredentials: { apps: [appID] },
  };
  return new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

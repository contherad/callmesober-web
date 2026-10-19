// Links that open the Call Me Sober app.
//
// The app hands out https links on this site; a phone with the app opens
// them in the app directly (iOS universal links, Android app links), and
// anyone else lands on a page here with an "Open in Call Me Sober" button
// (the custom scheme) and the store badges. The prefixes below must match
// the app: native/src/lib/navigation/links.ts and app.json in the app repo.
//
//   /c/<slug>   challenge invite (shows a preview; joining happens in the app)
//   /p/<id>     a Community thread
//   /f/<id>     a Social feed post
//   /i/<token>  a Circle invite
//   /app        the app itself

import { SITE_URL } from './constants';

export const IOS_APP_ID = '6758549444';
export const APPLE_TEAM_ID = 'THPRF24KV2';
export const IOS_BUNDLE_ID = 'com.callmesober.app';
export const ANDROID_PACKAGE = 'com.callmesober.app';
export const APP_SCHEME = 'callmesober';

// Paths the installed app claims. Everything else on the site stays in the
// browser.
export const APP_LINK_PATHS = ['/c/*', '/p/*', '/f/*', '/i/*', '/app'] as const;

// SHA-256 fingerprints of the Android signing certificates, colon-separated
// uppercase hex, as Play Console prints them (Setup → App signing → "App
// signing key certificate"). Comma-separate several (Play's key plus the EAS
// upload keystore for internal builds). Until a real value is set, Android
// opens these links in the browser; the page still works.
const CERT_PLACEHOLDER = 'REPLACE_WITH_PLAY_APP_SIGNING_SHA256';
export const ANDROID_CERT_SHA256 = (process.env.ANDROID_CERT_SHA256 ?? CERT_PLACEHOLDER)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

// The same backend the app uses; the publishable key is public by design.
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://wukvvsmejzgmacvznhvw.supabase.co';
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'sb_publishable_MPierFKkk9sdbWht8TzeLQ_3jC0EI8Y';

// callmesober://p/<id> — what "Open in Call Me Sober" points at. The app
// reads the same paths behind the scheme as behind https.
export function appSchemeUrl(path: string): string {
  return `${APP_SCHEME}://${path.replace(/^\/+/, '')}`;
}

export function appWebUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

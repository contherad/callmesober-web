// Android reads this at install time to verify the app may open
// https://callmesober.com links (android:autoVerify in the app manifest).
// The fingerprints come from ANDROID_CERT_SHA256; see src/lib/app-links.ts.
import { ANDROID_CERT_SHA256, ANDROID_PACKAGE } from '@/lib/app-links';

export const dynamic = 'force-static';

export function GET() {
  const body = [
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: ANDROID_PACKAGE,
        sha256_cert_fingerprints: ANDROID_CERT_SHA256,
      },
    },
  ];
  return new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

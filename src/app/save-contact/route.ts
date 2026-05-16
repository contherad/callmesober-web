import { NextResponse } from 'next/server';

// RFC 6350 vCard with Apple-specific X-ABShowAs hint so iOS Contacts
// renders this as a Company (no awkward "First Name" / "Last Name" prompt
// on save). CRLF line endings are required by the spec — Apple Mail and
// Safari are lenient but other clients break with LF-only.
function buildVCard(phone: string): string {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:;;;;', // empty per-Apple-Company convention; iOS reads FN instead
    'FN:Call Me Sober',
    'ORG:Call Me Sober',
    `TEL;TYPE=CELL,VOICE:${phone}`,
    'NOTE:Peer support calls from Call Me Sober. We only call when you request it.',
    'X-ABShowAs:COMPANY',
    'END:VCARD',
  ].join('\r\n');
}

export async function GET() {
  const phone = process.env.TWILIO_PHONE_NUMBER?.trim();
  if (!phone) {
    // Fail loud rather than serving a vCard with an empty TEL line — a
    // contact with no number is worse than a clear error the user can
    // report back.
    return new NextResponse('Contact temporarily unavailable. Please try again later.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  return new NextResponse(buildVCard(phone), {
    headers: {
      // text/vcard is what triggers iOS Safari / Mail / Gmail to offer
      // "Add to Contacts" inline instead of downloading a file.
      'Content-Type': 'text/vcard; charset=utf-8',
      // Filename is the fallback on desktop browsers that don't natively
      // handle vCard — they'll download call-me-sober.vcf which then
      // imports cleanly into macOS Contacts / Outlook on double-click.
      'Content-Disposition': 'attachment; filename="call-me-sober.vcf"',
      // Cache for an hour. The phone number rarely changes; revalidate
      // hourly so a number swap propagates within a reasonable window
      // without hammering this route on email click bursts.
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

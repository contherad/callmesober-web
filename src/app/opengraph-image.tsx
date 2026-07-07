import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { SITE_NAME, HEADLINE, TAGLINE } from '@/lib/constants';

export const alt = `${SITE_NAME} — ${HEADLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const fontsDir = join(process.cwd(), 'src/assets/fonts');
  const [robotoBold, robotoRegular, caslonItalic] = await Promise.all([
    readFile(join(fontsDir, 'Roboto-Bold.ttf')),
    readFile(join(fontsDir, 'Roboto-Regular.ttf')),
    readFile(join(fontsDir, 'LibreCaslonText-Italic.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFF6EF',
          fontFamily: 'Roboto',
          position: 'relative',
        }}
      >
        {/* Soft orange glows, echoing the hero section */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: 480,
            backgroundColor: 'rgba(232, 85, 12, 0.06)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            right: -60,
            width: 520,
            height: 520,
            borderRadius: 520,
            backgroundColor: 'rgba(232, 85, 12, 0.05)',
            filter: 'blur(80px)',
          }}
        />

        {/* Phone badge — the brand mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 128,
            height: 128,
            borderRadius: 128,
            backgroundColor: '#E8550C',
            boxShadow: '0 12px 48px rgba(232, 85, 12, 0.35)',
            marginBottom: 40,
          }}
        >
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#FFF5EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>

        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: '#161616',
            letterSpacing: -2,
            marginBottom: 20,
          }}
        >
          {SITE_NAME}
        </div>

        <div
          style={{
            fontSize: 34,
            color: '#57534E',
            marginBottom: 28,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          {HEADLINE}
        </div>

        <div
          style={{
            fontFamily: 'Libre Caslon Text',
            fontStyle: 'italic',
            fontSize: 28,
            color: '#777777',
            textAlign: 'center',
          }}
        >
          {`“${TAGLINE}”`}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 36,
            fontSize: 24,
            fontWeight: 700,
            color: '#E8550C',
          }}
        >
          callmesober.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Roboto', data: robotoBold, weight: 700, style: 'normal' },
        { name: 'Roboto', data: robotoRegular, weight: 400, style: 'normal' },
        { name: 'Libre Caslon Text', data: caslonItalic, weight: 400, style: 'italic' },
      ],
    }
  );
}

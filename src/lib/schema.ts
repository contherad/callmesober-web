import { SITE_URL, SITE_NAME, SUPPORT_EMAIL, APP_STORE_URL } from './constants';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo-orange.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SUPPORT_EMAIL,
      contactType: 'customer support',
    },
    description:
      'Free, anonymous peer-to-peer support hotline for addiction recovery.',
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function mobileAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: SITE_NAME,
    operatingSystem: 'iOS',
    applicationCategory: 'HealthApplication',
    url: SITE_URL,
    downloadUrl: APP_STORE_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function founderStoryVideoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Anonymous peer-to-peer addiction support hotline',
    description:
      'Call Me Sober is an anonymous peer-to-peer support platform built for people struggling with addiction, cravings, relapse urges, or isolation. When someone feels close to drinking or using, they can instantly connect with another human being who understands what they’re going through. Real conversations with people who have lived experience in addiction and recovery — designed as an additional layer of support during the moments that matter most.',
    thumbnailUrl: [
      'https://i.ytimg.com/vi/97ASAZ88pJg/hqdefault.jpg',
      'https://i.ytimg.com/vi/97ASAZ88pJg/sddefault.jpg',
    ],
    uploadDate: '2026-05-08T08:02:13-07:00',
    duration: 'PT1M31S',
    contentUrl: 'https://www.youtube.com/watch?v=97ASAZ88pJg',
    embedUrl: 'https://www.youtube.com/embed/97ASAZ88pJg',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logos/logo-orange.svg`,
      },
    },
  };
}

export function faqPageSchema(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

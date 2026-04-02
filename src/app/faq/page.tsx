import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '@/lib/content/faq';
import { faqPageSchema } from '@/lib/schema';
import { SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Everything you need to know about Call Me Sober — how it works, who answers calls, costs, anonymity, and more.',
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(FAQ_DATA)) }}
      />

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-subtle mb-10">Everything you need to know</p>

        <div className="space-y-3">
          {FAQ_DATA.map((item, i) => (
            <details
              key={i}
              className="bg-card border border-border rounded-xl group"
            >
              <summary className="flex items-center justify-between gap-4 p-5 font-medium text-foreground cursor-pointer">
                <span>{item.q}</span>
                <ChevronDown className="w-5 h-5 text-muted shrink-0 accordion-chevron" />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="bg-card border border-border rounded-xl p-6 mt-8">
          <h2 className="text-lg font-bold text-foreground mb-2">Still have questions?</h2>
          <p className="text-sm text-muted">
            We&apos;re here to help. Reach out to us at{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-foreground underline font-medium">
              {SUPPORT_EMAIL}
            </a>
            {' '}and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </>
  );
}

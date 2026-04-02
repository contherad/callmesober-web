import type { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Call Me Sober team. We\u2019d love to hear from you.',
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Contact Us</h1>
      <p className="text-subtle mb-8">We&apos;d love to hear from you</p>
      <ContactForm />
    </div>
  );
}

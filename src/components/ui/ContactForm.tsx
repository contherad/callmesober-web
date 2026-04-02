'use client';

import { useActionState } from 'react';
import { Send, Loader2, Mail } from 'lucide-react';
import { submitContactForm } from '@/app/contact/action';
import { SUPPORT_EMAIL } from '@/lib/constants';

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, { success: false });

  if (state.success) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-6 h-6 text-success" />
        </div>
        <h2 className="text-lg font-bold text-foreground mb-2">Message sent!</h2>
        <p className="text-sm text-muted">We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Email info bar */}
      <div className="bg-accent rounded-lg p-4 flex items-center gap-3">
        <Mail className="w-5 h-5 text-primary shrink-0" />
        <p className="text-sm text-muted">
          You can also email us directly at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-foreground underline font-medium">
            {SUPPORT_EMAIL}
          </a>
        </p>
      </div>

      <form action={formAction} className="space-y-5">
        {state.error && (
          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 text-sm text-destructive">
            {state.error}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Enter your name"
            disabled={isPending}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="Enter your email"
            disabled={isPending}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={2000}
            rows={5}
            placeholder="How can we help you?"
            disabled={isPending}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60 resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-primary-foreground font-medium py-3.5 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {isPending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

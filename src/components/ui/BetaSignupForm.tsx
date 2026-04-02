'use client';

import { useActionState, useState } from 'react';
import { Apple, Smartphone, CheckCircle, Loader2 } from 'lucide-react';
import { submitBetaSignup } from '@/app/beta/action';

export default function BetaSignupForm({ id }: { id?: string }) {
  const [state, formAction, isPending] = useActionState(submitBetaSignup, { success: false });
  const [platform, setPlatform] = useState<'ios' | 'android' | 'both'>('both');

  if (state.success) {
    return (
      <div className="bg-success/10 border border-success/20 rounded-2xl p-6 text-center max-w-md mx-auto scroll-mt-36" id={id}>
        <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
        <p className="text-lg font-bold text-foreground mb-1">You&apos;re on the list!</p>
        <p className="text-sm text-muted">We&apos;ll email you when the beta is ready.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="max-w-md mx-auto scroll-mt-36" id={id}>
      {state.error && (
        <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 text-sm text-destructive mb-4 text-center">
          {state.error}
        </div>
      )}

      {/* Platform selector */}
      <div className="flex gap-2 mb-4">
        {([
          { value: 'ios' as const, label: 'iOS', icon: Apple },
          { value: 'android' as const, label: 'Android', icon: Smartphone },
          { value: 'both' as const, label: 'Both', icon: null },
        ]).map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setPlatform(opt.value)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${
              platform === opt.value
                ? 'bg-primary text-primary-foreground shadow-[0_2px_12px_rgba(232,85,12,0.3)]'
                : 'bg-card border border-border text-muted hover:text-foreground hover:border-primary/30'
            }`}
          >
            {opt.icon && <opt.icon className="w-4 h-4" />}
            {opt.label}
          </button>
        ))}
      </div>
      <input type="hidden" name="platform" value={platform} />

      {/* Email + submit */}
      <div className="flex gap-2">
        <input
          name="email"
          type="email"
          required
          maxLength={255}
          placeholder="Enter your email"
          disabled={isPending}
          className="flex-1 bg-card border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-primary text-primary-foreground font-medium px-6 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-[0_2px_12px_rgba(232,85,12,0.3)] disabled:opacity-60 shrink-0"
        >
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Join'}
        </button>
      </div>

      {/* Honeypot — hidden from real users, bots will fill it */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 h-0 w-0 pointer-events-none"
        aria-hidden="true"
      />

      <p className="text-xs text-muted mt-3 text-center">
        No spam. We&apos;ll only email you when the beta is ready.
      </p>
    </form>
  );
}

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import AppStoreButton from '@/components/ui/AppStoreButton';
import GooglePlayBadge from '@/components/ui/GooglePlayBadge';
import { appSchemeUrl, appWebUrl, IOS_APP_ID } from '@/lib/app-links';

// The page behind a shared link for someone who did not open it in the
// app: what the link is, one button that opens the app if it is installed,
// and the stores if it is not. The content itself lives in the app.

interface Props {
  eyebrow: string;
  title: string;
  body: string;
  // In-app path the link stands for, e.g. /p/<id>; becomes callmesober://p/<id>.
  path: string;
  children?: ReactNode;
}

export default function OpenInApp({ eyebrow, title, body, path, children }: Props) {
  return (
    <div className="max-w-md mx-auto px-6 py-12 md:py-20 space-y-5">
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-subtle">{eyebrow}</p>
      <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">{title}</h1>
        {children}
        <p className="text-subtle">{body}</p>
      </div>
      <a
        href={appSchemeUrl(path)}
        className="block text-center bg-primary text-primary-foreground font-medium px-6 py-4 rounded-full hover:opacity-90 transition-opacity"
      >
        Open in Call Me Sober
      </a>
      <p className="text-sm text-muted text-center">
        Don&apos;t have the app yet? It&apos;s free. Install it, then open this link again.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <AppStoreButton />
        <GooglePlayBadge />
      </div>
      <p className="text-xs text-muted text-center">
        In crisis? Call or text <a href="tel:988" className="text-primary">988</a>, or call{' '}
        <a href="tel:911" className="text-primary">911</a>. Call Me Sober is peer support, not an emergency service.
      </p>
    </div>
  );
}

// Shared link pages are for the person holding the link, not for search;
// the iOS Smart App Banner carries the link into the app once installed.
export function linkPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    robots: { index: false, follow: false },
    itunes: { appId: IOS_APP_ID, appArgument: appWebUrl(path) },
    alternates: { canonical: appWebUrl(path) },
  };
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-foreground mb-2">Page not found</p>
      <p className="text-sm text-muted mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist. If you need support, we&apos;re here for you.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="bg-primary text-primary-foreground font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="border border-border text-foreground font-medium px-6 py-3 rounded-full hover:bg-card transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

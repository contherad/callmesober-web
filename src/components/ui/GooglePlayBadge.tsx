import { GOOGLE_PLAY_URL } from '@/lib/constants';

export default function GooglePlayBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Call Me Sober on Google Play"
      className={`inline-block hover:opacity-90 transition-opacity ${className}`}
    >
      <img
        src="/badges/google-play-badge.png"
        alt="Get it on Google Play"
        className="h-[68px] w-auto"
      />
    </a>
  );
}

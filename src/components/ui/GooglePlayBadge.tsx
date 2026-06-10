// Official "Get it on Google Play" badge, shown inactive (Android not yet live).
export default function GooglePlayBadge({ className = '' }: { className?: string }) {
  return (
    <img
      src="/badges/google-play-badge.png"
      alt="Coming soon to Google Play"
      className={`h-[68px] w-auto opacity-50 grayscale ${className}`}
    />
  );
}

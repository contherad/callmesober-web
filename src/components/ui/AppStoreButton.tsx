import { APP_STORE_URL } from '@/lib/constants';

export default function AppStoreButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Call Me Sober on the App Store"
      className={`inline-block hover:opacity-90 transition-opacity ${className}`}
    >
      {/* Apple guidelines: black badge on light backgrounds, white badge on dark */}
      <img
        src="/badges/app-store-badge.svg"
        alt="Download on the App Store"
        className="h-[52px] w-auto dark:hidden"
      />
      <img
        src="/badges/app-store-badge-white.svg"
        alt="Download on the App Store"
        className="h-[52px] w-auto hidden dark:block"
      />
    </a>
  );
}

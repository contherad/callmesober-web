import { AlertTriangle } from 'lucide-react';

export default function CrisisBanner() {
  return (
    <div className="bg-accent border border-border rounded-xl p-4 text-center text-sm text-subtle">
      <div className="flex items-center justify-center gap-2 mb-1">
        <AlertTriangle className="w-4 h-4 text-accent-foreground" />
        <span className="font-medium text-foreground">Not an emergency service</span>
      </div>
      <p>
        If you or someone you know is in immediate danger, call{' '}
        <a href="tel:911" className="font-medium text-foreground underline">911</a>
        {' '}or the{' '}
        <a href="tel:988" className="font-medium text-foreground underline">988 Suicide &amp; Crisis Lifeline</a>.
      </p>
    </div>
  );
}

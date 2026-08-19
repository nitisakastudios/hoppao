/* Ikon line art: stroke 2.5px, ujung membulat, warna mengikuti currentColor.
   Gaya disamakan dengan logo bakpao HOPPAO. */

type P = { className?: string };

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function PinIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ChevronRight({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function CloseIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function SnowflakeIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      {/* Tiga sumbu utama, 60° satu sama lain */}
      <path d="M12 3v18M19.79 7.5 4.21 16.5M4.21 7.5l15.58 9" />
      {/* Cabang kecil di ujung tiap sumbu */}
      <path d="M13 3.77 12 5.5l-1-1.73" />
      <path d="M19.63 8.75 17.63 8.75l1-1.73" />
      <path d="M18.63 16.98 17.63 15.25l2 0" />
      <path d="M13 20.23 12 18.5l-1 1.73" />
      <path d="M5.37 16.98 6.37 15.25l-2 0" />
      <path d="M4.37 8.75 6.37 8.75l-1 -1.73" />
    </svg>
  );
}

export function PlusIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M20 12a8 8 0 0 1-11.9 6.96L4 20l1.1-3.9A8 8 0 1 1 20 12Z" />
      <path d="M9.2 9.4c.3 2.2 3.2 5.1 5.4 5.4l1-1.4 1.6.9-.5 1.4c-2.6.8-6.6-2.5-7.6-5.2l1.4-.6.9 1.5-1.2 1" />
    </svg>
  );
}

export function BowlIcon({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...base}>
      <path d="M5 17h22a11 11 0 0 1-22 0Z" />
      <path d="M3 17h26" />
      <path d="M11 10c0-2 2-2 2-4M16 9c0-2 2-2 2-4M21 10c0-2 2-2 2-4" />
    </svg>
  );
}

export function PotIcon({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...base}>
      <rect x="6" y="13" width="20" height="12" rx="3" />
      <path d="M4 13h24M13 8c0-1.6 1.6-1.6 1.6-3.2M19 8c0-1.6 1.6-1.6 1.6-3.2" />
    </svg>
  );
}

export function HandFoldIcon({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...base}>
      <path d="M6 24c3-6 6-9 10-9s7 3 10 9" />
      <path d="M11 15c1-3 3-5 5-5s4 2 5 5M16 10V6" />
    </svg>
  );
}

export function SteamerIcon({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...base}>
      <ellipse cx="16" cy="21" rx="12" ry="5" />
      <path d="M4 21v3c0 2.8 5.4 5 12 5s12-2.2 12-5v-3" />
      <path d="M12 12c0-2.5 2.5-2.5 2.5-5M18 13c0-2.5 2.5-2.5 2.5-5" />
    </svg>
  );
}

export const PROCESS_ICONS = [BowlIcon, PotIcon, HandFoldIcon, SteamerIcon];

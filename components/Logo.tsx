type MarkProps = {
  className?: string;
  size?: number;
};

/**
 * The GTB mark: the letterforms sit on a single ascending path with
 * two nodes — the same node-and-path device used in the hero
 * schematic and the connector lists throughout the site. It reads
 * as "GTB", and as a two-point line moving up and to the right.
 */
export function Mark({ className, size = 40 }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="GTB mark"
    >
      <rect x="0.5" y="0.5" width="39" height="39" rx="9" fill="#0B1B33" stroke="#16305A" />
      <path
        d="M8 27L32 12"
        stroke="#E8A33D"
        strokeWidth="1.4"
        strokeDasharray="1 4.2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="27" r="2.1" fill="#E8A33D" />
      <circle cx="32" cy="12" r="2.1" fill="#E8A33D" />
      <text
        x="20"
        y="25.5"
        textAnchor="middle"
        fontFamily="var(--font-display), 'Space Grotesk', sans-serif"
        fontWeight={700}
        fontSize="15"
        letterSpacing="0.2"
        fill="#F4F6FB"
      >
        GTB
      </text>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Mark size={34} />
      <span className="flex flex-col leading-none">
        <span className="font-display font-semibold text-[15px] tracking-tight text-ink-text">
          Grow This Business
        </span>
        <span className="bp-label text-ink-muted mt-0.5">
          GTB &middot; Sales / Systems / Automation
        </span>
      </span>
    </span>
  );
}

export function WordmarkOnDark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Mark size={34} />
      <span className="flex flex-col leading-none">
        <span className="font-display font-semibold text-[15px] tracking-tight text-paper-text">
          Grow This Business
        </span>
        <span className="bp-label text-paper-muted mt-0.5">
          GTB &middot; Sales / Systems / Automation
        </span>
      </span>
    </span>
  );
}

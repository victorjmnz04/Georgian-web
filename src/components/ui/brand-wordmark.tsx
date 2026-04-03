type BrandWordmarkProps = {
  className?: string;
  compact?: boolean;
  muted?: boolean;
  withEst?: boolean;
};

export function BrandWordmark({
  className = "",
  compact = false,
  muted = false,
  withEst = false,
}: BrandWordmarkProps) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span
        className={`font-serif uppercase ${
          compact ? "text-base tracking-[0.38em]" : "text-lg tracking-[0.45em]"
        } ${muted ? "text-white/72" : "text-[var(--color-ivory)]"}`}
      >
        GEORGIAN
      </span>
      {withEst ? (
        <span
          className={`mt-2 text-[0.64rem] uppercase tracking-[0.45em] ${
            muted ? "text-white/45" : "text-[var(--color-mist)]"
          }`}
        >
          EST. 2026
        </span>
      ) : null}
    </div>
  );
}

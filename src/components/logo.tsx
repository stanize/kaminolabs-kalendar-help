export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold text-ink ${className ?? ""}`}>
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-[13px] font-bold text-white">
        K
      </span>
      <span className="text-[15px] tracking-tight">Kalendar</span>
    </span>
  );
}

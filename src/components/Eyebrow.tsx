// Section eyebrow — the small label above a heading. Bigger and more
// legible than the old tiny tracked caps, with no leading dash.
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-sm uppercase tracking-[0.16em] font-semibold text-alpine ${className}`}
    >
      {children}
    </div>
  );
}

import Link from "next/link";
import { ReactNode } from "react";

// Primary = navy fill, for the main CTA in a section.
// Secondary = navy outline, for "See our work" style links.
// Text = underlined, for tertiary/inline calls to action.
// Only one primary per section — brief §4 ("One CTA per section").
type Variant = "primary" | "secondary" | "text";
type Size = "md" | "lg";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  target?: "_blank" | "_self";
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-background hover:bg-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
  secondary:
    "border border-navy text-navy hover:bg-navy hover:text-background",
  text:
    "text-navy underline underline-offset-4 decoration-[0.5px] hover:decoration-2",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  disabled = false,
  target,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const radius = variant === "text" ? "" : "rounded-sm";
  const classes = `${base} ${radius} ${variant !== "text" ? sizeClasses[size] : ""} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (target === "_blank") {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

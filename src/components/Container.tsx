import { ReactNode } from "react";

// Max-width wrapper. `prose` narrows to 720px for long-form reading
// sections (about, blog), default 1200px per brief §4.
type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "prose" | "wide";
};

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  const max =
    size === "prose" ? "max-w-[720px]" : size === "wide" ? "max-w-[1400px]" : "max-w-[1200px]";
  return <div className={`${max} mx-auto px-6 md:px-8 ${className}`}>{children}</div>;
}

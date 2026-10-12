import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
        {title}
        {accent && (
          <>
            {" "}
            <span className="font-serif font-normal normal-case italic tracking-normal text-cream-dim">
              {accent}
            </span>
          </>
        )}
      </h2>
      {children && <div className="mt-5 text-base leading-relaxed text-cream-dim sm:text-lg">{children}</div>}
    </div>
  );
}

import type { ReactNode } from "react";
import { useReveal } from "../useReveal";

type ChapterProps = {
  id: string;
  number: string;
  title: string;
  kicker?: string;
  children: ReactNode;
};

export default function Chapter({ id, number, title, kicker, children }: ChapterProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className="scroll-mt-20 border-b-8 border-ink px-4 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="reveal mb-12 grid gap-4 md:mb-16 md:grid-cols-[auto_1fr] md:items-end md:gap-8">
          <span className="font-display text-7xl leading-none text-accent md:text-9xl" aria-hidden="true">
            {number}
          </span>
          <div className="md:pb-3">
            <p className="mb-2 text-sm font-black uppercase tracking-[0.3em]">Chapter {number}</p>
            <h2 className="font-display inline-block -rotate-1 border-4 border-ink bg-ink px-5 py-1 text-4xl tracking-wide text-paper md:text-6xl">
              {title}
            </h2>
            {kicker && <p className="mt-4 max-w-[60ch] leading-relaxed text-ink/70">{kicker}</p>}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}

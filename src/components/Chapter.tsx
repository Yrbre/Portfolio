import type { ReactNode } from "react";

type ChapterProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Chapter({ id, title, children }: ChapterProps) {
  return (
    <section id={id} className="border-b-8 border-black px-4 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-10 inline-block -rotate-1 border-4 border-black bg-black px-5 py-1 text-4xl tracking-wide text-white md:text-6xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
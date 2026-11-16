import type { CSSProperties } from "react";

const sfx = ["Laravel", "React", "Node.js", "TypeScript", "Tailwind", "ドドド"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-8 border-ink"
    >
      <div className="speed-lines absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        {/* Kiri: judul */}
        <div>
          <p className="mb-6 inline-flex items-center gap-3 border-4 border-ink bg-white px-3 py-1 text-sm font-black uppercase tracking-widest">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inset-0 rounded-full bg-accent" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Open to work
          </p>

          <p className="mb-1 text-lg font-black md:text-2xl">
            Web Developer · Tangerang
          </p>
          <h1 className="slam font-display text-[clamp(4.5rem,14vw,9.5rem)] leading-[0.85] tracking-wide">
            Yrbre
          </h1>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-ink/75 md:text-lg">
            Bariq Fajar. Membangun web yang cepat dan rapi dengan Laravel,
            React, dan TypeScript.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-ink bg-ink px-6 py-3 font-black text-paper"
            >
              LIHAT PROJECT
            </a>
            <a href="#about" className="btn-ink bg-white px-6 py-3 font-black">
              ABOUT ME
            </a>
          </div>
        </div>

        {/* Kanan: panel cover */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div
            className="halftone halftone-fade absolute -inset-6"
            aria-hidden="true"
          />
          <figure className="panel relative rotate-2 overflow-hidden">
            <img
              src="/Picture.png"
              alt="Ilustrasi manga Bariq Fajar memotret diri di cermin"
              className="aspect-[4/5] w-full object-cover object-top"
              width={1024}
              height={1024}
            />
            <figcaption className="absolute bottom-0 left-0 border-t-4 border-r-4 border-ink bg-ink px-3 py-1 font-display text-lg tracking-wide text-paper">
              Vol. 01
            </figcaption>
          </figure>
          <span
            className="float font-display absolute -left-4 top-6 border-4 border-ink bg-accent px-3 py-1 text-2xl text-paper shadow-[4px_4px_0_var(--color-ink)] md:-left-10"
            style={{ "--r": "-8deg" } as CSSProperties}
            aria-hidden="true"
          >
            DOKI!
          </span>
        </div>
      </div>

      {/* Marquee SFX */}
      <div
        className="relative overflow-hidden border-t-4 border-ink bg-ink py-3 text-paper"
        aria-hidden="true"
      >
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0">
              {[...sfx, ...sfx].map((word, i) => (
                <li
                  key={i}
                  className="font-display flex items-center gap-6 pr-6 text-2xl tracking-wider"
                >
                  {word}
                  <span className="h-2 w-2 rotate-45 bg-accent" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

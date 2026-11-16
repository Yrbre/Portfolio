import type { CSSProperties } from "react";
import Chapter from "./Chapter";

const facts = [
  { label: "Nama", value: "Bariq Fajar" },
  { label: "Alias", value: "Yrbre" },
  { label: "Peran", value: "Web Developer" },
  { label: "Basis", value: "Tangerang, Indonesia" },
];

export default function About() {
  return (
    <Chapter id="about" number="01" title="Behind the Code">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
        {/* Panel profil */}
        <div className="reveal relative" style={{ "--i": 1 } as CSSProperties}>
          <div className="panel relative -rotate-1 overflow-hidden">
            <div className="halftone absolute inset-0 opacity-20" aria-hidden="true" />
            <dl className="relative divide-y-4 divide-ink">
              {facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[6rem_1fr] items-baseline gap-4 px-5 py-4">
                  <dt className="text-xs font-black uppercase tracking-[0.25em] text-ink/60">{fact.label}</dt>
                  <dd className="text-lg font-black">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Balon dialog + status */}
        <div className="flex flex-col justify-center gap-10">
          <div
            className="reveal bubble bubble-left border-4 border-ink bg-white p-6 md:p-8"
            style={{ borderRadius: "2rem", "--i": 2 } as CSSProperties}
          >
            <p className="font-display mb-3 text-3xl tracking-wide md:text-4xl">Hi, I'm Bariq Fajar</p>
            <p className="max-w-[60ch] leading-relaxed text-ink/80 md:text-lg">
              Web developer dari Tangerang. Saya mengerjakan backend dengan Laravel dan Node.js, lalu
              menyusun antarmukanya dengan React, TypeScript, dan Tailwind CSS.
            </p>
          </div>

          <p
            className="reveal flex items-start gap-3 border-4 border-dashed border-ink p-4 font-bold"
            style={{ "--i": 3 } as CSSProperties}
          >
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
            Status: Terbuka untuk proyek freelance dan posisi full-time
          </p>
        </div>
      </div>
    </Chapter>
  );
}

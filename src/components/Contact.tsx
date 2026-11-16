import type { CSSProperties } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Chapter from "./Chapter";
import { socials } from "../socials";

export default function Contact() {
  return (
    <Chapter id="contact" number="04" title="Contact">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
        <div className="reveal flex flex-col gap-6" style={{ "--i": 1 } as CSSProperties}>
          <div className="bubble border-4 border-ink bg-white p-6 md:p-8" style={{ borderRadius: "2rem" }}>
            <p className="font-display text-4xl leading-none tracking-wide md:text-5xl">Ayo ngobrol!</p>
            <p className="mt-3 max-w-[45ch] leading-relaxed text-ink/75">
              Punya proyek, tawaran kerja, atau sekadar mau diskusi soal web? Sapa saya lewat kanal
              berikut.
            </p>
          </div>
        </div>

        <ul className="panel divide-y-4 divide-ink self-start">
          {socials.map((social, i) => {
            const Icon = social.icon;
            const external = !social.url.startsWith("mailto:");
            return (
              <li key={social.name} className="reveal" style={{ "--i": i + 2 } as CSSProperties}>
                <a
                  href={social.url}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-ink hover:text-paper active:scale-[0.99] md:px-6 md:py-5"
                >
                  <Icon size={28} weight="bold" className="shrink-0 transition-colors group-hover:text-accent" />
                  <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="text-lg font-black md:text-xl">{social.name}</span>
                    {social.handle && (
                      <span className="truncate text-sm text-ink/60 group-hover:text-paper/70">{social.handle}</span>
                    )}
                  </span>
                  <ArrowUpRightIcon
                    size={22}
                    weight="bold"
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Chapter>
  );
}

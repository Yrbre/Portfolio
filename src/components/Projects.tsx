import type { CSSProperties } from "react";
import Chapter from "./Chapter";

type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string; // path di /public, mis. "/Projects/kasir.png"
  url?: string;
};

// Tambahkan project di sini. Selama kosong, halaman menampilkan panel "coming soon".
const projects: Project[] = [
  // {
  // //   title: "Project 1",
  // //   description: "Deskripsi project 1",
  // //   stack: ["React", "TypeScript", "Tailwind CSS"],
  // //   image: "/Projects/project1.png",
  // //   url: "https://example.com/project1",
  // // },
  // // {
  // //   title: "Project 2",
  // //   description: "Deskripsi project 2",
  // //   stack: ["Laravel", "PHP", "MySQL"],
  // //   image: "/Projects/project2.png",
  // //   url: "https://example.com/project2",
  // // },
];

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <li
      className="reveal grid items-center gap-6 md:grid-cols-[1.3fr_1fr] md:gap-10"
      style={{ "--i": 0 } as CSSProperties}
    >
      <figure
        className={`panel overflow-hidden ${flipped ? "md:order-2 rotate-1" : "-rotate-1"}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
      </figure>
      <div>
        <span className="font-display text-5xl text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-1 text-2xl font-black md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[55ch] leading-relaxed text-ink/75">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="border-2 border-ink px-2 py-0.5 text-xs font-black uppercase"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="btn-ink mt-6 inline-block bg-ink px-5 py-2 font-black text-paper"
          >
            BUKA PROJECT
          </a>
        )}
      </div>
    </li>
  );
}

function EmptyState() {
  return (
    <div className="reveal grid gap-6 md:grid-cols-[1fr_2fr]">
      {/* Panel kosong ala storyboard */}
      <div className="hidden grid-rows-2 gap-4 md:grid" aria-hidden="true">
        <div className="border-4 border-dashed border-ink/40" />
        <div className="halftone border-4 border-dashed border-ink/40 opacity-40" />
      </div>
      <div className="panel relative overflow-hidden p-8 md:p-12">
        <div className="speed-lines absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <p className="font-display text-5xl leading-none md:text-7xl">
            Coming Soon...
          </p>
          <p className="mt-4 max-w-[50ch] leading-relaxed text-ink/75">
            Halaman ini sedang digambar. Project pilihan akan terbit di chapter
            ini dalam waktu dekat.
          </p>
          <a
            href="#about"
            className="btn-ink mt-8 inline-block bg-accent px-5 py-2 font-black text-paper"
          >
            KENALAN DULU
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Chapter id="projects" number="03" title="Projects">
      {projects.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="grid gap-16 md:gap-24">
          {projects.map((project, i) => (
            <ProjectPanel key={project.title} project={project} index={i} />
          ))}
        </ul>
      )}
    </Chapter>
  );
}

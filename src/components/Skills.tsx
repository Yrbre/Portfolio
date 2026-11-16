import type { CSSProperties } from "react";
import Chapter from "./Chapter";

type Skill = {
  name: string;
  level: number; // 1 sampai 10
  icon: string;
};

const skills: Skill[] = [
  { name: "Laravel", level: 8, icon: "/Icons/Laravel.jpg" },
  { name: "HTML & CSS", level: 9, icon: "/Icons/HTML.jpg" },
  { name: "Tailwind CSS", level: 8, icon: "/Icons/Tailwind.jpg" },
  { name: "React Js", level: 8, icon: "/Icons/React.jpg" },
  { name: "TypeScript", level: 8, icon: "/Icons/Typescript.jpg" },
  { name: "Node Js", level: 8, icon: "/Icons/Node.jpg" },
];

function SkillCard({
  skill,
  index,
  featured,
  wide,
}: {
  skill: Skill;
  index: number;
  featured: boolean;
  wide: boolean;
}) {
  return (
    <li
      className={`reveal group panel flex flex-col justify-between gap-6 p-5 ${
        featured
          ? "md:col-span-2 md:row-span-2 md:p-8"
          : wide
            ? "md:col-span-4"
            : ""
      }`}
      style={{ "--i": index } as CSSProperties}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.25em] text-ink/50">
            #{String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={`font-black ${featured ? "text-3xl md:text-4xl" : "text-xl"}`}
          >
            {skill.name}
          </h3>
        </div>
        <img
          src={skill.icon}
          alt=""
          className={`object-contain grayscale transition duration-300 group-hover:grayscale-0 ${
            featured ? "h-16 w-16 md:h-24 md:w-24" : "h-10 w-10"
          }`}
          loading="lazy"
        />
      </div>

      <div
        className="flex items-end gap-3"
        role="img"
        aria-label={`Tingkat keahlian ${skill.name}: ${skill.level} dari 10`}
      >
        <div className="flex flex-1 items-end gap-1">
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              className={`seg flex-1 border-2 border-ink ${featured ? "h-6" : "h-4"} ${
                i < skill.level
                  ? i === skill.level - 1
                    ? "bg-accent"
                    : "bg-ink"
                  : "bg-white"
              }`}
              style={
                { "--i": i, "--d": `${index * 90 + 200}ms` } as CSSProperties
              }
            />
          ))}
        </div>
        <span
          className={`font-display leading-none ${featured ? "text-4xl" : "text-2xl"}`}
        >
          {skill.level}/10
        </span>
      </div>
    </li>
  );
}

export default function Skills() {
  return (
    <Chapter
      id="skills"
      number="02"
      title="Keahlian"
      kicker="Stack yang saya pakai sehari-hari. Arahkan kursor ke kartu untuk melihat warna aslinya."
    >
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={i}
            featured={i === 0}
            wide={i === skills.length - 1}
          />
        ))}
      </ul>
    </Chapter>
  );
}

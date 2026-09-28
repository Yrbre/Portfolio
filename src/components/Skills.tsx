import Chapter from "./Chapter";

type Skill = {
  name: string;
  level: number; // 1 sampai 10
};

const skills: Skill[] = [
    { name: "HTML & CSS", level: 8 },
    { name: "Laravel", level: 8 },
    { name: "Node Js", level: 7 },
    { name: "React", level: 7 },
    { name: "Tailwind CSS", level: 8 },
    { name: "TypeScript", level: 7 },
];

export default function Skills() {
  return (
    <Chapter id="keahlian" title="Keahlian">
      <ul className="grid gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="border-4 border-black bg-white p-4 shadow-[6px_6px_0_#000]"
          >
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-xl font-black">{skill.name}</span>
              <span className="font-display text-2xl">{skill.level}/10</span>
            </div>

            <div
              className="flex gap-1"
              role="img"
              aria-label={`Tingkat keahlian ${skill.name}: ${skill.level} dari 10`}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <span
                  key={i}
                  className={`h-4 flex-1 border-2 border-black ${
                    i < skill.level ? "bg-black" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Chapter>
  );
}
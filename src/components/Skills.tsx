import Chapter from "./Chapter";

type Skill = {
  name: string;
  level: number; // 1 sampai 10
  icon?: string; // optional
};

const skills: Skill[] = [
    { name: "HTML & CSS", level: 8, icon: "/Icons/HTML.jpg" },
    { name: "Laravel", level: 8, icon: "/Icons/Laravel.jpg" },
    { name: "Node Js", level: 7, icon: "/Icons/Node.jpg" },
    { name: "React Js", level: 7, icon: "/Icons/React.jpg" },
    { name: "Tailwind CSS", level: 8, icon: "/Icons/Tailwind.jpg" },
    { name: "TypeScript", level: 7, icon: "/Icons/Typescript.jpg" },
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
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-xl font-black">{skill.name}</span>
              <img src={skill.icon} alt={skill.name} className="h-10 w-10" />
            </div>

            <div
              className="flex gap-1 justify-between items-center"
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
              <div className="ml-4 flex items-center justify-center">
              
              <span className="font-display text-2xl">{skill.level}/10</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Chapter>
  );
}
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b-4 border-ink bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-10">
        <a href="#top" className="font-display text-2xl tracking-wide">
          Yrbre<span className="text-accent">.</span>
        </a>
        <ul className="flex text-xs font-black uppercase sm:text-sm md:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-1.5 py-1 transition-colors sm:px-2 hover:bg-ink hover:text-paper md:px-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import { socials } from "../socials";

export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-14 text-paper md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="font-display text-5xl leading-none tracking-wide md:text-7xl">
          To be continued<span className="text-accent">...</span>
        </p>
        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex gap-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center border-2 border-paper/40 transition-colors hover:border-accent hover:bg-accent active:scale-95"
                  >
                    <Icon size={20} weight="bold" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-sm font-bold text-paper/60">
            &copy; {new Date().getFullYear()} Bariq Fajar · Yrbre
          </p>
        </div>
      </div>
    </footer>
  );
}

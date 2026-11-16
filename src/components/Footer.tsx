export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-14 text-paper md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="font-display text-5xl leading-none tracking-wide md:text-7xl">
          To be continued<span className="text-accent">...</span>
        </p>
        <p className="text-sm font-bold text-paper/60">
          &copy; {new Date().getFullYear()} Bariq Fajar · Yrbre
        </p>
      </div>
    </footer>
  );
}

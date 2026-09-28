import Chapter from "./Chapter";


export default function About() {
  return (
    <Chapter id="tentang" title="Behind the Code">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden border-4 border-black bg-white md:col-span-2">
          <div className="halftone absolute inset-0" aria-hidden="true" />
          <span className="font-display outline-text relative text-[9rem] leading-none md:text-[11rem]">
            <img src="/Picture.png" alt="Avatar" className="h-full w-full object-cover"></img>
          </span>
        </div>

        {/* Balon dialog + status */}
        <div className="flex flex-col justify-center gap-10 md:col-span-3">
          <p
            className="bubble border-4 border-black bg-white p-6 text-lg font-bold leading-relaxed md:text-xl"
            style={{ borderRadius: "2rem" }}
          >
           Hi, I'm Bariq Fajar
          </p>
          <p className="border-4 border-dashed border-black p-4 font-bold">
            Status: Terbuka untuk proyek freelance dan posisi full-time
          </p>
        </div>
      </div>
    </Chapter>
  );
}
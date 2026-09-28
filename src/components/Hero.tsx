export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b-8 border-black px-4 py-16">
      <div className="speed-lines absolute inset-0" aria-hidden="true" />
      <div className="relative w-full max-w-4xl border-8 border-black bg-white p-6 text-center shadow-[12px_12px_0_#000] md:p-12">
        <p className="mb-2 text-lg font-black md:text-2xl">Web Developer · Tangerang</p>
        <h1 className="slam font-display text-[clamp(3.5rem,15vw,10rem)] leading-[0.9] tracking-wide">
          Yrbre
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#project" className="border-4 border-black bg-black px-6 py-3 font-black text-white shadow-[5px_5px_0_#000] transition hover:-translate-y-0.5 hover:bg-white hover:text-black">
                Lihat Proyek
            </a>
            <a href="#kontak" className="border-4 border-black bg-black px-6 py-3 font-black text-white shadow-[5px_5px_0_#000] transition hover:-translate-y-0.5 hover:bg-white hover:text-black">
                Kontak Saya
            </a>
            </div>
      </div>
    </section>
  );
}
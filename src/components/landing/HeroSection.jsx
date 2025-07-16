export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-100 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Sua grana no <span className="text-[#2EE59D]">shape certo</span>.
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            O GranaFit ajuda você a cuidar da saúde financeira com metas, alertas e evolução constante.
          </p>
          <a href="/login?register" className="mt-8 inline-block px-8 py-4 bg-[#2EE59D] text-white text-lg font-bold rounded-xl shadow hover:opacity-90 transition">
            Comece grátis agora
          </a>
        </div>
        <div className="flex-1 hidden md:flex justify-center">
          <img src="/mockups/dashboard-mockup.png" alt="GranaFit app" className="w-[320px] drop-shadow-2xl rounded-xl" />
        </div>
      </div>
    </section>
  );
}
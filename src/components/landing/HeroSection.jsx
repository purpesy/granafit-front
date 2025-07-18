import HeroFoto from "../../assets/img/hero-banner.png";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* Texto */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Sua grana no <span className="text-[#2EE59D]">shape certo</span>.
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            O GranaFit ajuda você a cuidar da saúde financeira com metas,
            alertas e evolução constante.
          </p>
          <a
            href="/login?register"
            className="mt-8 inline-block px-8 py-4 bg-[#2EE59D] text-white text-lg font-bold rounded-xl shadow hover:opacity-90 transition"
          >
            Comece grátis agora
          </a>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <img
            src={HeroFoto}
            alt="Ilustração GranaFit"
            className="w-full max-w-[500px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

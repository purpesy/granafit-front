  import React from 'react';

const MockupUI = () => (
  <div className="w-full h-full bg-slate-100 p-4 flex flex-col gap-3">
    <div className="flex justify-between items-center">
      <div className="w-8 h-8 rounded-full bg-slate-200"></div>
      <div className="w-24 h-4 rounded-full bg-slate-200"></div>
    </div>
    <div className="w-full h-16 rounded-lg bg-slate-200"></div>
    <div className="w-full h-8 rounded-full bg-slate-200"></div>
    <div className="w-4/5 h-8 rounded-full bg-slate-200"></div>
    <div className="w-full h-24 rounded-lg bg-slate-200 mt-4"></div>
  </div>
);


export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-8 px-6">
        {/* Coluna de Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Sua grana no <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EE59D] to-[#24c98a]">shape certo</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl mx-auto md:mx-0">
            Treine sua mente financeira com o GranaFit. Controle, metas e bem-estar em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="/login?register" 
              className="px-8 py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-[#2EE59D] to-[#24c98a] hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-[#2EE59D]/30"
            >
              Começar agora (é grátis)
            </a>
          </div>
        </div>

        {/* Coluna do Mockup */}
        <div className="flex justify-center">
          {/* Estrutura do celular */}
          <div className="w-[300px] h-[600px] bg-slate-800 rounded-[48px] p-4 shadow-2xl shadow-slate-400/60 border-4 border-slate-900">
            {/* Tela */}
            <div className="w-full h-full bg-slate-100 rounded-[32px] overflow-hidden">
               <MockupUI />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
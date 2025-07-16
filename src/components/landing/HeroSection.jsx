import React from 'react';

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-24 md:py-36">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 px-6">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-[#1A2236] mb-8 leading-tight tracking-tight">
            Sua grana no <span className="text-[#2EE59D]">shape certo</span>.
          </h1>
          <p className="text-2xl md:text-3xl text-[#1A2236]/80 mb-10 max-w-2xl mx-auto md:mx-0 font-medium">
            Treine sua mente financeira com o GranaFit. Controle, metas e bem-estar em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a href="/login?register" className="px-10 py-4 rounded-2xl font-bold text-white text-xl bg-[#2EE59D] hover:bg-[#24c98a] transition shadow-lg">Começar agora grátis</a>
          </div>
        </div>
        {/* Mockup ilustrativo */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-[340px] h-[400px] md:w-[420px] md:h-[480px] bg-white rounded-3xl flex items-center justify-center shadow border border-gray-200">
            {/* Placeholder para mockup de dashboard */}
            <span className="text-6xl text-gray-200 font-black select-none">Mockup</span>
          </div>
        </div>
      </div>
    </section>
  );
} 
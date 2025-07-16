import React from 'react';

export default function CallToAction() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl font-black text-[#1A2236]">Comece a cuidar da sua grana como cuida da sua saúde.</h2>
        <a href="/login?register" className="px-10 py-4 rounded-2xl font-bold text-white text-xl bg-[#2EE59D] hover:bg-[#24c98a] transition shadow-lg">Quero minha vida financeira saudável</a>
      </div>
    </section>
  );
} 
// --- VERSÃO PROFISSIONAL ---
// Mudanças:
// 1. Fundo alterado para um gradiente escuro ('bg-slate-900'), criando um grande contraste e destacando-a como uma seção final de conversão.
// 2. Cores do texto ajustadas para branco e cinza claro para legibilidade no fundo escuro.
// 3. Botão de ação com gradiente e uma sombra mais pronunciada e colorida, tornando-o o foco principal.
// 4. Título e espaçamentos ajustados para um visual mais dramático e convidativo.

import React from 'react';

export default function CallToAction() {
  return (
    <section className="w-full bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl font-black text-white">Comece a cuidar da sua grana como cuida da sua saúde.</h2>
        <p className="text-lg text-slate-300 max-w-2xl">
            Chega de planilhas complicadas. Tenha clareza, atinja suas metas e conquiste a tranquilidade financeira que você merece.
        </p>
        <a 
          href="/login?register" 
          className="px-10 py-4 rounded-xl font-bold text-white text-xl bg-gradient-to-r from-[#2EE59D] to-[#24c98a] hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-[#2EE59D]/30"
        >
          Quero minha vida financeira saudável
        </a>
      </div>
    </section>
  );
}
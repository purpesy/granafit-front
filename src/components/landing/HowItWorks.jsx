// --- VERSÃO PROFISSIONAL ---
// Mudanças:
// 1. Adicionado um subtítulo para dar mais contexto à seção.
// 2. Os cards agora têm um efeito de hover mais sutil.
// 3. O elemento principal: linhas pontilhadas conectam os cards no modo desktop, guiando o olhar do usuário através do processo.
// 4. Cores e tipografia ajustadas para consistência.

import React from 'react';

const steps = [
  { number: '1', title: 'Crie sua conta grátis', desc: 'Em poucos cliques, comece sua jornada para o shape financeiro.' },
  { number: '2', title: 'Conecte suas fontes', desc: 'Adicione suas contas e cartões de forma 100% segura.' },
  { number: '3', title: 'Acompanhe e conquiste', desc: 'Veja resultados, mantenha o foco e celebre cada conquista.' },
];

function StepCard({ number, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-2xl border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 text-3xl font-bold text-slate-700 mb-2">
        {number}
      </div>
      <h4 className="text-xl font-bold text-slate-800">{title}</h4>
      <p className="text-slate-500">{desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="w-full py-20 bg-white" id="howitworks">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Começar é simples e rápido</h2>
            <p className="mt-4 text-lg text-slate-600">Em apenas 3 passos você estará no controle da sua vida financeira.</p>
        </div>
        
        {/* Container com as linhas de conexão */}
        <div className="relative mt-16">
          {/* Linhas pontilhadas (visíveis apenas em telas maiores) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
            <svg className="w-full" height="2" preserveAspectRatio="none" viewBox="0 0 100 2">
              <path d="M 0 1 L 100 1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 8"/>
            </svg>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <StepCard key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
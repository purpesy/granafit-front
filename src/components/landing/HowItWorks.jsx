import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Crie sua conta',
    desc: 'Em poucos cliques, comece sua jornada para o shape financeiro.'
  },
  {
    number: '2',
    title: 'Defina suas metas',
    desc: 'Escolha onde quer chegar. Metas claras, resultados reais.'
  },
  {
    number: '3',
    title: 'Acompanhe seu progresso',
    desc: 'Veja resultados, mantenha o foco e celebre cada conquista.'
  },
];

function StepCard({ number, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl shadow p-10 border border-gray-200 hover:shadow-md transition-all min-h-[220px]">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2EE59D]/10 text-4xl font-black text-[#2EE59D] mb-2">{number}</div>
      <h4 className="text-xl font-bold text-[#1A2236] mb-1">{title}</h4>
      <p className="text-[#1A2236]/70 text-base font-medium">{desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="w-full py-20 bg-white" id="howitworks">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#1A2236] mb-16">Como funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <StepCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
} 
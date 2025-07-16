import React from 'react';

const features = [
  {
    icon: '📈',
    title: 'Dashboard Inteligente',
    desc: 'Visualize sua evolução financeira como nunca. Seu progresso, seus gráficos, seu shape.'
  },
  {
    icon: '🎯',
    title: 'Metas de economia',
    desc: 'Defina objetivos claros e veja seu dinheiro ganhar condicionamento.'
  },
  {
    icon: '⏰',
    title: 'Alertas de gastos',
    desc: 'Receba avisos antes de sair do ritmo. Controle total, sem surpresas.'
  },
  {
    icon: '🏆',
    title: 'Relatórios motivadores',
    desc: 'Entenda seus hábitos, celebre conquistas e mantenha a motivação.'
  },
];

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center gap-4 border border-gray-200 hover:shadow-md transition-all min-h-[220px]">
      <div className="text-4xl mb-2 select-none">{icon}</div>
      <h3 className="text-xl font-extrabold text-[#1A2236] mb-1">{title}</h3>
      <p className="text-[#1A2236]/70 text-base font-medium">{desc}</p>
    </div>
  );
}

export default function FeatureHighlights() {
  return (
    <section className="w-full py-20 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#1A2236] mb-16">Treine sua mente financeira</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
} 
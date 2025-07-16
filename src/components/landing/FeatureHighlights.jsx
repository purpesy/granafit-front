const icons = {
  Dashboard: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Target: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1V9a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 001 1h3m-6 0a1 1 0 001-1V9a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 001 1h3" />
    </svg>
  ),
  Alerts: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  Reports: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

const features = [
  { icon: icons.Dashboard, title: 'Dashboard Inteligente', desc: 'Visualize sua evolução financeira como nunca. Seu progresso, seus gráficos, seu shape.' },
  { icon: icons.Target, title: 'Metas de economia', desc: 'Defina objetivos claros e veja seu dinheiro ganhar condicionamento.' },
  { icon: icons.Alerts, title: 'Alertas de gastos', desc: 'Receba avisos antes de sair do ritmo. Controle total, sem surpresas.' },
  { icon: icons.Reports, title: 'Relatórios motivadores', desc: 'Entenda seus hábitos, celebre conquistas e mantenha a motivação.' },
];

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2EE59D]/20 to-[#24c98a]/20 text-[#008a5c] mb-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-slate-500 text-base">{desc}</p>
    </div>
  );
}

export default function FeatureHighlights() {
  return (
    <section className="w-full py-20 bg-slate-50" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Treine sua mente financeira</h2>
            <p className="mt-4 text-lg text-slate-600">Todas as ferramentas que você precisa para alcançar o bem-estar financeiro.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
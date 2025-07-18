const icons = {
  Dashboard: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Target: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l-8-8m16 8l-8 8m0-16v16" />
    </svg>
  ),
  Alerts: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" />
    </svg>
  ),
  Reports: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.6a1 1 0 01.7.3l5.4 5.4a1 1 0 01.3.7V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

const features = [
  {
    icon: icons.Dashboard,
    title: 'Dashboard Inteligente',
    desc: 'Acompanhe sua evolução com gráficos que mostram onde está gastando e como economizar até 30% da sua renda mensal.',
  },
  {
    icon: icons.Target,
    title: 'Metas de economia',
    desc: 'Crie objetivos claros e alcance seu fundo de emergência ou sonho em até 3x menos tempo.',
  },
  {
    icon: icons.Alerts,
    title: 'Alertas de gastos',
    desc: 'Receba avisos em tempo real e evite desperdícios. Usuários ativos relatam até 40% menos compras por impulso.',
  },
  {
    icon: icons.Reports,
    title: 'Relatórios motivadores',
    desc: 'Veja seu progresso, celebre conquistas e mantenha a motivação com insights semanais personalizados.',
  },
];

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-800 hover:bg-slate-700 rounded-2xl p-8 flex flex-col items-center text-center gap-4 border border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2EE59D]/20 text-[#2EE59D]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-slate-300 text-base">{desc}</p>
    </div>
  );
}

export default function FeatureHighlights() {
  return (
    <section className="w-full py-20 bg-slate-900" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Treine sua mente financeira
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Use dados e motivação para conquistar o seu melhor desempenho financeiro.
          </p>
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

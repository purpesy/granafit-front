import { SectionTitle } from './SectionTitle';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Crie sua conta',
      desc: 'Cadastre-se e comece sua jornada financeira em segundos.',
      icon: '📝'
    },
    {
      title: 'Adicione seus dados',
      desc: 'Informe seus ganhos, gastos e metas.',
      icon: '📊'
    },
    {
      title: 'Acompanhe sua evolução',
      desc: 'Visualize gráficos, alertas e conquiste resultados.',
      icon: '🔥'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <SectionTitle title="Como funciona" subtitle="Com 3 passos você transforma sua saúde financeira" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((s, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <div className="text-5xl mb-4">{s.icon}</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">{s.title}</h4>
            <p className="text-gray-600 text-base">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
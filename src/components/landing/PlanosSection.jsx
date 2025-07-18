import { SectionTitle } from './SectionTitle';

export default function PlanosSection() {
  const plans = [
    {
      name: 'Free',
      price: 'R$0',
      desc: 'Ideal para começar com controle básico.',
      features: ['Dashboard essencial', 'Metas básicas', 'Alertas mensais'],
      highlight: false,
    },
    {
      name: 'Basic',
      price: 'R$9,90',
      desc: 'Para quem quer evoluir com relatórios e metas ilimitadas.',
      features: ['Tudo do Free', 'Metas ilimitadas', 'Exportação de dados'],
      highlight: true,
    },
    {
      name: 'Premium',
      price: 'R$19,90',
      desc: 'A experiência completa para o shape financeiro ideal.',
      features: ['Tudo do Basic', 'Suporte VIP', 'Novidades exclusivas'],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <SectionTitle title="Planos que cabem no seu bolso" subtitle="Escolha o que mais combina com sua jornada" />
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition border-2 ${
              plan.highlight ? 'border-[#2EE59D]' : 'border-gray-200'
            } bg-white flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-gray-900 mb-2">{plan.price}</p>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <ul className="mb-6 text-sm text-gray-700 list-disc list-inside">
                {plan.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
            </div>
            <a
              href="/login?register"
              className={`mt-auto text-center block w-full py-3 rounded-xl font-bold text-white ${plan.highlight ? 'bg-[#2EE59D]' : 'bg-gray-700'} hover:opacity-90 transition`}
            >
              Escolher plano
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from 'react';

const plans = [
  {
    name: 'Free',
    price: 'R$0',
    desc: 'O básico para começar a organizar sua vida financeira.',
    features: [
      'Dashboard inteligente',
      'Metas básicas',
      'Alertas essenciais',
    ],
    highlight: false,
    cta: 'Começar grátis',
    href: '/login?register',
  },
  {
    name: 'Basic',
    price: 'R$9,90',
    desc: 'Para quem quer ir além e turbinar seus resultados.',
    features: [
      'Tudo do Free',
      'Metas ilimitadas',
      'Relatórios motivadores',
      'Exportação de dados',
    ],
    highlight: false,
    cta: 'Quero evoluir',
    href: '#',
  },
  {
    name: 'Premium',
    price: 'R$19,90',
    desc: 'O shape financeiro definitivo. Tudo do GranaFit, sem limites.',
    features: [
      'Tudo do Basic',
      'Suporte prioritário',
      'Novidades exclusivas',
      'Acesso antecipado a recursos',
    ],
    highlight: true,
    cta: 'Quero ser Premium',
    href: '#',
  },
];

function PlanCard({ name, price, desc, features, highlight, cta, href }) {
  return (
    <div className={`flex flex-col rounded-2xl border-2 ${highlight ? 'border-[#2EE59D] shadow-lg scale-105 z-10 bg-white' : 'border-gray-200 shadow bg-white'} p-10 gap-6 transition-all`}>
      <h3 className={`text-2xl font-black mb-1 ${highlight ? 'text-[#2EE59D]' : 'text-[#1A2236]'}`}>{name}</h3>
      <div className="text-4xl font-extrabold mb-2 text-[#1A2236]">{price} <span className="text-base font-medium text-[#1A2236]/50">/mês</span></div>
      <p className="text-[#1A2236]/70 mb-4 text-lg font-medium">{desc}</p>
      <ul className="flex-1 flex flex-col gap-2 mb-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-[#2EE59D] font-semibold">{f}</li>
        ))}
      </ul>
      <a href={href} className={`mt-auto px-8 py-4 rounded-xl font-bold text-lg text-white bg-[#2EE59D] hover:bg-[#24c98a] transition shadow ${highlight ? '' : 'opacity-90 hover:opacity-100'}`}>{cta}</a>
    </div>
  );
}

export default function PlanosSection() {
  return (
    <section className="w-full py-20 bg-white" id="pricing">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#1A2236] mb-16">Escolha seu plano</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((p, i) => (
            <PlanCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
} 
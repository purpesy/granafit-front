import { ShieldCheck, Lock, Globe, CheckCircle } from 'lucide-react';

const items = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#2EE59D]" />,
    title: 'Proteção de Dados',
    desc: 'Seus dados são criptografados de ponta a ponta com tecnologia de padrão bancário.',
  },
  {
    icon: <Lock className="w-8 h-8 text-[#2EE59D]" />,
    title: 'Login Seguro',
    desc: 'Contas protegidas com autenticação segura e verificação por e-mail.',
  },
  {
    icon: <Globe className="w-8 h-8 text-[#2EE59D]" />,
    title: 'Hospedagem Confiável',
    desc: 'Servidores em nuvem com 99.9% de uptime e certificados SSL ativos.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#2EE59D]" />,
    title: 'Compromisso com a LGPD',
    desc: 'Seguimos rigorosamente a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
  },
];

function SecurityCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow hover:shadow-lg transition">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  );
}

export default function SecurityAssurance() {
  return (
    <section className="w-full bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">Segurança e confiança em primeiro lugar</h2>
          <p className="text-slate-300 mt-4 text-lg">
            O GranaFit foi pensado para proteger sua jornada financeira, com total transparência e respeito aos seus dados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <SecurityCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

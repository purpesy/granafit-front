import { SectionTitle } from './SectionTitle';

export default function Testemunhos() {
  const testimonials = [
    {
      name: 'Lucas',
      avatar: '🧑‍💻',
      quote: 'Comecei a ver minha grana como um treino. Hoje estou no controle!',
    },
    {
      name: 'Julia',
      avatar: '👩‍🎓',
      quote: 'Com o GranaFit parei de gastar sem pensar. Me sinto focada de verdade.',
    },
    {
      name: 'Carlos',
      avatar: '🏋️‍♂️',
      quote: 'A comparação com academia fez todo sentido. Estou no shape financeiro!'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <SectionTitle title="O que dizem os usuários" subtitle="Experiências reais de quem está no caminho certo" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl text-center">
            <div className="text-5xl mb-4">{t.avatar}</div>
            <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
            <p className="font-bold text-[#2EE59D]">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

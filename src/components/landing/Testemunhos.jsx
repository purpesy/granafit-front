import React from 'react';

const testimonials = [
  {
    name: 'Lucas',
    age: 17,
    avatar: '🧑‍💻',
    text: 'Parei de gastar com besteira só vendo os gráficos do app.'
  },
  {
    name: 'Mariana',
    age: 28,
    avatar: '👩‍🎤',
    text: 'Nunca foi tão fácil manter minhas metas em dia.'
  },
  {
    name: 'João',
    age: 34,
    avatar: '🧔',
    text: 'O GranaFit virou meu personal trainer financeiro.'
  },
];

function TestimonialCard({ name, age, avatar, text }) {
  return (
    <div className="bg-white rounded-2xl shadow p-10 flex flex-col items-center text-center gap-4 border border-gray-200 hover:shadow-md transition-all min-h-[200px]">
      <div className="text-5xl mb-2 select-none">{avatar}</div>
      <p className="text-[#1A2236]/80 text-lg mb-2 font-medium">"{text}"</p>
      <span className="font-bold text-[#2EE59D] text-lg">{name}, {age} anos</span>
    </div>
  );
}

export default function Testemunhos() {
  return (
    <section className="w-full py-20 bg-white" id="testemunhos">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#1A2236] mb-16">O que dizem os usuários</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
} 
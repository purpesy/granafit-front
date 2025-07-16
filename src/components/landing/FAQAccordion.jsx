import React, { useState } from 'react';

const faqs = [
  {
    question: 'É seguro?',
    answer: 'Sim! Seus dados são criptografados e protegidos com tecnologia de ponta.'
  },
  {
    question: 'Tem versão gratuita?',
    answer: 'Sim, você pode usar o GranaFit gratuitamente e evoluir para planos pagos quando quiser.'
  },
  {
    question: 'Posso exportar meus dados?',
    answer: 'Pode sim! Exporte tudo em CSV ou PDF a qualquer momento.'
  },
  {
    question: 'O que muda nos planos pagos?',
    answer: 'Mais relatórios, metas ilimitadas, suporte prioritário e novidades exclusivas.'
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <section className="w-full py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#1A2236] mb-16">Perguntas frequentes</h2>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl bg-white shadow-sm">
              <button
                className="w-full text-left px-6 py-5 text-xl font-bold text-[#1A2236] flex justify-between items-center focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {faq.question}
                <span className={`ml-4 text-2xl transition-transform ${open === i ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-[#1A2236]/80 text-lg font-medium animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
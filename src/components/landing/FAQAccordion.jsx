import { useState } from 'react';

const faqs = [
  { question: 'É seguro conectar minhas contas?', answer: 'Sim! Usamos criptografia de nível bancário e seguimos os mais altos padrões de segurança do mercado. Seus dados estão protegidos.' },
  { question: 'Existe uma versão 100% gratuita?', answer: 'Sim, você pode usar o GranaFit gratuitamente para sempre. Os planos pagos oferecem funcionalidades avançadas, como relatórios personalizados e metas ilimitadas.' },
  { question: 'Posso cancelar a qualquer momento?', answer: 'Com certeza. Você pode cancelar sua assinatura a qualquer momento, sem burocracia e sem multas.' },
  { question: 'Como o GranaFit ganha dinheiro?', answer: 'Ganhamos dinheiro através das assinaturas dos nossos planos premium. Nunca venderemos seus dados.' },
];

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);


export default function FAQAccordion() {
  const [open, setOpen] = useState(null);
  const contentClass = `px-6 pt-2 pb-6 text-slate-600 text-lg animate-fade-in-down`;
  
  return (
    <section className="w-full py-20 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-900 mb-16">Dúvidas? A gente responde.</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden transition-all duration-300 ${open === i ? 'shadow-lg' : ''}`}>
              <button
                className="w-full text-left p-6 text-xl font-bold text-slate-800 flex justify-between items-center focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {faq.question}
                <ChevronDownIcon className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className={contentClass}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
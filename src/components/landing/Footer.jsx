import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-green-100 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo e copyright */}
        <div className="flex flex-col items-center md:items-start gap-2 select-none">
          <span className="text-2xl font-extrabold text-green-700">Grana<span className="text-blue-600">Fit</span></span>
          <span className="text-gray-400 text-base font-medium">© {new Date().getFullYear()} GranaFit. Todos os direitos reservados.</span>
        </div>
        {/* Links úteis */}
        <ul className="flex gap-8 text-green-700 text-lg font-semibold">
          <li><a href="#beneficios" className="hover:text-blue-600 transition-colors">Benefícios</a></li>
          <li><a href="#planos" className="hover:text-blue-600 transition-colors">Planos</a></li>
          <li><a href="#depoimentos" className="hover:text-blue-600 transition-colors">Depoimentos</a></li>
        </ul>
      </div>
    </footer>
  );
} 
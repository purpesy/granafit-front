import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-white/70 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-30 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 select-none">
          <span className="text-3xl font-extrabold tracking-tight text-green-700 drop-shadow-sm">Grana<span className="text-blue-600">Fit</span></span>
        </div>
        {/* Links desktop */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold text-gray-700">
          <li><a href="#features" className="hover:text-green-700 transition-colors">Benefícios</a></li>
          <li><a href="#howitworks" className="hover:text-green-700 transition-colors">Como funciona</a></li>
          <li><a href="#pricing" className="hover:text-green-700 transition-colors">Planos</a></li>
        </ul>
        {/* Botões */}
        <div className="hidden md:flex gap-3">
          <a href="/login" className="px-6 py-2 rounded-lg font-bold text-green-700 border-2 border-green-600 bg-white hover:bg-green-50 transition shadow-sm">Entrar ou Cadastrar</a>
        </div>
        {/* Mobile menu placeholder */}
        <div className="md:hidden" />
      </nav>
    </header>
  );
} 
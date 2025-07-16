// --- VERSÃO PROFISSIONAL ---
// Mudanças:
// 1. Layout reestruturado para um design multi-colunas, muito mais profissional.
// 2. Adicionada uma coluna para "Produto", "Empresa" e "Legal".
// 3. Adicionado um espaço para ícones de redes sociais.
// 4. Cores e tipografia ajustadas para um visual limpo e moderno.
// 5. O logo agora está mais alinhado com o tema.

import React from 'react';

// Ícones SVG para redes sociais
const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2EE59D] transition-colors duration-300">
    {children}
  </a>
);

const InstagramIcon = () => (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.143 0-3.504.012-4.73.068-2.693.123-3.993 1.424-4.116 4.116-.056 1.225-.068 1.585-.068 4.73s.012 3.504.068 4.73c.123 2.693 1.423 3.993 4.116 4.116 1.225.056 1.585.068 4.73.068s3.504-.012 4.73-.068c2.693-.123 3.993-1.424 4.116-4.116.056-1.225.068-1.585.068-4.73s-.012-3.504-.068-4.73c-.123-2.693-1.423-3.993-4.116-4.116-1.225-.056-1.585-.068-4.73-.068zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 8.528a3.363 3.363 0 110-6.726 3.363 3.363 0 010 6.726zM18.205 5.567a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>);
const TwitterIcon = () => (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.52 3.379 4.748 3.419a9.89 9.89 0 01-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.963 13.963 0 007.548 2.212c9.058 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.015-.637a9.953 9.953 0 002.46-2.548z" /></svg>);

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo e descrição */}
          <div className="md:col-span-4">
            <span className="text-2xl font-black text-slate-900">Grana<span className="text-[#2EE59D]">Fit</span></span>
            <p className="text-slate-500 mt-4 max-w-xs">
              Sua jornada para o bem-estar financeiro começa aqui.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-slate-800 mb-4">Produto</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-slate-500 hover:text-[#2EE59D] transition-colors">Funcionalidades</a></li>
                <li><a href="#howitworks" className="text-slate-500 hover:text-[#2EE59D] transition-colors">Como funciona</a></li>
                <li><a href="#pricing" className="text-slate-500 hover:text-[#2EE59D] transition-colors">Planos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-4">Empresa</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-[#2EE59D] transition-colors">Sobre nós</a></li>
                <li><a href="#" className="text-slate-500 hover:text-[#2EE59D] transition-colors">Contato</a></li>
                <li><a href="#" className="text-slate-500 hover:text-[#2EE59D] transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-[#2EE59D] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-slate-500 hover:text-[#2EE59D] transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright e Redes Sociais */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} GranaFit. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-6 sm:mt-0">
            <SocialIcon href="#"><TwitterIcon /></SocialIcon>
            <SocialIcon href="#"><InstagramIcon /></SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
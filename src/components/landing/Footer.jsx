export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/2">
            <span className="text-2xl font-black text-white">
              Grana<span className="text-[#2EE59D]">Fit</span>
            </span>
            <p className="text-slate-300 mt-4 max-w-xs">
              Sua jornada para o bem-estar financeiro começa aqui.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-slate-300 mb-4">Produto</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-slate-400 hover:text-[#2EE59D] transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#howitworks" className="text-slate-400 hover:text-[#2EE59D] transition-colors">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-slate-400 hover:text-[#2EE59D] transition-colors">
                    Planos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-300 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-400 hover:text-[#2EE59D] transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-[#2EE59D] transition-colors">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-12 pt-8 flex justify-center items-center">
          <p className="text-slate-200 text-sm text-center">
            © {new Date().getFullYear()} GranaFit. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

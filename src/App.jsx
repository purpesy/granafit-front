import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import { ToastProvider } from './components/ui/Toast';

import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/app/Dashboard';
import Transacoes from './pages/app/Transacoes';
import ContasSalarios from './pages/app/ContasSalarios';
import Categorias from './pages/app/Categorias';
import Metas from './pages/app/Metas';
import Planejamento from './pages/app/Planejamento';
import Investimentos from './pages/app/Investimentos';
import DespesasPendentes from './pages/app/DespesasPendentes';
import Configuracoes from './pages/app/Configuracoes';

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/transacoes" element={<Transacoes />} />
          <Route path="/app/contas" element={<ContasSalarios />} />
          <Route path="/app/categorias" element={<Categorias />} />
          <Route path="/app/metas" element={<Metas />} />
          <Route path="/app/planejamento" element={<Planejamento />} />
          <Route path="/app/investimentos" element={<Investimentos />} />
          <Route path="/app/despesas" element={<DespesasPendentes />} />
          <Route path="/app/configuracoes" element={<Configuracoes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

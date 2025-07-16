import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

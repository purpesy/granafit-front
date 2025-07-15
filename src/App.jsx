import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<AuthPage />}
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

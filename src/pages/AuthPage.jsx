import { useState } from 'react';
import AuthFormContainer from '../components/auth/AuthFormContainer';
import ForgotPasswordModal from '../components/auth/ForgotPasswordModal';

export default function AuthPage() {
  const [mode, setMode] = useState('login');
  const [forgotModalOpen, setForgotModalOpen] = useState(false);

  function toggleMode() {
    setMode(mode === 'login' ? 'register' : 'login');
  }

  function openForgotModal() {
    setForgotModalOpen(true);
  }

  function closeForgotModal() {
    setForgotModalOpen(false);
  }

  return (
    <>
      <AuthFormContainer
        mode={mode}
        onToggleMode={toggleMode}
        onForgotPassword={openForgotModal}
      />

      {forgotModalOpen && <ForgotPasswordModal onClose={closeForgotModal} />}
    </>
  );
}

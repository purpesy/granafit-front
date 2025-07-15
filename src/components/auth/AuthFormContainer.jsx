import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import AuthFooter from './AuthFooter';

export default function AuthFormContainer({ mode, onToggleMode, onForgotPassword }) {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center my-8">GranaFit</h1>
      <h2 className='text-xl font-semibold mb-6'>{mode === 'login' ? 'Login para continuar' : 'Cadastre-se'}</h2>

      {mode === 'login' ? <LoginForm /> : <RegisterForm />}

      <AuthFooter
        mode={mode}
        onToggleMode={onToggleMode}
        onForgotPassword={onForgotPassword}
      />
    </div>
  );
}

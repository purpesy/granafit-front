import React, { useState } from 'react';
import FormInput from '../form/FormInput';
import FormButton from '../form/FormButton';

export default function ForgotPasswordModal({ onClose }) {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Email de recuperação enviado para ${email}`);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none transition-colors"
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Recuperar senha</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
         <FormButton type="submit">Enviar</FormButton>
        </form>
      </div>
    </div>
  );
}

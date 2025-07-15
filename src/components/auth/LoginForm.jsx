import React, { useState } from 'react';
import FormInput from '../form/FormInput';
import FormButton from '../form/FormButton';
import FormError from '../form/FormError';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    // Simulação simples de validação
    if (!email) {
      setError('O campo email é obrigatório.');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Digite um email válido.');
      return;
    }
    if (!password) {
      setError('O campo senha é obrigatório.');
      return;
    }

    // Aqui você coloca sua lógica de login, API, etc
    console.log('Login com:', { email, password });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {error && <FormError>{error}</FormError>}

      <FormInput
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="seuemail@exemplo.com"
        required
        error={error.toLowerCase().includes('email') ? error : ''}
      />

      <FormInput
        label="Senha"
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="********"
        required
        error={error.toLowerCase().includes('senha') ? error : ''}
      />

      <FormButton type="submit">Entrar</FormButton>
    </form>
  );
}

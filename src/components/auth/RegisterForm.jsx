import React, { useState } from "react";
import FormInput from "../form/FormInput";
import FormButton from "../form/FormButton";
import FormError from "../form/FormError";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name) {
      setError("O campo nome é obrigatório.");
      return;
    }
    if (email.trim() === "") {
      newErrors.email = "O campo email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Digite um email válido.";
    }
    if (!password) {
      setError("O campo senha é obrigatório.");
      return;
    }
    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }
    if (confirmPassword !== password) {
      setError("As senhas não coincidem.");
      return;
    }

    console.log("Registrar com:", { name, email, password });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {error && <FormError>{error}</FormError>}

      <FormInput
        label="Nome"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome completo"
        required
        error={error.toLowerCase().includes("nome") ? error : ""}
      />

      <FormInput
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seuemail@exemplo.com"
        required
        error={error.toLowerCase().includes("email") ? error : ""}
      />

      <FormInput
        label="Senha"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="********"
        required
        error={error.toLowerCase().includes("senha") ? error : ""}
      />

      <FormInput
        label="Confirmar Senha"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="********"
        required
        error={error.toLowerCase().includes("coincidem") ? error : ""}
      />

      <FormButton type="submit">Criar conta</FormButton>
    </form>
  );
}

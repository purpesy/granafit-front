import React, { useState } from "react";
import FormInput from "../form/FormInput";
import FormButton from "../form/FormButton";
import FormError from "../form/FormError";
import api from "../../services/api";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name) {
      setError("O campo nome é obrigatório.");
      return;
    }
    if (email.trim() === "") {
      setError("O campo email é obrigatório.");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Digite um email válido.");
      return;
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

    try {
      const response = await api.post("/cadastro", {
        name: name.trim(),
        email: email.trim(),
        password: password,
      });

      // Verifique se o backend retorna token e user corretamente
      if (response.data?.token && response.data?.user) {
        localStorage.setItem("token", response.data.token);

        alert("Cadastro realizado com sucesso!");
        console.log("Cadastro bem-sucedido:", response.data.user);
      } else {
        setError("Resposta inesperada do servidor.");
      }
    } catch (err) {
      if (err.response?.data?.erro) {
        setError(err.response.data.erro);
      } else if (err.response?.data?.error) {
        const msg = Array.isArray(err.response.data.error)
          ? err.response.data.error.join(" ")
          : err.response.data.error;

        setError(msg);
      } else {
        setError("Erro ao tentar fazer cadastro.");
      }
    }
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

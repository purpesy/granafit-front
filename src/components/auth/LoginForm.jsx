import React, { useState } from "react";
import FormInput from "../form/FormInput";
import FormButton from "../form/FormButton";
import FormError from "../form/FormError";
import api from "../../services/api";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email) {
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

    try {
      const response = await api.post("/login", { email, password });

      const { token, user } = response.data;

      localStorage.setItem("token", token);

      alert("Login realizado com sucesso!");
      console.log("Login bem-sucedido:", user);
    } catch (err) {
      if (err.response?.data?.erro) {
        setError(err.response.data.erro);
      } else if (err.response?.data?.error) {
        const msg = Array.isArray(err.response.data.error)
          ? err.response.data.error.join(" ")
          : err.response.data.error;

        setError(msg);
      } else {
        setError("Erro ao tentar fazer login.");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {error && <FormError>{error}</FormError>}

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

      <FormButton type="submit">Entrar</FormButton>
    </form>
  );
}

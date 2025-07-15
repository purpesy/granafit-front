import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthFooter from "./AuthFooter";
import ImgLogin from "../../assets/img/login.png";
import ImgDashLogin from "../../assets/img/dash-login.png";

export default function AuthFormContainer({
  mode,
  onToggleMode,
  onForgotPassword,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-20 md:gap-x-32">
        {/* Imagem do lado esquerdo */}
        <div className="hidden md:flex items-center h-full">
          <img
            src={ImgLogin}
            alt="Login"
            className="w-full max-w-sm max-h-[300px] object-contain"
          />
        </div>

        {/* Formulário */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-sm max-h-[93vh] transition-all">
          <div className="text-center mb-3">
            <h1 className="text-3xl font-bold">GranaFit</h1>
            <span className="text-xs text-white bg-green-600 px-2 py-1 rounded-full ml-2">
              Beta
            </span>
          </div>

          <p className="text-sm text-gray-500 text-center mb-4">
            Sua vida financeira em forma.
          </p>

          <h2 className="text-lg font-semibold mb-6 text-center">
            {mode === "login" ? "Login para continuar" : "Cadastre-se"}
          </h2>

          {mode === "login" ? <LoginForm /> : <RegisterForm />}

          <AuthFooter
            mode={mode}
            onToggleMode={onToggleMode}
            onForgotPassword={onForgotPassword}
          />
        </div>

        {/* Imagem do lado direito */}
        <div className="hidden md:flex items-center h-full">
          <img
            src={ImgDashLogin}
            alt="Imagem de dash financeiro"
            className="w-full max-w-sm max-h-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

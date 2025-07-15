export default function AuthFooter({ mode, onToggleMode, onForgotPassword }) {
  return (
    <div className="my-10 text-center text-gray-500">
      {mode === "login" ? (
        <>
          <p className="mb-4">
            <span className="mr-1 text-gray-800">Não sou cliente ainda.</span>
            <button
              type="button"
              className="font-semibold text-primary-600 hover:text-primary-800 transition-colors underline underline-offset-2 cursor-pointer"
              onClick={onToggleMode}
            >
              Quero me cadastrar
            </button>
          </p>
          <p>
            <button
              type="button"
              className="text-lg font-bold text-gray-800 hover:text-green-800 transition-colors underline underline-offset-2 cursor-pointer"
              onClick={onForgotPassword}
            >
              Esqueci a senha
            </button>
          </p>
        </>
      ) : (
        <>
          <p className="mb-4">
            <span className="mr-1">Já sou cliente.</span>
            <button
              type="button"
              className="font-semibold text-primary-600 hover:text-primary-800 transition-colors underline underline-offset-2 cursor-pointer"
              onClick={onToggleMode}
            >
              Entrar
            </button>
          </p>
          <p>
            <button
              type="button"
              className="text-lg font-bold text-gray-800 hover:text-green-800 transition-colors underline underline-offset-2 cursor-pointer"
              onClick={onForgotPassword}
            >
              Esqueci a senha
            </button>
          </p>
        </>
      )}
    </div>
  );
}

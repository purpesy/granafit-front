export default function FormButton({
  children,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        bg-green-900 text-white font-bold py-3 px-6 rounded-md cursor-pointer
        shadow-md hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-400
        transition-colors disabled:bg-green-400 disabled:cursor-not-allowed
      `}
      {...props}
    >
      {children}
    </button>
  );
}

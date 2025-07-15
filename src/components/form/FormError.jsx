export default function FormError({ children }) {
  return (
    <div
      role="alert"
      className="
        bg-red-100 border border-red-600 text-red-700 font-semibold
        rounded-md px-4 py-2 mb-4
      "
    >
      {children}
    </div>
  );
}

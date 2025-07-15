export default function FormInput({
  label,
  id,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  error = '',
  ...props
}) {
  const inputId = id || name;

  return (
    <div className="mb-4 flex flex-col">
      <label
        htmlFor={inputId}
        className="mb-2 font-semibold text-green-900"
      >
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>

      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`border-2 rounded-md px-6 py-3 text-gray-900 placeholder-green-600
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-colors
          ${error ? 'border-red-600' : 'border-green-800'}
          `}
        {...props}
      />

      {error && (
        <span
          id={`${inputId}-error`}
          role="alert"
          className="mt-1 text-sm text-red-600 font-medium"
        >
          {error}
        </span>
      )}
    </div>
  );
}

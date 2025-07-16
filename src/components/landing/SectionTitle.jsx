export function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}

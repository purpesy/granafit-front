import React from "react";

export default function CTASection({
  title,
  subtitle,
  buttonText,
  href,
  bg = "bg-slate-900",
  textColor = "text-white",
  subtitleColor = "text-slate-300",
}) {
  return (
    <section className={`w-full ${bg}`}>
      <div className="max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-8">
        <h2 className={`text-4xl md:text-5xl font-black ${textColor}`}>{title}</h2>
        <p className={`text-lg ${subtitleColor} max-w-2xl`}>{subtitle}</p>
        <a
          href={href}
          className="px-10 py-4 rounded-xl font-bold text-white text-xl bg-gradient-to-r from-[#2EE59D] to-[#24c98a] hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-[#2EE59D]/30"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}

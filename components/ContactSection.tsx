const LINKS = [
  {
    label: "Email",
    value: "hoseung89@naver.com",
    href: "mailto:hoseung89@naver.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "hover:text-purple-300 hover:border-purple-500/40",
  },
  {
    label: "GitHub",
    value: "github.com/ZAN909",
    href: "https://github.com/ZAN909",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    color: "hover:text-blue-300 hover:border-blue-500/40",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative max-w-3xl mx-auto px-6 py-28 pb-40">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-600/15 blur-[100px] pointer-events-none" />

      <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">
        Contact
      </h2>
      <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
        연락하기
      </h3>
      <p className="text-slate-400 mb-10">
        새로운 기회나 협업에 언제든지 연락 주세요.
      </p>

      <div className="flex flex-col gap-3">
        {LINKS.map(({ label, value, href, icon, color }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`glass rounded-2xl px-6 py-4 flex items-center gap-4 transition-all duration-300 hover:-translate-x-1 ${color}`}
          >
            <span className="text-slate-400">{icon}</span>
            <div>
              <div className="text-xs text-slate-500 mb-0.5">{label}</div>
              <div className="text-sm text-slate-200">{value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

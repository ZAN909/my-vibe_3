export default function AboutSection() {
  return (
    <section id="about" className="relative max-w-3xl mx-auto px-6 py-28">
      <div className="absolute -top-10 right-0 w-72 h-72 rounded-full bg-blue-600/10 blur-[80px] pointer-events-none" />

      <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">
        About
      </h2>
      <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
        저를 소개합니다
      </h3>

      <div className="glass rounded-2xl p-8 transition-all duration-300">
        <p className="text-slate-300 leading-relaxed mb-5 text-lg">
          안녕하세요. 사용자 경험을 중시하는 프론트엔드 개발자입니다.
          클린한 코드와 직관적인 UI를 만드는 것을 즐깁니다.
        </p>
        <p className="text-slate-400 leading-relaxed">
          관심 분야: 웹 성능 최적화, 접근성, 오픈소스 기여
        </p>

        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "3+", label: "Years Exp." },
            { value: "20+", label: "Projects" },
            { value: "10+", label: "Open Source" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SKILLS } from "@/data/skills";

const CATEGORY_LABEL: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  etc: "Etc",
};

const CATEGORY_COLOR: Record<string, string> = {
  frontend: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-300",
  backend: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-300",
  devops: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-300",
  etc: "from-slate-500/20 to-slate-500/5 border-slate-500/30 text-slate-300",
};

export default function SkillsSection() {
  const categories = [...new Set(SKILLS.map((s) => s.category))];

  return (
    <section id="skills" className="relative max-w-3xl mx-auto px-6 py-28">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-purple-600/10 blur-[80px] pointer-events-none" />

      <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">
        Skills
      </h2>
      <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
        기술 스택
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {categories.map((category) => (
          <div key={category} className="glass rounded-2xl p-6 transition-all duration-300">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              {CATEGORY_LABEL[category] ?? category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.filter((s) => s.category === category).map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1 text-sm rounded-lg bg-gradient-to-br border font-medium ${CATEGORY_COLOR[category] ?? CATEGORY_COLOR.etc}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { SKILLS } from "@/data/skills";

const CATEGORY_LABEL: Record<string, string> = {
  visual: "VISUAL",
  sound: "AUDIO",
  performance: "PERFORMANCE",
  etc: "ETC",
};

export default function SkillsSection() {
  const categories = [...new Set(SKILLS.map((s) => s.category))];

  return (
    <section id="skills" className="bg-[#0a0a0a] py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {/* Section label */}
        <div className="text-xs text-[#0033FF] uppercase tracking-[0.3em] mb-12">
          [ 02 / SKILLS ]
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#0033FF]">
          {categories.map((category) => (
            <div key={category} className="bg-[#0a0a0a] p-6">
              <div className="text-xs text-[#0033FF] uppercase tracking-widest mb-4">
                {CATEGORY_LABEL[category] ?? category}
              </div>
              <div className="flex flex-col gap-2">
                {SKILLS.filter((s) => s.category === category).map((skill, i) => (
                  <div key={skill.name} className="flex items-center gap-3 text-sm">
                    <span className="text-[#333] text-xs">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-white uppercase tracking-wide">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

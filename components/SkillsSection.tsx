import { SKILLS } from "@/data/skills";

const CATEGORY_LABEL = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  etc: "Etc",
};

export default function SkillsSection() {
  const categories = [...new Set(SKILLS.map((s) => s.category))];

  return (
    <section id="skills" className="max-w-2xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-col gap-6">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
              {CATEGORY_LABEL[category]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.filter((s) => s.category === category).map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 text-sm rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
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

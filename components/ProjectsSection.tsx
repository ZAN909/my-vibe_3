import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0d0d0d] py-24 border-t border-[#0033FF]">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {/* Section label */}
        <div className="text-xs text-[#0033FF] uppercase tracking-[0.3em] mb-12">
          [ 03 / WORK ]
        </div>

        <div className="flex flex-col gap-px bg-[#0033FF]">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="bg-[#0d0d0d] p-6 sm:p-8 group hover:bg-[#0033FF] transition-colors duration-75"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs text-[#333] group-hover:text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#7fa8b8] group-hover:text-white/70 leading-relaxed mb-4 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs border border-[#1a1a1a] group-hover:border-white/30 px-2 py-0.5 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 text-xs uppercase tracking-widest sm:flex-col sm:items-end">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333] group-hover:text-white hover:underline transition-colors"
                    >
                      GITHUB →
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333] group-hover:text-white hover:underline transition-colors"
                    >
                      DEMO →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

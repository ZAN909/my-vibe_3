import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 flex flex-col gap-3 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 text-sm">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-foreground transition-colors"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

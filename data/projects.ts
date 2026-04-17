export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  thumbnail?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "포트폴리오 웹사이트",
    description: "Next.js와 Tailwind CSS로 제작한 개인 포트폴리오 사이트.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    title: "프로젝트 2",
    description: "프로젝트 설명을 입력하세요.",
    techStack: ["React", "Node.js"],
    githubUrl: "https://github.com",
  },
  {
    title: "프로젝트 3",
    description: "프로젝트 설명을 입력하세요.",
    techStack: ["Python", "FastAPI"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
];

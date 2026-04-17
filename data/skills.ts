export type Skill = {
  name: string;
  category: "frontend" | "backend" | "devops" | "etc";
};

export const SKILLS: Skill[] = [
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "Vercel", category: "devops" },
];

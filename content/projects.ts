export const projectTags = ["PM", "Technical", "Leadership", "Research"] as const;

export type ProjectTag = (typeof projectTags)[number];

export type Project = {
  slug: string;
  title: string;
  org: string;
  dateRange: string;
  tags: ProjectTag[];
  score: number;
  oneLiner: string;
  problem: string;
  approach: string;
  whatBuilt: string;
  impact: string;
  reflection: string;
  links?: { label: string; url: string }[];
  featured: boolean;
  sortDate: string;
  placeholderFields?: Array<"oneLiner" | "problem" | "approach" | "whatBuilt" | "impact" | "reflection" | "links">;
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    org: "Independent build",
    dateRange: "Summer 2026",
    tags: ["Technical"],
    score: 9.0,
    oneLiner:
      "A personal website I am shaping to feel more thoughtful and useful than a static resume page.",
    problem:
      "I wanted one place that could hold my experience, projects, and writing in a way that feels more personal than a PDF but still easy to scan.",
    approach:
      "I treated the site like a product and design exercise: simplify the structure, make each section easier to browse, and create room for deeper writeups when a project deserves more context.",
    whatBuilt:
      "A Next.js portfolio with a custom landing page, experience cards, a project showcase, theme toggle support, and dedicated detail pages for longer project writeups.",
    impact:
      "The site now feels more like an actual portfolio instead of a list of sections, and it creates a cleaner place to keep building project stories over time.",
    reflection:
      "Next I want to replace the remaining placeholder content with finished project writeups and keep polishing the project section as I build more things outside class and internships.",
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/vidhu-hegde/Personal_website",
      },
    ],
    featured: true,
    sortDate: "2026-07-01",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter((candidate) => candidate.slug !== project.slug)
    .filter((candidate) => candidate.tags.some((tag) => project.tags.includes(tag)))
    .slice(0, limit);
}

export function getProjectStats() {
  const totalProjects = projects.length;
  const categories = new Set(projects.flatMap((project) => project.tags)).size;
  const averageScore = Number(
    (projects.reduce((sum, project) => sum + project.score, 0) / Math.max(totalProjects, 1)).toFixed(1),
  );

  return {
    totalProjects,
    categories,
    averageScore,
  };
}

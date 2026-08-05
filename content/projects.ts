export const projectTags = ["PM", "Technical", "Leadership", "Research"] as const;

export type ProjectTag = (typeof projectTags)[number];

export type Project = {
  slug: string;
  title: string;
  org: string;
  dateRange: string;
  tags: ProjectTag[];
  icon?: "food";
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
    slug: "blockbench",
    title: "Blockbench - Context Weaver",
    org: "Independent build",
    dateRange: "Summer 2026",
    tags: ["Technical"],
    score: 9.0,
    oneLiner:
      "A Notion-style PM sandbox for exploring how content, context, and workflow can feel more connected inside a workspace.",
    problem:
      "I wanted to build something around the friction of managing work, content, and structure inside a workspace.",
    approach:
      "I approached it like a product build: start with a clear user pain point, shape the workflow, and iterate on the experience from there.",
    whatBuilt:
      "An early product build backed by a GitHub repo, with the broader thinking and story documented separately in a Substack post.",
    impact:
      "It gave me a concrete way to explore a workspace problem through both building and writing.",
    reflection:
      "I still want to keep refining both the product and the writeup as I learn more from the workflow and user problem.",
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/vidhu-hegde/blockbench",
      },
      {
        label: "Substack Post",
        url: "https://careoappositus717660.substack.com/p/your-workspace-doesnt-have-a-content?r=2y508l",
      },
    ],
    featured: true,
    sortDate: "2026-07-01",
  },
  {
    slug: "fork-fly",
    title: "Fork-Fly",
    org: "Independent build",
    dateRange: "Summer 2026",
    tags: ["Technical"],
    icon: "food",
    score: 8.8,
    oneLiner:
      "A product that brings together my love for food and my curiosity to explore new tech spaces like memories.ai here.",
    problem:
      "I wanted to explore how people discover and organize food choices without the experience feeling scattered or forgettable.",
    approach:
      "I treated it as a lightweight product exploration, using the build to test how a more opinionated food workflow could be structured.",
    whatBuilt:
      "An early GitHub-based product concept focused on the food discovery experience.",
    impact:
      "It gave me a concrete way to prototype a category-specific product idea and shape the user flow through building.",
    reflection:
      "I want to keep refining the product direction and the experience design as the concept becomes sharper.",
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/vidhu-hegde/Fork-Fly",
      },
    ],
    featured: true,
    sortDate: "2026-08-01",
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

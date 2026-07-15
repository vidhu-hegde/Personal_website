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
    slug: "advanced-vehicle-team",
    title: "Advanced Vehicle Team",
    org: "Penn State Advanced Vehicle Team",
    dateRange: "January 2026-Present",
    tags: ["PM", "Technical", "Leadership"],
    score: 9.1,
    oneLiner: "My favorite kind of chaos: ambitious hardware, too many dependencies, and a deadline that does not move.",
    problem:
      "The team was juggling parallel engineering workstreams, safety requirements, and integration risks without a consistent shared view of what had to happen when.",
    approach:
      "I treated the project like an operating system problem: clarify ownership, map dependencies, set a planning cadence, and make blockers visible before they become last-minute surprises.",
    whatBuilt:
      "A semester roadmap, sprint planning rhythm, weekly standups, progress tracking structure, and recurring integration meetings that connected subteams instead of letting them drift in parallel.",
    impact:
      "Cross-team visibility improved, work could be escalated earlier, and the team made steadier progress toward completing deliverables before the final competition deadline.",
    reflection:
      "I would tighten the feedback loop between roadmap planning and subsystem testing earlier in the semester so integration risk shows up even sooner.",
    featured: true,
    sortDate: "2026-01-01",
    placeholderFields: ["links"],
  },
  {
    slug: "ai-literacy-research",
    title: "AI Literacy Research",
    org: "Penn State AI Literacy Research Team",
    dateRange: "May 2025-November 2025",
    tags: ["PM", "Research"],
    score: 8.9,
    oneLiner: "A surprisingly satisfying mix of prompt data, rubrics, and making a 12-person team feel less tangled.",
    problem:
      "The project combined qualitative and quantitative data across a large team, which made it easy for analysis quality and coordination quality to drift apart.",
    approach:
      "I focused on research operations first: shared task tracking, clearer criteria for evaluating prompts, and a repeatable way to compare pre- and post-instruction performance.",
    whatBuilt:
      "A structured evaluation framework across five prompt-effectiveness criteria, aligned team tracking, and an analysis workflow that supported cleaner comparison of student prompt data.",
    impact:
      "The team produced stronger evidence of measurable improvement and could explain the learning outcomes with more consistency and confidence.",
    reflection:
      "I would add a sharper synthesis layer for communicating findings to non-research audiences so the takeaways travel more easily outside the project team.",
    featured: true,
    sortDate: "2025-11-01",
    placeholderFields: ["links"],
  },
  {
    slug: "electric-aircraft-infrastructure",
    title: "Electric Aircraft Infrastructure",
    org: "Academic Project",
    dateRange: "August 2023-December 2023",
    tags: ["PM", "Technical", "Research"],
    score: 8.7,
    oneLiner: "Part systems design, part product thinking, part asking what airport operations would look like if the rules changed.",
    problem:
      "Electric aircraft battery operations introduce a new workflow with unclear infrastructure needs, emerging stakeholder responsibilities, and uncertain turnaround constraints.",
    approach:
      "I framed the work around stakeholder research and operational modeling so the concept would be grounded in how airports, maintenance, and turnaround decisions might actually interact.",
    whatBuilt:
      "A rapid battery-swapping concept, a stakeholder-informed operating model, and a real-time IoT dashboard prototype to visualize battery management and aircraft turnaround status.",
    impact:
      "The project made the proposed battery workflow easier to reason about and gave the team a more concrete model for maintenance, battery tracking, and turnaround planning.",
    reflection:
      "[Placeholder] Add what I would change after testing the concept with more detailed airport or maintenance assumptions.",
    featured: true,
    sortDate: "2023-12-01",
    placeholderFields: ["reflection", "links"],
  },
  {
    slug: "biogas-iot-monitoring",
    title: "Biogas IoT Monitoring",
    org: "GPS Renewables",
    dateRange: "Summer 2023",
    tags: ["Technical", "Research"],
    score: 8.5,
    oneLiner: "The win here was making operational data feel usable instead of merely available.",
    problem:
      "Operational data was spread across multiple biogas plants, which limited real-time visibility and slowed responses when something needed attention.",
    approach:
      "I focused on turning scattered telemetry into a more usable monitoring system with dashboards, alerts, and reporting that matched operational needs.",
    whatBuilt:
      "Nine protected ThingsBoard dashboards, threshold-based alerts, and automated end-of-day reports covering visibility across six biogas plant operations.",
    impact:
      "Teams could respond to issues faster and had a clearer, more consistent operational picture across sites.",
    reflection:
      "[Placeholder] Add a more personal reflection on what I learned about designing technical tools for operational teams.",
    featured: false,
    sortDate: "2023-06-01",
    placeholderFields: ["reflection", "links"],
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

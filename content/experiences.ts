import type { ProjectTag } from "@/content/projects";

export type Experience = {
  slug: string;
  role: string;
  org: string;
  dateRange: string;
  summary: string;
  categories: ProjectTag[];
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    slug: "advanced-vehicle-team-pm",
    role: "Project Manager",
    org: "Penn State Advanced Vehicle Team",
    dateRange: "Jan 2026 - present",
    summary: "Running product delivery for our competition vehicle's HMI system and safety docs.",
    categories: ["PM"],
    bullets: [
      "Own end-to-end product delivery for the competition vehicle HMI system and safety documentation, managing team hours, weekly standups, and the semester roadmap.",
      "Set up agile workflows, sprint planning, and Monday.com tracking, finishing deliverables two weeks ahead of the final competition deadline.",
    ],
  },
  {
    slug: "ist-ai-literacy",
    role: "Project Manager and Data Analyst",
    org: "Penn State College of IST",
    dateRange: "May 2025 - Nov 2025",
    summary: "Studied how students' AI prompting skills improved over a semester.",
    categories: ["PM", "Research", "Technical"],
    bullets: [
      "Analyzed pre- and post-instruction prompt data for the 'Intro to AI and Art' course, finding clear gains in prompt effectiveness across five criteria.",
      "Built a task tracker for a 12-member cross-functional team, improving completion rates and keeping deliverables on schedule.",
    ],
  },
  {
    slug: "engineering-research-assistant",
    role: "Undergraduate Research Assistant",
    org: "Penn State College of Engineering",
    dateRange: "Apr 2024 - Aug 2024",
    summary: "Built a smarter, cheaper way to detect depression in text.",
    categories: ["Research", "Technical"],
    bullets: [
      "Developed a dual-stage sentiment analysis approach combining open and closed vocabulary strategies for depression detection.",
      "Tested EMPATH as a cheaper alternative to LIWC, potentially saving the research team on software costs.",
    ],
  },
  {
    slug: "kalmane-tech-iot",
    role: "IoT Intern",
    org: "Kalmane Tech",
    dateRange: "Summer 2023",
    summary: "Wired up 9 IoT dashboards for biogas plants in Bangalore.",
    categories: ["Technical", "Research"],
    bullets: [
      "Built 9 password-protected ThingsBoard dashboards, improving monitoring across 6 biogas plants.",
      "Added a real-time alarm system with email alerts when readings crossed set thresholds, cutting response time.",
      "Automated end-of-day performance reports to support faster, data-driven decisions.",
    ],
  },
  {
    slug: "iclc-vice-president",
    role: "Vice president",
    org: "Indian Culture and Language Club",
    dateRange: "Apr 2024 - May 2025",
    summary: "Led a 600-person cultural event and grew the club's campus partnerships.",
    categories: ["Leadership", "PM"],
    bullets: [
      "Main point of contact for 23 club members, improving member satisfaction.",
      "Planned a cultural event with 3 prominent Indian artists, drawing 600+ students.",
      "Built partnerships with 5 campus clubs, leading to 3 joint events over the year.",
    ],
  },
  {
    slug: "airport-cooperative-research-program",
    role: "Product and Research Lead",
    org: "Airport Cooperative Research Program",
    dateRange: "Aug 2023 - Dec 2023",
    summary: "Designed how airports could swap electric aircraft batteries fast.",
    categories: ["PM", "Research"],
    bullets: [
      "Led stakeholder research and prototype design for rapid battery swapping in airport infrastructure.",
      "Worked with a 5-person team to build a real-time IoT dashboard for proactive maintenance.",
    ],
  },
];

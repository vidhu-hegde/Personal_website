"use client";

import { Search } from "lucide-react";
import { useDeferredValue, useState } from "react";

import type { Project, ProjectTag } from "@/content/projects";
import { projectTags } from "@/content/projects";

import { ProjectCard } from "@/components/project-card";
import { TagPill } from "@/components/tag-pill";

type SortValue = "score" | "recency";

type ProjectBrowserProps = {
  projects: Project[];
  mode?: "home" | "ranked";
  maxItems?: number;
};

function matchesProject(project: Project, query: string) {
  if (!query) {
    return true;
  }

  const haystack = [
    project.title,
    project.org,
    project.oneLiner,
    project.problem,
    project.approach,
    project.whatBuilt,
    project.impact,
    project.reflection,
    ...project.tags,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

export function ProjectBrowser({ projects, mode = "ranked", maxItems }: ProjectBrowserProps) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<ProjectTag | "All">("All");
  const [sortBy, setSortBy] = useState<SortValue>("score");

  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filteredProjects = projects
    .filter((project) => (selectedTag === "All" ? true : project.tags.includes(selectedTag)))
    .filter((project) => matchesProject(project, deferredQuery))
    .sort((left, right) => {
      if (sortBy === "recency") {
        return right.sortDate.localeCompare(left.sortDate);
      }

      return right.score - left.score;
    });

  const visibleProjects = typeof maxItems === "number" ? filteredProjects.slice(0, maxItems) : filteredProjects;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-white p-3 shadow-card">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
            <Search className="h-4 w-4 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, orgs, tools, or themes"
              className="min-w-0 flex-1 border-none bg-transparent text-sm text-foreground placeholder:text-muted/80 focus:outline-none"
              aria-label="Search projects"
            />
          </label>

          {mode === "ranked" ? (
            <label className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted">
              <span>Sort</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as SortValue)}
                className="bg-transparent text-foreground focus:outline-none"
                aria-label="Sort projects"
              >
                <option value="score">Score</option>
                <option value="recency">Recency</option>
              </select>
            </label>
          ) : null}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <TagPill label="All" active={selectedTag === "All"} asButton onClick={() => setSelectedTag("All")} />
          {projectTags.map((tag) => (
            <TagPill
              key={tag}
              label={tag}
              active={selectedTag === tag}
              asButton
              onClick={() => setSelectedTag(tag)}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted">
          {filteredProjects.length} result{filteredProjects.length === 1 ? "" : "s"}
        </p>
      </div>

      {visibleProjects.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant={mode === "ranked" ? "ranked" : "project"} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-white p-8 text-sm text-muted">
          No projects match that combination yet.
        </div>
      )}
    </div>
  );
}

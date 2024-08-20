"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import {
  Laptop,
  BarChart2,
  Gamepad,
  Bot,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { projectsData, Project } from "@/data/project-data";

type CategoryIcon = React.ElementType;

const getCategoryIcon = (category: string): CategoryIcon => {
  switch (category) {
    case "Web Dev":
      return Laptop;
    case "Data Analytics":
      return BarChart2;
    case "Game Dev":
      return Gamepad;
    case "AI":
      return Bot;
    case "Algo Trading":
      return Briefcase;
    case "CS50":
      return GraduationCap;
    default:
      return Laptop;
  }
};

interface ProjectCardProps {
  project: Project;
  isHighlight?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isHighlight = false,
}) => {
  const Icon = getCategoryIcon(project.category[0]);

  return (
    <Card className={`flex flex-col ${isHighlight ? "h-full" : "h-36"}`}>
      <CardHeader className="flex-grow">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      {isHighlight && (
        <CardContent>
          <p className="mb-2 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded bg-secondary px-2 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      )}
      <CardFooter className="justify-end">
        <Button variant="outline" size="sm" asChild>
          <a
            href={project.project1.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const highlightProjects = projectsData
    .filter((project) => project.rating === "must have")
    .slice(0, 4);
  const remainingProjects = projectsData.filter(
    (project) => !highlightProjects.includes(project),
  );

  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <section className="py-20" id="projects">
          <h1 className="mb-4 text-4xl font-bold">Project Highlights</h1>
          <p className="mb-12 text-xl text-muted-foreground">
            A showcase of my best work across various domains.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {highlightProjects.map((project, index) => (
              <ProjectCard key={index} project={project} isHighlight={true} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button onClick={() => setShowAll(!showAll)}>
              {showAll ? "See Less Projects" : "See More Projects"}
            </Button>
          </div>
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {remainingProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
};

export default Projects;

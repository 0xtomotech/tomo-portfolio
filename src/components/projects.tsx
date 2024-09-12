"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projectsData, Project } from "@/data/projects-data";
import { MoveUpRight } from "lucide-react";

// Animation timing variables
const CONTAINER_ANIMATION_DURATION = 2;
const CARD_ANIMATION_DURATION = 0.1;
const CARD_STAGGER_DELAY = 0.1;
const CONTAINER_EASE = "easeInOut";

const ProjectCard = React.forwardRef<
  HTMLDivElement,
  { project: Project; index: number; isCollapsing: boolean }
>(({ project, index, isCollapsing }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: CARD_ANIMATION_DURATION,
        delay: isCollapsing ? index * CARD_STAGGER_DELAY : 0,
      }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg dark:shadow-none dark:hover:shadow-[0_0_15px_rgba(255,149,41,0.05)]">
        <CardHeader className="flex-row items-start justify-between space-x-2 space-y-0 pb-2">
          <div>
            <CardTitle className="text-lg font-semibold">
              {project.title}
            </CardTitle>
            <div className="mt-1 flex flex-col items-start justify-center gap-1">
              {project.category.map((cat, index) => (
                <Badge
                  key={index}
                  variant="default"
                  className="text-xs font-medium"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
          <div className="relative h-24 w-36 overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-10 bg-[#FF9529]/15 mix-blend-multiply transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
            <Image
              src={project.imageUrl}
              alt={project.title}
              height={128}
              width={160}
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col justify-between">
          <div className="flex flex-col">
            <p className="mb-4 text-sm text-muted-foreground">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border bg-background text-xs font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:shadow-md"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <div className="mb-4 h-px bg-border"></div>
            <div className="flex flex-wrap justify-end gap-2">
              {project.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="smm"
                  className="border-primary bg-background text-xs text-primary hover:bg-primary"
                  disabled={project.title === "Basket Brains"}
                  onClick={() => {
                    if (project.title !== "Basket Brains") {
                      window.open(link.url, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <span className="mr-2">{link.name}</span>
                  <MoveUpRight size={12} />
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState("auto");

  const mustHaveProjects = projectsData.filter(
    (project) => project.rating === "must have",
  );
  const niceToHaveProjects = projectsData.filter(
    (project) => project.rating === "nice to have",
  );

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(`${containerRef.current.scrollHeight}px`);
    }
  }, [showAll]);

  const handleToggle = () => {
    setIsAnimating(true);
    setIsCollapsing(!showAll);
    setShowAll((prev) => !prev);
  };

  const containerVariants = {
    collapsed: { height: "auto" },
    expanded: { height: containerHeight },
  };

  const cardListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: CARD_STAGGER_DELAY,
        when: "beforeChildren",
      },
    },
  };

  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <section className="py-20" id="projects">
          <h1 className="mb-4 text-4xl font-bold">Project Highlights</h1>
          <p className="mb-12 text-xl text-muted-foreground">
            A curated collection of projects I&apos;m passionate about —
            spanning multiple domains.
          </p>
          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="collapsed"
            animate={showAll ? "expanded" : "collapsed"}
            transition={{
              duration: CONTAINER_ANIMATION_DURATION,
              ease: CONTAINER_EASE,
            }}
            onAnimationComplete={() => {
              setIsAnimating(false);
              setIsCollapsing(false);
            }}
          >
            <motion.div
              variants={cardListVariants}
              initial="visible"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {mustHaveProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={
                      isCollapsing ? mustHaveProjects.length - index - 1 : index
                    }
                    isCollapsing={isCollapsing}
                  />
                ))}
                {showAll &&
                  niceToHaveProjects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={mustHaveProjects.length + index}
                      isCollapsing={isCollapsing}
                    />
                  ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
          <div className="mt-12 text-center">
            <Button onClick={handleToggle} disabled={isAnimating}>
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;

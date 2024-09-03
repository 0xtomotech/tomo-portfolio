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
      <Card className="group flex h-full flex-col overflow-hidden">
        <CardHeader className="flex-row items-start justify-between space-x-1 space-y-0 pb-2">
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
          <div className="relative h-32 w-36 overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-10 bg-[#FF9529]/40 mix-blend-multiply transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
            <Image
              src={project.imageUrl}
              alt={project.title}
              height={128}
              width={160}
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col justify-between">
          <div className="flex flex-col">
            <p className="pb-1 text-sm text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {project.techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-background text-xs font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:shadow-md"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-end gap-1">
            {project.links.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="smm"
                asChild
                className="border-primary bg-background text-xs text-primary hover:bg-primary"
              >
                <a
                  href={link.url}
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">{link.name}</span>
                  <MoveUpRight size={12} />
                </a>
              </Button>
            ))}
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
            A showcase of my best work across various domains.
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

// // GPT WORKING
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { projectsData, Project } from "@/data/projects-data";
// import { MoveUpRight } from "lucide-react";

// // Highlight: Animation timing variables
// const CONTAINER_ANIMATION_DURATION = 2;
// const CARD_ANIMATION_DURATION = 0.1;
// const CARD_STAGGER_DELAY = 0.1;
// const CONTAINER_EASE = "easeInOut";

// const ProjectCard = React.forwardRef<
//   HTMLDivElement,
//   { project: Project; index: number }
// >(({ project, index }, ref) => {
//   return (
//     <motion.div
//       ref={ref}
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       transition={{
//         duration: CARD_ANIMATION_DURATION,
//         delay: index * CARD_STAGGER_DELAY,
//       }}
//       className="h-full"
//     >
//       <Card className="group flex h-full flex-col overflow-hidden">
//         <CardHeader className="flex-row items-start justify-between space-x-1 space-y-0 pb-4">
//           <div>
//             <CardTitle className="text-lg font-semibold">
//               {project.title}
//             </CardTitle>
//             <div className="mt-1 flex flex-wrap gap-1">
//               {project.category.map((cat, index) => (
//                 <Badge
//                   key={index}
//                   variant="default"
//                   className="text-xs font-medium"
//                 >
//                   {cat}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//           <div className="relative h-32 w-40 overflow-hidden rounded-lg">
//             <div className="absolute inset-0 z-10 bg-[#FF9529]/40 mix-blend-multiply transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
//             <Image
//               src={project.imageUrl}
//               alt={project.title}
//               layout="fill"
//               objectFit="cover"
//               className="transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </CardHeader>
//         <CardContent className="flex flex-grow flex-col justify-between">
//           <p className="mb-2 text-sm text-muted-foreground">
//             {project.description}
//           </p>
//           <div>
//             <div className="mt-2 flex flex-wrap gap-1">
//               {project.techStack.map((tech, index) => (
//                 <Badge
//                   key={index}
//                   variant="outline"
//                   className="bg-background text-xs font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:shadow-md"
//                 >
//                   {tech}
//                 </Badge>
//               ))}
//             </div>
//             <div className="mt-4 flex flex-wrap justify-end gap-2">
//               {project.links.map((link, index) => (
//                 <Button
//                   key={index}
//                   variant="outline"
//                   size="sm"
//                   asChild
//                   className="text-xs"
//                 >
//                   <a
//                     href={link.url}
//                     className="flex items-center"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span className="mr-2">{link.name}</span>
//                     <MoveUpRight size={12} />
//                   </a>
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// });

// ProjectCard.displayName = "ProjectCard";

// const Projects: React.FC = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [containerHeight, setContainerHeight] = useState("auto");

//   const mustHaveProjects = projectsData.filter(
//     (project) => project.rating === "must have",
//   );
//   const niceToHaveProjects = projectsData.filter(
//     (project) => project.rating === "nice to have",
//   );

//   useEffect(() => {
//     if (containerRef.current) {
//       setContainerHeight(`${containerRef.current.scrollHeight}px`);
//     }
//   }, [showAll]);

//   const handleToggle = () => {
//     setIsAnimating(true);
//     setShowAll((prev) => !prev);
//   };

//   const containerVariants = {
//     collapsed: { height: "auto" },
//     expanded: { height: containerHeight },
//   };

//   const expandingCardListVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: CARD_STAGGER_DELAY,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const collapsingCardListVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: CARD_STAGGER_DELAY,
//         staggerDirection: -1,
//         when: "afterChildren",
//       },
//     },
//   };

//   return (
//     <div className="w-full bg-background">
//       <div className="mx-auto max-w-7xl px-5 lg:px-20">
//         <section className="py-20" id="projects">
//           <h1 className="mb-4 text-4xl font-bold">Project Highlights</h1>
//           <p className="mb-12 text-xl text-muted-foreground">
//             A showcase of my best work across various domains.
//           </p>
//           <motion.div
//             ref={containerRef}
//             variants={containerVariants}
//             initial="collapsed"
//             animate={showAll ? "expanded" : "collapsed"}
//             transition={{
//               duration: CONTAINER_ANIMATION_DURATION,
//               ease: CONTAINER_EASE,
//             }}
//             onAnimationComplete={() => setIsAnimating(false)}
//           >
//             <motion.div
//               variants={
//                 showAll ? expandingCardListVariants : collapsingCardListVariants
//               }
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//             >
//               <AnimatePresence mode="popLayout">
//                 {mustHaveProjects.map((project, index) => (
//                   <ProjectCard
//                     key={project.title}
//                     project={project}
//                     index={
//                       showAll ? index : mustHaveProjects.length - index - 1
//                     }
//                   />
//                 ))}
//                 {showAll &&
//                   niceToHaveProjects.map((project, index) => (
//                     <ProjectCard
//                       key={project.title}
//                       project={project}
//                       index={mustHaveProjects.length + index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </motion.div>
//           </motion.div>
//           <div className="mt-12 text-center">
//             <Button onClick={handleToggle} disabled={isAnimating}>
//               {showAll ? "Show Less" : "Show More"}
//             </Button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// // WORKING VERSION
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { projectsData, Project } from "@/data/projects-data";
// import { MoveUpRight } from "lucide-react";

// // Highlight: Animation timing variables
// const CONTAINER_ANIMATION_DURATION = 2;
// const CARD_ANIMATION_DURATION = 0.1;
// const CARD_STAGGER_DELAY = 0.1;
// const CONTAINER_EASE = "easeInOut";

// const ProjectCard = React.forwardRef<
//   HTMLDivElement,
//   { project: Project; index: number }
// >(({ project, index }, ref) => {
//   return (
//     <motion.div
//       ref={ref}
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       transition={{
//         duration: CARD_ANIMATION_DURATION,
//         delay: index * CARD_STAGGER_DELAY,
//       }}
//       className="h-full"
//     >
//       <Card className="group flex h-full flex-col overflow-hidden">
//         <CardHeader className="flex-row items-start justify-between space-x-1 space-y-0 pb-4">
//           <div>
//             <CardTitle className="text-lg font-semibold">
//               {project.title}
//             </CardTitle>
//             <div className="mt-1 flex flex-wrap gap-1">
//               {project.category.map((cat, index) => (
//                 <Badge
//                   key={index}
//                   variant="default"
//                   className="text-xs font-medium"
//                 >
//                   {cat}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//           <div className="relative h-32 w-40 overflow-hidden rounded-lg">
//             <div className="absolute inset-0 z-10 bg-[#FF9529]/40 mix-blend-multiply transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
//             <Image
//               src={project.imageUrl}
//               alt={project.title}
//               layout="fill"
//               objectFit="cover"
//               className="transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </CardHeader>
//         <CardContent className="flex flex-grow flex-col justify-between">
//           <p className="mb-2 text-sm text-muted-foreground">
//             {project.description}
//           </p>
//           <div>
//             <div className="mt-2 flex flex-wrap gap-1">
//               {project.techStack.map((tech, index) => (
//                 <Badge
//                   key={index}
//                   variant="outline"
//                   className="bg-background text-xs font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:shadow-md"
//                 >
//                   {tech}
//                 </Badge>
//               ))}
//             </div>
//             <div className="mt-4 flex flex-wrap justify-end gap-2">
//               {project.links.map((link, index) => (
//                 <Button
//                   key={index}
//                   variant="outline"
//                   size="sm"
//                   asChild
//                   className="text-xs"
//                 >
//                   <a
//                     href={link.url}
//                     className="flex items-center"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span className="mr-2">{link.name}</span>
//                     <MoveUpRight size={12} />
//                   </a>
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// });

// ProjectCard.displayName = "ProjectCard";

// const Projects: React.FC = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [containerHeight, setContainerHeight] = useState("auto");

//   const mustHaveProjects = projectsData.filter(
//     (project) => project.rating === "must have",
//   );
//   const niceToHaveProjects = projectsData.filter(
//     (project) => project.rating === "nice to have",
//   );

//   useEffect(() => {
//     if (containerRef.current) {
//       setContainerHeight(`${containerRef.current.scrollHeight}px`);
//     }
//   }, [showAll]);

//   const handleToggle = () => {
//     setIsAnimating(true);
//     setShowAll((prev) => !prev);
//   };

//   const containerVariants = {
//     collapsed: { height: "auto" },
//     expanded: { height: containerHeight },
//   };

//   const expandingCardListVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: CARD_STAGGER_DELAY,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const collapsingCardListVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: CARD_STAGGER_DELAY,
//         staggerDirection: -1,
//         when: "afterChildren",
//       },
//     },
//   };

//   return (
//     <div className="w-full bg-background">
//       <div className="mx-auto max-w-7xl px-5 lg:px-20">
//         <section className="py-20" id="projects">
//           <h1 className="mb-4 text-4xl font-bold">Project Highlights</h1>
//           <p className="mb-12 text-xl text-muted-foreground">
//             A showcase of my best work across various domains.
//           </p>
//           <motion.div
//             ref={containerRef}
//             variants={containerVariants}
//             initial="collapsed"
//             animate={showAll ? "expanded" : "collapsed"}
//             transition={{
//               duration: CONTAINER_ANIMATION_DURATION,
//               ease: CONTAINER_EASE,
//             }}
//             onAnimationComplete={() => setIsAnimating(false)}
//           >
//             <motion.div
//               variants={
//                 showAll ? expandingCardListVariants : collapsingCardListVariants
//               }
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//             >
//               <AnimatePresence mode="popLayout">
//                 {mustHaveProjects.map((project, index) => (
//                   <ProjectCard
//                     key={project.title}
//                     project={project}
//                     index={
//                       showAll ? index : mustHaveProjects.length - index - 1
//                     }
//                   />
//                 ))}
//                 {showAll &&
//                   niceToHaveProjects.map((project, index) => (
//                     <ProjectCard
//                       key={project.title}
//                       project={project}
//                       index={mustHaveProjects.length + index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </motion.div>
//           </motion.div>
//           <div className="mt-12 text-center">
//             <Button onClick={handleToggle} disabled={isAnimating}>
//               {showAll ? "Show Less" : "Show More"}
//             </Button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// OLD WORKING VERSION
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { projectsData, Project } from "@/data/projects-data";
// import { MoveUpRight } from "lucide-react";

// // Highlight: Animation timing variables
// const CONTAINER_ANIMATION_DURATION = 3;
// const CARD_ANIMATION_DURATION = 0.2;
// const CARD_STAGGER_DELAY = 0.1;
// const CONTAINER_EASE = "easeInOut";

// const ProjectCard = React.forwardRef<
//   HTMLDivElement,
//   { project: Project; index: number }
// >(({ project, index }, ref) => {
//   return (
//     <motion.div
//       ref={ref}
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       transition={{
//         duration: CARD_ANIMATION_DURATION,
//         delay: index * CARD_STAGGER_DELAY,
//       }}
//       className="h-full"
//     >
//       <Card className="group flex h-full flex-col overflow-hidden">
//         <CardHeader className="flex-row items-start justify-between space-x-1 space-y-0 pb-4">
//           <div>
//             <CardTitle className="text-lg font-semibold">
//               {project.title}
//             </CardTitle>
//             <div className="mt-1 flex flex-wrap gap-1">
//               {project.category.map((cat, index) => (
//                 <Badge
//                   key={index}
//                   variant="default"
//                   className="text-xs font-medium"
//                 >
//                   {cat}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//           <div className="relative h-32 w-40 overflow-hidden rounded-lg">
//             <div className="absolute inset-0 z-10 bg-[#FF9529]/40 mix-blend-multiply transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
//             <Image
//               src={project.imageUrl}
//               alt={project.title}
//               layout="fill"
//               objectFit="cover"
//               className="transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </CardHeader>
//         <CardContent className="flex flex-grow flex-col justify-between">
//           <p className="mb-2 text-sm text-muted-foreground">
//             {project.description}
//           </p>
//           <div>
//             <div className="mt-2 flex flex-wrap gap-1">
//               {project.techStack.map((tech, index) => (
//                 <Badge
//                   key={index}
//                   variant="outline"
//                   className="bg-background text-xs font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:shadow-md"
//                 >
//                   {tech}
//                 </Badge>
//               ))}
//             </div>
//             <div className="mt-4 flex flex-wrap justify-end gap-2">
//               {project.links.map((link, index) => (
//                 <Button
//                   key={index}
//                   variant="outline"
//                   size="sm"
//                   asChild
//                   className="text-xs"
//                 >
//                   <a
//                     href={link.url}
//                     className="flex items-center"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span className="mr-2">{link.name}</span>
//                     <MoveUpRight size={12} />
//                   </a>
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// });

// ProjectCard.displayName = "ProjectCard";

// const Projects: React.FC = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [containerHeight, setContainerHeight] = useState("auto");

//   const mustHaveProjects = projectsData.filter(
//     (project) => project.rating === "must have",
//   );
//   const niceToHaveProjects = projectsData.filter(
//     (project) => project.rating === "nice to have",
//   );

//   useEffect(() => {
//     if (containerRef.current) {
//       setContainerHeight(`${containerRef.current.scrollHeight}px`);
//     }
//   }, [showAll]);

//   const handleToggle = () => {
//     setIsAnimating(true);
//     setShowAll((prev) => !prev);
//   };

//   const containerVariants = {
//     collapsed: { height: "auto" },
//     expanded: { height: containerHeight },
//   };

//   const expandingCardListVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: CARD_STAGGER_DELAY,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const collapsingCardListVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: CARD_STAGGER_DELAY,
//         staggerDirection: -1,
//         when: "afterChildren",
//       },
//     },
//   };

//   return (
//     <div className="w-full bg-background">
//       <div className="mx-auto max-w-7xl px-5 lg:px-20">
//         <section className="py-20" id="projects">
//           <h1 className="mb-4 text-4xl font-bold">Project Highlights</h1>
//           <p className="mb-12 text-xl text-muted-foreground">
//             A showcase of my best work across various domains.
//           </p>
//           <motion.div
//             ref={containerRef}
//             variants={containerVariants}
//             initial="collapsed"
//             animate={showAll ? "expanded" : "collapsed"}
//             transition={{
//               duration: CONTAINER_ANIMATION_DURATION,
//               ease: CONTAINER_EASE,
//             }}
//             onAnimationComplete={() => setIsAnimating(false)}
//           >
//             <motion.div
//               variants={
//                 showAll ? expandingCardListVariants : collapsingCardListVariants
//               }
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//             >
//               <AnimatePresence mode="popLayout">
//                 {mustHaveProjects.map((project, index) => (
//                   <ProjectCard
//                     key={project.title}
//                     project={project}
//                     index={index}
//                   />
//                 ))}
//                 {showAll &&
//                   niceToHaveProjects.map((project, index) => (
//                     <ProjectCard
//                       key={project.title}
//                       project={project}
//                       index={mustHaveProjects.length + index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </motion.div>
//           </motion.div>
//           <div className="mt-12 text-center">
//             <Button onClick={handleToggle} disabled={isAnimating}>
//               {showAll ? "Show Less" : "Show More"}
//             </Button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// OLD
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { projectsData, Project } from "@/data/projects-data";
// import { MoveUpRight } from "lucide-react";

// const ProjectCard = React.forwardRef<
//   HTMLDivElement,
//   { project: Project; index: number }
// >(({ project, index }, ref) => {
//   return (
//     <motion.div
//       ref={ref}
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       transition={{ duration: 0.3, delay: index * 0.1 }}
//       className="h-full"
//     >
//       <Card className="group flex h-full flex-col overflow-hidden">
//         <CardHeader className="flex-row items-start justify-between space-x-1 space-y-0 pb-4">
//           <div>
//             <CardTitle className="text-lg font-semibold">
//               {project.title}
//             </CardTitle>
//             <div className="mt-1 flex flex-wrap gap-1">
//               {project.category.map((cat, index) => (
//                 <Badge
//                   key={index}
//                   variant="default"
//                   className="text-xs font-medium"
//                 >
//                   {cat}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//           <div className="relative h-32 w-40 overflow-hidden rounded-lg">
//             <div className="absolute inset-0 z-10 bg-[#FF9529]/40 mix-blend-multiply transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
//             <Image
//               src={project.imageUrl}
//               alt={project.title}
//               layout="fill"
//               objectFit="cover"
//               className="transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
//           </div>
//         </CardHeader>
//         <CardContent className="flex flex-grow flex-col justify-between">
//           <p className="mb-2 text-sm text-muted-foreground">
//             {project.description}
//           </p>
//           <div>
//             <div className="mt-2 flex flex-wrap gap-1">
//               {project.techStack.map((tech, index) => (
//                 <Badge
//                   key={index}
//                   variant="outline"
//                   className="bg-background text-xs font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:shadow-md"
//                 >
//                   {tech}
//                 </Badge>
//               ))}
//             </div>
//             <div className="mt-4 flex flex-wrap justify-end gap-2">
//               {project.links.map((link, index) => (
//                 <Button
//                   key={index}
//                   variant="outline"
//                   size="sm"
//                   asChild
//                   className="text-xs"
//                 >
//                   <a
//                     href={link.url}
//                     className="flex items-center"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span className="mr-2">{link.name}</span>
//                     <MoveUpRight size={12} />
//                   </a>
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// });

// ProjectCard.displayName = "ProjectCard";

// const Projects: React.FC = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [containerHeight, setContainerHeight] = useState("auto");

//   const mustHaveProjects = projectsData.filter(
//     (project) => project.rating === "must have",
//   );
//   const niceToHaveProjects = projectsData.filter(
//     (project) => project.rating === "nice to have",
//   );

//   useEffect(() => {
//     if (containerRef.current) {
//       setContainerHeight(`${containerRef.current.scrollHeight}px`);
//     }
//   }, [showAll]);

//   const handleToggle = () => {
//     setIsAnimating(true);
//     setShowAll((prev) => !prev);
//   };

//   const containerVariants = {
//     collapsed: { height: "auto" },
//     expanded: { height: containerHeight },
//   };

//   return (
//     <div className="w-full bg-background">
//       <div className="mx-auto max-w-7xl px-5 lg:px-20">
//         <section className="py-20" id="projects">
//           <h1 className="mb-4 text-4xl font-bold">Project Highlights</h1>
//           <p className="mb-12 text-xl text-muted-foreground">
//             A showcase of my best work across various domains.
//           </p>
//           <motion.div
//             ref={containerRef}
//             variants={containerVariants}
//             initial="collapsed"
//             animate={showAll ? "expanded" : "collapsed"}
//             transition={{ duration: 3, ease: "easeInOut" }}
//             onAnimationComplete={() => setIsAnimating(false)}
//           >
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {mustHaveProjects.map((project, index) => (
//                 <ProjectCard
//                   key={project.title}
//                   project={project}
//                   index={index}
//                 />
//               ))}
//               <AnimatePresence mode="popLayout">
//                 {showAll &&
//                   niceToHaveProjects.map((project, index) => (
//                     <ProjectCard
//                       key={project.title}
//                       project={project}
//                       index={mustHaveProjects.length + index}
//                     />
//                   ))}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//           <div className="mt-12 text-center">
//             <Button onClick={handleToggle} disabled={isAnimating}>
//               {showAll ? "Show Less" : "Show More"}
//             </Button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Projects;

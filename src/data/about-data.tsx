import React from "react";

import Image from "next/image";
import { LogoShowcase } from "@/components/logoshowcase";
import tomoPhoto from "@/assets/Tomo-portfolio-img-2.png";
import { CourseList } from "@/components/course-list";
import { Chart } from "@/components/chart2";
import Lottie from "lottie-react";
import animationData from "@/assets/multitasking.json";
import ClientSideLottie from "@/components/client-side-lottie";

export type GridItem = {
  title: string;
  description: string;
  header: React.ReactNode;
  className: string;
};

const DummySkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`h-full w-full rounded-lg bg-muted ${className}`}></div>
);

const Animation: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex h-full w-full rounded-lg bg-muted ${className}`}>
    <div className="flex items-center justify-center">
      {/* <Lottie animationData={animationData} className="h-[250px]" /> */}
      <ClientSideLottie
        animationData={animationData}
        loop={true}
        className="h-[250px]"
      />
    </div>
  </div>
);

export const aboutGridItems: GridItem[] = [
  {
    title: "Data Alchemist",
    description:
      "Transforming complex datasets into actionable insights. I thrive on uncovering patterns and driving data-informed decisions.",
    header: null, // This will be replaced by the ParallaxHeader component
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Versatile Collaborator",
    description:
      "From nimble startups to industry giants, I've adapted my skills to deliver value across diverse business environments.",
    header: <LogoShowcase />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Lifelong Learner",
    description:
      "Embraced the challenge of transitioning careers, demonstrating dedication and a passion for continuous learning in software development.",
    header: <CourseList />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Tech-Business Hybrid",
    description:
      "Bridging the gap between business strategy and technical execution. I bring a unique perspective to solve complex problems.",
    header: <Animation />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Data Storyteller",
    description:
      "Crafting compelling visual narratives from raw data. I specialize in creating intuitive dashboards that drive understanding and action.",
    header: <Chart />, // Use the new NBAStatsChart component here
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Global Developer",
    description:
      "Berlin-based developer with a global mindset. Committed to delivering high-quality solutions with flexibility and reliability.",
    header: (
      <div className="relative w-full overflow-hidden rounded-lg bg-primary">
        <Image
          src={tomoPhoto}
          alt="Your Photo"
          width={200} // Set this to the intrinsic width of your image
          height={300} // Set this to your desired height
          style={{ objectFit: "contain", width: "auto", height: "100%" }}
          priority
        />
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
];

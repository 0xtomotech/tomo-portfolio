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
  <div className={`h-full w-full rounded-lg bg-muted ${className}`}>
    <div className="flex items-center justify-center">
      {/* <Lottie animationData={animationData} className="h-[250px]" /> */}
      <ClientSideLottie animationData={animationData} className="h-[250px]" />
    </div>
  </div>
);

export const aboutGridItems: GridItem[] = [
  {
    title: "Data Wizard",
    description:
      "Data Science & Analytics is my jam - I love to analyze, make sense of numbers and identify trends.",
    header: null, // This will be replaced by the ParallaxHeader component
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Diverse Range of Experience",
    description:
      "Worked with companies of all sizes, from startups to corporates.",
    header: <LogoShowcase />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Self-taught developer",
    description:
      "After years of growing businesses and developing client relationships, I decided to take the leap and become a developer to chase my dreams. No regrets.",
    header: <CourseList />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "A Business Beveloper turned Developer",
    description:
      "A refreshing combintation of web development, data, strategy, business & analytical expertise.",
    header: <Animation />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "I bring data to life",
    description:
      "Love to visualise trends, build dashboards, and showcase insights in a creative and appealing way.",
    header: <Chart />, // Use the new NBAStatsChart component here
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Hey, this is me! :)",
    description: "Based in Berlin, Available flexibly.",
    header: (
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-primary">
        <Image
          src={tomoPhoto}
          alt="Your Photo"
          width={300} // Set this to the intrinsic width of your image
          height={400} // Set this to your desired height
          style={{ objectFit: "contain", width: "auto", height: "100%" }}
          priority
        />
      </div>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
];

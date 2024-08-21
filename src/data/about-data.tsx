import React from "react";
import {
  IconBrain,
  IconCode,
  IconChartBar,
  IconPuzzle,
  IconUser,
  IconEye,
} from "@tabler/icons-react";
import Image from "next/image";
import { LogoShowcase } from "@/components/logoshowcase";
import tomoPhoto from "@/assets/Tomo-portfolio-img-2.png";
import { CourseList } from "@/components/course-list";

export type GridItem = {
  title: string;
  description: string;
  header: React.ReactNode;
  className: string;
  icon: React.ReactNode;
};

const DummySkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`h-full w-full rounded-lg bg-muted ${className}`}></div>
);

export const aboutGridItems: GridItem[] = [
  {
    title: "Data Wizard",
    description:
      "Data Science & Analytics is my jam - I love to analyze, make sense of numbers and identify trends.",
    header: null, // This will be replaced by the ParallaxHeader component
    className: "md:col-span-1 md:row-span-2",
    icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Diverse Range of Experience",
    description:
      "Worked with companies of all sizes, from startups to corporates.",
    header: <LogoShowcase />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Self-taught developer",
    description:
      "After years of growing businesses and developing client relationships, I decided to take the leap and become a developer to chase my dreams. No regrets.",
    header: <CourseList />,
    className: "md:col-span-1 md:row-span-2",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Diverse Range of Specialties",
    description:
      "Web development combined with strong data skills and business development expertise",
    header: <DummySkeleton className="h-full w-full" />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Visualize data in beautiful style",
    description: "I bring data to life in a visually appealing way.",
    header: <DummySkeleton className="h-full w-full" />,
    className: "md:col-span-2 md:row-span-1",
    icon: <IconUser className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Yep, that's me in the photo.",
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
    icon: <IconEye className="h-4 w-4 text-neutral-500" />,
  },
];

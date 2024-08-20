import React from "react";
import {
  IconBrain,
  IconCode,
  IconChartBar,
  IconPuzzle,
  IconUser,
  IconEye,
} from "@tabler/icons-react";

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
    title: "Web Development",
    description: "Developed webapps with various complexities.",
    header: <DummySkeleton className="h-full w-full" />,
    className: "md:col-span-1 md:row-span-2",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Data Science & Analytics",
    description:
      "I'm a data wizard, analyzed, designed data, pipelines and database architecture.",
    header: <DummySkeleton className="h-full w-full" />,
    className: "md:col-span-1 md:row-span-1 min-h-[200px]",
    icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Natural Problem Solver",
    description:
      "I like to tackle complex and interesting challenges, with out of the box thinking.",
    header: <DummySkeleton className="h-full w-full" />,
    className: "md:col-span-1 md:row-span-2",
    icon: <IconPuzzle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Diverse Range of Specialties",
    description:
      "Web development combined with strong data skills and business development expertise",
    header: <DummySkeleton className="h-full w-full" />,
    className: "md:col-span-1 md:row-span-1 min-h-[200px]",
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Yep, that's me in the photo.",
    description: "Based in Berlin, Available flexibly.",
    header: <DummySkeleton className="h-full w-full" />,
    className: "md:col-span-2 md:row-span-2",
    icon: <IconUser className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Visualize data in beautiful style",
    description: "I bring data to life in a visually appealing way.",
    header: <DummySkeleton className="h-full w-full" />,
    className: "md:col-span-1 md:row-span-2",
    icon: <IconEye className="h-4 w-4 text-neutral-500" />,
  },
];

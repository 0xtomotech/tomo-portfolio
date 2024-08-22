"use client";

import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aboutGridItems, GridItem } from "@/data/about-data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

// Import your background image here
import dataScienceBg from "@/assets/data-science-bg-dark.png";
import dataScienceBgLight from "@/assets/data-science-bg-light.png"; // Replace with your light mode image

const ParallaxHeader: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [200, -200],
  );

  const backgroundImage = theme === "dark" ? dataScienceBg : dataScienceBgLight;

  return (
    <motion.div
      ref={headerRef}
      className="relative h-full w-full overflow-hidden rounded-xl"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY,
      }}
    />
  );
};

const GridItemCard: React.FC<{ item: GridItem; index: number }> = ({
  item,
  index,
}) => {
  return (
    <Card className={`flex flex-col ${item.className}`}>
      <CardHeader className="flex-grow overflow-hidden p-4">
        {index === 0 ? (
          <div className="h-48 md:h-full">
            <ParallaxHeader />
          </div>
        ) : (
          item.header
        )}
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{item.title}</CardTitle>
          {item.icon}
        </div>
        <CardDescription className="">{item.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const About: React.FC = () => {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <section className="py-20" id="about">
          <h1 className="mb-4 text-4xl font-bold">About Me</h1>
          <p className="mb-12 text-xl text-muted-foreground">
            Get to know me better through my skills and experiences.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_1fr_1fr]">
            {aboutGridItems.map((item, index) => (
              <GridItemCard key={index} item={item} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

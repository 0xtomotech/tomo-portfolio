"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aboutGridItems, GridItem } from "@/data/about-data";

const GridItemCard: React.FC<{ item: GridItem }> = ({ item }) => {
  return (
    <Card className={`flex flex-col ${item.className} `}>
      <CardHeader className="flex-grow p-4">{item.header}</CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{item.title}</CardTitle>
          {item.icon}
        </div>
        <CardDescription className="mt-2">{item.description}</CardDescription>
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
          <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3">
            {aboutGridItems.map((item, index) => (
              <GridItemCard key={index} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, LineChart, Briefcase } from "lucide-react";

const specialities = [
  {
    name: "Web Development",
    description:
      "Building responsive and scalable web applications using modern technologies.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    icon: Code2,
  },
  {
    name: "Data Analytics",
    description:
      "Transforming raw data into actionable insights to drive business decisions.",
    techStack: ["Python", "Pandas", "SQL", "Tableau", "Machine Learning"],
    icon: LineChart,
  },
  {
    name: "Business Development",
    description:
      "Developing strategies to grow businesses and improve operational efficiency.",
    techStack: [
      "Market Research",
      "Financial Modeling",
      "Project Management",
      "Strategic Planning",
    ],
    icon: Briefcase,
  },
];

const Specialities = () => {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <section className="pb-[8rem]" id="specialites">
          <h1 className="mb-4 text-4xl font-bold">My Specialities</h1>
          <p className="mb-12 text-xl text-muted-foreground">
            Expertise in multiple domains to deliver comprehensive solutions.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {specialities.map((specialty, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    {React.createElement(specialty.icon, {
                      size: 48,
                      className: "text-primary",
                    })}
                  </div>
                  <CardTitle className="text-center text-2xl">
                    {specialty.name}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {specialty.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="mb-2 font-semibold">Tech Stack:</h4>
                  <ul className="list-disc pl-5">
                    {specialty.techStack.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="text-sm text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Specialities;

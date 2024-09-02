"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import animation1 from "@/public/web-dev-animation.json";
import animation2 from "@/public/data-analytics-animation.json";
import animation3 from "@/public/business-dev-animation.json";

import { Lightbulb } from "lucide-react";
import { useRef } from "react";

import dynamic from "next/dynamic";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`animate-spin ${className}`}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  },
);

interface AnimationProps {
  animationData: any;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
}

const ClientSideLottie: React.FC<AnimationProps> = ({
  animationData,
  className,
  autoplay = true,
  loop = false,
}) => {
  const [loading, setLoading] = useState(true);

  const handleLottieEvent = (event: string) => {
    if (event === "load") {
      setLoading(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner className="h-12 w-12 text-primary" />
        </div>
      )}
      <LottiePlayer
        autoplay={autoplay}
        loop={loop}
        hover={true}
        src={animationData}
        onEvent={handleLottieEvent}
        className={cn(
          loading ? "opacity-0" : "opacity-100",
          "duration-600 transition-opacity",
          className,
        )}
      />
    </div>
  );
};

// const ClientSideLottie: React.FC<AnimationProps> = ({
//   animationData,
//   className,
//   autoplay = true,
//   loop = false,
// }) => {
//   return (
//     <LottiePlayer
//       autoplay={autoplay}
//       loop={loop}
//       hover={true}
//       src={animationData}
//       //   style={{ width: "100%", height: "100%" }}
//       className={className}
//     />
//   );
// };

const services = [
  {
    name: "Web Development",
    description:
      "Building responsive and scalable web applications using modern technologies.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    icon: animation1,
  },
  {
    name: "Data Analytics",
    description:
      "Transforming raw data into actionable insights to drive business decisions.",
    techStack: ["Python", "Pandas", "SQL", "Tableau", "Machine Learning"],
    icon: animation2,
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
    icon: animation3,
  },
];

const ServiceCard: React.FC<{
  service: (typeof services)[0];
  index: number;
}> = ({ service, index }) => {
  return (
    <Card className="flex flex-col transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <CardHeader>
        <div className={`mb-4 flex justify-center`}>
          {/* <Lightbulb size={48} /> */}
          {/* <DotLottieReact src="/assets/lottie/test2.lottie" loop autoplay /> */}
          {/* <Lottie animationData={service.icon} className="h-[100px]" /> */}
          <ClientSideLottie
            animationData={service.icon}
            className="h-[200px]"
          />
        </div>
        <CardTitle className="text-center text-2xl">{service.name}</CardTitle>
        <CardDescription className="text-center">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="mb-2 font-semibold">Tech Stack:</h4>
        <ul className="list-disc pl-5">
          {service.techStack.map((tech, techIndex) => (
            <li key={techIndex} className="text-sm text-muted-foreground">
              {tech}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Services: React.FC = () => {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <section className="pb-[8rem]" id="specialites">
          <h1 className="mb-4 text-4xl font-bold">My Specialities</h1>
          <p className="mb-12 text-xl text-muted-foreground">
            Expertise in multiple domains to deliver comprehensive solutions.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

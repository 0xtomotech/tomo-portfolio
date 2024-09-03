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
import { Badge } from "./ui/badge";

import { Lightbulb } from "lucide-react";
import { forwardRef, useImperativeHandle, useRef } from "react";

import dynamic from "next/dynamic";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

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

export interface ClientSideLottieRef {
  play: () => void;
  pause: () => void;
  stop: () => void;
  setSeeker: (frame: number, play?: boolean) => void;
}

const ClientSideLottie = forwardRef<ClientSideLottieRef, AnimationProps>(
  ({ animationData, className, autoplay = true, loop = false }, ref) => {
    const [loading, setLoading] = useState(true);
    const [lottieInstance, setLottieInstance] = useState<any | null>(null);

    useImperativeHandle(ref, () => ({
      play: () => lottieInstance?.play(),
      pause: () => lottieInstance?.pause(),
      stop: () => lottieInstance?.stop(),
      setSeeker: (frame: number, play: boolean = false) => {
        if (lottieInstance) {
          lottieInstance.goToAndStop(frame, true);
          if (play) {
            lottieInstance.play();
          }
        }
      },
    }));

    const handleLottieEvent = (event: PlayerEvent) => {
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
          lottieRef={(instance) => setLottieInstance(instance)}
          autoplay={autoplay}
          loop={loop}
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
  },
);

ClientSideLottie.displayName = "ClientSideLottie";

// const services = [
//   {
//     name: "Web Development",
//     description:
//       "Building responsive and scalable web applications using modern technologies.",
//     techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
//     icon: animation1,
//   },
//   {
//     name: "Data Analytics",
//     description:
//       "Transforming raw data into actionable insights to drive business decisions.",
//     techStack: ["Python", "Pandas", "SQL", "Tableau", "Machine Learning"],
//     icon: animation2,
//   },
//   {
//     name: "Business Development",
//     description:
//       "Developing strategies to grow businesses and improve operational efficiency.",
//     techStack: [
//       "Market Research",
//       "Financial Modeling",
//       "Project Management",
//       "Strategic Planning",
//     ],
//     icon: animation3,
//   },
// ];

const services = [
  {
    name: "Web Development",
    description:
      "Building responsive and scalable web applications using modern technologies.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    icon: animation2,
    itemsTitle: "Tech Stack",
  },
  {
    name: "Data Analytics",
    description:
      "Transforming raw data into actionable insights to drive business decisions.",
    items: ["Python", "Pandas", "SQL", "Tableau", "Machine Learning"],
    icon: animation3,
    itemsTitle: "Tools",
  },
  {
    name: "Business Development",
    description:
      "Developing strategies to grow businesses and improve operational efficiency.",
    items: [
      "Market Research",
      "Financial Modeling",
      "Project Management",
      "Strategic Planning",
    ],
    icon: animation1,
    itemsTitle: "Specialities",
  },
];

const ServiceCard: React.FC<{
  service: (typeof services)[0];
  index: number;
}> = ({ service, index }) => {
  const lottieRef = useRef<ClientSideLottieRef>(null);

  const handleHover = () => {
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    // Reset the animation to the start and pause it
    lottieRef.current?.setSeeker(0);
  };

  return (
    <Card
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col transition-shadow duration-300 ease-in-out hover:shadow-lg"
    >
      <CardHeader>
        <div className={`mb-4 flex justify-center`}>
          {/* <Lightbulb size={48} /> */}
          {/* <DotLottieReact src="/assets/lottie/test2.lottie" loop autoplay /> */}
          {/* <Lottie animationData={service.icon} className="h-[100px]" /> */}
          <ClientSideLottie
            ref={lottieRef}
            animationData={service.icon}
            className="h-[200px]"
            autoplay={false}
          />
        </div>
        <CardTitle className="text-center text-2xl">{service.name}</CardTitle>
        <CardDescription className="text-center">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="mb-2 font-semibold">{service.itemsTitle}</h4>
        <div className="flex flex-wrap gap-2">
          {service.items.map((item, itemIndex) => (
            <Badge
              key={itemIndex}
              variant="outline"
              className="bg-background font-normal text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary hover:shadow-md"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Services: React.FC = () => {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <section className="pb-[8rem]" id="specialites">
          <h1 className="mb-4 text-4xl font-bold">Services</h1>
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

// NOT NEEDED ANYMORE SERVICES IN USE

"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ClientSideLottie from "@/components/client-side-lottie";

// Import your Lottie animation data
import webDevAnimation from "@/assets/web-dev-animation.json";
import dataAnalyticsAnimation from "@/assets/data-analytics-animation.json";
import businessDevAnimation from "@/assets/business-dev-animation.json";

const specialities = [
  {
    name: "Web Development",
    description:
      "Building responsive and scalable web applications using modern technologies.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    animationData: webDevAnimation,
    animationHeight: "h-[200px]",
  },
  {
    name: "Data Analytics",
    description:
      "Transforming raw data into actionable insights to drive business decisions.",
    techStack: ["Python", "Pandas", "SQL", "Tableau", "Machine Learning"],
    animationData: dataAnalyticsAnimation,
    animationHeight: "h-[180px]",
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
    animationData: businessDevAnimation,
    animationHeight: "h-[220px]",
  },
];

const SpecialtyCard: React.FC<{
  specialty: (typeof specialities)[0];
  index: number;
}> = ({ specialty, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <Card
      className="flex flex-col transition-shadow duration-300 ease-in-out hover:shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader>
        <div
          className={`mb-4 flex justify-center ${specialty.animationHeight}`}
        >
          <ClientSideLottie
            animationData={specialty.animationData}
            autoplay={true}
            loop={isHovered}
          />
        </div>
        <CardTitle className="text-center text-2xl">{specialty.name}</CardTitle>
        <CardDescription className="text-center">
          {specialty.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="mb-2 font-semibold">Tech Stack:</h4>
        <ul className="list-disc pl-5">
          {specialty.techStack.map((tech, techIndex) => (
            <li key={techIndex} className="text-sm text-muted-foreground">
              {tech}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Specialities: React.FC = () => {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <section className="pb-[8rem]" id="specialities">
          <h1 className="mb-4 text-4xl font-bold">My Specialities</h1>
          <p className="mb-12 text-xl text-muted-foreground">
            Expertise in multiple domains to deliver comprehensive solutions.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {specialities.map((specialty, index) => (
              <SpecialtyCard key={index} specialty={specialty} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Specialities;

// VERSION 3
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import ClientSideLottie from "@/components/client-side-lottie";
// import { Player } from "@lottiefiles/react-lottie-player";

// // Import your Lottie animation data
// import webDevAnimation from "@/assets/web-dev-animation.json";
// import dataAnalyticsAnimation from "@/assets/data-analytics-animation.json";
// import businessDevAnimation from "@/assets/business-dev-animation.json";

// const specialities = [
//   {
//     name: "Web Development",
//     description:
//       "Building responsive and scalable web applications using modern technologies.",
//     techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
//     animationData: webDevAnimation,
//     animationHeight: "200px",
//   },
//   {
//     name: "Data Analytics",
//     description:
//       "Transforming raw data into actionable insights to drive business decisions.",
//     techStack: ["Python", "Pandas", "SQL", "Tableau", "Machine Learning"],
//     animationData: dataAnalyticsAnimation,
//     animationHeight: "180px",
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
//     animationData: businessDevAnimation,
//     animationHeight: "220px",
//   },
// ];

// const SpecialtyCard: React.FC<{
//   specialty: (typeof specialities)[0];
//   index: number;
// }> = ({ specialty, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const playerRef = useRef<Player>(null);

//   useEffect(() => {
//     if (playerRef.current) {
//       playerRef.current.play();
//     }
//   }, []);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     if (playerRef.current) {
//       playerRef.current.play();
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     if (playerRef.current) {
//       playerRef.current.stop();
//     }
//   };

//   return (
//     <Card
//       className="flex flex-col transition-shadow duration-300 ease-in-out hover:shadow-lg"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <CardHeader>
//         <div className="mb-4 flex justify-center">
//           <ClientSideLottie
//             animationData={specialty.animationData}
//             className={`w-full ${specialty.animationHeight}`}
//             autoplay={false}
//             loop={isHovered}
//           />
//         </div>
//         <CardTitle className="text-center text-2xl">{specialty.name}</CardTitle>
//         <CardDescription className="text-center">
//           {specialty.description}
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="flex-grow">
//         <h4 className="mb-2 font-semibold">Tech Stack:</h4>
//         <ul className="list-disc pl-5">
//           {specialty.techStack.map((tech, techIndex) => (
//             <li key={techIndex} className="text-sm text-muted-foreground">
//               {tech}
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// };

// const Specialities: React.FC = () => {
//   return (
//     <div className="w-full bg-background">
//       <div className="mx-auto max-w-7xl px-5 lg:px-20">
//         <section className="pb-[8rem]" id="specialites">
//           <h1 className="mb-4 text-4xl font-bold">My Specialities</h1>
//           <p className="mb-12 text-xl text-muted-foreground">
//             Expertise in multiple domains to deliver comprehensive solutions.
//           </p>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {specialities.map((specialty, index) => (
//               <SpecialtyCard key={index} specialty={specialty} index={index} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Specialities;

// VERSION 2

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import ClientSideLottie from "@/components/client-side-lottie";

// // Import your Lottie animation data
// import webDevAnimation from "@/assets/web-dev-animation.json";
// import dataAnalyticsAnimation from "@/assets/data-analytics-animation.json";
// import businessDevAnimation from "@/assets/business-dev-animation.json";

// const specialities = [
//   {
//     name: "Web Development",
//     description:
//       "Building responsive and scalable web applications using modern technologies.",
//     techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
//     animationData: webDevAnimation,
//     animationHeight: "200px",
//   },
//   {
//     name: "Data Analytics",
//     description:
//       "Transforming raw data into actionable insights to drive business decisions.",
//     techStack: ["Python", "Pandas", "SQL", "Tableau", "Machine Learning"],
//     animationData: dataAnalyticsAnimation,
//     animationHeight: "180px",
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
//     animationData: businessDevAnimation,
//     animationHeight: "220px",
//   },
// ];

// const SpecialtyCard: React.FC<{
//   specialty: (typeof specialities)[0];
//   index: number;
// }> = ({ specialty, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [shouldPlay, setShouldPlay] = useState(true);
//   const animationRef = useRef<any>(null);

//   useEffect(() => {
//     if (shouldPlay) {
//       const timer = setTimeout(() => {
//         setShouldPlay(false);
//       }, 3000); // Adjust this value based on your animation duration
//       return () => clearTimeout(timer);
//     }
//   }, [shouldPlay]);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     if (animationRef.current) {
//       animationRef.current.playSegments(
//         [0, animationRef.current.totalFrames],
//         true,
//       );
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <Card
//       className="flex flex-col transition-shadow duration-300 ease-in-out hover:shadow-lg"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <CardHeader>
//         <div className="mb-4 flex justify-center">
//           <ClientSideLottie
//             animationData={specialty.animationData}
//             className={`w-full ${specialty.animationHeight}`}
//             lottieRef={animationRef}
//             autoplay={shouldPlay}
//             loop={isHovered}
//           />
//         </div>
//         <CardTitle className="text-center text-2xl">{specialty.name}</CardTitle>
//         <CardDescription className="text-center">
//           {specialty.description}
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="flex-grow">
//         <h4 className="mb-2 font-semibold">Tech Stack:</h4>
//         <ul className="list-disc pl-5">
//           {specialty.techStack.map((tech, techIndex) => (
//             <li key={techIndex} className="text-sm text-muted-foreground">
//               {tech}
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// };

// const Specialities: React.FC = () => {
//   return (
//     <div className="w-full bg-background">
//       <div className="mx-auto max-w-7xl px-5 lg:px-20">
//         <section className="pb-[8rem]" id="specialites">
//           <h1 className="mb-4 text-4xl font-bold">My Specialities</h1>
//           <p className="mb-12 text-xl text-muted-foreground">
//             Expertise in multiple domains to deliver comprehensive solutions.
//           </p>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {specialities.map((specialty, index) => (
//               <SpecialtyCard key={index} specialty={specialty} index={index} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Specialities;

// VERSION 1

// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Code2, LineChart, Briefcase } from "lucide-react";

// const specialities = [
//   {
//     name: "Web Development",
//     description:
//       "Building responsive and scalable web applications using modern technologies.",
//     techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
//     icon: Code2,
//   },
//   {
//     name: "Data Analytics",
//     description:
//       "Transforming raw data into actionable insights to drive business decisions.",
//     techStack: ["Python", "Pandas", "SQL", "Tableau", "Machine Learning"],
//     icon: LineChart,
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
//     icon: Briefcase,
//   },
// ];

// const Specialities = () => {
//   return (
//     <div className="w-full bg-background">
//       <div className="mx-auto max-w-7xl px-5 lg:px-20">
//         <section className="pb-[8rem]" id="specialites">
//           <h1 className="mb-4 text-4xl font-bold">My Specialities</h1>
//           <p className="mb-12 text-xl text-muted-foreground">
//             Expertise in multiple domains to deliver comprehensive solutions.
//           </p>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {specialities.map((specialty, index) => (
//               <Card key={index} className="flex flex-col">
//                 <CardHeader>
//                   <div className="mb-4 flex justify-center">
//                     {React.createElement(specialty.icon, {
//                       size: 48,
//                       className: "text-primary",
//                     })}
//                   </div>
//                   <CardTitle className="text-center text-2xl">
//                     {specialty.name}
//                   </CardTitle>
//                   <CardDescription className="text-center">
//                     {specialty.description}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex-grow">
//                   <h4 className="mb-2 font-semibold">Tech Stack:</h4>
//                   <ul className="list-disc pl-5">
//                     {specialty.techStack.map((tech, techIndex) => (
//                       <li
//                         key={techIndex}
//                         className="text-sm text-muted-foreground"
//                       >
//                         {tech}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Specialities;

"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  motion,
  useScroll as useFramerScroll,
  useTransform,
} from "framer-motion";
import { useTheme } from "next-themes";
import starsBg from "@/assets/stars.png";
import blackStarsBg from "@/assets/black-stars.png";
import { useScroll as useCustomScroll } from "@/contexts/scroll-context";

const Hero = () => {
  const sectionRef = useRef(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useFramerScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollTo } = useCustomScroll();

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  const bgImage = theme === "dark" ? starsBg : blackStarsBg;

  const [typewriterText, setTypewriterText] = useState("");
  const phrases = [
    "[Full-Stack Developer]",
    "[Data Analyst & Scientist]",
    "[Business Development Expert]",
  ];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    let isMounted = true;
    let curPhraseIndex = 0;

    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const typewriterEffect = async () => {
      while (isMounted) {
        const currentPhrase = phrases[curPhraseIndex];

        // Type the phrase
        for (let i = 0; i <= currentPhrase.length; i++) {
          if (!isMounted) return;
          setTypewriterText(currentPhrase.slice(0, i));
          await sleep(typingSpeed);
        }

        await sleep(pauseTime);

        // Erase the phrase
        for (let i = currentPhrase.length; i >= 0; i--) {
          if (!isMounted) return;
          setTypewriterText(currentPhrase.slice(0, i));
          await sleep(erasingSpeed);
        }

        await sleep(pauseTime);

        curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
      }
    };

    typewriterEffect();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[600px]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: bgImage.width,
      }}
      transition={{
        repeat: Infinity,
        transform: "linear",
        duration: 60,
      }}
    >
      {/* Overlay background */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(255,149,41,0.15)_15%,rgba(255,255,255,0.05)_78%,transparent)] dark:bg-[radial-gradient(75%_75%_at_center_center,rgba(255,149,41,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>

      {/* Planet */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 shadow-[inset_0_0_20px_rgba(255,149,41,0.5),0_0_20px_rgba(255,149,41,0.3)] dark:border-white/20 dark:bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(255,149,41)_37.7%,rgb(36,14,0))] dark:shadow-[-20px_-20px_50px_rgba(255,149,41,0.5),-20px_-20px_80px_rgba(255,149,41,0.1),-0_0_50px_rgba(255,149,41,0.5)] md:h-72 md:w-72"></div>

      {/* First ring */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 opacity-50 dark:border-white/20 dark:opacity-20 md:h-[580px] md:w-[580px]"
      >
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary dark:bg-white"></div>
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary dark:bg-white"></div>
        <div className="absolute left-full top-1/2 inline-flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary dark:border-white">
          <div className="h-2 w-2 rounded-full bg-primary dark:bg-white"></div>
        </div>
      </motion.div>

      {/* Second ring */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[444px] w-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/30 dark:border-white/20 md:h-[780px] md:w-[780px]"
      ></motion.div>

      {/* Third ring */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[544px] w-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 opacity-50 dark:border-white dark:opacity-20 md:h-[980px] md:w-[980px]"
      >
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary dark:bg-white"></div>
        <div className="absolute left-full top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary dark:bg-white"></div>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mt-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-2 max-w-[800px] text-4xl font-bold text-foreground sm:text-7xl">
            Hey, I&apos;m <span className="text-primary">Tomo</span>!
          </h1>
          <h2 className="mb-8 max-w-[800px] text-3xl font-medium text-foreground/90 sm:text-5xl">
            <span className="text-foreground">{typewriterText}</span>
            <span className="animate-blink text-primary">|</span>
          </h2>
          <p className="mb-2 max-w-[600px] text-xl text-foreground/70">
            Welcome to my site, I&apos;m glad you&apos;re here!
          </p>
          <p className="mb-8 max-w-[600px] text-xl text-foreground/70">
            My passion is web devolopment, data analytics and building projects
            from scratch. Scroll down to learn more about me, and let&apos;s
            connect!
          </p>
          <Button
            onClick={() => scrollTo("contact")}
            variant="default"
            size="lg"
            className="font-semibold"
          >
            Contact me here!
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

// "use client";

// import React, { useRef } from "react";
// import { Button } from "./ui/button";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useTheme } from "next-themes";
// import starsBg from "@/assets/stars.png";
// import blackStarsBg from "@/assets/black-stars.png";

// const Hero = () => {
//   const sectionRef = useRef(null);
//   const { theme } = useTheme();
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const backgroundPositionY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [-300, 300],
//   );

//   const bgImage = theme === "dark" ? starsBg : blackStarsBg;

//   return (
//     <motion.section
//       ref={sectionRef}
//       className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]"
//       style={{
//         backgroundImage: `url(${bgImage.src})`,
//         backgroundPositionY,
//       }}
//       animate={{
//         backgroundPositionX: bgImage.width,
//       }}
//       transition={{
//         repeat: Infinity,
//         transform: "linear",
//         duration: 60,
//       }}
//     >
//       {/* Overlay background */}
//       <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(255,149,41,0.15)_15%,rgba(255,255,255,0.05)_78%,transparent)] dark:bg-[radial-gradient(75%_75%_at_center_center,rgba(255,149,41,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>

//       {/* Planet */}
//       <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 shadow-[inset_0_0_20px_rgba(255,149,41,0.5),0_0_20px_rgba(255,149,41,0.3)] dark:border-white/20 dark:bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(255,149,41)_37.7%,rgb(36,14,0))] dark:shadow-[-20px_-20px_50px_rgba(255,149,41,0.5),-20px_-20px_80px_rgba(255,149,41,0.1),-0_0_50px_rgba(255,149,41,0.5)] md:h-96 md:w-96"></div>

//       {/* First ring */}
//       <motion.div
//         style={{
//           translateY: "-50%",
//           translateX: "-50%",
//         }}
//         animate={{
//           rotate: "1turn",
//         }}
//         transition={{
//           duration: 60,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute left-1/2 top-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 opacity-50 dark:border-white/20 dark:opacity-20 md:h-[580px] md:w-[580px]"
//       >
//         <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary dark:bg-white"></div>
//         <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary dark:bg-white"></div>
//         <div className="absolute left-full top-1/2 inline-flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary dark:border-white">
//           <div className="h-2 w-2 rounded-full bg-primary dark:bg-white"></div>
//         </div>
//       </motion.div>

//       {/* Second ring */}
//       <motion.div
//         style={{
//           translateY: "-50%",
//           translateX: "-50%",
//         }}
//         animate={{
//           rotate: "-1turn",
//         }}
//         transition={{
//           duration: 90,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute left-1/2 top-1/2 h-[444px] w-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/30 dark:border-white/20 md:h-[780px] md:w-[780px]"
//       ></motion.div>

//       {/* Third ring */}
//       <motion.div
//         style={{
//           translateY: "-50%",
//           translateX: "-50%",
//         }}
//         animate={{
//           rotate: "1turn",
//         }}
//         transition={{
//           duration: 90,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="absolute left-1/2 top-1/2 h-[544px] w-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 opacity-50 dark:border-white dark:opacity-20 md:h-[980px] md:w-[980px]"
//       >
//         <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary dark:bg-white"></div>
//         <div className="absolute left-full top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary dark:bg-white"></div>
//       </motion.div>

//       {/* Content */}
//       <div className="container relative z-10 mt-16">
//         <div className="flex flex-col items-center text-center">
//           <h1 className="mb-2 max-w-[800px] text-4xl font-bold text-foreground sm:text-7xl">
//             Hey, I&apos;m <span className="text-primary">Tomo</span>!
//           </h1>
//           <h2 className="mb-8 max-w-[600px] text-3xl font-medium text-foreground/90 sm:text-5xl">
//             A developer, problem solver, and business expert.
//           </h2>
//           <p className="mb-2 max-w-[600px] text-xl text-foreground/70">
//             I love webdev, data analytics and I&apos;m passionate about
//             developing ideas and building projects.
//           </p>
//           <p className="mb-8 max-w-[600px] text-xl text-foreground/70">
//             Let me show you a glimpse of my world, and who knows, maybe one day
//             we get to work together?
//           </p>
//           <Button variant="default" size="lg" className="font-semibold">
//             Contact me here!
//           </Button>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;

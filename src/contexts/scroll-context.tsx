"use client";

import React, { createContext, useContext } from "react";

interface ScrollContextType {
  scrollTo: (sectionId: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

// Custom easing function
const easeInOutQuad = (t: number): number =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
// const linear = (t: number): number => t;
// const easeInCubic = (t: number): number => t * t * t;
// const easeOutQuart = (t: number): number => 1 - (--t) * t * t * t;

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const start = window.pageYOffset;
      const target = element.getBoundingClientRect().top + start;
      const duration = 1500; // Adjust this value to change the scroll duration (in milliseconds)
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutQuad(progress);

        window.scrollTo(0, start + (target - start) * easeProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

// "use client";

// import React, { createContext, useContext } from "react";

// interface ScrollContextType {
//   scrollTo: (sectionId: string) => void;
// }

// const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

// export const useScroll = () => {
//   const context = useContext(ScrollContext);
//   if (!context) {
//     throw new Error("useScroll must be used within a ScrollProvider");
//   }
//   return context;
// };

// export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const scrollTo = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <ScrollContext.Provider value={{ scrollTo }}>
//       {children}
//     </ScrollContext.Provider>
//   );
// };

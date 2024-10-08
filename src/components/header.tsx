"use client";

import React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { useScroll } from "@/contexts/scroll-context";

const links = [
  {
    name: "Specialities",
    sectionId: "specialities",
  },
  {
    name: "Projects",
    sectionId: "projects",
  },
  {
    name: "About",
    sectionId: "about",
  },
  {
    name: "Contact",
    sectionId: "contact",
  },
];

const Header = () => {
  const { scrollTo } = useScroll();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="relative z-[999]">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border bg-card shadow-lg shadow-black/[0.03] backdrop-blur-md after:absolute after:inset-0 after:rounded-md after:opacity-0 after:shadow-[0_0_15px_rgba(255,255,255,0.1)] dark:shadow-none dark:ring-1 dark:ring-white/10 dark:backdrop-blur-md dark:after:opacity-100 sm:top-4 sm:h-[3rem] sm:w-[48rem] sm:rounded-md lg:w-[1120px]"
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.7rem] flex h-12 w-full -translate-x-1/2 items-center justify-between px-3 py-2 sm:top-[1.1rem] sm:h-[initial] sm:w-[48rem] sm:py-0 lg:w-[1120px]">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="justify-start"
        >
          <h1
            className="cursor-pointer text-2xl font-bold transition duration-300 hover:text-primary sm:text-lg"
            onClick={handleLogoClick}
          >
            [Build With <span className="text-primary">Tomo</span>]
          </h1>
        </motion.div>
        <div className="flex flex-row items-center gap-4">
          <div className="hidden sm:block">
            <ul className="flex flex-wrap items-center justify-center gap-y-1 text-base font-semibold sm:w-[initial] sm:flex-nowrap sm:gap-1">
              {links.map((link) => (
                <motion.li
                  key={link.sectionId}
                  className="relative flex h-3/4 items-center justify-center"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {/* Highlight start */}
                  <a
                    className="group relative flex w-full cursor-pointer items-center justify-center px-3 py-3 text-sm transition duration-300 hover:text-primary"
                    onClick={() => scrollTo(link.sectionId)}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-0 z-0 flex items-center justify-center text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      [{link.name}]
                    </span>
                  </a>
                  {/* Highlight end */}

                  {/* <a
                    className="flex w-full cursor-pointer items-center justify-center px-3 py-3 text-sm font-medium transition duration-300 hover:text-primary"
                    onClick={() => scrollTo(link.sectionId)}
                  >
                    {link.name}
                  </a> */}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ThemeToggle } from "./theme-toggle";

// const links = [
//   {
//     name: "Home",
//     hash: "#home",
//   },
//   {
//     name: "Specialities",
//     hash: "#specialities",
//   },
//   {
//     name: "Projects",
//     hash: "#projects",
//   },
//   {
//     name: "About",
//     hash: "#about",
//   },
//   {
//     name: "Contact",
//     hash: "#contact",
//   },
// ];

// const Header = () => {
//   return (
//     <header className="relative z-[999]">
//       <motion.div
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//         className="fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border bg-card shadow-lg shadow-black/[0.03] backdrop-blur-md after:absolute after:inset-0 after:rounded-md after:opacity-0 after:shadow-[0_0_15px_rgba(255,255,255,0.1)] dark:shadow-none dark:ring-1 dark:ring-white/10 dark:backdrop-blur-md dark:after:opacity-100 sm:top-4 sm:h-[3rem] sm:w-[48rem] sm:rounded-md lg:w-[1120px]"
//       ></motion.div>
//       <nav className="fixed left-1/2 top-[0.7rem] flex h-12 w-full -translate-x-1/2 items-center justify-between px-3 py-2 sm:top-[1.1rem] sm:h-[initial] sm:w-[48rem] sm:py-0 lg:w-[1120px]">
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="justify-start"
//         >
//           <h1 className="text-2xl font-bold sm:text-lg">
//             [Build With <span className="text-primary">Tomo</span>]
//           </h1>
//         </motion.div>
//         <div className="flex flex-row items-center gap-4">
//           <div className="hidden sm:block">
//             <ul className="flex flex-wrap items-center justify-center gap-y-1 text-base font-medium sm:w-[initial] sm:flex-nowrap sm:gap-1">
//               {links.map((link) => (
//                 <motion.li
//                   key={link.hash}
//                   className="relative flex h-3/4 items-center justify-center"
//                   initial={{ opacity: 0, y: -100 }}
//                   animate={{ opacity: 1, y: 0 }}
//                 >
//                   <Link
//                     className="flex w-full items-center justify-center px-3 py-3 text-sm font-semibold transition hover:text-primary"
//                     href={link.hash}
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: -100 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <ThemeToggle />
//           </motion.div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { StaticImageData } from "next/image";
import sampleProjectImg from "@/assets/project-sample2.png";
import portfolioImg from "@/assets/portfolio.png";
import quantaImg from "@/assets/quanta.png";
import t3GalleryImg from "@/assets/t3-gallery.png";
import firstGameImg from "@/assets/first-game.png";
import aiLandingPageImg from "@/assets/ai-landing-page.png";
import customPhoneCaseImg from "@/assets/custom-phone-case.png";
import algoTradingImg from "@/assets/algo-trading.png";
import controlFreakImg from "@/assets/control-freak.png";
import basketBrainsImg from "@/assets/basket-brains.png";
import nbaTrendsImg from "@/assets/nba-trends.png";
import podcastIntelImg from "@/assets/podcast-intel.png";
import simpleScraperImg from "@/assets/simple-scraper.png";
import cs50wImg from "@/assets/cs50w.png";

export interface Project {
  title: string;
  category: string[];
  techStack: string[];
  links: {
    name: string;
    url: string;
  }[];
  rating: "must have" | "nice to have" | "not relevant";
  description: string;
  imageUrl: StaticImageData;
}

export const projectsData: Project[] = [
  {
    title: "Hooper Stats",
    category: ["Web Dev", "Data Analytics"],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind", "Django"],
    links: [
      {
        name: "Frontend",
        url: "https://github.com/0xtomotech/hooper-stats-frontend",
      },
      {
        name: "Backend",
        url: "https://github.com/0xtomotech/hooper-stats-backend",
      },
    ],
    rating: "nice to have",
    description:
      "A comprehensive basketball statistics platform that combines web development and data analytics. This full-stack project uses React for the frontend and Django for the backend, providing in-depth insights into basketball performance metrics.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "Portfolio Site",
    category: ["Web Dev"],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/tomo-portfolio" },
    ],
    rating: "nice to have",
    description:
      "A personal portfolio website built with modern web technologies to showcase projects and skills. This site demonstrates proficiency in React and Next.js development, featuring a responsive design and smooth user experience.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "Quanta",
    category: ["Web Dev"],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/project-quanta" },
    ],
    rating: "not relevant",
    description:
      "An innovative web application leveraging cutting-edge technologies. Quanta showcases advanced React and TypeScript usage in a real-world project, demonstrating complex state management and efficient rendering techniques.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "T3 Gallery",
    category: ["Web Dev"],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/t3gallery_demo" },
    ],
    rating: "nice to have",
    description:
      "A modern gallery application built using the T3 stack, showcasing integration of TypeScript, Tailwind, and tRPC. This project demonstrates best practices in building type-safe, full-stack applications with Next.js.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "First Game",
    category: ["Game Dev"],
    techStack: ["Godot", "GDScript"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/First-Game" },
    ],
    rating: "nice to have",
    description:
      "A unique take on the classic Mario-style platformer, developed using the Godot engine and GDScript. This project showcases game development skills, including level design, character controls, and game mechanics implementation.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "AI Landing Page",
    category: ["Web Dev"],
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/ai-landing-page" },
    ],
    rating: "must have",
    description:
      "A modern dark-themed landing page built with Next.js, Framer Motion, and Tailwind CSS. This project demonstrates skills in responsive design, animations, and user interactions, creating an engaging and visually appealing web experience.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "Custom Phone Case Shop",
    category: ["Web Dev"],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/0xtomotech/custom_phone_case_shop",
      },
    ],
    rating: "nice to have",
    description:
      "An e-commerce platform specializing in custom phone cases. This project demonstrates skills in building online stores, handling product customization, and implementing secure checkout processes using modern web technologies.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "Algorithmic Trading",
    category: ["Algo Trading"],
    techStack: ["Python"],
    links: [
      {
        name: "Project 1",
        url: "https://github.com/0xtomotech/algo_trading_project0",
      },
      {
        name: "Project 2",
        url: "https://github.com/0xtomotech/algo_trading_project1",
      },
      {
        name: "Strategies",
        url: "https://github.com/0xtomotech/trading_strategies",
      },
    ],
    rating: "must have",
    description:
      "A comprehensive suite of algorithmic trading projects showcasing various strategies and implementations. These projects demonstrate proficiency in financial modeling, data analysis, and automated trading system development using Python, including advanced quantitative finance techniques.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "Control Freak",
    category: ["Web Dev"],
    techStack: ["Django", "React"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/control_freak" },
    ],
    rating: "nice to have",
    description:
      "A comprehensive task management and control application built with Django and React. This project demonstrates full-stack development skills, focusing on creating intuitive user interfaces and robust backend systems for efficient task organization and tracking.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "Basket Brains",
    category: ["Web Dev", "Data Analytics"],
    techStack: [
      "Python",
      "Django",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
    ],
    links: [{ name: "Landing Page", url: "TBC" }],
    rating: "must have",
    description:
      "An advanced basketball analytics platform combining web development and data science. This project showcases full-stack skills, data visualization, and sports analytics, providing insights for basketball enthusiasts and professionals through a modern web interface.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "NBA Trends & API",
    category: ["Data Analytics"],
    techStack: ["Python"],
    links: [
      {
        name: "Project 1",
        url: "https://github.com/0xtomotech/nba_api_project1",
      },
      {
        name: "Project 2",
        url: "https://github.com/0xtomotech/nba_api_project0",
      },
    ],
    rating: "must have",
    description:
      "A comprehensive NBA data analysis project utilizing various APIs and data processing techniques. This project demonstrates skills in data extraction, cleaning, analysis, and visualization of complex sports statistics, providing deep insights into NBA trends and player performance.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "Podcast Intel",
    category: ["AI", "Data Analytics"],
    techStack: ["Python"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/podcast_intel" },
    ],
    rating: "must have",
    description:
      "An AI-powered podcast analysis tool that extracts insights from audio content. This project showcases skills in natural language processing, audio processing, and machine learning to provide valuable analytics for podcast creators and listeners, enhancing content understanding and audience engagement.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "Simple Scraper",
    category: ["Data Analytics"],
    techStack: ["Python"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/simple_scraper" },
    ],
    rating: "nice to have",
    description:
      "A versatile web scraping tool built in Python. This project demonstrates skills in data extraction, HTML parsing, and handling various web structures to collect and process information from websites efficiently, showcasing practical data collection techniques.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "CS50W Projects",
    category: ["Web Dev", "CS50"],
    techStack: ["JavaScript", "TypeScript", "React", "Python", "Django", "CSS"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/CS50w-projects" },
    ],
    rating: "must have",
    description:
      "A collection of projects completed as part of Harvard's CS50 Web Programming course. These projects showcase a wide range of web development skills, from frontend design to backend implementation using various technologies, demonstrating a comprehensive understanding of full-stack web development.",
    imageUrl: sampleProjectImg,
  },
];

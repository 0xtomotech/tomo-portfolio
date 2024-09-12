import { StaticImageData } from "next/image";
import sampleProjectImg from "@/assets/project-sample2.png";
import portfolioImg from "@/assets/portfolio.png";
import firstGameImg from "@/assets/first-game.png";
import aiLandingPageImg from "@/assets/ai-landing-page.png";
import customPhoneCaseImg from "@/assets/custom-phone.png";
import algoTradingImg from "@/assets/algo-trading.png";
import basketBrainsImg from "@/assets/basket2.png";
import nbaTrendsImg from "@/assets/nba-trends.png";
import cs50wImg from "@/assets/cs50w.png";
import umRunners from "@/assets/um-runners.png";
import popiRizsi from "@/assets/popirizsi.png";
import hooperStatsImg from "@/assets/hooperstatsstack.png";
import podcastIntelImg from "@/assets/podcast-intel.png";

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
    links: [{ name: "Coming Soon!", url: "TBC" }],
    rating: "must have",
    description:
      "Advanced basketball analytics platform combining web development and data science. Work in progress - Coming Soon!",
    imageUrl: basketBrainsImg,
  },
  {
    title: "AI Landing Page",
    category: ["Web Dev"],
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/ai-landing-page" },
      {
        name: "Live Demo",
        url: "https://ai-landing-page-brown-rho.vercel.app/",
      },
    ],
    rating: "must have",
    description:
      "Modern dark-themed landing page showcasing responsive design, animations, and user interactions.",
    imageUrl: aiLandingPageImg,
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
      "Collection of projects from Harvard's CS50W course, showcasing a wide range of full-stack web development skills across various technologies.",
    imageUrl: cs50wImg,
  },
  {
    title: "Hooper Stats",
    category: ["Web Dev", "Data Analytics"],
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Django",
      "Python",
    ],
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
      "Full-stack proof of concept combining web development and data analytics for basketball statistics. Utilizes React frontend and Django backend for in-depth performance metrics.",
    imageUrl: hooperStatsImg,
  },
  {
    title: "Podcast Intel",
    category: ["AI", "Data Analytics"],
    techStack: ["Python"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/podcast_intel" },
    ],
    rating: "nice to have",
    description:
      "AI-powered podcast analysis tool extracting insights from audio content. Name your podcast, download all content, and get insights.",
    imageUrl: podcastIntelImg,
  },
  {
    title: "Algorithmic Trading",
    category: ["Algo Trading"],
    techStack: ["Python"],
    links: [
      {
        name: "Algo 0",
        url: "https://github.com/0xtomotech/algo_trading_project0",
      },
      {
        name: "Algo 1",
        url: "https://github.com/0xtomotech/algo_trading_project1",
      },
      {
        name: "Strategies",
        url: "https://github.com/0xtomotech/trading_strategies",
      },
    ],
    rating: "must have",
    description:
      "Suite of algorithmic trading projects showcasing various strategies. Demonstrates proficiency in financial modeling, data analysis, and automated trading system development.",
    imageUrl: algoTradingImg,
  },
  {
    title: "Ultra Marathon Runners Analysis",
    category: ["Data Analytics"],
    techStack: ["Python", "Pandas"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/0xtomotech/data-analysis-um-runners",
      },
    ],
    rating: "must have",
    description:
      "In-depth analysis of ultra marathon runners' data over two decades. Demonstrates data manipulation, exploratory analysis, and visualization skills using Python and Pandas.",
    imageUrl: umRunners,
  },
  {
    title: "Hobby Site for Family Doggos",
    category: ["Web Dev"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/portfolio_demo" },
      { name: "Live Demo", url: "https://portfolio-popirizsi.vercel.app/" },
    ],
    rating: "must have",
    description:
      "Interactive website showcasing family doggos. Demonstrates skills in creating visually appealing web experiences using Next.js, Tailwind CSS, and Framer Motion.",
    imageUrl: popiRizsi,
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
      "Modern personal portfolio showcasing projects and skills. Demonstrates proficiency in React and Next.js with responsive design and smooth user experience.",
    imageUrl: portfolioImg,
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
      "Innovative web application showcasing advanced React and TypeScript usage. Features complex state management and efficient rendering techniques.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "T3 Gallery",
    category: ["Web Dev"],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/t3gallery_demo" },
    ],
    rating: "not relevant",
    description:
      "Modern gallery app built with T3 stack, integrating TypeScript, Tailwind, and tRPC. Exemplifies best practices in type-safe, full-stack Next.js development.",
    imageUrl: sampleProjectImg,
  },
  {
    title: "Control Freak",
    category: ["Web Dev"],
    techStack: ["Django", "React"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/control_freak" },
    ],
    rating: "not relevant",
    description:
      "Collaborative playlist management app for Spotify built with Django and React. Showcases full-stack development skills with focus on intuitive UI and robust backend systems.",
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
    rating: "nice to have",
    description:
      "Comprehensive NBA data analysis project utilizing various APIs. Demonstrates skills in data extraction, cleaning, analysis, and visualization of complex sports statistics.",
    imageUrl: nbaTrendsImg,
  },
  {
    title: "Simple Scraper",
    category: ["Data Analytics"],
    techStack: ["Python"],
    links: [
      { name: "GitHub", url: "https://github.com/0xtomotech/simple_scraper" },
    ],
    rating: "not relevant",
    description:
      "Versatile web scraping tool demonstrating skills in data extraction, HTML parsing, and efficient information collection from various web structures.",
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
      "E-commerce platform for custom phone cases. Demonstrates skills in building online stores, product customization, and secure checkout processes.",
    imageUrl: customPhoneCaseImg,
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
      "Unique Mario-style platformer developed with Godot engine. Showcases game development skills in level design, character controls, and mechanics implementation.",
    imageUrl: firstGameImg,
  },
];

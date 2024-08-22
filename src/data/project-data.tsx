export interface Project {
  title: string;
  summary: string;
  category: string[];
  techStack: string[];
  project1: {
    name: string;
    githubRepo: string;
  };
  project2?: {
    name: string;
    githubRepo: string;
  };
  rating: "must have" | "maybe" | "not needed";
  description: string;
  imageUrl: string;
}

export const projectsData: Project[] = [
  {
    title: "Hooper Stats",
    summary: "Full-stack basketball analytics platform",
    category: ["Web Dev", "Data Analytics"],
    techStack: ["React", "Typescript", "Next.js", "Tailwind", "Django"],
    project1: {
      name: "Frontend",
      githubRepo: "https://github.com/0xtomotech/hooper-stats-frontend",
    },
    project2: {
      name: "Backend",
      githubRepo: "https://github.com/0xtomotech/hooper-stats-backend",
    },
    rating: "must have",
    description:
      "A comprehensive basketball statistics platform that combines web development and data analytics. This project showcases full-stack skills with a React frontend and Django backend, providing in-depth insights into basketball performance metrics.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "Portfolio Site",
    summary: "Personal showcase of skills and projects",
    category: ["Web Dev"],
    techStack: ["React", "Typescript", "Next.js", "Tailwind"],
    project1: {
      name: "Portfolio App",
      githubRepo: "https://github.com/0xtomotech/portfolio-site",
    },
    rating: "must have",
    description:
      "A personal portfolio website built with modern web technologies to showcase projects and skills. This site demonstrates proficiency in React and Next.js development, featuring a responsive design and smooth user experience.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "Quanta",
    summary: "Innovative web app with advanced React features",
    category: ["Web Dev"],
    techStack: ["React", "Typescript", "Next.js", "Tailwind"],
    project1: {
      name: "Quanta App",
      githubRepo: "https://github.com/0xtomotech/project-quanta",
    },
    rating: "must have",
    description:
      "An innovative web application leveraging cutting-edge technologies. Quanta showcases advanced React and TypeScript usage in a real-world project, demonstrating complex state management and efficient rendering techniques.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "T3 Gallery",
    summary: "Modern gallery app using T3 stack",
    category: ["Web Dev"],
    techStack: ["React", "Typescript", "Next.js", "Tailwind"],
    project1: {
      name: "T3 Gallery Demo App",
      githubRepo: "https://github.com/0xtomotech/t3gallery_demo",
    },
    rating: "maybe",
    description:
      "A modern gallery application built using the T3 stack, showcasing integration of TypeScript, Tailwind, and tRPC. This project demonstrates best practices in building type-safe, full-stack applications with Next.js.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "First Game",
    summary: "Mario-style platformer using Godot engine",
    category: ["Game Dev"],
    techStack: ["Godot", "GD Script"],
    project1: {
      name: "Mario Game But Different",
      githubRepo: "https://github.com/0xtomotech/First-Game",
    },
    rating: "must have",
    description:
      "A unique take on the classic Mario-style platformer, developed using the Godot engine and GDScript. This project showcases game development skills, including level design, character controls, and game mechanics implementation.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "Custom Phone Case Shop",
    summary: "E-commerce platform for custom phone cases",
    category: ["Web Dev"],
    techStack: ["React", "Typescript", "Next.js", "Tailwind"],
    project1: {
      name: "Custom Phone Case Shop",
      githubRepo: "https://github.com/0xtomotech/custom_phone_case_shop",
    },
    rating: "maybe",
    description:
      "An e-commerce platform specializing in custom phone cases. This project demonstrates skills in building online stores, handling product customization, and implementing secure checkout processes using modern web technologies.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "Algorithmic Trading",
    summary: "Suite of Python-based trading strategies",
    category: ["Algo Trading"],
    techStack: ["Python"],
    project1: {
      name: "Algo Trading Project 1",
      githubRepo: "https://github.com/0xtomotech/algo_trading_project0",
    },
    project2: {
      name: "Algo Trading Project 2",
      githubRepo: "https://github.com/0xtomotech/algo_trading_project1",
    },
    rating: "must have",
    description:
      "A suite of algorithmic trading projects showcasing various strategies and implementations. These projects demonstrate proficiency in financial modeling, data analysis, and automated trading system development using Python.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "Algo Trading Strategies",
    summary: "Advanced quantitative finance implementations",
    category: ["Algo Trading"],
    techStack: ["Python"],
    project1: {
      name: "Algo Trading Strategies",
      githubRepo: "https://github.com/0xtomotech/trading_strategies",
    },
    rating: "must have",
    description:
      "A collection of advanced algorithmic trading strategies implemented in Python. This project showcases expertise in quantitative finance, statistical analysis, and machine learning applied to financial markets.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "Control Freak",
    summary: "Comprehensive task management application",
    category: ["Web Dev"],
    techStack: ["Django", "React"],
    project1: {
      name: "Control Freak App",
      githubRepo: "https://github.com/0xtomotech/control_freak",
    },
    rating: "must have",
    description:
      "A comprehensive task management and control application built with Django and React. This project demonstrates full-stack development skills, focusing on creating intuitive user interfaces and robust backend systems.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "Basket Brains",
    summary: "Advanced basketball analytics platform",
    category: ["Web Dev", "Data Analytics"],
    techStack: [
      "Python",
      "Django",
      "React",
      "Typescript",
      "Next.js",
      "Tailwind",
    ],
    project1: {
      name: "Basket Brains Landing Page",
      githubRepo: "TBC",
    },
    rating: "must have",
    description:
      "An advanced basketball analytics platform combining web development and data science. This project showcases full-stack skills, data visualization, and sports analytics, providing insights for basketball enthusiasts and professionals.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "NBA Trends, API & Data Processing",
    summary: "Comprehensive NBA data analysis toolkit",
    category: ["Data Analytics"],
    techStack: ["Python"],
    project1: {
      name: "NBA API Project 1",
      githubRepo: "https://github.com/0xtomotech/nba_api_project1",
    },
    project2: {
      name: "NBA API Project 2",
      githubRepo: "https://github.com/0xtomotech/nba_api_project0",
    },
    rating: "must have",
    description:
      "A comprehensive NBA data analysis project utilizing various APIs and data processing techniques. This project demonstrates skills in data extraction, cleaning, analysis, and visualization of complex sports statistics.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "Podcast Intel",
    summary: "AI-powered podcast analysis tool",
    category: ["AI", "Data Analytics"],
    techStack: ["Python"],
    project1: {
      name: "Podcast Intel App",
      githubRepo: "https://github.com/0xtomotech/podcast_intel",
    },
    rating: "must have",
    description:
      "An AI-powered podcast analysis tool that extracts insights from audio content. This project showcases skills in natural language processing, audio processing, and machine learning to provide valuable analytics for podcast creators and listeners.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "Simple Scraper",
    summary: "Versatile web scraping tool in Python",
    category: ["Data Analytics"],
    techStack: ["Python"],
    project1: {
      name: "Scraper App",
      githubRepo: "https://github.com/0xtomotech/simple_scraper",
    },
    rating: "maybe",
    description:
      "A versatile web scraping tool built in Python. This project demonstrates skills in data extraction, HTML parsing, and handling various web structures to collect and process information from websites efficiently.",
    imageUrl: "https://picsum.photos/300/200",
  },
  {
    title: "CS50W",
    summary: "Web development projects from Harvard's CS50W",
    category: ["Web Dev", "CS50"],
    techStack: ["JS", "Typescript", "React", "Python", "Django", "CSS"],
    project1: {
      name: "Course projects",
      githubRepo: "https://github.com/0xtomotech/CS50w-projects",
    },
    rating: "must have",
    description:
      "A collection of projects completed as part of Harvard's CS50 Web Programming course. These projects showcase a wide range of web development skills, from frontend design to backend implementation using various technologies.",
    imageUrl: "https://picsum.photos/300/200",
  },
];

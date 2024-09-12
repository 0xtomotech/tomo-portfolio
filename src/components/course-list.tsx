import React from "react";
import { Badge } from "@/components/ui/badge";
import { IconBrandGithub } from "@tabler/icons-react";

const courses = [
  {
    name: "CS50x: Introduction to Computer Science",
    institution: "Harvard",
    url: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
    completed: true,
  },
  {
    name: "CS50P: Programming with Python",
    institution: "Harvard",
    url: "https://www.harvardonline.harvard.edu/course/cs50s-introduction-programming-python",
    completed: true,
  },
  {
    name: "CS50W: Web Programming with Python and JavaScript",
    institution: "Harvard",
    url: "https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript",
    completed: true,
  },
];

const sources = [
  { name: "Corey Shafer", url: "https://www.youtube.com/user/schafer5" },
  {
    name: "FreeCodeCamp",
    url: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
  },
  { name: "Python 4 Everybody", url: "https://www.py4e.com/" },
  {
    name: "Javascript Mastery",
    url: "https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A",
  },
  { name: "Web Dev Cody", url: "https://www.youtube.com/@WebDevCody" },
  {
    name: "Web Dev Simplified",
    url: "https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw",
  },
  {
    name: "Fireship",
    url: "https://www.youtube.com/@Fireship",
  },
  {
    name: "Daily.dev",
    url: "https://daily.dev/",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/",
  },
  {
    name: "Hacker News",
    url: "https://news.ycombinator.com/",
  },
  {
    name: "Product Hunt",
    url: "https://www.producthunt.com/topics/developer-tools",
  },
  {
    name: "Indie Hackers",
    url: "https://www.indiehackers.com/",
  },
];

const BadgeList: React.FC<{
  items: typeof courses | typeof sources;
  title: string;
  isCompleted?: boolean;
}> = ({ items, title, isCompleted = false }) => (
  <>
    <h3 className="mb-2 text-base font-semibold">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge
            variant={isCompleted ? "default" : "outline"}
            className="font-medium text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:shadow-md"
          >
            {item.name}
          </Badge>
        </a>
      ))}
    </div>
  </>
);

const GitHubSection: React.FC = () => (
  <>
    <h3 className="mb-2 text-base font-semibold">Built Interesting Projects</h3>
    <a
      href="https://github.com/0xtomotech" // Replace with your actual GitHub profile URL
      target="_blank"
      rel="noopener noreferrer"
    >
      <Badge
        variant="default"
        className="inline-flex items-center gap-2 text-xl font-medium text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:shadow-md"
      >
        <IconBrandGithub className="h-6 w-6" />
        <span>Check out my GitHub</span>
      </Badge>
    </a>
  </>
);

export const CourseList: React.FC = () => {
  return (
    <div className="flex h-full flex-col space-y-4 rounded-lg bg-muted p-4">
      <BadgeList items={courses} title="Completed Courses" isCompleted={true} />
      <div className="border-t border-border"></div>
      <GitHubSection />
      <div className="border-t border-border"></div>
      <BadgeList items={sources} title="Favourite sources of wisdom" />
    </div>
  );
};

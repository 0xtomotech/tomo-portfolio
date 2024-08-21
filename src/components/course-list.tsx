import React from "react";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    name: "CS50x by Harvard",
    institution: "Harvard",
    url: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
  },
  {
    name: "CS50P: Programming with Python",
    institution: "Harvard",
    url: "https://www.harvardonline.harvard.edu/course/cs50s-introduction-programming-python",
  },
  {
    name: "CS50W: Web Programming with Python and JavaScript",
    institution: "Harvard",
    url: "https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript",
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
    name: "Josh tried coding",
    url: "https://www.youtube.com/@joshtriedcoding",
  },
];

const LinkList: React.FC<{
  items: typeof courses | typeof sources;
  title: string;
}> = ({ items, title }) => (
  <>
    <h3 className="pb-4 text-base font-medium">{title}</h3>
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <motion.a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-foreground"
          whileHover={{ y: -2 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MoveUpRight size={12} />
          </motion.span>
          <span>{item.name}</span>
        </motion.a>
      ))}
    </div>
  </>
);

export const CourseList: React.FC = () => {
  return (
    <div className="flex h-full flex-col rounded-lg bg-muted p-4">
      <LinkList items={courses} title="Completed Courses" />
      <div className="my-4 border-t border-border"></div>
      <LinkList items={sources} title="Favourite sources of wisdom" />
    </div>
  );
};

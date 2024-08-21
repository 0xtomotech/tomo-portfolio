"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

const links = [
  { name: "Home", hash: "#home" },
  { name: "Specialites", hash: "#specialites" },
  { name: "Projects", hash: "#projects" },
  { name: "About", hash: "#about" },
  { name: "Contact", hash: "#contact" },
];

const socialLinks = [
  { name: "YouTube", url: "https://youtube.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full border-t border-border bg-background">
      <div className="absolute inset-0 border-t border-border bg-background shadow-lg shadow-black/[0.03] backdrop-blur-md after:absolute after:inset-0 after:opacity-0 after:shadow-[0_0_15px_rgba(255,255,255,0.1)] dark:border-t-white/10 dark:shadow-none dark:ring-1 dark:ring-white/10 dark:backdrop-blur-md dark:after:opacity-100"></div>
      <div className="relative mx-auto max-w-7xl px-5 py-6 lg:px-20">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold sm:text-base">
              [Built by <span className="text-primary">Tomo</span>]{" "}
            </h2>
            <p className="pr-4 text-xs text-muted-foreground sm:text-sm">
              & made with ❤️
            </p>
            <p className="text-xs text-muted-foreground sm:text-sm">
              © 2024. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className="text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-muted-foreground hover:text-foreground"
                whileHover={{ y: -2 }}
              >
                <span>{link.name}</span>
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MoveUpRight size={16} />
                </motion.span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

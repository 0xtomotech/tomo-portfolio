import About from "@/components/about";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Specialities from "@/components/specialities";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Specialities />
      <Projects />
      <About />
      <CTA />
    </main>
  );
}

import About from "@/components/about";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Specialities from "@/components/specialities";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      {/* <Specialities /> */}
      <Projects />
      <About />
      <CTA />
    </main>
  );
}

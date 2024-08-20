import Hero from "@/components/hero";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="container">
        <div className="flex w-full items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              (Build With <span className="text-primary">Tomo</span>)
            </h1>
            <h1 className="text-4xl font-bold">Clash Grotesk Bold</h1>
            <h2 className="text-3xl font-semibold">Clash Grotesk Semibold</h2>
            <h2 className="bg-primary text-3xl font-semibold text-primary-foreground">
              Clash Grotesk Semibold
            </h2>
            <h3 className="text-2xl font-medium">Clash Grotesk Medium</h3>
            <p className="text-xl font-regular">Clash Grotesk Regular</p>
            <p className="text-lg">
              This is the default text, which will use Clash Grotesk Regular.
            </p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </main>
  );
}

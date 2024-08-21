import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <section className="pb-[10rem]" id="home">
          <div className="flex flex-col items-start">
            <h1 className="mb-2 max-w-[800px] text-4xl font-bold sm:text-7xl">
              Hello there... I&apos;m <span className="text-primary">Tomo</span>
              !
            </h1>
            <h1 className="mb-8 max-w-[600px] text-3xl font-medium sm:text-5xl">
              A developer, problem solver, and business expert.
            </h1>
            <p className="mb-2 max-w-[600px] text-xl text-muted-foreground">
              I love webdev, data analytics and I&apos;m passionate about
              developing ideas and building projects.
            </p>
            <p className="mb-8 max-w-[600px] text-xl text-muted-foreground">
              Let me show you a glimpse of my world, and who knows, maybe one
              day we get to work together?
            </p>
            <Button variant="default" size="default" className="font-semibold">
              Contact me here!
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

// Import your PNG assets here
import starsBgDark from "@/assets/stars.png";
import starsBgLight from "@/assets/black-stars.png";
import gridLines from "@/assets/grid-lines.png";
import { MailOpen, Phone, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import ContactButtons from "./contact-buttons";
import { sendEmail } from "@/actions/send-email";
import SubmitBtn from "./submit-button";

const useRelativeMousePosition = (to: React.RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = useCallback(
    (event: MouseEvent) => {
      if (!to.current) return;
      const { top, left } = to.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [to, mouseX, mouseY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [updateMousePosition]);

  return [mouseX, mouseY];
};

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  const starsBg = theme === "dark" ? starsBgDark : starsBgLight;

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <section ref={sectionRef} className="py-20" id="contact">
          <motion.div
            ref={borderedDivRef}
            className="group relative overflow-hidden rounded-xl border border-primary/15 py-24"
            animate={{
              backgroundPositionX: starsBg.width,
            }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
            }}
            style={{
              backgroundPositionY,
              backgroundImage: `url(${starsBg.src})`,
            }}
          >
            {/* When not hovered */}
            <div
              className="absolute inset-0 bg-primary bg-blend-overlay transition duration-700 [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0"
              style={{
                backgroundImage: `url(${gridLines.src})`,
              }}
            ></div>
            {/* When hovered */}
            <motion.div
              className="absolute inset-0 bg-primary opacity-0 bg-blend-overlay transition duration-700 group-hover:opacity-100"
              style={{
                maskImage,
                backgroundImage: `url(${gridLines.src})`,
              }}
            ></motion.div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-8">
                <div className="flex flex-col justify-start md:col-span-3">
                  <h1 className="mb-4 text-6xl font-bold text-foreground">
                    Let&apos;s create something amazing together!
                  </h1>

                  <p className="mb-6 text-xl text-foreground">
                    Ready to bring your next project to life? Let&apos;s connect
                    and discuss how I can help you achieve your goals.
                  </p>

                  <ContactButtons />
                </div>
                <div className="flex flex-col items-start md:col-span-2">
                  <h1 className="mb-4 text-xl font-medium text-foreground">
                    Shoot me an email or reach out here!
                  </h1>
                  <form
                    className="w-full space-y-4"
                    action={async (formData) => {
                      const { data, error } = await sendEmail(formData);
                      if (error) {
                        toast.error(error);
                        return;
                      } else {
                        toast.success("Message sent!", {
                          duration: 2000,
                          icon: <Check className="h-4 w-4" />,
                        });
                        resetForm();
                      }
                    }}
                  >
                    <Input
                      type="email"
                      name="senderEmail"
                      maxLength={500}
                      placeholder="Your email"
                      required
                      className="bg-background text-foreground placeholder:text-muted-foreground"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <Input
                      type="text"
                      placeholder="Subject"
                      required
                      className="bg-background text-foreground placeholder:text-muted-foreground"
                    /> */}
                    <textarea
                      className="h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Your message"
                      name="message"
                      maxLength={1000}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className="justify-start">
                      <SubmitBtn />
                      {/* <Button
                        type="submit"
                        className="bg-primary font-semibold text-primary-foreground transition duration-300 hover:bg-foreground/90 hover:text-background"
                      >
                        Send Message
                      </Button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default CTA;

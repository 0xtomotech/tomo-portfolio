import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import your logo images here
import logo1 from "@/assets/amazon-black.png";
import logo2 from "@/assets/tesla-black.png";
import logo3 from "@/assets/bosch-black.png";

const logos = [logo1, logo2, logo3];

export const LogoShowcase: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-muted py-8 dark:bg-primary">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{
            translateX: "-50%",
          }}
          animate={{
            translateX: "0%",
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex shrink-0 -translate-x-1/2 gap-8"
        >
          {logos.concat(logos).map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex h-12 w-24 shrink-0 items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={96}
                height={48}
                style={{ width: "auto", height: "100%", objectFit: "contain" }}
                sizes="96px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

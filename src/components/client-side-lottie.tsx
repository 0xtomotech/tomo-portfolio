"use client";

import React from "react";
import dynamic from "next/dynamic";

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  },
);

interface AnimationProps {
  animationData: any;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
}

const ClientSideLottie: React.FC<AnimationProps> = ({
  animationData,
  className,
  autoplay = true,
  loop = false,
}) => {
  return (
    <LottiePlayer
      autoplay={autoplay}
      loop={loop}
      src={animationData}
      style={{ width: "100%", height: "100%" }}
      className={className}
    />
  );
};

export default ClientSideLottie;

// VERSION 3
// "use client";

// import React, { useRef } from "react";
// import { Player } from "@lottiefiles/react-lottie-player";

// interface AnimationProps {
//   animationData: any;
//   className?: string;
//   autoplay?: boolean;
//   loop?: boolean;
// }

// const ClientSideLottie: React.FC<AnimationProps> = ({
//   animationData,
//   className,
//   autoplay = true,
//   loop = false,
// }) => {
//   const playerRef = useRef<Player>(null);

//   return (
//     <Player
//       ref={playerRef}
//       autoplay={autoplay}
//       loop={loop}
//       src={animationData}
//       className={className}
//     />
//   );
// };

// export default ClientSideLottie;

// VERSION 2

// import React from "react";
// import dynamic from "next/dynamic";

// const LottieWrapper = dynamic(() => import("lottie-react"), { ssr: false });

// interface AnimationProps {
//   animationData: any;
//   className?: string;
//   lottieRef?: React.RefObject<any>;
//   autoplay?: boolean;
//   loop?: boolean;
// }

// const ClientSideLottie: React.FC<AnimationProps> = ({
//   animationData,
//   className,
//   lottieRef,
//   autoplay = true,
//   loop = true,
// }) => {
//   return (
//     <LottieWrapper
//       animationData={animationData}
//       className={className}
//       lottieRef={lottieRef}
//       autoplay={autoplay}
//       loop={loop}
//     />
//   );
// };

// export default ClientSideLottie;

// VERSION

// import React from "react";
// import dynamic from "next/dynamic";

// const LottieWrapper = dynamic(() => import("lottie-react"), { ssr: false });

// interface AnimationProps {
//   animationData: any;
//   className?: string;
// }

// const ClientSideLottie: React.FC<AnimationProps> = ({
//   animationData,
//   className,
// }) => {
//   return <LottieWrapper animationData={animationData} className={className} />;
// };

// export default ClientSideLottie;

import React from "react";
import dynamic from "next/dynamic";

const LottieWrapper = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimationProps {
  animationData: any;
  className?: string;
}

const ClientSideLottie: React.FC<AnimationProps> = ({
  animationData,
  className,
}) => {
  return <LottieWrapper animationData={animationData} className={className} />;
};

export default ClientSideLottie;

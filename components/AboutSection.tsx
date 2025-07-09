"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function AboutSection() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <BackgroundGradientAnimation>
          <div className="h-screen absolute w-1/2 flex items-center justify-center left-1/4">
            <span className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl font-extrabold z-10">
              In the future, I aim to become a skilled computer scientist, using
              technology to solve real-world problems and make a positive impact
              on society. I am passionate about innovation, and I’m committed to
              continuous learning and growth in the field of technology.
            </span>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </>
  );
}

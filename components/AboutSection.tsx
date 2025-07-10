"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function AboutSection() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <BackgroundGradientAnimation>
          <div className="h-screen absolute flex items-center justify-center px-4 w-full md:w-1/2 md:left-1/4">
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-xl md:text-4xl lg:text-5xl">
              <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                In the future, I aim to become a skilled computer scientist,
                using technology to solve real-world problems and make a
                positive impact on society. I am passionate about innovation,
                and I’m committed to continuous learning and growth in the field
                of technology.
              </p>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </>
  );
}

"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ColourfulText from "@/components/ui/colourful-text";
import { FlipWords } from "@/components/ui/flip-words";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <BackgroundBeamsWithCollision className="h-screen!">
          <div className="mt-5 flex flex-col items-center w-full justify-center">
            <div className="flex items-center justify-center w-full mb-5">
              <span className="text-5xl font-extrabold">
                Hello, I am <ColourfulText text="Çınar" />
              </span>
            </div>
            <div className="text-muted-foreground text-3xl mx-auto flex items-center ">
              I am a
              <FlipWords
                words={["Highschooler", "Future Developer", "Future Scientist"]}
              />
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </>
  );
}

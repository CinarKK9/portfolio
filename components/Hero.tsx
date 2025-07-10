"use client";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="mt-5 flex flex-col items-center w-full justify-center z-10">
          <div className="flex items-center justify-center w-full mb-5">
            <span className="lg:text-8xl text-5xl font-extrabold">
              Hello, I am{" "}
              <span className="bg-gradient-to-r from-purple-800 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                Çınar
              </span>
            </span>
          </div>
          <div className="text-muted-foreground lg:text-5xl text-3xl mx-auto flex items-center gap-2">
            I am a
            <ContainerTextFlip
              words={["Highschooler", "Future Developer", "Future Scientist"]}
            />
          </div>
        </div>
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>
    </>
  );
}

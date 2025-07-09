"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const items = [
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <div className="fixed w-full backdrop-blur-2xl flex items-center justify-center p-4 border-b z-50">
        <div className="absolute left-4">
          <span className="font-bold text-xl">CK ✧</span>
        </div>
        <div>
          {items.map((item, index) => (
            <Button variant={"ghost"} key={index}>
              {item.label}
            </Button>
          ))}
        </div>
        <div className="absolute right-4">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

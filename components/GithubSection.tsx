"use client";

import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

export default function GithubSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-full absolute -z-10">
        <TextHoverEffect text="GITHUB" />
      </div>
      {children}
    </>
  );
}

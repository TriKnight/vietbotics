"use client";
import React from "react";
import { Boxes } from "./ui/BackGroundBox";
import { cn } from "@/utils/cn";

const BackGroundBoxes = () => {
  return (
    <div className="h-20 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
export default BackGroundBoxes;
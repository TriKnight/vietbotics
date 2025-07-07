"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";

const WobbleCardInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-1200 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            AI-Powered robotics for the entire logistics industry.
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With deep technology and cutting-edge AI, we are able to provide the best robotics picking and placing solutions for your business.
          </p>
        </div>
        <Image
          src="/picking.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-blue-1000 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Cutting-edge Digital Twins platform 
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Creates highly accurate virtual replicas of robotic systems. Transforming how robotic systems are designed, tested, and operated.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-1100 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Vision-Embodied Technology
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Develops cutting-edge computer vision algorithms that allow robots to perceive and understand their surroundings with high accuracy.
          </p>
        </div>
        <Image
          src="/AIparts2.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
export default WobbleCardInfo;

"use client";

import React from "react";
import { leftPadCtx } from "./MannersIntroductionParent";

/**
 * `IntroText` shows the biggest piece of text on the
 * very first part of the homepage.
 *
 * @returns the main that displays on the homepage
 */
export default function IntroText() {
  const syncLeftPos = React.useContext(leftPadCtx); // Syncronized left amt... wonder how here

  return (
    <div className="absolute w-[90%] text-pretty md:w-[600px] top-[340px] md:top-[140px] lg:top-[150px] md:left-6 lg:left-16 md:pt-4">
      <p className="font-medium text-5xl leading-none ">
        Discover the Elegence of Modern Manners
      </p>{" "}
      <p className="text-xl font-extralight w-full mt-1 leading-tight">
        Learn the timeless art of etiquette and cultivate poise and confidence.
      </p>
    </div>
  );
}

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
    <p className="absolute text-3xl w-[90%] md:w-[460px] top-[340px] md:top-[160px] lg:top-[130px] font-medium md:left-6 lg:left-8 leading-snug md:p-4">
      I kept imagining best way to lure people into register Cotollion, but now
      unsure if seems annoying
      <br />
      <span className="text-xl ml-2 w-full font-normal ">
        - plus a signature sign off <br />
      </span>
    </p>
  );
}

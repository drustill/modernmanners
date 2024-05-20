"use client";

import React from "react";
import { useState } from "react";

import HomePageInterestButtons from "./HomePageInterestButtons";
import IntroText from "./IntroText";

// This will hold the amount of space to the left
// for the largest screen size in all components
// there should be of both the text and the buttons
export const leftPadCtx = React.createContext(0);

/**
 * Parent is the important part here - just so we can
 * share the width between text and buttons
 */
export default function MannersIntroductionParent() {
  const [leftPad, setLeftPad] = useState(6); // 6% of the screen

  return (
    <leftPadCtx.Provider value={leftPad}>
      <div className="w-full relative">
        <IntroText />
        <HomePageInterestButtons />
      </div>
    </leftPadCtx.Provider>
  );
}

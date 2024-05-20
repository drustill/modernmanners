"use client";

import React from "react";
import { leftPadCtx } from "./MannersIntroductionParent";

export default function HomePageInterestButtons() {
  const syncedLeft = React.useContext(leftPadCtx); // Same syncronize left pixel amount

  return (
    <div
      className={`flex absolute top-[37vh] left-16 h-40 w-[400px] gap-x-0 items-start justify-start`}
    >
      {/** Goes to Cotillion channel */}
      <button className="flex items-center justify-center shadow-md py-3 px-7 hover:text-zinc-400 hover:bg-zinc-300 hover:scale-105 duration-150 bg-zinc-200 text-zinc-900 font-medium rounded-md">
        Register here
      </button>
    </div>
  );
}

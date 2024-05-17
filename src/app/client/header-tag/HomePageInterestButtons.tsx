"use client";

import React, { useEffect } from "react";
import { leftPadCtx } from "./MannersIntroductionParent";

export default function HomePageInterestButtons() {
  const syncedLeft = React.useContext(leftPadCtx); // Same small syncronize
  useEffect(() => {
    console.log("Sync Left" + syncedLeft);
  }, [syncedLeft]);

  return (
    <div className={`flex w-max gap-x-4 absolute bottom-10 left-10 `}>
      {/** Goes to Cotillion channel */}
      <button className="flex items-center justify-center w-[110px] h-10 hover:text-zinc-400 hover:bg-zinc-800 duration-150 bg-zinc-700 text-zinc-900 font-medium rounded-md">
        Read more
      </button>

      {/** One of resources or company */}
      <button className="flex items-center justify-center underline underline-offset-3 hover:text-zinc-400 w-[110px] h-10 font-light rounded-sm">
        Register here
      </button>
    </div>
  );
}

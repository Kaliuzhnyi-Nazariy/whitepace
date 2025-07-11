import React from "react";
import LegalAndSettings from "./LegalAndSettings";
import SocialMedia from "./SocialMedia";

const Bottom = ({ listItemStyles }: { listItemStyles: string }) => {
  return (
    <div className="flex flex-col gap-5 min-[1152px]:grid min-[1152px]:grid-cols-3 min-[1152px]:grid-rows-2 min-[1152px]:gap-5 min-[1152px]:mt-5 ">
      <LegalAndSettings
        listItemStyles={listItemStyles}
        extraStyles="min-[1152px]:col-span-2 min-[1152px]:row-2 min-[1152px]:mt-0"
      />
      <div className="w-full h-[1px] bg-[var(--foreground)] mt-5 opacity-30 min-[1152px]:row-1 min-[1152px]:col-span-full justify-s "></div>
      <SocialMedia extraStyles="md:justify-start min-[1152px]:col-3 min-[1152px]:row-2 min-[1152px]:justify-self-end min-[1152px]:mt-0 " />
    </div>
  );
};

export default Bottom;

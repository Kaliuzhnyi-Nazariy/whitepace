import React from "react";

const PhotoSkeleton = ({
  topMargin,
  bottomMargin,
  extraStyle = "",
}: {
  topMargin?: number;
  bottomMargin?: number;
  extraStyle?: string;
}) => {
  const mtClass = topMargin ? `mt-[${topMargin}px]` : "";
  const mbClass = bottomMargin ? `mb-[${bottomMargin}px]` : "";

  return (
    <div
      className={`max-md:w-[286px] max-md:h-[191px] bg-[var(--lightblue-second)] mx-auto z-10 max-[1152px]:w-[551px] max-[1152px]:h-[367px] min-[1152px]:w-[526px] min-[1152px]:h-[350px]
        min-[1440px]:w-[719px] min-[1440px]:h-[448px] ${mtClass} ${mbClass}
         ${extraStyle}`}
    />
  );
};

export default PhotoSkeleton;

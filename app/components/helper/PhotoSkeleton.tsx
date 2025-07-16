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

  const mobStyles = `w-[286px] h-[191px] mt-[100px]`;

  const tabletStyles = `min-[768px]:w-[551px] min-[768px]:h-[367px] `;

  const smallLaptopStyles = `min-[1152px]:m-0 min-[1152px]:w-[526px] min-[1152px]:h-[350px] `;

  const laptopStyle = "min-[1440px]:w-[685px] min-[1440px]:h-[456px]";

  const desctopStyles = `min-[1920px]:w-[824px] min-[1920px]:h-[549px]`;

  return (
    <div
      className={`bg-[var(--lightblue-second)] mx-auto z-10 ${mobStyles} ${tabletStyles} ${smallLaptopStyles} ${laptopStyle} ${desctopStyles} ${mtClass} ${mbClass} ${extraStyle}
        `}
    />
  );
};

export default PhotoSkeleton;

import React from "react";

const PhotoSkeleton = ({
  topMargin,
  bottomMargin,
  extraStyle = "",
  smLpW,
  smLpH,
  lpW,
  lpH,
  descW,
  descH,
}: {
  topMargin?: number;
  bottomMargin?: number;
  extraStyle?: string;
  smLpW?: number;
  smLpH?: number;
  lpW?: number;
  lpH?: number;
  descW?: number;
  descH?: number;
}) => {
  const mtClass = topMargin ? `mt-[${topMargin}px]` : "";
  const mbClass = bottomMargin ? `mb-[${bottomMargin}px]` : "";

  return (
    <div
      className={`max-md:w-[286px] max-md:h-[191px] bg-[var(--lightblue-second)] mx-auto z-10 max-[1152px]:w-[551px] max-[1152px]:h-[367px] min-[1152px]:w-[${
        smLpW ? `${smLpW}px` : "526px"
      }] min-[1152px]:h-[${smLpH ? `${smLpH}px` : "350px"}] min-[1440px]:w-[${
        lpW ? `${lpW}px` : "719px"
      }] min-[1440px]:h-[${lpH ? `${lpH}px` : "448px"}] ${
        descW && `w-[${descW}]`
      } ${descH && `h-[${descH}]`}
        ${mtClass} ${mbClass} ${extraStyle}`}
    />
  );
};

export default PhotoSkeleton;

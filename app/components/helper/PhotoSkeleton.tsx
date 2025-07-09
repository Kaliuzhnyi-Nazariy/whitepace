import React from "react";

const PhotoSkeleton = ({
  topMargin,
  bottomMargin,
}: {
  topMargin?: number;
  bottomMargin?: number;
}) => {
  return (
    <div
      className={`w-[286px] h-[191px] bg-[var(--lightblue-second)] z-10 `}
      style={{
        marginTop: topMargin,
        marginBottom: bottomMargin,
      }}
    />
  );
};

export default PhotoSkeleton;

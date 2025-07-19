import React from "react";

const Text = ({
  children,
  extraStyles,
  newMT,
  noTracking,
}: // newFontSize,
{
  children: React.ReactNode;
  extraStyles?: string;
  newMT?: string;
  noTracking?: boolean;
  newFontSize?: string;
}) => {
  // const newFont

  return (
    <p
      className={` text-[18px]  ${
        extraStyles ? extraStyles : "font-light text-center"
      } ${newMT ? newMT : "mt-6"} ${noTracking ? "" : "tracking-[-0.02em]"}`}
    >
      {children}
    </p>
  );
};

export default Text;

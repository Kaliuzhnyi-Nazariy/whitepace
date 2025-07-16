import React from "react";

const Title = ({
  children,
  extraStyles = "",
  isHero = false,
  newFontSize,
  changedLetSpace = "",
}: {
  children: React.ReactNode;
  extraStyles?: string;
  isHero?: boolean;
  newFontSize?: string;
  changedLetSpace?: string;
}) => {
  const newFontSz = newFontSize ? newFontSize : "text-4xl";
  const newLead = changedLetSpace ? changedLetSpace : "min-[1152px]:leading-20";

  return (
    <h2
      className={`${extraStyles && extraStyles} ${
        newFontSz
          ? newFontSz
          : "min-[768px]:text-[54px] min-[1152px]:text-[64px]"
      }  font-bold relative z-[3] text-center ${newLead} tracking-[-0.02em] ${
        isHero ? "" : "min-[1440px]:text-[72px]"
      }  `}
    >
      {children}
    </h2>
  );
};

export default Title;

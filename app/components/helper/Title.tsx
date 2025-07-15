import React from "react";

const Title = ({
  children,
  extraStyles = "",
  isHero = false,
}: {
  children: React.ReactNode;
  extraStyles?: string;
  isHero?: boolean;
}) => {
  return (
    <h2
      className={`${
        extraStyles && extraStyles
      } max-md:text-4xl max-[1152px]:text-[54px] min-[1152px]:text-[64px] font-bold relative z-[3] text-center min-[1152px]:leading-20 tracking-[-0.02em] ${
        isHero ? "" : "min-[1440px]:text-[72px]"
      }  `}
    >
      {children}
    </h2>
  );
};

export default Title;

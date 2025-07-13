import React from "react";

const Section = ({
  children,
  extraStyles = "",
  flexStyle = "",
}: {
  children: React.ReactNode;
  extraStyles?: string;
  flexStyle?: string;
}) => {
  return (
    <section
      className={`${extraStyles && extraStyles} flex flex-col items-center`}
    >
      <div
        className={`max-md:w-[288px] max-[1151px]:w-[704px] mx-4 max-[1152px]:mx-5 max-[1440px]:mx-8 min-[1152px]:w-[1088px] min-[1440px]:w-[1376px] min-[1920px]:w-[1480px] ${flexStyle}`}
      >
        {children}
      </div>
      {/* <div className="px-4">{children}</div> */}
    </section>
  );
};

export default Section;

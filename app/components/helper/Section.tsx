import React from "react";

const Section = ({
  children,
  extraStyles = "",
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) => {
  return (
    <section
      className={`${extraStyles && extraStyles} flex flex-col items-center`}
    >
      <div className="w-[288px] mx-4 ">{children}</div>
      {/* <div className="px-4">{children}</div> */}
    </section>
  );
};

export default Section;

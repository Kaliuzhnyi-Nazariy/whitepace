import React from "react";

const Text = ({
  children,
  extraStyles,
  newMT,
}: {
  children: React.ReactNode;
  extraStyles?: string;
  newMT?: string;
}) => {
  return (
    <p
      className={` text-[18px] ${
        extraStyles ? extraStyles : "font-light text-center"
      } ${newMT ? newMT : "mt-6"}`}
    >
      {children}
    </p>
  );
};

export default Text;

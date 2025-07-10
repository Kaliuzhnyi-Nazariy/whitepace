import React from "react";

const Text = ({
  children,
  extraStyles,
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) => {
  return (
    <p
      className={` text-[18px] mt-6 ${
        extraStyles ? extraStyles : "font-light text-center"
      }`}
    >
      {children}
    </p>
  );
};

export default Text;

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
      className={`font-light text-[18px] mt-6 ${
        extraStyles ? extraStyles : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Text;

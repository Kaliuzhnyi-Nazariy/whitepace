import React from "react";

const Button = ({
  children,
  extraStyles,
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) => {
  return (
    <button
      className={`w-[232px] h-[70px] rounded-lg bg-[var(--lighterprimary)] mt-[60px] px-10 py-5 font-light text-[16px] flex gap-2.5 items-center cursor-pointer mx-auto text-[var(--background)] justify-center ${
        extraStyles ? extraStyles : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({
  children,
  extraStyles,
  anotherPlace,
  changedMT,
}: {
  children: React.ReactNode;
  extraStyles?: string;
  anotherPlace?: string;
  changedMT?: string;
}) => {
  const mtClass = changedMT ? changedMT : "mt-[60px]";

  return (
    <button
      className={` rounded-lg bg-[var(--lighterprimary)] px-10 py-5 font-light text-[16px] flex gap-2.5 items-center cursor-pointer text-[var(--background)] justify-center ${mtClass} ${
        extraStyles ? extraStyles : ""
      } ${anotherPlace ? anotherPlace : "mx-auto"}`}
    >
      {children} <GoArrowRight />
    </button>
  );
};

export default Button;

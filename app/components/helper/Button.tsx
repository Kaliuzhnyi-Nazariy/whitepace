import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({
  children,
  extraStyles,
  anotherPlace,
  changedMT,
  heroBtn = false,
  noArrow,
}: {
  children: React.ReactNode;
  extraStyles?: string;
  anotherPlace?: string;
  changedMT?: string;
  heroBtn?: boolean;
  noArrow?: boolean;
}) => {
  const mtClass = changedMT ? changedMT : "mt-[60px]";

  const heroClass = heroBtn && "min-[1152px]:p-5 min-[1152px]:font-medium ";

  return (
    <button
      className={` rounded-lg bg-[var(--lighterprimary)] px-10 py-5 font-light text-[16px] flex gap-2.5 items-center cursor-pointer text-[var(--background)] justify-center ${mtClass} ${
        extraStyles ? extraStyles : ""
      } ${anotherPlace ? anotherPlace : "mx-auto"} ${heroClass}
       `}
    >
      {children}
      {noArrow ? "" : <GoArrowRight />}
    </button>
  );
};

export default Button;

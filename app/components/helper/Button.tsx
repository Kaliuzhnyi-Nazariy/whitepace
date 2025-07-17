import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({
  children,
  extraStyles,
  anotherPlace,
  changedMT,
  heroBtn = false,
  noArrow,
  isLogin = false,
  isAuthBtn = false,
  cardBtn = false,
}: {
  children: React.ReactNode;
  extraStyles?: string;
  anotherPlace?: string;
  changedMT?: string;
  heroBtn?: boolean;
  noArrow?: boolean;
  isLogin?: boolean;
  isAuthBtn?: boolean;
  cardBtn?: boolean;
}) => {
  const mtClass = changedMT ? changedMT : "mt-[60px]";

  const heroClass = heroBtn && "min-[1152px]:p-5 min-[1152px]:font-medium ";

  const authBtn = `cursor-pointer text-[16px] font-medium leading-[23px] tracking-[-0.02em] py-2 rounded-[8px] flex items-center justify-between min-[768px]:text-[18px] min-[768px]:py-4 ${
    isLogin
      ? " px-5 min-[768px]:px-10 bg-[var(--golden-second)] text-[var(--darkerprimary)] "
      : " px-3 min-[768px]:px-6 bg-[var(--lighterprimary)] text-[var(--background)] "
  } `;

  const basicStyles = " items-center cursor-pointer justify-center border-[1] ";

  return (
    // <button
    //   className={` rounded-lg bg-[var(--lighterprimary)] px-10 py-5 font-light text-[16px] flex gap-2.5 items-center cursor-pointer text-[var(--background)] justify-center ${mtClass} ${
    //     extraStyles ? extraStyles : ""
    //   } ${
    //     anotherPlace
    //       ? anotherPlace
    //       : "max-[1151px]:mx-auto min-[1152px]:mr-auto "
    //   } ${heroClass}
    //    `}
    // >
    // {children}
    // {noArrow ? "" : <GoArrowRight />}
    // </button>
    <button
      className={` ${basicStyles} ${
        isAuthBtn
          ? authBtn
          : `rounded-lg ${
              cardBtn
                ? " px-10 py-4 bg-[var(--background)] border-[var(--golden-second)] text-[var(--foreground)] font-medium group-hover:bg-[var(--lighterprimary)] group-hover:border-transparent group-hover:text-[var(--backgroundground)] group-active:bg-[var(--lighterprimary)] group-active:border-transparent group-active:text-[var(--backgroundground)] group-focus:bg-[var(--lighterprimary)] group-focus:border-transparent group-focus:text-[var(--backgroundground)]  "
                : " bg-[var(--lighterprimary)] border-transparent text-[var(--background)]"
            } px-10 py-5 font-light text-[16px] flex gap-2.5  ${mtClass} ${
              extraStyles ? extraStyles : ""
            } ${
              anotherPlace
                ? anotherPlace
                : "max-[1151px]:mx-auto min-[1152px]:mr-auto  "
            } ${heroClass} `
      } `}
    >
      {children}
      {noArrow ? "" : <GoArrowRight />}
    </button>
  );
};

export default Button;

import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IPlan } from "../TypesAndInterfaces";
import Button from "../helper/Button";

const ListOfAdvantagesItem = ({ plan }: { plan: IPlan }) => {
  // const mobStyles = `keen-slider__slide  w-[289px] h-[642px] bg-[var(--darkerprimary)] text-[var(--background)] p-5 rounded-[10px]`;

  return (
    <div
      className={`keen-slider__slide  w-[289px] min-h-[642px] p-5 rounded-[10px] border-[1] border-transparent bg-[var(--darkerprimary)] text-[var(--background)] transition-all min-[768px]:w-[472px] min-[768px]:border-[var(--golden-second)] min-[768px]:bg-[var(--background)]  min-[768px]:text-[var(--foreground)] min-[768px]:px-[44px] min-[768px]:hover:py-20 min-[768px]:hover:bg-[var(--darkerprimary)] min-[768px]:hover:text-[var(--background)] min-[768px]:active:py-20 min-[768px]:active:bg-[var(--darkerprimary)] min-[768px]:active:text-[var(--background)] min-[768px]:focus:py-20 min-[768px]:focus:bg-[var(--darkerprimary)] min-[768px]:focus:text-[var(--background)]  `}
    >
      <h3 className="font-semibold text-2xl">{plan.type}</h3>
      <h4 className="font-bold text-4xl mt-6">${plan.price}</h4>
      <p className="font-light text-[16px] tracking-[-0.02em] max-md:tracking-[-0.04em] min-[768px]:text-[18px] min-[768px]:tracking-normal mt-4">
        {plan.message}
      </p>
      <ul className="mt-6 flex flex-col gap-7">
        {plan.advantages.map((adv, index) => {
          return (
            <li key={index} className="flex gap-5 items-center">
              <IoMdCheckmarkCircleOutline
                className="fill-[var(--golden-second)] w-5 h-5"
                size={20}
              />
              <p className="w-[212px] text-[16px] tracking-[-0.02em] leading-5 ">
                {adv}
              </p>
            </li>
          );
        })}
      </ul>
      <Button
        extraStyles="w-[176px] h-[62px] text-[18px] "
        changedMT="mt-[25px]"
        noArrow
        anotherPlace="mr-auto"
      >
        Get Started
      </Button>
    </div>
  );
};

export default ListOfAdvantagesItem;

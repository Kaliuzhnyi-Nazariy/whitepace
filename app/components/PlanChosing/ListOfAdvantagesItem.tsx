import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IPlan } from "../TypesAndInterfaces";

const ListOfAdvantagesItem = ({ plan }: { plan: IPlan }) => {
  return (
    <div
      className={`keen-slider__slide  w-[289px] h-[642px] bg-[var(--darkerprimary)] text-[var(--background)] p-5 rounded-[10px]`}
    >
      <h3 className="font-semibold text-2xl">{plan.type}</h3>
      <h4 className="font-bold text-4xl mt-6">${plan.price}</h4>
      <p className="font-light text-[16px] mt-4">{plan.message}</p>
      <ul className="mt-6 flex flex-col gap-7">
        {plan.advantages.map((adv, index) => {
          return (
            <li key={index} className="flex gap-5 items-center">
              <IoMdCheckmarkCircleOutline
                className="fill-[var(--golden-second)] w-5 h-5"
                size={20}
              />
              <p className="w-[212px]">{adv}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfAdvantagesItem;

import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IPlan } from "../TypesAndInterfaces";
import Button from "../helper/Button";

const ListOfAdvantagesItem = ({ plan }: { plan: IPlan }) => {
  // const mobStyles = `keen-slider__slide  w-[289px] h-[642px] bg-[var(--darkerprimary)] text-[var(--background)] p-5 rounded-[10px]`;

  const mobStyles =
    " keen-slider__slide w-[289px] h-[642px] bg-[var(--darkerprimary)] text-[var(--background)] ";
  const tabletView =
    " flex-shrink-0 min-[768px]:w-[472px] max-[1151px]:min-w-[472px] min-[768px]:h-[628px] min-[768px]:border-[var(--golden-second)] min-[768px]:bg-[var(--background)]  min-[768px]:text-[var(--foreground)] min-[768px]:px-[44px]";
  const smallLaptopStyle =
    " min-[1152px]:w-[341px] min-[1152px]:h-[697px] min-[1152px]:text-[16px] min-[1152px]:tracking-5 ";
  const LaptopStyle = "min-[1440px]:w-[437px] min-[1440px]:h-[654px]  ";
  const desctopStyle =
    " min-[1920px]:min-w-[472px] min-[1920px]:h-[634px] min-[1920px]:mx-auto ";

  const hoverStyles =
    "min-[768px]:hover:py-20 min-[768px]:hover:bg-[var(--darkerprimary)] min-[768px]:hover:text-[var(--background)] min-[768px]:hover:h-[711px] hover:fill-[var(--golden-second)] min-[1152px]:hover:text-[18px] min-[1152px]:hover:h-[761px] ";
  const activeStyles =
    "min-[768px]:active:py-20 min-[768px]:active:bg-[var(--darkerprimary)] min-[768px]:active:text-[var(--background)] min-[768px]:active:h-[711px] active:fill-[var(--golden-second)] min-[1152px]:active:text-[18px] min-[1152px]:active:h-[761px]  ";
  const focusStyles =
    "min-[768px]:focus:py-20 min-[768px]:focus:bg-[var(--darkerprimary)] min-[768px]:focus:text-[var(--background)] min-[768px]:focus:h-[711px] focus:fill-[var(--golden-second)] min-[1152px]:focus:text-[18px] min-[1152px]:focus:h-[761px] ";

  return (
    <div
      className={` group p-5 rounded-[10px] border-[1] border-transparent  transition-all min-[768px]:py-10 ${mobStyles} ${tabletView} ${smallLaptopStyle} ${LaptopStyle} ${desctopStyle} ${hoverStyles} ${activeStyles} ${focusStyles}  `}
    >
      <h3 className="font-semibold text-2xl min-[1152px]:leading-9 ">
        {plan.type}
      </h3>
      <h4 className="font-bold text-4xl mt-6 min-[768px]:group-hover:text-[var(--golden-second)] min-[768px]:group-active:text-[var(--golden-second)] min-[768px]:group-focus:text-[var(--golden-second)] ">
        ${plan.price}
      </h4>
      <p className="font-light text-[16px] tracking-[-0.02em] max-md:tracking-[-0.04em] min-[768px]:text-[18px] min-[768px]:tracking-normal mt-6 min-[1152px]:text-[18px] min-[1152px]:font-medium min-[1152px]:w-[240px] min-[1152px]:leading-[23px] ">
        {plan.message}
      </p>
      <ul className="mt-6 flex flex-col gap-7">
        {plan.advantages.map((adv, index) => {
          return (
            <li key={index} className="flex gap-5 items-center ">
              <IoMdCheckmarkCircleOutline
                className="fill-[var(--golden-second)] w-5 h-5 min-[768px]:fill-[var(--foreground)] group-hover:fill-[var(--golden-second)] group-active:fill-[var(--golden-second)] group-focus:fill-[var(--golden-second)]"
                size={20}
              />
              <p className="w-[212px] text-[16px] tracking-[-0.02em] leading-5 min-[768px]:w-full min-[1152px]:w-[216px] min-[1440px]:w-full ">
                {adv}
              </p>
            </li>
          );
        })}
      </ul>
      <Button
        extraStyles={`hidden w-[176px] h-[62px] text-[18px] leading-[-0.02em]  min-[768px]:text-[16px] min-[768px]:block `}
        changedMT="mt-[25px]"
        noArrow
        anotherPlace="mr-auto"
        cardBtn
      >
        Get Started
      </Button>
      <Button
        extraStyles={`block w-[176px] h-[62px] text-[18px] leading-[-0.02em]  min-[768px]:h-[51px] min-[768px]:text-[16px] min-[768px]:hidden `}
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

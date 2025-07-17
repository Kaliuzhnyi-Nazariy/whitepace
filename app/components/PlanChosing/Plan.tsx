import React from "react";
import Section from "../helper/Section";

import Text from "../helper/Text";
import Carousel from "../helper/Carousel";
import plans from "../plans.json";
import ListOfAdvantagesItem from "./ListOfAdvantagesItem";
import TitleWithDrawing from "../helper/TitleWithDrawing";

const Plan = () => {
  const tablet =
    " min-[768px]:-bottom-0.5 min-[768px]:right-[75px] min-[768px]:w-[290px] min-[768px]:h-[26px] ";
  const laptop =
    " min-[1152px]:w-[278px] min-[1152px]:h-7 min-[1152px]:right-[275px] ";
  const desc =
    " min-[1440px]:w-[335px] min-[1440px]:h-[30px] min-[1440px]:right-[200px] min-[1440px]:-translate-x-1/2 min-[1440px]:-bottom-1 ";
  const bigDesc = " min-[1920px]:w-[319px] min-[1920px]:right-[275px] ";

  return (
    <Section extraStyles="py-20">
      <TitleWithDrawing
        ImageLink="/vector.png"
        width={106}
        height={30}
        stylesForImage={`-bottom-1 right-[85px] ${tablet} ${laptop} ${desc} ${bigDesc} `}
      >
        Choose Your Plan
      </TitleWithDrawing>
      <Text noTracking>
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </Text>
      <Carousel value={plans} type="plan" />
      <div className="w-full hidden mt-[60px] min-[768px]:block ">
        <ul className="flex gap-8 overflow-x-auto overflow-y-hidden items-center justify-start w-full h-[740px] min-[1152px]:h-[770px] min-[1440px]:w-[1376px] min-[1440px]:mx-auto min-[1920px]:w-[1480px] flex-nowrap">
          {plans.map((plan, index) => {
            return <ListOfAdvantagesItem plan={plan} key={index} />;
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Plan;

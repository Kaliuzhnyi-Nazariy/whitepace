import React from "react";
import Section from "../helper/Section";
import TitleWithDrawing from "../helper/TitleWithDrawing";
import commetors from "../comments.json";
import trustedComments from "../TrustedComments.json";
import Carousel from "../helper/Carousel";

const CllientsSays = () => {
  const smLp =
    "min-[1152px]:w-[90px] min-[1152px]:h-[35px] min-[1152px]:bottom-3 min-[1152px]:left-auto min-[1152px]:right-[32%] min-[1152px]:-translate-x-1/2  ";
  const lp =
    "min-[1440px]:w-[194px] min-[1440px]:h-[48px] min-[1440px]:bottom-0 min-[1440px]:right-[18%] ";
  const desc =
    "min-[1920px]:w-[258px] min-[1920px]:right-[11%] min-[1920px]:bottom-1 ";

  return (
    <Section extraStyles="py-[100px] min-[768px]:pt-[140px] min-[1152px]:py-[140px] ">
      <TitleWithDrawing
        ImageLink="/Vector.png"
        width={120}
        height={26}
        stylesForImage={`bottom-2 left-18 h-7 block min-[768px]:hidden min-[1152px]:block ${smLp} ${lp} ${desc} `}
        newFontSize="text-[40px] min-[1440px]:text-[70px] "
        extraTextStyles="block min-[768px]:hidden min-[1152px]:block min-[1152px]:tracking-normal min-[1440px]:text-[70px] "
      >
        What Our Clients Says
      </TitleWithDrawing>
      <TitleWithDrawing
        ImageLink="/Vector.png"
        width={222}
        height={32}
        stylesForImage="hidden min-[768px]:block min-[1152px]:hidden top-9 right-[135px] h-7"
        extraTextStyles="hidden min-[768px]:block w-[728px] min-[1152px]:hidden"
      >
        See what our trusted users Say
      </TitleWithDrawing>
      <Carousel
        type="comment"
        value={commetors}
        extraStyles="min-[768px]:hidden min-[1152px]:block"
      />
      <Carousel
        type="trusted"
        value={trustedComments}
        extraStyles="hidden min-[768px]:block min-[1152px]:hidden"
      />
    </Section>
  );
};

export default CllientsSays;

import React from "react";
import Section from "./helper/Section";
import TitleWithDrawing from "./helper/TitleWithDrawing";
import Image from "next/image";

const Sponsors = () => {
  return (
    <Section extraStyles="py-20 min-[768px]:py-[140px] ">
      <TitleWithDrawing
        ImageLink="/Vector.png"
        width={190}
        height={23}
        stylesForImage="-bottom-[18px] right-0 min-[768px]:w-[261px] min-[768px]:h-[39px] min-[768px]:-translate-x-1/2 min-[768px]:right-6 min-[768px]:-bottom-1.5 min-[1152px]:right-[170px] min-[1152px]:-bottom-5  min-[1152px]:w-[300px] min-[1152px]:right-[42px] min-[1440px]:w-[336px] min-[1440px]:right-[20%] min-[1920px]:w-[326px] min-[1920px]:right-[22%] "
      >
        Our sponsors
      </TitleWithDrawing>
      <ul className="mt-[100px] flex flex-col gap-[100px] items-center min-[1152px]:flex-row min-[1152px]:gap-0 min-[1152px]:justify-between ">
        <li>
          <a href="https://www.apple.com/" target="_blank">
            <Image src={"/Apple.png"} alt="Apple logo" width={56} height={66} />
          </a>
        </li>
        <li>
          <a href="https://www.microsoft.com/" target="_blank">
            <Image
              src={"/Microsoft.png"}
              alt="Microsoft logo"
              width={213}
              height={46}
              className="min-[768px]:w-[287px] min-[768px]:h-[62px]"
            />
          </a>
        </li>
        <li>
          <a href="https://slack.com/" target="_blank">
            <Image
              src={"/Slack.png"}
              alt="Slack logo"
              width={192}
              height={49}
              className="min-[768px]:w-[280px] min-[768px]:h-[71px]"
            />
          </a>
        </li>
        <li>
          <a href="https://www.google.com/" target="_blank">
            <Image
              src={"/Google.png"}
              alt="Google logo"
              width={140}
              height={46}
              className="min-[768px]:w-[211px] min-[768px]:h-[70px]"
            />
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default Sponsors;

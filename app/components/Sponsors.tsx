import React from "react";
import Section from "./helper/Section";
import TitleWithDrawing from "./helper/TitleWithDrawing";
import Image from "next/image";

const Sponsors = () => {
  return (
    <Section extraStyles="py-20">
      <TitleWithDrawing
        ImageLink="/Vector.png"
        width={190}
        height={23}
        stylesForImage="-bottom-[18px] right-0"
      >
        Our sponsors
      </TitleWithDrawing>
      <ul className="mt-[100px] flex flex-col gap-[100px] items-center">
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
            />
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default Sponsors;

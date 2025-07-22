import React from "react";
import Section from "./helper/Section";
import Image from "next/image";
import Title from "./helper/Title";
import Text from "./helper/Text";
import Button from "./helper/Button";
import WorkWithBg from "./helper/WorkWithBg";
// import BgPict from "./helper/BgPict";

const WorkWith = () => {
  return (
    <Section
      extraStyles="bg-[var(--darkerprimary)] py-20 relative z-0 overflow-hidden text-[var(--background)] min-[768px]:py-[140px] "
      flexStyle="flex max-[1151px]:flex-col items-center min-[1152px]:flex-row min-[1152px]:justify-between "
    >
      {/* <BgPict width={1144} height={700} rotDeg={29.38} /> */}

      {/* <div className="absolute z-[-1] w-full h-full select-none overflow-hidden outline-amber-500 outline-3 top-0 left-0"> */}
      {/* <Image
          src="/bgpict.png"
          alt="lines"
          width={1144}
          height={700}
          className="absolute top-[61%] left-[80%] -translate-1/2 rotate-[33deg] min-w-[988px] h-[606px] z-[-1] pointer-events-none overflow-hidden"
        /> */}
      <WorkWithBg />
      {/* </div> */}
      <div className="relative w-[286px] h-[232px] overflow-hidden min-[768px]:w-[485px] min-[768px]:h-[392px] min-[1152px]:w-[528px] min-[1152px]:h-[427px] min-[1440px]:w-[582px] min-[1440px]:h-[471px] ">
        <Image
          src={"/Apps.png"}
          alt="programs we work with"
          fill
          className="relative overflow-hidden   "
        />
      </div>
      <div className="min-[1152px]:w-[460px] min-[1440px]:w-[694px] min-[1920px]:w-[798px] ">
        <Title extraStyles="min-[1152px]:text-start max-[1151px]:mt-[100px] min-[1920px]:tracking-normal ">
          Work with Your Favorite Apps Using whitepace
        </Title>
        <Text
          extraStyles="text-center min-[1152px]:text-start min-[1920px]:tracking-normal "
          noTracking
        >
          Whitepace teams up with your favorite software. Integrate with over
          1000+ apps with Zapier to have all the tools you need for your project
          success.
        </Text>
        <Button>Read more</Button>
      </div>
    </Section>
  );
};

export default WorkWith;

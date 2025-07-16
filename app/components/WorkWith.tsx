import React from "react";
import Section from "./helper/Section";
import Image from "next/image";
import Title from "./helper/Title";
import Text from "./helper/Text";
import Button from "./helper/Button";
// import BgPict from "./helper/BgPict";

const WorkWith = () => {
  return (
    <Section
      extraStyles="bg-[var(--darkerprimary)] py-20 relative z-0 overflow-hidden text-[var(--background)] min-[768px]:py-[140px] "
      flexStyle="flex max-[1151px]:flex-col items-center min-[1152px]:flex-row min-[1152px]:justify-between "
    >
      {/* <BgPict width={1144} height={700} rotDeg={29.38} /> */}

      <div className="absolute z-[-1] w-full h-full select-none overflow-hidden outline-amber-700 outline-1 top-0 left-0">
        <Image
          src="/bgpict.png"
          alt="lines"
          width={1144}
          height={700}
          className="absolute top-[580px] left-[290px] -translate-x-1/2 -translate-y-1/2 rotate-[29.38deg] min-w-[1144px] h-[700px] z-[-1] pointer-events-none overflow-hidden"
        />
      </div>
      <div className="relative w-[286px] h-[232px] overflow-hidden min-[768px]:w-[485px] min-[768px]:h-[392px] min-[1152px]:w-[528px] min-[1152px]:h-[427px] min-[1440px]:w-[582px] min-[1440px]:h-[471px] ">
        <Image
          src={"/apps.png"}
          alt="programs we work with"
          fill
          className="relative overflow-hidden   "
        />
      </div>
      <div className="min-[1152px]:w-[460px] min-[1440px]:w-[694px] min-[1920px]:w-[798px] ">
        <Title extraStyles="min-[1152px]:text-start max-[1151px]:mt-[100px] ">
          Work with Your Favorite Apps Using whitepace
        </Title>
        <Text extraStyles="text-center min-[1152px]:text-start ">
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

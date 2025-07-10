import React from "react";
import Section from "./helper/Section";
import Image from "next/image";
import Title from "./helper/Title";
import Text from "./helper/Text";
import Button from "./helper/Button";
// import BgPict from "./helper/BgPict";

const WorkWith = () => {
  return (
    <Section extraStyles="bg-[var(--darkerprimary)] py-20 relative z-0 overflow-hidden text-[var(--background)] ">
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
      <div className="relative w-[286px] h-[232px] overflow-hidden ">
        <Image
          src={"/apps.png"}
          alt="programs we work with"
          fill
          className="relativeoverflow-hidden"
        />
      </div>
      <Title extraStyles="tracking-[-2%] mt-[100px] ">
        Work with Your Favorite Apps Using whitepace
      </Title>
      <Text>
        Whitepace teams up with your favorite software. Integrate with over
        1000+ apps with Zapier to have all the tools you need for your project
        success.
      </Text>
      <Button>Read more</Button>
    </Section>
  );
};

export default WorkWith;

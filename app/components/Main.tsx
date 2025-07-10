import React from "react";
import Section from "./helper/Section";
// import Image from "next/image";
import Title from "./helper/Title";
import Text from "./helper/Text";
import Button from "./helper/Button";
import PhotoSkeleton from "./helper/PhotoSkeleton";
import BgPict from "./helper/BgPict";

const MainComponent = () => {
  return (
    <Section extraStyles="relative bg-[var(--darkerprimary)] h-[813px] flex flex-col justify-center items-center text-center text-[var(--background)] overflow-hidden z-0">
      {/* <div className="absolute z-[-1] w-full h-[813px] flex justify-center align-middle select-none">
        <Image
          src="/bgpict.png"
          alt="lines"
          width={1026}
          height={633}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[18deg] min-w-[1026px] h-[633px] z-[-1] pointer-events-none md:rotate-0 md:min-w-[1440px] md:left-0"
        />
      </div> */}
      <BgPict width={1026} height={633} rotDeg={18} />
      <div className="w-[288px] z-10 mt-20">
        <Title>Get More Done with whitepace</Title>
        <Text>
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </Text>
        <Button>Try TasKey Free</Button>
      </div>
      <PhotoSkeleton topMargin={100} bottomMargin={80} />
    </Section>
  );
};

export default MainComponent;

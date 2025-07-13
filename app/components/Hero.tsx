import React from "react";
import Section from "./helper/Section";
// import Image from "next/image";
import Title from "./helper/Title";
import Text from "./helper/Text";
import Button from "./helper/Button";
import PhotoSkeleton from "./helper/PhotoSkeleton";
import BgPict from "./helper/BgPict";

const HeroComponent = () => {
  return (
    <Section
      extraStyles="relative bg-[var(--darkerprimary)] py-20 flex max-[1152px]:flex-col justify-center items-center text-center text-[var(--background)] overflow-hidden z-0 max-[1152px]:pt-[140px] max-[1152px]:pb-[100px] min-[1152px]:flex-row min-[1152px]:py-[140px] "
      flexStyle="min-[1152px]:contents"
    >
      <BgPict width={1026} height={633} rotDeg={18} />
      <div className="z-10 max-[1152px]:mt-20 min-[1152px]:w-[562px] ">
        <Title isHero={true} extraStyles="min-[1152px]:text-start">
          Get More Done with whitepace
        </Title>
        <Text extraStyles="min-[1152px]:text-start">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </Text>
        <Button
          anotherPlace=""
          heroBtn={true}
          extraStyles="min-[1152px]:hidden"
        >
          Try TasKey Free
        </Button>
        <Button
          anotherPlace="min-[1152px]:mr-auto"
          heroBtn={true}
          extraStyles="min-[1152px]:flex min-[1152px]:p-5 hidden"
        >
          Try Whitepace Free
        </Button>
      </div>
      <PhotoSkeleton extraStyle="min-[1152px]:m-0 max-[1152px]:mt-[100px]  " />
    </Section>
  );
};

export default HeroComponent;

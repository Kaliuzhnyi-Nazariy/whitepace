import React from "react";
import Section from "../helper/Section";
import Title from "../helper/Title";
import Image from "next/image";
import Text from "../helper/Text";
import Carousel from "../helper/Carousel";
import plans from "../plans.json";

const Plan = () => {
  return (
    <Section>
      <div className="relative mt-20">
        <Title>Choose Your Plan</Title>
        <Image
          src={"/vector.png"}
          alt="line"
          width={105}
          height={30}
          className="absolute -bottom-1 right-[85px] "
        />
      </div>
      <Text>
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </Text>
      <Carousel value={plans} type="plan" />
    </Section>
  );
};

export default Plan;

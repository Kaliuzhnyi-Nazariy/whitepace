import React from "react";
import Section from "./helper/Section";
import PhotoSkeleton from "./helper/PhotoSkeleton";
import Title from "./helper/Title";
import Image from "next/image";
import Text from "./helper/Text";
import Button from "./helper/Button";
import { GoArrowRight } from "react-icons/go";

const Customise = () => {
  return (
    <Section extraStyles="mb-[100px]">
      <PhotoSkeleton topMargin={100} bottomMargin={80} />
      <div className="relative">
        <Title>Customise it to your needs</Title>
        <Image
          src={"/vector.png"}
          alt="line"
          width={170}
          height={40}
          className="absolute -bottom-1 right-0 "
        />
      </div>
      <Text>
        Customise the app with plugins, custom themes and multiple text editors
        (Rich Text or Markdown). Or create your own scripts and plugins using
        the Extension API.
      </Text>
      <Button>
        Let{"'"}s Go <GoArrowRight />
      </Button>
    </Section>
  );
};

export default Customise;

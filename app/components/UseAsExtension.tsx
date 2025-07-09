import React from "react";
import Section from "./helper/Section";
import Title from "./helper/Title";
import Image from "next/image";
import Text from "./helper/Text";
import Button from "./helper/Button";
import { GoArrowRight } from "react-icons/go";
import PhotoSkeleton from "./helper/PhotoSkeleton";

const UseAsExtension = () => {
  return (
    <Section extraStyles="bg-[var(--darkerprimary)] text-[var(--background)]">
      <div className="relative mt-20">
        <Title extraStyles="relative z-[3] text-center">Use as Extension</Title>
        <Image
          src={"/vector.png"}
          alt="line"
          width={140}
          height={20}
          className="absolute bottom-0 right-[20px] "
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
      <PhotoSkeleton topMargin={60} bottomMargin={80} />
    </Section>
  );
};

export default UseAsExtension;

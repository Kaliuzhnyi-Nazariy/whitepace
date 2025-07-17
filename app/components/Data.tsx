import React from "react";
import Section from "./helper/Section";
import Image from "next/image";
import TitleWithDrawing from "./helper/TitleWithDrawing";
import Text from "./helper/Text";
import Button from "./helper/Button";

const Data = () => {
  return (
    <Section
      extraStyles="py-20"
      flexStyle="min-[768px]:flex min-[768px]:flex-col min-[768px]:items-center min-[1152px]:flex-row-reverse "
    >
      <Image
        src={"/DataElement.png"}
        alt="what connect"
        width={290}
        height={163}
        className="min-[768px]:w-[513px] min-[768px]:h-[287px] min-[1152px]:w-[562px] min-[1152px]:h-[315px] min-[1140px]:w-[681px] min-[1440px]:h-[318px] "
      />
      <div className="min-[1152px]:w-[526px] min-[1440px]:w-[695px] min-[1920px]:w-[800px] ">
        <TitleWithDrawing
          ImageLink="/Vector.png"
          width={194}
          height={24}
          stylesForImage="-bottom-3.5 -right-4 min-[768px]:w-[300px] min-[768px]:h-[33px] min-[768px]:-bottom-2.5 min-[768px]:-translate-x-1/2 min-[768px]:-right-[50px] min-[1152px]:w-[283px] min-[1152px]:h-10 min-[1152px]:-bottom-4.5 min-[1152px]:translate-x-0 min-[1152px]:right-[46px]  min-[1440px]:w-[350px] min-[1440px]:h-[37px] min-[1440px]:-translate-x-1/2 min-[1440px]:-right-16 min-[1440px]:-bottom-6 min-[1920px]:w-[328px] min-[1920px]:right-26 min-[1920px]:-bottom-3.5 "
          extraTextStyles="mt-[100px] min-[1152px]:text-start "
        >
          100% your data
        </TitleWithDrawing>
        <Text extraStyles="text-center min-[1152px]:text-start ">
          The app is open source and your notes are saved to an open format, so
          you{"'"}ll always have access to them. Uses End-To-End Encryption
          (E2EE) to secure your notes and ensure no-one but yourself can access
          them.
        </Text>
        <Button>Read more</Button>
      </div>
    </Section>
  );
};

export default Data;

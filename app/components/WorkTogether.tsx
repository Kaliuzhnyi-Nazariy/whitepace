import React from "react";
import Section from "./helper/Section";
import Image from "next/image";
import Text from "./helper/Text";
import Button from "./helper/Button";
import TitleWithDrawing from "./helper/TitleWithDrawing";

const WorkTogether = () => {
  return (
    <Section
      extraStyles="mb-20 min-[768px]:mb-[100px] min-[1152px]:mt-[100px] "
      flexStyle="min-[1152px]:flex min-[1152px]:flex-row-reverse justify-between items-center"
    >
      <div className="min-[1152px]:w-[527px] min-[1440px]:w-[633px] min-[1920px]:w-[670px]">
        <TitleWithDrawing
          ImageLink="/vector.png"
          width={164}
          height={26}
          stylesForImage="absolute bottom-0.5 right-[5px] min-[768px]:-translate-x-1/2 min-[768px]:w-[224px] min-[768px]:h-8 min-[768px]:right-14 min-[768px]:-bottom-1.5 min-[1152px]:-right-14 min-[1152px]:bottom-2 min-[1152px]:w-[266px] min-[1152px]:h-[25px] min-[1440px]:w-[331px] min-[1440px]:h-[26px] min-[1440px]:-bottom-1.5 min-[1440px]:-right-22 min-[1920px]:-right-[42px] "
          extraTextStyles="min-[1152px]:text-start"
        >
          Work together
        </TitleWithDrawing>
        <Text extraStyles="text-center min-[1152px]:text-start">
          With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </Text>
        <Button anotherPlace="max-[1151px]:mx-auto min-[1152px]:mr-auto ">
          Try it now
        </Button>
      </div>
      <Image
        src="/WTI.png"
        alt="work together"
        width={279}
        height={260}
        className="mt-[60px] min-[768px]:mt-[100px] min-[768px]:w-[454px] min-[768px]:h-[423px] min-[768px]:mx-auto min-[1152px]:w-[528px] min-[1152px]:h-[492px] min-[1152px]:m-0 min-[1440px]:w-[583px] min-[1440px]:h-[543px] "
      />
    </Section>
  );
};

export default WorkTogether;

import React from "react";
import Section from "./helper/Section";
// import Title from "./helper/Title";
import TitleWithDrawing from "./helper/TitleWithDrawing";
import Text from "./helper/Text";
import Button from "./helper/Button";
import Image from "next/image";

const WorkEverywhere = () => {
  return (
    <Section
      extraStyles="justify-start bg-[var(--darkerprimary)] text-[var(--background)] pt-[100px] pb-[140px] min-[768px]:py-[140px] "
      flexStyle="min-[1440px]:flex min-[1440px]:justify-center "
    >
      {/* <div className="relative">
        <Title extraStyles="text-start">Your work, everywhere you are</Title>
      </div> */}
      <div className=" min-[768px]:w-[604px] min-[1152px]:w-[650px] min-[1440px]:w-[1064px] relative ">
        <Image
          src={"/everywherePict.png"}
          alt="Circles picture"
          width={681}
          height={691}
          className="absolute min-[1920px]:bottom-[-75%]  min-[1920px]:left-[-15.5%] min-[1920px]:-translate-x-1/2 min-[1920px]:min-h-[810px] min-[1920px]:w-[530px] min-[1440px]:left-[-38%] min-[1440px]:w-[447px] min-[1440px]:max-h-[734px] min-[1440px]:bottom-[-56%] min-[1440px]:block min-[1152px]:hidden min-[768px]:block bottom-[-37%] left-[-44%] h-[770px] hidden "
        />
        <TitleWithDrawing
          ImageLink="/VectorBlue.png"
          width={274}
          height={31}
          stylesForImage="-bottom-3.5 min-[768px]:w-[233px] min-[768px]:h-[46px] min-[768px]:-bottom-4 min-[768px]:-left-1.5 min-[1152px]:w-[304px] min-[1152px]:h-[42px] min-[1152px]:left-auto  min-[1152px]:-right-3.5 min-[1152px]:-bottom-2.5 min-[1440px]:w-[312px] min-[1440px]:h-6 min-[1440px]:-right-7 min-[1440px]:-bottom-0 "
          extraTextStyles="text-start min-[1440px]:text-center "
        >
          Your work, everywhere you are
        </TitleWithDrawing>
        <Text extraStyles="text-start min-[1152px]:text-center">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </Text>
        <Button anotherPlace="max-[1439px]:mr-auto min-[1440px]:mx-auto ">
          Try Taskey
        </Button>
      </div>
    </Section>
  );
};

export default WorkEverywhere;

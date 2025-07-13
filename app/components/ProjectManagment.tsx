import React from "react";
import Section from "./helper/Section";
// import Title from "./helper/Title";
// import Image from "next/image";
import Text from "./helper/Text";
import Button from "./helper/Button";
import PhotoSkeleton from "./helper/PhotoSkeleton";
import TitleWithDrawing from "./helper/TitleWithDrawing";

const ProjectManagment = () => {
  return (
    <Section
      extraStyles="text-center max-md:pt-20 max-md:pb-[100px] max-[1151px]:py-[100px] min-[1152px]:pt-[140px] "
      flexStyle=" min-[1152px]:flex min-[1152px]:items-center min-[1152px]:flex-row min-[1152px]:justify-between"
    >
      <div className="min-[1152px]:w-[436px] min-[1440px]:w-[657px] min-[1920px]:w-[672px] ">
        <TitleWithDrawing
          ImageLink="/vector.png"
          width={229}
          height={26}
          stylesForImage="absolute max-md:-bottom-3.5 max-md:left-1/2 max-md:w-[229px] max-md:h-[26px] max-md:-translate-x-1/2 max-[1151px]:w-[345px] max-[1151px]:h-8 max-[1151px]:-translate-x-1/5 max-[1151px]:right-0 max-[1151px]:-bottom-1.5 max-[1439px]:right-2 min-[1152px]:-bottom-2 min-[1440px]:-bottom-3.5 min-[1440px]:w-[516px] min-[1440px]:h-[37px] "
          extraTextStyles="tracking-[-2%] min-[1152px]:text-start"
        >
          Project Management
        </TitleWithDrawing>
        <Text extraStyles="min-[1152px]:text-start ">
          Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </Text>
        <Button anotherPlace="max-[1151px]:mx-auto min-[1152px]:mr-auto ">
          Get Started
        </Button>
      </div>
      <PhotoSkeleton topMargin={60} extraStyle="min-[1152px]:m-0" />
    </Section>
  );
};

export default ProjectManagment;

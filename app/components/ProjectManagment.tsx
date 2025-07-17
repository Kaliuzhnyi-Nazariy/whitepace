import React from "react";
import Section from "./helper/Section";
// import Title from "./helper/Title";
// import Image from "next/image";
import Text from "./helper/Text";
import Button from "./helper/Button";
import PhotoSkeleton from "./helper/PhotoSkeleton";
import TitleWithDrawing from "./helper/TitleWithDrawing";

const ProjectManagment = () => {
  const mobStlye =
    " absolute -bottom-3.5 left-1/2 w-[229px] h-[26px] -translate-x-1/2 ";

  const tabletStyle =
    " min-[768px]:w-[342px] min-[768px]:h-[30px] min-[768px]:-translate-x-1/5 min-[768px]:right-0 min-[768px]:-bottom-3 ";

  const laptopStyle =
    " min-[1152px]:w-[233px] min-[1152px]:h-[37px]  min-[1152px]:left-auto min-[1152px]:-right-5 min-[1152px]:-bottom-4.5 ";

  const desctopStyle =
    "  min-[1440px]:-bottom-3.5 min-[1440px]:w-[516px] min-[1440px]:h-[37px] min-[1440px]:translation-x-0 min-[1440px]:right-9 ";

  const bigDesc =
    "min-[1920px]:left-1/7 min-[1920px]:w-[482px] min-[1920px]:h-[30px] ";

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
          stylesForImage={`${mobStlye} ${tabletStyle} ${laptopStyle} ${desctopStyle} ${bigDesc} `}
          extraTextStyles=" min-[1152px]:text-start"
        >
          Project Management
        </TitleWithDrawing>
        <Text extraStyles="min-[1152px]:text-start ">
          Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </Text>
        <Button>Get Started</Button>
      </div>
      <PhotoSkeleton topMargin={60} extraStyle="min-[1152px]:m-0" />
    </Section>
  );
};

export default ProjectManagment;

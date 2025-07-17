import React from "react";
import Section from "./helper/Section";
import Text from "./helper/Text";
import Button from "./helper/Button";
import PhotoSkeleton from "./helper/PhotoSkeleton";
import TitleWithDrawing from "./helper/TitleWithDrawing";

const UseAsExtension = () => {
  return (
    <Section
      extraStyles="bg-[var(--darkerprimary)] text-[var(--background)] py-20 min-[768px]:py-[100px] min-[1152px]:py-[140px] "
      flexStyle="min-[1152px]:flex min-[1152px]:justify-between min-[1152px]:items-center "
    >
      <div className="min-[1152px]:w-[528px] min-[1440px]:w-[592px] min-[1920px]:w-[697px] ">
        <TitleWithDrawing
          ImageLink="/vector.png"
          width={140}
          height={20}
          stylesForImage="bottom-0 right-5 min-[768px]:w-[244px] min-[768px]:h-7 min-[768px]:right-[64px] min-[768px]:-bottom-1.5 min-[1152px]:w-[312px] min-[1152px]:h-[18px] min-[1152px]:right-1 min-[1152px]:bottom-2 min-[1440px]:w-[416px] min-[1440px]:h-[19px] min-[1440px]:left-0 min-[1440px]:-bottom-7 min-[1920px]:w-[333px] min-[1920px]:bottom-0 min-[1920px]:left-auto min-[1920px]:right-[100px]"
          extraTextStyles="min-[1152px]:text-start"
        >
          Use as Extension
        </TitleWithDrawing>
        <Text extraStyles="max-md:block hidden text-center">
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </Text>
        <Text extraStyles="min-[768px]:block hidden text-center min-[1152px]:text-start ">
          Use the web clipper extension, available on Chrome and Firefox, to
          save web pages or take screenshots as notes.
        </Text>
        <Button>Let{"'"}s Go</Button>
      </div>
      <PhotoSkeleton topMargin={60} extraStyle="min-[1152px]:m-0 " />
    </Section>
  );
};
export default UseAsExtension;

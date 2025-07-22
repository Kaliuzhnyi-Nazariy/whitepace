import React from "react";
import Section from "./helper/Section";
import PhotoSkeleton from "./helper/PhotoSkeleton";
import Text from "./helper/Text";
import Button from "./helper/Button";
import TitleWithDrawing from "./helper/TitleWithDrawing";

const Customise = () => {
  return (
    <Section
      extraStyles="py-[100px] min-[768px]:py-[140px] "
      flexStyle="min-[1152px]:flex min-[1152px]:items-center min-[1152px]:justify-between "
    >
      <PhotoSkeleton extraStyle="mb-[60px] min-[1152px]:m-0 min-[1152px]:h-[398px] " />
      <div className="min-[1152px]:w-[494px] min-[1440px]:w-[646px] ">
        <TitleWithDrawing
          ImageLink="/Vector.png"
          width={157}
          height={26}
          stylesForImage="-bottom-1 right-3 min-[768px]:w-[221px] min-[768px]:h-5 min-[768px]:-right-[4%] min-[768px]:-bottom-0.5 min-[1152px]:w-[355px] min-[1152px]:h-[30px] min-[1152px]:right-auto min-[1152px]:-bottom-2 min-[1440px]:w-[491px] min-[1440px]:h-8 min-[1440px]:bottom-1.5 min-[1920px]:w-[448px] min-[1920px]:-bottom-3"
          extraTextStyles="min-[1152px]:text-start"
        >
          Customise it to your needs
        </TitleWithDrawing>
        <Text extraStyles=" text-center leading-[23px] tracking-0 min-[1152px]:text-start ">
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </Text>
        <Button>Let{"'"}s Go </Button>
      </div>
    </Section>
  );
};

export default Customise;

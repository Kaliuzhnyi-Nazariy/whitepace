import React from "react";
import Title from "./Title";
import Image from "next/image";

const TitleWithDrawing = ({
  children,
  ImageLink,
  width,
  height,
  stylesForImage,
  extraTextStyles,
  newFontSize,
}: {
  children: React.ReactNode;
  ImageLink: string;
  width: number;
  height: number;
  stylesForImage: string;
  extraTextStyles?: string;
  newFontSize?: string;
}) => {
  return (
    <div className="relative">
      <Title
        extraStyles={extraTextStyles ? extraTextStyles : ""}
        newFontSize={newFontSize && newFontSize}
      >
        {children}
      </Title>
      <Image
        src={ImageLink}
        alt="line"
        width={width}
        height={height}
        className={`absolute ${stylesForImage}`}
      />
    </div>
  );
};

export default TitleWithDrawing;

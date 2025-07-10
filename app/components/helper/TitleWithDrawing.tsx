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
}: {
  children: React.ReactNode;
  ImageLink: string;
  width: number;
  height: number;
  stylesForImage: string;
  extraTextStyles?: string;
}) => {
  return (
    <div className="relative">
      <Title extraStyles={extraTextStyles ? extraTextStyles : ""}>
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

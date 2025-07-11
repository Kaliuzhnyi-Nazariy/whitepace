import Image from "next/image";
import React from "react";
import Title from "../helper/Title";
import Text from "../helper/Text";

const Info = () => {
  return (
    <div className="min-[1152px]:w-60 ">
      <div className="flex gap-2.5 items-center justify-center ">
        <Image src="/logoicon.png" alt="company logo" width={37} height={29} />
        <Title extraStyles="text-[28px] ">Whitepace</Title>
      </div>
      <Text extraStyles=" text-center md:text-start ">
        whitepace was created for the new ways we live and work.{" "}
        <br className="max-[1152px]:block hidden" /> We make beautyfully
        designed around the world
      </Text>
      {/* <Text newMT="mt-0" extraStyles=" text-center md:text-start ">
        We make beautyfully designed around the world
      </Text> */}
    </div>
  );
};

export default Info;

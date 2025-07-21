import Image from "next/image";
import React from "react";

const WorkWithBg = () => {
  return (
    <>
      <Image
        src="/bgpict.png"
        alt="lines"
        width={1144}
        height={700}
        className="absolute top-[61%] left-[80%] -translate-1/2 rotate-[33deg] min-w-[306%] h-[606px] z-[-1] pointer-events-none overflow-hidden min-[768px]:rotate-0 min-[768px]:min-w-[140%] min-[768px]:h-[675px] min-[768px]:top-[32%] min-[768px]:left-[70%] 
        min-[1152px]:hidden "
      />
      <Image
        src="/workwithbgpict.png"
        alt="lines"
        width={1144}
        height={700}
        className="absolute hidden 
        min-[1152px]:block min-[1440px]:min-w-[124%] min-[1440px]:h-[700px] min-[1440px]:top-[3%] min-[1440px]:left-[-4%] min-[1920px]:hidden "
      />
      <Image
        src="/workwithdescbg.png"
        alt="lines"
        width={1144}
        height={700}
        className="absolute hidden 
        min-[1920px]:block min-w-[2041px] left-[-2%] "
      />
    </>
  );
};

export default WorkWithBg;

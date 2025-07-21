import Image from "next/image";
import React from "react";

const BgPict = () =>
  //   {
  //   width,
  //   height,
  //   rotDeg,
  // }: {
  //   width?: number;
  //   height?: number;
  //   rotDeg?: number;
  //     }
  {
    // const computedRotation = rotDeg ? `rotate-[${rotDeg}deg]` : "";
    // const computedWidth = `min-w-[${width}px]`;
    // const computedHeight = height ? `h-[${height}px]` : "h-full";

    return (
      <>
        <Image
          src="/mobileBg.png"
          alt="lines"
          width={1046}
          height={633}
          className={`absolute z-[-1] top-[51%] left-[56.3%] min-w-[107%] h-[84%] rotate-[-1deg] pointer-events-none block  md:hidden `}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
        <Image
          src="/bgLines.png"
          alt="lines"
          width={1046}
          height={633}
          className={`absolute z-[-1] hidden pointer-events-none min-[1920px]:min-w-[2652px] min-[1920px]:h-[547px] min-[1440px]:min-w-[147%] min-[1440px]:h-[433px] min-[1440px]:top-[56%] min-[1440px]:left-[68%] min-[1152px]:min-w-[1591px] min-[1152px]:h-[423px] min-[1152px]:top-[56.5%] min-[1152px]:left-[56.5%] min-[768px]:min-w-[1136px] min-[768px]:h-[693.5px] min-[768px]:top-[46%] min-[768px]:left-[50%] min-[768px]:block `}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* <Image
          src="/tabletBg.png"
          alt="lines"
          width={1485}
          height={694}
          className={`absolute z-[-1] pointer-events-none left-1/2 top-[0%] hidden w-[1485px] min-[768px]:block `}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        /> */}
      </>
    );
  };

export default BgPict;
// }] z-[-1] pointer-events-none md:rotate-0 max-[1152px]:min-w-[1485px] md:h-[694px] max-[1152px]:left-1/3 min-[1152px]:min-w-[1591px] (@media(min-width:1152px)):w-[1591px] min-[1152px]:max-h-[423px]  min-[1152px]:left-[59%] min-[1152px]:top-[60%] `}

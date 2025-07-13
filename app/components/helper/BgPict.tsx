import Image from "next/image";
import React from "react";

const BgPict = ({
  width,
  height,
  rotDeg,
}: {
  width: number;
  height: number;
  rotDeg?: number;
}) => {
  const computedRotation = rotDeg ? `rotate-[${rotDeg}deg]` : "";
  const computedWidth = `min-w-[${width}px]`;
  const computedHeight = height ? `h-[${height}px]` : "h-full";

  return (
    <div className="absolute z-[-1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  select-none">
      <Image
        src="/bgpict.png"
        alt="lines"
        width={1026}
        height={633}
        className={`absolute z-[-1] pointer-events-none left-1/2 top-[60%]  ${computedRotation} ${computedWidth} ${computedHeight} md:rotate-0`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default BgPict;
// }] z-[-1] pointer-events-none md:rotate-0 max-[1152px]:min-w-[1485px] md:h-[694px] max-[1152px]:left-1/3 min-[1152px]:min-w-[1591px] (@media(min-width:1152px)):w-[1591px] min-[1152px]:max-h-[423px]  min-[1152px]:left-[59%] min-[1152px]:top-[60%] `}

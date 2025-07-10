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
  return (
    <div className="absolute z-[-1] w-full h-[813px] flex justify-center align-middle select-none">
      <Image
        src="/bgpict.png"
        alt="lines"
        width={1026}
        height={633}
        className={`absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[${
          rotDeg ? rotDeg : "0"
        }deg] min-w-[${width ? width : "1026"}px] h-[${
          height ? `${height}px` : "full"
        }] z-[-1] pointer-events-none md:rotate-0 `}
      />
    </div>
  );
};

export default BgPict;

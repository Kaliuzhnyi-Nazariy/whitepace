import React from "react";

const Resources = ({ listItemStyles }: { listItemStyles: string }) => {
  return (
    <>
      <h4 className="text-[18px] font-bold ">Resources</h4>

      <nav>
        <ul className="flex flex-col gap-[15px] font-light text-[12px] w-full items-center justify-center mt-[15px] md:items-start ">
          <li className={listItemStyles}>
            <a href="#solutions">Blog</a>
          </li>
          <li className={listItemStyles}>
            <a href="#resources">Guides & tutrotials</a>
          </li>
          <li className={listItemStyles}>
            <a href="#pricing">Help center</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Resources;

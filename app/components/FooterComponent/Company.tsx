import React from "react";

const Company = ({ listItemStyles }: { listItemStyles: string }) => {
  return (
    <>
      <h4 className="text-[18px] font-bold ">Company</h4>

      <nav>
        <ul className="flex flex-col gap-[15px] font-light text-[12px] w-full items-center justify-center mt-[15px] md:items-start ">
          <li className={listItemStyles}>About us</li>
          <li className={listItemStyles}>Careers</li>
          <li className={listItemStyles}>Media kit</li>
        </ul>
      </nav>
    </>
  );
};

export default Company;

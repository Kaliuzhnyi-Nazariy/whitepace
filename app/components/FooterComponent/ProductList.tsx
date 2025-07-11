import React from "react";

const ProductList = ({ listItemStyles }: { listItemStyles: string }) => {
  return (
    <>
      <h4 className="text-[18px] font-bold ">Product</h4>

      <nav>
        <ul className="flex flex-col gap-[15px] font-light text-[12px] w-full items-center justify-center mt-[15px] md:items-start ">
          <li className={listItemStyles}>
            <a href="#solutions">Overview</a>
          </li>
          <li className={listItemStyles}>
            <a href="#resources">Pricing</a>
          </li>
          <li className={listItemStyles}>
            <a href="#pricing">Customer stories</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ProductList;

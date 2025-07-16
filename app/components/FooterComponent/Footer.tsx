import React from "react";
import Section from "../helper/Section";
import Info from "./Info";
import ProductList from "./ProductList";
import Resources from "./Resources";
import Company from "./Company";
import TryIt from "./TryIt";
import Bottom from "./BottomOfFooter/Bottom";

const Footer = () => {
  const listItemStyles =
    "focus-within:text-[var(--golden-second)] hover:text-[var(--golden-second)] active:text-[var(--golden-second)] cursor-pointer  ";

  const liStyles = "flex flex-col max-md:items-center md:items-start";

  return (
    <Section extraStyles="pt-[140px] justify-start bg-[var(--darkerprimary)] text-[var(--background)]  min-[768px]:pt-20 min-[768px]:pb-[100px] min-[1152px]:pt-[140px] ">
      <div className="flex flex-col max-md:items-center md:items-start">
        <ul className="flex flex-col max-[1152px]:gap-20 min-[1152px]:flex-row min-[1152px]:justify-between min-[1152px]:w-full ">
          <li className={liStyles}>
            <Info />
          </li>
          <li className={liStyles}>
            <ProductList listItemStyles={listItemStyles} />
          </li>
          <li className={liStyles}>
            <Resources listItemStyles={listItemStyles} />
          </li>
          <li className={liStyles}>
            <Company listItemStyles={listItemStyles} />
          </li>
          <li className={liStyles}>
            <TryIt
              extraStyle="w-[201px] min-[1152px]:w-[259px] "
              textStyle="font-light text-center min-[1152px]:tracking-[-0.02em] min-[1152px]:text-[16px] min-[768px]:text-start "
              titleStyle=" min-[1152px]:text-start"
              newFontSize="text-[28px]"
              buttonStyle="w-[187px]"
              anotherBtnPlace="min-[1152px]:mr-auto "
            />
          </li>
        </ul>
      </div>
      <Bottom listItemStyles={listItemStyles} />
    </Section>
  );
};

export default Footer;

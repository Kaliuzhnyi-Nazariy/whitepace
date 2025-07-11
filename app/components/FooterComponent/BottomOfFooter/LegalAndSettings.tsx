import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const LegalAndSettings = ({
  listItemStyles,
  extraStyles,
}: {
  listItemStyles: string;
  extraStyles?: string;
}) => {
  return (
    <ul
      className={`mt-20 flex flex-col w-full items-center font-light text-[16px] gap-5 md:flex-row md:w-full md:justify-between min-[1152px]::w-[737px] ${
        extraStyles || ""
      } `}
    >
      <li className={`flex gap-1.5 items-center ${listItemStyles} `}>
        <CiGlobe size={19} />
        <p>English</p>
        <IoIosArrowDown width={20} height={14} />
      </li>
      <li className={listItemStyles}>Terms & privacy</li>
      <li className={listItemStyles}>Security</li>
      <li className={listItemStyles}>Status</li>
      <li className="">©2021 Whitepace LLC.</li>
    </ul>
  );
};

export default LegalAndSettings;

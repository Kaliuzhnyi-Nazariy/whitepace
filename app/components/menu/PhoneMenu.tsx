import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../helper/Button";

const PhoneMenu = ({ closeModal }: { closeModal: () => void }) => {
  const listItemStyles =
    "w-full transform transition-all focus-within:text-[var(--golden-second)] hover:text-[var(--golden-second)] active:text-[var(--golden-second)] focus-within:translate-x-1 hover:translate-x-1 active:translate-x-1";

  return (
    <div className="flex flex-col justify-center items-center font-bold text-[20px] text-[var(--background)] fixed top-0 left-0 bg-[var(--darkerprimary)] w-full h-full z-10">
      <button className="absolute top-5 right-4" onClick={() => closeModal()}>
        <IoMdClose />
      </button>
      <p className="flex items-center gap-2 mb-10 min-[768px]:text-2xl min-[1152px]:text-3xl ">
        <Image src="/logoIcon.png" alt="logo" width={26} height={22} />
        whitepace
      </p>
      <nav>
        <ul className="flex flex-col gap-2 font-light text-[12px] w-full min-[768px]:text-[16px] min-[1152px]:text-[18px] min-[1152px]:gap-4 ">
          <li className={listItemStyles} onClick={() => closeModal()}>
            <a href="#products">Products</a>
          </li>
          <li className={listItemStyles} onClick={() => closeModal()}>
            <a href="#solutions">Solutions</a>
          </li>
          <li className={listItemStyles} onClick={() => closeModal()}>
            <a href="#resources">Resources</a>
          </li>
          <li className={listItemStyles} onClick={() => closeModal()}>
            <a href="#pricing">Pricing</a>
          </li>
          <li className="w-full mt-10 flex flex-col items-center gap-2 min-[768px]:gap-4 min-[1152px]:hidden ">
            <div onClick={closeModal}>
              <a href="">
                <Button isAuthBtn isLogin noArrow>
                  Login
                </Button>
              </a>
            </div>
            <div onClick={closeModal}>
              <a href="">
                <Button isAuthBtn>Try Whitepace free</Button>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PhoneMenu;

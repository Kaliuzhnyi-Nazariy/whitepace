"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import PhoneMenu from "./menu/PhoneMenu";
import Button from "./helper/Button";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="flex justify-between absolute h-14 w-full px-4 text-[var(--background)] z-[2] min-[1152px]:h-24 min-[1920px]:px-[220px] ">
        <a href="" className="flex items-center gap-2">
          <Image src="/logoIcon.png" alt="logo" width={26} height={22} />
          <h1 className="font-bold text-[20px]">whitepace</h1>
        </a>
        <div className="flex items-center gap-5 min-[1440px]:w-[929px] min-[1440px]:justify-between ">
          <ul className="hidden gap-8 min-[1440px]:flex">
            <li className="flex gap-2.5 items-center">
              <a href="#products">Products</a>
              <IoIosArrowDown width={9} height={4} />
            </li>
            <li className="flex gap-2.5 items-center">
              <a href="#solutions">Solutions</a>
              <IoIosArrowDown width={9} height={4} />
            </li>
            <li className="flex gap-2.5 items-center">
              <a href="#resources">Resources</a>
              <IoIosArrowDown width={9} height={4} />
            </li>
            <li className="flex gap-2.5 items-center">
              <a href="#pricing">Pricing</a>
              <IoIosArrowDown width={9} height={4} />
            </li>
          </ul>
          <ul className="hidden min-[1152px]:flex gap-6">
            <li>
              <Button isAuthBtn isLogin noArrow>
                Login
              </Button>{" "}
            </li>
            <li>
              <Button isAuthBtn>Try Whitepace free</Button>{" "}
            </li>
          </ul>
          <button onClick={() => openMenu()} className="min-[1440px]:hidden ">
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      {menuOpen && <PhoneMenu closeModal={closeMenu} />}
    </>
  );
};

export default Header;

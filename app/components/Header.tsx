"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import PhoneMenu from "./menu/PhoneMenu";

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
      <nav className="flex justify-between absolute h-14 w-full px-4 text-[var(--background)] z-[2]">
        <a href="" className="flex items-center gap-2">
          <Image src="/logoIcon.png" alt="logo" width={26} height={22} />
          <h1 className="font-bold text-[20px]">whitepace</h1>
        </a>
        <button onClick={() => openMenu()}>
          <GiHamburgerMenu />
        </button>
      </nav>
      {menuOpen && <PhoneMenu closeModal={closeMenu} />}
    </>
  );
};

export default Header;

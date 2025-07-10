import React from "react";
import Section from "./helper/Section";
import Title from "./helper/Title";
import Text from "./helper/Text";
import Button from "./helper/Button";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const listItemStyles =
    "focus-within:text-[var(--golden-second)] hover:text-[var(--golden-second)] active:text-[var(--golden-second)] cursor-pointer ";

  return (
    <Section extraStyles="pt-[140px] justify-start bg-[var(--darkerprimary)] text-[var(--background)] py-8 ">
      <div className="flex gap-2.5 items-center justify-center">
        <Image src="/logoicon.png" alt="company logo" width={37} height={29} />
        <Title extraStyles="text-[28px] ">Whitepace</Title>
      </div>
      <Text>
        whitepace was created for the new ways we live and work. We make
        beautyfully designed around the world{" "}
      </Text>

      <div className="mt-20 flex flex-col items-center">
        <ul className="flex flex-col gap-20">
          <li className="flex flex-col items-center">
            <h4 className="text-[18px] font-bold ">Product</h4>

            <nav>
              <ul className="flex flex-col gap-[15px] font-light text-[12px] w-full items-center justify-center mt-[15px] ">
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
          </li>
          <li className="flex flex-col items-center">
            <h4 className="text-[18px] font-bold ">Resources</h4>

            <nav>
              <ul className="flex flex-col gap-[15px] font-light text-[12px] w-full items-center justify-center mt-[15px] ">
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
          </li>
          <li className="flex flex-col items-center">
            <h4 className="text-[18px] font-bold ">Company</h4>

            <nav>
              <ul className="flex flex-col gap-[15px] font-light text-[12px] w-full items-center justify-center mt-[15px] ">
                <li className={listItemStyles}>
                  <a href="#solutions">About us</a>
                </li>
                <li className={listItemStyles}>
                  <a href="#resources">Careers</a>
                </li>
                <li className={listItemStyles}>
                  <a href="#pricing">Media kit</a>
                </li>
              </ul>
            </nav>
          </li>{" "}
        </ul>
      </div>

      <Title extraStyles="mt-20">Try It Today</Title>
      <Text>Get started for free. Add your whole team as your needs grow.</Text>
      <Button changedMT="mt-[23px]">Satrt today</Button>

      <ul className="mt-20 flex flex-col w-full items-center font-light text-[16px] gap-5">
        <li className={`flex gap-1.5 items-center ${listItemStyles}`}>
          <CiGlobe size={19} />
          <p>English</p>
          <IoIosArrowDown width={20} height={14} />
        </li>
        <li className={listItemStyles}>Terms & privacy</li>
        <li className={listItemStyles}>Security</li>
        <li className={listItemStyles}>Status</li>
      </ul>

      <p className="mt-5 flex flex-col w-full items-center font-light text-[16px]">
        ©2021 Whitepace LLC.
      </p>

      <div className="w-full h-[1px] bg-[var(--foreground)] mt-5 opacity-30"></div>

      <ul className="flex gap-8 justify-center items-center mt-5">
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <Image src="/Facebook.png" alt="Facebook" width={9} height={17} />
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank">
            <Image src="/Twitter.png" alt="Twitter" width={17} height={14} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank">
            <Image src="/Linkedin.png" alt="LinkedIn" width={15} height={15} />
          </a>
        </li>
      </ul>
      {/*
      <Text extraStyles="text-start mt-10">On a big team? Contact sales</Text>
      <ul className="flex gap-10 mt-10">
        <li>
          <a href="https://www.apple.com/" target="_blank">
            <Image
              src={"/apple-white.png"}
              alt="Apple logo"
              width={35}
              height={36}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.microsoft.com/en-us/windows/?r=1"
            target="_blank"
          >
            <Image
              src={"/windows-white.png"}
              alt="Windows logo"
              width={35}
              height={36}
            />
          </a>
        </li>
        <li>
          <a href="https://www.android.com/" target="_blank">
            <Image
              src={"/android.png"}
              alt="Android logo"
              width={35}
              height={36}
            />
          </a>{" "}
        </li>
      </ul> */}
    </Section>
  );
};

export default Footer;

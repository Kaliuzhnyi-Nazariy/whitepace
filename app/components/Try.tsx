import React from "react";
import Section from "./helper/Section";
import Title from "./helper/Title";
import Text from "./helper/Text";
import Button from "./helper/Button";
import Image from "next/image";

const TryComponent = () => {
  return (
    <Section extraStyles="pt-[100px] justify-start bg-[var(--darkerprimary)] text-[var(--background)] pb-8 min-[768px]:pt-[140px] ">
      <div className="min-[1152px]:w-[608px] mx-auto ">
        <Title extraStyles="text-start text-[40px] min-[1152px]:text-center  ">
          Try Whitepace today
        </Title>
        <Text extraStyles="text-start min-[1152px]:text-center ">
          Get started for free.
          <br />
          Add your whole team as your needs grow.
        </Text>
        <Button
          changedMT="mt-10"
          anotherPlace="max-[1151px]:mr-auto min-[1152px]:mx-auto "
        >
          Try Taskey free
        </Button>
        <Text extraStyles="text-start mt-10  min-[1152px]:text-center">
          On a big team? Contact sales
        </Text>
        <ul className="flex gap-10 mt-10  min-[1152px]:justify-center">
          <li>
            <a href="https://www.apple.com/" target="_blank">
              <Image
                src={"/apple-white.png"}
                alt="Apple logo"
                width={35}
                height={36}
                className="min-[768px]:w-[60px] min-[768px]:h-[60px] "
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
                className="min-[768px]:w-[60px] min-[768px]:h-[60px] "
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
                className="min-[768px]:w-[60px] min-[768px]:h-[60px] "
              />
            </a>{" "}
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default TryComponent;

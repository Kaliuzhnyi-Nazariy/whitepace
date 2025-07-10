import React from "react";
import Section from "./helper/Section";
import Title from "./helper/Title";
import Text from "./helper/Text";
import Button from "./helper/Button";
import Image from "next/image";

const TryComponent = () => {
  return (
    <Section extraStyles="pt-[100px] justify-start bg-[var(--darkerprimary)] text-[var(--background)] pb-8 ">
      <Title extraStyles="text-start text-[40px] ">Try Whitepace today</Title>
      <Text extraStyles="text-start">
        Get started for free. Add your whole team as your needs grow.
      </Text>
      <Button changedMT="mt-10" anotherPlace="mr-auto">
        Try Taskey free
      </Button>
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
      </ul>
    </Section>
  );
};

export default TryComponent;

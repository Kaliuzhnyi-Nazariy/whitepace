import React from "react";
import Section from "./helper/Section";
import Title from "./helper/Title";
import Image from "next/image";
import Text from "./helper/Text";
import Button from "./helper/Button";

const WorkTogether = () => {
  return (
    <Section>
      <div className="relative">
        <Title extraStyles="relative z-[3]">Work together</Title>
        <Image
          src={"/vector.png"}
          alt="line"
          width={164}
          height={26}
          className="absolute bottom-0.5 right-[5px] "
        />
      </div>
      <Text>
        With whitepace, share your notes with your colleagues and collaborate on
        them. You can also publish a note to the internet and share the URL with
        others.
      </Text>
      <Button>Try it now</Button>
      <Image
        src="/WTI.png"
        alt="work together"
        width={279}
        height={260}
        className="mt-[60px] mb-20"
      />
    </Section>
  );
};

export default WorkTogether;

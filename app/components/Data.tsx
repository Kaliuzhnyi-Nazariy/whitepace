import React from "react";
import Section from "./helper/Section";
import Image from "next/image";
import TitleWithDrawing from "./helper/TitleWithDrawing";
import Text from "./helper/Text";
import Button from "./helper/Button";

const Data = () => {
  return (
    <Section extraStyles="py-20">
      <Image
        src={"/DataElement.png"}
        alt="what connect"
        width={290}
        height={163}
      />
      <TitleWithDrawing
        ImageLink="/Vector.png"
        width={194}
        height={24}
        stylesForImage="-bottom-3.5 -right-4"
      >
        100% your data
      </TitleWithDrawing>
      <Text>
        The app is open source and your notes are saved to an open format, so
        you{"'"}ll always have access to them. Uses End-To-End Encryption (E2EE)
        to secure your notes and ensure no-one but yourself can access them.
      </Text>
      <Button>Read more</Button>
    </Section>
  );
};

export default Data;

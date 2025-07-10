import React from "react";
import Section from "./helper/Section";
// import Title from "./helper/Title";
import TitleWithDrawing from "./helper/TitleWithDrawing";
import Text from "./helper/Text";
import Button from "./helper/Button";

const WorkEverywhere = () => {
  return (
    <Section extraStyles="justify-start bg-[var(--darkerprimary)] text-[var(--background)] pt-[100px] pb-[140px] ">
      {/* <div className="relative">
        <Title extraStyles="text-start">Your work, everywhere you are</Title>
      </div> */}
      <TitleWithDrawing
        ImageLink="/VectorBlue.png"
        width={274}
        height={31}
        stylesForImage="-bottom-3.5"
        extraTextStyles="text-start"
      >
        Your work, everywhere you are
      </TitleWithDrawing>
      <Text extraStyles="text-start">
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </Text>
      <Button anotherPlace="mr-auto">Try Taskey</Button>
    </Section>
  );
};

export default WorkEverywhere;

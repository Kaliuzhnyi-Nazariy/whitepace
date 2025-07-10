import React from "react";
import Section from "../helper/Section";
import TitleWithDrawing from "../helper/TitleWithDrawing";
import commetors from "../comments.json";
import Carousel from "../helper/Carousel";

const CllientsSays = () => {
  return (
    <Section extraStyles="py-[100px] ">
      <TitleWithDrawing
        ImageLink="/Vector.png"
        width={120}
        height={26}
        stylesForImage="bottom-2 left-18"
      >
        What Our Clients Says
      </TitleWithDrawing>
      <Carousel type="comment" value={commetors} />
    </Section>
  );
};

export default CllientsSays;

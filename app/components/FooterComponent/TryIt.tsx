import React from "react";
import Title from "../helper/Title";
import Text from "../helper/Text";
import Button from "../helper/Button";

const TryIt = ({
  extraStyle = "",
  titleStyle = "",
  textStyle = "",
  buttonStyle = "",
  anotherBtnPlace = "",
  newFontSize = "",
}) => {
  return (
    <div className={extraStyle}>
      <Title
        changedLetSpace="leading-[39px]"
        extraStyles={titleStyle}
        newFontSize={newFontSize}
        isHero
      >
        Try It Today
      </Title>
      <Text extraStyles={textStyle}>
        Get started for free. Add your whole team as your needs grow.
      </Text>
      <Button
        changedMT="mt-[23px] "
        extraStyles={buttonStyle}
        anotherPlace={anotherBtnPlace}
      >
        Start today
      </Button>
    </div>
  );
};

export default TryIt;

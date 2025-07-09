import React from "react";

const Title = ({
  children,
  extraStyles = "",
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) => {
  return (
    <h2 className={`${extraStyles && extraStyles} text-4xl font-bold`}>
      {children}
    </h2>
  );
};

export default Title;

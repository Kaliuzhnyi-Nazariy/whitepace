import React from "react";
import Section from "./helper/Section";
import Title from "./helper/Title";
import Image from "next/image";
import Text from "./helper/Text";
import Button from "./helper/Button";
import PhotoSkeleton from "./helper/PhotoSkeleton";

const ProjectManagment = () => {
  return (
    <Section extraStyles="text-center mt-20">
      <div className="relative">
        <Title extraStyles="relative z-[3]">Project Management</Title>
        <Image
          src={"/vector.png"}
          alt="line"
          width={229}
          height={26}
          className="absolute -bottom-3.5 left-1/2 -translate-x-1/2"
        />
      </div>
      <Text>
        Images, videos, PDFs and audio files are supported. Create math
        expressions and diagrams directly from the app. Take photos with the
        mobile app and save them to a note.
      </Text>
      <Button>Get Started</Button>
      <PhotoSkeleton topMargin={60} bottomMargin={100} />
    </Section>
  );
};

export default ProjectManagment;

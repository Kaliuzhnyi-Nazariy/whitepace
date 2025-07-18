import React from "react";
import { ITrusted } from "../TypesAndInterfaces";
import Text from "../helper/Text";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const TrustedComment = ({
  comment,
  extraClass = "",
  isChangedStyle = false,
}: {
  comment: ITrusted;
  extraClass?: string;
  isChangedStyle?: boolean;
}) => {
  return (
    <div
      className={`keen-slider__slide !w-[341px] !flex-shrink-0 h-[430px]  ${
        isChangedStyle
          ? " bg-[var(--background)] text-[var(--foreground)] "
          : " bg-[var(--lighterprimary)] text-[var(--background)]"
      }  p-5 shadow-[10px_10px_50px_0_rgba(0,0,0,0.08)] ${extraClass}`}
    >
      <div className="relative w-14 h-14 overflow-hidden rounded-full mt-10">
        <Image
          src={comment.image}
          alt={comment.name}
          fill
          className="object-cover "
        />
      </div>
      <p className="text-[16px] font-light mt-[35px]">
        {'"'}
        {comment.comment}
        {'"'}
      </p>
      <div className="mt-[49px]">
        <div className="flex justify-between">
          <Text extraStyles="text-start font-bold" newMT="mt-0">
            {comment.name}
          </Text>
          <ul className="flex gap-[7px]">
            <li>
              <FaStar size={15} className="fill-[var(--golden-second)]" />
            </li>
            <li>
              <FaStar size={15} className="fill-[var(--golden-second)]" />
            </li>
            <li>
              <FaStar size={15} className="fill-[var(--golden-second)]" />
            </li>
            <li>
              <FaStar size={15} className="fill-[var(--golden-second)]" />
            </li>
            <li>
              <FaStar size={15} className="fill-[var(--golden-second)]" />
            </li>
          </ul>
        </div>
        <Text extraStyles="text-start" newMT="mt-0">
          {comment.job}, {comment.company}
        </Text>{" "}
      </div>
    </div>
  );
};

export default TrustedComment;

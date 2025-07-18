import React from "react";
import { IComment } from "../TypesAndInterfaces";
import Image from "next/image";
import Text from "../helper/Text";

const CommentItem = ({
  comment,
  extraClass = "",
  isChangedStyle = false,
}: {
  comment: IComment;
  extraClass?: string;
  isChangedStyle?: boolean;
}) => {
  return (
    <div
      className={`keen-slider__slide shadow-[10px_10px_50px_0_rgba(0,0,0,0.08)] rounded-[10px] w-[288px] h-[458px] !flex-shrink-0  min-[1152px]:!w-[341px] min-[1152px]:!h-[560px] min-[1440px]:!w-[calc((1376px-64px)/3)] min-[1440px]:!h-[498px] min-[1920px]:!w-[calc((100%-64px)/3)] ${
        isChangedStyle
          ? "bg-[var(--background)] text-[var(--foreground)]"
          : "bg-[var(--lighterprimary)] text-[var(--background)]"
      } p-5 min-[1152px]:py-[60px] ${extraClass}`}
    >
      <div className="relative w-14 h-10 min-[1152px]:w-[86px] min-[1152px]:h-[61px] ">
        {isChangedStyle ? (
          <Image src="/quotationMarks.png" alt="quotation open mark" fill />
        ) : (
          <Image
            src="/whiteQuotationMarks.png"
            alt="quotation open mark"
            fill
          />
        )}
      </div>
      <p className="text-[16px] mt-8 min-[1440px]:text-[18px] min-[1440px]:leading-[30px] min-[1152px]:tracking-[0.02em] ] ">
        {comment.comment}
      </p>
      <div
        className={`w-full h-[1px] bg-[var(--foreground)] min-[1152px]:bg-[var(--background)] ${
          isChangedStyle ? " min-[1152px]:bg-[var(--foreground)]" : " "
        } mt-10 `}
      ></div>

      <div className="mt-10 w-full min-[1152px]:flex min-[1152px]:justify-between min-[1440px]:mt-[60px] ">
        <div className="relative w-14 h-14 overflow-hidden rounded-full min-[1152px]:w-[95px] min-[1152px]:h-[95px]  ">
          <Image
            src={comment.image}
            alt={comment.name}
            fill
            className="object-cover "
          />
        </div>
        <div className=" min-[1152px]:w-[174px] min-[1440px]:w-[246px] ">
          <Text
            extraStyles={`text-start font-bold min-[1152px]:text-2xl min-[1152px]:font-semibold ${
              isChangedStyle ? "" : " text-[var(--darkerprimary)] "
            } `}
            newMT=" mt-6 min-[1152px]:m-0 "
          >
            {comment.name}
          </Text>
          <Text extraStyles="text-start font-bold min-[1152px]:text-[16px] min-[1152px]:font-light ">
            {comment.job}, {comment.place}
          </Text>
        </div>
      </div>
      {/*  <h3 className="font-semibold text-2xl">{plan.type}</h3>
      <h4 className="font-bold text-4xl mt-6">${plan.price}</h4>
      <p className="font-light text-[16px] mt-4">{plan.message}</p>
      <ul className="mt-6 flex flex-col gap-7">
        {plan.advantages.map((adv, index) => {
          return (
            <li key={index} className="flex gap-5 items-center">
              <p className="w-[212px]">{adv}</p>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default CommentItem;

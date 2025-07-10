import React from "react";
import { IComment } from "../TypesAndInterfaces";
import Image from "next/image";
import Text from "../helper/Text";

const CommentItem = ({ comment }: { comment: IComment }) => {
  return (
    <div
      className={`keen-slider__slide  w-[288px] h-[458px] bg-[var(--background)] text-[var(--foreground)] p-5`}
    >
      <div className="w-[248px]">
        <div className="relative w-14 h-10">
          <Image src="/quotationMarks.png" alt="quotation open mark" fill />
        </div>
        <p className="text-[16px] mt-8">{comment.comment}</p>
        <div className="w-full h-[1px] bg-[var(--foreground)] mt-10"></div>

        <div className="relative w-14 h-14 overflow-hidden rounded-full mt-10">
          <Image
            src={comment.image}
            alt={comment.name}
            fill
            className="object-cover "
          />
        </div>
        <Text extraStyles="text-start font-bold">{comment.name}</Text>
        <Text extraStyles="text-start font-bold">
          {comment.job}, {comment.place}
        </Text>
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
    </div>
  );
};

export default CommentItem;

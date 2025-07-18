"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ListOfAdvantagesItem from "../PlanChosing/ListOfAdvantagesItem";
import {
  Commments,
  IComment,
  IPlan,
  ITrusted,
  Plans,
  TrustedComments,
} from "../TypesAndInterfaces";
import CommentItem from "../Reviews/CommentItem";
import TrustedComment from "../Reviews/TrustedComment";

const Carousel = ({
  type,
  value,
  extraStyles = "",
}: {
  type: "plan" | "comment" | "trusted";
  value: Plans | Commments | TrustedComments;
  extraStyles?: string;
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: currentSlide,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      spacing: 32,
      perView: "auto",
      origin: "center",
    },
    loop: true,
    mode: "free",
  });

  return (
    <div
      className={`${
        type === "plan" ? "min-[768px]:hidden" : ""
      } ${extraStyles}`}
    >
      <div ref={sliderRef} className="keen-slider mt-[85px]  ">
        {value.map((v, index) => {
          return type === "plan" ? (
            <ListOfAdvantagesItem plan={v as IPlan} key={index} />
          ) : type === "comment" ? (
            <CommentItem
              comment={v as IComment}
              key={index}
              isChangedStyle={index === currentSlide}
            />
          ) : (
            <TrustedComment
              comment={v as ITrusted}
              isChangedStyle={index === currentSlide}
              key={index}
            />
          );
        })}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex py-2.5 justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full mx-[5px] p-[5px] cursor-pointer focus:outline-0 mt-[85px] ${
                  currentSlide === idx
                    ? "bg-[var(--darkerprimary)]"
                    : "bg-[var(--lighterprimary)]"
                }`}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;

{
  /* <CommentItem
  comment={v as IComment}
  key={index}
  extraClass=" min-[768px]:hidden min-[1152px]:block "
/> */
}
{
  /* <CommentItem
  comment={v as IComment}
  key={index + 10}
  extraClass=" hidden min-[768px]:block min-[1152px]:hidden "
/> */
}

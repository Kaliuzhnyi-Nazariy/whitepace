"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ListOfAdvantagesItem from "../PlanChosing/ListOfAdvantagesItem";
import { Commments, IComment, IPlan, Plans } from "../TypesAndInterfaces";
import CommentItem from "../Reviews/CommentItem";

const Carousel = ({
  type,
  value,
}: {
  type: "plan" | "comment";
  value: Plans | Commments;
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
    },
    loop: true,
  });

  return (
    <div className="min-[768px]:hidden">
      <div ref={sliderRef} className="keen-slider mt-[85px]  ">
        {value.map((v, index) => {
          return type === "plan" ? (
            <ListOfAdvantagesItem plan={v as IPlan} key={index} />
          ) : (
            <CommentItem comment={v as IComment} key={index} />
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

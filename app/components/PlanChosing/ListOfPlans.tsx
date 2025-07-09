"use client";

import React, { useState } from "react";
import plans from "../plans.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ListOfAdvantagesItem from "./ListOfAdvantagesItem";

const ListOfPlans = () => {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 1,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider mt-[85px]">
        {plans.map((plan, index) => {
          return <ListOfAdvantagesItem plan={plan} key={index} />;
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
                className={`w-2.5 h-2.5 rounded-full mx-[5px] p-[5px] cursor-pointer focus:outline-0 mt-20 mb-20 ${
                  currentSlide === idx
                    ? "bg-[var(--darkerprimary)]"
                    : "bg-[var(--lighterprimary)]"
                }`}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListOfPlans;

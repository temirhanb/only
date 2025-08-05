import React, {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {useMainPageState} from "../../shared/state/mainPageState";
import "./styles/index.scss";

export const YearsSwiper: React.FC = () => {
  const {currentSlide, data} = useMainPageState(state => state);

  const slideItems = Object.values(data[currentSlide]);
  const firstSlided = slideItems[0].data;
  const lastSlided = slideItems[slideItems.length - 1].data;
  const firstYearRef = useRef(null);
  const lastYearRef = useRef(null);
  const [firstYear, setFirstYear] = useState(firstSlided);
  const [lastYear, setLastYear] = useState(lastSlided);

  useEffect(() => {
    const obj = {value: 2000};

    gsap.to(obj, {
      value: firstSlided,
      duration: 2, // Animation duration in seconds
      ease: "power1.out", // Easing function
      onUpdate: () => {
        // Update the React state on each animation frame
        setLastYear(Math.round(obj.value));
        setFirstYear(Math.round(obj.value));
      },
    });
  }, [firstSlided]);
  return (
    <div className={"years__swiper"}>
      <h1 ref={firstYearRef} className={"first__year"}>{firstYear}</h1>
      <h1 ref={lastYearRef} className={"last__year"}>{lastYear}</h1>
    </div>
  );
};
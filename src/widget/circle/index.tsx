import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {useMainPageState} from "../../shared/state/mainPageState";
import "./styles/index.scss";

export const CircleComponent: React.FC = () => {
  const {currentSlide} = useMainPageState(state => state);

  const circleRef = useRef(null); // Create a ref to target the circle element

  useEffect(() => {
    console.log("update");
    gsap.to(circleRef.current, {
      x: currentSlide,
      rotation: 90,
      duration: 2,
    });
  }, [currentSlide]);
  return (
    <div ref={circleRef} className={"container__circle"}>
      <div className={"container__circle-slide"}>
        <span>{currentSlide}</span>
      </div>
    </div>
  );
};
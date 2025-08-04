import React, {useRef, useState} from "react";
import gsap from "gsap";
import {useMainPageState} from "../../shared/state/mainPageState";
import "./styles/index.scss";
import {useGSAP} from "@gsap/react";

export const CircleComponent: React.FC = () => {
  const {currentSlide, data} = useMainPageState(state => state);

  const circleRef = useRef(null); // Create a ref to target the circle element
  const pointsRef = useRef(null); // Create a ref to target the circle element

  const [watchPoint, setWatchPoint] = useState(false);
  const [rotation, setRotation] = useState(0);
  useGSAP(() => {
    setWatchPoint(true);
    gsap.to(circleRef.current, {
      x: currentSlide,
      rotation: rotation,
      duration: 1,
      onComplete: () => setWatchPoint(false)
    });
    setRotation(prevState => prevState + 120);
  }, [currentSlide]);
  console.log(data.length);
  return (
    <div className={"container__circle"}>
      <div ref={circleRef} className={"circle"}>
        <div ref={pointsRef} className={`points__container ${watchPoint ? "hidden" : ""}`}>
          {data.map((_, index) => (
            <div key={index} className={`circle__point ${"index" + index}`}/>
          ))}
        </div>

      </div>
      <div className={`container__circle-slide ${watchPoint ? "hidden" : ""}`}>
        <span>{currentSlide}</span>
      </div>
    </div>

  );
};
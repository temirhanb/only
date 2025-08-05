import React from "react";
import "./styles/index.scss";
import {useCircleComponentHook} from "./hook/useCircleComponentHook";

export const CircleComponent: React.FC = () => {
  const {circleRef, data, handlerSetSlide, pointsRef, currentSlide} = useCircleComponentHook();
  return (
    <div className={"container__circle"} onClick={() => console.log("22click")}>
      <div ref={circleRef} className={"circle"}>
        <div ref={pointsRef} className={`points__container`}>
          {data.map((_, index) => (
            <div
              key={index + "point-container"}
              onClick={() => handlerSetSlide(index)}
              className={`circle__point ${"index" + index}`}
            >
              <div className={`container__circle-slide ${index === currentSlide ? "active" : ""}`}>
                <div className={`container__circle-point ${"index" + index}`}/>
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import React from "react";
import "./styles/index.scss";
import {useYearsSwiperHook} from "./hook/useYearsSwiperHook";

export const YearsSwiper: React.FC = () => {
  const {firstYearRef, firstYear, lastYearRef, lastYear} = useYearsSwiperHook();

  return (
    <div className={"years__swiper"}>
      <h1 ref={firstYearRef} className={"first__year"}>{firstYear}</h1>
      <h1 ref={lastYearRef} className={"last__year"}>{lastYear}</h1>
    </div>
  );
};
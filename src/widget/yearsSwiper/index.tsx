import React from "react";
import {useMainPageState} from "../../shared/state/mainPageState";
import "./styles/index.scss";

export const YearsSwiper: React.FC = () => {
  const {currentSlide, data} = useMainPageState(state => state);

  const slideItems = Object.values(data[currentSlide]);
  const firstSlided = slideItems[0].data
  const lastSlided = slideItems[slideItems.length - 1].data
  return (
    <div className={"years__swiper"}>
      <h1 className={"first__year"}>{firstSlided}</h1>
      <h1 className={"last__year"}>{lastSlided}</h1>
    </div>
  );
};
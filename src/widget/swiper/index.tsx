import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "./styles/index.scss";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";

import {Navigation, Pagination} from "swiper/modules";
import {useMainPageState} from "../../shared/state/mainPageState";

export const SwiperHistory: React.FC = () => {

  const {incrementSlide, decrementSlide, data, currentSlide} = useMainPageState(state => state);

  const handlerIncrementSlide = () => {

    currentSlide < data.length - 1 && incrementSlide();
  };

  const handlerDecrementSlide = () => {
    currentSlide > 0 && decrementSlide();
  };

  const screenWidth = window.screen.width;

  return (
    <div className={"swiper__container"}>
      <div className={"swiper__desc-button"}>
        <span>0{currentSlide + 1}/0{data.length}</span>
        <div className={"swiper__button"}>
          <button className={`swiper__button-pagination ${currentSlide === 0 ? "disabled" : ""}`}
                  onClick={handlerDecrementSlide}>
            <img
              src="/left-arrow.svg"
              alt="dec slide"
            />
          </button>
          <button
            className={`swiper__button-pagination ${currentSlide + 1 === data.length ? "disabled" : ""}`}
            onClick={handlerIncrementSlide}>
            <img
              src="/right-arrow.svg"
              alt="inc slide"
            />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={screenWidth < 720 ? 2 : 3}
        className={"swiper"}
        pagination={screenWidth >= 720}
        navigation={screenWidth >= 720}
        modules={[Navigation, Pagination]}
      >
        {Object.values(data[currentSlide]).map(item => (
          <SwiperSlide className={"swiper__item"} key={item.data}>
            <h1>{item.data}</h1>
            <span>{item.title}</span>
            <span slot="wrapper-end">Wrapper End</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>);
};
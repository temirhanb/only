import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "./styles/index.scss";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";
//@ts-ignore
import "swiper/css/pagination";

import {Navigation} from "swiper/modules";
import {useSwiperHook} from "./hook/useSwiperHook";

export const SwiperHistory: React.FC = () => {
  const {
    screenWidth,
    currentSlide,
    data,
    handlerSetSlide,
    handlerIncrementSlide,
    handlerDecrementSlide,
    slideViewRef
  } = useSwiperHook();

  return (
    <div className={"swiper__container"}>
      <div className={"swiper__desc-button"}>
        <div>
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
        <div className={"swiper__pagination"}>
          {data.map((_, index) => (
            <div onClick={() => handlerSetSlide(index)} className={index === currentSlide ? "active" : ""}/>
          ))}
        </div>
      </div>
      <Swiper
        ref={slideViewRef}
        slidesPerView={screenWidth < 720 ? 2 : 3}
        className={"swiper"}
        navigation={screenWidth >= 720}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Object.values(data[currentSlide]).map(item => (
          <SwiperSlide className={"swiper__item"} key={item.data}>
            <h1>{item.data}</h1>
            <span>{item.title}</span>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>);
};
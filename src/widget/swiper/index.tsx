import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "./styles/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Navigation, Pagination} from "swiper/modules";
import {useMainPageState} from "../../shared/state/mainPageState";

export const SwiperHistory: React.FC = () => {

  const {incrementSlide, decrementSlide, data, currentSlide, slides} = useMainPageState(state => state);

  return (
    <div className={"swiper__container"}>
      <button onClick={() => incrementSlide()}>inc</button>
      <button onClick={() => decrementSlide()}>dec</button>
      <Swiper
        slidesPerView={3}
        className={"swiper"}
        pagination={{clickable: true}}
        modules={[Navigation, Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={() => console.log(123)}
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
import React from "react";
import {register} from "swiper/element/bundle";
import {CrossComponent, Header, SwiperHistory} from "../../widget";
import {CircleComponent} from "../../widget/circle";
import "./style/index.scss";
import {YearsSwiper} from "../../widget/yearsSwiper";

register();

export const MainPage: React.FC = () => {

  return (
    <main className={"main__container"}>
      <div className={"container__page"}>
        <Header/>
        <CrossComponent/>
        <CircleComponent/>
        <YearsSwiper/>
        <SwiperHistory/>
      </div>
    </main>
  )
    ;
};
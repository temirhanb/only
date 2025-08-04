import React from "react";
import {CrossComponent, Header, SwiperHistory} from "../../widget";
import "./style/index.scss";
import {CircleComponent} from "../../widget/circle";

export const MainPage: React.FC = () => {

  return (
    <main className={"main__container"}>
      <div className={"container__page"}>
        <Header/>
        <CrossComponent/>
        <CircleComponent/>
        <SwiperHistory/>
      </div>
    </main>
  )
    ;
};
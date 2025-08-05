import {useMainPageState} from "../../../shared/state/mainPageState";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

export const useSwiperHook = () => {

  const {incrementSlide, setSlide, decrementSlide, data, currentSlide} = useMainPageState(state => state);

  const slideViewRef = useRef(null);
  useEffect(() => {

    gsap.to(slideViewRef.current, {
      duration: 1,
      onUpdate: () => {
        gsap.to(slideViewRef.current, {
          opacity: 0,
          duration: .3
        });
      },
      onComplete: () => {
        gsap.to(slideViewRef.current, {
          opacity: 1,
          duration: .3
        });
      }
    });
  }, [currentSlide]);

  const handlerIncrementSlide = () => {

    currentSlide < data.length - 1 && incrementSlide();
  };

  const handlerDecrementSlide = () => {
    currentSlide > 0 && decrementSlide();
  };

  const handlerSetSlide = (index: number) => {
    setSlide(index);
  };

  const screenWidth = window.screen.width;

  return {screenWidth, currentSlide, data, slideViewRef, handlerDecrementSlide, handlerIncrementSlide, handlerSetSlide};
};
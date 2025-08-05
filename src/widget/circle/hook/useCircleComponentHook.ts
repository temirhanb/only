import {useMainPageState} from "../../../shared/state/mainPageState";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export const useCircleComponentHook = ()=>{
  const {currentSlide, setSlide, data} = useMainPageState(state => state);

  const circleRef = useRef(null);
  const pointsRef = useRef(null);

  const [_, setRotation] = useState(0);

  useGSAP(() => {
    gsap.to(circleRef.current, {
      x: currentSlide,
      onUpdate: () => {
        if (currentSlide === 0) {
          gsap.to(circleRef.current, {
            duration: .5,
            rotation: 120,
          });
          setRotation(currentSlide);
        }
        if (currentSlide === 1) {
          gsap.to(circleRef.current, {
            duration: .5,
            rotation: 240,
          });
          setRotation(currentSlide);
        }
        if (currentSlide === 2) {
          gsap.to(circleRef.current, {
            duration: .5,
            rotation: 340,
          });
          setRotation(currentSlide);
        }
      },
    });
  }, [currentSlide]);

  const handlerSetSlide = (index: number) => {
    setSlide(index);
  };

  return{handlerSetSlide,pointsRef,data,circleRef,currentSlide}
}
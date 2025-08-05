import {useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useMainPageState} from "../../../shared/state/mainPageState";

export const useCircleComponentHook = () => {
  const {currentSlide, setSlide, data} = useMainPageState(state => state);

  const circleRef = useRef<HTMLDivElement>(null);

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
          gsap.to(circleRef.current!.children[0].children[1], {
            duration: .1,
            rotation: 120,
          });

          gsap.to(circleRef.current!.children[0].children[2], {
            duration: .1,
            rotation: 220,
          });
          setRotation(currentSlide);
        }
        if (currentSlide === 1) {
          gsap.to(circleRef.current, {
            duration: .5,
            rotation: 240,
          });
          gsap.to(circleRef.current!.children[0].children[0], {
            duration: .1,
            rotation: 240,
          });
          gsap.to(circleRef.current!.children[0].children[1], {
            duration: .1,
            rotation: 0,
          });

          gsap.to(circleRef.current!.children[0].children[2], {
            duration: .1,
            rotation: 100,
          });
          setRotation(currentSlide);
        }
        if (currentSlide === 2) {
          gsap.to(circleRef.current, {
            duration: .5,
            rotation: 340,
          });
          gsap.to(circleRef.current!.children[0].children[0], {
            duration: .1,
            rotation: 140,
          });
          gsap.to(circleRef.current!.children[0].children[1], {
            duration: .1,
            rotation: 260,
          });

          gsap.to(circleRef.current!.children[0].children[2], {
            duration: .1,
            rotation: 0,
          });
          setRotation(currentSlide);
        }
      },
    });
  }, [currentSlide]);

  const handlerSetSlide = (index: number) => {
    setSlide(index);
  };

  return {handlerSetSlide, data, circleRef, currentSlide};
};
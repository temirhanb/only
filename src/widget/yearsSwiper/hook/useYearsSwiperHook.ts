import {useMainPageState} from "../../../shared/state/mainPageState";
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const useYearsSwiperHook = ()=>{
  const {currentSlide, data} = useMainPageState(state => state);

  const slideItems = Object.values(data[currentSlide]);
  const firstSlided = slideItems[0].data;
  const lastSlided = slideItems[slideItems.length - 1].data;
  const firstYearRef = useRef(null);
  const lastYearRef = useRef(null);
  const [firstYear, setFirstYear] = useState(firstSlided);
  const [lastYear, setLastYear] = useState(lastSlided);

  useEffect(() => {
    const obj = {value:firstYear};

    gsap.to(obj, {
      value: firstSlided,
      duration: 1, // Animation duration in seconds
      ease: "power1.out", // Easing function
      onUpdate: () => {
        // Update the React state on each animation frame
        setFirstYear(Math.round(obj.value));
      },
    });
    gsap.to(obj, {
      value: lastSlided,
      duration: 1, // Animation duration in seconds
      ease: "power1.out", // Easing function
      onUpdate: () => {
        // Update the React state on each animation frame
        setLastYear(Math.round(obj.value));
      },
    });
  }, [firstSlided]);

  return{firstYear,lastYear,firstYearRef,lastYearRef}
}
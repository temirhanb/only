import {create} from "zustand";

export type IData = {
  [key: string]: {
    data: number,
    title: string
  };
}

type TStore = {
  data: IData[];
  currentSlide: number,
  slides: number,
}

type TAction = {
  incrementSlide: () => void;
  decrementSlide: () => void;
}

const initialState: TStore = {
  currentSlide: 1,
  slides: 2,
  data: [
    {
      0: {
        data: 2015,
        title: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      1: {
        data: 2016,
        title: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
      },
      2: {
        data: 2017,
        title: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
      },
      3: {
        data: 2018,
        title: "news 2018"
      },
    },
    {
      0: {
        data: 2019,
        title: "news 2019"
      },
      1: {
        data: 2020,
        title: "news 2020"
      },
      2: {
        data: 2021,
        title: "news 2021"
      },
    },
  ]
};

export const useMainPageState = create<TStore & TAction>((set) => ({
  data: initialState.data,
  currentSlide: initialState.currentSlide,
  slides: initialState.slides,
  incrementSlide: () => set((state) => ({
    currentSlide: state.currentSlide + 1
  })),
  decrementSlide: () => set((state) => ({
    currentSlide: state.currentSlide - 1
  })),
}));
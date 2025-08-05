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
  setSlide: (slide: number) => void;
}

const initialState: TStore = {
  currentSlide: 0,
  slides: 3,
  data: [
    {
      0: {
        data: 2010,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
          "the industry's standard dummy text ever since the 1500s, when an unknown printer took a " +
          "galley of type and scrambled it to make a type specimen book."
      },
      1: {
        data: 2011,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
          "the industry's standard dummy text ever since the 1500s, when an unknown printer took a " +
          "galley of type and scrambled it to make a type specimen book."
      },
      2: {
        data: 2012,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
          "the industry's standard dummy text ever since the 1500s, when an unknown printer took a " +
          "galley of type and scrambled it to make a type specimen book."
      },
      3: {
        data: 2013,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
          "the industry's standard dummy text ever since the 1500s, when an unknown printer took a " +
          "galley of type and scrambled it to make a type specimen book."
      },
      4: {
        data: 2014,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
          "the industry's standard dummy text ever since the 1500s, when an unknown printer took a " +
          "galley of type and scrambled it to make a type specimen book."
      },
    },
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
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
          "the industry's standard dummy text ever since the 1500s, when an unknown printer took a " +
          "galley of type and scrambled it to make a type specimen book."
      },
      1: {
        data: 2020,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
          "the industry's standard dummy text ever since the 1500s, when an unknown printer took a " +
          "galley of type and scrambled it to make a type specimen book."
      },
      2: {
        data: 2021,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
          "the industry's standard dummy text ever since the 1500s, when an unknown printer took a " +
          "galley of type and scrambled it to make a type specimen book."
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
  setSlide: (slide) => set(() => ({
    currentSlide: slide
  })),
}));
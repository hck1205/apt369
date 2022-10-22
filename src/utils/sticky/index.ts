import { RefObject } from "react";

export const setSticky = (
  refObj: RefObject<HTMLElement> | null,
  top: number
) => {
  const dom = refObj?.current;

  if (dom) {
    if (window.pageYOffset > top) {
      dom.style.position = "fixed";
      dom.style.top = "0";
    } else {
      dom.style.position = "static";
      dom.style.top = "";
    }
  }
};

export const addSticky = (
  refObj: RefObject<HTMLElement> | null,
  top: number
) => {
  return (e: Event) => setSticky(refObj, top);
};

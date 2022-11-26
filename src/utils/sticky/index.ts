import { RefObject } from "react";

const setSticky = (
  refObj: RefObject<HTMLElement> | null,
  top: number,
  width: string
) => {
  const dom = refObj?.current;

  if (dom) {
    if (window.pageYOffset > top) {
      dom.style.position = "fixed";
      dom.style.top = "0";

      if (width) {
        dom.style.width = width;
      }
    } else {
      dom.style.position = "";
      dom.style.top = "";
      dom.style.width = "";
    }
  }
};

export const addSticky = (
  refObj: RefObject<HTMLElement> | null,
  width: string
) => {
  let top = 0;

  if (refObj) {
    top = refObj.current?.getBoundingClientRect().top || 0;
  }

  return (e: Event) => setSticky(refObj, top, width);
};

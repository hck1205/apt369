import { useEffect, useRef } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { addSticky } from "@/utils";

import * as S from "./styles";

const stickyWidthSize = "calc(100% - 20vw)";

function TableHeader() {
  const fixedHeader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stickyElTopVal =
      fixedHeader.current?.getBoundingClientRect().top || 0;

    window.addEventListener(
      "scroll",
      addSticky(fixedHeader, stickyElTopVal, stickyWidthSize)
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        addSticky(fixedHeader, stickyElTopVal, stickyWidthSize)
      );
    };
  }, []);

  return (
    <S.CompWrapper>
      <S.HeaderWrapper ref={fixedHeader}>
        <div className="total">Total</div>
        <div className="option">
          <SettingOutlined />
        </div>
      </S.HeaderWrapper>
    </S.CompWrapper>
  );
}

export default TableHeader;

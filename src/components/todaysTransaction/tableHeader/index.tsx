import { useEffect, useRef } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { addSticky } from "@/utils";

import * as S from "./styles";
import { ALL_FIELDS_FOR_TODAYS_TRANSACTION } from "@/constpack";

const stickyWidthSize = "calc(100% - 20vw)";

type Props = {
  fields: string[];
  onGearClick: () => void;
};
function TableHeader({ onGearClick, fields }: Props) {
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
        <S.TotalAndGearWrapper>
          <div className="total">Total</div>

          <div className="option" onClick={() => onGearClick()}>
            <SettingOutlined />
          </div>
        </S.TotalAndGearWrapper>

        <S.Header>
          <div className="apt-wrapper">아파트 정보</div>

          <div className="metric-wrapper">
            {fields.map((field) => {
              return (
                <div>{ALL_FIELDS_FOR_TODAYS_TRANSACTION[field].label}</div>
              );
            })}
          </div>
        </S.Header>
      </S.HeaderWrapper>
    </S.CompWrapper>
  );
}

export default TableHeader;

import { useEffect, useRef } from "react";
import { SettingOutlined } from "@ant-design/icons";

import * as S from "./styles";

type Props = {
  onGearClick: () => void;
};
function TableHeader({ onGearClick }: Props) {
  const fixedHeader = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return (
    <S.CompWrapper>
      <S.HeaderWrapper ref={fixedHeader}>
        <S.TotalAndGearWrapper>
          <div className="total">Total</div>

          <div className="option" onClick={() => onGearClick()}>
            <SettingOutlined />
          </div>
        </S.TotalAndGearWrapper>
      </S.HeaderWrapper>
    </S.CompWrapper>
  );
}

export default TableHeader;

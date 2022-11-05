import { CommonToggle } from "@/components";

import * as S from "./styles";

function TradeToggle() {
  return (
    <S.ComponentWrapper>
      <CommonToggle
        defaultChecked={true}
        onChange={(v) => {
          console.log("v", v);
        }}
      />
    </S.ComponentWrapper>
  );
}

export default TradeToggle;

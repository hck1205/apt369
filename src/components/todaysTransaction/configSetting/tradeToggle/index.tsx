import { CommonToggle } from "@/components";

import * as S from "./styles";

type Props = {
  isDirectTradeExcluded: boolean;
  onUpdateTradeToggle: (toogle: boolean) => void;
};

function TradeToggle({ isDirectTradeExcluded, onUpdateTradeToggle }: Props) {
  return (
    <S.ComponentWrapper>
      <CommonToggle
        defaultChecked={isDirectTradeExcluded}
        onChange={onUpdateTradeToggle}
      />
    </S.ComponentWrapper>
  );
}

export default TradeToggle;

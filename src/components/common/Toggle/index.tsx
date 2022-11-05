import { Switch } from "antd";

import * as S from "./styles";

type Props = {
  defaultChecked: boolean;
  onChange: (v: boolean) => void;
};

function Toggle({ defaultChecked, onChange }: Props) {
  return (
    <S.ComponentWrapper>
      <Switch
        defaultChecked
        onChange={(v) => {
          console.log("v", v);
        }}
      />
    </S.ComponentWrapper>
  );
}
export default Toggle;

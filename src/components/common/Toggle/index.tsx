import { Switch } from "antd";

import * as S from "./styles";

type Props = {
  defaultChecked: boolean;
  onChange: (v: boolean) => void;
};

function Toggle({ defaultChecked, onChange }: Props) {
  return (
    <S.ComponentWrapper>
      <Switch defaultChecked={defaultChecked} onChange={onChange} />
    </S.ComponentWrapper>
  );
}
export default Toggle;

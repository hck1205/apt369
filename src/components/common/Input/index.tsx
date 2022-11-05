import { Input } from "antd";
import { useState } from "react";
import * as S from "./styles";

type Props = {
  defaultValue: string;
  placeholder: string;
};

function CommonInput({ defaultValue, placeholder }: Props) {
  const [value, setValue] = useState<string>("");

  return (
    <S.ComponentWrapper>
      <Input
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        allowClear
      />
    </S.ComponentWrapper>
  );
}

export default CommonInput;

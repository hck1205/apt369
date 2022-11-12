import { Input } from "antd";
import { useEffect, useState } from "react";
import * as S from "./styles";

type Props = {
  defaultValue: string;
  placeholder: string;
  onUpdate: (value: string) => void;
};

function CommonInput({ defaultValue, placeholder, onUpdate }: Props) {
  const [value, setValue] = useState<string>("");

  useEffect(() => onUpdate(value), [value]);

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

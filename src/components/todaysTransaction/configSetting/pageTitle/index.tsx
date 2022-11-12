import { CommonInput } from "@/components";
import { useEffect, useState } from "react";

import * as S from "./styles";

type Props = {
  alias: string;
  onUpdateTitle: (title: string) => void;
};

function PageTitle({ alias, onUpdateTitle }: Props) {
  const [title, setTitle] = useState<string>(alias);

  useEffect(() => {
    onUpdateTitle(title);
  }, [title]);

  return (
    <S.ComponentWrapper>
      <CommonInput
        defaultValue=""
        placeholder="페이지 이름"
        onUpdate={setTitle}
      />
    </S.ComponentWrapper>
  );
}

export default PageTitle;

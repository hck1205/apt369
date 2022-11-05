import { CommonInput } from "@/components";
import * as S from "./styles";

function PageTitle() {
  return (
    <S.ComponentWrapper>
      <CommonInput defaultValue="" placeholder="페이지 이름" />
    </S.ComponentWrapper>
  );
}

export default PageTitle;

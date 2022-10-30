import * as S from "./styles";

import type { TabData } from "../index";

type Props = {
  tabData: TabData;
  index: number;
};

function ConfigSetting({ tabData, index }: Props) {
  const { id, fields, alias } = tabData;

  const pageName = alias || `기본 ${index + 1}`;

  return (
    <S.CompWrapper>
      <div>
        <h1>{`${pageName} 페이지 설정`}</h1>
      </div>
    </S.CompWrapper>
  );
}

export default ConfigSetting;
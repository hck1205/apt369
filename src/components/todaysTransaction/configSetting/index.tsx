import PageTitle from "./pageTitle";
import Metric from "./metric";
import Region from "./region";
import TradeToggle from "./tradeToggle";

import * as S from "./styles";

import type { TabData } from "../index";

type Props = {
  tabData: TabData;
  index: number;
};

const test = typeof (<S.ConfigTitle>페이지 이름</S.ConfigTitle>);

function ConfigSetting({ tabData, index }: Props) {
  const { id, fields, alias } = tabData;

  const pageName = alias || `기본 ${index + 1}`;

  return (
    <S.ComponentWrapper>
      <h1>{`${pageName} 페이지 설정`}</h1>

      <S.SettingWrapper>
        <S.TitleSectionWrapper>
          <S.ConfigTitle>페이지 이름</S.ConfigTitle>
          <PageTitle />
        </S.TitleSectionWrapper>

        <S.FilterSectionWrapper>
          <Metric />
          <Region updateRegionCode={() => {}} />
        </S.FilterSectionWrapper>

        <S.TradeToggleWrapper>
          <div className="desc">
            <S.ConfigTitle>직거래 제외</S.ConfigTitle>
            <h1>직거래로 표기된 거래는 제외됩니다.</h1>
          </div>

          <TradeToggle />
        </S.TradeToggleWrapper>
      </S.SettingWrapper>
    </S.ComponentWrapper>
  );
}

export default ConfigSetting;

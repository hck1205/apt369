import { PAGE_KEYS } from "@/constpack";

import PageTitle from "./pageTitle";
import Metric from "./metric";
import Region from "./region";
import TradeToggle from "./tradeToggle";

import * as S from "./styles";

import type { TabData } from "../index";
import { Button } from "antd";
import { useState } from "react";

type Props = {
  tabData: TabData;
  index: number;
};

function ConfigSetting({ tabData, index }: Props) {
  const [currentTabData, setCurrentTabData] = useState<TabData>(tabData);

  const { id, fields, alias, regionCodes = [], isWithoutSelf } = currentTabData;

  const pageName = alias || `기본 ${index + 1}`;

  const saveDataInLocalStorage = () => {
    if (currentTabData) {
      localStorage.setItem(PAGE_KEYS.APP, JSON.stringify(currentTabData));
    }
  };

  const updateCurrentTabData = ({
    key,
    value,
  }: {
    key: string;
    value: any;
  }) => {
    const updatedTabData = {
      ...currentTabData,
      [key]: value,
    };

    setCurrentTabData(updatedTabData);
  };

  return (
    <S.ComponentWrapper>
      <h1>{`${pageName} 페이지 설정`}</h1>

      <S.SettingWrapper>
        <S.TitleSectionWrapper>
          <S.ConfigTitle>페이지 이름</S.ConfigTitle>
          <PageTitle
            alias={alias}
            onUpdateTitle={(title) => {
              updateCurrentTabData({
                key: "alias",
                value: title,
              });
            }}
          />
        </S.TitleSectionWrapper>

        <S.FilterSectionWrapper>
          <Metric
            metrics={fields}
            onMetricsUpdate={(metrics) => {
              updateCurrentTabData({
                key: "fields",
                value: metrics,
              });
            }}
          />
          <Region
            regionCodeList={regionCodes}
            onUpdateRegionCode={(regionCodeList) => {
              updateCurrentTabData({
                key: "regionCodes",
                value: regionCodeList,
              });
            }}
          />
        </S.FilterSectionWrapper>

        <S.Bottom>
          <S.TradeToggleWrapper>
            <div className="desc">
              <S.ConfigTitle>직거래 제외</S.ConfigTitle>
              <h1>직거래로 표기된 거래는 제외됩니다.</h1>
            </div>

            <TradeToggle
              isDirectTradeExcluded={isWithoutSelf}
              onUpdateTradeToggle={(isDirectTradeExcluded) => {
                updateCurrentTabData({
                  key: "isWithoutSelf",
                  value: isDirectTradeExcluded,
                });
              }}
            />
          </S.TradeToggleWrapper>

          <S.ButtonWrapper>
            <Button
              className="cancel-btn"
              onClick={() => {
                console.log("go back to table");
              }}
            >
              돌아가기
            </Button>
            <Button type="primary" onClick={() => saveDataInLocalStorage()}>
              저장하기
            </Button>
          </S.ButtonWrapper>
        </S.Bottom>
      </S.SettingWrapper>
    </S.ComponentWrapper>
  );
}

export default ConfigSetting;

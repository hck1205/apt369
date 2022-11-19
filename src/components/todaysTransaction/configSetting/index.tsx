import { PAGE_KEYS } from "@/constpack";

import PageTitle from "./pageTitle";
import Metric from "./metric";
import Region from "./region";
import TradeToggle from "./tradeToggle";

import * as S from "./styles";

import type { TabData } from "../index";
import { Button } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { deepCopy } from "@/utils";
import { Notification } from "@/components";
import { useDispatch } from "react-redux";
import { updateLocalStorage } from "@/store/modules/global";

type Props = {
  tabData: TabData;
  index: number;
  onBack: () => void;
};

function ConfigSetting({ onBack, tabData, index }: Props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.global);

  const [currentTabData, setCurrentTabData] = useState<TabData>(tabData);

  const { id, fields, alias, regionCodes = [], isWithoutSelf } = currentTabData;

  const pageName = alias || `기본 ${index + 1}`;

  const saveDataInLocalStorage = async () => {
    if (currentTabData) {
      let copiedData = deepCopy(data);
      copiedData[PAGE_KEYS.TODAYS_TRANSACTION]["tabs"][index] = currentTabData;
      localStorage.setItem(PAGE_KEYS.APP, JSON.stringify(copiedData));

      await dispatch(updateLocalStorage());
      Notification({
        type: "success",
        message: "",
        description: "저장 되었습니다.",
      });
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
                onBack();
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

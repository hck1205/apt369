import { Button } from "antd";
import { RegionSelector } from "@/components";

import { ComponentWrapper, RegionSelectWrapper } from "./styles";
import { useEffect, useState } from "react";

import { ConfigTitle } from "../styles";
import { deepCopy } from "@/utils";

type Props = {
  onUpdateRegionCode: ([{ key, value }]: { key: any; value: any }[]) => void;
  regionCodeList: { key: string; value: number[] }[];
};

function Region({
  onUpdateRegionCode,
  regionCodeList: savedRegionCodeList,
}: Props) {
  console.log("savedRegionCodeList", savedRegionCodeList);
  const [regionCodeList, setRegionCodeList] =
    useState<{ key: string; value: number[] }[]>(savedRegionCodeList);

  useEffect(() => {
    onUpdateRegionCode(regionCodeList);
  }, [regionCodeList]);

  return (
    <ComponentWrapper>
      <ConfigTitle>지역선택</ConfigTitle>

      <RegionSelectWrapper>
        {[...Array(5)].map((_, index) => {
          const { key = "", value = [] } = regionCodeList[index] || {
            key: "",
            value: [],
          };

          return (
            <div key={`region-selector-${index}`} className="row">
              <span className="number">{index + 1}</span>

              <RegionSelector
                regionName={key}
                regionCode={value}
                onSelect={({ key, value }) => {
                  let copiedData = deepCopy(
                    regionCodeList
                  ) as typeof regionCodeList;

                  copiedData[index] = {
                    key,
                    value,
                  };

                  setRegionCodeList(copiedData);
                }}
              />
            </div>
          );
        })}
      </RegionSelectWrapper>
    </ComponentWrapper>
  );
}

export default Region;

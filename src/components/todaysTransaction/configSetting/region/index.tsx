import { Button } from "antd";
import { RegionSelector } from "@/components";

import { ComponentWrapper, RegionSelectWrapper } from "./styles";
import { useEffect, useState } from "react";

import { ConfigTitle } from "../styles";

type Props = {
  onUpdateRegionCode: (value: string[][]) => void;
  regionCodeList: string[][];
};

function Region({
  onUpdateRegionCode,
  regionCodeList: savedRegionCodeList,
}: Props) {
  const [regionCodeList, setRegionCodeList] =
    useState<string[][]>(savedRegionCodeList);

  useEffect(() => {
    onUpdateRegionCode(regionCodeList);
  }, [regionCodeList]);

  return (
    <ComponentWrapper>
      <ConfigTitle>지역선택</ConfigTitle>

      <RegionSelectWrapper>
        {[...Array(5)].map((_, index) => (
          <div key={`region-selector-${index}`} className="row">
            <span className="number">{index + 1}</span>

            <RegionSelector
              onSelect={(value) => {
                regionCodeList[index] = value;
                setRegionCodeList([...regionCodeList]);
              }}
            />
          </div>
        ))}
      </RegionSelectWrapper>
    </ComponentWrapper>
  );
}

export default Region;

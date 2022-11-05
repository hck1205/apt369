import { Button } from "antd";
import { RegionSelector } from "@/components";

import { ComponentWrapper, RegionSelectWrapper } from "./styles";
import { useEffect, useState } from "react";

type Props = {
  updateRegionCode: (value: (string | number)[]) => void;
};

function Region() {
  const [regionCodeList, setRegionCodeList] = useState<(string | number)[]>([]);

  useEffect(() => {}, [regionCodeList]);

  return (
    <ComponentWrapper>
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

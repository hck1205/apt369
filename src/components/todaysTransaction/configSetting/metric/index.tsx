import { MetricSelector } from "@/components";

import { ComponentWrapper, MetricSelectWrapper } from "./styles";

import { ConfigTitle } from "../styles";

type Props = {};

function Metric({}: Props) {
  return (
    <ComponentWrapper>
      <ConfigTitle>지표 선택</ConfigTitle>

      <MetricSelectWrapper>
        {[...Array(10)].map((_, index) => (
          <div key={`metric-selector-${index}`} className="row">
            <span className="number">{index + 1}</span>
            <MetricSelector />
          </div>
        ))}
      </MetricSelectWrapper>
    </ComponentWrapper>
  );
}

export default Metric;

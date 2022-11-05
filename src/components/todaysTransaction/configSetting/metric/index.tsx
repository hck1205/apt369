import { MetricSelector } from "@/components";

import { ComponentWrapper, MetricSelectWrapper } from "./styles";

function Metric() {
  return (
    <ComponentWrapper>
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

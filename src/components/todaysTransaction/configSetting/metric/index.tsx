import { MetricSelector } from "@/components";

import { ComponentWrapper, MetricSelectWrapper } from "./styles";

import { ConfigTitle } from "../styles";
import { useEffect, useState } from "react";

const INIT_METRIC_ARRAY = [...Array(10)];

type Props = {
  metrics: string[];
  onMetricsUpdate: (metric: string[]) => void;
};

function Field({ metrics: savedMetrics, onMetricsUpdate }: Props) {
  const [metrics, setMetrics] = useState<string[]>(
    savedMetrics || INIT_METRIC_ARRAY
  );

  useEffect(() => {
    onMetricsUpdate(metrics);
  }, [metrics]);

  return (
    <ComponentWrapper>
      <ConfigTitle>지표 선택</ConfigTitle>

      <MetricSelectWrapper>
        {metrics.map((metric, index) => (
          <div key={`metric-selector-${index}`} className="row">
            <span className="number">{index + 1}</span>
            <MetricSelector
              metric={metric}
              onUpdate={(value) => {
                metrics[index] = value;
                setMetrics([...metrics]);
              }}
            />
          </div>
        ))}
      </MetricSelectWrapper>
    </ComponentWrapper>
  );
}

export default Field;

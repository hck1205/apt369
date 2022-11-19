import { Select } from "antd";
import { ALL_FIELDS_FOR_TODAYS_TRANSACTION } from "@/constpack";
import { ComponentWrapper } from "./styles";

const SELECT_OPTIONS = Object.values(ALL_FIELDS_FOR_TODAYS_TRANSACTION);

type Props = {
  metric: string;
  onUpdate: (value: string) => void;
};

function MetricSelector({ metric, onUpdate }: Props) {
  return (
    <ComponentWrapper>
      <Select
        defaultValue={metric}
        options={SELECT_OPTIONS}
        placeholder="지표선택"
        onChange={onUpdate}
        showSearch
        allowClear
      />
    </ComponentWrapper>
  );
}

export default MetricSelector;

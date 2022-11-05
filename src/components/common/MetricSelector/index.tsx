import { Select } from "antd";
import { ALL_FIELDS_FOR_TODAYS_TRANSACTION } from "@/constpack";
import { ComponentWrapper } from "./styles";

const SELECT_OPTIONS = Object.values(ALL_FIELDS_FOR_TODAYS_TRANSACTION);

function MetricSelector() {
  return (
    <ComponentWrapper>
      <Select options={SELECT_OPTIONS} placeholder="지표선택" showSearch />
    </ComponentWrapper>
  );
}

export default MetricSelector;

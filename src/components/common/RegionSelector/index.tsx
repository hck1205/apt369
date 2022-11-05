import { useState } from "react";
import { Cascader } from "antd";
import { SingleValueType } from "rc-cascader/lib/Cascader";
import { DefaultOptionType } from "antd/lib/cascader";

import { REGION_LIST } from "@/constpack";
import { useFetchRegionDataMutation } from "@/API";

import { Notification } from "@/components";

import { ComponentWrapper } from "./styles";

type Props = {
  onSelect: (value: string | number) => void;
};

const convertedRegions: DefaultOptionType[] = REGION_LIST.map(
  ({ code, name }) => ({
    value: code,
    label: name,
    isLeaf: false,
  })
);

function RegionSelectBox({ onSelect }: Props) {
  const [fetchRegionData, { isLoading }] = useFetchRegionDataMutation();

  const [options, setOptions] = useState<DefaultOptionType[]>(convertedRegions);

  const loadData = (selectedOptions: DefaultOptionType[]) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    fetchRegionData({ regionCode: targetOption.value })
      .then((response) => {
        targetOption.loading = false;

        if ("data" in response) {
          if (response.data.locations.length > 0) {
            const nextChildOptions = response.data.locations.map(
              ({ locallow_nm, region_cd }) => {
                return { value: region_cd, label: locallow_nm, isLeaf: false };
              }
            );

            targetOption.children = nextChildOptions;
          } else {
            Notification({
              type: "warning",
              message: "",
              description: "이미 최소 단위의 지역입니다.",
            });
            targetOption.isLeaf = true;
          }
        }

        setOptions([...options]);
      })
      .catch(console.error);
  };

  const onChange = (
    value: SingleValueType,
    selectedOptions: DefaultOptionType[]
  ) => {
    const lastElementIndex = value.length - 1;
    onSelect(value[lastElementIndex]);
  };

  return (
    <ComponentWrapper>
      <Cascader
        options={options}
        loadData={loadData}
        onChange={onChange}
        displayRender={(label) => label.join(" ")}
        placeholder="지역을 선택해 주세요."
        changeOnSelect
      />
    </ComponentWrapper>
  );
}

export default RegionSelectBox;

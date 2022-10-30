import { useState } from "react";
import { Cascader } from "antd";
import { SingleValueType } from "rc-cascader/lib/Cascader";
import { DefaultOptionType } from "antd/lib/cascader";

import { REGION_LIST } from "@/constpack";
import { useFetchRegionDataMutation } from "@/API";

import { Notification } from "@/components";

import * as S from "./styles";

const convertedRegions: DefaultOptionType[] = REGION_LIST.map(
  ({ code, name }) => ({
    value: code,
    label: name,
    isLeaf: false,
  })
);

function RegionSelectBox() {
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
              ({ locatadd_nm, region_cd }) => {
                return { value: region_cd, label: locatadd_nm, isLeaf: false };
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
    console.log(value, selectedOptions);
  };

  return (
    <S.CompWrapper>
      <Cascader
        options={options}
        loadData={loadData}
        onChange={onChange}
        changeOnSelect
      />
    </S.CompWrapper>
  );
}

export default RegionSelectBox;

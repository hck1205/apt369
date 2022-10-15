import { useEffect, useState } from "react";
import { useFetchAPTDataMutation } from "@/API";
import { useSelector } from "react-redux";
import { apartment, setApartmentData } from "@/store/modules/apartment";
import { RootState } from "@/store";

import { TabComp } from "@/components";
import { PAGE_KEYS } from "@/constpack";
import { TabPaneProps } from "antd";

import TableComp from "./table";
import { PageWrapper } from "./styles";

const { TODAYS_TRANSACTION } = PAGE_KEYS;

export type Item = Omit<TabPaneProps, "tab"> & {
  key: string;
  label: React.ReactNode;
};

function TodaysTransaction() {
  const [tabs, setTabs] = useState([]);
  // const [fetchAPTData, { isLoading }] = useFetchAPTDataMutation();
  const { data } = useSelector((state: RootState) => state.global);

  // useEffect(() => {
  //   fetchAPTData({})
  //     .then((response) => {
  //       if ("data" in response) {
  //         console.log("test", response.data.newTransactionLogs);
  //         setApartmentData(response.data.newTransactionLogs);
  //       }
  //     })
  //     .catch(console.error);
  // }, [fetchAPTData]);

  useEffect(() => {
    const { tabs = [] } = data[TODAYS_TRANSACTION];
    setTabs(tabs);
  }, [data]);

  const tabItems = () =>
    tabs.map((data, index) => {
      const { alias, fields, id } = data;

      return {
        label: alias || `기본 ${index + 1}`,
        key: `${TODAYS_TRANSACTION}_${index}`,
        children: <TableComp fields={fields} />,
        closable: false,
      };
    });

  return (
    <PageWrapper>
      {/* {isLoading ? (
        <div>Loading</div>
      ) : ( */}
      <div>
        <TabComp
          items={tabItems()}
          onAdd={() => {
            console.log("add");
          }}
        />
      </div>
      {/* )} */}
    </PageWrapper>
  );
}

export default TodaysTransaction;

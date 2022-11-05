import { useEffect, useMemo, useState } from "react";
import { useFetchAPTDataMutation } from "@/API";

import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setApartmentData } from "@/store/modules/apartment";

import TableHeader from "../tableHeader";
import ConfigSetting from "../configSetting";

import type { TabData } from "../index";

import * as S from "./styles";

type Props = {
  tabData: TabData;
  index: number;
};

function TodaysTransactionTable({ tabData, index }: Props) {
  const dispatch = useDispatch();

  const [fetchAPTData, { isLoading }] = useFetchAPTDataMutation();

  const apartmentData = useSelector((state: RootState) => state.apartment.data);
  const data = useMemo(() => apartmentData[tabData.id], [apartmentData]);

  const [settingMode, setSettingMode] = useState<Boolean>(true);

  useEffect(() => {
    fetchAPTData({ fields: tabData.fields })
      .then((response) => {
        if ("data" in response) {
          const value = response.data.newTransactionLogs;

          dispatch(setApartmentData({ id: tabData.id, value }));
        }
      })
      .catch(console.error);
  }, [tabData.fields, fetchAPTData]);

  if (settingMode) {
    return (
      <S.ComponentWrapper>
        <ConfigSetting tabData={tabData} index={index} />
      </S.ComponentWrapper>
    );
  } else {
    return (
      <S.ComponentWrapper>
        {isLoading ? (
          <div>loading</div>
        ) : (
          <S.TableWrapper fixedTopValue={1}>
            <TableHeader />

            <ul>
              {data &&
                data.map((info, i) => {
                  const { apartment, transaction } = info;

                  return (
                    <li key={`todays-transaction-info-${i}`}>
                      <S.ApartmentInfoWrapper>
                        <p className="apt-name">{apartment.name}</p>
                        <p className="apt-addr">{apartment.address}</p>
                        <p className="apt-deal-info">{`${apartment.build_year} / ${transaction.area_for_exclusive_use} / ${transaction.floor}`}</p>
                        <p>{`${transaction.deal_date} / ${transaction.req_gbn}`}</p>
                      </S.ApartmentInfoWrapper>
                      <S.FieldInfo>
                        <span>Metric Info</span>
                      </S.FieldInfo>
                    </li>
                  );
                })}
            </ul>
          </S.TableWrapper>
        )}
      </S.ComponentWrapper>
    );
  }
}

export default TodaysTransactionTable;

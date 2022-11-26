import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { setApartmentData } from "@/store/modules/apartment";
import { ALL_FIELDS_FOR_TODAYS_TRANSACTION } from "@/constpack";
import { useFetchAPTDataMutation } from "@/API";

import TableHeader from "../tableHeader";
import ConfigSetting from "../configSetting";

import type { TabData } from "../index";

import * as S from "./styles";

const OFF_SET_TOP_FROM_TABLE = 157;

type Props = {
  tabData: TabData;
  index: number;
};

function TodaysTransactionTable({ tabData, index }: Props) {
  const aptHeader = useRef<HTMLLIElement>(null);
  const priceHeader = useRef<HTMLLIElement>(null);

  const dispatch = useDispatch();

  const [fetchAPTData, { isLoading }] = useFetchAPTDataMutation();

  const apartmentData = useSelector((state: RootState) => state.apartment.data);
  const data = useMemo(() => apartmentData[tabData.id], [apartmentData]);
  const filteredFields = useMemo(() => {
    const refinedFields = new Set(tabData.fields.filter(Boolean));
    return Array.from(refinedFields);
  }, [tabData.fields]);

  const [settingMode, setSettingMode] = useState<Boolean>(false);

  useEffect(() => {
    fetchAPTData({
      fields: filteredFields.map((field) =>
        field === "deal_amount" ? field : `${field}_gap_amount`
      ),
    })
      .then((response) => {
        if ("data" in response) {
          const value = response.data.newTransactionLogs;

          dispatch(setApartmentData({ id: tabData.id, value }));
        }
      })
      .catch(console.error);
  }, [tabData.fields, fetchAPTData]);

  useEffect(() => {
    const updateTransform = () => {
      if (aptHeader.current && priceHeader.current) {
        const elTop = aptHeader.current.getBoundingClientRect().top || 0;
        const pageYOffSet = window.pageYOffset;

        if (pageYOffSet - OFF_SET_TOP_FROM_TABLE <= elTop) {
          aptHeader.current.style.transform = "unset";
          priceHeader.current.style.transform = "unset";
        } else {
          const y = pageYOffSet - OFF_SET_TOP_FROM_TABLE;
          aptHeader.current.style.transform = `translateY(${y}px)`;
          priceHeader.current.style.transform = `translateY(${y}px)`;
        }
      }
    };

    window.addEventListener("scroll", updateTransform);

    return () => window.removeEventListener("scroll", updateTransform);
  }, []);

  console.log("filteredFields", filteredFields);

  if (settingMode) {
    return (
      <S.ComponentWrapper>
        <ConfigSetting
          onBack={() => setSettingMode(false)}
          tabData={tabData}
          index={index}
        />
      </S.ComponentWrapper>
    );
  } else {
    return (
      <S.ComponentWrapper>
        {isLoading ? (
          <div>loading</div>
        ) : data ? (
          <S.TableWrapper>
            <TableHeader
              onGearClick={() => {
                setSettingMode(true);
              }}
            />

            <S.ContentWrapper>
              <ul className="apt-wrapper">
                <li className="fields-wrapper" ref={aptHeader}>
                  <p>아파트 정보</p>
                </li>
                {data.map((info, i) => {
                  const { apartment, transaction } = info;

                  return (
                    <li key={`todays-transaction-apt-info-${i}`}>
                      <S.ApartmentInfoWrapper>
                        <p className="apt-name">{apartment.name}</p>
                        <p className="apt-addr">{apartment.address}</p>
                        <p className="apt-deal-info">{`${apartment.build_year} / ${transaction.area_for_exclusive_use} / ${transaction.floor}`}</p>
                        <p>{`${transaction.deal_date} / ${transaction.req_gbn}`}</p>
                      </S.ApartmentInfoWrapper>
                    </li>
                  );
                })}
              </ul>

              <ul className="price-info-wrapper">
                <li className="fields-wrapper" ref={priceHeader}>
                  {filteredFields.map((fields, index) => {
                    return (
                      <p key={`${fields}-${index}`}>
                        {ALL_FIELDS_FOR_TODAYS_TRANSACTION[fields].label}
                      </p>
                    );
                  })}
                </li>

                {data.map((info, i) => {
                  const { transaction, apartment } = info;

                  return (
                    <li
                      key={`todays-transaction-price-info-${i}`}
                      className="row"
                    >
                      {filteredFields.map((field, index) => {
                        const isNotDealAmount = field !== "deal_amount";
                        const gapAmount = `${field}_gap_amount`;
                        const gapPercentage = `${field}_gap_percentage`;

                        return (
                          <div
                            key={`${field}-${index}`}
                            className="price-wrapper"
                          >
                            <p className="price">{transaction[field]}</p>
                            {isNotDealAmount && (
                              <>
                                <p className="price">
                                  {transaction[gapAmount]}
                                </p>
                                <p className="price">
                                  {transaction[gapPercentage]}
                                </p>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            </S.ContentWrapper>
          </S.TableWrapper>
        ) : (
          <div>데이터가 없습니다.</div>
        )}
      </S.ComponentWrapper>
    );
  }
}

export default TodaysTransactionTable;

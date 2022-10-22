import { useEffect, useMemo, useRef } from "react";
import { useFetchAPTDataMutation } from "@/API";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setApartmentData } from "@/store/modules/apartment";
import { addSticky } from "@/utils";

import * as S from "./styles";

type Props = {
  id: string;
  fields: string[];
};

function TodaysTransactionTable({ id, fields }: Props) {
  const dispatch = useDispatch();
  const fixedHeader = useRef<HTMLDivElement>(null);

  const [fetchAPTData, { isLoading }] = useFetchAPTDataMutation();

  const apartmentData = useSelector((state: RootState) => state.apartment.data);
  const data = useMemo(() => apartmentData[id], [apartmentData]);

  useEffect(() => {
    fetchAPTData({ fields })
      .then((response) => {
        if ("data" in response) {
          const value = response.data.newTransactionLogs;

          dispatch(setApartmentData({ id, value }));
        }
      })
      .catch(console.error);
  }, [fields, fetchAPTData]);

  useEffect(() => {
    const stickyElTopVal =
      fixedHeader.current?.getBoundingClientRect().top || 0;

    window.addEventListener("scroll", addSticky(fixedHeader, stickyElTopVal));

    return () => {
      window.removeEventListener(
        "mousemove",
        addSticky(fixedHeader, stickyElTopVal)
      );
    };
  }, []);

  console.log("data", data);

  return (
    <>
      {isLoading ? (
        <S.CompWrapper>Loading</S.CompWrapper>
      ) : (
        <S.CompWrapper>
          <S.TableWrapper fixedTopValue={1}>
            <div className="table--header" ref={fixedHeader}>
              header
            </div>
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
        </S.CompWrapper>
      )}
    </>
  );
}

export default TodaysTransactionTable;

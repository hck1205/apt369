import { useEffect, useMemo } from "react";
import { useFetchAPTDataMutation } from "@/API";
import { setApartmentData } from "@/store/modules/apartment";

import { CompWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

type Prop = {
  id: string;
  fields: string[];
};

function TodaysTransactionTable({ id, fields }: Prop) {
  const dispatch = useDispatch();

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

  console.log("data", data);

  return (
    <>
      {isLoading ? (
        <CompWrapper>Loading</CompWrapper>
      ) : (
        <CompWrapper>test</CompWrapper>
      )}
    </>
  );
}

export default TodaysTransactionTable;

import type { NextPage } from "next";
import { setApartmentData } from "@/store/modules/apartment";
import { useFetchAPTDataMutation } from "@/API";
import { useEffect } from "react";

const MainPage: NextPage = () => {
  const [fetchAPTData, { isLoading }] = useFetchAPTDataMutation();

  useEffect(() => {
    fetchAPTData({})
      .then((response) => {
        if ("data" in response) {
          setApartmentData(response.data.newTransactionLogs);
        }
      })
      .catch(console.error);
  }, []);

  console.log("isLoading", isLoading);

  return <div>test1</div>;
};

export default MainPage;

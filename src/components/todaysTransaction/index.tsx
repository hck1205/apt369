import { useEffect } from "react";
import { setApartmentData } from "@/store/modules/apartment";
import { useFetchAPTDataMutation } from "@/API";

import { PageWrapper } from "./styles";

function TodaysTransaction() {
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

  return (
    <PageWrapper>
      {isLoading ? <div>Loading</div> : <div>test</div>}
    </PageWrapper>
  );
}

export default TodaysTransaction;

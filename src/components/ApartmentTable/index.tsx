import { useEffect } from "react";
import { setApartmentData } from "@/store/modules/apartment";
import { useFetchAPTDataMutation } from "@/API";

function ApartmentTable() {
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

  return isLoading ? <div>Loading</div> : <div>test</div>;
}

export default ApartmentTable;

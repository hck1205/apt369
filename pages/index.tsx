import type { NextPage } from "next";

import { useFetchAPTDataMutation } from "@/API";
import { useEffect } from "react";

const MainPage: NextPage = () => {
  const [fetchAPTData] = useFetchAPTDataMutation();

  useEffect(() => {
    fetchAPTData({}).then((data) => {
      console.log("data", data);
    });
  }, []);

  return <div>test1</div>;
};

export default MainPage;

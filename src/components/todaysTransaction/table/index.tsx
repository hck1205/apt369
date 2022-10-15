import { useEffect } from "react";

import { CompWrapper } from "./styles";

type Prop = {
  fields: string[];
};

function TodaysTransactionTable({ fields }: Prop) {
  useEffect(() => {
    console.log("mounted");
  }, []);

  return (
    <>
      <CompWrapper>test</CompWrapper>
    </>
  );
}

export default TodaysTransactionTable;

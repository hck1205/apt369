import type { TBuilder } from "@/API";
import type { TodaysTransactionInfo } from "@/store/modules/apartment";

export default (builder: TBuilder) => {
  return {
    fetchAPTData: builder.mutation<
      {
        newTransactionLogs: TodaysTransactionInfo[];
        newTransactionLogsCount: number;
      },
      Object
    >({
      query: (params: { fields: string[] }) => {
        return {
          url: "/new-transaction/getNewTransaction",
          method: "POST",
          body: {
            fields: params.fields,
            orderBy: { order: "DESC", sort: "deal_amount" },
            isWithoutSelf: true,
            page: 1,
          },
        };
      },
    }),
  };
};

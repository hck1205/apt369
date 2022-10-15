import type { TBuilder } from "@/API";

export default (builder: TBuilder) => {
  return {
    fetchAPTData: builder.mutation<
      {
        newTransactionLogs: Object[];
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

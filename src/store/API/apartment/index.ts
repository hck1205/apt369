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
      query: () => ({
        url: "/new-transaction/getNewTransaction",
        method: "POST",
        body: {
          fields: [
            "deal_amount",
            "year1_max_gap_amount",
            "year1_min_gap_amount",
            "year3_min_gap_amount",
          ],
          orderBy: { order: "DESC", sort: "deal_amount" },
          isWithoutSelf: true,
          page: 1,
        },
      }),
    }),
  };
};

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apartmentDataApi = createApi({
  reducerPath: "apartment/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://369.kr" }),
  endpoints: (builder) => ({
    fetchAPTData: builder.mutation({
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
  }),
});

export const { useFetchAPTDataMutation } = apartmentDataApi;

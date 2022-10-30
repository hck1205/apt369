import type { TBuilder } from "@/API";
import type { TodaysTransactionInfo } from "@/store/modules/apartment";

type APTData = {
  newTransactionLogs: TodaysTransactionInfo[];
  newTransactionLogsCount: number;
};

type RegionData = {
  locations: {
    locallow_nm: string;
    locatadd_nm: string;
    region_cd: string;
  }[];
};

export const apartmentAPI = (builder: TBuilder) => {
  return {
    fetchAPTData: builder.mutation<APTData, Object>({
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
    fetchRegionData: builder.mutation<RegionData, Object>({
      query: (params: { regionCode: string }) => {
        return {
          url: "/new-transaction/getLocation",
          method: "POST",
          body: {
            regionCode: params.regionCode,
          },
        };
      },
    }),
  };
};

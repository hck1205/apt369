export type TStoreApartment = {
  data: { [key: string]: TodaysTransactionInfo[] };
};

export type TodaysTransactionInfo = {
  apartment: {
    address: string;
    apartment_code_mapping_id: number;
    build_year: number;
    name: string;
  };
  transaction: {
    [key: string]: number | string;
    area_for_exclusive_use: number;
    deal_amount: number;
    deal_date: string;
    deal_day: number;
    deal_month: number;
    deal_year: number;
    req_gbn: string;
    floor: number;
  };
};

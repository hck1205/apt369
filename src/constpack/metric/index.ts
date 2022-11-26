export const ALL_METRIC_LIST = [
  "deal_amount",
  "deal_count",
  "deal_total_amount",
  "deal_average_amount",
  "deal_highest_amount",
  "deal_lowest_amount",
  "deal_gap_compare_to_yesterday",
  "deal_gap_compare_to_yesterday_raw",
  "deal_gap_percentage_compare_to_yesterday",
  "deal_gap_percentage_compare_to_yesterday_raw",
  "year1_max_gap_amount",
  "year1_max_gap_percentage",
  "year1_max_gap_amount_raw",
  "year1_max_gap_percentage_raw",
  "year1_min_gap_amount",
  "year1_min_gap_percentage",
  "year1_min_gap_amount_raw",
  "year1_min_gap_percentage_raw",
  "year3_max_gap_amount",
  "year3_max_gap_percentage",
  "year3_max_gap_amount_raw",
  "year3_max_gap_percentage_raw",
  "year3_min_gap_amount",
  "year3_min_gap_percentage",
  "year3_min_gap_amount_raw",
  "year3_min_gap_percentage_raw",
  "year5_max_gap_amount",
  "year5_max_gap_percentage",
  "year5_max_gap_amount_raw",
  "year5_max_gap_percentage_raw",
  "year5_min_gap_amount",
  "year5_min_gap_percentage",
  "year5_min_gap_amount_raw",
  "year5_min_gap_percentage_raw",
  "year10_max_gap_amount",
  "year10_max_gap_percentage",
  "year10_max_gap_amount_raw",
  "year10_max_gap_percentage_raw",
  "year10_min_gap_amount",
  "year10_min_gap_percentage",
  "year10_min_gap_amount_raw",
  "year10_min_gap_percentage_raw",
  "total_max_gap_amount",
  "total_max_gap_percentage",
  "total_max_gap_amount_raw",
  "total_max_gap_percentage_raw",
  "total_min_gap_amount",
  "total_min_gap_percentage",
  "total_min_gap_amount_raw",
  "total_min_gap_percentage_raw",
];

export const ALL_FIELDS_FOR_TODAYS_TRANSACTION: {
  [key: string]: {
    value: string;
    label: string;
  };
} = {
  deal_amount: {
    value: "deal_amount",
    label: "거래가격",
  },
  year1_max: {
    value: "year1_max",
    label: "고가대비(1년)",
  },
  year1_min: {
    value: "year1_min",
    label: "저가대비(1년)",
  },
  year3_max: {
    value: "year3_max",
    label: "고가대비(3년),",
  },
  year3_min: {
    value: "year3_min",
    label: "저가대비(3년)",
  },
  year5_max: {
    value: "year5_max",
    label: "고가대비(5년)",
  },
  year5_min: {
    value: "year5_min",
    label: "저가대비(5년)",
  },
  year10_max: {
    value: "year10_max",
    label: "고가대비(10년)",
  },
  year10_min: {
    value: "year10_min",
    label: "저가대비(10년)",
  },
  total_max: {
    value: "total_max",
    label: "고가대비(전기간)",
  },
  total_min: {
    value: "total_min",
    label: "저가대비(전기간)",
  },
};

export const DEFAULT_FIELDS_TODAYS_TRANSACTION = [
  "deal_amount",
  "year1_max",
  "year1_min",
  "year3_min",
];

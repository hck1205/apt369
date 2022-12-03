export const deepCopy = (targetData: any) => {
  return JSON.parse(JSON.stringify(targetData));
};

export const INTL_STYLE = {
  CURRENCY: "currency",
  PERCENTAGE: "percent",
};

export const formatNumber = ({
  value,
  type,
}: {
  value: number | string;
  type: string;
}) => {
  const _value = typeof value === "string" ? parseFloat(value) : value;

  switch (type) {
    case INTL_STYLE.CURRENCY:
      const option = {
        style: INTL_STYLE.CURRENCY,
        currency: "KRW",
      };

      return new Intl.NumberFormat("ko-KR", option).format(_value);

    case INTL_STYLE.PERCENTAGE:
      return `${_value.toFixed(2)}%`;

    default:
      return value;
  }
};

interface COLORS {
  [key: string]: string;
}

const COLORS: COLORS = Object.freeze({
  "white-100": "#fff",

  "gray-50": "#e0e3eb",
});

export const WHITE = (number: Number) => COLORS[`white-${number}`];
export const BLUE = (number: Number) => COLORS[`blue-${number}`];
export const GRAY = (number: Number) => COLORS[`gray-${number}`];

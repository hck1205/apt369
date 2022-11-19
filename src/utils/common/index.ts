export const deepCopy = (targetData: any) => {
  return JSON.parse(JSON.stringify(targetData));
};

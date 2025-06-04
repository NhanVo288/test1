export const isEmptyArray = (arr) => {
  if (!Array.isArray(arr)) console.error("The provided value is not an array!");

  return !arr.length;
};

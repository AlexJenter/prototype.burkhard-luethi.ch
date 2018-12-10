export const clamp = (min, max, val) =>
  [min, val, max].sort((a, b) => a - b)[1];

export const groupBy = (xs, key) =>
  xs.reduce((acc, x) => {
    (acc[x[key]] = acc[x[key]] || []).push(x);
    return acc;
  }, {});

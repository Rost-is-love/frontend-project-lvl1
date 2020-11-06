// eslint-disable-next-line import/prefer-default-export
export const makeRandomNum = (min, max) => {
  const randNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randNum);
};

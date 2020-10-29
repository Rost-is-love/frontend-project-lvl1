import { makeRandomNum, engine } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNum, secondNum) => {
  let greatestCommonDivisor = 1;
  let smallerNum;

  if (firstNum > secondNum) {
    smallerNum = secondNum;
  }
  smallerNum = firstNum;

  for (let divisor = 1; divisor <= smallerNum; divisor += 1) {
    if (firstNum % divisor === 0 && secondNum % divisor === 0) {
      greatestCommonDivisor = divisor;
    }
  }

  return greatestCommonDivisor;
};

const gamesСonditions = () => {
  const firstNum = makeRandomNum(100);
  const secondNum = makeRandomNum(100);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findGcd(firstNum, secondNum));
  return [question, answer];
};

export default () => engine(rules, gamesСonditions);

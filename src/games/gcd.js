import engine from '../index.js';
import makeRandomNum from '../functions.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => (x !== 0 ? findGcd(y % x, x) : y);

const generateGame = () => {
  const firstNum = makeRandomNum(100);
  const secondNum = makeRandomNum(100);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findGcd(firstNum, secondNum));
  return [question, answer];
};

export default () => engine(description, generateGame);

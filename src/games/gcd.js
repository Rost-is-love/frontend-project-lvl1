import playGame from '../index.js';
import { makeRandomNum } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => (x !== 0 ? findGcd(y % x, x) : y);

const generateGame = () => {
  const firstNum = makeRandomNum(1, 100);
  const secondNum = makeRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findGcd(firstNum, secondNum));
  return [question, answer];
};

export default () => playGame(description, generateGame);

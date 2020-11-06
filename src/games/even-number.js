import playGame from '../index.js';
import { makeRandomNum } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const genRoundData = () => {
  const randomNumber = String(makeRandomNum(1, 1000));
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

export default () => playGame(description, genRoundData);

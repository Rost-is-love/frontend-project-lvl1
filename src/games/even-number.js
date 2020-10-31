import { makeRandomNum, engine } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGame = () => {
  const randomNumber = String(makeRandomNum(1000));
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

export default () => engine(description, generateGame);

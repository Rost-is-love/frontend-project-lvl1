import { makeRandomNum, engine } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gamesСonditions = () => {
  const randomnNumber = String(makeRandomNum(1000));
  const answer = isEven(randomnNumber) ? 'yes' : 'no';
  return [randomnNumber, answer];
};

export default () => engine(rules, gamesСonditions);

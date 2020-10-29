import { makeRandomNum, engine } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gamesСonditions = () => {
  const randomnNumber = makeRandomNum(1000);
  const correctAnswer = isEven(randomnNumber) ? 'yes' : 'no';
  return [randomnNumber, correctAnswer];
};

export default () => engine(rules, gamesСonditions);

import { makeRandomNum, engine } from '../index.js';

const gameChanger = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateGame = () => {
  const randomNumber = String(makeRandomNum(1000));
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

export default () => engine(gameChanger, generateGame);

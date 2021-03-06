import playGame from '../index.js';
import { makeRandomNum } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const genRoundData = () => {
  const randomNumber = makeRandomNum(1, 1000);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [String(randomNumber), answer];
};

export default () => playGame(description, genRoundData);

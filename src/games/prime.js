import engine from '../index.js';

const rules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

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

const gamesСonditions = () => {
  const randomnNumber = Math.floor(Math.random() * 1000);
  const correctAnswer = (isPrime(randomnNumber)) ? 'yes' : 'no';
  return [randomnNumber, correctAnswer];
};

export default () => engine(rules, gamesСonditions);

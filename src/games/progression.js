import { makeRandomNum, engine } from '../index.js';

const gameChanger = 'What number is missing in the progression?';

const makeProgression = (amountOfNumbers, startNumber, indexOfMissingNumber,
  progressionInterval) => {
  let progression = '';
  let currentNum = startNumber;
  let missingNumber;

  for (let i = 0; i < amountOfNumbers; i += 1) {
    if (i === indexOfMissingNumber) {
      progression = `${progression}.. `;
      missingNumber = currentNum;
    } else progression = `${progression}${currentNum} `;
    currentNum += progressionInterval;
  }

  return [progression, missingNumber];
};

const amountOfNumbers = 10;

const gamesСonditions = () => {
  const startNumber = makeRandomNum(10);
  const indexOfMissingNumber = makeRandomNum(10);
  const progressionInterval = Math.ceil(Math.random() * 10);
  const [question, missingNumber] = makeProgression(amountOfNumbers, startNumber,
    indexOfMissingNumber, progressionInterval);
  const answer = String(missingNumber);

  return [question, answer];
};

export default () => engine(gameChanger, gamesСonditions);

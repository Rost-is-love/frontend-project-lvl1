import engine from '../index.js';
import { makeRandomNum } from '../utils.js';

const description = 'What number is missing in the progression?';

const amountOfNumbers = 10;

const makeProgression = (startNumber, indexOfMissingNumber,
  progressionInterval) => {
  const progressionParts = [];
  let currentNum = startNumber;
  let missingNumber;

  for (let i = 0; i < amountOfNumbers; i += 1) {
    if (i === indexOfMissingNumber) {
      progressionParts.push('..');
      missingNumber = currentNum;
    } else {
      progressionParts.push(currentNum);
    }
    currentNum += progressionInterval;
  }

  const progression = progressionParts.join(' ');

  return [progression, missingNumber];
};

const generateGame = () => {
  const startNumber = makeRandomNum(10);
  const indexOfMissingNumber = makeRandomNum(10);
  const progressionInterval = Math.ceil(Math.random() * 10);
  const [question, missingNumber] = makeProgression(startNumber,
    indexOfMissingNumber, progressionInterval);
  const answer = String(missingNumber);

  return [question, answer];
};

export default () => engine(description, generateGame);

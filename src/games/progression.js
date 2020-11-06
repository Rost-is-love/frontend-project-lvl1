import playGame from '../index.js';
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

const genRoundData = () => {
  const startNumber = makeRandomNum(0, 10);
  const indexOfMissingNumber = makeRandomNum(0, 9);
  const progressionInterval = makeRandomNum(1, 10);
  const [question, missingNumber] = makeProgression(startNumber,
    indexOfMissingNumber, progressionInterval);
  const answer = String(missingNumber);

  return [question, answer];
};

export default () => playGame(description, genRoundData);

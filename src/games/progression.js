import playGame from '../index.js';
import { makeRandomNum } from '../utils.js';

const description = 'What number is missing in the progression?';

const amountOfNumbers = 10;

const makeProgression = (startNumber, progressionInterval) => {
  const progression = [];
  let currentNum = startNumber;

  for (let i = 0; i < amountOfNumbers; i += 1) {
    progression.push(currentNum);
    currentNum += progressionInterval;
  }

  return progression;
};

const makeQuestion = (progression, indexOfMissingNumber) => {
  const progressionCopy = progression.slice();
  progressionCopy[indexOfMissingNumber] = '..';
  return progressionCopy.join(' ');
};

const genRoundData = () => {
  const startNumber = makeRandomNum(0, 10);
  const indexOfMissingNumber = makeRandomNum(0, amountOfNumbers - 1);
  const progressionInterval = makeRandomNum(1, 10);
  const progression = makeProgression(startNumber, progressionInterval);
  const answer = String(progression[indexOfMissingNumber]);
  const question = makeQuestion(progression, indexOfMissingNumber);

  return [question, answer];
};

export default () => playGame(description, genRoundData);

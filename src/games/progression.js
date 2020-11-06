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
  const questionArray = [];
  for (let i = 0; i < progression.length; i += 1) {
    if (i === indexOfMissingNumber) {
      questionArray.push('..');
    } else questionArray.push(progression[i]);
  }

  const question = questionArray.join(' ');

  return question;
};

const genRoundData = () => {
  const startNumber = makeRandomNum(0, 10);
  const indexOfMissingNumber = makeRandomNum(0, 9);
  const progressionInterval = makeRandomNum(1, 10);
  const progression = makeProgression(startNumber, progressionInterval);
  const question = makeQuestion(progression, indexOfMissingNumber);
  const answer = String(progression[indexOfMissingNumber]);

  return [question, answer];
};

export default () => playGame(description, genRoundData);

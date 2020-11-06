import playGame from '../index.js';
import { makeRandomNum } from '../utils.js';

const description = 'What is the result of the expression?';

const makeExpression = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Unknown operator!');
  }
};

const genRoundData = () => {
  const firstNum = makeRandomNum(1, 100);
  const secondNum = makeRandomNum(1, 100);
  const operators = ['+', '-', '*'];
  const lastIndex = operators.length - 1;
  const operator = operators[makeRandomNum(0, lastIndex)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = String(makeExpression(operator, firstNum, secondNum));
  return [question, answer];
};

export default () => playGame(description, genRoundData);

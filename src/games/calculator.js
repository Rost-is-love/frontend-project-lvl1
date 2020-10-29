import { makeRandomNum, engine } from '../index.js';

const gameChanger = 'What is the result of the expression?';

const makeExpression = (a, operator, b) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      throw new Error('Unknown operator!');
  }

  return result;
};

const gamesСonditions = () => {
  const firstNum = makeRandomNum(100);
  const secondNum = makeRandomNum(100);
  const operators = ['+', '-', '*'];
  const operator = operators[makeRandomNum(operators.length)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = String(makeExpression(firstNum, operator, secondNum));
  return [question, answer];
};

export default () => engine(gameChanger, gamesСonditions);

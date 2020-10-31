import { makeRandomNum, engine } from '../index.js';

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

const generateGame = () => {
  const firstNum = makeRandomNum(100);
  const secondNum = makeRandomNum(100);
  const operators = ['+', '-', '*'];
  const operator = operators[makeRandomNum(operators.length)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = String(makeExpression(operator, firstNum, secondNum));
  return [question, answer];
};

export default () => engine(description, generateGame);

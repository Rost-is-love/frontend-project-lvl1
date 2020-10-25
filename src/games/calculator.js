import engine from '../index.js';

const rules = () => console.log('What is the result of the expression?');

const expression = (a, operator, b) => {
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
      throw new Error('Unknown state!');
  }

  return result;
};

const gamesСonditions = () => {
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(expression(firstNum, operator, secondNum));
  return [question, correctAnswer];
};

export default () => engine(rules, gamesСonditions);

import engine from '../index.js';

const rules = 'What is the result of the expression?';

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

const randomnNumber = (num) => Math.floor(Math.random() * num);

const gamesСonditions = () => {
  const firstNum = randomnNumber(100);
  const secondNum = randomnNumber(100);
  const operators = ['+', '-', '*'];
  const operator = operators[randomnNumber(operators.length)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(expression(firstNum, operator, secondNum));
  return [question, correctAnswer];
};

export default () => engine(rules, gamesСonditions);

import promptly from 'promptly';

const isEvenNumber = async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 1000);
    const answer = await promptly.prompt(`Question: ${number}\nYour answer:`);
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } if (number % 2 === 0 && answer === 'no') {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    } if (number % 2 !== 0 && answer === 'yes') {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    } if (answer !== 'yes' && answer !== 'no') {
      return console.log(`${answer} is wrong answer ;(. Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};

export default isEvenNumber;

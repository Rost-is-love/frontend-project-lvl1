import promptly from 'promptly';

export const makeRandomNum = (num) => Math.floor(Math.random() * num);

const numberOfRounds = 3;

export const engine = async (description, gamesСonditions) => {
  console.log('Welcome to the Brain Games!');
  const playerName = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${playerName}!`);
  console.log(description);

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const [question, answer] = gamesСonditions();
    const response = await promptly.prompt(`Question: ${question}\nYour answer:`);
    if (response !== answer) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
};

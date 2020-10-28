import promptly from 'promptly';

const numberOfRounds = 3;

const engine = async (rules, gamesСonditions) => {
  console.log('Welcome to the Brain Games!');
  const playerName = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${playerName}!`);
  console.log(rules);

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const [question, correctAnswer] = gamesСonditions();
    const response = await promptly.prompt(`Question: ${question}\nYour answer:`);
    if (response !== correctAnswer) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
};

export default engine;

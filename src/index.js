import promptly from 'promptly';

const numberOfRounds = 3;

const playGame = async (description, generateGame) => {
  console.log('Welcome to the Brain Games!');
  const playerName = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${playerName}!`);
  console.log(description);

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const [question, answer] = generateGame();
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

export default playGame;

import readlineSync from 'readline-sync';

const rounds = 3;

const startGame = (rule, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  for (let i = 0; i < rounds; i += 1) {
    const [result, question] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;

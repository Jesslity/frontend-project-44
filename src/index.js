import readlineSync from 'readline-sync';

const rounds = 3;

const startGame = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < rounds; i += 1) {
    const [result, question] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
  }
  if (result === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
    console.log(`Let's try again, ${userName}!`);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;

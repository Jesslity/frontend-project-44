#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

const prime = (number) => {
  let abc = 'no';
  for (let i = 2; number > 1; i += 1) {
    if (number % i === 0) {
      break;
    } else {
      abc = 'yes';
    }
  }
  return abc;
};

console.log('brain-prime');

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const z = _.random(1, 100);
  console.log(`Question ${z}`);
  const quEstion = readlineSync.question('Your answer: ');
  if (prime(z) === quEstion && i !== 2) {
    console.log('Correct!');
  } else if (prime(z) === quEstion) {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${quEstion}' is wrong answer ;(. Correct answer was '${prime(z)}'`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

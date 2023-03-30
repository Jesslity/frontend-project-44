#!/usr/bin/env node
/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';
import _ from 'lodash';

const gcd = (a, b) => {
  if (a > b) {
    while (a % b !== 0) {
      const c = a % b;
      a = b;
      b = c;
    }
    return b;
  }
  while (b % a !== 0) {
    const c = b % a;
    b = a;
    a = c;
  }
  return a;
};

console.log('brain-gcd');
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');
for (let i = 0; i < 3; i += 1) {
  const a = _.random(1, 100);
  const b = _.random(1, 100);
  console.log(`Question: ${a} ${b} `);
  const quEstion = readlineSync.question('Your answer: ');
  const result1 = String(gcd(a, b));
  if (result1 === quEstion && i !== 2) {
    console.log('Correct!');
  } else if (result1 !== quEstion) {
    console.log(`${quEstion} is wrong answer ;(. Correct answer was ${gcd(a, b)}`);
    console.log(`Let's try again, ${userName}!`);
    break;
  } else {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}!`);
  }
}

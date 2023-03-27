#!/usr/bin/env node
/* eslint-disable no-mixed-operators */
import readlineSync from 'readline-sync';
import _ from 'lodash';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const numba = _.random(1, 5);
  console.log(`Question: ${numba} `);
  const quEstion = readlineSync.question('Your answer: ');
  if (quEstion === 'yes' && numba % 2 === 0 || quEstion === 'no' && numba % 2 !== 0) {
    if (i !== 2) {
      console.log('Correct!');
    } else {
      console.log('Correct!');
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    if (quEstion === 'yes') {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
      console.log(`Let's try again, ${userName}!`);
    } else if (quEstion !== 'yes' && quEstion !== 'no') {
      if (numba % 2 === 0) {
        console.log(`${quEstion} is wrong answer ;(. Correct answer was "yes"`);
        console.log(`Let's try again, ${userName}!`);
      } else {
        console.log(`${quEstion} is wrong answer ;(. Correct answer was "no"`);
        console.log(`Let's try again, ${userName}!`);
      }
    } else {
      console.log('"no" is wrong answer ;(. Correct answer was "yes"');
      console.log(`Let's try again, ${userName}!`);
    }
    break;
  }
}

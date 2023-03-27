#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

console.log('brain-calc');

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
let result = 0;
for (let i = 0; i < 3; i += 1) {
  const a = _.random(1, 10);
  const b = _.random(1, 10);
  const c = _.random(1, 3);
  if (c === 1) {
    console.log(`Question: ${a} * ${b} `);
    result = a * b;
    const stringResult = String(result);
    const quEstion = readlineSync.question('Your answer: ');
    if (quEstion === stringResult) {
      if (i !== 2) {
        console.log('Correct!');
      } else {
        console.log('Correct!');
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${quEstion}' is wrong answer ;(. Correct answer was '${stringResult}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } else if (c === 2) {
    console.log(`Question: ${a} + ${b} `);
    result = a + b;
    const stringResult = String(result);
    const quEstion = readlineSync.question('Your answer: ');
    if (quEstion === stringResult) {
      if (i !== 2) {
        console.log('Correct!');
      } else {
        console.log('Correct!');
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${quEstion}' is wrong answer ;(. Correct answer was '${stringResult}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } else if (c === 3) {
    console.log(`Question: ${a} - ${b} `);
    result = a - b;
    const stringResult = String(result);
    const quEstion = readlineSync.question('Your answer: ');
    if (quEstion === stringResult) {
      if (i !== 2) {
        console.log('Correct!');
      } else {
        console.log('Correct!');
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${quEstion}' is wrong answer ;(. Correct answer was '${stringResult}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
}

#!/usr/bin/env node
import readlineSync from "readline-sync";
import _ from "lodash";

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
    const numba = _.random(1,5);
    const quEstion = readlineSync.question(`Question: ${numba} `);
    if ( quEstion === 'yes' && numba % 2 === 0 || quEstion === 'no' && numba % 2 !== 0) {
        if (i !== 2) {
            console.log(`Correct!`);   
        } else {
            console.log(`Correct!`);
            console.log(`Congratulations, ${userName}!`);
        }       
    } else {
        if ( quEstion === 'yes') {
            console.log(`"yes" is wrong answer ;(. Correct answer was "no"`)
        } else if (quEstion !== 'yes' && quEstion !== 'no') {
            if (numba % 2 === 0) {
                console.log(`${quEstion} is wrong answer ;(. Correct answer was "yes"`);
            }
            else {
                console.log(`${quEstion} is wrong answer ;(. Correct answer was "no"`);
            }
        }
        break;
    };
}
#!/usr/bin/env node
import readlineSync from "readline-sync";
import _ from "lodash";

console.log(`brain-calc`);

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}!`);
console.log('What is the result of the expression?');
let result = 0
for (let i = 0; i < 3; i = i + 1 ) {
    const a = _.random(1,100);
    const b = _.random(1,100);
    const c = _.random(1,3);
    if (c === 1) {
        const quEstion = readlineSync.question(`Question: ${a} * ${b} `);
        result = a * b;
        if (quEstion === result) {
            if (i !== 2 ) {
                console.log(`Correct!`);  
            } else {
                console.log(`Correct!`);
                console.log(`Congratulations, ${userName}!`); 
            }
        } else {
            console.log(`${quEstion} is wrong answer ;(. Correct answer was ${result}`);
            break;
        }
    } else if (c === 2) {
        const quEstion = readlineSync.question(`Question: ${a} + ${b} `);
        result = a + b;
        if (quEstion === result) {
            if (i !== 2 ) {
                console.log(`Correct!`);  
            } else {
                console.log(`Correct!`);
                console.log(`Congratulations, ${userName}!`); 
            }
        } else {
            console.log(`${quEstion} is wrong answer ;(. Correct answer was ${result}`);
            break;
        }
    } else if (c === 3) {
        const quEstion = readlineSync.question(`Question: ${a} - ${b} `);
        result = a - b;
        if (quEstion === result) {
            if (i !== 2 ) {
                console.log(`Correct!`);  
            } else {
                console.log(`Correct!`);
                console.log(`Congratulations, ${userName}!`); 
            }
        } else {
            console.log(`${quEstion} is wrong answer ;(. Correct answer was ${result}`);
            break;
        };
    };
};
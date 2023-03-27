#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';


const mumba = [];
const brainProg = (a, b, c) => {
    const numba = [];  
    for (let i = 0; i < 10; i = i + 1) {
        numba.push(a);
        a = a + b;
    }
    mumba.splice(0);
    mumba.push(numba[c]);
    mumba.join();
    numba.splice(c, 1, '..');    
    numba.join(' ');
    return numba.join(' ');
};


console.log('brain-progression');
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}!`);
console.log('What number is missing in the progression?');

for (let i = 0; i < 3; i += 1) {
    let a = _.random(1, 10);
    let b = _.random(1, 10);
    let c = _.random(1, 10);
    console.log(`Question ${brainProg(a,b,c)}`);
    const quEstion = readlineSync.question('Your answer: ');
    if (mumba.join() == quEstion && i !== 2) {
        console.log('Correct!');
    } else if (mumba.join() == quEstion) {
        console.log('Correct!');
        console.log(`Congratulations, ${userName}!`);
    } else {
        console.log(`'${quEstion}' is wrong answer ;(. Correct answer was '${mumba.join()}'`);
        console.log(`Let's try again, ${userName}!`);
        break; 
    }
};
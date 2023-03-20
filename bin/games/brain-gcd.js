#!/usr/bin/env node
import readlineSync from "readline-sync";
import _ from "lodash";

console.log(`brain-gcd`);

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hi ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');
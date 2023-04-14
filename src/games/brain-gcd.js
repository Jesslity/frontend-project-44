import _ from 'lodash';
import startGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const minRandomNumber = 10;
const maxRandomNumber = 100;
const greatestDivisor = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return greatestDivisor(number2, number1 % number2);
};

const generateRound = () => {
  const randomNumber1 = _.random(minRandomNumber, maxRandomNumber);
  const randomNumber2 = _.random(minRandomNumber, maxRandomNumber);
  const question = `${randomNumber1} ${randomNumber2}`;
  const result = greatestDivisor(randomNumber1, randomNumber2);
  return [String(result), question];
};

export default () => startGame(rule, generateRound);

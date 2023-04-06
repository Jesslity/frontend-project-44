import _ from 'lodash';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const greatestDivisor = (number1, number2) => {
  if (number1 > number2) {
    while (number1 % number2 !== 0) {
      const number3 = number1 % number2;
      number1 = number2;
      number2 = number3;
    }
    return number2;
  }
  while (number2 % number1 !== 0) {
    const number3 = number2 % number1;
    number2 = number1;
    number1 = number3;
  }
  return number1;
};

const game = () => {
  const randomNumber1 = _.random(10, 100);
  const randomNumber2 = _.random(10, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const result = greatestDivisor(randomNumber1, randomNumber2);
  return [String(result), question];
};

export default () => startGame(rules, game);

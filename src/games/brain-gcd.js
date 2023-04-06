import _ from 'lodash';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const greatestDivisor = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return greatestDivisor(number2, number1 % number2);
};

const game = () => {
  const randomNumber1 = _.random(10, 100);
  const randomNumber2 = _.random(10, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const result = greatestDivisor(randomNumber1, randomNumber2);
  return [String(result), question];
};

export default () => startGame(rules, game);

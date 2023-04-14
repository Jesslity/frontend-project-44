import _ from 'lodash';
import startGame from '../index.js';

const rule = 'What is the result of the expression?';
const signs = ['-', '+', '*'];
const minRandomNumber = 1;
const maxRandomNumber = 10;
const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const generateRound = () => {
  const randomNumber1 = _.random(minRandomNumber, maxRandomNumber);
  const randomNumber2 = _.random(minRandomNumber, maxRandomNumber);
  const randomSign = signs[_.random(0, 2)];
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  const result = calculate(randomNumber1, randomNumber2, randomSign);
  return [String(result), question];
};

export default () => startGame(rule, generateRound);

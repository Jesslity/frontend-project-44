import _ from 'lodash';
import startGame from '../index.js';

const rules = 'What is the result of the expression?';
const signs = ['-', '+', '*'];
const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      return number1;
  }
};

const game = () => {
  const randomNumber1 = _.random(1, 10);
  const randomNumber2 = _.random(1, 10);
  const randomSign = signs[_.random(0, 2)];
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  const result = calculate(randomNumber1, randomNumber2, randomSign);
  return [question, String(result)];
};

export default () => startGame(rules, game);

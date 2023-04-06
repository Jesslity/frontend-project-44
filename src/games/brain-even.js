import _ from 'lodash';
import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = (number1) => {
  let evenResult;
  if (number1 % 2 === 0) {
    evenResult = 'yes';
  } else {
    evenResult = 'no';
  }
  return evenResult;
};

const game = () => {
  const randomNumber = _.random(1, 10);
  const question = `${randomNumber}`;
  const result = even(randomNumber);
  return [result, question];
};

export default () => startGame(rules, game);

import _ from 'lodash';
import startGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandomNumber = 1;
const maxRandomNumber = 10;
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = _.random(minRandomNumber, maxRandomNumber);
  const question = `${randomNumber}`;
  const result = isEven(question) ? 'yes' : 'no';
  return [result, question];
};

export default () => startGame(rule, generateRound);

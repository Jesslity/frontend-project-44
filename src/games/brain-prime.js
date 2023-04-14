import _ from 'lodash';
import startGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRandomNumber = 10;
const maxRandomNumber = 100;
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= number / 2; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = _.random(minRandomNumber, maxRandomNumber);
  const question = `${randomNumber}`;
  const result = isPrime(randomNumber) ? 'yes' : 'no';
  return [String(result), question];
};

export default () => startGame(rule, generateRound);

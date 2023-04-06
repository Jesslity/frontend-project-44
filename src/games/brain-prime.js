import _ from 'lodash';
import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const prime = (number) => {
  let primeResult;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      primeResult = 'no';
      break;
    } else {
      primeResult = 'yes';
    }
  }
  return primeResult;
};

const game = () => {
  const randomNumber = _.random(10, 100);
  const question = `${randomNumber}`;
  const result = prime(randomNumber);
  return [String(result), question];
};

export default () => startGame(rules, game);

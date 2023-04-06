import _ from 'lodash';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';
const arrResult = [];
const brainProgression = (firstNumber, step, missingNumber) => {
  const arrStep = [];
  for (let i = 0; i < 10; i += 1) {
    arrStep.push(firstNumber);
    firstNumber += step;
  }
  arrResult.splice(0);
  arrResult.push(arrStep[missingNumber]);
  arrResult.join();
  arrStep.splice(missingNumber, 1, '..');
  arrStep.join(' ');
  return arrStep.join(' ');
};

const game = () => {
  const firstNumber = _.random(1, 10);
  const step = _.random(1, 10);
  const missingNumber = _.random(1, 9);
  const question = `${brainProgression(firstNumber, step, missingNumber)}`;
  const result = arrResult.join();
  return [result, question];
};

export default () => startGame(rules, game);

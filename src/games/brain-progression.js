/* eslint-disable no-param-reassign */
import _ from 'lodash';
import startGame from '../index.js';

const rule = 'What number is missing in the progression?';
const minRandomNumber = 1;
const maxRandomNumber = 10;
const progressionLength = 10;

const defineProgression = (firstNumber, lengthStep, progLength) => {
  const progressions = [];
  for (let i = 0; i < progLength; i += 1) {
    progressions.push(firstNumber + (lengthStep * i));
  }
  return progressions;
};

const generateRound = () => {
  const firstNumber = _.random(minRandomNumber, maxRandomNumber);
  const lengthStep = _.random(minRandomNumber, maxRandomNumber);
  const progression = defineProgression(firstNumber, lengthStep, progressionLength);
  const closedNumber = _.random(0, defineProgression.length - 1);
  const result = progression[closedNumber];
  progression[closedNumber] = '..';
  const question = progression.join(' ');

  return [String(result), question];
};

export default () => startGame(rule, generateRound);

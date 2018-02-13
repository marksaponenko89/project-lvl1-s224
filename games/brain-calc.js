import { getRandomNumber, makePair, getExpResult } from './functions';

export const description = 'What is the result of the expression?';

export const getQuestionAnswer = () => {
  const firstOperator = getRandomNumber(1, 50);
  const secondOperator = getRandomNumber(1, 50);

  const arrOfOperations = ['+', '-', '*'];
  const indexOfOperation = getRandomNumber(0, 2);
  const operation = arrOfOperations[indexOfOperation];

  const question = `${firstOperator} ${operation} ${secondOperator}`;
  const answer = getExpResult(firstOperator, secondOperator, operation);

  return makePair(question, answer);
};

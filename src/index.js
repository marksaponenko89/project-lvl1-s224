import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.round((Math.random() * (max - min)) + min);

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('May I have your name? ');
  const startPoint = 1;
  const endPoint = 3;

  const iter = (counter) => {
    if (counter > endPoint) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const question = getRandomNumber(1, 100);
    const rightAnswer = isEven(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
  };
  return iter(startPoint);
};

export default playGame;

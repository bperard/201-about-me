'use strict';

let score = 0;

const user = prompt('Hello, what is your name?');
alert(`Welcome ${user}, here are five yes(y) or no(n) questions for you!`);

function questionOne() {
  const questionAnswer1 = prompt('Do you like cats?').toLowerCase();
  if (questionAnswer1 === 'yes' || questionAnswer1 === 'y') {
    // console.log('You are correct.');
    alert('You are correct.');
    score++;
  } else if (questionAnswer1 === 'no' || questionAnswer1 === 'n') {
    // console.log('You are incorrect.');
    alert('You are incorrect.');
  }
}

function questionTwo() {
  const questionAnswer2 = prompt('Is the rhythm going to get you?').toLowerCase();
  if (questionAnswer2 === 'yes' || questionAnswer2 === 'y') {
    // console.log('You are correct.');
    alert('You are correct.');
    score++;
  } else if (questionAnswer2 === 'no' || questionAnswer2 === 'n') {
    // console.log('You are incorrect.');
    alert('You are incorrect.');
  }
}


function questionThree() {
  const questionAnswer3 = prompt('Should you avoid spicy food?').toLowerCase();
  if (questionAnswer3 === 'yes' || questionAnswer3 === 'y') {
    // console.log('You are incorrect.');
    alert('You are incorrect.');
  } else if (questionAnswer3 === 'no' || questionAnswer3 === 'n') {
    // console.log('You are correct.');
    alert('You are correct.');
    score++;
  }
}

function questionFour() {
  const questionAnswer4 = prompt('Is this the final question?').toLowerCase();
  if (questionAnswer4 === 'yes' || questionAnswer4 === 'y') {
    // console.log('You are incorrect.');
    alert('You are incorrect.');
  } else if (questionAnswer4 === 'no' || questionAnswer4 === 'n') {
    // console.log('You are correct.');
    alert('You are correct.');
    score++;
  }
}

function questionFive() {
  const questionAnswer5 = prompt('Is this the final question?').toLowerCase();
  if (questionAnswer5 === 'yes' || questionAnswer5 === 'y') {
    // console.log('You are correct.');
    alert('You are correct.');
    score++;
  } else if (questionAnswer5 === 'no' || questionAnswer5 === 'n') {
    // console.log('You are incorrect.');
    alert('You are incorrect.');
  }
}


let questionAnswer6 = null;
let remainingGuesses = 4;

function questionSix() {
  do {
    questionAnswer6 = prompt(`How many species have cats contributed to the extinction of? (${remainingGuesses} guesses remaining)`);
    const parsedQuestionAnswer6 = parseInt(questionAnswer6);

    if (parsedQuestionAnswer6 === 33) {
      alert('You got it right! A bunch of furry, little world-enders, eh?');
      score++;
    } else if (isNaN(parsedQuestionAnswer6)) {
      alert(`${questionAnswer6} is not recognized as a number.`);
    } else if (parsedQuestionAnswer6 < 33) {
      alert(`${parsedQuestionAnswer6} is too low.`);
    } else if (parsedQuestionAnswer6 > 33) {
      alert(`${parsedQuestionAnswer6} is too high.`);
    }

    remainingGuesses--;
    // console.log(questionAnswer6, remainingGuesses, score);

  } while (parseInt(questionAnswer6) !== 33 && remainingGuesses > 0);
}


function questionSeven() {
  let answerArray = ['Garrett', 'Vicki', 'Leonard', 'Annie', 'Jeff', 'Starburns', 'Magnitude', 'Pierce'];
  let questionAnswer7IsCorrect = false;
  remainingGuesses = 6;

  do {
    let questionAnswer7 = prompt(`In "Community: Intro to Political Science", which characters participate in the debate? (${remainingGuesses} guesses remaining)`);
    const lowercaseQuestionAnswer7 = questionAnswer7.toLowerCase();

    for (let i = 0; i < answerArray.length; i++) {
      if (lowercaseQuestionAnswer7 === answerArray[i].toLowerCase()) {
        questionAnswer7IsCorrect = true;
        alert(`${user}, that is correct; you really are streets ahead!`);
        score++;
        i = answerArray.length;
      }
      // console.log(i);
    }

    if (!questionAnswer7IsCorrect && remainingGuesses > 1) {
      alert(`${questionAnswer7} is incorrect, so you should probably Chang your answer.`);
    } else if (!questionAnswer7IsCorrect && remainingGuesses === 1) {
      alert('You really Britta\'d it.');
    }

    remainingGuesses--;
    // console.log(questionAnswer7IsCorrect, questionAnswer7, remainingGuesses, score);

  } while (!questionAnswer7IsCorrect && remainingGuesses > 0);

  alert(`The debaters were: ${answerArray.join(', ')}.`);
}
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

alert(`You got ${score} of 7 answers correct ${user}, feel free to check out the site now.`);

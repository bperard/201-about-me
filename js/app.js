'use strict';

let score = 0;

const user = prompt('Hello, what is your name?');
alert(`Welcome ${user}, here are five yes(y) or no(n) questions for you!`);

function question1() {
  const questionAnswer1 = prompt('Do you like cats?').toLowerCase();
  if (questionAnswer1 === 'yes' || questionAnswer1 === 'y') {
    alert('You are correct.');
    score++;
  } else if (questionAnswer1 === 'no' || questionAnswer1 === 'n') {
    alert('You are incorrect.');
  }
}

function question2() {
  const questionAnswer2 = prompt('Is the rhythm going to get you?').toLowerCase();
  if (questionAnswer2 === 'yes' || questionAnswer2 === 'y') {
    alert('You are correct.');
    score++;
  } else if (questionAnswer2 === 'no' || questionAnswer2 === 'n') {
    alert('You are incorrect.');
  }
}


function question3() {
  const questionAnswer3 = prompt('Should you avoid spicy food?').toLowerCase();
  if (questionAnswer3 === 'yes' || questionAnswer3 === 'y') {
    alert('You are incorrect.');
  } else if (questionAnswer3 === 'no' || questionAnswer3 === 'n') {
    alert('You are correct.');
    score++;
  }
}

function question4() {
  const questionAnswer4 = prompt('Is this the final question?').toLowerCase();
  if (questionAnswer4 === 'yes' || questionAnswer4 === 'y') {
    alert('You are incorrect.');
  } else if (questionAnswer4 === 'no' || questionAnswer4 === 'n') {
    alert('You are correct.');
    score++;
  }
}

function question5() {
  const questionAnswer5 = prompt('Is this the final question?').toLowerCase();
  if (questionAnswer5 === 'yes' || questionAnswer5 === 'y') {
    alert('You are correct.');
    score++;
  } else if (questionAnswer5 === 'no' || questionAnswer5 === 'n') {
    alert('You are incorrect.');
  }
}


let questionAnswer6 = null;
let remainingGuesses = 4;

function question6() {
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

  } while (parseInt(questionAnswer6) !== 33 && remainingGuesses > 0);
}


function question7() {
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
    }

    if (!questionAnswer7IsCorrect && remainingGuesses > 1) {
      alert(`${questionAnswer7} is incorrect, so you should probably Chang your answer.`);
    } else if (!questionAnswer7IsCorrect && remainingGuesses === 1) {
      alert('You really Britta\'d it.');
    }

    remainingGuesses--;

  } while (!questionAnswer7IsCorrect && remainingGuesses > 0);

  alert(`The debaters were: ${answerArray.join(', ')}.`);
}
question1();
question2();
question3();
question4();
question5();
question6();
question7();

alert(`You got ${score} of 7 answers correct ${user}, feel free to check out the site now.`);

'use strict';

const user = prompt('Hello, what is your name?');
alert(`Welcome ${user}, here are some yes(y) or no(n) questions for you!`);

const questionAnswer1 = prompt('Do you like cats?').toLowerCase();
if (questionAnswer1 === 'yes' || questionAnswer1 === 'y') {
  // console.log('You are correct.');
  alert('You are correct.');
} else if (questionAnswer1 === 'no' || questionAnswer1 === 'n') {
  // console.log('You are incorrect.');
  alert('You are incorrect.');
}

const questionAnswer2 = prompt('Is the rhythm going to get you?').toLowerCase();
if (questionAnswer2 === 'yes' || questionAnswer2 === 'y') {
  // console.log('You are correct.');
  alert('You are correct.');
} else if (questionAnswer2 === 'no' || questionAnswer2 === 'n') {
  // console.log('You are incorrect.');
  alert('You are incorrect.');
}

const questionAnswer3 = prompt('Should you avoid spicy food?').toLowerCase();
if (questionAnswer3 === 'yes' || questionAnswer3 === 'y') {
  // console.log('You are incorrect.');
  alert('You are incorrect.');
} else if (questionAnswer3 === 'no' || questionAnswer3 === 'n') {
  // console.log('You are correct.');
  alert('You are correct.');
}

const questionAnswer4 = prompt('Is this the final question?').toLowerCase();
if (questionAnswer4 === 'yes' || questionAnswer4 === 'y') {
  // console.log('You are incorrect.');
  alert('You are incorrect.');
} else if (questionAnswer4 === 'no' || questionAnswer4 === 'n') {
  // console.log('You are correct.');
  alert('You are correct.');
}

const questionAnswer5 = prompt('Is this the final question?').toLowerCase();
if (questionAnswer5 === 'yes' || questionAnswer5 === 'y') {
  // console.log('You are correct.');
  alert('You are correct.');
} else if (questionAnswer5 === 'no' || questionAnswer5 === 'n') {
  // console.log('You are incorrect.');
  alert('You are incorrect.');
}

alert(`You're all done ${user}, feel free to check out the site now.`);

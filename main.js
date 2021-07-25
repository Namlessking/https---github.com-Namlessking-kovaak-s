const scores = document.querySelectorAll('.input');
const scores1 = document.querySelectorAll('.input1');
const scores2 = document.querySelectorAll('.input2');
const scores3 = document.querySelectorAll('.input3');
const scores4 = document.querySelectorAll('.input4');
const scores5 = document.querySelectorAll('.input5');
const statsContainer = document.querySelector('.StatsContainer');
const mainContainer = document.querySelector('.MainContant');
const btn = document.querySelector('.Btn');
const main = document.querySelector('.MainPage');
const stats = document.querySelector('.StatPage');

let currentPage = 1;
let currentScore = 0;
let closeAvrageScore = 0;
let walleSixAvrageScore = 0;
let fuglaaAvrageScore = 0;
let tileFrenzyavarageScore = 0;
let verticalAvrageScore = 0;
let walloneAvrageScore = 0;

//Functions :
function Load() {
  const statsDiv = document.createElement('div');
  stats.appendchilde(statsDiv);
}

function verify() {
  if(currentPage === 1) {
    mainContainer.style.visibility = 'visible';
    statsContainer.style.visibility = 'hidden';
  } else if(currentPage === 2) {
    mainContainer.style.visibility = 'hidden';
    statsContainer.style.visibility = 'visible';
  }
}

function Calculation() {
  scores.forEach(element => {
    currentScore = currentScore + parseInt(element.value);
  });
  closeAvrageScore = currentScore/10;
  currentScore = 0;

  scores1.forEach(newElement => {
    currentScore = currentScore + parseInt(newElement.value);
  })
  walleSixAvrageScore = currentScore/10;
  currentScore = 0;

  scores2.forEach(element => {
    currentScore = currentScore + parseInt(element.value);
  })
  fuglaaAvrageScore = currentScore/10;
  currentScore = 0;

  scores3.forEach(element => {
    currentScore = currentScore + parseInt(element.value);
  })
  tileFrenzyavarageScore = currentScore/10;
  currentScore = 0;

  scores4.forEach(element => {
    currentScore = currentScore + parseInt(element.value);
  })
  verticalAvrageScore = currentScore/10;
  currentScore = 0;

  scores5.forEach(element => {
    currentScore = currentScore + parseInt(element.value);
  })
  walloneAvrageScore = currentScore/10;
  currentScore = 0;
}

function ClearInput() {
  scores.forEach(element => {
    element.value = "";
  });

  scores1.forEach(element => {
    element.value = "";
  })

  scores2.forEach(element => {
    element.value = "";
  })

  scores3.forEach(element => {
    element.value = "";
  })

  scores4.forEach(element => {
    element.value = "";
  })

  scores5.forEach(element => {
    element.value = "";
  })
}

addEventListener('click', (e) => {
  if(e.target === btn) {
    Calculation();
    ClearInput();
  } else if (e.target === main) {
    currentPage = 1;
    verify();
    console.log("main");
  } else if(e.target === stats) {
    currentPage = 2;
    verify();
    console.log("stats");
  }
})
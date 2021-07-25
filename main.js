const scores = document.querySelectorAll('.input');
const btn = document.querySelector('.Btn');

let currentScore = 0;
let finalScore = 0;

addEventListener('click', (e) => {
  if(e.target === btn) {
    scores.forEach(element => {
      currentScore = currentScore + parseInt(element.value);
    });
    finalScore = currentScore/10;
    console.log(currentScore);
    console.log(finalScore);
  }
})
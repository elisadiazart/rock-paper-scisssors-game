const icons = document.getElementById('icons-container');
const pcMove = ['paper', 'scissors', 'rock'];
const background = document.getElementById('triangle-background');

const secondPhase = document.getElementById('second-phase');
const button = document.getElementById('button');
const iconYou = document.getElementById('icon-you')
const iconPc = document.getElementById('icon-pc')
const result = document.getElementById('result-message')

const generateRandomNumber = () => {
  return Math.floor(Math.random() * pcMove.length);
};

const youCounter = document.getElementById('you-counter');
const pcCounter = document.getElementById('pc-counter');
let pcPoints = 0;
let yourPoints = 0;

const moves = {
  rock: {
    scissors: true,
    paper: false
  },
  scissors: {
    paper: true,
    rock: false
  },
  paper: {
    rock: true,
    scissors: false
  }
};

const changePhase = e => {
  icons.classList.toggle('display-none');
  background.classList.toggle('display-none');
  secondPhase.classList.toggle('display');
};

const winOrLose = (you, pc) => {
  changePhase();
  iconYou.src = `assets/images/icon-${you}.svg`;
  iconPc.src = `assets/images/icon-${pc}.svg`;
  if (moves[you][pc]) {
    result.textContent= 'You win';
    yourPoints++;
    youCounter.textContent = yourPoints;

    return;
  }
  if (you === pc) {
    result.textContent= 'Tie';
  } else {
    result.textContent= 'You lose';
    pcPoints++;
    pcCounter.textContent = pcPoints;
  }
};

icons.addEventListener('click', e => {
  if (e.target === icons) {
    return;
  }
  const yourMove = e.target.id;
  const pcMoveRandom = pcMove[generateRandomNumber()];
  iconYou.classList.add(`${yourMove}`)
  iconPc.classList.add(`${pcMoveRandom}`)
  console.log(yourMove);
  console.log(pcMoveRandom);
  winOrLose(yourMove, pcMoveRandom);
  
});

button.addEventListener('click', e => {
  icons.classList.remove('display-none');
  background.classList.remove('display-none');
  secondPhase.classList.toggle('display');
  iconYou.classList.remove('scissors', 'rock', 'paper')
  iconPc.classList.remove('scissors', 'rock', 'paper')
});

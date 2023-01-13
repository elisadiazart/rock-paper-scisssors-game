const icons = document.getElementById('icons-container');
const pcMove = ['paper', 'scissors', 'rock'];
const background = document.getElementById('triangle-background');

const secondPhase = document.getElementById('second-phase');
const secondPhaseIconYou = document.getElementById('icon');
const secondPhaseIconPc = document.getElementById('icon-pc');
const button = document.getElementById('button');

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
  secondPhaseIconYou.src = `assets/images/icon-${you}.svg`;
  secondPhaseIconPc.src = `assets/images/icon-${pc}.svg`;
  if (moves[you][pc]) {
    console.log('Has ganado');
    yourPoints++;
    youCounter.textContent = yourPoints;

    return;
  }
  if (you === pc) {
    console.log('Empate');
  } else {
    console.log('Has perdido');
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
  console.log(yourMove);
  console.log(pcMoveRandom);
  winOrLose(yourMove, pcMoveRandom);
});

button.addEventListener('click', e => {
  icons.classList.remove('display-none');
  background.classList.remove('display-none');
  secondPhase.classList.toggle('display');
});

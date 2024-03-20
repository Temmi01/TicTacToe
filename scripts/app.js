const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  }
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backDrop = document.getElementById('backdrop');
const form = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');
const gameArea = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOver = document.getElementById('game-over');

const editPlayer1Button = document.getElementById('edit-player-1-btn');
const editPlayer2Button = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-button');
const startNewGameBtn = document.getElementById('start-game-btn');

const gameFields = document.querySelectorAll('#game-board li');

editPlayer1Button.addEventListener('click', openPlayerConfig);
editPlayer2Button.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
backDrop.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);

for (const gameField of gameFields) {
  gameField.addEventListener('click', selectGameField)
}
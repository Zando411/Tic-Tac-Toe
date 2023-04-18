const Gameboard = (() => {
  let gameboard = ['', '', '', '', '', '', '', '', ''];

  const render = () => {
    let boardHTML = '';
    gameboard.forEach((cell, index) => {
      boardHTML += `<div class="cell" id=square-${index}>${cell}</div>`;
    });
    document.querySelector('#gameboard').innerHTML = boardHTML;
  };

  return {
    render,
  };
})();

const CreatePlayer = (name, mark) => {
  return {
    name,
    mark,
  };
};

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    players = [
      CreatePlayer(document.querySelector('#player1').value, 'X'),
      CreatePlayer(document.querySelector('#player2').value, 'O'),
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
  };
  return {
    start,
  };
})();

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
  Game.start();
});

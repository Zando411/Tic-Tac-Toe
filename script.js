const Gameboard = (() => {
  let gameboard = ['', '', '', '', '', '', '', '', ''];

  const render = () => {
    let boardHTML = '';
    gameboard.forEach((cell, index) => {
      boardHTML += `<div class="cell" id=square-${index}>${cell}</div>`;
    });
    document.querySelector('#gameboard').innerHTML = boardHTML;
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', Game.handleClick);
    });
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

  const handleClick = (event) => {
    let index = parseInt(event.target.id.split('-')[1]);
    alert(index);
  };
  return {
    start,
    handleClick,
  };
})();

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
  Game.start();
});

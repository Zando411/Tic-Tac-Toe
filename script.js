const Gameboard = (() => {
  let gameboard = ['', '', '', '', '', '', '', '', ''];
})();

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
  Game.start();
});

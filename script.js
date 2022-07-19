const gameBoard = (() => {
  const Board = new Array(9);
})();

const display = (() => {})();

const gameController = (() => {})();

const players = (number) => {};

const board = document.getElementById("board"); //know which cell i just clicked where does this go? display maybe
board.addEventListener("click", (e) => {
  if (e.target.dataset.cell != null) alert(e.target.dataset.cell);
});

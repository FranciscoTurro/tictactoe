const gameBoard = (() => {
  const Board = new Array(9);

  const boardDOM = document.getElementById("board");

  boardDOM.addEventListener("click", (e) => {
    if (e.target.dataset.cell != null) {
      Board[e.target.dataset.cell] = "x";
    }
  });
  return { Board, boardDOM };
})();

const display = (() => {
  const draw = () => {
    for (i = 0; i < gameBoard.Board.length; i++) {
      if (gameBoard.Board[i] != null) {
        gameBoard.boardDOM
          .querySelector(`[data-cell="${i}"]`) //gives a different class to the square that has been selected, so i can go into css and make .classname to have a drawing or some shit
          .classList.add("Asd");
      }
    }
  };
  return { draw };
})();

const gameController = (() => {})();

const players = (number) => {};

function asd() {
  for (i = 0; i < gameBoard.Board.length; i++)
    console.log(i + ": " + gameBoard.Board[i]);
}

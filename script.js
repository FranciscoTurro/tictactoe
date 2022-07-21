const gameBoard = (() => {
  const Board = new Array(9);

  const boardDOM = document.getElementById("board");

  boardDOM.addEventListener("click", (e) => {
    if (e.target.dataset.cell != null) {
      Board[e.target.dataset.cell] = "x";
      display.draw();
      gameController.checkForGame();
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

const gameController = (() => {
  const checkForGame = () => {
    if (
      //checking if the array has a win condition. done in the single worst way possible. piss off posible solucion mejor https://gist.github.com/perlmonger42/3543760
      (gameBoard.Board[0] == "x" &&
        gameBoard.Board[1] == "x" &&
        gameBoard.Board[2] == "x") ||
      (gameBoard.Board[0] == "x" &&
        gameBoard.Board[3] == "x" &&
        gameBoard.Board[6] == "x") ||
      (gameBoard.Board[2] == "x" &&
        gameBoard.Board[5] == "x" &&
        gameBoard.Board[8] == "x") ||
      (gameBoard.Board[6] == "x" &&
        gameBoard.Board[7] == "x" &&
        gameBoard.Board[8] == "x") ||
      (gameBoard.Board[0] == "x" &&
        gameBoard.Board[4] == "x" &&
        gameBoard.Board[8] == "x") ||
      (gameBoard.Board[2] == "x" &&
        gameBoard.Board[4] == "x" &&
        gameBoard.Board[6] == "x")
    ) {
      alert("you won now fuck off");
      location.reload(); //TEMPORARY
    } else {
      if (gameBoard.Board.every((element) => element === undefined))
        alert("Its a tie lads");
    }
  };
  return { checkForGame };
})();

const players = (number) => {};

function asd() {
  for (
    i = 0;
    i < gameBoard.Board.length;
    i++ //troubleshooting
  )
    console.log(i + ": " + gameBoard.Board[i]);
}

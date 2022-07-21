const gameBoard = (() => {
  const Board = new Array(9);

  const boardDOM = document.getElementById("board");

  const getArrayInfo = (index) => {
    //i dont want users accessing my array
    return Board[index];
  };

  boardDOM.addEventListener("click", (e) => {
    if (Board[e.target.dataset.cell] == null) {
      Board[e.target.dataset.cell] = gameController.getTurn();
      display.draw();
      // gameController.checkForGame();
      gameController.changeTurn();
    } else {
      return;
    }
  });
  return { getArrayInfo, boardDOM };
})();

const display = (() => {
  const draw = () => {
    for (i = 0; i < 9; i++) {
      if (gameBoard.getArrayInfo(i) != null) {
        gameBoard.boardDOM
          .querySelector(`[data-cell="${i}"]`) //gives a different class to the square that has been selected, so i can go into css and make .classname to have a drawing or some shit
          .classList.add(gameBoard.getArrayInfo(i));
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
        gameBoard.Board[6] == "x") ||
      (gameBoard.Board[1] == "x" &&
        gameBoard.Board[4] == "x" &&
        gameBoard.Board[7] == "x") ||
      (gameBoard.Board[3] == "x" &&
        gameBoard.Board[4] == "x" &&
        gameBoard.Board[5] == "x")
    ) {
      alert("you won now fuck off");
      location.reload(); //TEMPORARY
    }
  };

  let currentTurn = "x";

  const changeTurn = () => {
    if (gameController.currentTurn == "x") {
      gameController.currentTurn = "o";
    } else {
      gameController.currentTurn = "x";
    }
  };

  const getTurn = () => {
    return gameController.currentTurn;
  };

  return { checkForGame, getTurn, changeTurn };
})();

const players = (number) => {};

function asd() {
  //troubleshooting, ignore
  for (i = 0; i < 9; i++) console.log(i + ": " + gameBoard.getArrayInfo(i));
}

window.onload = gameController.changeTurn(); //must be here, signs OF GOOD CODING AM I RIGHT FELLAS

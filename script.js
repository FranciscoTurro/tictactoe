const BoardLength = 9;

const gameBoard = (() => {
  const Board = new Array(9);

  const getArrayInfo = (index) => {
    //i dont want users accessing my array
    return Board[index];
  };

  const boardDOM = document.getElementById("board");

  boardDOM.addEventListener("click", (e) => {
    if (Board[e.target.dataset.cell] == null) {
      Board[e.target.dataset.cell] = gameController.getTurn();
      display.draw();
      gameController.checkForGame();
      gameController.changeTurn();
    } else {
      return;
    }
  });
  return { getArrayInfo, boardDOM };
})();

const display = (() => {
  const draw = () => {
    for (i = 0; i < BoardLength; i++) {
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
  let moves = 0;
  let currentTurn = "x";

  const checkForGame = () => {
    if (
      winCondition(
        gameBoard.getArrayInfo(0),
        gameBoard.getArrayInfo(1),
        gameBoard.getArrayInfo(2)
      ) ||
      winCondition(
        gameBoard.getArrayInfo(0),
        gameBoard.getArrayInfo(3),
        gameBoard.getArrayInfo(6)
      ) ||
      winCondition(
        gameBoard.getArrayInfo(2),
        gameBoard.getArrayInfo(5),
        gameBoard.getArrayInfo(8)
      ) ||
      winCondition(
        gameBoard.getArrayInfo(6),
        gameBoard.getArrayInfo(7),
        gameBoard.getArrayInfo(8)
      ) ||
      winCondition(
        gameBoard.getArrayInfo(0),
        gameBoard.getArrayInfo(4),
        gameBoard.getArrayInfo(8)
      ) ||
      winCondition(
        gameBoard.getArrayInfo(2),
        gameBoard.getArrayInfo(4),
        gameBoard.getArrayInfo(6)
      ) ||
      winCondition(
        gameBoard.getArrayInfo(1),
        gameBoard.getArrayInfo(4),
        gameBoard.getArrayInfo(7)
      ) ||
      winCondition(
        gameBoard.getArrayInfo(3),
        gameBoard.getArrayInfo(4),
        gameBoard.getArrayInfo(5)
      )
    ) {
      alert(`The player with ${getTurn()} wins`);
      location.reload(); //TEMPORARY
    } else {
      moves++;
      if (moves == 9) {
        alert("It's a tie");
        location.reload(); //TEMPORARY
      }
    }
  };

  const winCondition = (n1, n2, n3) => {
    if (n1 != null) {
      if (n1 == n2 && n1 == n3) {
        return true;
      }
    }
  };

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

  return { checkForGame, getTurn, changeTurn }; //try not to allow users to change the turn
})();

const players = () => {};

function asd() {
  //troubleshooting, ignore
  for (i = 0; i < BoardLength; i++)
    console.log(i + ": " + gameBoard.getArrayInfo(i));
}

window.onload = gameController.changeTurn(); //must be here, signs OF GOOD CODING AM I RIGHT FELLAS

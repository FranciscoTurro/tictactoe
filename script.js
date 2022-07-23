const BoardLength = 9;

const gameBoard = (() => {
  const Board = new Array(9);

  const getArrayInfo = (index) => {
    //i dont want users accessing my array
    return Board[index];
  };

  const wipeBoard = () => {
    Board.splice(0, Board.length);
    const list = gameBoard.boardDOM.querySelectorAll("[data-cell]");
    list.forEach((element) => {
      element.classList.remove("x");
      element.classList.remove("o");
    });
  };

  const boardDOM = document.getElementById("board");

  boardDOM.addEventListener("click", (e) => {
    if (gameController.getWincon() == true) {
      return;
    }
    if (Board[e.target.dataset.cell] == null) {
      Board[e.target.dataset.cell] = gameController.getTurn();
      display.draw();
      gameController.checkForGame();
      gameController.changeTurn();
      display.updateInfo();
    } else {
      return;
    }
  });

  return { getArrayInfo, boardDOM, wipeBoard };
})();

const gameController = (() => {
  let winCon = false;
  let moves = 0;
  let currentTurn;
  const restart = document.querySelector(".restartBTN");

  restart.addEventListener("click", () => {
    gameBoard.wipeBoard();
    moves = 0; //resets tie condition
    winCon = false;
    gameController.currentTurn = "x";
    display.updateInfo();
  });

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
      alert(`Player ${getTurn()} wins`);
      winCon = true;
    } else {
      moves++;
      if (moves == 9) {
        alert("It's a tie");
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

  const getWincon = () => {
    return winCon;
  };

  return { checkForGame, getTurn, changeTurn, getWincon }; //try not to allow users to change the turn
})();

window.onload = gameController.changeTurn();
//must be here, signs OF GOOD CODING AM I RIGHT FELLAS

const display = (() => {
  const info = document.querySelector(".info");

  const updateInfo = () => {
    info.textContent = `It's ${gameController.getTurn()}'s move`;
  };

  const draw = () => {
    for (i = 0; i < BoardLength; i++) {
      if (gameBoard.getArrayInfo(i) != null) {
        gameBoard.boardDOM
          .querySelector(`[data-cell="${i}"]`) //gives a different class to the square that has been selected, so i can go into css and make .classname to have a drawing or some shit
          .classList.add(gameBoard.getArrayInfo(i));
      }
    }
  };

  return { draw, updateInfo };
})();

function asd() {
  //troubleshooting, ignore
  for (i = 0; i < BoardLength; i++)
    console.log(i + ": " + gameBoard.getArrayInfo(i));
}

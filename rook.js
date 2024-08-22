function validRookMoves() {
  console.log("Valid rook moves");

  //  UP
  console.log("line 40rook");
  for (let i = parseInt(dragRow) + 1; i <= 8; i++) {
    const squareUp = dragCol + i;

    const up = document.querySelector(`div[square-id = "${squareUp}"]`);

    const isNextRowEmpty = isEmpty(up); // remember the function is asking if up === null, if so then is empty therefore true. Otherwise it is false.

    const isNextRowOpponent = up?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );

    if (isNextRowEmpty) {
      moves.push(squareUp);
    } else {
      isNextRowOpponent && moves.push(squareUp);
      break;
    }
  }

  // DOWN
  for (let i = parseInt(dragRow) - 1; i >= 1; i--) {
    const squareDown = dragCol + i;
    console.log(squareDown);

    const down = document.querySelector(`div[square-id = "${squareDown}"]`);

    const isNextRowEmpty = isEmpty(down);

    const isNextRowOpponent = down?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );

    if (isNextRowEmpty) {
      moves.push(squareDown);
    } else {
      isNextRowOpponent && moves.push(squareDown);
      break;
    }
  }

  console.log(moves);

  // RIGHT  console.log(String.fromCharCode(104)) -> "h"
  for (let i = parseInt(dragCol.charCodeAt(0)) + 1; i <= 104; i++) {
    const squareRight = String.fromCharCode(i) + dragRow;
    console.log(squareRight);

    const right = document.querySelector(`div[square-id = "${squareRight}"]`);

    const isNextRowEmpty = isEmpty(right);

    const isNextRowOpponent = right?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );

    if (isNextRowEmpty) {
      moves.push(squareRight);
    } else {
      isNextRowOpponent && moves.push(squareRight);
      break;
    }
  }

  // LEFT  console.log(String.fromCharCode(97)) -> "a"
  for (let i = parseInt(dragCol.charCodeAt(0)) - 1; i >= 97; i--) {
    const squareLeft = String.fromCharCode(i) + dragRow;
    console.log(squareLeft);

    const left = document.querySelector(`div[square-id = "${squareLeft}"]`);

    const isNextRowEmpty = isEmpty(left);

    const isNextRowOpponent = left?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );

    if (isNextRowEmpty) {
      moves.push(squareLeft);
    } else {
      isNextRowOpponent && moves.push(squareLeft);
      break;
    }
  }
}

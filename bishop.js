function validBishopMoves() {
  console.log("Hello from bishop.js");
  // Diagonal right up move
  for (let i = 1; i < 8; i++) {
    if (
      parseInt(dragRow) + i <= 8 &&
      parseInt(dragCol.charCodeAt(0)) + i <= 104
    ) {
      let newCol = String.fromCharCode(parseInt(dragCol.charCodeAt(0)) + i);
      let newRow = parseInt(dragRow) + i; // could also be (parseInt(dragRow) + i).toString();

      squareRightUp = newCol + newRow; // String + Number -> String

      const rightUp = document.querySelector(
        `div[square-id = "${squareRightUp}"]`
      );

      const isRightUpEmpty = isEmpty(rightUp);

      const isRightUpOpponent = rightUp?.firstChild?.classList.contains(
        playerTurn === "white" ? "black" : "white"
      );

      if (isRightUpEmpty) {
        moves.push(squareRightUp);
      } else {
        isRightUpOpponent && moves.push(squareRightUp);
        break;
      }
    }
  }

  // Diagonal left up move
  for (let i = 1; i < 8; i++) {
    if (
      parseInt(dragRow) + i <= 8 &&
      parseInt(dragCol.charCodeAt(0)) - i >= 97
    ) {
      let newCol = String.fromCharCode(parseInt(dragCol.charCodeAt(0)) - i);
      let newRow = parseInt(dragRow) + i;

      squareLeftUp = newCol + newRow;

      const leftUp = document.querySelector(
        `div[square-id = "${squareLeftUp}"]`
      );

      const isLeftUpEmpty = isEmpty(leftUp);

      const isLeftUpOpponent = leftUp?.firstChild?.classList.contains(
        playerTurn === "white" ? "black" : "white"
      );

      if (isLeftUpEmpty) {
        moves.push(squareLeftUp);
      } else {
        isLeftUpOpponent && moves.push(squareLeftUp);
        break;
      }
    }
  }

  // Diagonal right down move
  for (let i = 1; i < 8; i++) {
    if (
      parseInt(dragRow) - i >= 1 &&
      parseInt(dragCol.charCodeAt(0)) + i <= 104
    ) {
      let newCol = String.fromCharCode(parseInt(dragCol.charCodeAt(0)) + i);
      let newRow = parseInt(dragRow) - i;

      squareRightDown = newCol + newRow;

      const rightDown = document.querySelector(
        `div[square-id = "${squareRightDown}"]`
      );

      const isRightDownEmpty = isEmpty(rightDown);

      const isRightDownOpponent = rightDown?.firstChild?.classList.contains(
        playerTurn === "white" ? "black" : "white"
      );

      if (isRightDownEmpty) {
        moves.push(squareRightDown);
      } else {
        isRightDownOpponent && moves.push(squareRightDown);
        break;
      }
    }
  }
  // Diagonal left down move
  for (let i = 1; i < 8; i++) {
    if (
      parseInt(dragRow) - i >= 1 &&
      parseInt(dragCol.charCodeAt(0)) - i >= 97
    ) {
      let newCol = String.fromCharCode(parseInt(dragCol.charCodeAt(0)) - i);
      let newRow = parseInt(dragRow) - i;

      squareLeftDown = newCol + newRow;

      const leftDown = document.querySelector(
        `div[square-id = "${squareLeftDown}"]`
      );

      const isLeftDownEmpty = isEmpty(leftDown);

      const isLeftDownOpponent = leftDown?.firstChild?.classList.contains(
        playerTurn === "white" ? "black" : "white"
      );

      if (isLeftDownEmpty) {
        moves.push(squareLeftDown);
      } else {
        isLeftDownOpponent && moves.push(squareLeftDown);
        break;
      }
    }
  }

  console.log(moves);
}

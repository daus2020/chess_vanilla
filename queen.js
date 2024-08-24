function validQueenMoves() {
  console.log("Valid queen moves");

  const opponentPlayer = playerTurn === "white" ? "black" : "white";

  const offsets = [
    [0, 1], // up 1 row
    [1, 1], // diagonal 1 right column & 1 up row
    [1, 0], // right 1 column
    [1, -1], // diagonal 1 right column & down 1 row
    [0, -1], // down 1 row
    [-1, -1], // diagonal 1 left column & down 1 row
    [-1, 0], // left 1 column
    [-1, 1], // right 1 left column & up 1 row
  ];

  offsets.forEach(function (offset) {
    let colOffset = String.fromCharCode(dragCol.charCodeAt(0) + offset[0]);
    let rowOffset = parseInt(dragRow) + offset[1];
    if (
      colOffset >= "a" &&
      colOffset <= "h" &&
      rowOffset >= 1 &&
      rowOffset <= 8
    ) {
      console.log(`Move to ${colOffset}${rowOffset}`);
      const offsetId = colOffset + rowOffset;
      const squareOffset = document.querySelector(
        `div[square-id = "${offsetId}"]`
      );

      const isOffsetEmpty = isEmpty(squareOffset); // remember the function is asking if squareOffset === null, if so then is empty therefore true. Otherwise it is false.

      const hasOffsetOpponent = squareOffset?.firstChild?.classList.contains(
        playerTurn === "white" ? "black" : "white"
      );

      if (isOffsetEmpty) {
        moves.push(offsetId);
      } else {
        hasOffsetOpponent && moves.push(offsetId);
      }
    }
  });

  // // UP
  // for (let i = parseInt(dragRow) + 1; i <= 8; i++) {
  //   const squareUp = dragCol + i;

  //   const up = document.querySelector(`div[square-id = "${squareUp}"]`);

  //   const isUpEmpty = isEmpty(up); // remember the function is asking if up === null, if so then is empty therefore true. Otherwise it is false.

  //   const isUpOpponent = up?.firstChild?.classList.contains(opponentPlayer);

  //   if (isUpEmpty) {
  //     moves.push(squareUp);
  //   } else {
  //     isUpOpponent && moves.push(squareUp);
  //     break;
  //   }
  // }

  // // DOWN
  // for (let i = parseInt(dragRow) - 1; i >= 1; i--) {
  //   const squareDown = dragCol + i;

  //   const down = document.querySelector(`div[square-id = "${squareDown}"]`);

  //   const isDownEmpty = isEmpty(down);

  //   const isDownOpponent = down?.firstChild?.classList.contains(opponentPlayer);

  //   if (isDownEmpty) {
  //     moves.push(squareDown);
  //   } else {
  //     isDownOpponent && moves.push(squareDown);
  //     break;
  //   }
  // }

  // // RIGHT
  // for (let i = parseInt(dragCol.charCodeAt(0)) + 1; i <= 104; i++) {
  //   const squareRight = String.fromCharCode(i) + dragRow;

  //   const right = document.querySelector(`div[square-id = "${squareRight}"]`);

  //   const isRightEmpty = isEmpty(right);

  //   const isRightOpponent =
  //     right?.firstChild?.classList.contains(opponentPlayer);

  //   if (isRightEmpty) {
  //     moves.push(squareRight);
  //   } else {
  //     isRightOpponent && moves.push(squareRight);
  //     break;
  //   }
  // }

  // // LEFT
  // for (let i = parseInt(dragCol.charCodeAt(0)) - 1; i >= 97; i--) {
  //   const squareLeft = String.fromCharCode(i) + dragRow;

  //   const left = document.querySelector(`div[square-id = "${squareLeft}"]`);

  //   const isLeftEmpty = isEmpty(left);

  //   const isLeftOpponent = left?.firstChild?.classList.contains(opponentPlayer);

  //   if (isLeftEmpty) {
  //     moves.push(squareLeft);
  //   } else {
  //     isLeftOpponent && moves.push(squareLeft);
  //     break;
  //   }
  // }

  // // Diagonal right up move
  // for (let i = parseInt(dragCol.charCodeAt(0) + 1); i <= 104; i++) {
  //   // const squareRightUp = String.fromCharCode(i) + drag
  //   if (parseInt(dragRow) + i <= 8) {
  //     let newCol = String.fromCharCode(parseInt(i));
  //     let newRow = parseInt(dragRow) + i;

  //     const diagonalRightUp = document.querySelector(
  //       `div[square-id = "${newCol}${newRow}"]`
  //     );

  //     const isDiagonalRightUpEmpty = isEmpty(diagonalRightUp);

  //     const isDiagonalRightUpOpponent =
  //       diagonalRightUp?.firstChild?.classList.contains(opponentPlayer);

  //     if (isDiagonalRightUpEmpty) {
  //       moves.push(`${newCol}${newRow}`);
  //     } else {
  //       isDiagonalRightUpOpponent && moves.push(`${newCol}${newRow}`);
  //       break;
  //     }
  //   }
  // }

  // // Diagonal right down move
  // for (let i = parseInt(dragCol.charCodeAt(0) + 1); i <= 104; i++) {
  //   // const squareRightDown = String.fromCharCode(i) + drag
  //   if (parseInt(dragRow) - i >= 1) {
  //     let newCol = String.fromCharCode(parseInt(i));
  //     let newRow = parseInt(dragRow) - i;

  //     const diagonalRightDown = document.querySelector(
  //       `div[square-id = "${newCol}${newRow}"]`
  //     );

  //     const isDiagonalRightDownEmpty = isEmpty(diagonalRightDown);

  //     const isDiagonalRightDownOpponent =
  //       diagonalRightDown?.firstChild?.classList.contains(opponentPlayer);

  //     if (isDiagonalRightDownEmpty) {
  //       moves.push(`${newCol}${newRow}`);
  //     } else {
  //       isDiagonalRightDownOpponent && moves.push(`${newCol}${newRow}`);
  //       break;
  //     }
  //   }
  // }

  // // Diagonal left up move
  // for (let i = parseInt(dragCol.charCodeAt(0)) - 1; i >= 97; i--) {
  //   // const squareLeftUp = String.fromCharCode(i) + drag
  //   if (parseInt(dragRow) + i <= 8) {
  //     let newCol = String.fromCharCode(parseInt(i));
  //     let newRow = parseInt(dragRow) + i;

  //     const diagonalLeftUp = document.querySelector(
  //       `div[square-id = "${newCol}${newRow}"]`
  //     );

  //     const isDiagonalLeftUpEmpty = isEmpty(diagonalLeftUp);

  //     const isDiagonalLeftUpOpponent =
  //       diagonalLeftUp?.firstChild?.classList.contains(opponentPlayer);

  //     if (isDiagonalLeftUpEmpty) {
  //       moves.push(`${newCol}${newRow}`);
  //     } else {
  //       isDiagonalLeftUpOpponent && moves.push(`${newCol}${newRow}`);
  //       break;
  //     }
  //   }
  // }

  // // Diagonal left down move
  // for (let i = parseInt(dragCol.charCodeAt(0)) - 1; i >= 97; i--) {
  //   // const squareLeftDown = String.fromCharCode(i) + drag
  //   if (parseInt(dragRow) - i >= 1) {
  //     let newCol = String.fromCharCode(parseInt(i));
  //     let newRow = parseInt(dragRow) - i;

  //     const diagonalLeftDown = document.querySelector(
  //       `div[square-id = "${newCol}${newRow}"]`
  //     );

  //     const isDiagonalLeftDownEmpty = isEmpty(diagonalLeftDown);

  //     const isDiagonalLeftDownOpponent =
  //       diagonalLeftDown?.firstChild?.classList.contains(opponentPlayer);

  //     if (isDiagonalLeftDownEmpty) {
  //       moves.push(`${newCol}${newRow}`);
  //     } else {
  //       isDiagonalLeftDownOpponent && moves.push(`${newCol}${newRow}`);
  //       break;
  //     }
  //   }
  // }
}

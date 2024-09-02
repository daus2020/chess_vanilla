function validKingMoves() {
  console.log("Checking king moves in board");

  const opponentPiece = playerTurn === "white" ? "black" : "white";

  const offsets = [
    [0, 1], // up 1 row
    [1, 1], // diagonal 1 right column & 1 up row
    [1, 0], // right 1 column
    [1, -1], // diagonal 1 right column & down 1 row
    [0, -1], // down 1 row
    [-1, -1], // diagonal 1 left column & down 1 row
    [-1, 0], // left 1 column
    [-1, 1], // diagonal right 1 left column & up 1 row
  ];

  offsets.forEach(function ([colOffset, rowOffset]) {
    let currentCol = dragCol.charCodeAt(0) + colOffset;
    // let currentCol = String.fromCharCode(dragCol.charCodeAt(0) + colOffset);
    let currentRow = parseInt(dragRow) + rowOffset;
    // let currentRow = parseInt(dragRow) + rowOffset;

    let offsetId = String.fromCharCode(currentCol) + currentRow;

    if (coords.includes(offsetId)) {
      const squareOffset = getDivOffset(offsetId);
      console.log(squareOffset);

      const isOffsetEmpty = isEmpty(squareOffset); // remember the function is asking if squareOffset === null, if so then is empty therefore true. Otherwise it is false.

      const hasOffsetOpponent =
        squareOffset?.firstChild?.classList.contains(opponentPiece);

      if (isOffsetEmpty) {
        moves.push(offsetId);
      } else {
        hasOffsetOpponent && moves.push(offsetId);
      }

      const castleKing = draggedDiv.classList?.contains("cast");
      console.log(`castleKing: ${castleKing}`);

      // castle right
      if (castleKing && colOffset === 1 && rowOffset === 0 && isOffsetEmpty) {
        // currentCol += colOffset;
        // offsetId = String.fromCharCode(currentCol) + currentRow;
        // const twoColOffset = getDivOffset(offsetId);
        // const isTwoColEmpty = isEmpty(twoColOffset);
        // currentCol += colOffset;
        // offsetId = String.fromCharCode(currentCol) + currentRow;
        const gColOffset = getDivOffset(String.fromCharCode(103) + currentRow);
        const isGcolEmpty = isEmpty(gColOffset);
        const hColOffset = getDivOffset(String.fromCharCode(104) + currentRow);
        const hColOffsetCast =
          hColOffset.firstChild?.classList.contains("cast");
        isGcolEmpty &&
          hColOffsetCast &&
          moves.push(String.fromCharCode(103) + currentRow);
      }

      // while (true) {
      //   currentCol += colOffset;

      //   const offsetId = String.fromCharCode(currentCol) + currentRow;

      //   if (!coords.includes(offsetId)) {
      //     break;
      //   }

      //   const squareOffset = getDivOffset(offsetId); // === document.querySelector(
      //   //   `div[square-id = "${offsetId}"]`

      //   const isOffsetEmpty = isEmpty(squareOffset); // if square.firstChild === null then it is empty square (true)

      //   // has rook with castle class
      //   // const hasOpponent =
      //   //   squareOffset.firstChild?.classList.contains(opponentPiece);

      //   if (isOffsetEmpty) {
      //     moves.push(offsetId);
      //   } else {
      //     hasOpponent && moves.push(offsetId);
      //     break;
      //   }
      // }

      // Check if castling is possible
      // RIGHT
      // if (draggedDiv.classList.contains("cast") &&
      // if (draggedPiece === "king" &&
      //   moves.includes("e1") &&
      //   moves.includes("h1") &&
      //   isEmpty(document.querySelector("div[square-id = 'f1']")) &&
      //   isEmpty(document.querySelector("div[square-id = 'g1']"))
      // ) {
      //   moves.push("e1g1");
      // } else if (
      //   playerTurn === "black" &&
      //   draggedPiece === "king" &&
      //   moves.includes("e8") &&
      //   moves.includes("h8") &&
      //   isEmpty(document.querySelector("div[square-id = 'f8']")) &&
      //   isEmpty(document.querySelector("div[square-id = 'g8']"))
      // ) {
      //   moves.push("e8g8");
      // }
    }
  });
}

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

  let colRookRight;
  let colRookLeft;
  let offsetId;

  offsets.forEach(function (offset) {
    let colOffset = String.fromCharCode(dragCol.charCodeAt(0) + offset[0]);
    let rowOffset = parseInt(dragRow) + offset[1];

    const offsetId = colOffset + rowOffset;
    // console.log(`offsetId: ${offsetId}`);

    // function getDivOffset(colRow) {
    //   return document.querySelector(`div[square-id="${colRow}"]`);
    // }

    if (coords.includes(offsetId)) {
      // const offsetId = colOffset + rowOffset;
      // console.log(`offsetId line 31: ${offsetId}`);
      // console.log(`Move to ${colOffset}${rowOffset}`);
      // console.log(`offsetId line 31: ${offsetId}`);

      // Get entire div from offsetId, to get the info needed (classes, isEmpty etc...)
      const squareOffset = getDivOffset(offsetId);
      console.log(squareOffset);
      // const squareOffset = document.querySelector(
      //   `div[square-id = "${offsetId}"]`
      // );

      const isOffsetEmpty = isEmpty(squareOffset); // remember the function is asking if squareOffset === null, if so then is empty therefore true. Otherwise it is false.

      const hasOffsetOpponent =
        squareOffset?.firstChild?.classList.contains(opponentPiece);

      if (isOffsetEmpty) {
        moves.push(offsetId);
      } else {
        hasOffsetOpponent && moves.push(offsetId);
      }

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

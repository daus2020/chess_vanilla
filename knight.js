function validKnightMoves() {
  // array representing all 8 possible knight moves, first element represent column moves and second the row moves
  const offsets = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ];

  const opponentPiece = playerTurn === "white" ? "black" : "white";

  const calculateMoves = ([colOffset, rowOffset]) => {
    // const calculateMoves = ([rowOffset, colOffset]) => {
    let currentCol = dragCol.charCodeAt(0);
    let currentRow = parseInt(dragRow);

    currentCol += colOffset;
    currentRow += rowOffset;

    const offsetId = String.fromCharCode(currentCol) + currentRow;
    console.log(offsetId);

    if (coords.includes(offsetId)) {
      const squareOffset = getDivOffset(offsetId);
      // const square = document.querySelector(`div[square-id = "${squareId}"]`);

      const isSquareEmpty = isEmpty(squareOffset);
      const hasOpponent =
        squareOffset?.firstChild?.classList.contains(opponentPiece);
      console.log(hasOpponent);

      if (isSquareEmpty) {
        moves.push(offsetId);
      } else {
        hasOpponent && moves.push(offsetId);
      }
    }
  };

  // offsets.forEach(function (offset) {
  //   let colOffset = String.fromCharCode(dragCol.charCodeAt(0) + offset[0]);
  //   let rowOffset = parseInt(dragRow) + offset[1];
  //   if (
  //     colOffset >= "a" &&
  //     colOffset <= "h" &&
  //     rowOffset >= 1 &&
  //     rowOffset <= 8
  //   ) {
  //     console.log(`Move to ${colOffset}${rowOffset}`);
  //     const offsetId = colOffset + rowOffset;
  //     const squareOffset = document.querySelector(
  //       `div[square-id = "${offsetId}"]`
  //     );

  //     const isOffsetEmpty = isEmpty(squareOffset); // remember the function is asking if squareOffset === null, if so then is empty therefore true. Otherwise it is false.

  //     const isNextRowOpponent = squareOffset?.firstChild?.classList.contains(
  //       playerTurn === "white" ? "black" : "white"
  //     );

  //     if (isOffsetEmpty) {
  //       moves.push(offsetId);
  //     } else {
  //       isNextRowOpponent && moves.push(offsetId);
  //     }
  //   }
  // });

  offsets.forEach((direction) => {
    calculateMoves(direction);
  });
}

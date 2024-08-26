function validQueenMoves() {
  console.log("Valid queen moves");

  const opponentPiece = playerTurn === "white" ? "black" : "white";

  // [column, row]
  const offsets = [
    [0, 1], // up 1 row
    [1, 1], // diagonal 1 right column & up 1 row
    [1, 0], // right 1 column
    [1, -1], // diagonal 1 right column & down 1 row
    [0, -1], // down 1 row
    [-1, -1], // diagonal 1 left column & down 1 row
    [-1, 0], // left 1 column
    [-1, 1], // diagonal right 1 left column & up 1 row
  ];

  const calculateMoves = ([rowOffset, colOffset]) => {
    let currentRow = parseInt(dragRow);
    let currentCol = dragCol.charCodeAt(0);

    while (true) {
      currentRow += rowOffset;
      currentCol += colOffset;

      // currentId = String.fromCharCode(currentCol) + currentRow;
      const offsetId = String.fromCharCode(currentCol) + currentRow;

      if (!coords.includes(offsetId)) {
        break;
      }

      const squareOffset = document.querySelector(
        `div[square-id = "${offsetId}"]`
      );

      const isSquareEmpty = isEmpty(squareOffset);
      const hasOpponent =
        squareOffset.firstChild?.classList.contains(opponentPiece);

      if (isSquareEmpty) {
        moves.push(offsetId);
      } else {
        if (hasOpponent) moves.push(offsetId);
        break;
      }
    }
  };

  offsets.forEach((direction) => {
    calculateMoves(direction);
  });
}

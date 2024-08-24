function validQueenMoves() {
  console.log("Valid queen moves");

  const opponentPiece = playerTurn === "white" ? "black" : "white";

  // [column, row]
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

  const isInBoard = (row, col) => {
    return (
      row >= 1 &&
      row <= 8 &&
      col >= "a".charCodeAt(0) &&
      col <= "h".charCodeAt(0)
    );
  };

  const calculateMoves = ([rowOffset, colOffset]) => {
    let currentRow = parseInt(dragRow);
    let currentCol = dragCol.charCodeAt(0);

    while (true) {
      currentRow += rowOffset;
      currentCol += colOffset;

      if (!isInBoard(currentRow, currentCol)) break;

      const squareId = String.fromCharCode(currentCol) + currentRow;
      const square = document.querySelector(`div[square-id = "${squareId}"]`);

      const isSquareEmpty = isEmpty(square);
      const hasOpponent = square?.firstChild?.classList.contains(opponentPiece);

      if (isSquareEmpty) {
        moves.push(squareId);
      } else {
        if (hasOpponent) moves.push(squareId);
        break;
      }
    }
  };

  offsets.forEach((direction) => {
    calculateMoves(direction);
  });
}

function validRookMoves() {
  console.log("Valid rook moves");
  const opponentPiece = playerTurn === "white" ? "black" : "white";

  // [column, row]
  const offsets = [
    [0, 1], // up 1 row
    [1, 0], // right 1 column
    [0, -1], // down 1 row
    [-1, 0], // left 1 column
  ];

  const calculateMoves = ([rowOffset, colOffset]) => {
    let currentRow = parseInt(dragRow);
    let currentCol = dragCol.charCodeAt(0);

    while (true) {
      currentRow += rowOffset;
      currentCol += colOffset;

      const offsetId = String.fromCharCode(currentCol) + currentRow;
      console.log(offsetId);

      if (!coords.includes(offsetId)) {
        break;
      }

      const squareOffset = getDivOffset(offsetId);
      // === document.querySelector(`div[square-id = "${offsetId}"]`);

      const isSquareEmpty = isEmpty(squareOffset);
      const hasOpponent =
        squareOffset?.firstChild?.classList.contains(opponentPiece);

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

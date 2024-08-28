function validBishopMoves() {
  // [column, row]
  const offsets = [
    [1, 1], // diagonal 1 right column & 1 up row
    [1, -1], // diagonal 1 right column & down 1 row
    [-1, -1], // diagonal 1 left column & down 1 row
    [-1, 1], // diagonal right 1 left column & up 1 row
  ];

  const opponentPiece = playerTurn === "white" ? "black" : "white";

  const calculateMoves = ([rowOffset, colOffset]) => {
    let currentCol = dragCol.charCodeAt(0);
    let currentRow = parseInt(dragRow);

    while (true) {
      currentCol += colOffset;
      currentRow += rowOffset;

      const offsetId = String.fromCharCode(currentCol) + currentRow;
      console.log(offsetId);

      if (!coords.includes(offsetId)) {
        break;
      }

      const squareOffset = getDivOffset(offsetId);
      // const square = document.querySelector(`div[square-id = "${squareId}"]`);

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

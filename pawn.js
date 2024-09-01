function validPawnMoves() {
  // remember that pawn always have to move forward and vertically, never go backwards nor diagonal, except en passant case (besides pawn opposite with "enpass" class taken)
  const directionSign = playerTurn === "white" ? 1 : -1; // if it white turn -> is positive, otherwise is negative
  const opponentPlayer = playerTurn === "white" ? "black" : "white";

  // [column, row]
  const offsets = [
    [0, 1], //  1 row forward
    [1, 1], // diagonal right column & 1 row forward. obs.: white is in bottom, king is on the right of queen
    [-1, 1], // diagonal left column & 1 row forward
  ];

  const calculateMoves = ([colOffset, rowOffset]) => {
    let currentCol = dragCol.charCodeAt(0);
    let currentRow = parseInt(dragRow);

    currentCol += colOffset * directionSign;
    currentRow += rowOffset * directionSign;

    let offsetId = String.fromCharCode(currentCol) + currentRow;
    console.log(offsetId);

    if (coords.includes(offsetId)) {
      let squareOffset = getDivOffset(offsetId);

      let isSquareEmpty = isEmpty(squareOffset);
      console.log(`Is `, offsetId, ` empty? `, isSquareEmpty); // undefined -> false

      let hasOpponent =
        squareOffset.firstChild?.classList.contains(opponentPlayer); // if undefined, it means it is empty
      console.log(`Has opponent? If is undefined -> falsy `, hasOpponent); // if undefined, it means it is empty, i.e. falsy
      // const isStatic = draggedDiv?.firstChild?.classList.contains(start);

      // One step vertical forward
      if (isSquareEmpty && colOffset === 0) {
        moves.push(offsetId);
      }

      // Diagonal move with an opponent
      if (hasOpponent && colOffset != 0) {
        moves.push(offsetId);
      }

      // En passant (diagonal move without an opponent but with "enpass" pawn besides)
      if (isSquareEmpty && colOffset != 0) {
        let colOffsetId = String.fromCharCode(currentCol) + dragRow;

        let colOffset = getDivOffset(colOffsetId);

        let colOffsetEnpass =
          colOffset.firstChild?.classList.contains("enpass");
        // console.log(`Is rightLeft Enpass? `, colOffsetEnpass);
        colOffsetEnpass && moves.push(offsetId); // undefined -> false
      }

      // Check if two steps forward possible pawn move
      let isStatic = draggedDiv.classList.contains("static");
      console.log(`Has pawn unmoved `, isStatic);

      if (moves.includes(offsetId) && colOffset === 0 && isStatic) {
        currentRow += rowOffset * directionSign;
        offsetId = String.fromCharCode(currentCol) + currentRow; // here offsetId is new
        squareOffset = getDivOffset(offsetId);

        isSquareEmpty = isEmpty(squareOffset);
        isSquareEmpty && moves.push(offsetId);
      }
    }
    console.log(moves);
  };

  offsets.forEach((direction) => {
    calculateMoves(direction);
  });

  console.log(moves);
}

function validPawnMoves() {
  // remember that pawn always have to move forward and vertically, never go backwards nor diagonal, except en passant case (besides pawn opposite with "enpass" class taken)

  const opponentPiece = playerTurn === "white" ? 1 : -1;
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
    let isPreviousSquareEmpty = false;

    currentCol += colOffset * opponentPiece;
    currentRow += rowOffset * opponentPiece;

    let offsetId = String.fromCharCode(currentCol) + currentRow;
    console.log(offsetId);

    if (coords.includes(offsetId)) {
      let squareOffset = getDivOffset(offsetId);

      let isSquareEmpty = isEmpty(squareOffset);
      console.log(`Is `, offsetId, ` empty? `, isSquareEmpty); // undefined -> false

      let hasOpponent =
        squareOffset.firstChild?.classList.contains(opponentPlayer); // if undefined, it means it is empty
      console.log(`Has opponent? If is undefined -> falsy `, hasOpponent); // if undefined, it means it is empty, i.e. falsy
      let hasPawnUnmoved = draggedDiv.classList.contains("noMoved");
      console.log(`Has pawn unmoved `, hasPawnUnmoved);
      // const hasPawnUnmoved = draggedDiv?.firstChild?.classList.contains(start);
      // One step forward
      if (
        isSquareEmpty &&
        colOffset === 0 &&
        rowOffset === Math.abs(1)
        // &&
        // !hasOpponent
      ) {
        moves.push(offsetId);
        // moves.push(squareId);
        isPreviousSquareEmpty = true;
      }
      console.log(moves);

      // Diagonal move forward with an opponent
      if (hasOpponent && colOffset != 0) {
        moves.push(offsetId);
        console.log(moves);
      }

      // En passant
      if (isSquareEmpty && colOffset != 0) {
        let colOffsetId = String.fromCharCode(currentCol) + dragRow;

        let colOffset = getDivOffset(colOffsetId);

        let colOffsetEnpass =
          colOffset.firstChild?.classList.contains("enpass");
        console.log(`Is rightLeft Enpass? `, colOffsetEnpass);
        colOffsetEnpass && moves.push(offsetId); // undefined -> false
      }

      currentRow += rowOffset * opponentPiece;
      console.log(currentRow);
      offsetId = String.fromCharCode(currentCol) + currentRow;
      console.log(`offsetId 2`, offsetId);
      offsetId = String.fromCharCode(currentCol) + currentRow;
      squareOffset = getDivOffset(offsetId);
      // squareOffset = document.querySelector(`div[square-id = "${offsetId}"]`);
      console.log(squareOffset); // <div class="square light" square-id="h3">
      console.log(offsetId);

      isSquareEmpty = isEmpty(squareOffset);
      console.log(`Is `, offsetId, ` empty? `, isSquareEmpty); // true

      hasOpponent =
        squareOffset?.firstChild?.classList.contains(opponentPlayer); // if undefined, it means it is empty
      console.log(hasOpponent);

      // Two steps forward
      if (
        colOffset === 0 &&
        isSquareEmpty &&
        isPreviousSquareEmpty &&
        hasPawnUnmoved
      ) {
        moves.push(offsetId);
        console.log(`line 162 moves: `, moves);
      }
    }
    console.log(moves);
  };

  offsets.forEach((direction) => {
    calculateMoves(direction);
  });

  console.log(moves);
}

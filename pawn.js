function validPawnMoves() {
  // remember that pawn always have to move forward and vertically, never go backwards nor diagonal, except en passant case (besides pawn opposite with "enpass" class taken)

  const opponentPiece = playerTurn === "white" ? 1 : -1;
  const opponentPlayer = playerTurn === "white" ? "black" : "white";

  // [column, row]
  const offsets = [
    [0, 1], // up 1 row
    [1, 1], // diagonal 1 right column & up 1 row
    [-1, 1], // diagonal 1 left column & up 1 row
  ];

  const calculateMoves = ([colOffset, rowOffset]) => {
    let currentCol = dragCol.charCodeAt(0);
    let currentRow = parseInt(dragRow);
    let isPreviousSquareEmpty = false;

    currentRow += rowOffset * opponentPiece;
    currentCol += colOffset * opponentPiece;

    let offsetId = String.fromCharCode(currentCol) + currentRow;
    console.log(offsetId);

    if (coords.includes(offsetId)) {
      console.log(draggedDiv);
      // let isOneSquareEmpty = false; // maybe not necessary put false just let ...
      let squareId = String.fromCharCode(currentCol) + currentRow;
      let square = document.querySelector(`div[square-id = "${squareId}"]`);
      console.log(square); // <div class="square light" square-id="h3">
      console.log(squareId);
      let isSquareEmpty = isEmpty(square);
      console.log(`Is `, squareId, ` empty? `, isSquareEmpty); // undefined -> false

      let hasOpponent = square.firstChild?.classList.contains(opponentPlayer); // if undefined, it means it is empty
      console.log(`Has opponent? If is undefined -> falsy `, hasOpponent); // if undefined, it means it is empty, i.e. falsy
      let hasPawnUnmoved = draggedDiv.classList.contains("noMoved");
      console.log(`Has pawn unmoved `, hasPawnUnmoved);
      // const hasPawnUnmoved = draggedDiv?.firstChild?.classList.contains(start);
      // One step forward
      if (
        isSquareEmpty &&
        colOffset === 0 &&
        rowOffset === Math.abs(1) &&
        !hasOpponent
      ) {
        moves.push(squareId);
        isPreviousSquareEmpty = true;
      }
      console.log(moves);
      console.log(
        `column offset, if it 0 -> same column, no diagonal move`,
        colOffset
      );
      // const squareId = String.fromCharCode(currentCol) + currentRow;
      // const square = document.querySelector(`div[square-id = "${squareId}"]`);
      // console.log(square); // <div class="square light" square-id="h3">
      // console.log(squareId);
      // const isSquareEmpty = isEmpty(square);
      // console.log(`Is `, squareId, ` empty? `, isSquareEmpty); // true

      // const hasOpponent = square?.firstChild?.classList.contains(opponentPiece); // if undefined, it means it is empty
      // console.log(`If is undefined -> It is empty `, hasOpponent); // if undefined, it means it is empty, i.e. falsy
      // const hasPawnUnmoved = draggedDiv.classList.contains("noMoved");
      // console.log(`Has pawn unmoved `, hasPawnUnmoved);

      console.log(`Is empty? `, isSquareEmpty);
      console.log(`row offset * opponentPiece: `, rowOffset * opponentPiece);
      console.log(`col offset * opponentPiece: `, colOffset * opponentPiece);
      console.log(`Is previous empty? `, isPreviousSquareEmpty);
      console.log(`pawn has unmoved? `, hasPawnUnmoved);
      console.log(`Is `, square, ` has opponent? `, hasOpponent); // undefined -> falsy (empty square)

      // Diagonal move forward with an opponent
      if (hasOpponent && colOffset != 0) {
        moves.push(squareId);
        console.log(moves);
      }

      // En passant right
      // col < "h".charCodeAt(0)
      if (
        String.fromCharCode(currentCol) <= "h" &&
        colOffset * opponentPiece === 1
      ) {
        // if (currentCol <= "h" && colOffset * opponentPiece === 1) {
        // if (colOffset <= "h" && colOffset * opponentPiece === 1) {
        // if (colOffset < "h" && colOffset === 1) {
        const squareRightId =
          String.fromCharCode(dragCol.charCodeAt(0) + 1) + dragRow;
        const squareRight = document.querySelector(
          `div[square-id = "${squareRightId}"]`
        );
        const enpassRight =
          squareRight.firstChild?.classList.contains("enpass"); // If is true then it could only be opposite pawn

        // Diagonal right forward empty but with pawn besides right with enpass class
        if (isSquareEmpty && enpassRight) {
          moves.push(squareId);
        }
      }

      // En passant left
      // col < "h".charCodeAt(0)
      console.log(`current col: `, currentCol);
      console.log(`row offset: `, rowOffset);
      console.log(`row offset ok: `, rowOffset * opponentPiece);
      console.log(`col offset: `, colOffset);
      console.log(`col offset: ok `, colOffset * opponentPiece);
      console.log(
        `current col > 'a'.charCodeAt(0) (97): `,
        currentCol > "a".charCodeAt(0)
      );
      console.log(`col offset === -1: `, colOffset === -1);
      console.log(
        `col rowOffset * opponentPiece === -1: `,
        rowOffset * opponentPiece === -1
      );
      if (
        String.fromCharCode(currentCol) >= "a" &&
        colOffset * opponentPiece === -1
      ) {
        // if (currentCol >= "a".charCodeAt(0) && colOffset * opponentPiece === -1) {
        const squareLeftId =
          String.fromCharCode(dragCol.charCodeAt(0) - 1) + dragRow;
        console.log(squareLeftId);
        const squareLeft = document.querySelector(
          `div[square-id = "${squareLeftId}"]`
        );
        console.log(squareLeft);
        const enpassLeft = squareLeft.firstChild?.classList.contains("enpass"); // If is true then it could only be opposite pawn
        console.log(enpassLeft);
        // Diagonal left forward empty but with pawn besides left with enpass class
        // enpassLeft && moves.push(squareLeftId)
        if (isSquareEmpty && enpassLeft) {
          moves.push(squareId);
        }
      }
      currentRow += rowOffset * opponentPiece;
      console.log(currentRow);
      offsetId = String.fromCharCode(currentCol) + currentRow;
      console.log(`offsetId 2`, offsetId);
      squareId = String.fromCharCode(currentCol) + currentRow;
      square = document.querySelector(`div[square-id = "${squareId}"]`);
      console.log(square); // <div class="square light" square-id="h3">
      console.log(squareId);
      isSquareEmpty = isEmpty(square);
      console.log(`Is `, squareId, ` empty? `, isSquareEmpty); // true

      hasOpponent = square?.firstChild?.classList.contains(opponentPlayer); // if undefined, it means it is empty
      console.log(hasOpponent);

      // Two steps forward
      if (
        colOffset === 0 &&
        isSquareEmpty &&
        isPreviousSquareEmpty &&
        hasPawnUnmoved
      ) {
        moves.push(squareId);
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

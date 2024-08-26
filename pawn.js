function validPawnMoves() {
  // remember that pawn always have to move forward and vertically, never go backwards nor diagonal, except en passant case and opposite taken

  const opponentPiece = playerTurn === "white" ? 1 : -1;
  const opponentPlayer = playerTurn === "white" ? "black" : "white";

  // [column, row]
  const offsets = [
    [0, 1], // up 1 row
    // [0, 2], // up 2 rows
    [1, 1], // diagonal 1 right column & up 1 row
    [-1, 1], // diagonal 1 left column & up 1 row
  ];

  // const isInBoard = (row, col) => {
  //   return (
  //     row >= 1 &&
  //     row <= 8 &&
  //     col >= "a".charCodeAt(0) &&
  //     col <= "h".charCodeAt(0)
  //   );
  // };

  const calculateMoves = ([colOffset, rowOffset]) => {
    let currentCol = dragCol.charCodeAt(0);
    let currentRow = parseInt(dragRow);
    let isPreviousSquareEmpty = false;

    currentRow += rowOffset * opponentPiece;
    currentCol += colOffset * opponentPiece;

    let offsetId = String.fromCharCode(currentCol) + currentRow;
    console.log(offsetId);
    // or maybe if coords.includes(currentCol*currentRow) then...
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

  // ********************************

  // console.log("pawn start at ", dragId); // i.e. draggId = h2  -> dragId[0]= h and dragRow= 2

  // const dragPlusOneRow = dragCol + (parseInt(dragRow) + rowForward); // or dragId[0] + (+(dragId[1]) + rowForward)

  //  Current pawn coord plus one row forward
  // const forwardOne = document.querySelector(
  //   `div[square-id = "${dragPlusOneRow}"]`
  // );

  // let isNextRowEmpty = isEmpty(forwardOne);

  // if (isNextRowEmpty) {
  //   moves.push(dragPlusOneRow);
  // }

  //  Check this only if pawn is in row 2 (white) or row 7 (black)
  //  Current pawn coord plus two rows
  // if (
  //   (playerTurn === "white" && dragRow === "2") ||
  //   (playerTurn === "black" && dragRow === "7")
  // ) {
  //   const dragPlusTwoRow = dragCol + (parseInt(dragRow) + 2 * rowForward); // dragId[0] + (+(dragId[1]) + 2 * rowForward)
  //   const forwardTwo = document.querySelector(
  //     `div[square-id = "${dragPlusTwoRow}"]`
  //   );

  //   if (forwardOne.firstChild === null && forwardTwo.firstChild === null) {
  //     console.log(dragPlusOneRow, " - ", dragPlusTwoRow, " are empty");
  //   }

  //   isNextRow2Empty = isEmpty(forwardTwo);

  //   if (isNextRowEmpty && isNextRow2Empty) {
  //     moves.push(dragPlusTwoRow);
  //   }
  // }

  //  Check if pawn can capture diagonally
  //  LEFT: Current pawn coord plus one row and one column to the left with opponent or without it (en passant potential capture)
  // if (dragCol !== "a") {
  //   const dragLeftId = String.fromCharCode(dragCol.charCodeAt(0) - 1);
  //   const dragPlusOneLeft = dragLeftId + (parseInt(dragRow) + rowForward);
  //   const leftDiagonal = document.querySelector(
  //     `div[square-id = "${dragPlusOneLeft}"]`
  //   );
  //   console.log(leftDiagonal);

  //   console.log("Left diagonal id: ", dragPlusOneLeft);

  //   const isLeftDiagonalOpponent = leftDiagonal?.firstChild?.classList.contains(
  //     playerTurn === "white" ? "black" : "white"
  //   ); // it could be true or undefined (falsy). When it's undefined it means it is empty

  //   console.log(isLeftDiagonalOpponent);

  //   if (leftDiagonal && isLeftDiagonalOpponent) {
  //     moves.push(dragPlusOneLeft);
  //   }

  //   //  En passant potential capture: left diagonal empty and opponent pawn on left with "enpass" class
  //   const leftSquareId = dragLeftId + dragRow;
  //   console.log(leftSquareId);

  //   const leftSquare = document.querySelector(
  //     `div[square-id = "${leftSquareId}"]`
  //   );

  //   const isLeftOpponent = leftSquare?.firstChild?.classList.contains(
  //     playerTurn === "white" ? "black" : "white"
  //   );
  //   const isLeftEnpass = leftSquare?.firstChild?.classList.contains("enpass");
  //   // left diagonal empty and opponent pawn on left with "enpass" class
  //   if (
  //     isLeftDiagonalOpponent === undefined &&
  //     isLeftOpponent &&
  //     isLeftEnpass
  //   ) {
  //     moves.push(dragPlusOneLeft);
  //   }
  // }
  // //  RIGHT: Current pawn coord plus one row and one column to the right with opponent
  // if (dragCol !== "h") {
  //   const dragRightId = String.fromCharCode(dragCol.charCodeAt(0) + 1);
  //   const dragPlusOneRight = dragRightId + (parseInt(dragRow) + rowForward);
  //   const rightDiagonal = document.querySelector(
  //     `div[square-id = "${dragPlusOneRight}"]`
  //   );

  //   console.log(rightDiagonal);

  //   console.log("Right diagonal id: ", dragPlusOneRight);

  //   const isRightDiagonalOpponent =
  //     rightDiagonal?.firstChild?.classList.contains(
  //       playerTurn === "white" ? "black" : "white"
  //     ); // it could be true or undefined (falsy). When it's undefined it means it is empty

  //   console.log(isRightDiagonalOpponent);

  //   if (rightDiagonal && isRightDiagonalOpponent) {
  //     moves.push(dragPlusOneRight);
  //   }

  //   //  En passant potential capture: right diagonal empty and opponent pawn on right with "enpass" class
  //   const rightSquareId = dragRightId + dragRow;
  //   console.log(rightSquareId);

  //   const rightSquare = document.querySelector(
  //     `div[square-id = "${rightSquareId}"]`
  //   );

  //   const isRightOpponent = rightSquare?.firstChild?.classList.contains(
  //     playerTurn === "white" ? "black" : "white"
  //   );
  //   const isRightEnpass = rightSquare?.firstChild?.classList.contains("enpass");
  //   // left diagonal empty and opponent pawn on left with "enpass" class
  //   if (
  //     isRightDiagonalOpponent === undefined &&
  //     isRightOpponent &&
  //     isRightEnpass
  //   ) {
  //     moves.push(dragPlusOneRight);
  //   }
  // }

  // Pend when white pawn get row "8" or black pawn get row "1"
  // and its subsequent promotion, exchanging for a queen, rook, bishop or knight.

  console.log(moves);
}

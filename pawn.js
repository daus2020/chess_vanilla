function validPawnMoves() {
  //   console.log("Square id: ", dragId);
  //   console.log("Current player: ", playerTurn);

  const rowForward = playerTurn === "white" ? 1 : -1;
  console.log("pawn start at ", dragId); // i.e. draggId = h2  -> dragId[0]= h and dragId[1]= 2

  const dragPlusOneRow = dragId[0] + (parseInt(dragId[1]) + rowForward); // or dragId[0] + (+(dragId[1]) + rowForward)

  //  Current pawn coord plus one row
  const forwardOne = document.querySelector(
    `div[square-id = "${dragPlusOneRow}"]`
  );
  //   if (forwardOne.firstChild === null) {
  //     console.log(dragPlusOneRow, "is empty");
  //   }

  function isEmpty(square) {
    return square.firstChild === null;
  }

  isNextRowEmpty = isEmpty(forwardOne);

  if (isNextRowEmpty) {
    movements.push(dragPlusOneRow);
  }

  //  Check this only if pawn is in row 2 (white) or row 7 (black)
  //  Current pawn coord plus two rows
  if (
    (playerTurn === "white" && dragId[1] === "2") ||
    (playerTurn === "black" && dragId[1] === "7")
  ) {
    const dragPlusTwoRow = dragId[0] + (parseInt(dragId[1]) + 2 * rowForward); // dragId[0] + (+(dragId[1]) + 2 * rowForward)
    const forwardTwo = document.querySelector(
      `div[square-id = "${dragPlusTwoRow}"]`
    );

    if (forwardOne.firstChild === null && forwardTwo.firstChild === null) {
      console.log(dragPlusOneRow, " - ", dragPlusTwoRow, " are empty");
    }

    isNextRow2Empty = isEmpty(forwardTwo);

    if (isNextRowEmpty && isNextRow2Empty) {
      movements.push(dragPlusTwoRow);
    }
  }

  //  Check if pawn can capture diagonally
  //  LEFT: Current pawn coord plus one row and one column to the left with opponent or without it (en passant potential capture)
  if (dragId[0] !== "a") {
    const dragLeftId = String.fromCharCode(dragId[0].charCodeAt(0) - 1);
    const dragPlusOneLeft = dragLeftId + (parseInt(dragId[1]) + rowForward);
    const leftDiagonal = document.querySelector(
      `div[square-id = "${dragPlusOneLeft}"]`
    );
    console.log(leftDiagonal);

    console.log("Left diagonal id: ", dragPlusOneLeft);

    const isLeftDiagonalOpponent = leftDiagonal?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    ); // it could be true or undefined (falsy). When it's undefined it means it is empty

    console.log(isLeftDiagonalOpponent);

    if (leftDiagonal && isLeftDiagonalOpponent) {
      movements.push(dragPlusOneLeft);
    }

    //  En passant potential capture: left diagonal empty and opponent pawn on left with "enpass" class
    const leftSquareId = dragLeftId + dragId[1];
    console.log(leftSquareId);

    const leftSquare = document.querySelector(
      `div[square-id = "${leftSquareId}"]`
    );

    const isLeftOpponent = leftSquare?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );
    const isLeftEnpass = leftSquare?.firstChild?.classList.contains("enpass");
    // left diagonal empty and opponent pawn on left with "enpass" class
    if (
      isLeftDiagonalOpponent === undefined &&
      isLeftOpponent &&
      isLeftEnpass
    ) {
      movements.push(dragPlusOneLeft);
    }
  }
  //  RIGHT: Current pawn coord plus one row and one column to the right with opponent
  if (dragId[0] !== "h") {
    const dragRightId = String.fromCharCode(dragId[0].charCodeAt(0) + 1);
    const dragPlusOneRight = dragRightId + (parseInt(dragId[1]) + rowForward);
    const rightDiagonal = document.querySelector(
      `div[square-id = "${dragPlusOneRight}"]`
    );

    console.log(rightDiagonal);

    console.log("Right diagonal id: ", dragPlusOneRight);

    const isRightDiagonalOpponent =
      rightDiagonal?.firstChild?.classList.contains(
        playerTurn === "white" ? "black" : "white"
      ); // it could be true or undefined (falsy). When it's undefined it means it is empty

    console.log(isRightDiagonalOpponent);

    if (rightDiagonal && isRightDiagonalOpponent) {
      movements.push(dragPlusOneRight);
    }

    //  En passant potential capture: right diagonal empty and opponent pawn on right with "enpass" class
    const rightSquareId = dragRightId + dragId[1];
    console.log(rightSquareId);

    const rightSquare = document.querySelector(
      `div[square-id = "${rightSquareId}"]`
    );

    const isRightOpponent = rightSquare?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );
    const isRightEnpass = rightSquare?.firstChild?.classList.contains("enpass");
    // left diagonal empty and opponent pawn on left with "enpass" class
    if (
      isRightDiagonalOpponent === undefined &&
      isRightOpponent &&
      isRightEnpass
    ) {
      movements.push(dragPlusOneRight);
    }
  }
  //   const dragPlusOneLeft = dragId[0] + (parseInt(dragId[1]) + rowForward);
  //   const leftDiagonal = document.querySelector(
  //     `div[square-id = "${dragPlusOneLeft}"]`
  //   );

  //  Current pawn coord plus one row and one column to the right
  //   if (dragId[0] !== "h") {
  //     const dragPlusOneRight = dragId[0] + (parseInt(dragId[1]) + rowForward);
  //     const rightDiagonal = document.querySelector(
  //       `div[square-id = "${dragPlusOneRight}"]`
  //     );
  //     console.log("Right diagonal: ", rightDiagonal);
  //   }

  //   console.log("Left diagonal: ", leftDiagonal);

  //   const isLeftDiagonalOccupied = leftDiagonal?.firstChild?.classList.contains(
  //     playerTurn === "white"? "black" : "white"
  //   );
  //   const isRightDiagonalOccupied = rightDiagonal

  //   const leftDiagonal = document.querySelector(
  //     `div[square-id = "${dragId[0] + (parseInt(dragId[1]) + rowForward)}"]`
  //   );
  //   const rightDiagonal = document.querySelector(
  //     `div[square-id = "${dragId[0] + (parseInt(dragId[1]) - rowForward)}"]`
  //   );

  //   //   console.log("Left diagonal: ", leftDiagonal);
  //   //   console.log("Right diagonal: ", rightDiagonal);

  //   const isLeftDiagonalOccupied = leftDiagonal?.firstChild?.classList.contains(
  //     playerTurn === "white"? "black" : "white"
  //   );
  //   const isRightDiagonalOccupied = rightDiagonal?.firstChild?.classList.contains(
  //     playerTurn === "white"? "black" : "white"
  //   );

  //   if (isLeftDiagonal && isLeftDiagonalOccupied) {
  //     movements.push(leftDiagonal.getAttribute("square-id"));

  console.log(movements);
  return movements;
}

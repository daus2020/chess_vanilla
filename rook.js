function validRookMoves() {
  console.log("Valid rook moves");

  //   Rook can move any number of squares vertically or horizontally.
  //   - 1) Any number of squares vertically (up or down)
  //   - 2) Any number of squares horizontally (left or right)

  const dragRow = dragId[1]; // 1 -> 8  string
  const dragCol = dragId[0]; // a -> h  string

  for (let i = 1; i < 8; i++) {
    // one row up
    // const rowUp = String.fromCharCode(col.charCodeAt(0));
    if (parseInt(dragRow) + i === 8) {
      return;
    }
    const squareUp = dragCol + (parseInt(dragRow) + i);
    // const squareUp = rowUp + (parseInt(row) + i);

    const upRow = document.querySelector(`div[square-id = "${squareUp}"]`);

    function isEmpty(square) {
      return square.firstChild === null;
    }

    isRowUpEmpty = isEmpty(upRow);

    if (isRowUpEmpty) {
      movements.push(squareUp);
    }

    coords.includes(squareUp) && movements.push(squareUp);

    // // one row down
    // const rowDown = String.fromCharCode(col.charCodeAt(0));
    // const squareDown = rowDown + (parseInt(row) - i);
    // coords.includes(squareDown) && movements.push(squareDown);

    // // one column left
    // const colLeft = String.fromCharCode(col.charCodeAt(0) - i);
    // const squareLeft = colLeft + row;
    // coords.includes(squareLeft) && movements.push(squareLeft);

    // // one column right
    // const colRight = String.fromCharCode(col.charCodeAt(0) + i);
    // const squareRight = colRight + row;
    // coords.includes(squareRight) && movements.push(squareRight);
  }

  // ****************************************************************
  //   for (let i = 1; i < 8; i++) {
  //     const colLeft = String.fromCharCode(col.charCodeAt
  //  const dragPlusOneRow = dragCol + (parseInt(dragRow) + rowForward); // or dragId[0] + (+(dragId[1]) + rowForward)
  //   const dragPlusOneRow = dragId[0] + (parseInt(dragId[1]) + rowForward); // or dragId[0] + (+(dragId[1]) + rowForward)

  //  Current pawn coord plus one row forward
  //  const forwardOne = document.querySelector(
  //    `div[square-id = "${dragPlusOneRow}"]`
  //  );
  //   if (forwardOne.firstChild === null) {
  //     console.log(dragPlusOneRow, "is empty");
  //   }

  //  function isEmpty(square) {
  //    return square.firstChild === null;
  //  }

  //  isNextRowEmpty = isEmpty(forwardOne);

  //  if (isNextRowEmpty) {
  //    movements.push(dragPlusOneRow);
  //  }
}

function validRookMoves() {
  console.log("Valid rook moves");

  //   Rook can move any number of squares vertically or horizontally.
  //   - 1) Any number of squares vertically (up or down)
  //   - 2) Any number of squares horizontally (left or right)

  // const dragRow = dragId[1]; // 1 -> 8  string
  // const dragCol = dragId[0]; // a -> h  string

  // check if empty square. if is true then push to moves, otherwise check it has opponent

  // EMPTY
  // const forwardOne = document.querySelector(
  //   `div[square-id = "${dragPlusOneRow}"]`
  // );

  // isNextRowEmpty = isEmpty(forwardOne);

  // if (isNextRowEmpty) {
  //   moves.push(dragPlusOneRow);
  // }

  // OPPONENT
  //  const leftDiagonal = document.querySelector(
  //    `div[square-id = "${dragPlusOneLeft}"]`
  //  );
  //  console.log(leftDiagonal);

  //  console.log("Left diagonal id: ", dragPlusOneLeft);

  //  const isLeftDiagonalOpponent =
  //    leftDiagonal?.firstChild?.classList.contains(
  //      playerTurn === "white" ? "black" : "white"
  //    ); // it could be true or undefined (falsy). When it's undefined it means it is empty

  //  console.log(isLeftDiagonalOpponent);

  //  UP
  console.log("line 40rook");
  for (let i = parseInt(dragRow) + 1; i <= 8; i++) {
    const squareUp = dragCol + i;

    const up = document.querySelector(`div[square-id = "${squareUp}"]`);

    const isNextRowEmpty = isEmpty(up); // remember the function is asking if up === null, it so the is empty therefore true. Otherwise it is false.

    const isNextRowOpponent = up?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );

    if (isNextRowEmpty) {
      moves.push(squareUp);
    } else {
      isNextRowOpponent && moves.push(squareUp);
      break;
    }
  }
  console.log(moves);
  console.log("line 59rook");

  // DOWN
  for (let i = parseInt(dragRow) - 1; i >= 1; i--) {
    const squareDown = dragCol + i;
    console.log(squareDown);

    const down = document.querySelector(`div[square-id = "${squareDown}"]`);

    const isNextRowEmpty = isEmpty(down);

    const isNextRowOpponent = down?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );

    if (isNextRowEmpty) {
      moves.push(squareDown);
    } else {
      isNextRowOpponent && moves.push(squareDown);
      break;
    }
  }

  console.log(moves);

  // RIGHT  console.log(String.fromCharCode(104)) -> "h"
  for (let i = parseInt(dragCol.charCodeAt(0)) + 1; i <= 104; i++) {
    // const dragRightId = String.fromCharCode(dragId[0].charCodeAt(0) + 1);
    // const dragPlusOneRight = dragRightId + (parseInt(dragId[1]) + rowForward);

    const squareRight = String.fromCharCode(i) + dragRow;
    console.log(squareRight);

    const right = document.querySelector(`div[square-id = "${squareRight}"]`);

    const isNextRowEmpty = isEmpty(right);

    const isNextRowOpponent = right?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );

    if (isNextRowEmpty) {
      moves.push(squareRight);
    } else {
      isNextRowOpponent && moves.push(squareRight);
      break;
    }
  }

  // LEFT  console.log(String.fromCharCode(97)) -> "a"
  for (let i = parseInt(dragCol.charCodeAt(0)) - 1; i >= 97; i--) {
    // const dragRightId = String.fromCharCode(dragId[0].charCodeAt(0) + 1);
    // const dragPlusOneRight = dragRightId + (parseInt(dragId[1]) + rowForward);

    const squareLeft = String.fromCharCode(i) + dragRow;
    console.log(squareLeft);

    const left = document.querySelector(`div[square-id = "${squareLeft}"]`);

    const isNextRowEmpty = isEmpty(left);

    const isNextRowOpponent = left?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );

    if (isNextRowEmpty) {
      moves.push(squareLeft);
    } else {
      isNextRowOpponent && moves.push(squareLeft);
      break;
    }
  }

  //   for (let i = 1; i < 8; i++) {
  //     const colLeft = String.fromCharCode(col.charCodeAt
}
// function validRookMoves() {

//   for (let i = 1; i < 8; i++) {
//     // one row up
//     // const rowUp = String.fromCharCode(dragCol.charCodeAt(0));
//     if (parseInt(dragRow) + i === 8) {
//       return;
//     }
//     const squareUp = dragCol + (parseInt(dragRow) + i);
//     // const squareUp = rowUp + (parseInt(row) + i);

//     const upRow = document.querySelector(`div[square-id = "${squareUp}"]`);

//     function isEmpty(square) {
//       return square.firstChild === null;
//     }

//     isRowUpEmpty = isEmpty(upRow);

//     if (isRowUpEmpty) {
//       moves.push(squareUp);
//     }

//     coords.includes(squareUp) && moves.push(squareUp);

function validKnightMoves() {
  console.log("Hello from knight.js");

  //   Knight has maximum 8 possibles moves
  //   - 2 squares in any direction (up or down) and then 1 square in a perpendicular direction (left or right).

  //   1) 2 rows up  1 column left
  const twoRowsUpOneColLeft =
    String.fromCharCode(dragId[0].charCodeAt(0) - 1) +
    (parseInt(dragId[1]) + 2);
  console.log(twoRowsUpOneColLeft); // ok

  //   2) 2 rows up  1 column right
  const twoRowsUpOneColRight =
    String.fromCharCode(dragId[0].charCodeAt(0) + 1) +
    (parseInt(dragId[1]) + 2);
  console.log(twoRowsUpOneColRight); //

  //   3) 2 rows down  1 column left
  const twoRowsDownOneColLeft =
    String.fromCharCode(dragId[0].charCodeAt(0) - 1) +
    (parseInt(dragId[1]) - 2);
  console.log(twoRowsDownOneColLeft); // *
  console.log(String.fromCharCode(dragId[0].charCodeAt(0) - 1));
  console.log(parseInt(dragId[1]) - 2);

  //   4) 2 rows down  1 column right
  const twoRowsDownOneColRight =
    String.fromCharCode(dragId[0].charCodeAt(0) + 1) +
    (parseInt(dragId[1]) - 2);
  console.log(twoRowsDownOneColRight); //*
  console.log(String.fromCharCode(dragId[0].charCodeAt(0) + 1));
  console.log(parseInt(dragId[1]) - 2);

  //   5) 1 row up 2 columns left
  const oneRowUpTwoColLeft =
    String.fromCharCode(dragId[0].charCodeAt(0) - 2) +
    (parseInt(dragId[1]) + 1);
  console.log(oneRowUpTwoColLeft); //

  //   6) 1 row down  2 columns left
  const oneRowDownTwoColLeft =
    String.fromCharCode(dragId[0].charCodeAt(0) - 2) +
    (parseInt(dragId[1]) - 1);
  console.log(oneRowDownTwoColLeft); //

  //   7) 1 row up  2 columns right
  const oneRowUpTwoColRight =
    String.fromCharCode(dragId[0].charCodeAt(0) + 2) +
    (parseInt(dragId[1]) + 1);
  console.log(oneRowUpTwoColRight); //

  //   8) 1 row down  2 columns right
  const oneRowDownTwoColRight =
    String.fromCharCode(dragId[0].charCodeAt(0) + 2) +
    (parseInt(dragId[1]) - 1);
  console.log(oneRowDownTwoColRight); //

  //   The above 8 moves cover all the possible knight's moves.
  //   However, for a knight to move to a square, it must not be threatened by an opponent's piece.
  //   A knight cannot move to a square that is under attack by any other piece.
  //   In chess, knight moves are checked by checking if there are no pieces between the knight and the destination square.
  //   If there are pieces between the knight and the destination square, the knight cannot move to that square.
  //   - 1) 2 squares in any direction (up or down) and then 1 square in a perpendicular direction

  coords.includes(twoRowsUpOneColLeft) && movements.push(twoRowsUpOneColLeft);
  coords.includes(twoRowsUpOneColRight) && movements.push(twoRowsUpOneColRight);
  coords.includes(twoRowsDownOneColLeft) &&
    movements.push(twoRowsDownOneColLeft);
  coords.includes(twoRowsDownOneColRight) &&
    movements.push(twoRowsDownOneColRight);
  coords.includes(oneRowUpTwoColLeft) && movements.push(oneRowUpTwoColLeft);
  coords.includes(oneRowDownTwoColLeft) && movements.push(oneRowDownTwoColLeft);
  coords.includes(oneRowUpTwoColRight) && movements.push(oneRowUpTwoColRight);
  coords.includes(oneRowDownTwoColRight) &&
    movements.push(oneRowDownTwoColRight);
}

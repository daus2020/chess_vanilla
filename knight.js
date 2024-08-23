function validKnightMoves() {
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

  coords.includes(twoRowsUpOneColLeft) && moves.push(twoRowsUpOneColLeft);
  coords.includes(twoRowsUpOneColRight) && moves.push(twoRowsUpOneColRight);
  coords.includes(twoRowsDownOneColLeft) && moves.push(twoRowsDownOneColLeft);
  coords.includes(twoRowsDownOneColRight) && moves.push(twoRowsDownOneColRight);
  coords.includes(oneRowUpTwoColLeft) && moves.push(oneRowUpTwoColLeft);
  coords.includes(oneRowDownTwoColLeft) && moves.push(oneRowDownTwoColLeft);
  coords.includes(oneRowUpTwoColRight) && moves.push(oneRowUpTwoColRight);
  coords.includes(oneRowDownTwoColRight) && moves.push(oneRowDownTwoColRight);
}

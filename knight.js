function validKnightMoves() {
  console.log("Hello from knight.js");

  //   Knight has maximum 8 possibles moves
  //   - 2 squares in any direction (up or down) and then 1 square in a perpendicular direction (left or right).
  //   1) 2 rows up  1 column left
  const twoRowsUpOneColLeft =
    String.fromCharCode(dragId[0].charCodeAt(0) - 1) +
    (parseInt(dragId[1]) + 2);
  console.log(twoRowsUpOneColLeft);
  //   2) 2 rows up  1 column right
  //   3) 2 rows right  1 column up
  //   4) 2 rows right  1 column down
  //   5) 2 rows down  1 column right
  //   6) 2 rows down  1 column left
  //   7) 2 rows left  1 column up
  //   8) 2 rows left  1 column down
}

function validKingMoves() {
  console.log("Valid king moves");

  const opponentPlayer = playerTurn === "white" ? "black" : "white";

  const offsets = [
    [0, 1], // up 1 row
    [1, 1], // diagonal 1 right column & 1 up row
    [1, 0], // right 1 column
    [1, -1], // diagonal 1 right column & down 1 row
    [0, -1], // down 1 row
    [-1, -1], // diagonal 1 left column & down 1 row
    [-1, 0], // left 1 column
    [-1, 1], // diagonal right 1 left column & up 1 row
  ];

  offsets.forEach(function (offset) {
    let colOffset = String.fromCharCode(dragCol.charCodeAt(0) + offset[0]);
    let rowOffset = parseInt(dragRow) + offset[1];

    const offsetId = colOffset + rowOffset;

    if (coords.includes(offsetId)) {
      console.log(`Move to ${colOffset}${rowOffset}`);
      const offsetId = colOffset + rowOffset;
      const squareOffset = document.querySelector(
        `div[square-id = "${offsetId}"]`
      );

      const isOffsetEmpty = isEmpty(squareOffset); // remember the function is asking if squareOffset === null, if so then is empty therefore true. Otherwise it is false.

      const hasOffsetOpponent = squareOffset?.firstChild?.classList.contains(
        playerTurn === "white" ? "black" : "white"
      );

      if (isOffsetEmpty) {
        moves.push(offsetId);
      } else {
        hasOffsetOpponent && moves.push(offsetId);
      }
    }
  });
}

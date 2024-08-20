function validRookMoves() {
  console.log("Valid rook moves");

  //   Rook can move any number of squares vertically or horizontally.
  //   - 1) Any number of squares vertically (up or down)
  //   - 2) Any number of squares horizontally (left or right)

  const row = dragId[1];
  const col = dragId[0];

  for (let i = 1; i < 8; i++) {
    const rowUp = String.fromCharCode(col.charCodeAt(0));
    const squareUp = rowUp + (parseInt(row) + i);
    coords.includes(squareUp) && movements.push(squareUp);

    const rowDown = String.fromCharCode(col.charCodeAt(0));
    const squareDown = rowDown + (parseInt(row) - i);
    coords.includes(squareDown) && movements.push(squareDown);
  }

  //   for (let i = 1; i < 8; i++) {
  //     const colLeft = String.fromCharCode(col.charCodeAt
}

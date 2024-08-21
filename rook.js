function validRookMoves() {
  console.log("Valid rook moves");

  //   Rook can move any number of squares vertically or horizontally.
  //   - 1) Any number of squares vertically (up or down)
  //   - 2) Any number of squares horizontally (left or right)

  // const dragRow = dragId[1]; // 1 -> 8  string
  // const dragCol = dragId[0]; // a -> h  string

  for (let i = 1; i < 8; i++) {
    // const rowUp = String.fromCharCode(dragCol.charCodeAt(0));
    const squareUp = dragCol + (parseInt(dragRow) + i);
    coords.includes(squareUp) && movements.push(squareUp);

    // const rowDown = String.fromCharCode(dragCol.charCodeAt(0));
    const squareDown = dragCol + (parseInt(dragRow) - i);
    coords.includes(squareDown) && movements.push(squareDown);
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
//       movements.push(squareUp);
//     }

//     coords.includes(squareUp) && movements.push(squareUp);

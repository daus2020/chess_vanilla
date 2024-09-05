function validKingMoves() {
  console.log("Checking king moves in board");

  const opponentPiece = playerTurn === "white" ? "black" : "white";
  console.log(opponentPiece);

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

  offsets.forEach(function ([colOffset, rowOffset]) {
    let currentCol = dragCol.charCodeAt(0) + colOffset;
    // let currentCol = String.fromCharCode(dragCol.charCodeAt(0) + colOffset);
    let currentRow = parseInt(dragRow) + rowOffset;
    // let currentRow = parseInt(dragRow) + rowOffset;

    let offsetId = String.fromCharCode(currentCol) + currentRow;

    if (coords.includes(offsetId)) {
      const squareOffset = getDivOffset(offsetId);
      console.log(squareOffset);
      console.log(opponentPiece);

      const isOffsetEmpty = isEmpty(squareOffset); // remember the function is asking if squareOffset === null, if so then is empty therefore true. Otherwise it is false.

      const hasOffsetOpponent =
        squareOffset?.firstChild?.classList.contains(opponentPiece);

      if (isOffsetEmpty) {
        moves.push(offsetId);
      } else {
        hasOffsetOpponent && moves.push(offsetId);
      }

      const castleKing = draggedDiv.classList?.contains("cast");
      console.log(`castleKing: ${castleKing}`);

      // castling right (short)
      if (castleKing && colOffset === 1 && rowOffset === 0 && isOffsetEmpty) {
        // currentCol += colOffset;
        // offsetId = String.fromCharCode(currentCol) + currentRow;
        // const twoColOffset = getDivOffset(offsetId);
        // const isTwoColEmpty = isEmpty(twoColOffset);
        // currentCol += colOffset;
        // offsetId = String.fromCharCode(currentCol) + currentRow;
        const gColOffset = getDivOffset(String.fromCharCode(103) + currentRow);
        const isGcolEmpty = isEmpty(gColOffset);
        console.log(`is g col empty? ${isGcolEmpty}`);
        const hColOffset = getDivOffset(String.fromCharCode(104) + currentRow);
        const hColOffsetCast =
          hColOffset.firstChild?.classList.contains("cast");

        isGcolEmpty &&
          hColOffsetCast &&
          moves.push(String.fromCharCode(103) + currentRow);
      }

      // castling left (large)
      if (castleKing && colOffset === -1 && rowOffset === 0 && isOffsetEmpty) {
        const cColOffset = getDivOffset(String.fromCharCode(99) + currentRow);
        const isCcolEmpty = isEmpty(cColOffset);
        console.log(`is c col empty? ${isCcolEmpty}`);
        const bColOffset = getDivOffset(String.fromCharCode(98) + currentRow);
        const isBcolEmpty = isEmpty(bColOffset);
        const aColOffset = getDivOffset(String.fromCharCode(97) + currentRow);
        const aColOffsetCast =
          aColOffset.firstChild?.classList.contains("cast");
        console.log(isCcolEmpty);
        console.log(isBcolEmpty);
        console.log(aColOffsetCast);

        isCcolEmpty &&
          isBcolEmpty &&
          aColOffsetCast &&
          moves.push(String.fromCharCode(99) + currentRow);
      }

      // just for testing purposes
      let kingMoves = ["a1", "a2", "a3", "a4", "a5", "a6"]; // current 'moves' array

      // let forEach all opposite pieces moves, except for pawns vertical moves doesn't matter only diagonal pawn moves matter
      const opponentPiece = playerTurn === "white" ? "black" : "white";
      console.log(pieces.white);
      console.log(pieces.black);

      pieces[opponentPiece].forEach((oppPiece) => console.log(oppPiece));
      // let opp1moves = ["d6", "f5", "c5", "d4"];
      // let opp2moves = ["a2", "b3", "c5", "a4", "d4"];
      // let opp3moves = ["f4", "g6", "h6", "a5", "b6", "a1"];

      // // All opponent moves including duplicates ones
      // let combined = [...opp1moves, ...opp2moves, ...opp3moves];
      // console.log(combined);
      // // Removing duplicates
      // let setCombined = [...new Set(combined)];
      // console.log(setCombined);
      // // Finding king moves that are not in opponent moves list  (not included in combined)
      // const result = kingMoves.filter((element) => !combined.includes(element));
      // console.log(result);
    }
  });
}

const chessBoard = document.querySelector("#chessBoard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("status-info");

const xAxis = "abcdefgh".split(""); // ["a", "b", "c", "d", "e", "f", "g", "h"]
// alternative: x_Axis = Array(8)
//   .fill()
//   .map((_, i) => String.fromCharCode(i + 97));
const yAxis = xAxis.map((_, i) => 8 - i); // [ 8, 7, 6, 5, 4, 3, 2, 1]

const coords = yAxis.flatMap((el) => xAxis.flatMap((letter) => letter + el));
// console.log(coords); // Array(64) ['a8', 'b8', 'c8','d8', 'e8', 'f8','g8', 'h8', 'a7',... "h2','a1', 'b1', "c1',.., 'h1']

// In chess always start white pieces
let playerTurn = "white";
playerDisplay.textContent = playerTurn;

function createBoard() {
  startPieces.forEach((piece, i) => {
    const square = document.createElement("div");
    const rowNumber = +coords[i].charAt(1);
    square.classList.add("square");
    square.innerHTML = piece;
    square.setAttribute("square-id", coords[i]);
    const isRowOdd = (rowNumber + i) & 1;

    isRowOdd ? square.classList.add("dark") : square.classList.add("light");
    if (i <= 15) {
      //   piece.classList.add("white");
      square.firstChild.classList.add("black");
      square.firstChild?.setAttribute("draggable", false);
    }
    if (i >= 48) {
      //   piece.classList.add("white");
      square.firstChild.classList.add("white");
      square.firstChild?.setAttribute("draggable", true);
    }
    chessBoard.append(square);
    // piece.setAttribute("draggable", "true");
  });
}

createBoard();

const allSquares = document.querySelectorAll(".square");

allSquares.forEach((square) => {
  square.addEventListener("dragstart", dragStart);
  square.addEventListener("dragover", dragOver);
  square.addEventListener("drop", dragDrop);
});

// const whitePieces = document.querySelectorAll(".white");
// const blackPieces = document.querySelectorAll(".black");
const pieces = {
  white: document.querySelectorAll(".white"),
  black: document.querySelectorAll(".black"),
};
function toggleDraggable(pieces, isDraggable) {
  pieces.forEach((el) => el.setAttribute("draggable", isDraggable));
}

function changePlayer() {
  toggleDraggable(pieces[playerTurn], false);
  playerTurn = playerTurn === "white" ? "black" : "white";
  toggleDraggable(pieces[playerTurn], true);
  playerDisplay.textContent = playerTurn;

  // console.log(`switch playerTurn to "${playerTurn}"`);
}

let dragId;
let draggedDiv;
let dragCol;
let dragRow;
let dragPlusOneRow;
let dragPlusTwoRow;
let moves = [];

function getDivOffset(colRow) {
  return document.querySelector(`div[square-id="${colRow}"]`);
}
function isEmpty(square) {
  return square.firstChild === null;
}

function dragStart(e) {
  dragId = e.target.parentNode.getAttribute("square-id");
  console.log("drag id: ", dragId); // i.e. h2
  dragCol = dragId[0]; // could be from a -> h  string
  dragRow = dragId[1]; // could be from 1 -> 8  string

  draggedDiv = e.target;
  draggedPiece = draggedDiv.getAttribute("id");
  console.log("dragged div", e.target); // <div id="pawn" class="piece white" draggable="true">
  console.log("dragged piece: ", draggedDiv.getAttribute("id")); // pawn
  // console.log(dragId[0] + (+dragId[1] + 1));
  console.log(playerTurn);
  const opponentPlayer = playerTurn === "white" ? "black" : "white";

  // If dragI = undefined then it is false, empty does not exit, therefore !dragId is truthy
  if (!dragId) {
    e.preventDefault(); // Stops the drag operation
    console.log("Drag stopped: square-id is null.");
    return; // Early exit
  }

  if (draggedPiece === "pawn") {
    validPawnMoves();
  }
  if (draggedPiece === "knight") {
    validKnightMoves();
  }
  if (draggedPiece === "bishop") {
    validBishopMoves();
  }
  if (draggedPiece === "rook") {
    validRookMoves();
  }
  if (draggedPiece === "queen") {
    validQueenMoves();
  }
  if (draggedPiece === "king") {
    validKingMoves();
  }
  console.log("moves: ", moves);
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.stopPropagation();
  console.log(moves);

  let dropId;

  // Here dropId could be, for example "c3" where first index represent the column and the second index the row is dropped
  e.target.parentNode.getAttribute("square-id") === null
    ? (dropId = e.target.getAttribute("square-id"))
    : (dropId = e.target.parentNode.getAttribute("square-id"));

  let dropCol = dropId[0];
  let dropRow = dropId[1];

  // console.log(dropId);

  console.log("drop id: ", dropId);

  if (e.target.classList.contains(playerTurn) || !moves.includes(dropId)) {
    console.log("move not allowed");
    moves = [];
    return;
  }

  const opponentPiece = playerTurn === "white" ? "black" : "white";

  const taken = e.target.classList.contains(opponentPiece);
  console.log("is taken: ", taken);

  if (taken) {
    e.target.parentNode.append(draggedDiv);
    e.target.remove();

    moves = [];
    changePlayer();
    return;
  }

  if (e.target.childElementCount === 0) {
    // castling move who involves king and rook
    if (
      draggedPiece === "king" &&
      Math.abs(dropCol.charCodeAt(0) - dragCol.charCodeAt(0)) === 2
    ) {
      // if king move two spaces to the right then is short castling, rook moves from h to f, otherwise is long castling (left) where rook moves from a to d
      const [rookCol, rookColCastled] =
        dropCol.charCodeAt(0) - dragCol.charCodeAt(0) === 2
          ? ["h", "f"]
          : ["a", "d"];
      const rookDiv = getDivOffset(rookCol + dropRow);
      const rookCast = rookDiv.firstChild;
      const rookTargetDiv = getDivOffset(rookColCastled + dropRow);
      rookTargetDiv.appendChild(rookCast);
    }

    if (
      (draggedPiece === "rook" || draggedPiece === "king") &&
      draggedDiv.classList.contains("cast")
      // (draggedPiece === "king" && draggedDiv.classList.contains("cast"))
    )
      draggedDiv.classList.remove("cast");

    if (draggedPiece === "pawn" && Math.abs(dropRow - dragRow) === 2) {
      draggedDiv.classList.add("enpass");
    }

    if (draggedPiece === "pawn" && draggedDiv.classList.contains("static"))
      draggedDiv.classList.remove("static");

    let diagonalPawnMove =
      Math.abs(dragCol.charCodeAt(0) - dropCol.charCodeAt(0)) === 1;
    console.log(diagonalPawnMove);

    if (draggedPiece === "pawn" && diagonalPawnMove) {
      console.log("Pawn dragged");
      console.log("diagonal pawn moved");
      document.querySelector(".enpass").remove();
    }

    const enpasses = document.querySelectorAll(".enpass");
    console.log(enpasses);

    if (enpasses.length === 2) {
      console.log("Exist 2 enpass class");
      // enpasses.forEach((el) =>
      //   el.classList.contains(`.${opponentPiece}`).classList.remove("enpass")
      // );
    }
    for (const enpassDiv of enpasses) {
      if (enpassDiv.classList.contains(opponentPiece)) {
        enpassDiv.classList.remove("enpass");
        break; // Stop after removing from the first matching div
      }
    }

    e.target.append(draggedDiv);
    moves = [];
    changePlayer();
    return;
  }
}

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

let playerTurn = "white";
playerDisplay.textContent = playerTurn;

// console.log(coords);  //ok

function createBoard() {
  startPieces.forEach((piece, i) => {
    const square = document.createElement("div");
    const rowNumber = +coords[i].charAt(1);
    square.classList.add("square");
    square.innerHTML = piece;
    // square.firstChild?.setAttribute("draggable", true);
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

  console.log(`switch playerTurn to "${playerTurn}"`);
}

let dragId;
let draggedDiv;
let dragLetter;
let dragRow;
let dragPlusOneRow;
let dragPlusTwoRow;
let movements = [];

function dragStart(e) {
  dragId = e.target.parentNode.getAttribute("square-id");
  console.log("drag id: ", dragId); // i.e. h2
  dragLetter = dragId[0];
  dragRow = dragId[1];
  console.log("drag letter: ", dragId[0]); // h
  console.log("drag row: ", dragId[1]); // 2
  draggedDiv = e.target;
  draggedPiece = draggedDiv.getAttribute("id");
  console.log("dragged div", e.target); // <div id="pawn" class="piece white" draggable="true">
  console.log("dragged piece: ", draggedDiv.getAttribute("id")); // pawn
  // console.log(dragId[0] + (+dragId[1] + 1));
  console.log(playerTurn);

  if (draggedPiece === "pawn") {
    validPawnMoves();
  }
}

// console.log(movements);

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.stopPropagation();
  console.log(movements);

  let dropId = e.target.parentNode.getAttribute("square-id");
  console.log(dropId);

  if (dropId === null) {
    console.log("parent dropId is null (empty square)");
    // console.log(e.target.getAttribute("square-id"));
    dropId = e.target.getAttribute("square-id");
    console.log(dropId);
    console.log(typeof dropId);
  }
  //
  console.log("drop id: ", dropId);

  // movements.includes(dropId)
  //   /? console.log("include in valid moves, it is true")
  //   : console.log("not include in valid moves, it is false");

  //    /!movements.includes(dropId)
  //   /? console.log("not include in valid moves")
  //   : console.log("include in valid moves");

  if (e.target.classList.contains(playerTurn) || !movements.includes(dropId)) {
    console.log("movement not allowed");
    movements = [];
    return;
  }

  // console.log("dragged: ", draggedDiv);
  // console.log(draggedDiv.getAttribute("id"));
  // console.log("e.target id : ", e.target.getAttribute("square-id"));
  // const currentPlayer = draggedDiv.classList.contains(playerTurn); // not necessary
  // console.log("current player: " + playerTurn);
  const opponentPlayer = playerTurn === "white" ? "black" : "white";
  // console.log("Opponent player: " + opponentPlayer);
  // console.log("current opponent: " + opponentPlayer); // ok
  const taken =
    // e.target.classList.contains("piece") &&  ?// not necessary
    e.target.classList.contains(opponentPlayer);
  console.log("is taken: ", taken);

  if (taken) {
    // if (taken && valid) {
    e.target.parentNode.append(draggedDiv);
    e.target.remove();

    movements = [];
    changePlayer();
    return;
  }

  // e.target.classList.contains(playerTurn) &&
  //   console.log("movement not allowed");

  if (e.target.childElementCount === 0) {
    if (draggedPiece === "pawn" && Math.abs(dropId[1] - dragId[1]) === 2) {
      draggedDiv.classList.add("enpass");
    }

    e.target.append(draggedDiv);
    movements = [];
    changePlayer();
    return;
  }
}

// square.firstChild.has.setAttribute("draggable", true);
// document.getElementByClass("white").setAttribute("draggable", false);

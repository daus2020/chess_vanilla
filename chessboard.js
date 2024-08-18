const chessBoard = document.querySelector("#chessBoard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("status-info");

const xAxis = "abcdefgh".split(""); // ["a", "b", "c", "d", "e", "f", "g", "h"]
// alternative: x_Axis = Array(8)
//   .fill()
//   .map((_, i) => String.fromCharCode(i + 97));
const yAxis = xAxis.map((_, i) => 8 - i); // [ 8, 7, 6, 5, 4, 3, 2, 1]

const coords = yAxis.flatMap((el) => xAxis.flatMap((letter) => letter + el));
console.log(coords); // Array(64) ['a8', 'b8', 'c8','d8', 'e8', 'f8','g8', 'h8', 'a7',... "h2','a1', 'b1', "c1',.., 'h1']

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

const whitePieces = document.querySelectorAll(".white");
const blackPieces = document.querySelectorAll(".black");

function changePlayer() {
  if (playerTurn === "white") {
    whitePieces.forEach((el) => {
      el.setAttribute("draggable", false);
    });
    blackPieces.forEach((el) => {
      el.setAttribute("draggable", true);
    });
    console.log('switch playerTurn to "black"');
    playerTurn = "black";
  } else {
    whitePieces.forEach((el) => {
      el.setAttribute("draggable", true);
    });
    blackPieces.forEach((el) => {
      el.setAttribute("draggable", false);
    });

    console.log('switch playerTurn to "white"');
    playerTurn = "white";
  }
  console.log(playerTurn);
  return (playerDisplay.textContent = playerTurn);

  // playerTurn === "white" ? (playerTurn = "black") : (playerTurn = "white");
  // playerDisplay.textContent = playerTurn;
}

// console.log(playerTurn);

let dragId;
let draggedElement;
let movements = [];

function dragStart(e) {
  dragId = e.target.parentNode.getAttribute("square-id");
  console.log("drag id: ", dragId);
  draggedElement = e.target;
  console.log("draggedElement", e.target);
  console.log("draggedElement id: ", draggedElement.getAttribute("id"));
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.stopPropagation();
  const outBoard = e.target.parentNode.id;
  console.log(e.target.parentNode);
  console.log("parent node id: ", outBoard);

  let dropId = e.target.parentNode.getAttribute("square-id");
  if (dropId === null) {
    console.log("parent dropId is null");
    // console.log(e.target.getAttribute("square-id"));
    dropId = e.target.getAttribute("square-id");
    console.log(dropId);
  }

  // if (!dropId) {
  //   console.log("invalid movement, out of the board!");
  //   return;
  // }
  console.log("drop id: ", dropId);
  console.log("dragged: ", draggedElement);
  console.log(draggedElement.getAttribute("id"));
  // console.log("e.target : ", e.target);..getAttribute("square-id")ibute("square-id")bute("square-id")
  console.log("e.target id : ", e.target.getAttribute("square-id"));
  // const currentPlayer = draggedElement.classList.contains(playerTurn); // not necessary
  console.log("current player: " + playerTurn);
  const opponentPlayer = playerTurn === "white" ? "black" : "white";
  console.log("Opponent player: " + opponentPlayer);
  // console.log("current opponent: " + opponentPlayer); // ok
  const taken =
    // e.target.classList.contains("piece") &&  ?// not necessary
    e.target.classList.contains(opponentPlayer);
  console.log("is taken: ", taken);

  if (taken) {
    // if (taken && valid) {
    e.target.parentNode.append(draggedElement);
    e.target.remove();
    // console.log("Valid move and take");
    // e.target.remove();
    // e.target.parentNode.append(draggedElement);
    changePlayer();
    return;
  }

  if (e.target.classList.contains(playerTurn)) {
    console.log("movement not allowed");
    return;
  }
  // e.target.classList.contains(playerTurn) &&
  //   console.log("movement not allowed");

  if (e.target.childElementCount === 0) {
    e.target.append(draggedElement);
    changePlayer();
    return;
  }
  //   e.target.parentNode.append(draggedElement);
  //   e.target.remove();
  //   e.target.append(draggedElement);
  // e.target.classList.contains(playerTurn)
  // ? console.log("movement not allowed")
  // : // ? alert(playerTurn + " can't do that")
  //     changePlayer();
  // return;
  // if (e.target.classList.contains(playerTurn))
  // changePlayer();
}

// square.firstChild.has.setAttribute("draggable", true);
// document.getElementByClass("white").setAttribute("draggable", false);

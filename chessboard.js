const chessBoard = document.querySelector("#chessBoard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("status-info");

const xAxis = "abcdefgh".split(""); // ["a", "b", "c", "d", "e", "f", "g", "h"]
// alternative: x_Axis = Array(8)
//   .fill()
//   .map((_, i) => String.fromCharCode(i + 97));
const yAxis = xAxis.map((_, i) => 8 - i); // [ 8, 7, 6, 5, 4, 3, 2, 1]

const coords = yAxis.flatMap((el) => xAxis.flatMap((letter) => letter + el));

let playerTurn = "white";
playerDisplay.textContent = playerTurn;

console.log(coords);

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
console.log(whitePieces);
console.log(blackPieces);

function changePlayer() {
  const whitePieces = document.querySelectorAll(".white");
  const blackPieces = document.querySelectorAll(".black");
  // console.log(whitePieces);
  // console.log(blackPieces);
  if (playerTurn === "white") {
    whitePieces.forEach((el) => {
      el.setAttribute("draggable", false);
    });
    blackPieces.forEach((el) => {
      el.setAttribute("draggable", true);
    });

    // document.querySelectorAll(".white").setAttribute("draggable", false);
    // document.querySelectorAll(".black").setAttribute("draggable", true);
    // whitePieces.setAttribute("draggable", false);

    // blackPieces.setAttribute("draggable", true);

    // return (playerTurn = "black");
    // console.log('switch playerTurn to "black"');
    playerTurn = "black";
  } else {
    whitePieces.forEach((el) => {
      el.setAttribute("draggable", true);
    });
    blackPieces.forEach((el) => {
      el.setAttribute("draggable", false);
    });
    // document.querySelectorAll(".black").setAttribute("draggable", false);
    // document.querySelectorAll(".white").setAttribute("draggable", true);
    // blackPieces.forEach((piece) => {
    //   piece.setAttribute("draggable", false);
    // });
    // whitePieces.forEach((piece) => {
    //   piece.setAttribute("draggable", true);
    // });
    // console.log((playerTurn = "white"));
    console.log('switch playerTurn to "white"');
    playerTurn = "white";
  }
  console.log(playerTurn);
  return (playerDisplay.textContent = playerTurn);

  // playerTurn === "white" ? (playerTurn = "black") : (playerTurn = "white");
  // playerDisplay.textContent = playerTurn;
}

console.log(playerTurn);

let startPositionId;
let draggedElement;

function dragStart(e) {
  startPositionId = e.target.parentNode.getAttribute("square-id");
  draggedElement = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.stopPropagation();
  console.log(e.target);
  const taken = e.target.classList.contains("piece");
  //   e.target.parentNode.append(draggedElement);
  //   e.target.remove();
  //   e.target.append(draggedElement);
  changePlayer();
}

// square.firstChild.has.setAttribute("draggable", true);
// document.getElementByClass("white").setAttribute("draggable", false);

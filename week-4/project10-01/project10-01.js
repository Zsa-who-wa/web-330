"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Wendy Rzechula
      Date: 11/15/2024

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");

// Counter for the zIndex style of each puzzle piece
let zCounter = 1;

// Array of integers from 1 to 48
let intList = new Array(48);

// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
  intList[i] = i+1;
}
intList.sort(function() {
  return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement("img");
  piece.src = "piece" + intList[i] + ".png";
  let rowNum = Math.ceil((i+1)/8);
  let colNum = (i + 1) - (rowNum - 1)*8;
  piece.style.top = (rowNum - 1)*98 + 7 + "px";
  piece.style.left = (colNum - 1)*98 + 7 + "px";
  piece.draggable = false; // override the default draggability of images
  puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// Add event listeners for each puzzle piece
pieces.forEach(piece => {
    piece.addEventListener("pointerdown", grabPiece);
});

// grabPiece function to handle dragging a piece
function grabPiece(e) {
  pointerX = e.clientX;
  pointerY = e.clientY;
  
  //Prevent default touch behavior on the piece
  e.target.style.touchAction = "none";
  
  // Increment and apply zIndex for layering
  zCounter += 1;
  e.target.style.zIndex = zCounter;
  
  // Record the initial position of the piece
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;
  
  // Add event listeners for moving and dropping piece
  e.target.addEventListener("pointermove", movePiece);
  e.target.addEventListener("pointerup", dropPiece);
}

// movePiece function to handle movement of the piece
function movePiece(e) {
  let diffX = e.clientX - pointerX;
  let diffY = e.clientY - pointerY;
  
  // Update the piece's position
  e.target.style.left = (pieceX + diffX) + "px";
  e.target.style.top = (pieceY + diffY) + "px";
}

// dropPiece function to handle when the piece is released.
function dropPiece(e) {
  e.target.removeEventListener("pointermove", movePiece);
  e.target.removeEventListener("pointerup", dropPiece);
}

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
*/
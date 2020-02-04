///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let points1 = 0;
let points2 = 0;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", "",
  ];
  turn = "X";

  render();
}

function render() {
  board.forEach(function(mark, index) {
    square[index].textContent = mark;
  });
}

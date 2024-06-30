// SubTask1

const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const msg = document.getElementById("msg");
const players = ["X", "O"];
let current = players[0];

// // add event listeners to each cell
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const handleCellClick = (event) => {
  const clickedCell = event.target;
  
  if(current == players[1]){
    clickedCell.innerText = "O";
    msg.innerText="X's Turn"
    current = players[0];
  } else {
    clickedCell.innerText = "X";
    msg.innerText="O's Turn"
    current = players[1];
  }
  
  clickedCell.disabled = true;
  checkWin();
  checkTie();
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});




// SubTask2
const disableCells = ()=>{
  for(let cell of cells){
      cell.disabled = true;
  }
}

const showWinner = (winner)=>{
  msg.innerText = `Congratulations, winner is ${winner}`;
  disableCells();
}

function checkWin() {
  // // Check Winning conditions
  for(let pattern of winPatterns){
    let pos1val=cells[pattern[0]].innerText;
    let pos2val= cells[pattern[1]].innerText;
    let pos3val= cells[pattern[2]].innerText;

    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
            console.log("Winner",pos1val);
            showWinner(pos1val);
        }
    }
}
}

function checkTie() {
  // // Check Tie conditions
  let count=0;
  for(let cell of cells){
    if(cell.innerText=="O"||cell.innerText=="X"){
      count++;
    }
  }
  if(count==9){
    msg.innerText="It's A Tie"
  }
}

// SubTask3
const enableCells = ()=>{
  for(let cell of cells){
      cell.disabled = false;
      cell.innerText="";
  }
  msg.innerText="X's Turn";
}
function restart() {
  // // Restart Game Functionality
    current=players[0];
    enableCells();
}

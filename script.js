const container=document.querySelector(".container")
const box=document.querySelectorAll(".cell");
const start=document.getElementById("strt");
const turnstmnt=document.getElementById("turnstmnt");


let gameplay=false;
let turn = "X";
let count=0;
start.addEventListener("click",function(){
    if(gameplay==false){
        turnstmnt.style.color='rgb(250, 6, 116';
        turnstmnt.innerHTML="Player X's turn ";
        start.innerHTML="Reset";
        count=0;
        turn = "X";
    }else{
        turnstmnt.innerHTML="";
        start.innerHTML="Start"
    }
    clearGrid();
    gameplay=!gameplay;
})

container.addEventListener("click",function(event){
    if(gameplay==true && event.target.innerHTML==""){
        let myCell = event.target;
        count++;
        if(turn=="X"){
            myCell.innerHTML=turn;
            myCell.style.color="rgb(250, 6, 116";
            turnstmnt.style.color='#22D3EE';
            turn = 'O';
        }
        else{
            myCell.innerHTML=turn;
            turnstmnt.style.color='rgb(250, 6, 116';
            myCell.style.color='#22D3EE';
            turn = "X";
        }
       
        turnstmnt.innerHTML=`Player ${turn}'s turn `;
        let output=CheckWinner();
        if(output==2){
            turnstmnt.style.color='#4ADE80';
            turnstmnt.innerHTML="Player 'X' is Winner";
            restartGame();
        }
        else if(output==1){
            turnstmnt.style.color='#4ADE80';
            turnstmnt.innerHTML="Player 'O' is Winner";
            restartGame();

        }
        else if(count==9){
            turnstmnt.style.color='#01ffee';
            turnstmnt.innerHTML="Game Draw";
            restartGame();
        }
    }else{

    }
})

function CheckWinner(){
    console.log("Check win");
    if(
        (box[0].innerHTML == "X" &&
            box[1].innerHTML == "X" &&
            box[2].innerHTML == "X") ||
        (box[3].innerHTML == "X" &&
            box[4].innerHTML == "X" &&
            box[5].innerHTML == "X") ||
        (box[6].innerHTML == "X" &&
            box[7].innerHTML == "X" &&
            box[8].innerHTML == "X") ||
        (box[0].innerHTML == "X" &&
            box[3].innerHTML == "X" &&
            box[6].innerHTML == "X") ||
        (box[1].innerHTML == "X" &&
            box[4].innerHTML == "X" &&
            box[7].innerHTML == "X") ||
        (box[2].innerHTML == "X" &&
            box[5].innerHTML == "X" &&
            box[8].innerHTML == "X") ||
        (box[0].innerHTML == "X" &&
            box[4].innerHTML == "X" &&
            box[8].innerHTML == "X") ||
        (box[2].innerHTML == "X" &&
            box[4].innerHTML == "X" &&
            box[6].innerHTML == "X")
    ){
        return 2;
    }
    else if(
        (box[0].innerHTML == "O" &&
            box[1].innerHTML == "O" &&
            box[2].innerHTML == "O") ||
        (box[3].innerHTML == "O" &&
            box[4].innerHTML == "O" &&
            box[5].innerHTML == "O") ||
        (box[6].innerHTML == "O" &&
            box[7].innerHTML == "O" &&
            box[8].innerHTML == "O") ||
        (box[0].innerHTML == "O" &&
            box[3].innerHTML == "O" &&
            box[6].innerHTML == "O") ||
        (box[1].innerHTML == "O" &&
            box[4].innerHTML == "O" &&
            box[7].innerHTML == "O") ||
        (box[2].innerHTML == "O" &&
            box[5].innerHTML == "O" &&
            box[8].innerHTML == "O") ||
        (box[0].innerHTML == "O" &&
            box[4].innerHTML == "O" &&
            box[8].innerHTML == "O") ||
        (box[2].innerHTML == "O" &&
            box[4].innerHTML == "O" &&
            box[6].innerHTML == "O")
    ){
        return 1;
    }
    else{
        return 0;
    }
}

function clearGrid(){
    for(let i=0;i<box.length;i++){
        box[i].innerHTML="";
    }
}
function restartGame(){
    gameplay=false;
    start.innerHTML="New Game Loading...";
    start.disabled=true;
    container.classList.add("disabled");
    count=0;


    setTimeout(function(){
        clearGrid();
        count=0;
        turn="X";
        start.disabled=false;
        container.classList.remove("disabled");
        start.innerHTML="Start";
    },3000)
    
}

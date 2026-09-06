const container=document.querySelector(".container")
const box=document.querySelectorAll(".cell");
const start=document.getElementById("strt");
const turnstmnt=document.getElementById("turnstmnt");


const XclickSound = new Audio("Sounds/Soft click.mp3");
const OclickSound = new Audio("Sounds/Slightly different pop.mp3");
const Startsnd = new Audio("Sounds/Short whoosh.mp3");
const Wins = new Audio("Sounds/Positive 3-note victory.mp3");
const Drawsnd = new Audio("Sounds/Soft descending tone.mp3");
const Resetsnd = new Audio("Sounds/Short reverse whoosh.mp3");

let gameplay=false;
let turn = "X";
let count=0;
start.addEventListener("click",function(){
    if(gameplay==false){
        Startsnd.play();
        turnstmnt.style.color='rgb(250, 6, 116';
        turnstmnt.innerHTML="Player X's turn ";
        start.innerHTML="Reset";
        count=0;
        turn = "X";
    }else{
        Resetsnd.play();
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
            XclickSound.play();
            myCell.innerHTML=turn;
            myCell.style.color="rgb(250, 6, 116";
            turnstmnt.style.color='#22D3EE';
            turn = 'O';
        }
        else{
            OclickSound.play();
            myCell.innerHTML=turn;
            turnstmnt.style.color='rgb(250, 6, 116';
            myCell.style.color='#22D3EE';
            turn = "X";
        }
       
        turnstmnt.innerHTML=`Player ${turn}'s turn `;
        let output=CheckWinner();
        if(output==2){
            turnstmnt.style.color='#4ADE80';
            Wins.play();
            turnstmnt.innerHTML="Player 'X' is Winner";
            restartGame();
        }
        else if(output==1){
            turnstmnt.style.color='#4ADE80';
            Wins.play();
            turnstmnt.innerHTML="Player 'O' is Winner";
            restartGame();

        }
        else if(count==9){
            Drawsnd.play();
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

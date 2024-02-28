let userScore = 0;
let compScore = 0;
let drawScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const cont = document.querySelector(".msg-cont");
const userScorePara = document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");
const resetBtn = document.querySelector("button");

resetBtn.addEventListener("click",()=>{
    userScorePara.innerText="0";
    drawScorePara.innerText="0";
    compScorePara.innerText = "0";
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = " #081b31";
    userScore = 0;
    compScore = 0;
    drawScore = 0;

});


let drawGame = () =>{
    drawScore++;
    drawScorePara.innerText=drawScore;
    msg.innerText = "Game Drawn !";
    msg.style.backgroundColor = " #081b31";
};

let showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = "Congratulations , You Win !";
        msg.style.backgroundColor = "green";


    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose , better Luck Try Again !";
        msg.style.backgroundColor = "red";
    }

};

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    let indx = Math.floor(Math.random()*3);
    return options[indx];
};

const playGame = (userChoice) =>{
     const compchoice = genCompChoice();

     if(userChoice === compchoice){
        drawGame();
     }
     else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper or scissors
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            //scissors or rock
            userWin = compchoice ==="scissors"? false : true;
        }
        else{
            //rock or paper
            userWin = compchoice === "rock" ? false:true;
        }
        showWinner(userWin);
     }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".image");
const msgPara = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["scissor", "paper", "rock"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msgPara.innerText = "Draw."
    msgPara.style.color = "purple";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgPara.innerText = "You win."
        msgPara.style.color = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msgPara.innerText = "You lose."
        msgPara.style.color = "orange";
    }
};

const playGame = (userChoice) => {
    console.log(`User Choice = ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`Computer Choice = ${compChoice}`);

    if (userChoice === compChoice){
        drawGame();
    } 
    else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper"? false: true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "rock"? true: false;
        } else{
            userWin = compChoice === "paper"? true: false;
        }
        showWinner(userWin);
    }
};

choices.forEach((image) =>{
    image.addEventListener("click", () =>{
        const userChoice = image.getAttribute("id");
        playGame(userChoice);
    });
});
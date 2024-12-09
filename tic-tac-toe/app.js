let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");
let reset = document.querySelector("#reset");
let turn0 = true;

const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winningPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner");
                showWinner(pos1Val);
            }
        }
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations. The winner is $[winner]`;
    msgContainer.classList.remove("hide");
}

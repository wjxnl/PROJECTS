let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".image");

choices.forEach((image) =>{
    image.addEventListener("click", () =>{
        const choiceId = image.getAttribute("id");
        console.log("choice was clicked", choiceId);
    });
});
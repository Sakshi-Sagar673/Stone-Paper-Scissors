let userScore = 0;
let computerScore = 0;
let binClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const stone_div = document.getElementById("stone");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ['stone','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToCapital(word){
    if(word=="stone")return "Stone";
    if(word=="paper")return "Paper";
    if(word=="scissors")return "Scissors";
}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord="user".fontsize(2).sub();
    const smallCompWord="comp".fontsize(2).sub();
    result_p.innerHTML = convertToCapital(userChoice)+ ""+smallUserWord+"  beats " +convertToCapital(computerChoice)+""+smallCompWord+ ".  You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){ userChoice_div.classList.remove('green-glow')},300);
}
function lose(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord="user".fontsize(2).sub();
    const smallCompWord="comp".fontsize(2).sub();
    result_p.innerHTML = convertToCapital(userChoice)+ ""+smallUserWord+"  loses to " +convertToCapital(computerChoice)+""+smallCompWord+ ".  You lost..";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){ userChoice_div.classList.remove('red-glow')},300);
    
}
function draw(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord="user".fontsize(2).sub();
    const smallCompWord="comp".fontsize(2).sub();
    result_p.innerHTML = convertToCapital(userChoice)+ ""+smallUserWord+"  equals " +convertToCapital(computerChoice)+""+smallCompWord+ ".  Oops it's a tie.";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){ userChoice_div.classList.remove('gray-glow')},300);
    
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "stonescissors":
        case "paperstone":
        case "scissorspaper":
            win(userChoice,computerChoice);
            break;
        case "stonepaper":
        case "paperscissors":
        case "scissorsstone":
            lose(userChoice,computerChoice);
            break;
        case "stonestone":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice,computerChoice);
            break;
    }
}
/*btnClear.addEventListener('click',()=>{
    inputs.forEach(input=>input.value='');
});*/

function main(){
    stone_div.addEventListener('click',function(){
        game("stone");
    })
    paper_div.addEventListener('click',function(){
        game("paper");
    })
    scissors_div.addEventListener('click',function(){
        game("scissors");
    })
}
main();

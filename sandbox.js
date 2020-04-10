// Testing Code
/*
const computerPlay = () => {
    let game = ['Rock', 'Paper', 'Scissors'];
    let compChoice = game[Math.floor(Math.random() * game.length)];

    return compChoice;
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playerSelection, computerSelection);
*/

// Final Result
// Rock Paper Scissors Function

const game = () => {
    let i = 0;
    const gameChoice = ['Rock', 'Paper', 'Scissors'];
    //let compChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
    const win = 'Winner!';
    const lose = 'Loser :(';
    const draw = "It's a draw!";


    for (i = 0; i < 5; i++){
        let result = ' '
        let playerSelection = prompt('Rock, Paper, Scissors?');
        let compChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1);


        if (playerSelection === 'Rock' && compChoice === gameChoice[2]){
            result = win;
            console.log('Computer Choose: ', compChoice);
            console.log(result);
        }
        else if (playerSelection === 'Rock' && compChoice === gameChoice[1]){
            result = lose;
            console.log('Computer Choose: ', compChoice);
            console.log(result);
        }
        else if (playerSelection === 'Rock' && compChoice === gameChoice[0]){
            result = draw;
            console.log('Computer Choose: ', compChoice);
            console.log(result);
        }
        else if (playerSelection === 'Paper' && compChoice === gameChoice[0]){
            result = win;
            console.log('Computer Choose: ', compChoice);
            console.log(result);
        }
        else if (playerSelection === 'Paper' && compChoice === gameChoice[2]){
            result = lose;
            console.log('Computer Choose: ', compChoice);
            console.log(result);
        }
        else if (playerSelection === 'Paper' && compChoice === gameChoice[1]){
            result = draw;
            console.log('Computer Choose: ', compChoice);
            console.log(result);
        }
        else if (playerSelection === 'Scissors' && compChoice === gameChoice[1]){
            result = win;
            console.log('Computer Choose: ', compChoice);
            console.log(result);
        }
        else if (playerSelection === 'Scissors' && compChoice === gameChoice[0]){
            result = lose;
            console.log('Computer Choose: ', compChoice);
            console.log(result);
        }
        else if (playerSelection === 'Scissors' && compChoice === gameChoice[2]){
            result = draw;
            console.log('Computer Choose: ', compChoice);
            console.log(result);
        }
        else {
            console.log('Invalid Input!, Try Again');
        }

    }

}

game()
